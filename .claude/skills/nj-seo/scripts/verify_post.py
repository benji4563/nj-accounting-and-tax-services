#!/usr/bin/env python3
"""
Check a blog post page.tsx against the on-page SEO checklist and the
NJ template rules.

This is a static check on the source file — it catches the things that are
cheap to get wrong and expensive to notice later (missing schema, a keyword
that never appears in the first 100 words, contrast classes that fail WCAG,
curly quotes that will break the build). It does not judge whether the
writing is any good.

Usage
  python verify_post.py app/blog/<slug>/page.tsx --keyword "primary keyword"
  python verify_post.py app/blog/<slug>/page.tsx --keyword "..." --json

Exit code is 1 if any FAIL, else 0.
"""

import argparse
import json
import os
import re
import sys

# Windows consoles default to cp1252 and die on any non-Latin-1 glyph.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))

CURLY = {"‘": "U+2018", "’": "U+2019",
         "“": "U+201C", "”": "U+201D"}


def strip_jsx_text(src):
    """Rough plain-text extraction: drop tags, entities, and expressions."""
    body = src
    body = re.sub(r"\{/\*.*?\*/\}", " ", body, flags=re.S)   # jsx comments
    body = re.sub(r"<[^>]+>", " ", body)                      # tags
    body = re.sub(r"\{[^{}]*\}", " ", body)                   # simple exprs
    body = body.replace("&rsquo;", "'").replace("&lsquo;", "'")
    body = body.replace("&ldquo;", '"').replace("&rdquo;", '"')
    body = body.replace("&mdash;", "—").replace("&amp;", "&")
    body = re.sub(r"&[a-z]+;", " ", body)
    return re.sub(r"\s+", " ", body).strip()


def check(src, path, keyword):
    res = []

    def add(status, name, detail=""):
        res.append({"status": status, "name": name, "detail": detail})

    # ---------- head / metadata ----------
    m = re.search(r"const TITLE\s*=\s*\n?\s*['\"](.+?)['\"]", src, re.S)
    title = m.group(1) if m else ""
    if not title:
        add("FAIL", "Title tag", "TITLE constant not found")
    elif not 30 <= len(title) <= 65:
        add("WARN", "Title length", f"{len(title)} chars (target 50–60)")
    else:
        add("PASS", "Title length", f"{len(title)} chars")

    m = re.search(r"const DESCRIPTION\s*=\s*\n?\s*['\"](.+?)['\"]", src, re.S)
    desc = m.group(1) if m else ""
    if not desc:
        add("FAIL", "Meta description", "DESCRIPTION constant not found")
    elif not 120 <= len(desc) <= 175:
        add("WARN", "Meta description length", f"{len(desc)} chars (target 150–160)")
    else:
        add("PASS", "Meta description length", f"{len(desc)} chars")

    for label, pat in [
        ("Canonical", r"alternates:\s*\{\s*canonical"),
        ("OpenGraph", r"openGraph:"),
        ("OG image", r"images:\s*\["),
        ("Twitter card", r"card:\s*['\"]summary_large_image['\"]"),
        ("Published date", r"const PUBLISHED"),
        ("Modified date", r"const MODIFIED"),
    ]:
        add("PASS" if re.search(pat, src) else "FAIL", label)

    # ---------- schema ----------
    for label, pat in [
        ("Article schema", r"blogPostingJsonLd"),
        ("FAQ schema", r"faqPageJsonLd"),
        ("Breadcrumb schema", r"breadcrumbJsonLd"),
    ]:
        add("PASS" if re.search(pat, src) else "FAIL", label)

    # ---------- structure ----------
    h1s = re.findall(r"<h1\b", src)
    add("PASS" if len(h1s) == 1 else "FAIL", "Exactly one H1", f"found {len(h1s)}")

    h2s = re.findall(r"<h2\b", src)
    add("PASS" if len(h2s) >= 5 else "WARN", "H2 count", f"found {len(h2s)} (expect 7–8)")

    toc = re.findall(r"\{\s*id:\s*['\"]([^'\"]+)['\"]", src)
    ids = re.findall(r"<Section[^>]*\bid=\{?['\"]([^'\"}]+)['\"]", src)
    missing = [t for t in toc if t not in ids]
    if not toc:
        add("FAIL", "Table of contents", "no TOC entries found")
    elif missing:
        add("FAIL", "TOC anchors resolve", f"no section for: {', '.join(missing)}")
    else:
        add("PASS", "TOC anchors resolve", f"{len(toc)} anchors resolve")

    for label, pat in [
        ("TableOfContents component", r"<TableOfContents"),
        ("BackToTop component", r"<BackToTop"),
        ("AuthorBio component", r"<AuthorBio"),
        ("RelatedPosts component", r"<RelatedPosts"),
        ("Visible breadcrumb nav", r'aria-label="Breadcrumb"'),
        ("Answer box", r"Short answer"),
    ]:
        add("PASS" if re.search(pat, src) else "FAIL", label)

    faqs = re.findall(r"\bq:\s*['\"]", src)
    add("PASS" if 4 <= len(faqs) <= 10 else "WARN",
        "FAQ count", f"{len(faqs)} (target 6–8)")

    # ---------- keyword placement ----------
    if keyword:
        text = strip_jsx_text(src)
        # locate the answer box, which is where the first body copy starts
        idx = text.lower().find("short answer")
        window = text[idx:idx + 900] if idx >= 0 else text[:900]
        first100 = " ".join(window.split()[:100])

        # Match on content terms, not an exact substring. Search engines
        # normalise "W-2"/"w2" and tolerate word order, so demanding a literal
        # match would fail correctly-typeset copy and train people to ignore
        # this check. Require every meaningful term to be present instead.
        STOP = {"a", "an", "the", "you", "your", "i", "my", "can", "do", "does",
                "is", "are", "to", "of", "for", "and", "or", "it", "if", "in",
                "on", "with", "what", "how", "when", "should", "will", "be"}

        def terms(s):
            s = re.sub(r"[^a-z0-9\s]", "", s.lower().replace("-", ""))
            return [t for t in s.split() if t not in STOP]

        def covers(haystack, kw):
            hay = set(terms(haystack))
            need = terms(kw)
            return need and all(t in hay for t in need)

        missing_terms = [t for t in terms(keyword)
                         if t not in set(terms(first100))]
        add("PASS" if covers(first100, keyword) else "FAIL",
            "Primary keyword in first 100 words",
            "" if covers(first100, keyword)
            else f"missing term(s): {', '.join(missing_terms)}")

        add("PASS" if covers(title, keyword) else "WARN",
            "Primary keyword in title")
        add("PASS" if covers(desc, keyword) else "WARN",
            "Primary keyword in meta description")

        slug_m = re.search(r"const SLUG\s*=\s*['\"]([^'\"]+)['\"]", src)
        slug = slug_m.group(1) if slug_m else ""
        add("PASS" if covers(slug.replace("-", " "), keyword) else "WARN",
            "Primary keyword in slug", f"slug='{slug}'")

    # ---------- links ----------
    ext = re.findall(r'href="(https?://[^"]+)"', src)
    ext = [u for u in ext if "njaccountstax.com" not in u]
    if len(ext) >= 2:
        add("PASS", "External authority links", f"{len(ext)} found")
    else:
        add("FAIL", "External authority links", f"{len(ext)} (need 2–3)")

    # External links may be raw <a> tags or go through the SourceLink helper,
    # which carries the rel once for all of its uses. Both are fine; a raw <a>
    # to an external host without rel is not.
    raw_anchors = re.findall(r"<a\b[^>]*href=\"https?://[^\"]+\"[^>]*>", src)
    raw_unsafe = [a for a in raw_anchors
                  if "njaccountstax.com" not in a
                  and "noopener" not in a]
    helper_ok = bool(re.search(
        r"function SourceLink[\s\S]{0,400}?rel=\"noopener noreferrer\"", src))
    uses_helper = bool(re.search(r"<SourceLink\b", src))
    if raw_unsafe:
        add("FAIL", "External links use rel=noopener noreferrer",
            f"{len(raw_unsafe)} raw <a> without rel")
    elif uses_helper and not helper_ok:
        add("FAIL", "External links use rel=noopener noreferrer",
            "SourceLink helper is missing the rel attribute")
    else:
        add("PASS", "External links use rel=noopener noreferrer")

    internal = set(re.findall(r'href="(/[^"#][^"]*)"', src))
    add("PASS" if len(internal) >= 3 else "WARN",
        "Internal links", f"{len(internal)} unique ({', '.join(sorted(internal)[:6])})")

    # ---------- images ----------
    imgs = re.findall(r"<Image\b[^>]*?/>", src, re.S)
    alts = re.findall(r'alt="([^"]*)"', src)
    empty_alt = [a for a in alts if not a.strip()]
    add("PASS" if imgs else "FAIL", "Images present", f"{len(imgs)} <Image> tags")
    add("PASS" if not empty_alt else "FAIL",
        "All images have alt text", f"{len(empty_alt)} empty")
    add("PASS" if re.search(r"priority", src) else "WARN",
        "Hero image has priority")
    lazy = len(re.findall(r'loading="lazy"', src))
    add("PASS" if lazy >= max(0, len(imgs) - 1) else "WARN",
        "Below-fold images lazy-loaded", f"{lazy} lazy of {len(imgs)} images")
    webp = re.findall(r"\.webp", src)
    add("PASS" if webp else "WARN", "WebP format", f"{len(webp)} refs")

    # ---------- accessibility / brand rules ----------
    bad_contrast = re.findall(r"text-graphite/(?:40|50|60)\b", src)
    add("PASS" if not bad_contrast else "FAIL",
        "Muted text contrast (no /40 /50 /60)",
        f"{len(bad_contrast)} occurrences — use text-graphite/75")

    bad_persimmon = re.findall(r"\btext-persimmon\b(?!-deep)", src)
    # hover: states are fine; only flag non-hover text-persimmon
    bad_persimmon = [b for b in re.findall(r"(\S*text-persimmon\b(?!-deep))", src)
                     if not b.startswith("hover:") and "group-hover:" not in b]
    add("PASS" if not bad_persimmon else "WARN",
        "Persimmon as text colour",
        f"{len(bad_persimmon)} non-hover uses — prefer text-persimmon-deep")

    # ---------- build hazards ----------
    # A curly quote inside JSX *text* is fine and renders correctly — the whole
    # site is full of them deliberately. The build-breaking case is a curly
    # quote sitting where a string delimiter belongs (after = or : or an open
    # paren/bracket), which is what silently happens when an editor
    # "smartens" a quote in `const TITLE = 'NJ's ...'`.
    # Only assignment (`= ’`) and object-value (`: ’`) positions are real
    # hazards. A comma or paren before a curly quote is almost always prose
    # ("office supplies," "gifts received,") and flagging it trains people to
    # ignore this check.
    delim_hazard = re.findall(r"(?:=|^\s*\w+\s*:)\s*[‘’“”]", src, re.M)
    if delim_hazard:
        add("FAIL", "No curly quotes in string-delimiter position",
            f"{len(delim_hazard)} found — will break the SWC parse")
    else:
        add("PASS", "No curly quotes in string-delimiter position")

    # Straight apostrophe inside a single-quoted JS string is the same bug
    # from the other direction: 'NJ's Accounting' terminates early.
    bad_str = re.findall(r"'[^'\n]*\b\w'\w", src)
    if bad_str:
        add("WARN", "Unescaped apostrophe in single-quoted string",
            f"{len(bad_str)} suspect — use \\' or double quotes")
    else:
        add("PASS", "Unescaped apostrophe in single-quoted string")

    if re.search(r"prose-post", src):
        add("FAIL", "No undefined .prose-post wrapper",
            "class is not defined anywhere — paragraphs will collide")
    else:
        add("PASS", "No undefined .prose-post wrapper")

    return res


def check_registrations(slug):
    """The three places a post must be registered to actually ship."""
    out = []
    idx = os.path.join(PROJECT, "app", "blog", "page.tsx")
    smap = os.path.join(PROJECT, "app", "sitemap.xml", "route.ts")
    used = os.path.join(PROJECT, "Keywords for accountant", "used-keywords.md")
    for label, p in [("Blog index", idx), ("Sitemap", smap), ("used-keywords.md", used)]:
        if not os.path.exists(p):
            out.append({"status": "WARN", "name": f"{label} registration",
                        "detail": f"file not found: {p}"})
            continue
        with open(p, encoding="utf-8") as f:
            ok = slug in f.read()
        out.append({"status": "PASS" if ok else "FAIL",
                    "name": f"{label} registration",
                    "detail": "" if ok else f"'{slug}' not listed"})
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("page", help="path to app/blog/<slug>/page.tsx")
    ap.add_argument("--keyword", default=None)
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    path = args.page if os.path.isabs(args.page) else os.path.join(PROJECT, args.page)
    if not os.path.exists(path):
        print(f"Not found: {path}", file=sys.stderr)
        return 1
    with open(path, encoding="utf-8") as f:
        src = f.read()

    results = check(src, path, args.keyword)
    m = re.search(r"const SLUG\s*=\s*['\"]([^'\"]+)['\"]", src)
    if m:
        results += check_registrations(m.group(1))

    fails = [r for r in results if r["status"] == "FAIL"]
    warns = [r for r in results if r["status"] == "WARN"]

    if args.json:
        print(json.dumps({"results": results,
                          "fail": len(fails), "warn": len(warns)}, indent=2))
    else:
        for r in results:
            mark = {"PASS": "  ok ", "WARN": "warn", "FAIL": "FAIL"}[r["status"]]
            line = f"[{mark}] {r['name']}"
            if r["detail"]:
                line += f" — {r['detail']}"
            print(line)
        print(f"\n{len(results)} checks · {len(fails)} failed · {len(warns)} warnings")
        if fails:
            print("Fix every FAIL before shipping.")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
