# NJ's content plan — sales tax on labor + household employers

**Written:** 9 Nov 2026 · **For:** the next 6 posts on njaccountstax.com · **Pipeline:** `nj-seo` skill, one post per row, same template.

**Status (11 Nov 2026):** #1 is **live** at `/blog/is-labor-taxable` (published 10 Nov, commit `4348e22`; linked from the NY, Florida and Texas labor posts; primary added to `used-keywords.md`). #2–#6 not started; write the next one only when Ben asks.

## Why these topics

Google Search Console (screenshots from Ben, 9 Nov 2026) shows where NJ's clicks come from right now:

| Page | Clicks (previously) |
|---|---|
| Do Babysitters Have to Pay Taxes? | 4 (0) |
| Do Contractors Charge Sales Tax on Labor in NY? | 3 (0) |
| Is Labor Taxed in Florida? | 2 (0) |
| Accounting for Donations to Nonprofit Organizations | 1 (0) |
| Fund accounting | 1 (0) |

- Trending query: **"can you charge sales tax on labor"**. Google flags `/blog/when-is-nys-sales-tax-due` at **+288% impressions**.
- The winners answer one narrow question, often tied to one state, in two groups: **sales tax on labor** and **household employers** (the babysitter post).
- Site total, ~3 months: 20 clicks, 4,260 impressions, CTR 0.5%, average position 15.8. More posts in a group Google already trusts is the fastest way to move pages from page 2 to page 1.

## Keyword data

- **KP** = Google Keyword Planner via the company engine (`keyword_orchestrator.py`, Apify, US, English, run 9 Nov 2026, ~$1.20). Output: `00 Knowledge/Keyword Finder/output/nj-salestax-labor-2026-11-09_verified.csv`. CI = Google Ads competition index 0–100 (advertiser competition, not ranking difficulty).
- **Export** = volumes already in `Keywords for accountant/keyword-clusters.csv` (older export, different source; treat as indicative).
- No volume was invented. State-by-state labor queries (California, Pennsylvania, New Jersey…) did **not** come back with measurable volume, so no single-state labor post is proposed beyond the ones already live. Re-check if Search Console starts showing them.

## The six posts, in publishing order

| # | Working title | Primary keyword | Supporting keywords (→ H2s / FAQ) | Volume | Links to (existing) |
|---|---|---|---|---|---|
| 1 | **Is Labor Taxable? Sales Tax on Labor, State by State** (hub) ✅ live 10 Nov | is labor taxable · 390 KP, CI 0 | sales tax on labor 140 KP · can you tax labor 140 Export · can you charge tax on labor 110 Export · do you charge tax on labor 110 Export · sales tax on services by state 90 KP · do contractors charge sales tax on labor 90 KP | ~1,000/mo combined, one intent | NY contractor labor, Florida labor, Texas services, sales-tax compliance services, NYS sales-tax due date |
| 2 | **Nanny Tax: What You Owe When You Hire Household Help** | nanny tax · 880 KP, CI 39 | household employee taxes 590 · estimate nanny taxes 480 (worked example H2) · irs household employee 170 · household employer 140 · nanny tax rules 110 · nanny and taxes 110 · household employee tax form 70 · nanny tax deduction 90 | ~2,500/mo combined | Babysitter post (the worker's side; this is the employer's side), Form 941 (to explain household employers use Schedule H instead) |
| 3 | **When Is Florida Sales Tax Due?** | when is florida sales tax due · 170 Export | filing frequency, due dates, late penalties | 170/mo | NYS due-date post (+288%), Florida labor post, hub (#1) |
| 4 | **Nanny W-2 or 1099? Is Your Nanny an Employee?** | 1099 for nanny · 170 KP | 1099 form for nanny 170 · nanny w2 170 · nanny independent contractor 30 · household employee w2 20 · generate w2 for nanny 20 | ~560/mo combined | Nanny tax (#2), who gets a 1099, 1099-NEC vs 1099-MISC, babysitter post |
| 5 | **When Is Sales Tax Due in California?** | when is sales tax due in california · 110 Export | filing frequency, due dates | 110/mo | NYS and Florida due-date posts, hub (#1) |
| 6 | **How to Pay a Nanny Legally (and What Payroll Options Cost)** | paying a nanny · 320 KP, CI 37 | nanny payroll 720 · household payroll services 1,000 · paying nanny under the table 70 · best way to pay nanny 30 | ~2,100/mo combined, high CPC ($12–19) | Nanny tax (#2), nanny W-2 vs 1099 (#4) |

**Why this order:** #1 targets the query already trending and becomes the hub every state post links back to. #2 is the biggest demand and backs up the best-performing post. #3 follows the page Google is already pushing (+288%). The rest fill out the two groups.

## Rules for writing these (from `nj-seo` and the company rules)

- **No cannibalising.** #2 is written for the *family that hires*; the babysitter post is for the *sitter*. Each links to the other in its first section. #1 must not repeat the NY, Florida or Texas posts in full: one paragraph per state with a link out.
- **Thresholds and rates are researched at writing time** from IRS and state sources and cited on the page (the babysitter post uses $3,000 for 2026; re-confirm, don't copy).
- **#6 is a guide, not a sales page,** unless NJ's actually offers household payroll. The services page lists bookkeeping, tax prep, quarterly planning and audit support, not payroll. Don't imply a service NJ's doesn't run; the natural pitch is Schedule H and year-end filing under tax preparation.
- After each post: add the primary to `Keywords for accountant/used-keywords.md`, and add links **from** the existing posts to the new one (the NY, Florida and Texas posts link to #1; the babysitter post links to #2).

## How to check it worked (re-read Search Console mid-December)

- #1 indexed and showing impressions for "is labor taxable" / "sales tax on labor".
- The NY and Florida labor pages' average position improving after the hub links to them.
- Household queries ("nanny tax", "household employee") appearing in Search Console.

## Not in the plan, on purpose

- "Does [state] have sales tax" lookups (e.g. Arizona 590/mo): still parked in cluster I. Google answers these directly from .gov pages, unlike the "is labor taxable" questions that need explaining.
- Brand queries in the KP results (Breedlove/HomePay, GTM, Care.com): competitor names, excluded under the company brand rule.
