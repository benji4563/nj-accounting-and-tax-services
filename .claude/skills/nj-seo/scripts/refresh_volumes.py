#!/usr/bin/env python3
"""
Re-verify curated cluster keywords against Google Keyword Planner.

The cluster CSVs carry volume/kd/cpc numbers lifted from an Ahrefs or SEMrush
export on the day the file was built. Those numbers go stale, and a stale
number is invisible — nothing in the pipeline flags it, so a post gets written
against a keyword that no longer has the traffic that justified it.

This script re-checks them through AfriShield's shared keyword engine (the
Apify Keyword Planner actor in `00 Knowledge/Keyword Finder`) and writes the
answer back into *separate* columns:

    kp_volume   kp_competition   kp_cpc   kp_updated

Why separate columns and not an overwrite: Ahrefs volume is clickstream-
adjusted, Keyword Planner's is Google-Ads-derived. They are different
measurements of different things and neither is "correct". Overwriting would
silently rewrite the evidence behind past keyword picks and make old decisions
unexplainable. Disagreement is then something you can see and judge.

kp_competition is Google Ads advertiser competition (0-100), not keyword
difficulty. Keyword Planner has no KD figure; the export's `kd` column stays
as it is. For who actually ranks on page one, run serp_competition.py.

This replaced a DataForSEO refresh on 2026-10-09. The old dfs_volume / dfs_kd /
dfs_cpc / dfs_updated columns are left in the files as history and are no
longer written.

Cost: $0.012 per keyword, so by default only the keywords pick_keyword.py can
still choose (blog-post and service-page candidates) are checked. Pass --all
to check every row of every cluster file.

Usage
  python refresh_volumes.py                 # dry run: what it would cost
  python refresh_volumes.py --apply         # actually call and write back
  python refresh_volumes.py --apply --file keyword-clusters.csv
  python refresh_volumes.py --apply --all --max-cost 2.00
  python refresh_volumes.py --report        # show divergence, no API call

Run from anywhere; paths resolve relative to this file.
"""

import argparse
import csv
import glob
import json
import os
import sys
from datetime import date, timedelta
from decimal import Decimal

from pick_keyword import PROJECT, candidate_pool, load_rows, load_used, norm

HERE = os.path.dirname(os.path.abspath(__file__))
CONFIG_PATH = os.path.join(HERE, "dfs_config.json")
# AfriShield's shared keyword engine; it also holds the Apify token (.env).
ENGINE_DIR = os.path.join(os.path.dirname(PROJECT), "00 Knowledge", "Keyword Finder")

NEW_COLUMNS = ["kp_volume", "kp_competition", "kp_cpc", "kp_updated"]
COST_PER_KEYWORD_USD = 0.012
APIFY_MIN_RUN_CAP_USD = 0.50     # Apify rejects a per-run spend cap below this

# Below this, a volume gap is noise rather than signal — Ahrefs and Google Ads
# bucket differently and small keywords bounce around between refreshes.
DIVERGENCE_THRESHOLD = 0.30


def load_config():
    with open(CONFIG_PATH, encoding="utf-8") as fh:
        return json.load(fh)


def cluster_files(config, only=None):
    kw_dir = os.path.join(PROJECT, config["keyword_dir"])
    found = sorted(glob.glob(os.path.join(kw_dir, config["cluster_glob"])))
    if only:
        found = [p for p in found if os.path.basename(p) == only]
        if not found:
            raise SystemExit(f"no cluster file named {only} in {kw_dir}")
    return found


def read_rows(path):
    with open(path, newline="", encoding="utf-8-sig") as fh:
        reader = csv.DictReader(fh)
        return list(reader), reader.fieldnames or []


def write_rows(path, rows, fieldnames):
    for column in NEW_COLUMNS:
        if column not in fieldnames:
            fieldnames.append(column)
    with open(path, "w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def as_number(value):
    try:
        return float(str(value).replace(",", "").strip())
    except (TypeError, ValueError):
        return None


def divergence_report(rows):
    """Rows where the export and Keyword Planner disagree enough to matter."""
    flagged = []
    for row in rows:
        old, new = as_number(row.get("volume")), as_number(row.get("kp_volume"))
        if not old or new is None:
            continue
        delta = (new - old) / old
        if abs(delta) >= DIVERGENCE_THRESHOLD:
            flagged.append((row.get("keyword"), int(old), int(new), delta, row.get("kp_competition")))
    return sorted(flagged, key=lambda r: abs(r[3]), reverse=True)


def print_divergence(path, flagged, limit=None):
    print("  %-40s %8s %8s %8s %5s" % ("keyword", "export", "planner", "delta", "comp"))
    for keyword, old, new, delta, comp in flagged[:limit]:
        print("  %-40s %8d %8d %+7.0f%% %5s" % (keyword[:40], old, new, delta * 100, comp))


def fetch_metrics(keywords, config, max_cost):
    """Keyword Planner metrics for exactly these keywords -> {keyword: engine Keyword}."""
    from pathlib import Path
    sys.path.insert(0, ENGINE_DIR)
    import keyword_orchestrator as engine

    engine.load_dotenv(Path(ENGINE_DIR) / ".env")
    token = os.environ.get("APIFY_TOKEN")
    if not token:
        raise RuntimeError(f"no APIFY_TOKEN (expected in {ENGINE_DIR}{os.sep}.env)")
    if engine.ApifyClient is None:
        raise RuntimeError("'apify-client' is not installed (pip install apify-client)")

    client = engine.ApifyClient(token)
    run = client.actor(engine.APIFY_ACTOR).call(
        run_input={"keywords": keywords, "mode": "metrics",
                   "geo": config.get("country", "us"), "language": config.get("lang", "en")},
        max_total_charge_usd=Decimal(str(max(max_cost, APIFY_MIN_RUN_CAP_USD))),
        run_timeout=timedelta(seconds=600),
        logger=None,
    )
    status = getattr(run, "status", None)
    status = getattr(status, "value", status)
    if status != "SUCCEEDED":
        raise RuntimeError(f"actor run ended with status {status}")

    by_keyword = {}
    for raw in client.dataset(run.default_dataset_id).list_items(clean=True).items:
        keyword, _ = engine.validate_apify(raw)
        if keyword is not None:
            cpc = raw.get("cpc") if isinstance(raw, dict) else None
            by_keyword[norm(keyword.keyword)] = (keyword, cpc)
    return by_keyword


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    parser.add_argument("--apply", action="store_true", help="call the API and write back")
    parser.add_argument("--file", metavar="NAME", help="limit to one cluster file")
    parser.add_argument("--all", action="store_true",
                        help="check every row, not just the keywords still eligible as a primary")
    parser.add_argument("--max-cost", type=float, default=None,
                        help="refuse to run above this estimate, in USD "
                             "(default: max_spend_per_refresh_usd in dfs_config.json)")
    parser.add_argument("--report", action="store_true",
                        help="show divergence from data already on disk, no API call")
    args = parser.parse_args()

    config = load_config()
    paths = cluster_files(config, args.file)
    eligible = None if args.all else {
        norm(r["keyword"]) for r in candidate_pool(load_rows(), load_used(), service_pages=None)}

    all_rows = {}
    keywords = []
    for path in paths:
        rows, fieldnames = read_rows(path)
        all_rows[path] = (rows, fieldnames)
        for row in rows:
            keyword = (row.get("keyword") or "").strip()
            if keyword and (eligible is None or norm(keyword) in eligible):
                keywords.append(keyword)

    unique = list(dict.fromkeys(keywords))
    scope = "keywords" if args.all else "keywords still eligible as a primary"
    print(f"{len(paths)} cluster file(s), {len(unique)} unique {scope}")

    if args.report:
        for path, (rows, _) in all_rows.items():
            flagged = divergence_report(rows)
            if flagged:
                print(f"\n{os.path.basename(path)} - {len(flagged)} diverging:")
                print_divergence(path, flagged)
        return 0

    estimate = COST_PER_KEYWORD_USD * len(unique)
    max_cost = args.max_cost if args.max_cost is not None else config.get("max_spend_per_refresh_usd", 0.60)
    print(f"estimated cost: ${estimate:.2f} (Apify, ${COST_PER_KEYWORD_USD} per keyword)")

    if not args.apply:
        print("\ndry run - nothing called, nothing written. Re-run with --apply.")
        return 0
    if estimate > max_cost:
        print(f"error: estimate exceeds the ${max_cost:.2f} cap; use --file to narrow it "
              "or raise --max-cost.", file=sys.stderr)
        return 1

    try:
        fetched = fetch_metrics(unique, config, max_cost)
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1
    print(f"got {len(fetched)} of {len(unique)} keywords back")

    stamp = date.today().isoformat()
    written = 0
    for path, (rows, fieldnames) in all_rows.items():
        for row in rows:
            hit = fetched.get(norm(row.get("keyword") or ""))
            if not hit:
                continue
            keyword, cpc = hit
            row["kp_volume"] = int(keyword.search_volume_or_interest)
            row["kp_competition"] = "" if keyword.competition_index is None else keyword.competition_index
            row["kp_cpc"] = "" if cpc is None else round(float(cpc), 2)
            row["kp_updated"] = stamp
            written += 1
        write_rows(path, rows, fieldnames)
        print(f"  wrote {os.path.basename(path)}")
    print(f"\nupdated {written} rows")

    for path, (rows, _) in all_rows.items():
        flagged = divergence_report(rows)
        if flagged:
            print(f"\n{os.path.basename(path)} - {len(flagged)} keyword(s) diverge "
                  f"by >{int(DIVERGENCE_THRESHOLD * 100)}%:")
            print_divergence(path, flagged, 15)
    return 0


if __name__ == "__main__":
    sys.exit(main())
