#!/usr/bin/env python3
"""
Pick the next blog-post primary keyword + build its cluster.

Reads the keyword research CSVs, drops anything already used as a primary,
filters out noise that will never convert for an accounting firm (job
seekers, recruiters, competitor brand names, software support queries),
then ranks what's left and prints the top candidates with the supporting
keywords that belong in the same post.

Usage
  python pick_keyword.py                    # top 5 candidates
  python pick_keyword.py --top 10
  python pick_keyword.py --cluster "A."     # only clusters starting with "A."
  python pick_keyword.py --pick "some keyword"   # full brief for one keyword
  python pick_keyword.py --json             # machine-readable

Run from anywhere; paths resolve relative to this file.
"""

import argparse
import csv
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
# scripts/ -> nj-seo/ -> skills/ -> .claude/ -> project root
PROJECT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
KW_DIR = os.path.join(PROJECT, "Keywords for accountant")

CLUSTERS_CSV = os.path.join(KW_DIR, "keyword-clusters.csv")
FULL_CSV = os.path.join(KW_DIR, "Service and Phrase Keywords.csv")
USED_MD = os.path.join(KW_DIR, "used-keywords.md")

# Intent that will never become a client. An accounting firm does not want
# to rank for people looking for a job, a competitor, or QuickBooks support.
NOISE = [
    r"\brecruit", r"\bjobs?\b", r"\bsalary\b", r"\bsalaries\b", r"\bintern",
    r"\bhiring\b", r"\bcareer", r"\bresume\b", r"\bcourse", r"\bdegree\b",
    r"\bcertification\b", r"\bexam\b", r"\bcpa exam\b", r"\bschool\b",
    r"\bclass(es)?\b", r"\btraining\b", r"\bstudent",
    # competitor / vendor brands — we can mention them, not target them
    r"\bquickbooks\b", r"\bxero\b", r"\bfreshbooks\b", r"\bwave\b",
    r"\bbench\b", r"\bpilot\b", r"\bh&r block\b", r"\bturbotax\b",
    r"\bintuit\b", r"\bgusto\b", r"\badp\b", r"\bnetsuite\b", r"\bsage\b",
    r"\bchime\b", r"\bnovo\b", r"\bmercury\b", r"\bbluevine\b",
    r"\bdeloitte\b", r"\bpwc\b", r"\bkpmg\b", r"\bernst\b", r"\bey\b",
    r"\brobert half\b",
    # navigational / support
    r"\blogin\b", r"\bsign in\b", r"\bcustomer service\b", r"\bphone number\b",
    r"\bnear me\b",  # served by city pages, not blog posts
]
NOISE_RE = re.compile("|".join(NOISE), re.I)


def norm(s):
    return re.sub(r"\s+", " ", (s or "")).strip().lower()


def load_used():
    """Primary keywords already spent — never reuse one as a primary."""
    used = set()
    if not os.path.exists(USED_MD):
        return used
    with open(USED_MD, encoding="utf-8") as f:
        for line in f:
            if not line.strip().startswith("|"):
                continue
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            # | date | primary keyword | post URL | cluster |
            if len(cells) >= 2 and cells[0] and cells[0][0].isdigit():
                used.add(norm(cells[1]))
    return used


def to_num(v, default=0.0):
    try:
        return float(str(v).replace(",", "").strip() or default)
    except ValueError:
        return default


def load_rows():
    """Prefer the clustered CSV; fall back to the raw research export."""
    rows = []
    if os.path.exists(CLUSTERS_CSV):
        with open(CLUSTERS_CSV, encoding="utf-8-sig") as f:
            for r in csv.DictReader(f):
                rows.append({
                    "keyword": (r.get("keyword") or "").strip(),
                    "cluster": (r.get("cluster") or "").strip(),
                    "intent": (r.get("intent") or "").strip(),
                    "volume": to_num(r.get("volume")),
                    "kd": to_num(r.get("kd")),
                    "cpc": to_num(r.get("cpc_usd")),
                    "serp": (r.get("serp_features") or "").strip(),
                    "source": "clusters",
                })
    if not rows and os.path.exists(FULL_CSV):
        with open(FULL_CSV, encoding="utf-8-sig") as f:
            for r in csv.DictReader(f):
                rows.append({
                    "keyword": (r.get("Keyword") or "").strip(),
                    "cluster": (r.get("Topic") or r.get("Seed keyword") or "").strip(),
                    "intent": (r.get("Intent") or "").strip(),
                    "volume": to_num(r.get("Volume")),
                    "kd": to_num(r.get("Keyword Difficulty")),
                    "cpc": to_num(r.get("CPC (USD)")),
                    "serp": (r.get("SERP Features") or "").strip(),
                    "source": "full",
                })
    return [r for r in rows if r["keyword"]]


def score(r):
    """
    Favour real search demand that we can actually rank for, and that a
    paying client would plausibly type. Volume drives it; difficulty is a
    penalty; commercial CPC is a weak proxy for buyer intent; informational
    intent gets a nudge because that is what a blog post answers best.
    """
    s = r["volume"] / (1.0 + r["kd"] / 12.0)
    s *= 1.0 + min(r["cpc"], 30.0) / 60.0
    intent = r["intent"].lower()
    if "informational" in intent:
        s *= 1.25
    if "transactional" in intent:
        s *= 1.10
    # question-shaped keywords make the cleanest featured-snippet targets
    if re.match(r"^(what|why|how|when|do|does|is|are|should|can)\b", r["keyword"], re.I):
        s *= 1.20
    return s


def build_cluster(rows, primary, limit=14):
    """Supporting keywords: same cluster, unused, ranked. These become H2s."""
    pc = primary["cluster"]
    sibs = [
        r for r in rows
        if r["cluster"] == pc and norm(r["keyword"]) != norm(primary["keyword"])
    ]
    # de-dupe by keyword text
    seen, out = set(), []
    for r in sorted(sibs, key=score, reverse=True):
        k = norm(r["keyword"])
        if k in seen:
            continue
        seen.add(k)
        out.append(r)
        if len(out) >= limit:
            break
    return out


def slugify(kw):
    s = re.sub(r"[^a-z0-9\s-]", "", kw.lower())
    s = re.sub(r"\s+", "-", s.strip())
    return re.sub(r"-{2,}", "-", s)[:60].strip("-")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--top", type=int, default=5)
    ap.add_argument("--cluster", default=None, help="only clusters containing this text")
    ap.add_argument("--pick", default=None, help="full brief for this exact keyword")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    rows = load_rows()
    if not rows:
        print(f"No keyword CSV found in {KW_DIR}", file=sys.stderr)
        return 1

    used = load_used()
    pool = []
    for r in rows:
        k = norm(r["keyword"])
        if k in used:
            continue
        if NOISE_RE.search(r["keyword"]):
            continue
        if r["volume"] < 30:          # too thin to justify a full post
            continue
        if args.cluster and args.cluster.lower() not in r["cluster"].lower():
            continue
        pool.append(r)

    # de-dupe across the two CSVs
    seen, uniq = set(), []
    for r in sorted(pool, key=score, reverse=True):
        k = norm(r["keyword"])
        if k in seen:
            continue
        seen.add(k)
        uniq.append(r)

    if args.pick:
        target = norm(args.pick)
        match = next((r for r in uniq if norm(r["keyword"]) == target), None)
        if not match:
            match = next((r for r in rows if norm(r["keyword"]) == target), None)
        if not match:
            print(f"Keyword not found: {args.pick}", file=sys.stderr)
            return 1
        brief = {
            "primary": match,
            "slug": slugify(match["keyword"]),
            "cluster_name": match["cluster"],
            "supporting": build_cluster(rows, match),
        }
        if args.json:
            print(json.dumps(brief, indent=2))
        else:
            p = brief["primary"]
            print(f"PRIMARY   {p['keyword']}")
            print(f"SLUG      {brief['slug']}")
            print(f"CLUSTER   {p['cluster']}")
            print(f"METRICS   vol {int(p['volume'])} · KD {int(p['kd'])} · "
                  f"CPC ${p['cpc']:.2f} · {p['intent']}")
            print(f"SERP      {p['serp']}")
            print("\nSUPPORTING KEYWORDS (candidate H2s / FAQ questions):")
            for s in brief["supporting"]:
                print(f"  - {s['keyword']}  (vol {int(s['volume'])}, KD {int(s['kd'])})")
        return 0

    top = uniq[:args.top]
    if args.json:
        print(json.dumps([{**r, "slug": slugify(r["keyword"])} for r in top], indent=2))
    else:
        print(f"{len(uniq)} unused keywords in pool "
              f"({len(used)} primaries already spent)\n")
        for i, r in enumerate(top, 1):
            print(f"{i}. {r['keyword']}")
            print(f"   vol {int(r['volume'])} · KD {int(r['kd'])} · "
                  f"CPC ${r['cpc']:.2f} · {r['intent']}")
            print(f"   cluster: {r['cluster']}")
            print(f"   slug:    {slugify(r['keyword'])}\n")
        print("Next: python pick_keyword.py --pick \"<keyword>\"  for the full brief")
    return 0


if __name__ == "__main__":
    sys.exit(main())
