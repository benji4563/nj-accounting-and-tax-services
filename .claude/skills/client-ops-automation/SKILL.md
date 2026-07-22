---
name: client-ops-automation
description: >
  API-first automation for the recurring per-client Ops pipeline behind every
  AI-SEO website: DNS records, business email auth (Zoho MX/SPF/DKIM), Google
  Search Console verification + sitemap, and Vercel environment variables +
  redeploys. Built to scale from 1 client to 1000 without doing each step by
  hand in a browser. Trigger on any request to "set up email", "add DNS",
  "wire env vars", "verify search console", "onboard a client's domain", or
  "automate ops". Argument is an optional domain or client name.
---

# Client Ops Automation

> **Scope flag (per AfriShield CLAUDE.md):** this skill was authored inside the
> NJ client folder because that is where the need surfaced, but it is **generic,
> reusable Ops logic for every AI-SEO client**. It should be **promoted to the
> service template** at `../../02-Services/ai-seo/` once proven. Do not treat it
> as NJ-specific. Flag the promotion to the user; do not silently copy.

## Why this exists

The AI-SEO business builds a website + runs SEO per client. Each client needs the
same Ops wiring, and doing it by hand in a browser does not scale to 100–1000
clients. This skill turns that wiring into **idempotent API calls** with
**verification baked in**, so a client's domain goes from raw to fully-wired in
one scripted pass, stopping only at the few steps that legally/practically need a
human.

## The golden rule learned the hard way

**Do Vercel work through the API/CLI, never the browser.** The claude-in-chrome
browser is unreliable on the Vercel SPA (tab crashes, "cannot access page host"
permission drops) and — critically — **cannot save long DNS values** (a long DKIM
TXT set via `form_input` does not register in Vercel's React form; it silently
no-ops with no error). The API has none of these problems. Reserve the browser
only for UIs with no API (and even then, prefer the official API — Search Console
and Zoho both have one).

**Always verify against the authoritative nameserver, not just a public resolver.**
```bash
nslookup -type=TXT <name>.<domain> ns1.vercel-dns.com   # did Vercel actually store it?
nslookup -type=TXT <name>.<domain> 8.8.8.8              # has it propagated?
```
Checking only Google conflates "never saved" with "still propagating". Vercel DNS
propagates in seconds, so if a record is absent from `ns1.vercel-dns.com` after
~30s, the write failed — retry, don't wait.

## One-time setup per operator (the "where the human comes in", once)

1. **Vercel access token** — create at <https://vercel.com/account/tokens>, scope
   it to the team. Store it so scripts read it **without the agent ever seeing the
   literal value**: put `VERCEL_TOKEN=...` in a gitignored `~/.nj-ops.env` (or the
   OS keychain) and `source` it. The agent references `$VERCEL_TOKEN`, never the
   string. (Alternative with zero token handling by the agent: install the CLI and
   run `vercel login` once — the agent then calls `vercel …` which uses stored auth.)
2. **Team/‌project IDs** — `curl -s -H "Authorization: Bearer $VERCEL_TOKEN" \
   https://api.vercel.com/v2/teams` for `teamId`; project id from the project's
   Settings. Cache in `~/.nj-ops.env` as `VERCEL_TEAM_ID` / `VERCEL_PROJECT_ID`.
3. **(Optional) Google Search Console API** — a Google Cloud service account with
   the Search Console API enabled, added as an owner of each property, lets us
   verify + submit sitemaps without the browser. Until then, verification uses the
   `GOOGLE_SITE_VERIFICATION` env-var meta-tag method (already wired in
   `app/layout.tsx`) and the human clicks "Verify" once.
4. **Chrome extension fallback** — if the browser is still needed for an API-less
   UI, grant the Claude extension **persistent "on all sites" (or per-host) access**
   in Chrome so host permission stops dropping mid-task.

## The pipeline (run per client domain)

Assume env: `DOMAIN`, `VERCEL_TOKEN`, `VERCEL_TEAM_ID`, `VERCEL_PROJECT_ID`.
All Vercel API calls append `?teamId=$VERCEL_TEAM_ID`.

### Step 1 — DNS records (Vercel API)
Create record:
```bash
curl -s -X POST "https://api.vercel.com/v2/domains/$DOMAIN/records?teamId=$VERCEL_TEAM_ID" \
  -H "Authorization: Bearer $VERCEL_TOKEN" -H "Content-Type: application/json" \
  -d '{"type":"TXT","name":"","value":"v=spf1 include:zoho.com ~all","ttl":60}'
```
- Root record → `"name":""`.  Subdomain (DKIM) → `"name":"zoho._domainkey"`.
- MX → add `"mxPriority":10` and `"value":"mx.zoho.com"`.
- **Idempotency:** `GET …/records` first; skip if an equal (type,name,value) exists.
  Do NOT re-run Vercel's built-in "Add Zoho preset" — it duplicates the 3 MX.
- CLI equivalent (handles auth/team): `vercel dns add $DOMAIN <name|@> <type> <value> [mxPriority]`.

**Zoho email record set** (US data center, console `mailadmin.zoho.com`):
| Type | Name | Value | Priority |
|---|---|---|---|
| MX | `@` | `mx.zoho.com` | 10 |
| MX | `@` | `mx2.zoho.com` | 20 |
| MX | `@` | `mx3.zoho.com` | 50 |
| TXT (SPF) | `@` | `v=spf1 include:zoho.com ~all` | — |
| TXT (DKIM) | `zoho._domainkey` | `v=DKIM1; k=rsa; p=…` (from Zoho console) | — |
| TXT (verify) | `@` | `zoho-verification=<code>.zmverify.zoho.com` | — |

Then verify each: `nslookup -type=<T> <name> ns1.vercel-dns.com`.

### Step 2 — Environment variables (Vercel API)
```bash
curl -s -X POST "https://api.vercel.com/v10/projects/$VERCEL_PROJECT_ID/env?teamId=$VERCEL_TEAM_ID" \
  -H "Authorization: Bearer $VERCEL_TOKEN" -H "Content-Type: application/json" \
  -d '{"key":"NJ_NOTIFICATION_EMAIL","value":"njock@njaccountstax.com","type":"plain","target":["production","preview"]}'
```
Standard AI-SEO env set: `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`,
`RESEND_API_KEY` (secret → `"type":"encrypted"`), `NJ_NOTIFICATION_EMAIL`,
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
`SUPABASE_SERVICE_ROLE_KEY` (encrypted). CLI: `echo -n "$VAL" | vercel env add KEY production`.

### Step 3 — Redeploy so env/DNS bake in
Env-var changes only take effect on a new build. CLI is simplest:
`vercel redeploy <prod-url>` (or `vercel deploy --prod`). Then confirm the change
is live, e.g. `curl -s https://$DOMAIN/ | grep google-site-verification`.

### Step 4 — Search Console
- **Now:** ensure `GOOGLE_SITE_VERIFICATION` env is set (Step 2) + redeployed, then
  human clicks Verify once, submit `sitemap.xml`.
- **Automated (after service-account setup):** Search Console API
  `sites.get`/`sitemaps.submit` — no browser.

## Human-in-the-loop checkpoints (unavoidable, keep short)

These are the ONLY places a human is required — everything else is scripted:
- **Any credential/password entry or account creation** (Zoho signup, Vercel login,
  Google sign-in). The agent must never type these.
- **Generating a provider-side secret** that only exists after a click: Zoho **DKIM
  selector** (creates the TXT value), **Resend API key**, Supabase keys. Human
  generates → pastes → agent writes to DNS/env via API.
- **Final "Verify"/"Enable" clicks** in a provider console where no API is wired yet
  (Zoho MX/SPF/DKIM verify+enable; Search Console verify) — until their APIs are set up.

## Idempotency & scale notes
- Every step is safe to re-run: GET-before-POST on DNS and env; treat 409/"already
  exists" as success.
- For N clients, drive this from a CSV/JSON of `{domain, notificationEmail, …}` and
  loop; the only manual fan-in is collecting each client's provider-side secrets
  (DKIM/Resend/Supabase), which can be batched.
- Log every skipped/duplicate record explicitly — never let a silent skip read as
  "done".

## Related
- [[nj-command-center-artifact]] — the Ops dashboard + current NJ wiring state.
- `../ai-seo-website-builder/SKILL.md` — the build side this Ops layer follows.
