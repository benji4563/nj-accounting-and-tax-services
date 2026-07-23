---
name: nj-seo
description: Generate a complete, publish-ready blog post for NJ's Accounting and Tax Services end-to-end — pick the next primary keyword from the research CSV, build its keyword cluster, generate hero and inline images with Higgsfield, write the post in NJ's established voice and humour, and ship it on the same fixed page template with full on-page SEO and schema. Use for any request to write a blog post, publish an article, do content for NJ's, target a new keyword, or add to the blog. Argument is an optional keyword or cluster letter.
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
python .claude/skills/nj-seo/scripts/pick_keyword.py --top 5
```

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

### 3. Generate the images

Three images per post: one hero (16:9, above the fold) and two inline breaks.

```
mcp__88f7781e-d461-4a8f-8704-b9849467d4aa__generate_image
  params: { model: "nano_banana_pro", prompt: "...", aspect_ratio: "16:9" }
```

The call returns a pending job id; poll it with `job_display`, then fetch the
`minUrl` (WebP) with WebFetch and copy the downloaded file into
`public/blog/<slug>/<descriptive-name>.webp`.

**Prompt for scenes, not people.** The single worst failure mode on this site
was an AI-generated hero of a woman whose hand had inhuman anatomy — it
shipped, and the client spotted it. Prefer overhead desk scenes, storefronts,
paperwork, tools, empty interiors, hands-free compositions. If a person is
genuinely needed, keep them small in frame, turned away, or cropped below the
shoulders, and **look at the generated image yourself** before using it.

Style, to stay consistent with the existing post: photorealistic, warm natural
light (golden morning or late afternoon), lived-in and slightly imperfect,
editorial rather than stock-photo. Never handshakes, skyscrapers, suits, or
glossy corporate staging — that violates the brand.

Filenames are descriptive and hyphenated (`hero-kitchen-table-shoebox.webp`),
never generic. Keep each under ~200 KB; if one is heavier, downscale it — the
hero is the LCP element and the site currently scores 100 on performance.

If Higgsfield returns "ran out of credits," stop and tell the user rather
than shipping a post with missing images.

### 4. Write the post

Copy the skeleton from `references/page-template.md` into
`app/blog/<slug>/page.tsx` and fill it. Follow
`references/voice-and-humor.md` for every line of prose.

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
