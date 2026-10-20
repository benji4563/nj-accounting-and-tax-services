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

const SLUG = 'how-to-learn-bookkeeping';
const TITLE = 'How to Learn Bookkeeping: A 6-Step Plan for Owners';
const DESCRIPTION =
  'How to learn bookkeeping as a small-business owner: a six-step plan built on your own books, free IRS guides, and an honest look at when DIY stops paying.';
const PUBLISHED = '2026-10-20';
const MODIFIED = '2026-10-20';
const HERO = `/blog/${SLUG}/hero-open-notebook-pen-wooden-desk.webp`;

const TOC = [
  { id: 'what-you-are-learning', label: 'What you are actually learning' },
  { id: 'six-step-plan', label: 'A six-step plan to learn bookkeeping' },
  { id: 'your-own-books', label: 'Practice on your own books, not a textbook' },
  { id: 'reconcile', label: 'Reconciling: when to do it, and why it is the real exam' },
  { id: 'courses-and-certificates', label: 'Free guides, courses and certificates' },
  { id: 'when-to-stop', label: 'When learning it yourself stops being worth it' },
  { id: 'half-learned', label: 'What half-learned bookkeeping costs' },
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
        alt: 'An open lined notebook with a black pen resting across its blank pages on a warm wooden desk by a window',
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
    q: 'How can I learn bookkeeping on my own?',
    a: 'Start with the vocabulary and the five account types, then read IRS Publication 583, which explains recordkeeping for small businesses for free. Open a separate business bank account, record a month of real transactions in simple software or a spreadsheet, and reconcile that month to the bank statement. Repeating that monthly cycle teaches more than any course on its own.',
  },
  {
    q: 'How long does it take to learn bookkeeping?',
    a: 'Learning enough to keep the books for a simple small business usually takes a few weeks of steady practice, most of it spent recording and reconciling real transactions. Becoming employable as a bookkeeper takes longer: the US Bureau of Labor Statistics says bookkeeping clerks typically learn through moderate-term on-the-job training. Payroll, inventory and sales tax each add their own learning curve.',
  },
  {
    q: 'Can I do my own bookkeeping for my small business?',
    a: 'Yes. The IRS says you can choose any recordkeeping system suited to your business that clearly shows your income and expenses, and no special kind of records is required in most cases. Many owners with one bank account and a modest number of monthly transactions keep their own books well with accounting software and a monthly reconciliation.',
  },
  {
    q: 'Do I need a certification to be a bookkeeper?',
    a: 'No. The Bureau of Labor Statistics says professional certification is not usually required for bookkeeping, accounting and auditing clerks, though some choose to earn one. Employers generally prefer a high school diploma and some college coursework in accounting. To keep your own business books, you need no certificate at all.',
  },
  {
    q: 'Is bookkeeping hard to learn?',
    a: 'Bookkeeping is not mathematically hard; it uses addition, subtraction and a calculator. The difficult part is consistency and classification: recording every transaction, putting it in the right category, and matching the books to the bank each month. Most beginners struggle with the habit rather than the concepts.',
  },
  {
    q: 'What should I learn first in bookkeeping?',
    a: 'Learn the five account types first: assets, liabilities, equity, revenue and expenses. Then learn how a transaction is recorded, either once in a single-entry system or as a matching debit and credit in a double-entry system. After that, learn the bank reconciliation, which is the check that proves your records are complete.',
  },
  {
    q: 'When is the best time to reconcile your bank account?',
    a: 'The best time to reconcile your bank account is as soon as each monthly statement is available, while the transactions are still fresh. Businesses with many transactions, or with tight cash, often reconcile weekly. Reconciling before you file any sales tax or quarterly estimated tax payment also catches errors before they reach a return.',
  },
  {
    q: 'What is the difference between a bookkeeper and an accountant?',
    a: 'A bookkeeper records and organizes the day-to-day transactions: sales, bills, payments and reconciliations. An accountant uses those records to prepare financial statements, analyze the numbers, plan for taxes and file returns. Small businesses often need a bookkeeper monthly and an accountant at least once a year.',
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
              <time dateTime={PUBLISHED}>October 20, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 20, 2026</time>
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
              alt="An open lined notebook with a black pen resting across its blank pages on a warm wooden desk by a window"
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
                <strong>Short answer:</strong> the fastest way to learn
                bookkeeping is to learn the five account types, read the
                IRS&rsquo;s free small-business recordkeeping guide, then
                record one real month of your own business&rsquo;s
                transactions and reconcile it to the bank statement. Repeat
                that monthly cycle three times and you know the core of the
                job.
              </p>
              <p className="mt-4 text-body text-graphite">
                Courses help, but they are the warm-up. The bank
                reconciliation is the exam, and it is the part most
                self-taught owners skip.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Tuesday night and Renata &mdash; I&rsquo;ll call
              her Renata &mdash; is on her fourth bookkeeping video of the
              evening. She runs a two-chair dog-grooming salon. The video is
              explaining debits and credits with a diagram of a T, and she
              has paused it to write &ldquo;debit = left??&rdquo; in a brand
              new notebook with one other line in it.
            </p>
            <p className="mt-4 text-body text-graphite">
              Meanwhile, her actual accounting software has 61 transactions
              sitting in a category called Uncategorized, which is what
              software calls it when it has quietly given up.
            </p>
            <p className="mt-4 text-body text-graphite">
              Renata isn&rsquo;t bad at learning. She&rsquo;s studying for an
              exam nobody will set, while the real homework piles up in the
              next tab.
            </p>
            <p className="mt-4 text-body text-graphite">
              This post is the other way round: learn bookkeeping by doing
              your own books, with just enough theory to know what you are
              looking at. It is written for owners. If you want bookkeeping
              as a career, most of it still applies, and the certificate
              section is for you.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="what-you-are-learning">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What you are actually learning
            </h2>
            <p className="mt-4 text-body text-graphite">
              Bookkeeping sounds like a subject. It is closer to a chore with
              rules, like laundry: sort, record, check, fold, repeat. The
              rules matter, but nobody ever got good at laundry by watching
              a lecture about fabric.
            </p>
            <p className="mt-4 text-body text-graphite">
              Strip away the jargon and there are only four skills:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Sorting.</strong> Every
                dollar goes into one of five account types: assets,
                liabilities, equity, revenue or expenses. Learn those five and
                half the vocabulary explains itself. Our{' '}
                <Link href="/blog/bookkeeping-terms" className={linkClass}>
                  plain-English guide to bookkeeping terms
                </Link>{' '}
                covers the rest.
              </li>
              <li>
                <strong className="text-aubergine">Recording.</strong> Writing
                each transaction down once, or twice in a double-entry
                system, with evidence attached.
              </li>
              <li>
                <strong className="text-aubergine">Checking.</strong> Matching
                your records to the bank so you know nothing is missing or
                counted twice.
              </li>
              <li>
                <strong className="text-aubergine">Reading.</strong> Turning
                the records into an income statement and a balance sheet you
                can actually use to make a decision.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The math is addition and subtraction. If you can split a
              restaurant bill between six people without an argument, you
              have the arithmetic. What you are really building is a habit.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="six-step-plan">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              A six-step plan to learn bookkeeping
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the order we would teach it to a client who wants to
              keep their own books. It front-loads the parts that pay off
              immediately and saves the clever stuff for later, which is the
              opposite of how most courses are built.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Learn the five account types and about ten words.
                </strong>{' '}
                Revenue, expense, asset, liability, equity, accounts
                receivable, accounts payable, cash basis, accrual basis, bank
                reconciliation. One evening, not a semester.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Read the IRS&rsquo;s own guide.
                </strong>{' '}
                <SourceLink href="https://www.irs.gov/publications/p583">
                  IRS Publication 583
                </SourceLink>{' '}
                is free and written for new businesses. It explains both
                systems in a sentence each: single-entry is &ldquo;the
                simplest to maintain, but it may not be suitable for
                everyone,&rdquo; and double-entry is self-balancing because
                every transaction is a debit in one account and a credit in
                another.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Separate the money first.
                </strong>{' '}
                Open a business checking account and run every business
                dollar through it. Publication 583 calls this one of the first
                things you should do. It turns bookkeeping from detective work
                into data entry.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Record one real month.
                </strong>{' '}
                Use accounting software or a plain spreadsheet. Categorize
                every deposit and every payment, and attach or file the
                receipt behind each one.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Reconcile that month to the bank statement.
                </strong>{' '}
                Your ending balance should match the bank&rsquo;s, after
                allowing for anything that has not cleared. If it does not,
                finding out why is where the real learning happens.
              </li>
              <li>
                <strong className="text-aubergine">
                  6. Read the reports, then repeat.
                </strong>{' '}
                Run the income statement and ask whether it matches how the
                month felt. Do the whole cycle three months running and you
                will have learned more than the video playlist could teach.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Notice what is not on the list: memorizing journal entries for
              transactions you will never have. That is the bookkeeping
              equivalent of learning to order a five-course dinner in French
              before you can ask where the bathroom is.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/calculator-cash-receipts-overhead.webp`}
              alt="Overhead view of hands counting dollar bills beside a blue calculator, a small notebook and a spread of white and orange paper receipts on a light wooden desk"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="your-own-books">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Practice on your own books, not a textbook
            </h2>
            <p className="mt-4 text-body text-graphite">
              Textbook exercises are suspiciously tidy. Every receipt is
              legible, every customer pays on time, and nobody ever buys
              printer ink and a sandwich on the same card. Your real month
              is messier, which is exactly why it teaches you more.
            </p>
            <p className="mt-4 text-body text-graphite">
              The IRS lists the paper you should be keeping behind each kind
              of entry. Learning to match a transaction to its evidence is
              most of what a bookkeeper does all day:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Money coming in.</strong>{' '}
                Bank deposit slips, invoices, receipt books, credit card
                charge slips and any Forms 1099-NEC or 1099-MISC you received.
              </li>
              <li>
                <strong className="text-aubergine">Stock you resell.</strong>{' '}
                Supplier invoices and the payment record that goes with each
                one.
              </li>
              <li>
                <strong className="text-aubergine">Running costs.</strong>{' '}
                Account statements, card slips, invoices and petty cash slips
                for everything that is not inventory.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The law is relaxed about format. The IRS says{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping">
                the law does not require any special kind of records
              </SourceLink>{' '}
              in most cases, as long as your system clearly shows income and
              expenses. So pick one method and keep it. If you are unsure
              whether to record income when you invoice or when you are paid,
              start with{' '}
              <Link href="/blog/cash-basis-accounting" className={linkClass}>
                cash basis accounting
              </Link>
              , which is what most very small businesses use.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="reconcile">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Reconciling: when to do it, and why it is the real exam
            </h2>
            <p className="mt-4 text-body text-graphite">
              A bank reconciliation is matching your books to your bank
              statement, line by line, until the balances agree. It is the
              grown-up version of checking your restaurant bill against what
              you actually ordered, except the waiter is you and you were
              distracted.
            </p>
            <p className="mt-4 text-body text-graphite">
              It is also the one step that proves the rest of your learning
              worked. Anyone can categorize transactions. Reconciling shows
              whether you caught all of them.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Monthly, as a minimum.</strong>{' '}
                The best time is as soon as each statement is available, while
                you still remember what the $43.18 at the hardware store was
                for.
              </li>
              <li>
                <strong className="text-aubergine">Weekly, if cash is tight.</strong>{' '}
                High transaction volume or a thin balance makes a weekly check
                worth the twenty minutes.
              </li>
              <li>
                <strong className="text-aubergine">Before any filing.</strong>{' '}
                Reconcile before sales tax returns and before{' '}
                <Link href="/blog/when-should-i-start-my-taxes" className={linkClass}>
                  quarterly estimated tax dates
                </Link>
                , so a missed deposit does not end up on a return.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              When it does not balance, the usual suspects are a transaction
              entered twice, one entered as $54 instead of $45, a deposit
              that lumps three sales together, or a personal purchase on the
              business card. Finding the difference is tedious the first
              time. By the fifth, you start to guess the culprit before you
              look, like a parent who hears a crash and already knows which
              child.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="courses-and-certificates">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Free guides, courses and certificates
            </h2>
            <p className="mt-4 text-body text-graphite">
              There is no shortage of material. There is a shortage of
              people who finish it. A bookkeeping course bought in January
              has roughly the same survival rate as a gym membership bought
              in January.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Free and primary.</strong>{' '}
                IRS Publication 583 and the IRS recordkeeping pages. Dry, but
                they are the rules everyone else is paraphrasing.
              </li>
              <li>
                <strong className="text-aubergine">Free and practical.</strong>{' '}
                Your accounting software&rsquo;s own tutorials and free trial.
                Learning the tool you will actually use beats learning theory
                in a tool you never will.
              </li>
              <li>
                <strong className="text-aubergine">Paid courses.</strong>{' '}
                Worth it if you learn better with structure and deadlines.
                Choose one that makes you post and reconcile sample
                transactions, not one that only shows slides.
              </li>
              <li>
                <strong className="text-aubergine">Certificates.</strong>{' '}
                Useful for a bookkeeping career, unnecessary for your own
                books. The Bureau of Labor Statistics says{' '}
                <SourceLink href="https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm">
                  certification is not usually required
                </SourceLink>{' '}
                for bookkeeping clerks, who typically learn on the job.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              If the career route is the goal, the same BLS page reports a
              median wage of $50,670 in May 2025 and projects employment for
              the occupation to decline 6 percent from 2025 to 2035, partly
              because software now does much of the data entry. The skill
              that keeps its value is the one software is worst at: judging
              what a transaction actually is.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/laptop-coffee-open-book.webp`}
              alt="A glass cup of black coffee on a light wooden desk beside an open laptop and a thick open book"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="when-to-stop">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When learning it yourself stops being worth it
            </h2>
            <p className="mt-4 text-body text-graphite">
              We are an accounting firm, so take this with the appropriate
              pinch of salt, but here is the honest version. Every owner
              should learn enough bookkeeping to read their own reports. Not
              every owner should keep doing the books forever.
            </p>
            <p className="mt-4 text-body text-graphite">
              <strong className="text-aubergine">Keep doing it yourself if</strong>{' '}
              you have one bank account, one card, no employees, and a
              reconciliation that takes you under an hour a month. Decent
              software plus this post is genuinely enough. You do not need
              us, and we would tell you so on the call.
            </p>
            <p className="mt-4 text-body text-graphite">
              The arithmetic changes as you grow. Suppose, as an
              illustration, your time is worth $75 an hour to the business
              and the books now take four hours a month once payroll, sales
              tax and a second account arrive. That is $300 a month of your
              time. Our{' '}
              <Link href="/pricing" className={linkClass}>
                Essential plan is $299 a month
              </Link>
              , so at that point you are paying the same either way, except
              one version gives you your Tuesday nights back.
            </p>
            <p className="mt-4 text-body text-graphite">
              The other trigger is not time but stakes: payroll, multi-state
              sales tax, inventory, or a lender asking for financial
              statements. Those are where the{' '}
              <Link href="/blog/bookkeeping-vs-accounting" className={linkClass}>
                difference between a bookkeeper and an accountant
              </Link>{' '}
              starts to matter, and where a mistake costs more than an hour.
              It is also roughly where our{' '}
              <Link href="/services" className={linkClass}>
                monthly bookkeeping service
              </Link>{' '}
              earns its keep. Below that line, we are mostly an expensive way
              to avoid a YouTube video.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="half-learned">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What half-learned bookkeeping costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The risky place is not knowing nothing. It is knowing enough to
              feel finished. Books that are categorized but never
              reconciled look complete right up until someone checks them.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              A missed $400 deposit is $400 of income you did not know you had,
              or, if it was counted twice, $400 you pay tax on for nothing. A
              personal purchase left in expenses is a deduction you may have
              to give back. And the records themselves have a shelf life: the
              IRS says to keep records that support a return until the period
              of limitations for that return runs out, generally three years,
              and employment tax records for at least four.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              None of that is a reason not to learn. It is a reason to learn
              the boring step, the reconciliation, before the clever ones.
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
              Renata is a composite and the figures above are illustrative.
              The IRS and BLS wording quoted here was checked against the
              linked pages on October 20, 2026. Wage and employment figures
              are revised each year, so confirm at the source before relying
              on a blog post &mdash; including this one. As for
              Renata&rsquo;s 61 Uncategorized transactions: she did them in
              one evening, and her notebook now has a second line. It says
              &ldquo;reconcile first.&rdquo;
            </p>

            <AuthorBio />
          </div>
        </Section>

        {/* RELATED */}
        <RelatedPosts
          items={[
            {
              href: '/blog/bookkeeping-terms',
              eyebrow: 'Blog',
              title: 'Bookkeeping Terms: 25 Plain-English Definitions for Owners',
              blurb:
                'The words a small-business owner actually meets, grouped by where you meet them, with worked numbers.',
            },
            {
              href: '/blog/bookkeeping-vs-accounting',
              eyebrow: 'Blog',
              title: 'Bookkeeping vs. Accounting: What’s the Difference?',
              blurb:
                'A bookkeeper records the numbers; an accountant interprets them and files your taxes. Where the line falls.',
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
              Learned enough to know you&rsquo;d rather not?
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
