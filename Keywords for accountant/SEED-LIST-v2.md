# Keyword research seed list — v2

**Purpose:** replace the exhausted keyword pool with research aimed at NJ's
actual buyer. Run these seeds through Ahrefs / SEMrush / Keywords Everywhere
and export to `Service and Phrase Keywords v2.csv`.

**Date drafted:** 2026-07-22
**Current pool:** 50 usable keywords (~4 months at 3 posts/week)

---

## Why v1 failed — read this before running anything

The existing export was seeded on the bare word **"accounting"**. That pulls
in everything *adjacent to the word* rather than everything *adjacent to the
customer*. Its highest-volume rows were:

| Volume | Keyword | Why it is worthless here |
|---|---|---|
| 3,600 | layered process audit | manufacturing QA, not tax |
| 2,400 | do checking accounts earn interest | consumer banking |
| 1,900 | do merchant marine get navy federal account | consumer banking |
| 1,600 | how to sign up for trump account | consumer banking |
| 1,300 | audit news | news |
| 1,000 | principles of accounting | university coursework |

Of 241 rows, roughly **12** described a small-business owner's real problem.
A prior triage pass independently parked 194 of 253 keywords as junk.

**The rule for v2: seed on the sentence a worried owner types at 11pm, not on
the name of the profession.** Nobody searches "accounting". They search "do i
have to pay quarterly taxes" and "can i write off my car".

---

## Tool configuration

**Match type:** Questions + Phrase match (Terms match is what dragged in the
banking noise).

**Filters to set:**
- Volume: **≥ 50/mo** (US)
- KD: **≤ 45** — the domain is new with no backlink authority
- Exclude words: `job, jobs, salary, intern, career, resume, course, degree,
  certification, exam, school, class, classes, training, student, textbook,
  homework, principles, fundamentals, login, sign in, near me, quickbooks,
  xero, turbotax, intuit, freshbooks, gusto, adp, netsuite, sage, chime,
  novo, mercury, bluevine, deloitte, pwc, kpmg, ernst, checking account,
  savings account, navy federal, trump account, mint`
- Country: **US**

**Also pull:** the "Questions" tab and "People also ask" for each seed —
those become FAQ entries verbatim, which is what earns the FAQ rich result.

---

## Tier 1 — highest commercial intent (run these first)

These are people actively deciding whether to pay someone. They convert.

### P. Entity structure & business setup
Owners agonise over this and the wrong choice costs real money — which is
exactly the moment they look for an accountant.

```
do i need an llc for my small business
llc vs s corp for small business
when should i become an s corp
single member llc taxes
what can i write off as an llc
do i need a business bank account
how to pay yourself from your llc
s corp reasonable salary
```

### T. Cost, pricing & switching
Maps straight onto NJ's transparent-pricing positioning. Cluster D already
covers part of this and performs well (`how much does a tax attorney cost`,
KD 2).

```
how much does bookkeeping cost for a small business
how much does a bookkeeper cost per month
how much does an accountant cost for a small business
what does a bookkeeper actually do
questions to ask an accountant before hiring
how to switch accountants
when to fire your accountant
is a bookkeeper worth it
```

### Q. Quarterly estimated taxes
High anxiety, recurring four times a year, and the failure mode is a penalty.

```
do i have to pay quarterly taxes
how to pay quarterly taxes
how much should i set aside for taxes self employed
what happens if i miss a quarterly tax payment
quarterly tax deadlines
how to calculate estimated taxes
```

---

## Tier 2 — high volume, strong topical authority

### R. Deductions & write-offs
Enormous search volume; the risk is thin, commodity content. Win by being
specific and honest about what does *not* qualify.

```
small business tax deductions
home office deduction requirements
can i write off my car for business
business meal deduction
what can i write off as self employed
startup costs tax deduction
is my phone bill tax deductible
```

### S. Payroll
```
how to do payroll for a small business
payroll taxes explained
do i need to run payroll as an s corp
what is form 941
how to pay yourself as a small business owner
employee vs contractor classification
```

### U. 1099s & year-end obligations
Sharply seasonal (Dec–Jan) — publish ahead of the season.

```
do i need to send a 1099
1099 nec vs 1099 misc
who gets a 1099
1099 filing deadline
what happens if i don't file 1099s
do i need to 1099 my contractor
```

### V. IRS notices & audit fear
Directly feeds NJ's audit-support service line.

```
what to do if you get a letter from the irs
what triggers an irs audit for a small business
how likely is a small business audit
irs notice cp2000 what to do
how far back can the irs audit you
can the irs take my business
```

---

## Tier 3 — niche verticals (the real differentiator)

**This is the biggest untapped area.** These map directly onto the six niches
in NJ's own operations playbook, and volumes are lower but competition is far
weaker and buyer intent is far higher — someone searching "booth rent taxes"
is a salon owner with a specific problem, not a student.

Each of these also justifies a dedicated service page later.

### W. Real estate & rental property
```
rental property tax deductions
schedule e vs schedule c
depreciation on rental property
real estate professional status requirements
bookkeeping for rental property owners
how many rental properties before you need an accountant
```

### X. Construction & contractors
```
bookkeeping for contractors
job costing for construction
percentage of completion accounting
contractor vs employee 1099
how to track job expenses construction
retainage accounting
```

### Y. Restaurants & hospitality
```
restaurant bookkeeping basics
tip reporting requirements for restaurants
restaurant profit margin benchmarks
food cost percentage calculation
restaurant payroll taxes
```

### Z. Churches & nonprofits
Pairs with the new **O. Nonprofit & fund accounting** cluster already seeded
(`fund accounting basics`, 390/mo, KD 22).

```
church accounting basics
nonprofit bookkeeping requirements
do churches have to file tax returns
501c3 financial reporting requirements
how to record donations in accounting
nonprofit chart of accounts
```

### AA. Salons, barbershops & personal care
```
booth rent taxes
salon owner tax deductions
barber shop bookkeeping
1099 for booth renters
self employed hairstylist taxes
```

---

## What to do with the export

1. Save as `Service and Phrase Keywords v2.csv` in this folder.
2. Cluster it into the lettered scheme above, writing a
   `keyword-clusters-expanded.csv`-shaped file (same 10 columns).
   The `nj-seo` picker unions every `keyword-clusters*.csv` automatically.
3. Park anything off-target in a skip cluster (prefix `I.` `J.` `K.` `L.`
   `M.`) rather than deleting it — the picker honours those prefixes, and it
   preserves the judgement for next time.
4. **Never** point the picker at a raw export for auto-selection. That is what
   `--include-raw` is gated behind; the scheduled unattended run must only
   ever see curated clusters.

## Expected yield

Tier 1 alone should produce 60–100 usable keywords. All three tiers together
should comfortably exceed 250 — roughly **18 months of runway at 3 posts per
week**, and enough depth to make a faster cadence defensible on content
grounds if the velocity risk is ever worth revisiting.
