/**
 * Single source of truth for the blog index.
 *
 * Extracted from app/blog/page.tsx on 2026-09-25 so that the blog index, the
 * RSS feed (app/rss.xml/route.ts) and the sitemap all read the same list
 * instead of drifting apart. Add a new post here once; every consumer picks
 * it up.
 *
 * Keep newest-first — the index, the feed and `latestPosts()` all rely on
 * that ordering rather than re-sorting.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  minutes: number;
  cover: string;
  coverAlt: string;
  /**
   * The LinkedIn post copy for this article.
   *
   * This is NOT the excerpt and NOT a summary — it is its own piece of
   * writing, run through the `anthropic-skills:seo-blog-humor-style` skill,
   * with its own hook, analogy and callback. Accounting is a boring niche;
   * funny and interesting is the differentiator, and a feed-templated post
   * throws that away.
   *
   * It is published in the RSS feed as `<content:encoded>`, which is what the
   * "RSS by Zapier" trigger maps onto LinkedIn's Update Content field. That
   * is why the good copy lives here rather than only in a routine's report:
   * Zapier polls the feed from its own cloud, so posting keeps working when
   * this machine is closed.
   *
   * Constraints, enforced by scripts/post_to_linkedin.py and by LinkedIn:
   *   - 3,000 characters max
   *   - no unescaped `(` or `)` — LinkedIn's Little Text Format treats them as
   *     reserved. Easiest fix is to write copy that needs none.
   *
   * Optional: a post without it falls back to the excerpt in the feed, which
   * still works but reads flat.
   */
  linkedin?: string;
};

export const POSTS: Post[] = [
  {
    slug: 'sales-tax-compliance-services',
    title: 'Sales Tax Compliance Services: What Small Businesses Need',
    excerpt:
      'What sales tax compliance services cover, whether labor is taxed in Texas, Florida and New York, when returns are due, and when you can honestly do it yourself.',
    date: '2026-09-26',
    minutes: 10,
    cover: '/blog/sales-tax-compliance-services/hero-vintage-cash-register-counter.webp',
    coverAlt:
      'A pale green vintage cash register with a hand crank on a shop counter beside a white teacup and saucer',
    linkedin: `It's the 19th. The sales tax return is due tomorrow. And you are staring at a $50 invoice that says "tightened loose bolts," wondering whether the drop of oil you used on the stuck one counts as a sale.

In Florida, it might. That is not a joke. It is the Department of Revenue's own example.

With sales tax, you are the middleman. You collect it from your customer, hold it for a few weeks, and hand it to the state — like being the friend stuck holding everyone's coats at a party, except the coats are money and the host can audit you.

What trips up small businesses most is labor:

→ Texas taxes a list of services. Repairing a homeowner's kitchen is not on it. Repairing a restaurant's kitchen is.

→ Florida exempts labor-only repairs, but only if your records prove no part or material went in. One part, and the whole charge is taxable.

→ New York taxes contractor repair work, labor included. Capital improvements are not taxed.

And every one of those states wants a return even when you sold nothing. The zero return feels silly. States do not find it silly.

We are accountants, so reading three states' sales tax bulletins counts as a fun evening for us. We wrote it all up in plain English, including when you honestly do not need to pay anyone to handle this.

https://njaccountstax.com/blog/sales-tax-compliance-services

A drop of oil is cheap. Knowing what it means is cheaper than finding out later.

#SmallBusiness #SalesTax #Bookkeeping #Contractors #Tax`,
  },
  {
    slug: 'why-is-tax-relief-services-calling-me',
    title: 'Why Is Tax Relief Services Calling Me? And How to Stop It',
    excerpt:
      'The calls are not the IRS. They start because your number sold to a lead list, usually after a public tax lien. How the pitch works, and how to make it stop.',
    date: '2026-08-28',
    minutes: 9,
    cover: '/blog/why-is-tax-relief-services-calling-me/hero-desk-phone-document-tray.webp',
    coverAlt:
      'A classic black push-button desk telephone beside a wire document tray holding white papers on a wood-veneer office desk',
    linkedin: `You know the call. Different number every time, always a "Senior Tax Resolution Specialist," always somehow free to talk right this second.

Here's the part nobody mentions: that is not the IRS.

A tax lien is public record. Filing one is less like sealing an envelope and more like putting your phone number on a billboard — and there is an entire industry out there that reads billboards for a living. Your number hit a lead list, the list got sold, the phone started ringing. None of it is coincidence. It's the product working exactly as designed.

Three things worth knowing:

→ The IRS opens with a letter. Not a call, not a text, and never a gift card. If someone skipped the boring envelope stage entirely, be suspicious.

→ "Pennies on the dollar" is a sales line, not a program. Offer in Compromise is real — but the IRS decides who qualifies, and a call centre gets exactly zero votes.

→ Most of what they want to charge you for is free at irs.gov. Tedious, yes. Free, also yes.

We're accountants. We are not, by trade, a thrilling people. But we wrote the whole thing up in plain English anyway — including the part about making the calls actually stop.

https://njaccountstax.com/blog/why-is-tax-relief-services-calling-me

Your Senior Tax Resolution Specialist will have to find someone else to help.

#SmallBusiness #Tax #IRS #Bookkeeping #TaxRelief`,
  },
  {
    slug: 'do-seniors-have-to-file-taxes',
    title: 'Do Seniors Have to File Taxes? A Plain-English Answer',
    excerpt:
      'There is no age when filing stops. The 2025 income thresholds for people over 65, what income the IRS counts, the Social Security rules, and the new senior deduction.',
    date: '2026-08-28',
    minutes: 10,
    cover: '/blog/do-seniors-have-to-file-taxes/hero-tax-folders-reading-glasses-desk.webp',
    coverAlt:
      'A wooden desk with two folders labeled taxes, a vintage rotary telephone, wire-rimmed reading glasses, loose coins and cash under a warm desk lamp',
  },
  {
    slug: 'is-fresh-start-tax-relief-legit',
    title: 'Is Fresh Start Tax Relief Legit? What Is Real, What Is Not',
    excerpt:
      'The IRS Fresh Start changes are real, but they are not a program you enroll in. What is genuine, what is a sales pitch, and what you can do yourself for free.',
    date: '2026-08-27',
    minutes: 9,
    cover: '/blog/is-fresh-start-tax-relief-legit/hero-calculator-magnifier-tax-form.webp',
    coverAlt:
      'Overhead view of a calculator and a magnifying glass resting on a printed 1040 tax form with W-9 and W-4 forms on a wooden desk',
  },
  {
    slug: 'when-to-hire-a-tax-attorney',
    title: 'When to Hire a Tax Attorney (and When You Don’t)',
    excerpt:
      'The specific situations that genuinely need a tax attorney, the far more common ones that don’t, and a 60-second gut-check to tell them apart.',
    date: '2026-08-27',
    minutes: 9,
    cover: '/blog/when-to-hire-a-tax-attorney/hero-stacked-case-documents.webp',
    coverAlt:
      'A close-up overhead view of a thick stack of assorted papers and documents fanned out on a desk surface',
  },
  {
    slug: 'bookkeeping-vs-accounting',
    title: 'Bookkeeping vs. Accounting: What’s the Difference?',
    excerpt:
      'A bookkeeper records the numbers; an accountant interprets them, files your taxes, and tells you what to do next. Where the line actually falls, and what each one costs.',
    date: '2026-08-25',
    minutes: 9,
    cover: '/blog/bookkeeping-vs-accounting/hero-calculator-notepad-cash.webp',
    coverAlt:
      'Overhead view of a scientific calculator and a blank spiral notepad resting on a fan of US dollar bills, with a silver pen laid beside them on a white marble surface',
  },
  {
    slug: 'tax-resolution-services',
    title: 'Tax Resolution Services: What They Actually Cover',
    excerpt:
      'Tax resolution services cover IRS payment plans, Offers in Compromise, and penalty relief. What’s real, what’s a scam, and what you can do yourself for free.',
    date: '2026-08-24',
    minutes: 9,
    cover: '/blog/tax-resolution-services/hero-desk-calculator-notices.webp',
    coverAlt:
      'A calculator, phone, pay stub and a notepad with handwritten totals spread across a desk',
  },
  {
    slug: 'accrual-basis-accounting',
    title: 'Accrual Basis Accounting: What It Is and How It Works',
    excerpt:
      'Accrual basis accounting counts income when you earn it and expenses when you incur them. Who has to use it, and why it can show a profit while your bank account disagrees.',
    date: '2026-08-17',
    minutes: 9,
    cover: '/blog/accrual-basis-accounting/hero-ledger-and-unpaid-invoices.webp',
    coverAlt:
      'An open leather-bound ledger with hand-ruled columns of numbers on a wooden desk, beside a clipped stack of invoices, a rolled landscape blueprint tied with string, stacked stone paver samples, an old adding machine with curling paper tape, and a cooling mug of coffee',
  },
  {
    slug: 'how-much-does-a-tax-attorney-cost',
    title: 'How Much Does a Tax Attorney Cost? A Straight Answer',
    excerpt:
      'Real ranges by the hour and by the case, when you actually need one, and the free tax help most people never hear about.',
    date: '2026-08-10',
    minutes: 9,
    cover: '/blog/how-much-does-a-tax-attorney-cost/hero-desk-folders-and-legal-pad.webp',
    coverAlt:
      'An overhead view of a stack of manila folders tied with string, a yellow legal pad covered in handwritten notes, an antique push-button calculator, and wire-rimmed reading glasses on a worn wooden desk',
  },
  {
    slug: 'cash-basis-accounting',
    title: 'Cash Basis Accounting: What It Is and When It Works',
    excerpt:
      'Cash basis accounting counts money when it moves, not when it’s earned. What it means, who has to switch to accrual, and when it’s smart to do it anyway.',
    date: '2026-07-29',
    minutes: 9,
    cover: '/blog/cash-basis-accounting/hero-cash-drawer-and-ledger.webp',
    coverAlt:
      'An open cash drawer with neatly stacked bills and coins beside a spiral notebook of hand-ruled daily totals and a fan of paper receipts, on a sunlit wooden counter',
  },
  {
    slug: 'fund-accounting',
    title: 'What is fund accounting? A plain-English guide for nonprofits',
    excerpt:
      'Fund accounting tracks donations and grants by purpose instead of one bank total. What it means, when a spreadsheet still works, and when a CPA has to sign off.',
    date: '2026-07-25',
    minutes: 9,
    cover: '/blog/fund-accounting/hero-ledger-and-fund-folders.webp',
    coverAlt:
      'A worn ledger book, folders labeled Donations, Expenses and Volunteers, and an old adding machine with curling paper tape on a sunlit wooden desk',
  },
  {
    slug: 'can-you-do-taxes-without-w2',
    title: 'Can you do taxes without a W-2? Yes — here’s exactly how',
    excerpt:
      'The IRS has a form for exactly this. How Form 4852 works, how to pull your wage data free, and why waiting costs ten times more than owing.',
    date: '2026-07-22',
    minutes: 9,
    cover: '/blog/can-you-do-taxes-without-w2/hero-missing-w2-paperwork.webp',
    coverAlt:
      'A torn-open IRS envelope, a fan of paper pay stubs, and a laptop showing a blank tax form on a kitchen table',
  },
  {
    slug: 'do-i-need-an-accountant-for-your-small-business',
    title: 'Do you actually need an accountant for your small business?',
    excerpt:
      'Six honest signs it’s time, three signs it isn’t, the real cost math, and the questions to ask before you hire.',
    date: '2026-07-15',
    minutes: 8,
    cover: '/blog/do-i-need-an-accountant-for-your-small-business/hero-kitchen-table-shoebox.webp',
    coverAlt:
      'A small-business owner at her kitchen table with a laptop and a shoebox of paper receipts, morning window light',
  },
];

/** Newest `n` posts, for the feed and for "keep reading" rails. */
export function latestPosts(n: number): Post[] {
  return POSTS.slice(0, n);
}

/** Look up a single post by slug. Returns undefined if it is not registered. */
export function postBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/**
 * Every post except the one given — the candidate pool for internal links.
 * Internal linking was a 🔴 audit finding: blog posts are the only pages that
 * rank, and they were passing no authority to the commercial pages.
 */
export function otherPosts(slug: string): Post[] {
  return POSTS.filter((p) => p.slug !== slug);
}
