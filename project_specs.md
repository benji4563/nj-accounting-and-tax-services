# NJ's Accounting and Tax Services — Project Specs

**Status:** DRAFT v1 — awaiting Ben's approval before any code is written.

---

## 1. What the app does & who uses it

A marketing website for **NJ's Accounting and Tax Services** that:
- Explains what NJ does in plain English (accounting + tax for small businesses)
- Builds trust fast (client stories, credentials, transparent pricing)
- Converts visitors into **discovery-call bookings** or **contact-form leads**

**Primary user:** small-business owners (US-based, 1–20 employees, revenue $100K–$5M) who feel behind on their books, anxious about tax season, or afraid of an IRS audit.

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Language | TypeScript |
| Framework | Next.js (latest, App Router) |
| Styling | Tailwind CSS |
| Backend/DB | Supabase (for contact-form submissions + booking log) |
| Deployment | Vercel |
| Form/booking (v1) | Native Supabase-backed form. **v2:** Calendly embed for discovery calls |
| Analytics | Vercel Analytics (free tier) |
| Email notifications | Resend (transactional email to NJ when a lead comes in) |

---

## 3. Pages & user flows

**Public pages:**
- `/` — Home (hero, value props, services overview, testimonials, pricing teaser, CTA)
- `/services` — Full service list (bookkeeping, tax prep, tax planning, audit support, payroll)
- `/pricing` — Transparent tiered pricing (Essential / Growth / Full-Service)
- `/about` — About NJ (story, credentials, why small business)
- `/contact` — Contact form + phone + email
- `/thank-you` — Post-submission page

**Authenticated (v2, not v1):**
- Client portal — document upload, tax return status. Out of scope for launch.

**Primary flow:** Home → Services or Pricing → Contact → Thank You. Every page has a sticky "Book a free 15-min discovery call" CTA.

---

## 4. Data models (Supabase)

**`contact_submissions`**
- `id` (uuid, PK)
- `created_at` (timestamptz)
- `name` (text)
- `email` (text)
- `phone` (text, nullable)
- `business_name` (text, nullable)
- `revenue_range` (text, enum: `<100k` / `100k-500k` / `500k-2m` / `2m+`)
- `service_interest` (text[], multi-select)
- `message` (text)
- `source` (text — which page/CTA triggered)

**RLS:** insert-only from public (via API route), read only for authenticated `admin` role.

---

## 5. Third-party services

| Service | Purpose | Env vars needed |
|---|---|---|
| Supabase | Database + Auth | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| Resend | Email NJ on new lead | `RESEND_API_KEY`, `NJ_NOTIFICATION_EMAIL` |
| Vercel | Hosting + Analytics | (auto via Vercel dashboard) |

---

## 6. What "done" looks like for v1 launch

- [ ] All 6 pages built, responsive (mobile-first, tested at 375px / 768px / 1440px)
- [ ] Brand system from `brand-guidelines.md` applied consistently
- [ ] Contact form submits to Supabase + triggers Resend email to NJ
- [ ] Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO
- [ ] `npm run build` passes clean
- [ ] Deployed to Vercel with a custom domain
- [ ] NJ has received their first test submission end-to-end

---

## 7. Explicitly out of scope for v1

- Client login portal (v2)
- Document upload (v2)
- Blog / content hub (v2)
- Online payment (v2)
- Automated tax filing (v3)

---

## 8. Open questions for Ben before starting

1. **Domain name** — does NJ already own one? (e.g. `njtaxservices.com`)
2. **Real testimonials** — do we have 2–3 real client quotes, or do we use placeholders and get real ones post-launch?
3. **Pricing tiers** — do you already have NJ's actual price points, or should I draft plausible starter numbers for review?
4. **Logo** — is there an existing logo, or should we design a wordmark from the brand guidelines?
5. **Calendly** — does NJ have a Calendly account, or use a simple form for now?

---

**⏸ Waiting on Ben's approval + answers to §8 before any code is written.**
