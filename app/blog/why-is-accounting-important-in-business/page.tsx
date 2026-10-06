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

const SLUG = 'why-is-accounting-important-in-business';
const TITLE = 'Why Is Accounting Important in Business? 5 Honest Reasons';
const DESCRIPTION =
  'Why is accounting important in business? It shows if you are making money, what you owe in tax and what you can afford next. Five reasons, with real numbers.';
const PUBLISHED = '2026-10-06';
const MODIFIED = '2026-10-06';
const HERO = `/blog/${SLUG}/hero-round-table-order-forms-boxes-laptop.webp`;

const TOC = [
  { id: 'what-accounting-does', label: 'What accounting actually does in a business' },
  { id: 'profit-vs-cash', label: 'It shows whether you are actually making money' },
  { id: 'taxes-and-proof', label: 'It is how you prove your numbers to the IRS' },
  { id: 'decisions', label: 'It turns decisions into arithmetic instead of guesses' },
  { id: 'lenders-and-buyers', label: 'It is what lenders, buyers and partners ask to see' },
  { id: 'how-much-you-need', label: 'How much accounting a small business actually needs' },
  { id: 'cost-of-not-knowing', label: 'What it costs to run a business without it' },
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
        alt: 'A round wooden table seen from above with two taped cardboard parcels, handwritten order sheets, a clipboard of forms, pens, a roll of packing tape and an open laptop',
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
    q: 'Why is accounting important in business?',
    a: 'Accounting is important in business because it is the only reliable way to know whether the business is making money, how much tax it owes, and what it can afford to do next. It also produces the financial statements that lenders, buyers and partners ask for. Without it, an owner is deciding from the bank balance and memory.',
  },
  {
    q: 'What are the main purposes of accounting?',
    a: 'There are three. Accounting records what happened, by capturing every sale, cost and payment. It reports the result, as financial statements such as the income statement and balance sheet. And it supports decisions and compliance, including pricing, hiring, borrowing and filing accurate tax returns.',
  },
  {
    q: 'Why is accounting called the language of business?',
    a: 'Because it is the shared format that owners, lenders, investors and tax authorities all use to describe a business. Terms such as revenue, profit, assets and liabilities mean the same thing on every set of financial statements. That lets someone outside the business read its results without being told the story.',
  },
  {
    q: 'Does a small business really need accounting?',
    a: 'Every business needs records, but not every business needs an accountant. The IRS says you may choose any recordkeeping system suited to your business that clearly shows your income and expenses. A very small business can meet that with a separate bank account, a spreadsheet and a monthly reconciliation.',
  },
  {
    q: 'What is the difference between bookkeeping and accounting?',
    a: 'Bookkeeping is recording and categorising the transactions. Accounting is interpreting those records, producing financial statements, planning for tax and filing returns. Bookkeeping is the raw material and accounting is what gets built from it.',
  },
  {
    q: 'When is the best time to reconcile your bank account?',
    a: 'Once a month, as soon as the statement is available. IRS Publication 583 says you should reconcile your checking account each month, so that your books reflect all bank charges and the correct balance. Monthly is also frequent enough to catch a duplicate charge or a missing deposit while you still remember it.',
  },
  {
    q: 'How long should a business keep its records?',
    a: 'The IRS says to keep records as long as needed to prove the income or deductions on a tax return. For most returns that means at least three years from filing, and longer in some situations. If you have employees, keep employment tax records for at least four years after the tax is due or paid, whichever is later.',
  },
  {
    q: 'What happens if a business does not keep proper records?',
    a: 'The owner carries the burden of proof for what is on the tax return, so a deduction that cannot be supported can be disallowed. If an underpayment of tax is due to negligence or disregard of the rules, the IRS accuracy-related penalty is 20% of that underpayment. The business also loses the ability to see its own profit, which usually costs more than the penalty.',
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
              <time dateTime={PUBLISHED}>October 6, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 6, 2026</time>
              </span>
              <span aria-hidden>·</span>
              <span>10 min read</span>
              <span aria-hidden>·</span>
              <span>Written by Njock</span>
            </div>
          </header>

          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={HERO}
              alt="A round wooden table seen from above with two taped cardboard parcels, handwritten order sheets, a clipboard of forms, pens, a roll of packing tape and an open laptop"
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
                <strong>Short answer:</strong> why is accounting important in
                business? Because it is the only reliable way to know whether
                you are making money, how much tax you owe, and what you can
                afford to do next. It also produces the statements a lender,
                buyer or partner will ask to see.
              </p>
              <p className="mt-4 text-body text-graphite">
                It does not have to be elaborate. A very small business can
                cover all of that with a separate bank account, a spreadsheet
                and one honest hour a month.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Tuesday night in early October and Marisol &mdash;
              I&rsquo;ll call her Marisol &mdash; is at a round dining table
              that stopped being a dining table about a year ago. She sells
              refurbished film cameras online. There are two taped parcels at
              her elbow, a clipboard of order sheets, and a laptop showing the
              best sales month she has ever had: $18,400.
            </p>
            <p className="mt-4 text-body text-graphite">
              In the other browser tab is her bank account. It is $550 lower
              than it was on the first of the month.
            </p>
            <p className="mt-4 text-body text-graphite">
              She refreshes it, in case the bank is still thinking.
            </p>
            <p className="mt-4 text-body text-graphite">
              Marisol isn&rsquo;t bad at business. She is flying a plane with
              most of the instrument panel taped over, and the one dial she can
              see is the wrong one. Accounting is the rest of the panel. Here
              is what each dial does, and how few of them you can get away
              with.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="what-accounting-does">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What accounting actually does in a business
            </h2>
            <p className="mt-4 text-body text-graphite">
              Accounting gets called &ldquo;the language of business,&rdquo;
              which is accurate and also a fair summary of why people avoid it.
              Nobody enjoys being bad at a language in front of their own bank.
              Strip the vocabulary away and it does three plain jobs.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. It records what happened.
                </strong>{' '}
                Every sale, every cost, every payment in or out, sorted into
                categories. This layer is bookkeeping, and it is the raw
                material for everything else.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. It reports the result.
                </strong>{' '}
                The records get summarised into financial statements: an income
                statement that shows profit over a period, and a balance sheet
                that shows what the business owns and owes on one day.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. It supports the next decision.
                </strong>{' '}
                What to charge, whether to hire, how much to set aside for tax,
                whether the loan is affordable. This is where the first two
                jobs pay for themselves.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              The IRS makes much the same list from the other side of the desk.
              Its small-business guidance says{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping">
                good records will help you monitor the progress of your
                business
              </SourceLink>
              , prepare your financial statements, keep track of deductible
              expenses and support the items reported on your tax returns.
              Notice that &ldquo;monitor the progress of your business&rdquo;
              comes first, ahead of anything to do with tax.
            </p>
            <p className="mt-4 text-body text-graphite">
              If the line between job one and jobs two and three is hazy, we
              drew it properly in{' '}
              <Link href="/blog/bookkeeping-vs-accounting" className={linkClass}>
                bookkeeping versus accounting
              </Link>
              . The rest of this post is the five reasons those three jobs
              matter.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="profit-vs-cash">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              It shows whether you are actually making money
            </h2>
            <p className="mt-4 text-body text-graphite">
              Reason one. A business has three different numbers that all get
              called &ldquo;how we&rsquo;re doing.&rdquo; Revenue is the one you
              mention at parties. Profit is the one you tell your spouse. Cash
              is the one your landlord is interested in.
            </p>
            <p className="mt-4 text-body text-graphite">
              They are rarely the same, and Marisol&rsquo;s month shows why.
              These are illustrative figures, but the shape is one we see
              constantly.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Revenue: $18,400.</strong>{' '}
                Everything she sold. This is the number on the sales dashboard,
                and the only one she was looking at.
              </li>
              <li>
                <strong className="text-aubergine">Profit: $4,850.</strong>{' '}
                Take off the $9,900 she originally paid for the cameras she
                sold, $2,750 in marketplace fees and shipping, and $900 in
                software and packaging. What is left is what the month earned.
              </li>
              <li>
                <strong className="text-aubergine">Cash: down $550.</strong>{' '}
                Of that $18,400, $6,300 was still sitting with the marketplace
                waiting to be paid out, so only $12,100 arrived. Out went the
                $2,750 and the $900, plus $9,000 for cameras she has not sold
                yet. $12,100 minus $12,650 is minus $550.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Nothing went wrong in that month. It was a good month. The cash
              is sitting on a shelf in the form of cameras and in a payout
              queue, and both will turn back into money. But without the middle
              number she cannot tell a good month with slow cash from a bad
              month, and those call for opposite reactions.
            </p>
            <p className="mt-4 text-body text-graphite">
              Which number your books show first depends on the method you
              keep them by. We covered both in{' '}
              <Link href="/blog/cash-basis-accounting" className={linkClass}>
                cash basis accounting
              </Link>{' '}
              and{' '}
              <Link href="/blog/accrual-basis-accounting" className={linkClass}>
                accrual basis accounting
              </Link>
              , including which one suits a business that holds stock.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hand-calculator-handwritten-sums.webp`}
              alt="A hand pressing a key on a large black desk calculator beside a blue folder holding a sheet of handwritten sums, with a marker pen lying next to it"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="taxes-and-proof">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              It is how you prove your numbers to the IRS
            </h2>
            <p className="mt-4 text-body text-graphite">
              Reason two is the one most people think is the only reason. A tax
              return is a list of claims, and the IRS puts the job of backing
              them up on you. It calls this the burden of proof: the
              responsibility to substantiate the entries, deductions and
              statements on your return.
            </p>
            <p className="mt-4 text-body text-graphite">
              &ldquo;I&rsquo;m fairly sure it was about that much&rdquo; is a
              perfectly normal sentence and not, unfortunately, a filing
              position. Here is what the records are doing for you.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">They keep your deductions alive.</strong>{' '}
                The IRS says you must be able to prove certain elements of an
                expense to deduct it. A real cost with no record behind it is a
                deduction you may not get to keep.
              </li>
              <li>
                <strong className="text-aubergine">They make quarterly taxes possible.</strong>{' '}
                Sole proprietors, partners and S corporation shareholders{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes">
                  generally have to make estimated tax payments
                </SourceLink>{' '}
                if they expect to owe $1,000 or more when the return is filed.
                To work out the payment you have to estimate your income and
                deductions for the year, which is hard to do from a feeling.
              </li>
              <li>
                <strong className="text-aubergine">They keep a mistake from becoming a penalty.</strong>{' '}
                The IRS{' '}
                <SourceLink href="https://www.irs.gov/payments/accuracy-related-penalty">
                  accuracy-related penalty is 20%
                </SourceLink>{' '}
                of an underpayment that comes from negligence or disregard of
                the rules. Being able to show a reasonable attempt to get it
                right is the difference between owing the tax and owing the
                tax plus a fifth.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              None of this requires anything fancy. The same IRS page says
              that, except in a few cases, the law does not require any special
              kind of records, and that you may choose any system that clearly
              shows your income and expenses. A shoebox does not clearly show
              anything. It is a filing system in the way a pile is a filing
              system.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="decisions">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              It turns decisions into arithmetic instead of guesses
            </h2>
            <p className="mt-4 text-body text-graphite">
              Reason three is the one that makes owners money, and the one
              they hear about last. Most business decisions are a sum wearing a
              disguise. Gut feel is a fine tool, but it has a suspiciously good
              memory for the times it was right.
            </p>
            <p className="mt-4 text-body text-graphite">
              Take the question Marisol has been circling for months: can she
              afford a part-time helper to pack orders, at about $1,600 a
              month?
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Find what each dollar of sales leaves behind.
                </strong>{' '}
                On $18,400 of sales, the cameras cost $9,900 and fees and
                shipping cost $2,750. That leaves $5,750, or about 31 cents of
                every dollar sold, to cover everything else.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Divide the new cost by that figure.
                </strong>{' '}
                $1,600 divided by 0.31 is roughly $5,100. That is the extra
                monthly sales the helper has to make possible just to pay for
                themselves.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Ask whether that is believable.
                </strong>{' '}
                If packing is what stops her listing more cameras, an extra
                $5,100 a month on an $18,400 base is plausible. If orders are
                already going out on time, it is not, and the answer is no.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Three lines of arithmetic, and the question has gone from
              &ldquo;I don&rsquo;t know, it feels like a lot&rdquo; to a number
              she can test. The same sum works for a price increase, a second
              van, a bigger unit or a slow product line. But it only works if
              step one exists, and step one is an income statement.
            </p>
            <p className="mt-4 text-body text-graphite">
              The SBA puts this under the plain heading of{' '}
              <SourceLink href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances">
                managing your finances
              </SourceLink>
              : weighing the benefits of a decision against its costs over
              time. You cannot weigh something you have not measured.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="lenders-and-buyers">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              It is what lenders, buyers and partners ask to see
            </h2>
            <p className="mt-4 text-body text-graphite">
              Reasons four and five are about other people. Sooner or later
              someone outside the business needs to understand it without
              taking your word for it, and a bank will not accept a screenshot
              of a sales dashboard and a confident expression.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Reason four: borrowing.</strong>{' '}
                Expect a lender or a landlord to ask for financial statements
                and tax returns covering more than one year. The SBA describes
                the balance sheet as a snapshot of your business financials,
                and a snapshot is exactly what an outsider wants: what you own,
                what you owe, on a stated date.
              </li>
              <li>
                <strong className="text-aubergine">Reason five: selling, or bringing someone in.</strong>{' '}
                A buyer or a new partner prices the business from its records.
                Profit you cannot document is profit they will not pay for. The
                value of years of work can come down to whether the numbers
                were kept as you went or reconstructed the month before.
              </li>
              <li>
                <strong className="text-aubergine">And the quiet version: you, in two years.</strong>{' '}
                You are also an outsider to the business you ran in an earlier
                year. Was last autumn really this slow? Did shipping always
                cost this much? Memory will give you an answer either way. The
                books will give you the right one.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              This is where the &ldquo;language of business&rdquo; line earns
              its keep. Revenue, profit, assets and liabilities mean the same
              thing on every set of statements, so a stranger can read yours in
              ten minutes. It is the one language where being fluent mostly
              means being consistent.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/vintage-cash-register-brick-wall.webp`}
              alt="A worn pale-green vintage cash register with rows of numbered levers and a row of number wheels in its display, standing in front of a rough brick wall"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="how-much-you-need">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How much accounting a small business actually needs
            </h2>
            <p className="mt-4 text-body text-graphite">
              An accounting firm publishing two thousand words on why
              accounting matters is about as surprising as a barber
              recommending a haircut. So here is the part a barber would leave
              out: a lot of small businesses need far less of it than they
              fear, and can do it themselves.
            </p>
            <p className="mt-4 text-body text-graphite">
              If you are a one-person business with a few dozen transactions a
              month and no stock or staff, this is the whole system.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">A separate bank account.</strong>{' '}
                IRS{' '}
                <SourceLink href="https://www.irs.gov/publications/p583">
                  Publication 583
                </SourceLink>{' '}
                says one of the first things to do when you start a business is
                open a business checking account, and to keep it separate from
                your personal one. This single step does more than any
                software.
              </li>
              <li>
                <strong className="text-aubergine">A list of money in and money out.</strong>{' '}
                A spreadsheet is fine. Date, amount, who, and what it was for.
                The same publication describes a single-entry system as the
                simplest to maintain, and it is allowed.
              </li>
              <li>
                <strong className="text-aubergine">A monthly reconciliation.</strong>{' '}
                Publication 583 says you should reconcile your checking account
                each month. In practice that is one hour with the bank
                statement and your list, making sure they agree.
              </li>
              <li>
                <strong className="text-aubergine">Somewhere the receipts live.</strong>{' '}
                A folder of phone photos counts. Keep them as long as you might
                need to prove the return they support.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              That costs nothing, and for plenty of businesses it is enough for
              years. Our plans start at $299 a month, which is $3,588 a year.
              If the business clears a few thousand dollars, paying that would
              be accounting advice so bad it should be reported to someone.
            </p>
            <p className="mt-4 text-body text-graphite">
              The picture changes when you hold stock, have employees, collect
              sales tax in more than one state, or find the monthly hour has
              become a monthly weekend. Our post on{' '}
              <Link
                href="/blog/do-i-need-an-accountant-for-your-small-business"
                className={linkClass}
              >
                whether you actually need an accountant
              </Link>{' '}
              lists the signs. If you are past them,{' '}
              <Link href="/services" className={linkClass}>
                the services page
              </Link>{' '}
              shows what we take off your plate and{' '}
              <Link href="/pricing" className={linkClass}>
                the pricing page
              </Link>{' '}
              shows what it costs, in writing. And if the only thing you want
              off your plate is the annual return, we priced that question
              separately in{' '}
              <Link href="/blog/how-much-does-it-cost-to-do-your-taxes" className={linkClass}>
                how much it costs to do your taxes
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-not-knowing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What it costs to run a business without it
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The cost of having no accounting rarely arrives as a bill. It
              arrives as a decision you made slightly wrong, over and over,
              with nothing to tell you so.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Go back to the 31 cents. Suppose Marisol believes, from memory,
              that she keeps about 35 cents of every dollar, and prices and
              spends as though she does. On $200,000 of sales in a year, that
              four-cent gap is $8,000 she planned around and never had. Nobody
              took it. It was never there.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Then the visible costs, which are smaller. An illustrative $4,000
              underpayment put down to negligence carries a 20% penalty: $800,
              on top of the tax and the interest. A deduction with no record
              behind it is simply gone. A loan application that needs three
              years of statements by Friday becomes a very expensive week.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              And the one that does not show up in dollars at all: the Tuesday
              night at the table, refreshing a bank balance, not knowing
              whether to be pleased or worried. The plane is flying fine. She
              just cannot see the panel.
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

            <p className="mt-8 text-body-sm text-graphite/75">
              Marisol is a composite and her figures are illustrative. The IRS
              thresholds and penalty rate quoted above were checked against the
              linked IRS pages on October 6, 2026, and they do change, so
              confirm them at the source before relying on a number from a blog
              post &mdash; including this one.
            </p>

            <AuthorBio />
          </div>
        </Section>

        {/* RELATED */}
        <RelatedPosts
          items={[
            {
              href: '/blog/bookkeeping-vs-accounting',
              eyebrow: 'Blog',
              title: 'Bookkeeping vs. Accounting: What’s the Difference?',
              blurb:
                'A bookkeeper records the numbers; an accountant interprets them and files your taxes. Where the line falls and what each costs.',
            },
            {
              href: '/blog/do-i-need-an-accountant-for-your-small-business',
              eyebrow: 'Blog',
              title: 'Do you actually need an accountant for your small business?',
              blurb:
                'The signs that software and a spreadsheet have stopped being enough, and the cases where they still are.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'What we take off your plate',
              blurb:
                'Monthly bookkeeping, financial statements you can read, and the annual return, in one flat fee.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Want the tape off the instrument panel?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. No pitch. We
              just listen, look at what you have, and tell you honestly
              whether we&rsquo;re a fit.
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
