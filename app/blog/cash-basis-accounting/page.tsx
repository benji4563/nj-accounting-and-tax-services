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

const SLUG = 'cash-basis-accounting';
const TITLE = 'Cash Basis Accounting: What It Is and When It Works';
const DESCRIPTION =
  'Cash basis accounting counts money when it moves, not when it’s earned — what it means, who has to switch to accrual, and when it’s smart to do it anyway.';
const PUBLISHED = '2026-07-29';
const MODIFIED = '2026-07-29';
const HERO = `/blog/${SLUG}/hero-cash-drawer-and-ledger.webp`;

const TOC = [
  { id: 'what-cash-basis-means', label: 'What cash basis accounting actually means' },
  { id: 'cash-vs-accrual-example', label: 'Cash basis vs. accrual accounting, in one example' },
  { id: 'who-can-use-cash-method', label: 'Who can actually use the cash method (and who can’t)' },
  { id: 'why-small-businesses-default-to-cash', label: 'Why most small businesses default to cash basis' },
  { id: 'what-cash-basis-hides', label: 'The blind spot: what cash basis hides from you' },
  { id: 'switching-to-accrual', label: 'Switching to accrual: what actually changes, and how' },
  { id: 'cost-of-not-knowing-your-numbers', label: 'What flying blind on your numbers costs you' },
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
        alt: 'An open cash drawer with neatly stacked bills and coins beside a spiral notebook of hand-ruled daily totals and a fan of paper receipts, on a sunlit wooden counter',
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
    q: 'What is the difference between cash basis and accrual accounting?',
    a: 'Cash basis records income and expenses when money actually moves — cash in, cash out. Accrual records income when you earn it (the invoice goes out, the job is done) and expenses when you incur them, whether or not cash has changed hands yet. The gap between the two only matters when there’s a delay between doing the work and getting paid for it, which for most small businesses is often.',
  },
  {
    q: 'Is cash basis accounting GAAP compliant?',
    a: 'No. Generally Accepted Accounting Principles require accrual accounting because it matches income to the period it was actually earned. Cash basis books are common and perfectly legal for tax purposes and day-to-day management, but a bank, investor, or buyer who wants GAAP-compliant financials will ask for accrual statements, not cash basis ones.',
  },
  {
    q: 'What is the IRS gross receipts threshold for cash basis accounting?',
    a: 'For C corporations and partnerships with a C corporation partner, the cutoff is based on average annual gross receipts over the prior three tax years, and it’s indexed for inflation every year under whatever revenue procedure the IRS issues that fall — Revenue Procedure 2025-32 set 2026’s figure in the low $30 millions. Because the number moves annually, it’s worth confirming the current one with us rather than trusting a figure in an old blog post, including this one.',
  },
  {
    q: 'Can an LLC use cash basis accounting?',
    a: 'Usually, yes. Most LLCs are taxed as sole proprietorships or partnerships by default, and both of those can use cash basis regardless of size. The gross receipts test only kicks in if the LLC elects to be taxed as a C corporation — at that point it’s playing by C-corp rules, cash basis included.',
  },
  {
    q: 'When should a small business switch from cash to accrual accounting?',
    a: 'Usually when the cash basis picture stops matching reality: you’re carrying real inventory, you’re chasing a bank loan or investor who wants accrual statements, or you keep being surprised by how much you actually made — or didn’t — each month. None of those are IRS deadlines. They’re just the point where better numbers start paying for themselves.',
  },
  {
    q: 'How do you change your accounting method with the IRS?',
    a: 'You file Form 3115, Application for Change in Accounting Method, generally attached to the tax return for the year of the change. It also calculates a one-time catch-up adjustment — a “section 481(a) adjustment” — so income already counted once under the old method doesn’t get counted again under the new one.',
  },
  {
    q: 'What is modified cash basis accounting?',
    a: 'A middle ground: keep cash basis for day-to-day income and expenses, but track a few accrual-style items on the side — usually accounts receivable, accounts payable, or inventory. It isn’t a formal method the IRS recognizes on its own, but plenty of small businesses run it internally as a bridge before a full switch to accrual.',
  },
  {
    q: 'Can a business with inventory use cash basis accounting?',
    a: 'Generally not for the inventory itself — accrual is standard once inventory is a real, material part of how you make money. There’s a small-business exception for companies under the same gross-receipts threshold that governs the cash method generally, which lets them treat inventory as non-incidental materials and supplies instead of full accrual inventory accounting. It’s a genuine exception, not a loophole, but confirm you qualify before relying on it.',
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
              <time dateTime={PUBLISHED}>July 29, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>July 29, 2026</time>
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
              alt="An open cash drawer with neatly stacked bills and coins beside a spiral notebook of hand-ruled daily totals and a fan of paper receipts, on a sunlit wooden counter"
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
                <strong>Short answer:</strong> cash basis accounting is a
                bookkeeping method that counts income the day the money
                actually lands in your account and counts expenses the day it
                actually leaves &mdash; nothing is recorded just because you
                sent an invoice or a bill showed up. It&rsquo;s the default
                method for most sole proprietors and small businesses, and for
                many of them, it&rsquo;s the right one to stay on.
              </p>
              <p className="mt-4 text-body text-graphite">
                One catch: past a certain size, or under a certain business
                structure, the IRS decides for you.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s the second Tuesday of the month and Marcus &mdash;
              I&rsquo;ll call him Marcus &mdash; is staring at his business
              checking account, which reads $340, trying to work out how a
              freelance designer who just wrapped two five-figure branding
              projects is basically broke.
            </p>
            <p className="mt-4 text-body text-graphite">
              He invoiced $16,000 for those two projects three weeks ago, net
              30. Nothing has landed yet. His books, kept on a cash basis,
              show $340 in income for the month, because that&rsquo;s the
              literal cash that moved.
            </p>
            <p className="mt-4 text-body text-graphite">
              He isn&rsquo;t broke. He&rsquo;s rich on paper and poor in the
              bank, and cash basis accounting is exactly why he can&rsquo;t
              tell the difference without looking twice.
            </p>
          </div>
        </Section>

        {/* 1 — WHAT IT MEANS */}
        <Section background="ivory" id="what-cash-basis-means">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What cash basis accounting actually means
            </h2>
            <p className="mt-4 text-body text-graphite">
              It&rsquo;s the same rule you already use for your personal
              checking account: money counts when it moves, not before. No
              separate ledger tracks what people owe you or what you owe
              someone else &mdash; the bank balance and the books are, for the
              most part, telling the same story.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Income counts on the day it hits your account.
                </strong>{' '}
                Not the day you did the work, not the day you sent the
                invoice &mdash; the day the deposit actually clears.
              </li>
              <li>
                <strong className="text-aubergine">
                  Expenses count on the day the money leaves.
                </strong>{' '}
                A bill sitting unpaid in your inbox isn&rsquo;t an expense
                yet, no matter how firmly it&rsquo;s due.
              </li>
              <li>
                <strong className="text-aubergine">
                  There&rsquo;s no accounts receivable or payable in the books
                  themselves.
                </strong>{' '}
                You might track who owes you what in a separate spreadsheet,
                but it doesn&rsquo;t touch the official cash basis numbers
                until cash actually changes hands.
              </li>
              <li>
                <strong className="text-aubergine">
                  It&rsquo;s the simplest of a few types of financial
                  accounting a small business can choose from.
                </strong>{' '}
                Accrual and modified cash basis are the other two you&rsquo;ll
                run into, and both exist to solve problems cash basis
                creates.
              </li>
            </ul>
          </div>
        </Section>

        {/* 2 — CASH VS ACCRUAL EXAMPLE */}
        <Section background="cream" id="cash-vs-accrual-example">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Cash basis vs. accrual accounting, in one example
            </h2>
            <p className="mt-4 text-body text-graphite">
              Take Marcus&rsquo;s $16,000 in invoices and watch what each
              method does with it.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. He finishes the branding work in June.
                </strong>{' '}
                Under both methods, the work is done. Nothing else about the
                two methods agrees from here on.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. He sends the invoices on June 30, net 30.
                </strong>{' '}
                Under accrual basis accounting, this is the moment the income
                counts &mdash; it&rsquo;s earned, and the invoice date is the
                trigger.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Under cash basis, nothing has happened yet.
                </strong>{' '}
                Marcus&rsquo;s June books show none of that $16,000, no matter
                how done the work is.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. The clients pay in late July.
                </strong>{' '}
                Only now does cash basis record the income &mdash; a full
                month after accrual already had.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              That one-month gap is the entire idea. One of the real{' '}
              <strong className="text-aubergine">
                benefits of accrual accounting
              </strong>{' '}
              is exactly this: it matches income to the period you actually
              earned it, so a June profit-and-loss statement shows June&rsquo;s
              real performance instead of whichever invoices happened to get
              paid that month.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/cash-in-cash-out-folders.webp`}
              alt="Two handwritten folders labeled Cash In and Cash Out stuffed with receipts and checks, beside an adding machine with a curling paper tape and a cooling mug of coffee"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — WHO CAN USE THE CASH METHOD */}
        <Section background="ivory" id="who-can-use-cash-method">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who can actually use the cash method (and who can&rsquo;t)
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most small businesses can legally stay on cash basis forever.
              The push to switch to accrual is usually about better decisions,
              not IRS orders &mdash; but a few structures don&rsquo;t get the
              choice.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Sole proprietors and freelancers.
                </strong>{' '}
                Free to use cash basis at any size, indefinitely.
              </li>
              <li>
                <strong className="text-aubergine">
                  Most partnerships and S corporations.
                </strong>{' '}
                Also free to use it regardless of size, as long as there&rsquo;s
                no C corporation in the ownership structure.
              </li>
              <li>
                <strong className="text-aubergine">
                  Farming businesses and qualified personal service
                  corporations.
                </strong>{' '}
                Carved out from the size limit entirely, with their own set
                of rules.
              </li>
              <li>
                <strong className="text-aubergine">
                  C corporations, and partnerships with a C-corp partner.
                </strong>{' '}
                Restricted once average annual gross receipts over the prior
                three years cross a threshold that the{' '}
                <SourceLink href="https://www.irs.gov/publications/p538">
                  IRS indexes for inflation every year
                </SourceLink>
                . Cross it, and accrual stops being optional.
              </li>
              <li>
                <strong className="text-aubergine">
                  Businesses with real inventory.
                </strong>{' '}
                Generally required to use accrual for the inventory portion
                of the business, unless they qualify for a small-business
                exception tied to that same gross-receipts threshold.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              If none of the restricted categories fit you, this is a
              genuinely optional decision, not a compliance deadline. See{' '}
              <Link href="/services" className={linkClass}>
                what our bookkeeping and tax service actually covers
              </Link>{' '}
              if you&rsquo;re weighing whether to sort this out yourself or
              hand it off.
            </p>
          </div>
        </Section>

        {/* 4 — WHY SMALL BUSINESSES DEFAULT TO CASH */}
        <Section background="cream" id="why-small-businesses-default-to-cash">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Why most small businesses default to cash basis
            </h2>
            <p className="mt-4 text-body text-graphite">
              It isn&rsquo;t just the default because it&rsquo;s legal.
              It&rsquo;s the default because, for a lot of small businesses,
              it&rsquo;s genuinely the right tool.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  It shows real cash in the bank.
                </strong>{' '}
                No guessing whether that $16,000 in invoices is actually
                spendable yet &mdash; the balance in the books is the balance
                you can act on today.
              </li>
              <li>
                <strong className="text-aubergine">
                  It&rsquo;s dramatically less bookkeeping.
                </strong>{' '}
                No aging reports, no tracking which invoices are outstanding,
                no reconciling promises against reality.
              </li>
              <li>
                <strong className="text-aubergine">
                  It hands you real tax-timing flexibility.
                </strong>{' '}
                If Marcus holds off invoicing until January instead of
                December, that $16,000 doesn&rsquo;t touch this year&rsquo;s
                taxes at all &mdash; a legitimate, common way to manage which
                year looks profitable.
              </li>
              <li>
                <strong className="text-aubergine">
                  It&rsquo;s doable without software or training.
                </strong>{' '}
                A checking account and a habit of checking it is most of the
                system. That&rsquo;s not a knock on it &mdash; if that&rsquo;s
                genuinely your whole situation, decent free software or a
                spreadsheet is enough, and you don&rsquo;t need to pay anyone
                to keep it that way.
              </li>
            </ul>
          </div>
        </Section>

        {/* 5 — WHAT CASH BASIS HIDES */}
        <Section background="ivory" id="what-cash-basis-hides">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The blind spot: what cash basis hides from you
            </h2>
            <p className="mt-4 text-body text-graphite">
              Every strength above has a mirror-image weakness, and it&rsquo;s
              the same one that had Marcus staring at $340 wondering where
              his month went.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Money you&rsquo;ve earned but not collected is invisible.
                </strong>{' '}
                On paper, a great month can look identical to a terrible one
                if the good invoices just haven&rsquo;t been paid yet.
              </li>
              <li>
                <strong className="text-aubergine">
                  Bills you owe but haven&rsquo;t paid are also invisible.
                </strong>{' '}
                A flush-looking bank balance can be one big, unpaid invoice
                away from a very different picture.
              </li>
              <li>
                <strong className="text-aubergine">
                  It isn&rsquo;t GAAP-compliant.
                </strong>{' '}
                A bank underwriting a loan, an investor doing diligence, or a
                buyer evaluating your business will ask for accrual
                statements &mdash; cash basis numbers won&rsquo;t satisfy them.
              </li>
              <li>
                <strong className="text-aubergine">
                  It can quietly misprice your work.
                </strong>{' '}
                If your cash-basis numbers looked fine for a few months
                because of when invoices happened to get paid, you can
                underprice the next job without ever noticing the actual
                margin was thin.
              </li>
            </ul>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/unpaid-invoices-and-calendar.webp`}
              alt="A small cash box tagged Paid full of coins and worn bills beside a folder labeled Unpaid Invoices, with a wall calendar showing one circled day in the background"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — SWITCHING TO ACCRUAL */}
        <Section background="cream" id="switching-to-accrual">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Switching to accrual: what actually changes, and how
            </h2>
            <p className="mt-4 text-body text-graphite">
              Nobody switches accounting methods for fun. It&rsquo;s worth
              doing when the reason is specific, and it&rsquo;s a real
              process once you decide.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Confirm you actually need the full switch.
                </strong>{' '}
                A lot of businesses only need to see receivables and payables
                clearly, not overhaul the whole ledger. That&rsquo;s{' '}
                <strong className="text-aubergine">
                  modified cash basis
                </strong>{' '}
                &mdash; cash basis day to day, with a side ledger tracking
                what&rsquo;s owed and owing. It&rsquo;s not a formal IRS
                method, but it&rsquo;s a genuine, lighter-weight bridge.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. File{' '}
                  <SourceLink href="https://www.irs.gov/forms-pubs/about-form-3115">
                    Form 3115, Application for Change in Accounting Method
                  </SourceLink>
                  .
                </strong>{' '}
                Most small-business changes qualify as automatic changes,
                filed with the return for the year of the switch rather than
                needing advance IRS approval.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Work through the one-time catch-up adjustment.
                </strong>{' '}
                Switching methods can double-count or skip some income if
                it&rsquo;s not handled &mdash; Form 3115 calculates a
                &ldquo;section 481(a) adjustment&rdquo; so the transition
                year comes out even.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Change how you enter transactions, not just what you
                  report.
                </strong>{' '}
                QuickBooks and similar software can run cash or accrual
                reports off the same ledger &mdash; but only if invoices and
                bills are entered when they&rsquo;re issued, not only when
                paid.
              </li>
            </ol>
          </div>
        </Section>

        {/* EMPHASIS — COST OF FLYING BLIND */}
        <Section background="aubergine" id="cost-of-not-knowing-your-numbers">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What flying blind on your numbers costs you
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              None of this is illegal or even unusual &mdash; most small
              businesses run cash basis their entire lives without a problem.
              The cost shows up quieter than a penalty: a slow season that
              feels sudden because the timing masked it, a job priced off a
              few good-looking cash-basis months instead of the real margin,
              or a loan application stalled because the bank wants accrual
              statements you&rsquo;ve never had to produce.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The expensive version is the one where all of that lands at
              once &mdash; tax season, a lender&rsquo;s deadline, and a
              scramble to reconstruct a year of receivables from memory and
              bank statements, because nobody was tracking them along the way.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              There&rsquo;s no invoice for that scramble, but do the
              arithmetic yourself: reconstructing a year of unpaid invoices
              and unbilled work after the fact takes real hours, at whatever
              your time is actually worth.{' '}
              <strong className="text-ivory">
                A $299-a-month bookkeeping habit that tracks it as you go is,
                almost every time, the cheaper problem.
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
              title: 'Do you actually need an accountant?',
              blurb:
                'Six honest signs it’s time, three signs it isn’t, and the real cost math — worth reading before you decide who should be watching these numbers.',
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
              Not sure which method you&rsquo;re even on?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. Bring your
              books exactly as they are. We&rsquo;ll tell you honestly
              whether cash basis is still serving you or whether it&rsquo;s
              quietly costing you more than it&rsquo;s saving.
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
