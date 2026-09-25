#!/usr/bin/env python3
"""
Post a blog article to the NJ's Accounting LinkedIn company page via a
Zapier "Catch Hook" webhook.

WHY A WEBHOOK AND NOT THE ZAPIER MCP
------------------------------------
The Zapier MCP `execute_zapier_write_action` is not callable: the action needs
its fields inside a `params` record, the server publishes no property schema
for the tool, so an object passed as `params` is serialized to a string and
rejected with `expected record, received string`. Flattened fields are dropped;
`instructions` does not fill them either. The LinkedIn connection itself is
healthy — `company_id` 145227827 resolves to "Njaccountstax" — so this is a
call-path problem, not an auth problem.

A Catch Hook sidesteps it entirely: we POST plain JSON, Zapier's Zap maps the
fields onto LinkedIn's "Create Company Update" action.

SETUP
-----
  1. In Zapier, create a Zap:
       Trigger:  Webhooks by Zapier -> Catch Hook
       Action:   LinkedIn -> Create Company Update
  2. Copy the Catch Hook URL and put it in .env.local at the project root:
       LINKEDIN_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXXXXX/YYYYYYY/
     (.env.local is gitignored — never commit the hook URL, anyone with it can
     post to the page.)
  3. Send a test payload so Zapier can learn the field shape:
       python post_to_linkedin.py --test
  4. In the Zap's action step, map:
       Update Content      -> comment
       LinkedIn Company Page -> company_id   (or hard-code 145227827)
       Media URL           -> submitted_url
       Preview - Title     -> title
       Preview - Description -> description
  5. Turn the Zap on.

USAGE
-----
  # normal use: copy from a file so newlines and quotes survive the shell
  python post_to_linkedin.py \
      --comment-file /path/to/copy.txt \
      --url https://njaccountstax.com/blog/<slug> \
      --title "<post title>" \
      --description "<one-line summary>"

  # see exactly what would be sent, send nothing
  python post_to_linkedin.py --comment-file copy.txt --url ... --dry-run

  # send a harmless payload to prime the Zap's field mapping
  python post_to_linkedin.py --test

EXIT CODES
----------
  0  posted (or dry-run/validation OK)
  2  configuration problem (no webhook URL)
  3  content failed validation (too long, unescaped parens)
  4  the webhook rejected the request or was unreachable
"""

import argparse
import json
import os
import re
import sys

import requests

# Windows consoles default to cp1252, which cannot encode the characters the
# copy actually uses — arrows, em dashes, curly quotes. Without this, printing
# a payload for review dies with UnicodeEncodeError and the run looks like a
# posting failure when the content was fine.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))

# Verified 2026-09-25: resolves to the page "Njaccountstax".
DEFAULT_COMPANY_ID = "145227827"

# LinkedIn's documented limits for Create Company Update.
MAX_COMMENT = 3000
MAX_TITLE = 400
MAX_DESCRIPTION = 4086


def load_webhook_url():
    """Env var first, then .env.local. Never hard-code the URL."""
    url = (os.environ.get("LINKEDIN_WEBHOOK_URL") or "").strip()
    if url:
        return url
    env_local = os.path.join(PROJECT, ".env.local")
    if os.path.exists(env_local):
        with open(env_local, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("LINKEDIN_WEBHOOK_URL") and "=" in line:
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    return ""


def validate(comment, title, description):
    """Catch the things LinkedIn silently mangles, before we send them."""
    problems = []

    if not comment.strip():
        problems.append("comment is empty")
    if len(comment) > MAX_COMMENT:
        problems.append(
            f"comment is {len(comment)} chars, over LinkedIn's {MAX_COMMENT} limit"
        )
    if title and len(title) > MAX_TITLE:
        problems.append(f"title is {len(title)} chars, over {MAX_TITLE}")
    if description and len(description) > MAX_DESCRIPTION:
        problems.append(
            f"description is {len(description)} chars, over {MAX_DESCRIPTION}"
        )

    # LinkedIn's Little Text Format treats ( and ) as reserved. An unescaped
    # one mangles or rejects the post, and it is the single most common
    # failure. We flag rather than auto-escape: silently rewriting someone's
    # copy is worse than making them look at it.
    unescaped = re.findall(r"(?<!\\)[()]", comment)
    if unescaped:
        problems.append(
            f"comment has {len(unescaped)} unescaped parenthesis character(s). "
            r"Escape them as \( and \) — or rewrite the line without them, "
            "which is usually cleaner."
        )

    return problems


def main():
    ap = argparse.ArgumentParser(
        description="Post a blog article to the LinkedIn company page via a Zapier Catch Hook."
    )
    ap.add_argument("--comment", help="Post body. Prefer --comment-file.")
    ap.add_argument(
        "--comment-file",
        help="File holding the post body. Preferred: keeps newlines and quotes intact.",
    )
    ap.add_argument("--url", help="Article URL, used for the link preview card.")
    ap.add_argument("--title", default="", help="Preview card title.")
    ap.add_argument("--description", default="", help="Preview card description.")
    ap.add_argument("--company-id", default=DEFAULT_COMPANY_ID)
    ap.add_argument(
        "--dry-run",
        action="store_true",
        help="Validate and print the payload without sending.",
    )
    ap.add_argument(
        "--test",
        action="store_true",
        help="Send a harmless payload so the Zap can learn the field shape.",
    )
    args = ap.parse_args()

    if args.test:
        comment = (
            "Test payload from post_to_linkedin.py. "
            "If you are seeing this in Zapier's field mapping, the hook works."
        )
        url = "https://njaccountstax.com/blog"
        title = "NJ's Accounting — Blog"
        description = "Test payload. Safe to ignore."
    else:
        if args.comment_file:
            with open(args.comment_file, encoding="utf-8") as f:
                comment = f.read().rstrip("\n")
        elif args.comment:
            comment = args.comment
        else:
            ap.error("one of --comment, --comment-file or --test is required")
        if not args.url:
            ap.error("--url is required unless --test")
        url = args.url
        title = args.title
        description = args.description

    problems = validate(comment, title, description)
    if problems:
        print("CONTENT VALIDATION FAILED:", file=sys.stderr)
        for p in problems:
            print(f"  - {p}", file=sys.stderr)
        sys.exit(3)

    payload = {
        "company_id": args.company_id,
        "comment": comment,
        "submitted_url": url,
        "title": title,
        "description": description,
    }

    print(f"comment: {len(comment)} chars (limit {MAX_COMMENT}) — OK")
    print(f"parentheses: none unescaped — OK")

    if args.dry_run:
        print("\n--- DRY RUN, nothing sent. Payload: ---")
        print(json.dumps(payload, indent=2, ensure_ascii=False))
        return 0

    hook = load_webhook_url()
    if not hook:
        print(
            "ERROR: no webhook URL. Set LINKEDIN_WEBHOOK_URL in the environment "
            "or add it to .env.local at the project root. See the setup notes at "
            "the top of this file, and docs/linkedin-auto-posting.md.",
            file=sys.stderr,
        )
        sys.exit(2)

    try:
        r = requests.post(hook, json=payload, timeout=30)
    except requests.RequestException as e:
        print(f"ERROR: could not reach the webhook: {e}", file=sys.stderr)
        sys.exit(4)

    if r.status_code >= 300:
        print(
            f"ERROR: webhook returned HTTP {r.status_code}: {r.text[:400]}",
            file=sys.stderr,
        )
        sys.exit(4)

    # Zapier answers {"status": "success", "request_id": "..."} on a good catch.
    try:
        body = r.json()
    except ValueError:
        body = {"raw": r.text[:200]}
    print(f"POSTED — webhook accepted (HTTP {r.status_code}): {body}")
    print(
        "Note: a 200 means Zapier ACCEPTED the payload, not that LinkedIn "
        "published it. Check the Zap's run history if the post does not appear."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
