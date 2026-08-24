#!/usr/bin/env python3
"""
Fetch real stock photos from Pexels for NJ blog posts.

Replaces the Higgsfield AI image step. Pexels photos are real photographs, so
they sidestep the two failure modes that have bitten this site before: inhuman
AI hand/anatomy artifacts, and invented brand logos / dated years baked into a
generated scene. They are still not risk-free — a real photo can contain a
readable brand logo or a person — so the pipeline must still *look* at each
image before shipping it (see --list, below).

Auth
  Reads the Pexels API key from, in order:
    1. env var  PEXELS_API_KEY
    2. .env.local at the project root (KEY=VALUE lines; not committed)
    3. .claude/skills/nj-seo/scripts/pexels_config.json  {"api_key": "..."}
  Never hard-code the key in a committed file.

Usage
  # 1) See candidates for a scene (id, photographer, alt text, preview URL).
  #    LOOK at the preview URLs before choosing — reject anything with a
  #    readable logo, a person's face front-on, or a visible year.
  python pexels_fetch.py --query "cash drawer ledger desk" --orientation landscape --list

  # 2) Download one candidate by id, converted to web-optimised WebP (<200 KB).
  python pexels_fetch.py --id 3760067 \
      --out "public/blog/<slug>/hero-cash-drawer-and-ledger.webp" \
      --width 1600

  # 3) Or auto-pick the best landscape match and save it in one shot.
  python pexels_fetch.py --query "overhead desk paperwork tax" \
      --orientation landscape \
      --out "public/blog/<slug>/hero-desk-paperwork.webp" --width 1600

Notes
  - Hero is 16:9 above the fold -> --orientation landscape --width 1600.
  - Inline breaks -> --orientation landscape --width 1200 (still <200 KB).
  - The script downscales and re-encodes until the file is under --max-kb so the
    hero stays the LCP element on a site that scores 100 on performance.
"""

import argparse
import io
import json
import os
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8")  # Windows console is cp1252
    sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass

import requests
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
# scripts/ -> nj-seo/ -> skills/ -> .claude/ -> project root
PROJECT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))

API = "https://api.pexels.com/v1/search"


def load_key():
    key = os.environ.get("PEXELS_API_KEY", "").strip()
    if key:
        return key
    env_local = os.path.join(PROJECT, ".env.local")
    if os.path.exists(env_local):
        with open(env_local, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("PEXELS_API_KEY") and "=" in line:
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    cfg = os.path.join(HERE, "pexels_config.json")
    if os.path.exists(cfg):
        with open(cfg, encoding="utf-8") as f:
            k = (json.load(f).get("api_key") or "").strip()
            if k:
                return k
    print("ERROR: no Pexels API key found. Set PEXELS_API_KEY, add it to "
          ".env.local, or create scripts/pexels_config.json.", file=sys.stderr)
    sys.exit(2)


def search(key, query, orientation, per_page=12):
    r = requests.get(
        API,
        headers={"Authorization": key},
        params={
            "query": query,
            "orientation": orientation,   # landscape | portrait | square
            "per_page": per_page,
            "size": "large",              # bias toward high-res originals
        },
        timeout=30,
    )
    if r.status_code == 401:
        print("ERROR: Pexels rejected the API key (401). Check the key.",
              file=sys.stderr)
        sys.exit(2)
    if r.status_code == 429:
        print("ERROR: Pexels rate limit hit (429). Wait and retry, or slow the "
              "cadence. Do NOT ship a post with missing images.", file=sys.stderr)
        sys.exit(3)
    r.raise_for_status()
    return r.json().get("photos", [])


def encode_webp(src_bytes, out_path, target_width, max_kb):
    """Downscale + re-encode to WebP until under max_kb. Returns final KB."""
    img = Image.open(io.BytesIO(src_bytes)).convert("RGB")
    if img.width > target_width:
        h = round(img.height * target_width / img.width)
        img = img.resize((target_width, h), Image.LANCZOS)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    quality, width = 82, img.width
    for _ in range(12):
        buf = io.BytesIO()
        work = img
        if work.width > width:
            h = round(work.height * width / work.width)
            work = work.resize((width, h), Image.LANCZOS)
        work.save(buf, "WEBP", quality=quality, method=6)
        kb = buf.tell() / 1024
        if kb <= max_kb or (quality <= 50 and width <= 900):
            with open(out_path, "wb") as f:
                f.write(buf.getvalue())
            return round(kb)
        if quality > 60:
            quality -= 8
        else:
            width = int(width * 0.9)
    with open(out_path, "wb") as f:
        f.write(buf.getvalue())
    return round(kb)


def best_src(photo):
    src = photo.get("src", {})
    # large2x is the highest-res we need; fall back down the chain.
    return (src.get("large2x") or src.get("original") or src.get("large")
            or src.get("medium"))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--query", help="scene to search for")
    ap.add_argument("--id", type=int, help="download this exact Pexels photo id")
    ap.add_argument("--orientation", default="landscape",
                    choices=["landscape", "portrait", "square"])
    ap.add_argument("--out", help="output .webp path (relative to project root)")
    ap.add_argument("--width", type=int, default=1600, help="max width in px")
    ap.add_argument("--max-kb", type=int, default=190)
    ap.add_argument("--list", action="store_true",
                    help="print candidates (id, photographer, alt, preview) and exit")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    key = load_key()

    if args.list:
        if not args.query:
            print("--list needs --query", file=sys.stderr)
            return 1
        photos = search(key, args.query, args.orientation)
        if args.json:
            print(json.dumps([{
                "id": p["id"], "photographer": p.get("photographer"),
                "alt": p.get("alt"), "preview": p.get("src", {}).get("medium"),
                "url": p.get("url"),
            } for p in photos], indent=2))
        else:
            print(f"{len(photos)} candidates for '{args.query}' "
                  f"({args.orientation}):\n")
            for p in photos:
                print(f"  id {p['id']}  by {p.get('photographer')}")
                print(f"     alt: {p.get('alt') or '(none)'}")
                print(f"     preview: {p.get('src', {}).get('medium')}")
                print(f"     page: {p.get('url')}\n")
            print("Pick one, LOOK at its preview, then:\n"
                  "  python pexels_fetch.py --id <id> --out <path.webp> "
                  f"--orientation {args.orientation} --width {args.width}")
        return 0

    if not args.out:
        print("--out is required when downloading", file=sys.stderr)
        return 1

    photo = None
    if args.id:
        r = requests.get(f"https://api.pexels.com/v1/photos/{args.id}",
                         headers={"Authorization": key}, timeout=30)
        r.raise_for_status()
        photo = r.json()
    else:
        if not args.query:
            print("need --query or --id", file=sys.stderr)
            return 1
        photos = search(key, args.query, args.orientation)
        if not photos:
            print(f"No Pexels results for '{args.query}'. Try a simpler scene.",
                  file=sys.stderr)
            return 1
        photo = photos[0]

    url = best_src(photo)
    if not url:
        print("Photo has no usable source URL.", file=sys.stderr)
        return 1
    img_bytes = requests.get(url, timeout=60).content
    out_abs = args.out if os.path.isabs(args.out) else os.path.join(PROJECT, args.out)
    kb = encode_webp(img_bytes, out_abs, args.width, args.max_kb)

    result = {
        "saved": os.path.relpath(out_abs, PROJECT),
        "kb": kb,
        "pexels_id": photo["id"],
        "photographer": photo.get("photographer"),
        "photographer_url": photo.get("photographer_url"),
        "alt": photo.get("alt"),
        "pexels_url": photo.get("url"),
    }
    if args.json:
        print(json.dumps(result, indent=2))
    else:
        print(f"Saved {result['saved']} ({kb} KB)")
        print(f"  Pexels #{photo['id']} by {photo.get('photographer')}")
        print(f"  alt suggestion: {photo.get('alt') or '(write your own)'}")
        if kb > args.max_kb:
            print(f"  WARNING: {kb} KB exceeds target {args.max_kb} KB — "
                  "consider a narrower --width.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
