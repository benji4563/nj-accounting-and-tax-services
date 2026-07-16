# NJ's Accounting and Tax Services — Project Specs

**Version:** v3 — 2026-07-15 (locked, building begins)
**Domain:** `njaccountstax.com` (Ben to purchase)
**Status:** ✅ All decisions locked. Next.js build in progress.

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

## 1. Who This Site Is For

Meet **Maya.** She owns a 6-person bakery in Fresno. Revenue: about $600k/year. She started three years ago.

- She has a **shoebox of receipts** on her desk right now.
- Her last accountant took **eight days to reply** to a simple email, then charged her for the call to chase him.
- She googled *"what is a K-1"* at 11pm last Tuesday.
- She's not stupid — she's a *baker*, not a CPA.
- She's afraid the IRS will find something. She doesn't know what.
- She wants to open a second location but doesn't know if she can afford it.
- She reads accounting-firm websites and they all sound like law firms trying too hard.

**Everything we build on this site is for Maya.** If a section doesn't help Maya feel *seen, safer, or clearer* — it doesn't ship.

Secondary personas: contractors, salon owners, dentists, freelancers, food-truck operators — all US-based, 1–20 employees, $100k–$5M revenue.

---

## 2. What the App Does & Success

A marketing website that:

1. **Meets the visitor's fear on arrival**
2. **Shows — not says — how NJ is different** using proof components (§7)
3. **Removes every excuse not to book** (transparent price, 15-min free call, no phone tree, one form)

### Success measurably

- Homepage → book-a-call **conversion ≥ 4%**
- Time-on-page for `/services` ≥ 90s
- Zero "call for a quote" copy anywhere
- First real inbound lead within **7 days of launch**
- Lighthouse ≥ 95 (Perf, A11y, BP, SEO)
- Deployed to Vercel with `njaccountstax.com` domain

---

## 3. Tech Stack

| Layer | Choice |
|---|---|
| Language | TypeScript |
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Fonts | Fraunces + Inter + Caveat (via `next/font`) |
| Backend/DB | Supabase (contact_submissions + proof_metrics + client_quotes) |
| Email | Resend |
| Booking | Cal.com (free tier, no branding) |
| Deployment | Vercel |
| Analytics | Vercel Analytics + Plausible |
| Icons | Lucide React |

---

## 4. The Person Behind NJ

**Njock Simon Ndum** — Co-founder & CEO.
- QuickBooks certified.
- CFO certification in progress (completing in a couple of months).
- The only person clients hear from. Email replies come from Njock personally.

Photo: candid photo provided 2026-07-15. Used on About page as-is; used on hero after tight crop through blob mask. Proper studio headshot planned post-launch.

---

## 5. Sitemap (Problem-First)

| Route | Opens on… |
|---|---|
| `/` | *"You're behind on your books and it's stressing you out."* |
| `/services` | *"You don't know exactly what you need. Let us show you."* |
| `/pricing` | *"You're tired of 'call for a quote'."* |
| `/how-we-work` | *"You've been ghosted by an accountant before."* |
| `/about` | *"You want to know the person doing your books."* |
| `/contact` | *"You're ready to talk. Here are two easy ways."* |
| `/thank-you` | *"We got you. Here's exactly what happens next."* |

Out for v1: portal, uploads, blog, payments.

---

## 6. Home Page Content Blueprint

**Hero** — Headline with Persimmon underline swoosh on *behind* and *ahead*:
> *"You're behind on your books. Let's get you ahead."*
> Subhead: *Bookkeeping and tax services for small businesses. Flat monthly pricing. A real person you can email. Books current within 30 days — or your next month is free.*
> Primary CTA: **Book a free 15-min call** • Secondary: **See our pricing**
> Right: Njock's photo in organic blob mask + Lilac Mist glow + floating "30-day current" card.
> Small badge above headline: *"Median first reply this week — 3h 12m"*

**Proof strip** — three numbers, live from Supabase:
- **42** small businesses served since 2019
- **$1.8M** saved for our clients
- **3h 12m** median first-reply time this week

*(All starter figures marked internally as "as of launch". Njock updates weekly.)*

**Emotional recognition** — 3 cards, each opens with a quote in the visitor's voice, answered with a specific action.

**Services grid** — 4 cards, each leads with the *feeling*, ends with the *deliverable*:
1. Monthly bookkeeping — "The shoebox problem"
2. Tax preparation — "The 11pm-Google problem"
3. Quarterly tax planning — "The 'am I paying too much?' problem"
4. Audit support & representation — "The 'the IRS just called' problem"

**Meet Njock** — one real photo, first-person short bio referencing his QuickBooks certification and CFO track; ends with *"When you email us, I'm the one who answers."*

**Your first 30 days** — 4-step timeline (Day 0 → Day 1–7 → Day 8–30 → Every month after).

**Pricing preview** — 3 tiers side-by-side with visible prices (§8).

**CTA drop** (Aubergine bg) — *"Ready to hand over the shoebox?"* + Persimmon CTA.

**Footer** — minimal. Contact, hours, the 4 guarantees named.

---

## 7. Proof Components (Show-Don't-Tell Toolkit)

| Component | What it proves |
|---|---|
| `<LiveCounter />` | Real clients, real results (from Supabase `proof_metrics`) |
| `<ResponseTimeBadge />` | We reply fast (weekly median displayed) |
| `<PricingCard />` | We're transparent (real numbers, no "starting at") |
| `<InboxPreview />` | You get real reports (mock screenshot of a monthly report) |
| `<ClientQuote />` | Real people trust us (first name + city + industry + one specific sentence — none in v1, added post-launch) |
| `<HonestyStrip />` | Radical honesty (what we don't do, what costs extra) |
| `<GuaranteeChip />` | We stand behind promises (one of the 4 named guarantees) |
| `<PersonalBio />` | Real person, not a chatbot (Njock, photo, first person) |

**If a section doesn't use at least one proof component or make one specific, falsifiable claim — it doesn't ship.**

---

## 8. Pricing (Locked)

| Tier | Price | For |
|---|---|---|
| **Essential** | **$299/mo** | Solo & side-hustles |
| **Growth** ⭐ | **$549/mo** | 1–5 person shops (featured) |
| **Full-Service** | **$949/mo** | 5–20 person shops (includes payroll for 10) |

**Every tier includes:** email replies within 4 business hours, monthly bookkeeping report by the 5th, annual tax return, phone calls at no extra charge if they're under 15 min.

**What costs extra** (radical-honesty subsection):
- Multi-state returns: +$75/state
- Prior-year cleanup: quoted upfront, one-time
- Special situations (crypto, K-1s, S-corp elections): quoted before we start

**Offer:** *"Switching from another accountant? Your first month is 50% off."*

---

## 9. The Four Named Guarantees (Locked)

Displayed as `<GuaranteeChip />` components throughout the site.

1. **The 4-Hour Promise** — We reply to every email within 4 business hours. If we don't, that month is on us.
2. **The Straight-Price Promise** — Every price on our pricing page is what you pay. If we ever bill you for something we didn't warn you about in writing first, that charge is voided.
3. **The Report-on-the-5th Promise** — Your monthly bookkeeping report lands in your inbox by the 5th of every month. If it's ever late, that month is free.
4. **The No-Hostage Promise** — If you ever decide to leave, we hand every file to your next accountant in their format within 5 business days. No fees, no drama.

---

## 10. Design System (from `brand-guidelines.md` v2)

- **Palette:** Aubergine `#2C1E3F`, Persimmon `#EA5A3D`, Lilac Mist `#C4B0DC`, Cream `#F4EAD5`, Ivory `#FDFAF2`, Graphite `#221E2E`, Sage `#758F73`, Fog `#B4AFC0`, Blush `#EFD9C9`
- **Type:** Fraunces (display) + Inter (body) + Caveat (sparingly)
- **Signature:** organic blob image masks, Lilac Mist radial glow, hand-drawn Persimmon underline swoosh
- **8pt grid, generous whitespace, no emoji icons, no generic gradients**

---

## 11. Content Rules

1. **The "prove it" check** — if you can insert *"…and here's proof"* after any sentence and the next paragraph has no proof, cut or rewrite.
2. **The "would Maya say it?" check** — read as Maya. If it sounds like marketing, cut.
3. **Banned words:** *leverage, synergy, holistic, best-in-class, comprehensive, cutting-edge, innovative solutions, industry-leading, world-class, seamless, robust, robustly, empower, unlock, thought leader, thought leadership.*

---

## 12. Data Models (Supabase)

### `contact_submissions`
- `id` uuid PK, `created_at` timestamptz
- `name`, `email`, `phone` (nullable), `business_name` (nullable), `industry` (nullable)
- `revenue_range` enum: `<100k` / `100k-500k` / `500k-2m` / `2m+`
- `service_interest` text[]
- `message` text
- `source` text (which page/CTA)
- `switching_from_accountant` bool

### `proof_metrics` (single row, updated weekly by Njock)
- `id` uuid PK, `updated_at` timestamptz
- `clients_served_total` int (initial: 42)
- `dollars_saved_total_usd` int (initial: 1_800_000)
- `median_reply_hours_this_week` numeric (initial: 3.2)
- `note` text (optional caveat)

### `client_quotes` (empty at launch)
- `id`, `first_name`, `city`, `industry`, `quote`, `active` bool

**RLS:**
- `contact_submissions`: insert-only from public via API; read only for `admin`
- `proof_metrics`, `client_quotes`: read-only public, write only for `admin`

---

## 13. Third-Party Services & Env Vars

| Service | Purpose | Env vars |
|---|---|---|
| Supabase | DB + Auth (admin only) | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| Resend | Instant lead email to Njock | `RESEND_API_KEY`, `NJ_NOTIFICATION_EMAIL` |
| Cal.com | Discovery booking | `NEXT_PUBLIC_CAL_LINK` |
| Plausible | Analytics | `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` |
| Vercel | Hosting | (auto) |

All keys go in `.env.local` (never committed).

---

## 14. "Done" Checklist for v1

- [ ] All 7 pages built, responsive (375 / 768 / 1440)
- [ ] Brand system applied throughout
- [ ] Every proof component built + used at least once
- [ ] Every sentence passes the §11 audit
- [ ] Contact form → Supabase + Resend email ≤ 2s
- [ ] Cal.com booking works from ≥ 3 pages
- [ ] Live counter reads real numbers from `proof_metrics`
- [ ] Lead magnet PDF built + gated behind form
- [ ] Lighthouse ≥ 95 (Perf, A11y, BP, SEO)
- [ ] `npm run build` passes clean
- [ ] Deployed to Vercel with `njaccountstax.com` + HTTPS
- [ ] Njock has received first test lead end-to-end
- [ ] Njock has been walked through updating `proof_metrics` weekly

---

## 15. Explicitly Out of Scope for v1

Portal, uploads, blog, payments, chatbot, live chat widget (breaks the 4-hour human-reply promise).

---

## 16. Change Log

- **v3 — 2026-07-15** — All open questions answered. Locked: `njaccountstax.com` domain, $299/$549/$949 pricing, 4 named guarantees, Njock as CEO/only person, Cal.com booking, launch metrics as starter figures, no testimonials in v1, lead-magnet PDF approved. Next.js build begins.
- **v2 — 2026-07-15** — Problem-first structure, "show-don't-tell" content law, proof-component toolkit, Maya persona. Superseded.
- **v1 — 2026-07-15** — Initial draft with service-first structure. Superseded.
