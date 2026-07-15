# NJ's Accounting and Tax Services — Project Specs

**Version:** Draft v2 — 2026-07-15
**Status:** Awaiting Ben's approval before any code is written.

---

## 0. The One Rule That Governs This Entire Site

**Show. Don't tell.**

We never say "we're premium." We put you in a room that feels premium.
We never say "we build trust fast." We give you three things on the homepage that make you trust us before you scroll twice.
We never say "we respond quickly." We show a badge: *"Median first reply: 3h 12m — this week."*

Every headline, section, and component on this site is audited against one question:
> *"Are we claiming something, or are we proving it?"*

If it's claiming, we cut it or replace it with proof.

---

## 1. Who This Site Is For (Their World, Not Ours)

Meet **Maya.** She owns a 6-person bakery in Fresno. Revenue: about $600k/year. She started three years ago.

- She has a **shoebox of receipts** on her desk right now.
- Her last accountant took **eight days to reply** to a simple email, then charged her for the call to chase him.
- She googled *"what is a K-1"* at 11pm last Tuesday.
- She's not stupid — she's a *baker*, not a CPA.
- She's afraid the IRS will find something. She doesn't know what.
- She wants to open a second location but doesn't know if she can afford it.
- She reads accounting-firm websites and they all sound like law firms trying too hard.

**Everything we build on this site is for Maya.** If a section doesn't help Maya feel *seen, safer, or clearer* — it doesn't ship.

Secondary personas: contractors, salon owners, dentists, freelancers, food-truck operators — all US-based, 1–20 employees, $100k–$5M revenue. Same emotional profile as Maya.

---

## 2. What the App Does & Success

A marketing website that:

1. **Meets the visitor's fear on arrival** (the shoebox, the audit anxiety, the ghosted-by-last-accountant feeling)
2. **Shows — not says — how NJ is different** using proof components (see §7)
3. **Removes every excuse not to book** (transparent price, 15-min free call, no phone tree, one form)

### What "success" measurably looks like at launch

- Homepage → book-a-call **conversion ≥ 4%** (industry avg for accounting is ~1.5%)
- Time-on-page for `/services` ≥ 90s (people are reading, not bouncing)
- Zero "call for a quote" copy anywhere on the site
- NJ receives the first real inbound lead within **7 days of launch**
- Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO
- `npm run build` passes clean
- Deployed to Vercel with a custom domain

---

## 3. Tech Stack

| Layer | Choice | Why (in one line) |
|---|---|---|
| Language | TypeScript | Catches mistakes before Ben sees them |
| Framework | Next.js (latest, App Router) | Fast, SEO-friendly, deploys in one click |
| Styling | Tailwind CSS | Uses the brand tokens from `brand-guidelines.md` |
| Animation | Framer Motion | For the underline-swoosh draw + subtle scroll reveals |
| SVG assets | Hand-drawn Persimmon underline, organic blob image masks | Signature visual language |
| Fonts | Fraunces + Inter + Caveat | Via `next/font` (free, self-hosted, no FOUT) |
| Backend/DB | Supabase | Stores contact-form submissions + a public counter of "clients served / dollars saved" |
| Email | Resend | Notifies NJ instantly when a lead comes in |
| Booking | Cal.com embed (free tier) | Cal.com is Calendly's open-source rival — cleaner, no branding on free tier |
| Deployment | Vercel | One click, custom domain, free HTTPS |
| Analytics | Vercel Analytics + Plausible (privacy-friendly) | No cookie banner needed |

---

## 4. Sitemap (Problem-First, Not Service-First)

Every page opens with a **problem the visitor recognises in themselves** — not a service NJ offers.

| Route | What it does | The problem it opens on |
|---|---|---|
| `/` | Home | *"You're behind on your books and it's stressing you out."* |
| `/services` | What NJ does | *"You don't know what you actually need. Let us show you."* |
| `/pricing` | Real prices, visible | *"You're tired of 'call for a quote'."* |
| `/how-we-work` | The month-by-month experience | *"You've been ghosted by an accountant before."* |
| `/about` | Who NJ is | *"You want to know the person doing your books."* |
| `/contact` | Book a call OR write a message | *"You're ready to talk. Here are two easy ways."* |
| `/thank-you` | Post-submission | *"We got you. Here's exactly what happens next."* |
| `/audit-help` (v1.5) | Emergency IRS-audit landing | *"The IRS just contacted you. Breathe. Read this."* |

**Out for v1** (v2+): client portal, document upload, blog, online payment.

---

## 5. Page-by-Page Content Blueprint

Each page follows the same **P–D–P** structure:
1. **Problem** — meet the visitor's feeling
2. **Demonstration** — show, don't tell
3. **Path forward** — one clear next step

### 5.1 Home (`/`)

**Section 1 — Hero (problem meets solution in one glance)**
- Headline (with underline-swoosh on *behind* and *ahead*):
  > *"You're **behind** on your books. Let's get you **ahead**."*
- Subhead:
  > *Bookkeeping and tax services for small businesses. Flat monthly pricing. A real person you can email. Books current within 30 days — guaranteed, or your next month is free.*
- Primary CTA: **Book a free 15-min call** (Persimmon)
- Secondary: **See our pricing** (text link)
- Right column: real photograph of a small-business owner (baker/contractor), organic blob mask, Lilac Mist glow

**Section 2 — Proof strip (three numbers, no claims)**
Three live counters (pulled from Supabase, updated weekly by NJ):
- **47** small businesses served since 2019
- **$2.3M** in taxes saved for our clients
- **3h 12m** median first-response time this week

No "trusted by many." No stock logo bar. Just numbers.

**Section 3 — "You're not the only one" (emotional recognition)**
A 3-card row, each starting with a problem in the visitor's voice:

> *"I have a shoebox of receipts and no idea where to start."*
> **We start there.** Send us the shoebox. We build your books from scratch. Your first month is on us if we can't get you current within 30 days.

> *"My last accountant took 8 days to reply."*
> **We answer within 4 business hours. Or your next month is free.** Yes, it's on the invoice.

> *"I'm terrified of an IRS audit."*
> **We audit-proof every return before we file.** Here are the three things we check, every time. *(link opens a short article)*

**Section 4 — What we actually do (services, but rewritten around the client)**
Card grid, 4 services. Each card leads with the *feeling*, ends with the *deliverable*:

- **The shoebox problem** → *Monthly bookkeeping.* Send us anything. We categorise it. You get one clean report on the 5th of every month.
- **The 11pm-google problem** → *Tax preparation.* Federal, state, local. Every deduction. We file. You approve.
- **The "am I paying too much?" problem** → *Quarterly tax planning.* Every 3 months, we tell you exactly what to owe — and how to owe less next year.
- **The "the IRS just called" problem** → *Audit support & representation.* We pick up. We prepare. We show up with you.

**Section 5 — Meet the person doing your books (not "our team")**
One real photograph of NJ (or the lead person). Real first name. One sentence bio in NJ's voice — not corporate:
> *"Hi, I'm [name]. I've been doing small-business taxes for [X] years. Before this I ran a [previous small business], so I know what a bad quarter feels like. When you email us, I'm the one who answers."*

**Section 6 — "Your first 30 days" (removes booking anxiety)**
A horizontal timeline. Four steps. Concrete. No jargon:
1. **Day 0** — 15-min discovery call. Free. No pitch.
2. **Day 1–7** — You send us your last 3 months of receipts, statements, and last year's return.
3. **Day 8–30** — We build your books. You get a walkthrough call and a clean report on Day 30.
4. **Every month after** — One report on the 5th. One check-in call per month. No surprises.

**Section 7 — Pricing preview (Persimmon "See full pricing" CTA)**
Three tiers with the price *visible*. Not "starting at." Actual prices. (See §5.3.)

**Section 8 — CTA drop (Aubergine background section)**
Big Cream headline, one CTA:
> *"Ready to hand over the shoebox?"*
> **Book a free 15-min call →**

**Section 9 — Footer**
Minimal. Contact, hours, response-time promise, small copyright line.

---

### 5.2 Services (`/services`)

Opens with:
> *"You don't know exactly what you need — and that's fine. Here's what we do, in plain English."*

Then, for each of the 4 services above, one full section with:
- The problem in the client's voice (a real quote or paraphrase)
- What we actually do (verb-first, no jargon)
- What lands in your inbox (screenshot of a report, or a bullet list of deliverables)
- What it does NOT include (radical honesty — e.g. *"We don't do audits of financial statements. If you need that, we'll refer you to someone who does."*)

---

### 5.3 Pricing (`/pricing`)

Opens with:
> *"You're tired of 'call for a quote'. So are we. Here's what it costs."*

Three tiers, side-by-side, prices in Fraunces 500 44px, Aubergine:

| **Essential — $199/mo** | **Growth — $349/mo** *(highlighted)* | **Full-Service — $649/mo** |
|---|---|---|
| Monthly bookkeeping | Everything in Essential | Everything in Growth |
| Annual tax return | Quarterly tax planning | Payroll for up to 10 |
| Email support (4-hr SLA) | Monthly 30-min call | Dedicated advisor, unlimited calls |
| Best for: solo & side-hustles | Best for: 1–5 person shops | Best for: 5–20 person shops |

Below the tiers, **radical-honesty subsection**:

> **What we don't charge extra for**
> Phone calls. Emails. Quick questions. Adding a category to your books. Explaining a form. If it takes us less than 15 minutes, it's included. Always.
>
> **What costs extra (and why)**
> Multi-state returns: +$75/state. Prior-year cleanup (getting you current): one-time fee, quoted upfront based on volume. Special situations (crypto, K-1s, S-corp election): quoted before we start, never after.

CTA: **Start with any tier — first month is 50% off if you're switching from another accountant.**

---

### 5.4 How We Work (`/how-we-work`)

Opens with:
> *"You've been ghosted by an accountant before. Here's why that won't happen with us."*

Sections:
1. **What happens the day you sign up** — bullet timeline with real times ("within 1 hour: welcome email + calendar invite for your kickoff call")
2. **What a normal month looks like** — day-by-day, what NJ does behind the scenes so Maya doesn't have to think about it
3. **What happens if the IRS contacts you** — the exact 4-step protocol
4. **What happens if you leave us** — we hand you everything, in a format your next accountant can use, in 5 business days. No hostage-taking.

---

### 5.5 About (`/about`)

Opens with:
> *"You want to know the person doing your books. Fair."*

- One real photo of NJ (or the founder)
- The story: **why NJ started this practice**, in first person, one page max
- What NJ believes about small business (3 short principles)
- Credentials (CPA, EA, years) — at the *bottom*, small. Credentials confirm what the story already made you feel.

---

### 5.6 Contact (`/contact`)

Two options, side by side, equal weight:

- **Book a 15-min call** — Cal.com embed
- **Write us instead** — short form (Name, Email, Phone optional, Business, "What's on your mind?" free text)

Below both:
> *"Whichever you pick, you'll hear from a real person within 4 business hours. That's the promise."*

---

### 5.7 Thank You (`/thank-you`)

The most under-designed page on most websites — we make it a moment.

- **Confirmation**: *"Got it. [First name] will email you within 4 hours."*
- **What happens next** (3 concrete steps)
- **In the meantime, one thing you can do** — a link to a **free 1-page PDF**: *"The 5 receipts most small businesses forget to save — and what they cost you."* (Lead magnet — captures the visitor even if they ghost the call.)

---

## 6. Design System (from `brand-guidelines.md` v2)

- **Palette:** Aubergine `#2C1E3F`, Persimmon `#EA5A3D`, Lilac Mist `#C4B0DC`, Cream `#F4EAD5`, Ivory `#FDFAF2`, Graphite `#221E2E`, Sage `#758F73`, Fog `#B4AFC0`
- **Type:** Fraunces (display) + Inter (body) + Caveat (sparingly, for emphasis words)
- **Signature moves:** organic blob image masks, Lilac Mist radial glow, hand-drawn Persimmon underline swoosh
- **8pt grid, generous whitespace, no emoji icons, no generic gradients**

Reference direction we're pulling from (approved by Ben): the Carcione Tax & Accounting site by Hostcode — its **restraint, whitespace, single-signature colour, card-based services, and friendly photography with a soft gradient hero**. We keep those instincts; we swap purple → Aubergine + Persimmon + Lilac Mist so NJ has its own visual identity, not a copy.

---

## 7. Proof Components (The "Show, Don't Tell" Toolkit)

These are the reusable pieces of the site that *demonstrate* rather than *declare*. Every one earns its place by making a claim measurable.

| Component | What it proves | How it proves it |
|---|---|---|
| `<LiveCounter />` | We have real clients and real results | Reads live from Supabase, shows "as of [date]" — no static "trusted by many" |
| `<ResponseTimeBadge />` | We reply fast | Pulls median first-reply-time from NJ's email data (manually updated weekly to start), displays *"3h 12m this week"* |
| `<PricingCard />` | We're transparent | Shows the actual number. No "starting at." No "call for quote." |
| `<InboxPreview />` | You get real reports | Mockup screenshot of a monthly bookkeeping report — labelled *"This is what lands in your inbox on the 5th of every month"* |
| `<ClientQuote />` | Real people trust us | First name + city + industry + one specific sentence — no vague "great service!" testimonials |
| `<HonestyStrip />` | We tell the truth even when it's not flattering | The "what we don't do" / "what costs extra" sections |
| `<GuaranteeChip />` | We stand behind what we say | Small badges: *"30-day current-or-free"*, *"4-hr reply-or-free"* |
| `<PersonalBio />` | You get a real person, not a chatbot | Real photo, first-person copy, first name in email replies |

**If a section on the site doesn't use at least one proof component or make one specific, falsifiable claim — it doesn't ship.**

---

## 8. Content Rules (Audit Every Sentence Against These)

Before any headline or body copy goes into a component, it passes 3 checks:

1. **The "prove it" check** — If you can insert *"…and here's proof"* after the sentence, and there's no proof in the next paragraph, cut or rewrite it.
2. **The "would Maya say it?" check** — Read it as if you're Maya from §1. Does it sound like a real person's language, or a marketing document?
3. **The "removed for cliché" list** — the following words are banned from the site entirely: *leverage, synergy, holistic, best-in-class, comprehensive, cutting-edge, innovative solutions, industry-leading, world-class, seamless, robust, robustly, empower, unlock, thought leader, thought leadership.*

Preferred replacements: use verbs, name specifics, quote a client, show a number.

---

## 9. Data Models (Supabase)

### `contact_submissions`
- `id` (uuid, PK)
- `created_at` (timestamptz)
- `name` (text)
- `email` (text)
- `phone` (text, nullable)
- `business_name` (text, nullable)
- `industry` (text, nullable — bakery / contractor / salon / other)
- `revenue_range` (text enum: `<100k` / `100k-500k` / `500k-2m` / `2m+`)
- `service_interest` (text[])
- `message` (text)
- `source` (text — which page/CTA)
- `switching_from_accountant` (bool, nullable — powers the 50% welcome offer)

### `proof_metrics`
Manually updated weekly by NJ, read publicly.
- `id` (uuid)
- `updated_at` (timestamptz)
- `clients_served_total` (int)
- `taxes_saved_total_usd` (int)
- `median_reply_hours_this_week` (numeric)
- `note` (text — optional caveat shown as a small footnote)

### `client_quotes`
- `id`, `first_name`, `city`, `industry`, `quote`, `active` (bool)

**RLS:**
- `contact_submissions`: insert-only from public via API route, read only for `admin` role
- `proof_metrics`, `client_quotes`: read-only public, write only for `admin`

---

## 10. Third-Party Services & Env Vars

| Service | Purpose | Env vars |
|---|---|---|
| Supabase | DB + Auth (admin only) | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| Resend | Instant lead email to NJ | `RESEND_API_KEY`, `NJ_NOTIFICATION_EMAIL` |
| Cal.com | Discovery-call booking | `NEXT_PUBLIC_CAL_LINK` |
| Vercel | Hosting + Analytics | (auto) |
| Plausible | Privacy-friendly analytics | `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` |

---

## 11. What "Done" Looks Like for v1

- [ ] All 7 pages built, responsive (tested at 375px / 768px / 1440px)
- [ ] Brand system from `brand-guidelines.md` v2 applied throughout
- [ ] Every proof component from §7 built and used at least once
- [ ] Every sentence on the site passes the §8 audit
- [ ] Contact form → Supabase + Resend email to NJ ≤ 2 seconds
- [ ] Cal.com booking works end-to-end from at least 3 pages
- [ ] Live counter reads real numbers from `proof_metrics`
- [ ] Response-time badge shows a real weekly number
- [ ] Lead magnet PDF ("5 forgotten receipts") built and gated behind a form
- [ ] Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO
- [ ] `npm run build` passes clean
- [ ] Deployed to Vercel with custom domain and HTTPS
- [ ] NJ has received their first test lead end-to-end
- [ ] NJ has been walked through updating `proof_metrics` weekly

---

## 12. Explicitly Out of Scope for v1

- Client login portal
- Document upload
- Blog / content hub
- Online payment
- Automated tax filing
- Chatbot
- Live chat widget (breaks the "real person will reply in 4h" promise)

---

## 13. Open Questions for Ben Before Building Starts

1. **Domain name** — does NJ own one? (e.g. `njtaxservices.com` / `njaccounting.com`) If not, buy one — I can recommend where.
2. **Real proof metrics** — do we have real numbers for clients-served / dollars-saved / response-time, or do we launch with plausible starter numbers and mark them *"as of launch"*?
3. **Client quotes** — do we have 2–3 real client permissions to quote? If not, launch with none (no fake testimonials — ever) and add them post-launch.
4. **Pricing** — are $199 / $349 / $649 the right anchor prices, or does NJ have different numbers?
5. **The person** — who is the real person doing the books? Do we have a photo, a first name, a short bio?
6. **The guarantees** — is NJ comfortable with the two written guarantees (30-day current-or-free, 4-hr reply-or-free)? These are the site's biggest differentiators. If not, we soften them; but the softer they get, the weaker the pitch.
7. **Cal.com vs Calendly vs form-only** — Cal.com is my recommendation (free, clean, no branding); confirm before I wire it up.
8. **Lead magnet** — do we have or can we produce the "5 forgotten receipts" 1-page PDF? If not, we skip it in v1 and add in v1.1.

---

**⏸ Waiting on Ben's approval + answers to §13 before code is written.**
