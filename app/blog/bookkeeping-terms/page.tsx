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

const SLUG = 'bookkeeping-terms';
const TITLE = 'Bookkeeping Terms: 25 Plain-English Definitions for Owners';
const DESCRIPTION =
  'Bookkeeping terms in plain English: the 25 words a small-business owner actually meets, grouped by where you meet them, with worked numbers and IRS sources.';
const PUBLISHED = '2026-10-12';
const MODIFIED = '2026-10-12';
const HERO = `/blog/${SLUG}/hero-tabbed-notebook-glasses-pencil.webp`;

const TOC = [
  { id: 'which-terms-you-need', label: 'Which bookkeeping terms you actually need' },
  { id: 'five-account-types', label: 'The five account types everything gets sorted into' },
  { id: 'the-books', label: 'The books themselves: where a transaction gets written down' },
  { id: 'money-owed-and-timing', label: 'Money owed in both directions, and when it counts' },
  { id: 'the-reports', label: 'The reports, and the words printed on them' },
  { id: 'month-end', label: 'The month-end and year-end words' },
  { id: 'cost-of-nodding', label: 'What nodding along actually costs' },
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
        alt: 'An open notebook full of handwritten notes with a row of coloured sticky tabs along its edge, a pair of round glasses and a pencil resting on the page, beside a closed laptop on a wooden desk',
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
    q: 'What are the basic bookkeeping terms?',
    a: 'The basic bookkeeping terms are the five account types (assets, liabilities, equity, revenue and expenses), the records they are kept in (chart of accounts, journal and general ledger), and the reports they produce (income statement, balance sheet and cash flow statement). Add accounts receivable, accounts payable, debit, credit and bank reconciliation and you have the vocabulary most small-business owners will ever meet.',
  },
  {
    q: 'What are the five basic accounts in bookkeeping?',
    a: 'The five basic account types are assets, liabilities, equity, revenue and expenses. Assets are what the business owns, liabilities are what it owes, and equity is the difference between the two. Revenue is what the business earns and expenses are what it costs to earn it.',
  },
  {
    q: 'What is the difference between a debit and a credit?',
    a: 'A debit is an entry on the left side of an account and a credit is an entry on the right side. Debits increase asset and expense accounts, while credits increase liability, equity and revenue accounts. In double-entry bookkeeping every transaction is recorded as a debit in one account and a credit in another, so total debits always equal total credits.',
  },
  {
    q: 'What is the difference between accounts payable and accounts receivable?',
    a: 'Accounts receivable is money customers owe your business for work you have already invoiced. Accounts payable is money your business owes suppliers for bills you have received but not yet paid. Receivable is an asset and payable is a liability.',
  },
  {
    q: 'What is a chart of accounts?',
    a: 'A chart of accounts is the complete list of accounts a business uses to sort its transactions. It is normally arranged in five groups: assets, liabilities, equity, revenue and expenses. Every transaction in the books is assigned to at least two accounts from that list.',
  },
  {
    q: 'What is expensing in accounting?',
    a: 'Expensing means recording a cost as an expense in the current period, so it reduces profit straight away. The alternative is capitalising the cost, which records it as an asset and spreads it over several years through depreciation. Everyday costs such as rent and fuel are expensed, while larger long-lived purchases such as vehicles and equipment are generally capitalised.',
  },
  {
    q: 'What is the difference between single-entry and double-entry bookkeeping?',
    a: 'Single-entry bookkeeping records each transaction once, as money in or money out, much like a cheque register. Double-entry bookkeeping records each transaction twice, as a debit in one account and a credit in another. IRS Publication 583 describes single-entry as a simple and practical system for a small business that is starting out, and double-entry as self-balancing.',
  },
  {
    q: 'Do I need to know bookkeeping terms if I have an accountant?',
    a: 'You do not need to keep the books yourself, but you do need enough vocabulary to read your own reports and answer your accountant’s questions. An owner who knows the difference between revenue, profit and cash, and between cash basis and accrual basis, can check the numbers they are signing. Around ten terms cover most of that.',
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
              <time dateTime={PUBLISHED}>October 12, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 12, 2026</time>
              </span>
              <span aria-hidden>·</span>
              <span>11 min read</span>
              <span aria-hidden>·</span>
              <span>Written by Njock</span>
            </div>
          </header>

          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={HERO}
              alt="An open notebook full of handwritten notes with a row of coloured sticky tabs along its edge, a pair of round glasses and a pencil resting on the page, beside a closed laptop on a wooden desk"
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
                <strong>Short answer:</strong> the bookkeeping terms a
                small-business owner needs come in five groups: the five
                account types, the books a transaction is written in, the
                words for money owed and its timing, the three financial
                reports, and the month-end checks. That is about 25 words,
                and most owners use ten of them.
              </p>
              <p className="mt-4 text-body text-graphite">
                Nearly all of them are ordinary ideas with a formal name. You
                already know what &ldquo;money a customer still owes
                me&rdquo; is. Somebody just decided to call it accounts
                receivable.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Sunday afternoon and Dariusz &mdash; I&rsquo;ll
              call him Dariusz &mdash; is at his desk with a notebook that has
              a row of coloured sticky tabs down one edge. He runs a mobile
              bike repair van. On Friday he had his first proper call with a
              bookkeeper, and each tab marks a word he wrote down to look up
              afterwards.
            </p>
            <p className="mt-4 text-body text-graphite">
              There are eleven tabs. The call was twenty minutes.
            </p>
            <p className="mt-4 text-body text-graphite">
              The one that worries him is near the top. She asked,
              &ldquo;Do you want me to accrue that, or just expense it when it
              clears?&rdquo; and he said, with real conviction,
              &ldquo;Yes.&rdquo;
            </p>
            <p className="mt-4 text-body text-graphite">
              Dariusz isn&rsquo;t bad with money. He can price a wheel rebuild
              in his head. He has simply been dropped into a country where
              everyone speaks a dialect of English he was never taught, and
              he has been getting by the way tourists do: nodding, smiling and
              hoping the bill is right. This is the phrasebook.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="which-terms-you-need">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Which bookkeeping terms you actually need
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most glossaries run from A to Z, which is how you end up reading
              &ldquo;accrual&rdquo; and &ldquo;amortization&rdquo; before
              anyone has told you what an account is. It is like a phrasebook
              that opens with &ldquo;aardvark&rdquo; and reaches
              &ldquo;where is the bathroom&rdquo; on page ninety.
            </p>
            <p className="mt-4 text-body text-graphite">
              This list is in the order the words turn up in real life: what
              gets sorted, where it gets written, who owes whom, what the
              reports say, and what happens at month end. Five groups of five.
            </p>
            <p className="mt-4 text-body text-graphite">
              You do not need all 25, and you do not need us to learn them. The
              IRS says{' '}
              <SourceLink href="https://www.irs.gov/publications/p583">
                you can choose any recordkeeping system suited to your business
              </SourceLink>{' '}
              that clearly shows your income and expenses. If yours is one
              bank account and a spreadsheet, these are the ten that will ever
              touch your life.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">For reading your own numbers:</strong>{' '}
                revenue, expense, net profit, income statement.
              </li>
              <li>
                <strong className="text-aubergine">For knowing who owes whom:</strong>{' '}
                accounts receivable, accounts payable.
              </li>
              <li>
                <strong className="text-aubergine">For tax time:</strong>{' '}
                cash basis, accrual basis, depreciation.
              </li>
              <li>
                <strong className="text-aubergine">For trusting any of it:</strong>{' '}
                bank reconciliation.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The other fifteen are for the day someone uses one at you. And
              if you are wondering which of these jobs belongs to a bookkeeper
              and which to an accountant, that has its own post:{' '}
              <Link href="/blog/bookkeeping-vs-accounting" className={linkClass}>
                bookkeeping versus accounting
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="five-account-types">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The five account types everything gets sorted into
            </h2>
            <p className="mt-4 text-body text-graphite">
              An account, in bookkeeping, is just a labelled bucket. Every
              dollar that moves through a business lands in one of five kinds.
              IRS Publication 583 lists them in a single line: accounts show
              income, expenses, assets, liabilities and net worth.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">1. Asset.</strong>{' '}
                Something the business owns that has value. Cash in the bank,
                the van, the stock of inner tubes, and money customers owe
                you.
              </li>
              <li>
                <strong className="text-aubergine">2. Liability.</strong>{' '}
                Something the business owes. The van loan, the credit card
                balance, a supplier bill you have not paid, sales tax you have
                collected and not yet sent in.
              </li>
              <li>
                <strong className="text-aubergine">3. Equity.</strong>{' '}
                Assets minus liabilities. The IRS calls it net worth: the
                excess of assets over liabilities. It is the owner&rsquo;s
                share of the business once everyone else has been paid.
              </li>
              <li>
                <strong className="text-aubergine">4. Revenue.</strong>{' '}
                What the business earns from selling its goods or services,
                before any costs come off. Also called income or sales.
              </li>
              <li>
                <strong className="text-aubergine">5. Expense.</strong>{' '}
                What it costs to run the business and earn that revenue. Fuel,
                parts, insurance, software, the phone bill.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The first three are tied together by one sum, called the
              accounting equation: assets equal liabilities plus equity. If
              Dariusz&rsquo;s business owns $22,000 of things and owes
              $14,500, his equity is $7,500.
            </p>
            <p className="mt-4 text-body text-graphite">
              Equity is the word owners most often mistake for cash. It is not
              a bank balance. A fair amount of Dariusz&rsquo;s $7,500 is
              currently shaped like a van and a truing stand, and neither of
              those will pay a dentist.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-notebook-calculator-cash.webp`}
              alt="A person writing figures in an open notebook with one hand and pressing a key on a black desk calculator with the other, with a fan of banknotes lying on the wooden table"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="the-books">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The books themselves: where a transaction gets written down
            </h2>
            <p className="mt-4 text-body text-graphite">
              &ldquo;The books&rdquo; used to be actual books. Now they are a
              database with a friendlier login screen, but the parts kept
              their names.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">6. Chart of accounts.</strong>{' '}
                The full list of buckets your business uses, grouped under the
                five types above. It is the table of contents for your books.
                A small business might have thirty lines on it.
              </li>
              <li>
                <strong className="text-aubergine">7. Journal entry.</strong>{' '}
                The record of one transaction: the date, the accounts it
                touches and the amounts. The journal is the running diary of
                those entries in date order.
              </li>
              <li>
                <strong className="text-aubergine">8. General ledger.</strong>{' '}
                The same transactions, re-sorted by account instead of by
                date. The IRS describes the flow in one sentence: transactions
                are first entered in a journal and then posted to ledger
                accounts.
              </li>
              <li>
                <strong className="text-aubergine">9. Debit and credit.</strong>{' '}
                Left and right. In the IRS&rsquo;s words, each account has a
                left side for debits and a right side for credits. A debit
                increases an asset or expense account. A credit increases a
                liability, equity or revenue account.
              </li>
              <li>
                <strong className="text-aubergine">10. Double-entry bookkeeping.</strong>{' '}
                The system where every transaction is recorded twice, as a
                debit in one account and a credit in another.{' '}
                <SourceLink href="https://www.irs.gov/publications/p583">
                  IRS Publication 583
                </SourceLink>{' '}
                calls it self-balancing: total debits must equal total
                credits, and if they do not, there is an error to find.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Debit and credit cause more dread than any other pair of words
              in this post, mostly because your bank has spent your whole life
              teaching you that a credit is good news and a debit is bad. In
              bookkeeping they carry no mood at all. They mean left and right.
              Centuries of anxiety, over which column.
            </p>
            <p className="mt-4 text-body text-graphite">
              One example and it stops being abstract. Dariusz buys $90 of
              inner tubes on the business debit card. The entry is a $90 debit
              to parts expense, because an expense went up, and a $90 credit
              to cash, because an asset went down. Two sides, same amount.
              That is the whole trick.
            </p>
            <p className="mt-4 text-body text-graphite">
              The alternative is single-entry: one line per transaction, money
              in or money out. The same IRS publication says it can be a
              simple and practical system if you are starting a small
              business. A spreadsheet is single-entry, and it is allowed.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="money-owed-and-timing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Money owed in both directions, and when it counts
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the group that tripped Dariusz up on the phone. All five
              words are about the same awkward fact: the work, the invoice and
              the money rarely happen on the same day.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">11. Accounts receivable.</strong>{' '}
                Money customers owe you for work you have already invoiced.
                Often shortened to AR. It is an asset.
              </li>
              <li>
                <strong className="text-aubergine">12. Accounts payable.</strong>{' '}
                Money you owe suppliers for bills you have received and not
                yet paid. Often shortened to AP. It is a liability.
              </li>
              <li>
                <strong className="text-aubergine">13. Cash basis.</strong>{' '}
                The accounting method where, as{' '}
                <SourceLink href="https://www.irs.gov/publications/p538">
                  IRS Publication 538
                </SourceLink>{' '}
                puts it, you generally report income in the tax year you
                receive it and deduct expenses in the tax year you pay them.
              </li>
              <li>
                <strong className="text-aubergine">14. Accrual basis.</strong>{' '}
                The method where you generally report income in the tax year
                you earn it, regardless of when payment is received, and
                deduct expenses in the year you incur them.
              </li>
              <li>
                <strong className="text-aubergine">15. Accrued expense.</strong>{' '}
                A cost you have already run up but have not yet paid or been
                billed for. December&rsquo;s electricity, used in December,
                invoiced in January. To accrue it is to record it in December
                anyway.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Here is the difference in one invoice. On March 28, Dariusz
              services a caf&eacute; chain&rsquo;s delivery bikes and sends a
              bill for $480. They pay on April 19.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  On the cash basis, nothing happens in March.
                </strong>{' '}
                The $480 is income in April, when it lands. March looks
                quieter than it was.
              </li>
              <li>
                <strong className="text-aubergine">
                  On the accrual basis, March gets the $480.
                </strong>{' '}
                It is recorded as revenue on March 28, with a matching $480 in
                accounts receivable. On April 19 the receivable turns into
                cash and no new revenue is recorded.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Same job, same money, different month. Move the dates to
              December and January and it is a different tax year, which is
              why the bookkeeper asked. Accounts receivable and accounts
              payable have always sounded to me like two departments in a
              building you would not want to visit, but they are just
              &ldquo;owed to me&rdquo; and &ldquo;owed by me.&rdquo;
            </p>
            <p className="mt-4 text-body text-graphite">
              Each method has its own full guide here, including who is
              allowed to use which:{' '}
              <Link href="/blog/cash-basis-accounting" className={linkClass}>
                cash basis accounting
              </Link>{' '}
              and{' '}
              <Link href="/blog/accrual-basis-accounting" className={linkClass}>
                accrual basis accounting
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="the-reports">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The reports, and the words printed on them
            </h2>
            <p className="mt-4 text-body text-graphite">
              Everything above exists to produce three reports. They arrive as
              PDFs, usually attached to an email that says &ldquo;let me know
              if you have any questions,&rdquo; which is a generous thing to
              say to someone who does not yet know what to ask.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">16. Income statement.</strong>{' '}
                Revenue minus expenses over a period, such as a month or a
                year. Also called a profit and loss statement, or P&amp;L. It
                answers &ldquo;did we make money?&rdquo;
              </li>
              <li>
                <strong className="text-aubergine">17. Balance sheet.</strong>{' '}
                Assets, liabilities and equity on one stated date. It answers
                &ldquo;what do we own and owe right now?&rdquo;
              </li>
              <li>
                <strong className="text-aubergine">18. Cash flow statement.</strong>{' '}
                Cash that came in and went out over a period, whatever it was
                for. It answers &ldquo;where did the money go?&rdquo;
              </li>
              <li>
                <strong className="text-aubergine">19. Cost of goods sold.</strong>{' '}
                The direct cost of the things you sold: parts, materials,
                stock. Often shortened to COGS. Rent and software are not in
                it.
              </li>
              <li>
                <strong className="text-aubergine">20. Gross profit and net profit.</strong>{' '}
                Gross profit is revenue minus cost of goods sold. Net profit
                is what is left after every other expense comes off as well.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Take an illustrative month for the van. Revenue is $7,400. Parts
              cost $2,100, so gross profit is $5,300. Fuel, insurance,
              software and the phone come to $1,850, so net profit is $3,450.
            </p>
            <p className="mt-4 text-body text-graphite">
              Three different numbers, all of which get called &ldquo;what I
              made.&rdquo; Only the last one is. If the gap between them is
              new to you, we went through it slowly, with a bank balance that
              refused to cooperate, in{' '}
              <Link
                href="/blog/why-is-accounting-important-in-business"
                className={linkClass}
              >
                why accounting is important in business
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/worn-old-book-and-pen-on-boards.webp`}
              alt="A thick, worn leather-bound book with frayed corners lying on weathered wooden boards beside an ornate silver dip pen and a small metal inkwell"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="month-end">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The month-end and year-end words
            </h2>
            <p className="mt-4 text-body text-graphite">
              The last five turn up when someone is checking the books rather
              than adding to them. They are the least glamorous words in a
              field not known for glamour, and they are the ones that keep the
              other twenty honest.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">21. Accounting period.</strong>{' '}
                The stretch of time a report covers: a month, a quarter, a
                year. For tax, the IRS says a tax year is usually 12
                consecutive months. A calendar year ends December 31, and a
                fiscal year ends on the last day of any other month.
              </li>
              <li>
                <strong className="text-aubergine">22. Bank reconciliation.</strong>{' '}
                Comparing your books with the bank statement, line by line,
                until they agree. Publication 583 says you should reconcile
                your checking account each month.
              </li>
              <li>
                <strong className="text-aubergine">23. Trial balance.</strong>{' '}
                A list of every account and its balance, with debits in one
                column and credits in the other. If the two totals match, the
                books balance. It proves the arithmetic, not that everything
                is in the right bucket.
              </li>
              <li>
                <strong className="text-aubergine">24. Depreciation.</strong>{' '}
                Spreading the cost of a long-lived purchase over the years you
                use it. The IRS defines it as{' '}
                <SourceLink href="https://www.irs.gov/taxtopics/tc704">
                  the recovery of the cost of the property over a number of
                  years
                </SourceLink>
                , for property expected to last more than one year.
              </li>
              <li>
                <strong className="text-aubergine">25. Write-off.</strong>{' '}
                In the books, removing an amount that is no longer worth what
                you recorded, such as an invoice that will never be paid. In
                everyday talk it means a deductible expense.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Depreciation in its simplest form: a $6,000 piece of equipment
              used for five years is $1,200 of expense a year, not $6,000 in
              the month you bought it. The tax rules have their own schedules
              and often let you deduct faster, so the figure on your return
              may not match this tidy version.
            </p>
            <p className="mt-4 text-body text-graphite">
              And &ldquo;write-off&rdquo; deserves a gentle warning, because
              it is the most optimistic word in the language. A $500 write-off
              does not put $500 back in your pocket. It reduces the income you
              are taxed on by $500, so you get back your tax rate&rsquo;s
              share of it and are still out the rest.
            </p>
            <p className="mt-4 text-body text-graphite">
              If your month end is one account and forty transactions, you can
              do this group yourself in an hour and you should. Our plans
              start at $299 a month, and nobody should pay that to have a
              spreadsheet compared with a bank statement. When the hour
              becomes a weekend,{' '}
              <Link href="/services" className={linkClass}>
                the services page
              </Link>{' '}
              shows what we take over and{' '}
              <Link href="/pricing" className={linkClass}>
                the pricing page
              </Link>{' '}
              shows what it costs. The signs you have crossed that line are in{' '}
              <Link
                href="/blog/do-i-need-an-accountant-for-your-small-business"
                className={linkClass}
              >
                do you actually need an accountant
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-nodding">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What nodding along actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Nobody has ever been fined for not knowing what a trial balance
              is. The cost of the vocabulary gap is quieter than that. It is
              the question you answered &ldquo;yes&rdquo; to without knowing
              what you agreed to.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              &ldquo;Cash or accrual?&rdquo; decides which year a December
              invoice is taxed in. &ldquo;Expense it or capitalise it?&rdquo;
              decides whether a $6,000 purchase comes off this year&rsquo;s
              profit or is spread over five. Both are real choices with real
              tax consequences, and both sound, on the phone, like small talk.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Then there is the plain reading error. Go back to the
              illustrative month: $7,400 of revenue, $3,450 of net profit. An
              owner who takes the first number for the second is planning
              around $3,950 a month that does not exist. Over a year that is
              $47,400 of confidence with nothing behind it.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              None of this takes a qualification to fix. It takes about ten
              words and the nerve to say &ldquo;sorry, what does that
              mean?&rdquo; to someone you are paying. A decent bookkeeper will
              be glad you asked. Dariusz can take the tabs out of the notebook
              now. Next call, when she asks whether to accrue it, he will have
              a follow-up question.
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
              Dariusz is a composite and his figures are illustrative. The IRS
              wording quoted above was checked against the linked IRS pages on
              October 12, 2026. Definitions here are the plain-English
              versions; the rules behind accounting methods and depreciation
              have exceptions, so confirm at the source before relying on a
              blog post &mdash; including this one.
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
              href: '/blog/why-is-accounting-important-in-business',
              eyebrow: 'Blog',
              title: 'Why Is Accounting Important in Business? 5 Honest Reasons',
              blurb:
                'Revenue, profit and cash are three different numbers. What each one tells you, with a worked month.',
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
              Want your books explained in words you already know?
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
