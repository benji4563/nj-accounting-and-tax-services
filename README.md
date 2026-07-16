# NJ's Accounting and Tax Services — njaccountstax.com

Marketing website for **NJ's Accounting and Tax Services** — accounting + tax for US small businesses.
Built with Next.js, Tailwind, Supabase, Resend, and Cal.com.

**Promise on the site:** *Focus on growth. We handle the finances.*

---

## What's in this repo

| Path | What it is |
|---|---|
| `app/` | The pages users see (Home, Services, Pricing, How we work, About, Contact, Thank you) + API route |
| `components/` | Reusable building blocks (design system, signature visual pieces, proof components, layout, home sections) |
| `lib/` | Helper code (Supabase clients, proof-metrics reader, utilities) |
| `supabase/schema.sql` | Database schema — run this in Supabase SQL editor |
| `public/` | Static assets — Njock's photo, favicon, lead-magnet PDF |
| `brand-guidelines.md` | Full brand system (voice, colours, type, do/don'ts) |
| `project_specs.md` | Website blueprint — read this to understand what we built and why |
| `Skills/website-builder/SKILL.md` | The build playbook Claude follows |
| `CLAUDE.md` | Project rules Claude reads first every session |

---

## Run it locally (first time)

### 1. Install everything

Open a terminal in this folder and run:

```bash
npm install
```

This downloads Next.js, Tailwind, and all the other pieces. Takes 1–3 minutes.

### 2. Add your secret keys

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then fill in `.env.local` with real values. You need:

- **Supabase URL + keys** — from [supabase.com](https://supabase.com) → your project → Settings → API
- **Resend API key** — from [resend.com](https://resend.com) → API Keys
- **Cal.com link** — your public booking page slug (e.g. `njock/discovery`)

The site will still render without these keys — but the contact form won't save anywhere or email you.

### 3. Add Njock's photo

Save Njock's headshot as `public/njock.jpg`. Recommended: at least 800×1000px, JPG or PNG, plain background.

Until you add it, the site shows a stylised placeholder portrait — nothing breaks.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Set up Supabase (first time)

1. Sign up at [supabase.com](https://supabase.com) → create a new project (free tier is fine)
2. Go to **SQL Editor** → **New Query**
3. Copy the contents of `supabase/schema.sql`, paste it in, hit **Run**
4. Go to **Project Settings** → **API** — copy the URL, `anon` key, and `service_role` key into your `.env.local`

That's it. The `proof_metrics` table gets seeded with the launch defaults (42 clients / $1.8M / 3h 12m). Njock updates it weekly by editing the row directly in Supabase.

---

## Deploy to Vercel

1. Push this repo to GitHub (if not already)
2. Go to [vercel.com/new](https://vercel.com/new) → import the GitHub repo
3. Paste the same `.env.local` values into Vercel's env-vars UI
4. Deploy. Vercel gives you a `something.vercel.app` URL immediately
5. In Vercel → Settings → Domains, add `njaccountstax.com` and follow the DNS instructions

---

## Design system quick reference

- **Palette:** Aubergine `#2C1E3F`, Persimmon `#EA5A3D`, Lilac Mist `#C4B0DC`, Cream `#F4EAD5`, Ivory `#FDFAF2`
- **Fonts:** Fraunces (display) + Inter (body) + Caveat (script emphasis)
- **Signature visual moves:** organic blob image masks, Lilac Mist radial glow behind hero, hand-drawn Persimmon underline swoosh on 1–2 emphasis words per hero headline

Full details in `brand-guidelines.md`.

---

## The four written guarantees (baked into the site)

1. **The 4-Hour Promise** — reply to every email within 4 business hours, or that month is on us
2. **The Straight-Price Promise** — every price on the pricing page is what you pay; any unwarned surprise charge is voided
3. **The Report-on-the-5th Promise** — monthly bookkeeping report by the 5th, or that month is free
4. **The No-Hostage Promise** — if you leave, all files handed to your next accountant in their format within 5 business days

These aren't marketing lines — they're operational commitments. Please don't break them.

---

## Owner

Ben (Benjamin Enyong Njock) — on behalf of Njock Simon Ndum, Co-founder & CEO.
