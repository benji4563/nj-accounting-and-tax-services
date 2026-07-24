#!/usr/bin/env python3
"""
Minimal DataForSEO client for the AI-SEO keyword pipeline.

Deliberately narrow. DataForSEO is *not* the discovery layer here — Ahrefs /
SEMrush exports remain the source of new keywords, because discovery on
DataForSEO costs ~$0.09 per seed expansion and you need dozens of them. What
this client does is the cheap half: re-verify volume and difficulty for the
small curated set we actually act on, and pull a SERP when a post needs one.

Costs, confirmed against this account's own /appendix/user_data price tree:

  keyword_overview/live   $0.012 per request + $0.00012 per keyword
                          (<= 700 keywords per request, so ~$0.10 per 700)
  serp .../live           $0.002 per request (one keyword's SERP)

Two guards exist because the working balance is small:
  * a budget floor — refuse to call at all below `budget_floor_usd`
  * a per-run cap  — refuse a single run that would exceed `max_spend_per_run_usd`
Every call is appended to dfs_ledger.jsonl so spend is auditable after the
fact rather than inferred.

No third-party packages: stdlib only, matching the other scripts here.

Usage as a library
    from dataforseo_client import DataForSEO
    dfs = DataForSEO()
    print(dfs.balance())
    rows = dfs.keyword_overview(["accounting firms chicago", ...])

Usage as a CLI (a cheap way to sanity-check credentials and balance)
    python dataforseo_client.py --balance
    python dataforseo_client.py --lookup "accounting firms chicago" "bookkeeping nj"
"""

import argparse
import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
# scripts/ -> nj-seo/ -> skills/ -> .claude/ -> project root
PROJECT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))

CONFIG_PATH = os.path.join(HERE, "dfs_config.json")
LEDGER_PATH = os.path.join(HERE, "dfs_ledger.jsonl")

API_ROOT = "https://api.dataforseo.com/v3/"

# keyword_overview accepts at most 700 keywords in one request. Chunking is
# handled here so callers can pass a list of any length.
MAX_KEYWORDS_PER_REQUEST = 700


class BudgetError(RuntimeError):
    """Raised when a call would breach the balance floor or the per-run cap."""


class DataForSEOError(RuntimeError):
    """Raised when the API reports a task-level failure."""


def _load_config(path=CONFIG_PATH):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def _load_env_file(path):
    """Parse a KEY=VALUE .env file. Returns {} if it isn't there.

    Scripts get run straight from a shell that has never sourced .env.local,
    so relying on the ambient environment alone would make this work for the
    MCP server and fail for us.
    """
    out = {}
    if not os.path.exists(path):
        return out
    with open(path, encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            out[key.strip()] = value.strip().strip('"').strip("'")
    return out


def _credentials():
    """Find login/password, preferring the real environment over .env.local.

    Accepts both naming conventions on purpose: DATAFORSEO_LOGIN/PASSWORD is
    what .env.example documents, DATAFORSEO_USERNAME/PASSWORD is what the MCP
    server expects. Supporting both means one credential source for both
    consumers instead of two that can drift apart.
    """
    env = dict(_load_env_file(os.path.join(PROJECT, ".env.local")))
    env.update({k: v for k, v in os.environ.items() if v})

    login = env.get("DATAFORSEO_LOGIN") or env.get("DATAFORSEO_USERNAME")
    password = env.get("DATAFORSEO_PASSWORD")
    if not login or not password:
        raise DataForSEOError(
            "No DataForSEO credentials. Set DATAFORSEO_LOGIN and "
            "DATAFORSEO_PASSWORD in the environment or in .env.local at the "
            "project root."
        )
    return login, password


class DataForSEO:
    def __init__(self, config=None, dry_run=False):
        self.config = config or _load_config()
        self.dry_run = dry_run
        login, password = _credentials()
        self._auth = base64.b64encode(f"{login}:{password}".encode()).decode()
        self.spent_this_run = 0.0

    # ---------------------------------------------------------------- http

    def _post(self, path, payload, _retries=2):
        """POST to the API and return the decoded body.

        Retries only on transport errors and 5xx — a task-level rejection is
        deterministic, so retrying it just burns time (and, if the path were
        valid, money).
        """
        body = json.dumps(payload).encode()
        request = urllib.request.Request(
            API_ROOT + path,
            data=body,
            headers={
                "Authorization": "Basic " + self._auth,
                "Content-Type": "application/json",
            },
        )
        try:
            with urllib.request.urlopen(request, timeout=90) as response:
                return json.load(response)
        except (urllib.error.URLError, TimeoutError) as exc:
            status = getattr(exc, "code", None)
            if _retries > 0 and (status is None or status >= 500):
                time.sleep(2)
                return self._post(path, payload, _retries - 1)
            raise DataForSEOError(f"{path}: {exc}") from exc

    def _record(self, path, cost, keywords):
        self.spent_this_run += cost
        entry = {
            "ts": datetime.now(timezone.utc).isoformat(timespec="seconds"),
            "endpoint": path,
            "keywords": keywords,
            "cost_usd": round(cost, 5),
        }
        with open(LEDGER_PATH, "a", encoding="utf-8") as fh:
            fh.write(json.dumps(entry) + "\n")

    def _call(self, path, payload, keywords=0, estimated_cost=0.0):
        """Budget-guarded API call. Returns the first task's `result`."""
        floor = float(self.config.get("budget_floor_usd", 0))
        cap = float(self.config.get("max_spend_per_run_usd", 0)) or float("inf")

        if self.spent_this_run + estimated_cost > cap:
            raise BudgetError(
                f"run cap ${cap:.2f} would be exceeded "
                f"(spent ${self.spent_this_run:.4f}, this call ~${estimated_cost:.4f})"
            )

        if floor:
            available = self.balance()
            if available - estimated_cost < floor:
                raise BudgetError(
                    f"balance ${available:.4f} minus this call (~${estimated_cost:.4f}) "
                    f"would drop below the ${floor:.2f} floor"
                )

        if self.dry_run:
            print(f"[dry-run] {path}  {keywords} keywords  ~${estimated_cost:.5f}")
            return []

        payload_response = self._post(path, payload)
        self._record(path, payload_response.get("cost", 0.0), keywords)

        task = payload_response["tasks"][0]
        if task["status_code"] != 20000:
            raise DataForSEOError(
                f"{path}: {task['status_code']} {task['status_message']}"
            )
        return task.get("result") or []

    # ------------------------------------------------------------ endpoints

    def balance(self):
        """Current account balance in USD. Free — /appendix/user_data costs $0.

        This one is GET, not POST, unlike every other endpoint here.
        """
        request = urllib.request.Request(
            API_ROOT + "appendix/user_data",
            headers={"Authorization": "Basic " + self._auth},
        )
        with urllib.request.urlopen(request, timeout=60) as response:
            body = json.load(response)
        return float(body["tasks"][0]["result"][0]["money"]["balance"])

    def keyword_overview(self, keywords):
        """Volume, CPC, competition and difficulty for each keyword.

        Chunks automatically. Returns a list of flat dicts — the raw response
        nests these under keyword_info/keyword_properties, which is tedious
        for every caller to unpick.
        """
        keywords = [k for k in dict.fromkeys(k.strip() for k in keywords) if k]
        rows = []
        for start in range(0, len(keywords), MAX_KEYWORDS_PER_REQUEST):
            batch = keywords[start : start + MAX_KEYWORDS_PER_REQUEST]
            payload = [
                {
                    "keywords": batch,
                    "location_code": self.config["location_code"],
                    "language_code": self.config["language_code"],
                }
            ]
            result = self._call(
                "dataforseo_labs/google/keyword_overview/live",
                payload,
                keywords=len(batch),
                estimated_cost=0.012 + 0.00012 * len(batch),
            )
            for item in (result[0]["items"] if result else []) or []:
                info = item.get("keyword_info") or {}
                props = item.get("keyword_properties") or {}
                rows.append(
                    {
                        "keyword": item.get("keyword"),
                        "volume": info.get("search_volume"),
                        "cpc_usd": info.get("cpc"),
                        "competition": info.get("competition"),
                        "kd": props.get("keyword_difficulty"),
                    }
                )
        return rows

    def serp(self, keyword, depth=10):
        """Live organic SERP for one keyword. $0.002.

        Returns (organic_results, people_also_ask). The PAA questions feed the
        FAQ block and its schema directly, which is the main reason to pull a
        SERP here rather than read one by hand.
        """
        payload = [
            {
                "keyword": keyword,
                "location_code": self.config["location_code"],
                "language_code": self.config["language_code"],
                "depth": depth,
            }
        ]
        result = self._call(
            "serp/google/organic/live/advanced",
            payload,
            keywords=1,
            estimated_cost=0.002,
        )
        organic, questions = [], []
        for item in (result[0].get("items") if result else []) or []:
            kind = item.get("type")
            if kind == "organic":
                organic.append(
                    {
                        "rank": item.get("rank_absolute"),
                        "url": item.get("url"),
                        "title": item.get("title"),
                        "description": item.get("description"),
                    }
                )
            elif kind == "people_also_ask":
                for element in item.get("items") or []:
                    if element.get("title"):
                        questions.append(element["title"])
        return organic, questions


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    parser.add_argument("--balance", action="store_true", help="print balance and exit")
    parser.add_argument("--lookup", nargs="+", metavar="KW", help="volume/KD for keywords")
    parser.add_argument("--serp", metavar="KW", help="pull one live SERP")
    parser.add_argument("--dry-run", action="store_true", help="cost only, no calls")
    args = parser.parse_args()

    try:
        dfs = DataForSEO(dry_run=args.dry_run)
        if args.balance or not (args.lookup or args.serp):
            print(f"balance: ${dfs.balance():.4f}")
            return 0
        if args.lookup:
            for row in dfs.keyword_overview(args.lookup):
                print(
                    "%-44s vol=%-7s kd=%-5s cpc=%s"
                    % (row["keyword"], row["volume"], row["kd"], row["cpc_usd"])
                )
        if args.serp:
            organic, questions = dfs.serp(args.serp)
            for row in organic:
                print("%2s  %s" % (row["rank"], row["url"]))
            if questions:
                print("\nPeople also ask:")
                for question in questions:
                    print("  -", question)
        if not args.dry_run:
            print(f"\nspent this run: ${dfs.spent_this_run:.5f}")
    except (BudgetError, DataForSEOError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
