# YOUR WEBSITE AUDIT — njaccountstax.com

> **Prepared for:** NJ's Accounting and Tax Services (Njock Simon) — United States, small-business market
> **Audit date:** 25 September 2026
> **Prepared by:** AfriShield AI — SEO & GEO Practice
> **Site URL:** https://njaccountstax.com · **Pages reviewed:** 24 (6 core + 12 blog + 7 location, plus robots/sitemap/llms.txt)
> **Data sources:** DataForSEO (live SERP, ranked keywords, backlinks, on-page crawl), geo-optimizer engine, repository inspection. All scores below are **measured**, not estimated, except where stated.

---

## How Your Website Scores Today

| Category | Score | What This Means For You |
|---|---|---|
| **Technical SEO** | **78 / 100** | Your site is fast, secure and properly crawlable. The foundations are genuinely good — this is not what is holding you back. |
| **On-Page SEO** | **64 / 100** | Your blog posts are well built. Your homepage and your seven city pages are too thin and too similar to each other to compete. |
| **Off-Page SEO** | **8 / 100** | This is the problem. You have 6 backlinks from 5 domains, two of them Russian, with a spam score of 52. Google has almost no reason to trust you yet. |
| **GEO / AI Readiness** | **64 / 100** | "Foundation" band. AI assistants can read your site, but your Trust Stack grade is **D (10/25)** — they have little reason to cite you over an established firm. |

**Overall: 53 / 100 — Foundation stage.** You have built a technically sound, well-written site and then published into a vacuum. Every ranking problem below traces back to one root cause: **nobody links to you, and Google does not yet recognise your business as an entity.**

---

## What Has Already Been Fixed

Implemented on 25 September 2026, after this audit was delivered. Scores above are the **pre-fix baseline** — they will be re-measured once these changes are live.

| # | Item | Status |
|---|---|---|
| 1 | Google Business Profile, directories, reviews | ⛔ **Yours to do** — requires account creation and real clients. See below. |
| 2 | Disavow the spam links | 📄 **File prepared** — `seo/disavow-njaccountstax.txt`, ready to upload. Only you can submit it. |
| 3 | Brand/entity disambiguation | ✅ **Done** — founder-forward `Organization` schema, four `alternateName` variants incl. "Njock's Accounting", brand-first title tags, explicit "NJ = Njock, not New Jersey" statements in `llms.txt` and `ai.txt`. `sameAs` wired and awaiting your profile URLs. |
| 4 | Malformed HTML | ⚪ **Withdrawn** — false positive, see below. |
| 5b | Broken production build | ✅ **Fixed** — `tsconfig.json` was type-checking two other clients' sites. |
| 6 | City pages are near-duplicates | ✅ **Done** — every city now carries 400+ words of researched, cited local tax content. Chicago page went 1,245 → 1,682 words. |
| 7 | Zero internal links to city pages | ✅ **Done** — footer rebuilt with Services / Company / Where we work / Latest writing columns. Every page now links to all 7 city pages. |
| 8 | Thin homepage | ✅ **Done** — 684 → **1,252 words** via an honest "who we're a fit for / who we're not" qualification section. |
| 9 | City page titles 103 chars | ✅ **Done** — every title on the site is now ≤ 60 characters (was 6 pages over). |
| 10 | Missing schema | ✅ **Done** — added `WebSite` + `SearchAction`, `FAQPage` on the homepage, `sameAs` scaffold, `parentOrganization` links, OG images. |
| 11 | No testimonials | 🟨 **Built, empty** — component + `Review` schema ship wired to `lib/testimonials.ts`. Add real quotes there and it goes live. Nothing fabricated. |
| 12 | Author attribution | ✅ **Already existed** — every post has an `AuthorBio` and `author` in `BlogPosting` schema. Founder name upgraded to "Njock Simon" throughout. |
| 13 | Security headers | ✅ **Done** — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS. |
| 14 | AI discovery 0/6 | ✅ **Done** — `/.well-known/ai.txt`, `/ai/summary.json`, `/ai/faq.json`, `/ai/service.json`, `/rss.xml`, expanded `llms.txt` with an Optional section. |
| 15 | Form unusable by AI agents | ✅ **Done** — all 7 contact fields were unlabelled `<span>`s; now real `<label for>` with autocomplete hints. |
| 16 | Debug logging in production | ✅ **Fixed** — six `console.log('[page] … rendered')` calls removed. |

**What is deliberately not done:** anything requiring real client data or an account only you can open. No invented testimonials, no invented star ratings, no `sameAs` pointing at profiles that do not exist. Those are the fabrication risks, not the shortcuts.

---

## Your Google Rankings Today

You currently rank for **20 keywords**. Every single one sits between **position 29 and position 71** — that is page 3 to page 8. **You have nothing on page 1 and nothing on page 2.** Estimated organic traffic value: **25 visits/month**.

### The headline finding

| What Your Customers Search | Your Current Position | Who Wins Page 1 Instead |
|---|---|---|
| `NJ's Accounting and Tax Services` *(your own brand name)* | **Not in top 25** | njatservices.com (#1), jvinciguerracpa.com, taxadvicenj.com, centraljerseyaccountants.com |
| `njaccountstax` *(your own domain name)* | **Not in top 11** | uslegalforms.com, Intuit, hyperbots.com — generic "tax account" definitions |
| `small business bookkeeping services` | **Not in top 25** | Reddit (#1), Block Advisors, Bench.co, Bookkeeper360, Forbes |
| `bookkeeping services cincinnati` | **Not in top 25** | seibelkatzcpa.com, bookwerks.io, Supporting Strategies, Yelp, Bench.co |
| `can you file taxes without a w2` | **41** | your best-performing commercial term — 1,600 searches/mo |
| `active relief center tax` | **29** | your single best position anywhere on the site |

### ⚠️ Read this twice: you do not rank for your own name

Search your own brand and Google returns **a different company** — njatservices.com, "NJ Accounting & Tax Services" — at position 1, followed by ten New Jersey tax firms. Search your literal domain string, `njaccountstax`, and you get IRS glossary pages.

Two things are happening:

1. **"NJ" reads as New Jersey, not Njock.** Google has resolved your brand token to a US state. Every brand search you run is being answered with New Jersey accountants. You are competing for your own name against an entire state's tax industry, and against a near-identical competitor who already owns the term.
2. **Google does not recognise you as an entity yet.** A business Google knows will rank #1 for its own domain name within days of launch. Yours does not, after roughly seven weeks of indexing. That is an authority signal, not a content signal.

**What this costs you:** a prospect who hears your name from a referral, types it into Google, and lands on a competitor. That is the single most expensive leak on this site, because it wastes word-of-mouth you already earned.

---

## How You Compare to Your Competitors

| | **You** | Bench.co | Block Advisors | Bookkeeper360 | BookWerks (Cincinnati) |
|---|---|---|---|---|---|
| Best position, core terms | **Not in top 25** | #8 national, #15 Cincinnati | #7 national | #9 national | #5 Cincinnati |
| Referring domains | **5** | thousands | thousands | thousands | dozens |
| Backlink spam score | **52** | low | low | low | low |
| Reviews / testimonials on site | **none found** | yes | yes | yes | yes |
| City landing pages | 7 | yes (`/local/*`) | yes | — | local-first |
| Named author / E-E-A-T | **none found** | yes | yes | yes | yes |
| Flat transparent pricing | **yes — $299/$549/$949** | yes ($399) | yes | yes | no |

**Where you are genuinely competitive:** your pricing page is more transparent than most of page 1, your copy is better written than every regional firm above, and your $299 entry price undercuts Bench's $399. Your product positioning is not the problem.

**Why they win anyway:** Bench.co ranks #15 for `bookkeeping services cincinnati` with a `/local/cincinnati-bookkeeping` page that is structurally *the same idea as your Cincinnati page*. The difference is not the page. It is the thousands of referring domains pointing at the domain that hosts it. Your city-page strategy is sound and is currently returning zero because it is bolted to a domain with five referring domains.

**The stakes:** `can you file taxes without a w2` alone is 1,600 searches/month with a $5.11 CPC. You rank 41st. The traffic going to positions 1–10 for that term is worth roughly $8,000/month in equivalent ad spend. You wrote the page. You just cannot reach the readers.

---

## What Is Holding Your Website Back

### 🔴 Critical Issues — Fix These First

**🔴 1. Your backlink profile is effectively zero, and what exists is toxic.**
6 backlinks, 5 referring domains, **spam score 52**. Two referring domains are `.ru`; four of the six links are image links, not editorial links. You have no Google Business Profile evidence, no citations, no directory listings, no reviews. Nothing on this site will reach page 1 until this changes.
**Do this:** Disavow the `.ru` links. Then claim Google Business Profile, Yelp, Thumbtack, Clutch and LinkedIn Services; get listed in accounting directories (CPAdirectory, Bark, UpCity); and get the first 10 real reviews. This is the only work on this list that changes your rankings in the next 90 days.

**🔴 2. Your brand name is losing to a state abbreviation and a near-identical competitor.**
Covered in detail above. `NJ's Accounting` is unwinnable as a bare term.
**Do this:** Anchor every brand mention to the founder — **"NJ's Accounting and Tax Services (Njock Simon)"** — in your title tags, H1, schema `Organization.name`, `founder`, and every directory listing. Add `sameAs` links to LinkedIn, Crunchbase and your X profile in the Organization schema so Google can disambiguate you as an entity. Consider adding "Njock" to your homepage title tag.

**🔴 3. Your seven city pages are 80% identical to each other and to your homepage.**
Each `/locations/*` page composes three city-specific components (Hero, LocalTrust, FAQ) around **seven shared homepage components** — ProofStrip, EmotionalRecognition, ServicesGrid, MeetNjock, FirstThirtyDays, PricingPreview, CtaDrop. 1,245 words per page, most of it duplicated. They rank for **zero keywords**, and the pattern matches Google's doorway-page definition.
**Do this:** Give each city 400+ words of genuinely local substance — local filing deadlines, city/county business tax quirks, named neighbourhoods, a local client story. If you cannot write something true and specific for a city, delete that page. Seven thin pages hurt more than three strong ones help.

**🔴 4. Your city pages receive zero internal links from your blog.**
A search across all seven location pages returns no links to `/blog/*`, and no blog post links to a location page. Your only ranking assets (blog posts) are passing no authority to your only commercial local pages.
**Do this:** Every post links to 2 related posts plus 1 money page. *(Already added to your publishing routine — see below.)*

**⚪ 5. ~~Every page serves malformed HTML.~~ — WITHDRAWN, this was a false positive.**
DataForSEO's crawler reported *"The closing tag and the currently open tag do not match"* on your homepage (col 10775) and Cincinnati page (col 13908). On inspection of the served HTML, **your markup is valid**: every non-void tag balances, and the flagged element is a properly closed `<path></path>` inside the `<clipPath>` of your inline SVG logo mask. DataForSEO's parser treats `path` as a void element in HTML context and misreports valid SVG foreign content.
**No action needed.** Nothing was changed for this item.

**🔴 5b. Your production build was broken — which would have blocked all automated publishing.** *(found while fixing the above)*
`npx next build` failed on this repo. Two other AfriShield client sites (`Afrishield Clients/Ojong Realty Group`, `One Service Renovation`) live in subfolders here and are separate Next.js projects with their own `@/*` path roots. Your `tsconfig.json` type-checked them against NJ's directory, so every one of their imports failed and took the build down with it. Your blog-publishing routine gates its commit on a clean build, so this alone would have stopped every scheduled post from shipping even once the schedule was re-registered.
**Fixed:** those folders are now excluded in `tsconfig.json`. Build passes.

### 🟡 Important Issues

| Area | What Is Happening on Your Site | What We Recommend |
|---|---|---|
| Homepage depth | 684 words, text-to-HTML ratio 4% — flagged `low_content_rate` | Expand to 1,200+ words. Add a "who we're a fit for" section and 3 client outcomes. |
| City page titles | 103 characters — Google truncates at ~60 | Cut to `Small-Business Accountant in Cincinnati — NJ's Accounting` (57 chars). |
| Missing schema | You have `Organization` + `ProfessionalService`. You are missing `WebSite`, `FAQPage` on the homepage, and `sameAs` anywhere | Add all three. `WebSite` + `SearchAction` is what lets AI agents navigate you. |
| Social proof | geo-optimizer found **no reviews or testimonials** anywhere on the site | Add 3 named testimonials and `aggregateRating` schema once you have real Google reviews. |
| Author attribution | No author signal on any blog post | Byline every post to Njock Simon with a linked author bio. This is a direct E-E-A-T and AI-citation signal. |
| Images | 1 image on the homepage, no `title` attributes | Add descriptive alt and title text throughout. |
| External citations | Homepage has **0 external links**; geo-optimizer flags "no links to authoritative sources" | Cite IRS.gov directly from your service and pricing pages, not just blog posts. |
| Security headers | `Content-Security-Policy` and `X-Frame-Options` missing | Add both in `next.config.mjs`. Cheap Technical SEO and Trust Stack points. |
| Keyword density | `your` at 2.8% density — flagged as stuffing | Diversify. Minor, but it is a measured negative signal. |

### 🟢 Polish Items

- Add `/.well-known/ai.txt`, `/ai/summary.json`, `/ai/faq.json`, `/ai/service.json` — the emerging AI-discovery convention. You score **0/6** on `ai_discovery` today.
- Add an RSS feed and link it in `<head>` — AI crawlers use it for freshness.
- Add `dateModified` to your schema (currently absent — a consistency signal).
- Expand `llms.txt` (323 words, no optional section, no `llms-full.txt`) — currently 12/18.
- Add `aria-label` to form fields so AI agents can complete your contact form.

---

## Your Priority Action Plan

| # | Priority | Action | Pillar | Status |
|---|---|---|---|---|
| 1 | 🔴 Now | **Claim Google Business Profile + 5 core directories; get 10 real reviews** | Off-Page | ⛔ **Yours — and it is the one that matters most** |
| 2 | 🔴 Now | Upload the disavow file to Search Console | Off-Page | 📄 File ready at `seo/disavow-njaccountstax.txt` |
| 3 | 🔴 Now | Send us your LinkedIn / Facebook / Instagram URLs for `sameAs` | GEO | ⏳ Blocked on you — schema slot is wired |
| 4 | 🔴 Now | Brand/entity disambiguation in schema, titles, `llms.txt`, `ai.txt` | On-Page / GEO | ✅ Done |
| 5 | 🔴 Now | Fix the broken production build | Technical | ✅ Done |
| 6 | 🔴 Week 1 | Rewrite all 7 city pages with researched, cited local tax content | On-Page | ✅ Done |
| 7 | 🔴 Week 1 | Internal links: footer hub to all city + money pages | On-Page | ✅ Done |
| 8 | 🟡 Week 2 | Homepage 684 → 1,252 words; every title ≤ 60 chars | On-Page | ✅ Done |
| 9 | 🟡 Week 2 | `WebSite`, `SearchAction`, `FAQPage`, `sameAs` scaffold, OG images | GEO | ✅ Done |
| 10 | 🟡 Week 2 | Add 3 real testimonials to `lib/testimonials.ts` | On-Page / GEO | 🟨 Component + schema built, awaiting your quotes |
| 11 | 🟡 Week 3 | CSP, X-Frame-Options, HSTS and three more security headers | Technical | ✅ Done |
| 12 | 🟢 Week 4 | AI-discovery files, RSS feed, expanded `llms.txt`, labelled forms | GEO | ✅ Done |
| 13 | 🟢 Week 4 | Outbound citations to primary IRS sources | On-Page / GEO | ✅ Done |

### The three that are still yours

Everything technical is handled. What remains cannot be done from a code editor:

1. **Google Business Profile and the first 10 reviews.** This is item 1 for a reason — it is the single highest-impact thing left, and no amount of on-page work substitutes for it.
2. **Your LinkedIn / Facebook / Instagram URLs.** Send them and the `sameAs` entity links go live in one line. These are Knowledge Graph pillar links and they directly attack the "NJ = New Jersey" problem.
3. **Three real client quotes.** The component and `Review` schema are built and wired; they render nothing until you add real ones. We will not invent them.

---

## About Your Publishing Cadence

Two things you should know, both measured today:

**1. Your schedule stopped running four weeks ago.** Your last published post was **28 August 2026**. The routine was configured for 15 posts/week but was not registered with the scheduler — the task directory existed on disk, the registered task did not. Nothing has published in 28 days. It has now been re-registered.

**2. Cadence was never your bottleneck.** You published 12 good posts. 5 of them rank. All 20 of your ranking keywords come from blog posts — your content pipeline works. What does not work is that those posts sit on a domain with 5 referring domains, so they top out at position 29. **Publishing 15 posts a week into that vacuum would have produced 15× more page-3 content, not page-1 content** — while burning your keyword pool (39 unused keywords left, roughly 3 weeks of runway at 15/week) and matching the scaled-content-abuse velocity pattern on a young, low-authority domain.

**7 posts/week is the right call.** It gives you 5–6 weeks of keyword runway, keeps the freshness signal alive, and leaves room to do the off-page work in items 1–3 above — which is the work that actually moves you from position 29 to position 9.

---

## The Honest Summary

You did the hard part well. The writing is genuinely better than most of page 1, the pricing is more transparent than Bench's, the technical build is clean and fast, and your blog content is already ranking for commercial terms with real volume.

You are losing on one axis only: **nobody has vouched for you.** Five referring domains, no reviews, no Google Business Profile, no entity recognition — and a brand name Google currently reads as a US state.

Fix the authority problem and the content you already published starts climbing on its own. Keep publishing without fixing it, and you will have 60 excellent posts on page 3.
