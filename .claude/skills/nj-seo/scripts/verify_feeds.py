#!/usr/bin/env python3
"""
Validate the live rss.xml and sitemap.xml after a deploy.

WHY THIS EXISTS
---------------
On 2026-09-25 the production RSS feed was malformed and nobody noticed. The
concatenated-template-literal form used to build the XML miscompiled in the
production build only — SWC dropped the literal segment following each `${}`
interpolation, deleting every closing tag inside <item>. The dev server was
unaffected, so it looked perfect on localhost and shipped broken.

Two things made that expensive:
  - a malformed feed silently stops LinkedIn auto-posting, because Zapier
    cannot parse it
  - a malformed sitemap silently degrades indexing

Both fail quietly. Hence an explicit post-deploy check that actually parses
the XML rather than just checking for HTTP 200. A 200 proves nothing here.

USAGE
-----
  python verify_feeds.py                      # check production
  python verify_feeds.py --base http://localhost:3000
  python verify_feeds.py --expect-linkedin 3  # also require >= 3 posts to
                                              # carry LinkedIn copy

Exit 0 if everything parses and the structure is sane, 1 otherwise.
"""

import argparse
import sys
import urllib.request
import xml.etree.ElementTree as ET

CONTENT_NS = {"content": "http://purl.org/rss/1.0/modules/content/"}
LINKEDIN_MAX = 3000


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "nj-feed-verifier/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def check_rss(base, expect_linkedin):
    url = f"{base}/rss.xml"
    problems = []
    raw = fetch(url)

    try:
        root = ET.fromstring(raw)
    except ET.ParseError as e:
        # This is the failure that shipped. Be loud about it.
        return [f"rss.xml does NOT parse as XML: {e}. The feed is malformed — "
                f"Zapier cannot read it and LinkedIn auto-posting is silently dead."]

    items = root.findall(".//item")
    if not items:
        problems.append("rss.xml parsed but contains zero <item> elements")

    with_copy = 0
    for it in items:
        title_el = it.find("title")
        title = (title_el.text or "?") if title_el is not None else "?"

        for tag in ("title", "link", "guid", "pubDate", "description"):
            if it.find(tag) is None:
                problems.append(f'item "{title[:40]}" is missing <{tag}>')

        enc = it.find("content:encoded", CONTENT_NS)
        if enc is None:
            problems.append(f'item "{title[:40]}" is missing <content:encoded>')
            continue

        body = (enc.text or "").strip()
        if not body:
            problems.append(f'item "{title[:40]}" has an empty <content:encoded>')
        elif len(body) > LINKEDIN_MAX:
            problems.append(
                f'item "{title[:40]}" content:encoded is {len(body)} chars, '
                f"over LinkedIn's {LINKEDIN_MAX} limit"
            )
        # Bespoke LinkedIn copy is multi-line; the excerpt fallback is one line.
        if "\n" in body:
            with_copy += 1

    print(f"rss.xml       : parses OK, {len(items)} items, "
          f"{with_copy} with bespoke LinkedIn copy ({len(raw)} bytes)")

    if expect_linkedin and with_copy < expect_linkedin:
        problems.append(
            f"only {with_copy} items carry bespoke LinkedIn copy, expected at "
            f"least {expect_linkedin}. New posts must set the `linkedin` field "
            f"in lib/posts.ts."
        )
    return problems


def check_sitemap(base):
    url = f"{base}/sitemap.xml"
    raw = fetch(url)
    try:
        root = ET.fromstring(raw)
    except ET.ParseError as e:
        return [f"sitemap.xml does NOT parse as XML: {e}"]

    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = root.findall(".//sm:url", ns) or root.findall(".//url")
    print(f"sitemap.xml   : parses OK, {len(urls)} urls ({len(raw)} bytes)")
    return [] if urls else ["sitemap.xml parsed but contains zero <url> elements"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default="https://njaccountstax.com",
                    help="Site root, no trailing slash.")
    ap.add_argument("--expect-linkedin", type=int, default=0,
                    help="Require at least N items to carry bespoke LinkedIn copy.")
    args = ap.parse_args()
    base = args.base.rstrip("/")

    problems = []
    for fn in (lambda: check_rss(base, args.expect_linkedin),
               lambda: check_sitemap(base)):
        try:
            problems += fn()
        except Exception as e:
            problems.append(f"could not fetch/check: {e}")

    print()
    if problems:
        print(f"FAILED — {len(problems)} problem(s):")
        for p in problems:
            print(f"  - {p}")
        return 1
    print("ALL CHECKS PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(main())
