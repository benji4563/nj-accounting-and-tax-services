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

# Cluster files are the curated, hand-triaged sources — read every one of
# them and union the result. (This used to read only keyword-clusters.csv and
# fall back to the raw export only if that file was empty, which silently
# hid keyword-clusters-expanded.csv entirely.)
CLUSTER_CSVS = [
    os.path.join(KW_DIR, "keyword-clusters.csv"),
    os.path.join(KW_DIR, "keyword-clusters-expanded.csv"),
]
FULL_CSV = os.path.join(KW_DIR, "Service and Phrase Keywords.csv")
CLUSTERS_FULL_CSV = os.path.join(KW_DIR, "keyword-clusters-full.csv")
USED_MD = os.path.join(KW_DIR, "used-keywords.md")

# keyword-clusters-full.csv is a prior triage pass that explicitly parked
# whole categories as "skip". Those decisions were deliberate and expensive to
# re-derive, so honour them rather than letting the raw export resurrect the
# junk: social/login noise, state sales-tax lookups Google answers itself,
# banking products, careers, and competitor brand names.
SKIP_CLUSTER_PREFIXES = ("I.", "J.", "K.", "L.", "M.")

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


# Words that carry no topical weight — two keywords differing only in these
# are the same search intent wearing different clothes.
_STOP = {"a", "an", "the", "you", "your", "i", "my", "me", "can", "do", "does",
         "did", "is", "are", "was", "to", "of", "for", "and", "or", "it", "if",
         "in", "on", "with", "what", "how", "when", "should", "will", "be",
         "have", "has", "get", "got", "am"}


def terms(s):
    """Content terms only, hyphen-insensitive: 'W-2' and 'w2' are one term."""
    s = re.sub(r"[^a-z0-9\s]", "", norm(s).replace("-", ""))
    return frozenset(t for t in s.split() if t not in _STOP)


def is_near_dupe(candidate, used_terms):
    """True if this keyword would cannibalise a post we already published.

    "can you do taxes without w2", "can i file my taxes without a w2" and
    "can you do your taxes without a w2" are one query. Writing a post per
    variant splits ranking signals across near-identical pages instead of
    concentrating them — the classic cannibalisation own-goal. One post per
    intent; the variants belong in that post's H2s and FAQ.
    """
    c = terms(candidate)
    if not c:
        return False
    for u in used_terms:
        if not u:
            continue
        if c <= u or u <= c:
            return True
        overlap = len(c & u) / len(c | u)
        if overlap >= 0.6:
            return True
    return False


def to_num(v, default=0.0):
    try:
        return float(str(v).replace(",", "").strip() or default)
    except ValueError:
        return default


def load_parked():
    """Keywords a prior triage pass deliberately parked in a skip cluster."""
    parked = set()
    if not os.path.exists(CLUSTERS_FULL_CSV):
        return parked
    with open(CLUSTERS_FULL_CSV, encoding="utf-8-sig") as f:
        for r in csv.DictReader(f):
            cl = (r.get("cluster") or "").strip()
            if cl.startswith(SKIP_CLUSTER_PREFIXES):
                parked.add(norm(r.get("keyword")))
    return parked


def load_rows(include_raw=False):
    """Union every curated cluster file. The raw export is opt-in only.

    The raw research export is seeded on the word "accounting", so it is
    dominated by things an accounting *firm's buyer* would never search:
    bank-product questions ("do checking accounts earn interest"), quality-
    process and IT audits ("layered process audit"), academic theory,
    careers, and competitor brand names. Several of those outrank every
    genuine keyword on volume, so including them by default would hand an
    unattended run a post about checking-account interest rates. Pass
    --include-raw when doing human keyword research; never for auto-pick.
    """
    rows, seen = [], set()

    for path in CLUSTER_CSVS:
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8-sig") as f:
            for r in csv.DictReader(f):
                kw = (r.get("keyword") or "").strip()
                if not kw or norm(kw) in seen:
                    continue
                seen.add(norm(kw))
                rows.append({
                    "keyword": kw,
                    "cluster": (r.get("cluster") or "").strip(),
                    "intent": (r.get("intent") or "").strip(),
                    "volume": to_num(r.get("volume")),
                    "kd": to_num(r.get("kd")),
                    "cpc": to_num(r.get("cpc_usd")),
                    "serp": (r.get("serp_features") or "").strip(),
                    "source": os.path.basename(path),
                })

    if include_raw and os.path.exists(FULL_CSV):
        with open(FULL_CSV, encoding="utf-8-sig") as f:
            for r in csv.DictReader(f):
                kw = (r.get("Keyword") or "").strip()
                if not kw or norm(kw) in seen:
                    continue
                seen.add(norm(kw))
                rows.append({
                    "keyword": kw,
                    "cluster": (r.get("Topic") or r.get("Seed keyword") or "").strip(),
                    "intent": (r.get("Intent") or "").strip(),
                    "volume": to_num(r.get("Volume")),
                    "kd": to_num(r.get("Keyword Difficulty")),
                    "cpc": to_num(r.get("CPC (USD)")),
                    "serp": (r.get("SERP Features") or "").strip(),
                    "source": "raw-export",
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
    ap.add_argument("--include-raw", action="store_true",
                    help="also pull the raw research export "
                         "(research only — see load_rows docstring)")
    args = ap.parse_args()

    rows = load_rows(include_raw=args.include_raw)
    if not rows:
        print(f"No keyword CSV found in {KW_DIR}", file=sys.stderr)
        return 1

    used = load_used()
    parked = load_parked()
    used_terms = [terms(u) for u in used]
    pool = []
    for r in rows:
        k = norm(r["keyword"])
        if k in used:
            continue
        if is_near_dupe(r["keyword"], used_terms):
            continue
        if k in parked:
            continue
        if r["cluster"].startswith(SKIP_CLUSTER_PREFIXES):
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
