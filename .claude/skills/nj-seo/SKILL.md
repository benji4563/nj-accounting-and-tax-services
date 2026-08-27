---
name: nj-seo
description: Generate a complete, publish-ready blog post for NJ's Accounting and Tax Services end-to-end — pick the next primary keyword from the research CSV (biased toward clusters already getting traction), build its keyword cluster, fetch hero and inline photos from Pexels, write the post in NJ's established voice with the seo-blog-humor-style layered on, and ship it on the same fixed page template with full on-page SEO, GEO/AI-answer optimisation, and schema. Use for any request to write a blog post, publish an article, do content for NJ's, target a new keyword, or add to the blog. Argument is an optional keyword or cluster letter.
---

# nj-seo — the blog post pipeline

One post, start to finish, identical shape every time. The technical SEO,
JSON-LD schema, accessibility affordances, and visual rhythm were solved once
on the pillar post and are **not re-decided per post** — you are filling a
proven template with new research and new writing, not designing a page.

All paths are relative to the project root
(`03 Clients nj accounting tax/`).

Read these two before writing a single line of copy:

| File | What it holds |
|---|---|
| `.claude/skills/nj-seo/references/page-template.md` | The exact JSX skeleton, section order, and the rules that are easy to break |
| `.claude/skills/nj-seo/references/voice-and-humor.md` | The five voice moves, the humour rule, banned words, honesty constraints |
| `.claude/skills/nj-seo/references/ask-about-me-block.md` | The sitewide "Ask all about me" AI-provider block (ChatGPT / Claude / Perplexity / Gemini) — part of the standard layout |

---

## The pipeline

### 1. Pick the primary keyword

```bash
python .claude/skills/nj-seo/scripts/pick_keyword.py --top 5 --prefer-published
```

`--prefer-published` boosts keywords in clusters we already have posts in.
That is the offline proxy for **"keywords already getting clicks"**: a cluster
we have several posts in is where Google already sees topical authority
building, so the next post there is the one most likely to push a page from the
bottom of page 1 (or top of page 2) onto page 1. The unattended scheduled run
uses this flag; a human doing fresh research can omit it. If Google Search
Console or DataForSEO ranked-keyword data is available at run time, prefer the
real queries sitting in positions 8–20 (one good post often lifts those onto
page 1) over raw volume.

Unions the **curated** cluster files (`keyword-clusters.csv` +
`keyword-clusters-expanded.csv`), then filters:

- primaries already spent, per `used-keywords.md`
- **near-duplicates of spent primaries** — "can i file my taxes without a w2"
  is the same intent as the already-published "can you do taxes without w2".
  Writing a post per variant splits ranking signals across near-identical
  pages instead of concentrating them. Variants belong in the existing post's
  H2s and FAQ, not in a new post.
- categories a prior triage pass deliberately parked in
  `keyword-clusters-full.csv` (clusters I/J/K/L/M — social and login noise,
  state sales-tax lookups Google answers itself, banking products, careers,
  competitor brands)
- the noise regex — job seekers, recruiters, software and competitor brands,
  navigational queries, and `near me` searches the city pages already own

Then ranks by volume discounted for difficulty, nudged by commercial CPC and
question-shaped phrasing.

**`Service and Phrase Keywords.csv` (the raw export) is excluded by default,
and that is deliberate.** It was seeded on the bare word "accounting", so it
is dominated by queries an accounting firm's *buyer* would never type —
bank products ("do checking accounts earn interest", 2,400/mo), quality-
process and IT audits ("layered process audit", 3,600/mo), academic theory,
careers, and competitor brand names. Several of those outrank every genuine
keyword on raw volume, so including them would hand an unattended run a post
about checking-account interest rates on an accounting firm's blog. Pass
`--include-raw` only when a human is doing keyword research; never for
auto-pick.

Take the user's keyword if they named one. Otherwise present the top few and
let them choose — do not silently pick for them, since keyword choice is a
business decision about which customer to go after.

Then pull the full brief:

```bash
python .claude/skills/nj-seo/scripts/pick_keyword.py --pick "<keyword>"
```

This prints the slug, the cluster, the metrics, the SERP features, and the
ranked supporting keywords from the same cluster. **Those supporting keywords
are the raw material for your H2s and FAQ questions** — that is what "build
the cluster" means here. One post covers one cluster.

### 2. Research the SERP before writing

Search the primary keyword and read the top 2–3 ranking pages. You are
looking for: what sub-questions they all answer (you must cover those), what
they all miss (that is your angle), and roughly how long they run (aim within
20% — usually 1,800–2,400 words).

Also pull the "People also ask" questions. Those become FAQ entries verbatim,
because they are literally what people type.

### 3. Fetch the images from Pexels

Three images per post: one hero (16:9, above the fold) and two inline breaks.
**Images come from Pexels now, not Higgsfield** — real photographs sidestep the
AI-anatomy and invented-logo failures that shipped before. The script handles
search, download, WebP conversion, and keeping each file under 200 KB.

```bash
# 1) List candidates for a scene and LOOK at the preview URLs.
python .claude/skills/nj-seo/scripts/pexels_fetch.py \
  --query "overhead desk paperwork tax" --orientation landscape --list

# 2) Download the one you chose (or omit --id to auto-pick the top match).
python .claude/skills/nj-seo/scripts/pexels_fetch.py --id <photo-id> \
  --out "public/blog/<slug>/hero-<descriptive-name>.webp" \
  --orientation landscape --width 1600
```

Hero: `--width 1600`. Inline breaks: `--width 1200`. The script reads the API
key from the `PEXELS_API_KEY` env var / `.env.local`; do not hard-code it.

**Choose scenes, not faces.** Even though these are real photos, the same brand
rules apply: prefer overhead desk scenes, storefronts, paperwork, tools, empty
interiors, hands-free compositions. Reject any candidate whose preview shows a
**readable brand logo**, a **person's face front-on**, or a **visible year/
date** (dates the post; logos are a trademark risk). **Open the preview URL and
actually look** before downloading — the `alt` text Pexels returns is a useful
sanity check but is not a substitute for looking.

Style, to stay consistent with the existing posts: warm natural light,
lived-in and slightly imperfect, editorial rather than glossy stock. Never
handshakes, skyscrapers, suits, or corporate staging — that violates the brand.

Filenames are descriptive and hyphenated (`hero-kitchen-table-shoebox.webp`),
never generic. The script keeps each under ~190 KB; the hero is the LCP element
and the site scores 100 on performance, so do not defeat that with a wider
`--width` than needed.

Pexels credits the photographer in the script output. No on-page attribution is
required by Pexels, but keep the returned `alt` suggestion in mind when you
write real, descriptive alt text (the verifier requires alt on every image).

If Pexels returns a 401 (bad key), 429 (rate limit), or no results, **stop and
tell the user** rather than shipping a post with missing images.

### 4. Write the post

Copy the skeleton from `references/page-template.md` into
`app/blog/<slug>/page.tsx` and fill it. Follow
`references/voice-and-humor.md` for every line of prose.

**Layer the `anthropic-skills:seo-blog-humor-style` skill on top of the voice
guide.** Invoke it (`Skill: anthropic-skills:seo-blog-humor-style`) before
writing and apply its five rules, calibrated for NJ's audience — small-business
owners who want a calm, plain-spoken firm, not a comedian. In practice that
means: **sprinkle, don't slather** (roughly one light aside per section, never
in the answer box), universal everyday analogies over niche references, PG-13
and never political or divisive, and light self-deprecation about the firm
rather than jokes at the reader's or a competitor's expense. Where NJ's
`voice-and-humor.md` and the humor skill overlap, NJ's brand restraint wins —
the humor skill widens the toolkit, it does not loosen the brand.

**Keep the extractable bits literal (this is the GEO win).** The answer box,
the FAQ answers, and any Q&A meant to be quoted by an AI engine or a featured
snippet stay straight and factual — put the personality in the surrounding
narrative, never inside the sentence an assistant will lift. Direct-answer
formatting (a one-sentence answer first, then detail) is what gets the page
cited in ChatGPT / Perplexity / Google AI Overviews, so do not dilute it with a
joke. The sitewide "Ask all about me" block and JSON-LD already carry the rest
of the GEO load; your job is clean, quotable answers.

The shape, fixed: hero → answer box + story open + TOC → six body sections
with two image breaks → dark emphasis section → FAQ + author bio → three
related links → CTA → back-to-top.

Non-negotiables while writing:

- The **primary keyword appears in the answer box**, inside the first 100
  words, phrased naturally.
- The answer box **answers the query outright** in its first sentence. It is
  the featured-snippet target.
- Every `<p>` after the first in a block carries
  `className="mt-4 text-body text-graphite"`. There is no prose plugin.
- 2–3 external `.gov`-grade citations, woven onto phrases already in the
  copy, via the `SourceLink` helper.
- 3–5 internal links in body copy with descriptive anchors — `/services`,
  `/pricing`, `/how-we-work`, a relevant `/locations/<city>`, or another post.
- 6–8 FAQ entries, 2–4 sentences each.
- Muted text is `text-graphite/75`. Persimmon as text is
  `text-persimmon-deep`. Both rules exist because the site holds
  100/100/100/100 on Lighthouse and these were the two things that broke it.
- At least one passage that honestly argues *against* hiring an accountant.
- **Every body H2 section carries its own recognition-humour aside** — not
  just the cold open. Before moving past step 4, scan every section heading
  and confirm each one has a wry, specific, relatable beat (per
  `references/voice-and-humor.md` rule 3). A post that is funny in the intro
  and flat, procedural prose for the rest has not applied the humour skill —
  it has applied one-fifth of it. This has shipped before and is the single
  most common way this pipeline produces a technically-correct, boring post.

### 5. Register it in three places

A post is not shipped until all three are updated — the page file alone is
invisible:

1. `app/blog/page.tsx` — prepend to the `POSTS` array (newest first).
2. `app/sitemap.xml/route.ts` — add
   `{ path: '/blog/<slug>', priority: '0.7', changefreq: 'monthly' }`.
3. `Keywords for accountant/used-keywords.md` — append
   `| <date> | <primary keyword> | /blog/<slug> | <cluster> |` so the keyword
   is never targeted twice.

### 6. Verify — do not skip this

```bash
python .claude/skills/nj-seo/scripts/verify_post.py \
  "app/blog/<slug>/page.tsx" --keyword "<primary keyword>"
```

41 static checks: metadata lengths, all three JSON-LD blocks, single H1, TOC
anchors actually resolving to section ids, keyword placement in the first 100
words / title / description / slug, external links carrying
`rel="noopener noreferrer"`, alt text on every image, lazy-loading below the
fold, the two colour-contrast rules, curly quotes sitting in string-delimiter
position, and whether the post is registered in all three files above.

Exit code is non-zero if anything FAILs. Fix every FAIL. Warnings are
judgement calls — read them and decide.

Then build and look at it:

```bash
npx next build
```

`next build` is the authoritative check for parse errors — the curly-quote
heuristic in the verifier is deliberately narrow to avoid false alarms, so the
build is what actually proves the file is valid.

**Never run `next build` while the dev server is running.** It writes
production artifacts into the same `.next/` directory and the dev server then
serves a broken, unstyled page. Stop the dev server first, or accept that you
will need to `rm -rf .next` and restart it afterwards.

Finally, open the post in the browser and read it — `preview_start`,
`navigate` to `/blog/<slug>`, check `read_console_messages` for errors, and
actually look at the images.

---

## Gotchas that have already bitten this project

- **`.prose-post` is a phantom class.** The existing pillar post wraps its
  intro paragraphs in `div.prose-post`, which is defined nowhere in the
  codebase — those three paragraphs render with no separation. Do not copy
  that wrapper; use explicit `mt-4`. (The verifier FAILs on it.)
- **Curly quotes as string delimiters break SWC**, with a parse error that
  points at a file which looks perfectly fine. Some editors and tools
  substitute them silently. Curly quotes inside JSX *text* are fine and used
  deliberately throughout the site.
- **Screenshots via the browser pane time out** in this environment
  (reproducibly, ~30s). Verify rendering with `read_page`, `get_page_text`,
  and `javascript_tool` for computed styles instead.
- **Lighthouse against the dev server lies** — it will report performance in
  the 20s–30s because of unminified bundles and HMR. Only measure against
  `next build` + `next start`, and run it 2–3 times because scores vary ±3.
- **Windows console is cp1252** and will crash Python scripts that print
  em-dashes or arrows; both scripts here reconfigure stdout to UTF-8.

---

## Scope

This skill writes **blog posts**. City and service landing pages are a
different shape with different schema (`LocalBusiness`, neighbourhood lists,
city-specific FAQ) — that is the `city-landing-pages` skill, and its pages
are generated from `lib/city-data.ts`, not from this template.

This is a client instance. Improvements that are genuinely generic belong in
the AI SEO service template at `02 Dervices ai seo/` — flag them to the user
rather than editing across that boundary.
