#!/usr/bin/env python3
"""
Re-verify curated cluster keywords against DataForSEO.

The cluster CSVs carry volume/kd/cpc numbers lifted from an Ahrefs or SEMrush
export on the day the file was built. Those numbers go stale, and a stale
number is invisible — nothing in the pipeline flags it, so a post gets written
against a keyword that no longer has the traffic that justified it.

This script fixes that for about 4 cents. It reads every curated cluster CSV,
sends the keywords to DataForSEO in bulk, and writes the answer back into
*separate* columns.

Why separate columns and not an overwrite: Ahrefs volume is clickstream-
adjusted, DataForSEO's is Google-Ads-derived. They are different measurements
of different things and neither is "correct". Overwriting would silently
rewrite the evidence behind past keyword picks and make old decisions
unexplainable. So the export's numbers stay untouched and these land beside
them:

    dfs_volume   dfs_kd   dfs_cpc   dfs_updated

Disagreement is then something you can see and judge, rather than something
that quietly resolves in favour of whichever tool ran last.

Usage
  python refresh_volumes.py                 # dry run: what it would cost
  python refresh_volumes.py --apply         # actually call and write back
  python refresh_volumes.py --apply --file keyword-clusters.csv
  python refresh_volumes.py --report        # show divergence, no API call

Run from anywhere; paths resolve relative to this file.
"""

import argparse
import csv
import glob
import os
import sys
from datetime import date

from dataforseo_client import (
    PROJECT,
    BudgetError,
    DataForSEO,
    DataForSEOError,
    _load_config,
)

NEW_COLUMNS = ["dfs_volume", "dfs_kd", "dfs_cpc", "dfs_updated"]

# Below this, a volume gap is noise rather than signal — Ahrefs and Google Ads
# bucket differently and small keywords bounce around between refreshes.
DIVERGENCE_THRESHOLD = 0.30


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
    """Rows where the export and DataForSEO disagree enough to matter."""
    flagged = []
    for row in rows:
        old, new = as_number(row.get("volume")), as_number(row.get("dfs_volume"))
        if not old or new is None:
            continue
        delta = (new - old) / old
        if abs(delta) >= DIVERGENCE_THRESHOLD:
            flagged.append((row.get("keyword"), int(old), int(new), delta, row.get("dfs_kd")))
    return sorted(flagged, key=lambda r: abs(r[3]), reverse=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    parser.add_argument("--apply", action="store_true", help="call the API and write back")
    parser.add_argument("--file", metavar="NAME", help="limit to one cluster file")
    parser.add_argument("--report", action="store_true",
                        help="show divergence from data already on disk, no API call")
    args = parser.parse_args()

    config = _load_config()
    paths = cluster_files(config, args.file)

    all_rows = {}
    keywords = []
    for path in paths:
        rows, fieldnames = read_rows(path)
        all_rows[path] = (rows, fieldnames)
        for row in rows:
            keyword = (row.get("keyword") or "").strip()
            if keyword:
                keywords.append(keyword)

    unique = list(dict.fromkeys(keywords))
    print(f"{len(paths)} cluster file(s), {len(keywords)} rows, {len(unique)} unique keywords")

    if args.report:
        for path, (rows, _) in all_rows.items():
            flagged = divergence_report(rows)
            if not flagged:
                continue
            print(f"\n{os.path.basename(path)} - {len(flagged)} diverging:")
            print("  %-40s %8s %8s %8s %5s" % ("keyword", "export", "dfs", "delta", "kd"))
            for keyword, old, new, delta, kd in flagged:
                print("  %-40s %8d %8d %+7.0f%% %5s" % (keyword[:40], old, new, delta * 100, kd))
        return 0

    estimate = 0.012 * (len(unique) // 700 + 1) + 0.00012 * len(unique)
    print(f"estimated cost: ${estimate:.4f}")

    if not args.apply:
        print("\ndry run - nothing called, nothing written. Re-run with --apply.")
        return 0

    try:
        dfs = DataForSEO(config=config)
        print(f"balance before: ${dfs.balance():.4f}")
        fetched = dfs.keyword_overview(unique)
    except (BudgetError, DataForSEOError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    by_keyword = {row["keyword"].lower(): row for row in fetched if row.get("keyword")}
    print(f"got {len(by_keyword)} of {len(unique)} keywords back")

    stamp = date.today().isoformat()
    written = 0
    for path, (rows, fieldnames) in all_rows.items():
        for row in rows:
            hit = by_keyword.get((row.get("keyword") or "").strip().lower())
            if not hit:
                continue
            row["dfs_volume"] = hit["volume"]
            row["dfs_kd"] = hit["kd"]
            row["dfs_cpc"] = hit["cpc_usd"]
            row["dfs_updated"] = stamp
            written += 1
        write_rows(path, rows, fieldnames)
        print(f"  wrote {os.path.basename(path)}")

    print(f"\nupdated {written} rows; spent ${dfs.spent_this_run:.4f}; "
          f"balance now ${dfs.balance():.4f}")

    for path, (rows, _) in all_rows.items():
        flagged = divergence_report(rows)
        if flagged:
            print(f"\n{os.path.basename(path)} - {len(flagged)} keyword(s) diverge "
                  f"by >{int(DIVERGENCE_THRESHOLD * 100)}%:")
            print("  %-40s %8s %8s %8s %5s" % ("keyword", "export", "dfs", "delta", "kd"))
            for keyword, old, new, delta, kd in flagged[:15]:
                print("  %-40s %8d %8d %+7.0f%% %5s" % (keyword[:40], old, new, delta * 100, kd))
    return 0


if __name__ == "__main__":
    sys.exit(main())
