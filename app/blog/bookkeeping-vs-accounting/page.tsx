import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/design-system/Section';
import { Button } from '@/components/design-system/Button';
import { StructuredData } from '@/components/seo/StructuredData';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { BackToTop } from '@/components/blog/BackToTop';
import {
  blogPostingJsonLd,
  faqPageJsonLd,
  breadcrumbJsonLd,
} from '@/lib/structured-data';

const SLUG = 'bookkeeping-vs-accounting';
const TITLE = 'Bookkeeping vs. Accounting: What’s the Difference?';
const DESCRIPTION =
  'Bookkeeping vs accounting: one records every transaction, the other interprets them, files your taxes, and tells you what to do next — here’s the real difference.';
const PUBLISHED = '2026-08-25';
const MODIFIED = '2026-08-25';
const HERO = `/blog/${SLUG}/hero-calculator-notepad-cash.webp`;

const TOC = [
  { id: 'core-difference', label: 'The core difference: recording the numbers vs. interpreting them' },
  { id: 'what-bookkeepers-do', label: 'What a bookkeeper actually does, week to week' },
  { id: 'what-accountants-do-and-credentials', label: 'What an accountant does — and what the credentials actually mean' },
  { id: 'what-each-costs', label: 'What each one actually costs you' },
  { id: 'can-a-bookkeeper-do-your-taxes', label: 'Can a bookkeeper do your taxes?' },
  { id: 'when-you-need-both', label: 'When you only need a bookkeeper — and when you need both' },
  { id: 'cost-of-getting-it-backwards', label: 'What getting this backwards costs you' },
  { id: 'faq', label: 'Frequently asked questions' },
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://njaccountstax.com/blog/${SLUG}`,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['Njock'],
    images: [
      {
        url: `https://njaccountstax.com${HERO}`,
        width: 1600,
        height: 900,
        alt: 'Overhead view of a scientific calculator and a blank spiral notepad resting on a fan of US dollar bills, with a silver pen laid beside them on a white marble surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FAQ = [
  {
    q: 'What is the difference between a bookkeeper and an accountant?',
    a: 'A bookkeeper records financial transactions as they happen — categorizing expenses, sending invoices, reconciling bank statements, and keeping the books current. An accountant works one level up: they take those records, prepare financial statements, file tax returns, and advise on decisions like structure, deductions, and planning. Bookkeeping is the record; accounting is what you do with it.',
  },
  {
    q: 'Can a bookkeeper do my taxes?',
    a: 'Generally, no. Bookkeeping and tax preparation are different skill sets, and a bookkeeper’s engagement usually doesn’t include filing a return. Anyone paid to prepare tax returns needs an IRS Preparer Tax Identification Number (PTIN), and only enrolled agents, CPAs, and attorneys have unlimited rights to represent you before the IRS on anything beyond the return itself — audits, collections, appeals. If your bookkeeper hasn’t said which of those they are, ask before April.',
  },
  {
    q: 'Do I need both a bookkeeper and an accountant?',
    a: 'It depends on how complicated your business is. A simple sole proprietorship with light transaction volume can sometimes get by with careful DIY bookkeeping and tax software. Once you have payroll, multiple revenue streams, inventory, or you’re applying for a loan, the two roles start to earn their keep separately — or, more efficiently, as one bundled service that does both.',
  },
  {
    q: 'How much does a bookkeeper cost compared to an accountant?',
    a: 'As employees, the U.S. Bureau of Labor Statistics puts the median annual wage for bookkeeping, accounting, and auditing clerks at $49,210 and for accountants and auditors at $81,680 (May 2024). Most small businesses don’t hire either as a full-time employee, though — they contract the work out, where bookkeeping-only services often run $150–$400 a month and accounting or tax-inclusive plans run higher, depending on what’s bundled in.',
  },
  {
    q: 'What’s the difference between accounts payable and accounts receivable?',
    a: 'Accounts payable is what your business owes — unpaid bills from suppliers and vendors. Accounts receivable is what’s owed to your business — invoices you’ve sent that clients haven’t paid yet. A bookkeeper tracks both continuously; a healthy gap between the two, with receivables collected faster than payables come due, is one of the clearest signs of a business with steady cash flow.',
  },
  {
    q: 'How often should I reconcile my bank account?',
    a: 'Monthly, right after your bank statement closes, is the honest answer for almost every small business. Waiting longer lets small errors — a duplicate charge, a missed deposit, a fee you didn’t expect — pile up quietly until they’re a lot more work to untangle. Businesses with high transaction volume sometimes reconcile weekly instead.',
  },
  {
    q: 'Can I do my own bookkeeping instead of hiring someone?',
    a: 'Yes, plenty of very small businesses do, at least at first. Software like QuickBooks or Wave can handle basic categorization and invoicing for a solo operation with straightforward transactions. The trade-off is time and error risk — bookkeeping done in twenty-minute bursts between everything else tends to drift, and drift is expensive to fix later. If your books are already clean and simple, you may not need to change anything.',
  },
  {
    q: 'What is “expensing” in accounting?',
    a: 'Expensing means recording the full cost of a purchase against income in the period you bought it, rather than spreading that cost out over time. A $40 box of printer paper gets expensed immediately; a $4,000 piece of equipment usually doesn’t — it gets capitalized and depreciated instead, because it provides value over several years, not just the month you bought it.',
  },
];

const CANONICAL_URL = `https://njaccountstax.com/blog/${SLUG}`;
const IMAGE_URL = `https://njaccountstax.com${HERO}`;

const linkClass =
  'border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon';

// Inline citation to an authoritative external source. Opens in a new tab and
// drops the referrer/opener for safety — the checklist wants rel="noopener".
function SourceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

export default function Post() {
  return (
    <>
      <StructuredData
        data={blogPostingJsonLd({
          slug: SLUG,
          title: TITLE,
          description: DESCRIPTION,
          image: IMAGE_URL,
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
        })}
      />
      <StructuredData data={faqPageJsonLd(FAQ)} />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: TITLE, path: `/blog/${SLUG}` },
        ])}
      />

      <article>
        {/* HERO */}
        <Section background="cream" className="!pb-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-body-sm text-graphite/75">
            <Link href="/" className="hover:text-persimmon">
              Home
            </Link>
            <span aria-hidden className="mx-2">
              /
            </span>
            <Link href="/blog" className="hover:text-persimmon">
              Blog
            </Link>
          </nav>

          <header className="mb-10 max-w-3xl">
            <div className="section-eyebrow mb-3">For small-business owners</div>
            <h1 className="font-display text-h1 text-aubergine">{TITLE}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-graphite/75">
              <time dateTime={PUBLISHED}>August 25, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>August 25, 2026</time>
              </span>
              <span aria-hidden>·</span>
              <span>9 min read</span>
              <span aria-hidden>·</span>
              <span>Written by Njock</span>
            </div>
          </header>

          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={HERO}
              alt="Overhead view of a scientific calculator and a blank spiral notepad resting on a fan of US dollar bills, with a silver pen laid beside them on a white marble surface"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </figure>
        </Section>

        {/* ANSWER + INTRO + TOC */}
        <Section background="cream" className="!pt-4">
          <div className="container-prose">
            <TableOfContents items={TOC} />

            <div className="mb-10 rounded-card border-l-4 border-persimmon bg-ivory p-6 md:p-8">
              <p className="text-body-lg text-aubergine">
                <strong>Short answer:</strong> bookkeeping vs. accounting
                comes down to one line — a bookkeeper records what already
                happened in your business, transaction by transaction, and an
                accountant interprets those records, files your taxes, and
                tells you what to do next. Bookkeeping is the raw material.
                Accounting is what gets built from it.
              </p>
              <p className="mt-4 text-body text-graphite">
                One catch: hiring one of them doesn’t automatically mean you
                have the other, and plenty of business owners find that out
                the hard way in the last week of March.
              </p>
            </div>

            <p className="text-body text-graphite">
              It’s the last week of March and Teodora — I’ll call her
              Teodora — runs a small neighborhood bakery, and she is
              starting to panic. Back in January, a friend recommended a
              bookkeeper: $150 a month, meticulous, categorized every flour
              delivery and espresso machine repair without missing a beat.
            </p>
            <p className="mt-4 text-body text-graphite">
              She just found out that same bookkeeper doesn’t file tax
              returns. Never has. It was never part of the job.
            </p>
            <p className="mt-4 text-body text-graphite">
              Teodora didn’t hire the wrong person. She hired exactly the
              right person for a job that turned out to be only half of what
              she needed done — and nobody mentioned that in January.
            </p>
          </div>
        </Section>

        {/* 1 — CORE DIFFERENCE */}
        <Section background="ivory" id="core-difference">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The core difference: recording the numbers vs. interpreting them
            </h2>
            <p className="mt-4 text-body text-graphite">
              Every accounting system runs on the same two-layer structure,
              whether the business is a bakery or a law firm. The layers
              don’t compete — one feeds the other.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Bookkeeping is clerical and continuous.
                </strong>{' '}
                It’s the ongoing work of recording transactions as they
                happen — every deposit, every bill, every payroll run —
                so the books stay current instead of becoming a shoebox
                project every April.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accounting is analytical and periodic.
                </strong>{' '}
                It takes what bookkeeping produced and turns it into
                something you can act on: financial statements, a tax
                return, a read on whether the business can afford to hire.
              </li>
              <li>
                <strong className="text-aubergine">
                  Bookkeepers generally don’t make decisions for you.
                </strong>{' '}
                Their job is accurate, organized data. Accountants are the
                ones who look at that data and tell you what it means and
                what to do about it.
              </li>
              <li>
                <strong className="text-aubergine">
                  Neither one replaces the other.
                </strong>{' '}
                Accounting without bookkeeping has nothing accurate to
                analyze. Bookkeeping without accounting produces a very tidy
                pile of numbers nobody has interpreted — which is exactly
                where Teodora ended up.
              </li>
            </ul>
          </div>
        </Section>

        {/* 2 — WHAT BOOKKEEPERS DO */}
        <Section background="cream" id="what-bookkeepers-do">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What a bookkeeper actually does, week to week
            </h2>
            <p className="mt-4 text-body text-graphite">
              For Teodora, the $150-a-month bookkeeper was genuinely worth
              it — the work just wasn’t everything she assumed it was.
              Here’s what it actually covered.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Recording every transaction.
                </strong>{' '}
                Every sale, every supplier invoice, every card swipe gets
                logged and categorized — the raw entries that everything
                else depends on.
              </li>
              <li>
                <strong className="text-aubergine">
                  Reconciling the bank and credit card statements.
                </strong>{' '}
                Monthly, right after the statement closes, is the honest
                cadence for most small businesses. Wait longer, and a
                duplicate charge or a missed deposit turns into a much
                longer untangling job.
              </li>
              <li>
                <strong className="text-aubergine">
                  Sending invoices and tracking who’s paid.
                </strong>{' '}
                What clients owe you (accounts receivable) and what you owe
                suppliers (accounts payable) live in the books as they
                build up, not as a mental note.
              </li>
              <li>
                <strong className="text-aubergine">
                  Running payroll, if there’s a team.
                </strong>{' '}
                Wages, withholdings, and filings get processed on schedule
                — one of the areas where a missed deadline gets expensive
                fast.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              None of that touches a tax return, a business-structure
              decision, or advice on whether a purchase is worth making.
              That’s the next layer up.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/notebook-laptop-daily-recording.webp`}
              alt="An open spiral notebook filled with handwritten daily entries and to-do lists, resting on a wooden desk beside a laptop, a computer mouse, and a pen"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — WHAT ACCOUNTANTS DO AND CREDENTIALS */}
        <Section background="ivory" id="what-accountants-do-and-credentials">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What an accountant does — and what the credentials actually mean
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the layer Teodora was missing, and it’s also where
              the job titles start to matter more than most people expect.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Accountants prepare and file tax returns.
                </strong>{' '}
                They take the bookkeeper’s clean records and turn them
                into the actual filing — federal, state, and often
                quarterly estimates along the way. That includes the returns
                people forget are returns, like{' '}
                <Link href="/blog/sales-tax-compliance-services" className={linkClass}>
                  sales tax filings
                </Link>
                .
              </li>
              <li>
                <strong className="text-aubergine">
                  They advise on structure and deductions.
                </strong>{' '}
                Whether an LLC election makes sense, which expenses are
                deductible, how to plan around a big purchase — this is
                interpretation, not recordkeeping.
              </li>
              <li>
                <strong className="text-aubergine">
                  Bookkeepers generally need no license; accountants often
                  hold a degree, and some hold more.
                </strong>{' '}
                A CPA is a state-licensed credential on top of that,
                requiring an exam and supervised experience — it’s not
                the same thing as “accountant,” and not every business
                needs one.
              </li>
              <li>
                <strong className="text-aubergine">
                  Representation rights before the IRS differ by credential.
                </strong>{' '}
                According to the{' '}
                <SourceLink href="https://www.irs.gov/tax-professionals/understanding-tax-return-preparer-credentials-and-qualifications">
                  IRS
                </SourceLink>
                , enrolled agents, CPAs, and attorneys have unlimited rights
                to represent you on audits, collections, and appeals.
                PTIN-only preparers can only speak for returns they
                personally prepared, and only to lower-level IRS staff.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Worth saying plainly: Njock is an accountant, not a CPA —
              which is honestly what most small businesses in Teodora’s
              position actually need. If a situation calls for CPA-level
              representation, that gets said upfront, not discovered later.
              See{' '}
              <Link href="/services" className={linkClass}>
                what our bookkeeping and tax service actually covers
              </Link>{' '}
              if you’re weighing what level you need.
            </p>
          </div>
        </Section>

        {/* 4 — WHAT EACH ONE COSTS */}
        <Section background="cream" id="what-each-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What each one actually costs you
            </h2>
            <p className="mt-4 text-body text-graphite">
              As employees, the pay gap between the two roles is real and
              well documented. As services a small business contracts out,
              the picture looks a little different.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Bookkeeping clerks: $49,210 median annual wage.
                </strong>{' '}
                That’s the{' '}
                <SourceLink href="https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm">
                  U.S. Bureau of Labor Statistics
                </SourceLink>{' '}
                figure for bookkeeping, accounting, and auditing clerks as
                of May 2024.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accountants and auditors: $81,680 median annual wage.
                </strong>{' '}
                Roughly two-thirds higher, per the same{' '}
                <SourceLink href="https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm">
                  BLS Occupational Outlook Handbook
                </SourceLink>
                , reflecting the added education and decision-making scope.
              </li>
              <li>
                <strong className="text-aubergine">
                  Almost no small business hires either one full-time.
                </strong>{' '}
                Contracted bookkeeping-only services commonly run
                $150–$400 a month; tax-inclusive plans run higher,
                depending on what’s bundled in and how complex the return
                is.
              </li>
              <li>
                <strong className="text-aubergine">
                  Bundled pricing avoids paying for two separate
                  relationships.
                </strong>{' '}
                Our own{' '}
                <Link href="/pricing" className={linkClass}>
                  Essential plan starts at $299 a month
                </Link>{' '}
                and includes both monthly bookkeeping and an annual tax
                return — the exact gap that caught Teodora, closed in one
                flat fee.
              </li>
            </ul>
          </div>
        </Section>

        {/* 5 — CAN A BOOKKEEPER DO YOUR TAXES */}
        <Section background="ivory" id="can-a-bookkeeper-do-your-taxes">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Can a bookkeeper do your taxes?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Generally, no — and this is the exact question Teodora
              should have asked in January.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Bookkeeping and tax preparation are different skills.
                </strong>{' '}
                A bookkeeper’s training is in accurate recordkeeping, not
                tax law — the two overlap, but neither one substitutes for
                the other.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Being paid to prepare a return requires a PTIN.
                </strong>{' '}
                Anyone the IRS allows to prepare tax returns for pay needs a
                Preparer Tax Identification Number, whether or not they
                also do bookkeeping.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Most bookkeeping engagements simply don’t include it.
                </strong>{' '}
                It was never in the scope of what Teodora hired her
                bookkeeper to do — not a mistake on either side, just an
                assumption nobody corrected.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. The fix is asking early, not discovering it in March.
                </strong>{' '}
                One direct question in January — “do you also file my
                return, or do I need someone else for that?” — would
                have saved her the scramble entirely.
              </li>
            </ol>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/charts-magnifying-glass-analysis.webp`}
              alt="A printed page of assorted financial charts and graphs on a wooden desk, examined through a black magnifying glass, with a spiral-bound notebook and colored pencils nearby"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — WHEN YOU NEED BOTH */}
        <Section background="cream" id="when-you-need-both">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When you only need a bookkeeper — and when you need both
            </h2>
            <p className="mt-4 text-body text-graphite">
              Not every business needs the full stack, and it’s worth
              saying so plainly rather than selling everyone the same plan.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A bookkeeper (or careful DIY) may be enough if…
                </strong>{' '}
                you’re a sole proprietor with simple, low-volume
                transactions and you’re comfortable running your own
                numbers through tax software once a year.
              </li>
              <li>
                <strong className="text-aubergine">
                  You likely need both once payroll enters the picture.
                </strong>{' '}
                Withholding rules, filing deadlines, and worker
                classification carry real penalties for getting them wrong.
              </li>
              <li>
                <strong className="text-aubergine">
                  Multiple revenue streams or a loan application raise the
                  stakes.
                </strong>{' '}
                A lender wants financial statements an accountant prepared,
                not a spreadsheet you exported yourself.
              </li>
              <li>
                <strong className="text-aubergine">
                  Growth is usually the real signal, not size alone.
                </strong>{' '}
                See our post on{' '}
                <Link
                  href="/blog/do-i-need-an-accountant-for-your-small-business"
                  className={linkClass}
                >
                  whether you need an accountant for your small business
                </Link>{' '}
                for the fuller picture, and{' '}
                <Link href="/how-we-work" className={linkClass}>
                  how a bundled bookkeeping-and-tax relationship actually
                  runs
                </Link>{' '}
                month to month.
              </li>
            </ul>
          </div>
        </Section>

        {/* EMPHASIS — COST OF GETTING IT BACKWARDS */}
        <Section background="aubergine" id="cost-of-getting-it-backwards">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What getting this backwards costs you
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Teodora’s version of this mistake is common and forgivable
              — she just found the gap at the worst possible time. Tax
              preparers who take on new clients get harder to find as the
              deadline closes in, and the ones who still have room often
              charge more for the rush.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              A simple small-business return that might run a few hundred
              dollars booked in February can easily cost meaningfully more
              booked in the final two weeks before the deadline — if you
              can find someone with room on their calendar at all.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The other direction costs money too: paying full accounting
              rates every month for a business that only ever needed
              recordkeeping is real overspending, just quieter, because
              nothing ever goes wrong to point it out.{' '}
              <strong className="text-ivory">
                A single service that scales bookkeeping and tax together,
                and tells you honestly which one you actually need, is
                almost always the cheaper problem.
              </strong>
            </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section background="cream" id="faq">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Frequently asked questions
            </h2>
            <dl className="mt-8 divide-y divide-aubergine/10">
              {FAQ.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="font-display text-h4 text-aubergine">
                    {item.q}
                  </dt>
                  <dd className="mt-3 text-body text-graphite">{item.a}</dd>
                </div>
              ))}
            </dl>

            <AuthorBio />
          </div>
        </Section>

        {/* RELATED */}
        <RelatedPosts
          items={[
            {
              href: '/blog/do-i-need-an-accountant-for-your-small-business',
              eyebrow: 'Blog',
              title: 'Do I need an accountant for my small business?',
              blurb:
                'The decision one level up from this one — when careful DIY and a good bookkeeper stop being enough.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Bookkeeping and tax prep, explained plainly',
              blurb:
                'What monthly bookkeeping, tax preparation, and audit support actually include — no jargon, no vague deliverables.',
            },
            {
              href: '/pricing',
              eyebrow: 'Pricing',
              title: 'Real prices. No “call for a quote.”',
              blurb:
                'Three flat monthly plans, every fee on the page, including exactly what’s bundled at each tier.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure which one you actually need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. Bring your
              situation exactly as it is. We’ll tell you honestly whether
              you need bookkeeping, tax prep, or both — and we won’t sell
              you more than that.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" href="/contact" showArrow>
                Book a free 15-min call
              </Button>
              <Button variant="secondary" href="/pricing">
                See our pricing
              </Button>
            </div>
            <p className="mt-8 text-body-sm text-graphite/75">
              Prefer to read on your own?{' '}
              <Link href="/blog" className={linkClass}>
                More posts from the blog
              </Link>
              .
            </p>
          </div>
        </Section>
      </article>

      <BackToTop />
    </>
  );
}
