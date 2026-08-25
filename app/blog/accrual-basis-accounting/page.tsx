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

const SLUG = 'accrual-basis-accounting';
const TITLE = 'Accrual Basis Accounting: What It Is and How It Works';
const DESCRIPTION =
  'Accrual basis accounting counts income when you earn it and expenses when you incur them — how it works, who has to use it, and why it can show a profit while your bank account disagrees.';
const PUBLISHED = '2026-08-17';
const MODIFIED = '2026-08-17';
const HERO = `/blog/${SLUG}/hero-ledger-and-unpaid-invoices.webp`;

const TOC = [
  { id: 'what-accrual-means', label: 'What accrual basis accounting actually means' },
  { id: 'accrual-vs-cash-example', label: 'Accrual vs. cash accounting, in one example' },
  { id: 'matching-principle-and-all-events-test', label: 'The matching principle and the rules behind the timing' },
  { id: 'who-must-use-accrual', label: 'Who has to use accrual (and who gets to choose)' },
  { id: 'benefits-of-accrual-accounting', label: 'The benefits of accrual accounting — and what they cost you' },
  { id: 'what-accrual-can-hide', label: 'What accrual can hide: profitable on paper, empty in the bank' },
  { id: 'cost-of-guessing', label: 'What guessing instead of knowing costs you' },
  { id: 'faq', label: 'Frequently asked questions' },
];

export const metadata: Metadata = {
  title: TITLE,
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
        width: 1376,
        height: 768,
        alt: 'An open leather-bound ledger with hand-ruled columns of numbers on a wooden desk, beside a clipped stack of invoices, a rolled landscape blueprint tied with string, stacked stone paver samples, an old adding machine with curling paper tape, and a cooling mug of coffee',
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
    q: 'What is the difference between cash accounting and accrual accounting?',
    a: 'Cash accounting records income and expenses when money actually moves — cash in, cash out. Accrual accounting records income when you earn it (the job is done, the invoice goes out) and expenses when you incur them, whether or not cash has changed hands yet. The gap between the two only matters when there is a delay between doing the work and getting paid for it, which for most small businesses is often.',
  },
  {
    q: 'What are the benefits of accrual accounting?',
    a: 'It matches income to the period you actually earned it, which makes a monthly or quarterly profit-and-loss statement tell you the truth about that period instead of whichever invoices happened to clear. It is also the method GAAP requires, the one a bank or investor expects to see, and the one that makes year-over-year comparisons mean something because the timing noise is gone.',
  },
  {
    q: 'Is accrual accounting required under GAAP?',
    a: 'Yes. Generally Accepted Accounting Principles require accrual accounting because it applies the matching principle — expenses recognized in the same period as the revenue they helped generate. Cash basis books are legal and common for tax purposes and day-to-day management, but they are not GAAP-compliant, and a lender or investor who wants GAAP financials will ask for accrual statements specifically.',
  },
  {
    q: 'Which businesses are legally required to use accrual accounting?',
    a: 'Regular C corporations, and partnerships with a C corporation partner, generally must use accrual once average annual gross receipts over the prior three tax years cross a threshold the IRS indexes for inflation every year. Businesses that carry real inventory generally must use accrual for purchases and sales, with a small-business exception tied to that same threshold. Sole proprietors, most partnerships, and S corporations are free to choose either method regardless of size.',
  },
  {
    q: 'What is the matching principle in accrual accounting?',
    a: 'It is the rule that expenses should be recorded in the same period as the revenue they helped produce, rather than the period the bill happened to get paid. A landscaping company that buys stone in March for a job it completes and invoices in April recognizes that stone as a cost of April’s revenue, not March’s cash outlay — the two numbers move together instead of landing in different months.',
  },
  {
    q: 'Can a profitable business run out of cash under accrual accounting?',
    a: 'Yes, and it is one of the most common surprises owners run into. Accrual net income can look strong while the bank account is nearly empty, because unpaid invoices count as earned revenue before the cash arrives, and because certain real cash outflows — inventory purchases that sit on the balance sheet, loan principal payments — never show up as expenses on the profit-and-loss statement at all.',
  },
  {
    q: 'How do you switch from cash to accrual accounting?',
    a: 'You file Form 3115, Application for Change in Accounting Method, generally attached to the tax return for the year of the switch. It also calculates a one-time catch-up adjustment — a “section 481(a) adjustment” — so income already counted once under the old method is not counted again under the new one. Most small-business changes qualify as automatic changes that do not require advance IRS approval.',
  },
  {
    q: 'What are the types of financial accounting a small business can choose from?',
    a: 'The two the IRS recognizes are cash basis and accrual basis. A third, modified cash basis, is not a formal IRS method but a common bridge many small businesses run internally — cash basis day to day, with a side ledger tracking what is owed and owing, so the owner gets some of accrual’s visibility without the full overhaul.',
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
              <time dateTime={PUBLISHED}>August 17, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>August 17, 2026</time>
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
              alt="An open leather-bound ledger with hand-ruled columns of numbers on a wooden desk, beside a clipped stack of invoices, a rolled landscape blueprint tied with string, stacked stone paver samples, an old adding machine with curling paper tape, and a cooling mug of coffee"
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
                <strong>Short answer:</strong> accrual basis accounting is a
                bookkeeping method that counts income the day you earn it
                &mdash; the job&rsquo;s done, the invoice goes out &mdash; and
                counts expenses the day you incur them, whether or not cash
                has actually moved yet. It&rsquo;s the method GAAP requires,
                the one a bank or investor expects to see, and past a certain
                size or business structure, the one the IRS requires too.
              </p>
              <p className="mt-4 text-body text-graphite">
                One catch: it can tell you that you had a great quarter while
                your checking account is telling you something else entirely.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s the second week of April and Elena &mdash;
              I&rsquo;ll call her Elena &mdash; runs a landscaping and
              hardscaping company, and she&rsquo;s just closed her books for
              the quarter. Net profit: $42,000. A genuinely great number, the
              kind you&rsquo;d frame.
            </p>
            <p className="mt-4 text-body text-graphite">
              Her checking account has $3,200 in it.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t failing, and she isn&rsquo;t imagining the
              profit &mdash; it&rsquo;s real, on paper. She&rsquo;s just
              found the exact gap accrual accounting is built to create, and
              nobody warned her it would feel like this the first time.
            </p>
          </div>
        </Section>

        {/* 1 — WHAT IT MEANS */}
        <Section background="ivory" id="what-accrual-means">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What accrual basis accounting actually means
            </h2>
            <p className="mt-4 text-body text-graphite">
              It&rsquo;s the opposite instinct from checking your bank
              balance. Under accrual, the books track when value actually
              changed hands in the business sense &mdash; work performed,
              obligation created &mdash; not when a deposit clears or a
              payment goes out.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Income counts on the day it&rsquo;s earned.
                </strong>{' '}
                For Elena, that&rsquo;s the day a paver job is finished and
                the invoice goes out &mdash; not the day the client actually
                pays it.
              </li>
              <li>
                <strong className="text-aubergine">
                  Expenses count on the day they&rsquo;re incurred.
                </strong>{' '}
                A supplier bill counts the day the stone is delivered and the
                obligation is real, whether or not she&rsquo;s cut the check.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accounts receivable and payable live in the books
                  themselves.
                </strong>{' '}
                Unlike cash basis, what people owe you and what you owe them
                aren&rsquo;t a side note &mdash; they&rsquo;re part of the
                official picture, tracked on the balance sheet as they build
                up.
              </li>
              <li>
                <strong className="text-aubergine">
                  It&rsquo;s one of a few types of financial accounting a
                  small business can choose from.
                </strong>{' '}
                <Link href="/blog/cash-basis-accounting" className={linkClass}>
                  Cash basis
                </Link>{' '}
                and modified cash basis are the other two you&rsquo;ll run
                into, and each trades some of accrual&rsquo;s accuracy for
                some of cash basis&rsquo;s simplicity.
              </li>
            </ul>
          </div>
        </Section>

        {/* 2 — ACCRUAL VS CASH EXAMPLE */}
        <Section background="cream" id="accrual-vs-cash-example">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Accrual vs. cash accounting, in one example
            </h2>
            <p className="mt-4 text-body text-graphite">
              Take one of Elena&rsquo;s jobs and watch what each method does
              with it.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Her crew finishes a $9,000 patio installation on March
                  15.
                </strong>{' '}
                Under both methods, the work is done. Nothing else about the
                two methods agrees from here on.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. She sends the invoice that same day, net 30.
                </strong>{' '}
                Under accrual, this is the moment the $9,000 counts as
                income &mdash; the job is complete and the amount is
                determinable, so it&rsquo;s earned.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Under cash basis, nothing has happened yet.
                </strong>{' '}
                Her March cash-basis books show none of that $9,000, no
                matter how finished the patio is.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. The client pays on April 10.
                </strong>{' '}
                Only now does cash basis record the income &mdash; nearly a
                full month after accrual already had.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              That gap is the whole idea. Accrual puts the $9,000 in March,
              where the work actually happened, so a March profit-and-loss
              statement reflects March&rsquo;s real performance instead of
              whichever invoices happened to get paid that month.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/stone-yard-inventory-receipt.webp`}
              alt="Stacks of gray stone pavers under a partially rolled-back tarp at an outdoor supply yard, with a red hand truck, a clipboard holding a plain paper receipt, and folded work gloves resting on top of the stones in golden late-afternoon light"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — MATCHING PRINCIPLE AND ALL-EVENTS TEST */}
        <Section background="ivory" id="matching-principle-and-all-events-test">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The matching principle and the rules behind the timing
            </h2>
            <p className="mt-4 text-body text-graphite">
              Accrual isn&rsquo;t just &ldquo;count it early.&rdquo; It runs
              on specific rules about exactly when income and expenses are
              allowed to count, and they exist so two different accrual
              bookkeepers land on the same number.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  The matching principle.
                </strong>{' '}
                Expenses get recorded in the same period as the revenue they
                helped produce. The stone Elena buys in March for an April
                job is recognized as a cost of April&rsquo;s revenue, not
                March&rsquo;s cash outlay &mdash; the two numbers move
                together instead of landing in different months.
              </li>
              <li>
                <strong className="text-aubergine">
                  The all-events test, for income.
                </strong>{' '}
                Under the{' '}
                <SourceLink href="https://www.irs.gov/publications/p538">
                  IRS&rsquo;s rule for accrual-method taxpayers
                </SourceLink>
                , income counts once all events fixing your right to receive
                it have happened and the amount can be determined with
                reasonable accuracy &mdash; for Elena, that&rsquo;s the
                finished job and the issued invoice, not the payment.
              </li>
              <li>
                <strong className="text-aubergine">
                  Economic performance, for expenses.
                </strong>{' '}
                You generally can&rsquo;t deduct or record a business
                expense until the property or service has actually been
                provided to you &mdash; a bill for stone that hasn&rsquo;t
                been delivered yet isn&rsquo;t an expense, no matter when the
                invoice arrived.
              </li>
              <li>
                <strong className="text-aubergine">
                  Inventory doesn&rsquo;t get expensed on purchase.
                </strong>{' '}
                Stone and pavers Elena buys and stockpiles sit on the balance
                sheet as an asset until she actually uses them on a job
                &mdash; only then does their cost move to the profit-and-loss
                statement, matched against the revenue they helped create.
              </li>
            </ul>
          </div>
        </Section>

        {/* 4 — WHO MUST USE ACCRUAL */}
        <Section background="cream" id="who-must-use-accrual">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who has to use accrual (and who gets to choose)
            </h2>
            <p className="mt-4 text-body text-graphite">
              For most small businesses, accrual is a choice about which
              picture serves them better, not an IRS order. A few structures
              don&rsquo;t get that choice.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  C corporations, and partnerships with a C-corp partner.
                </strong>{' '}
                Required to use accrual once average annual gross receipts
                over the prior three tax years cross a threshold the{' '}
                <SourceLink href="https://www.irs.gov/publications/p538">
                  IRS indexes for inflation every year
                </SourceLink>
                . Cross it, and cash basis stops being available.
              </li>
              <li>
                <strong className="text-aubergine">
                  Businesses with real inventory.
                </strong>{' '}
                Generally required to use accrual for purchases and sales,
                since the IRS treats inventory as necessary to accurately
                account for income &mdash; with a small-business exception
                tied to that same gross-receipts threshold.
              </li>
              <li>
                <strong className="text-aubergine">Tax shelters.</strong>{' '}
                Barred from the cash method regardless of size or structure.
              </li>
              <li>
                <strong className="text-aubergine">
                  Sole proprietors, most partnerships, and S corporations.
                </strong>{' '}
                Free to use either method at any size, as long as no C
                corporation sits in the ownership structure. This is where
                Elena&rsquo;s business falls &mdash; nothing forces her onto
                accrual. She chose it.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              If none of the restricted categories fit you, this is a
              genuinely optional decision, not a compliance deadline. If
              growth eventually pushes you across the threshold, the switch
              itself runs through{' '}
              <SourceLink href="https://www.irs.gov/forms-pubs/about-form-3115">
                Form 3115, Application for Change in Accounting Method
              </SourceLink>
              , generally filed with the return for the year of the change.
              See{' '}
              <Link href="/services" className={linkClass}>
                what our bookkeeping and tax service actually covers
              </Link>{' '}
              if you&rsquo;re weighing whether to sort this out yourself or
              hand it off.
            </p>
          </div>
        </Section>

        {/* 5 — BENEFITS AND COSTS */}
        <Section background="ivory" id="benefits-of-accrual-accounting">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The benefits of accrual accounting &mdash; and what they cost
              you
            </h2>
            <p className="mt-4 text-body text-graphite">
              None of this is free. Every benefit below is real, and every
              one of them takes more bookkeeping than cash basis to get.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  It shows you the truth about a given period.
                </strong>{' '}
                Elena&rsquo;s March P&amp;L reflects March&rsquo;s actual
                work, not whichever invoices a client happened to pay that
                month &mdash; which makes month-to-month and year-over-year
                comparisons mean something.
              </li>
              <li>
                <strong className="text-aubergine">
                  It&rsquo;s the only method GAAP allows.
                </strong>{' '}
                A bank underwriting a loan, an investor doing diligence, or a
                buyer evaluating the business will ask for accrual
                statements &mdash; cash basis numbers won&rsquo;t satisfy
                them.
              </li>
              <li>
                <strong className="text-aubergine">
                  It surfaces margin problems earlier.
                </strong>{' '}
                Because costs are matched to the job that caused them, a
                thin-margin contract shows up thin immediately, instead of
                getting buried in a month where a different job&rsquo;s
                payment happened to land.
              </li>
              <li>
                <strong className="text-aubergine">
                  The cost: it demands real bookkeeping discipline.
                </strong>{' '}
                Invoices and bills have to be entered when they&rsquo;re
                issued, not just when they&rsquo;re paid, and receivables and
                payables need to be tracked and reconciled on an ongoing
                basis. Skip that, and the numbers quietly go wrong &mdash;
                see our{' '}
                <Link href="/pricing" className={linkClass}>
                  flat monthly plans
                </Link>{' '}
                if you&rsquo;d rather that reconciling wasn&rsquo;t on you.
              </li>
            </ul>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/paper-profit-empty-checkbook.webp`}
              alt="An old bound ledger dense with hand-ruled columns of numbers, open on a sunlit desk beside a slim paper checkbook register, a pen, and a small tipped-over coin purse with a single coin fallen out"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — WHAT ACCRUAL CAN HIDE */}
        <Section background="cream" id="what-accrual-can-hide">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What accrual can hide: profitable on paper, empty in the bank
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the blind spot that had Elena staring at a $42,000
              profit and a $3,200 checking account. It isn&rsquo;t a bug in
              her books. It&rsquo;s exactly what accrual is built to do,
              which is separate profit from cash &mdash; and that separation
              cuts both ways.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Unpaid invoices count as income before the cash arrives.
                </strong>{' '}
                $28,000 of Elena&rsquo;s quarterly profit sat in invoices her
                commercial clients hadn&rsquo;t paid yet &mdash; real,
                earned, and entirely unspendable that week.
              </li>
              <li>
                <strong className="text-aubergine">
                  Inventory purchases don&rsquo;t touch the P&amp;L when you
                  buy them.
                </strong>{' '}
                She spent $19,000 stocking stone for next quarter&rsquo;s
                jobs &mdash; real cash out the door, but it sits as an asset
                on the balance sheet, not an expense, until it&rsquo;s
                actually used.
              </li>
              <li>
                <strong className="text-aubergine">
                  Loan principal payments aren&rsquo;t an expense at all.
                </strong>{' '}
                A $6,000 payment on her equipment loan reduced her cash by
                $6,000 and her profit by nothing &mdash; only the interest
                portion is an expense; principal is a balance-sheet
                transaction under accrual, full stop.
              </li>
              <li>
                <strong className="text-aubergine">
                  It can quietly hide a real cash crunch.
                </strong>{' '}
                A string of strong-looking accrual quarters can mask that
                payroll is due before the receivables clear, which is how
                genuinely profitable businesses end up scrambling for a
                short-term loan.
              </li>
            </ul>
          </div>
        </Section>

        {/* EMPHASIS — COST OF GUESSING */}
        <Section background="aubergine" id="cost-of-guessing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What guessing instead of knowing costs you
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              None of this makes accrual the wrong choice for a business like
              Elena&rsquo;s &mdash; it&rsquo;s still the more honest picture
              of how the business is actually performing. The risk isn&rsquo;t
              the method. It&rsquo;s reading a profit number and assuming it
              means cash in the bank, without a separate eye on what&rsquo;s
              actually collectible and when.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The expensive version of Elena&rsquo;s week is the one where
              she doesn&rsquo;t catch it until payroll is due &mdash; a
              scramble for a short-term loan, or a late fee on a supplier
              account, to cover a gap that a monthly cash-flow forecast
              would have flagged a month earlier.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              A cash-flow forecast next to the accrual P&amp;L is a couple of
              hours of bookkeeping work each month. Reconstructing where the
              money actually went, after a real crunch, takes a lot longer
              &mdash; do the arithmetic on your own hourly value and it adds
              up fast.{' '}
              <strong className="text-ivory">
                A $299-a-month bookkeeping habit that tracks both numbers as
                you go is, almost every time, the cheaper problem.
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
              href: '/blog/cash-basis-accounting',
              eyebrow: 'Blog',
              title: 'Cash basis accounting: what it is and when it works',
              blurb:
                'The other side of this decision — who can legally stay on cash basis, why most small businesses default to it, and when it starts costing you.',
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
                'Three flat monthly plans, every fee on the page, including how one-time cleanup work gets quoted before you commit.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure if your numbers match your bank account?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. Bring your
              books exactly as they are. We&rsquo;ll tell you honestly
              whether accrual is serving you, and whether a simple
              cash-flow forecast next to it would have saved you a bad
              week.
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
