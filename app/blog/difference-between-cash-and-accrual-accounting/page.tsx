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

const SLUG = 'difference-between-cash-and-accrual-accounting';
const TITLE = 'What Is the Difference Between Cash and Accrual Accounting?';
const DESCRIPTION =
  'What is the difference between cash accounting and accrual accounting? One invoice worked both ways, the tax timing, who must use accrual, and how to switch.';
const PUBLISHED = '2026-10-26';
const MODIFIED = '2026-10-26';
const HERO = `/blog/${SLUG}/hero-desk-tax-folder-and-coins.webp`;

const TOC = [
  { id: 'one-invoice', label: 'One invoice, two answers' },
  { id: 'side-by-side', label: 'Cash vs accrual, side by side' },
  { id: 'tax-timing', label: 'How each method moves your tax bill' },
  { id: 'who-must-use-accrual', label: 'Who has to use accrual, and who gets to choose' },
  { id: 'which-fits', label: 'Which method fits your business' },
  { id: 'switching', label: 'Switching methods without making a mess' },
  { id: 'wrong-method', label: 'What the wrong method quietly costs' },
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
        alt: 'A wooden desk with a folder labeled Taxes, a banknote, stacks of coins, reading glasses and a cream rotary telephone',
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
    a: "Cash accounting records income when money is received and expenses when they are paid. Accrual accounting records income when it is earned and expenses when they are incurred, whether or not any money has moved. The same invoice can land in different months, or different tax years, depending on the method.",
  },
  {
    q: 'Which is better, cash or accrual accounting?',
    a: "Neither is better in general. Cash basis is simpler and shows what is actually in the bank, which suits many small service businesses. Accrual basis shows true profit for each period, which matters more once you invoice on payment terms, carry inventory, or need financial statements for a lender or investor.",
  },
  {
    q: 'Can a small business use cash basis accounting?',
    a: "Usually, yes. Sole proprietors, S corporations and most partnerships can use the cash method regardless of size. C corporations and partnerships with a C corporation partner can use it only while they pass the IRS gross receipts test, and tax shelters cannot use it at all.",
  },
  {
    q: 'What is the gross receipts limit for the cash method in 2026?',
    a: "For tax years beginning in 2026, a corporation or partnership passes the test if its average annual gross receipts for the prior three tax years do not exceed $32,000,000, per IRS Revenue Procedure 2025-32. The figure is indexed for inflation and changes most years, so check the current revenue procedure before relying on it.",
  },
  {
    q: 'Does accrual accounting mean I pay tax on money I have not received yet?',
    a: "Generally, yes. Under the accrual method you report income once all events fixing your right to it have occurred and the amount can be determined with reasonable accuracy, which is usually when you finish the work and bill it. If the customer pays next year, the income still belongs to the year it was earned.",
  },
  {
    q: 'Can I switch from cash to accrual accounting?',
    a: "Yes, but you generally need IRS approval to change your overall accounting method, and you request it by filing Form 3115. The switch usually comes with a one-time adjustment so income is not counted twice or skipped, so it is worth planning for the start of a tax year rather than doing it mid-stream.",
  },
  {
    q: 'What is a hybrid accounting method?',
    a: "A hybrid method combines cash, accrual and special methods, which the IRS allows if the combination clearly reflects income and you use it consistently. A common example is a business that must use accrual for inventory purchases and sales but uses cash for everything else.",
  },
  {
    q: 'What are the benefits of accrual accounting?',
    a: "Accrual accounting matches income to the period it was earned and expenses to the period they relate to, so each month shows a true profit. It also tracks what customers owe you and what you owe suppliers, and it is the basis for GAAP financial statements that lenders and investors usually expect.",
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
              <time dateTime={PUBLISHED}>October 26, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 26, 2026</time>
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
              alt="A wooden desk with a folder labeled Taxes, a banknote, stacks of coins, reading glasses and a cream rotary telephone"
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
                <strong>Short answer:</strong> The difference between cash
                accounting and accrual accounting is timing. Cash accounting
                records income when the money arrives and expenses when you pay
                them. Accrual accounting records income when you earn it and
                expenses when you incur them, even if no money has moved yet.
              </p>
              <p className="mt-4 text-body text-graphite">
                Same business, same invoices, different months on the books
                &mdash; and sometimes a different tax year. Most small
                businesses can pick either method; larger C corporations, and
                businesses with real inventory, have less choice.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s the third week of January and Marcus &mdash;
              I&rsquo;ll call him Marcus &mdash; is looking at two reports for
              his small landscape design business that cannot both be true.
              His bank app says December was his worst month of the year. His
              accounting software, which he once clicked a setting in and has
              been afraid of ever since, says December was his best.
            </p>
            <p className="mt-4 text-body text-graphite">
              The culprit is one $4,800 invoice. He sent it on December 18
              for a backyard redesign he finished that week. The client paid
              it on January 9, after what we can only assume was a very
              relaxing holiday.
            </p>
            <p className="mt-4 text-body text-graphite">
              Neither report is lying. They&rsquo;re answering different
              questions. Once you can see which question each one answers,
              the choice between cash and accrual stops being jargon and
              becomes a fairly ordinary business decision.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="one-invoice">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              One invoice, two answers
            </h2>
            <p className="mt-4 text-body text-graphite">
              Take Marcus&rsquo;s December invoice and run it through both
              methods. Then add two more ordinary transactions, because a
              business with one invoice is a hobby.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. The $4,800 invoice, sent December 18, paid January 9.
                </strong>{' '}
                Cash basis counts it in January, when the money lands. Accrual
                counts it in December, when the work was done and billed.
                Across a calendar tax year, that&rsquo;s the difference between
                this year&rsquo;s income and next year&rsquo;s.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. A $600 plant nursery bill, received December 20, paid
                  January 15.
                </strong>{' '}
                Cash basis records the expense in January, when he pays.
                Accrual records it in December, when he took the plants and
                owed the money.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. A $1,200 annual design-software subscription, paid
                  December 1.
                </strong>{' '}
                Cash basis says December. Accrual spreads it across the twelve
                months it covers, $100 a month &mdash; and the tax rules for
                prepaid expenses add their own wrinkle, which we&rsquo;ll get
                to.
              </li>
            </ol>
            <p className="mt-6 text-body text-graphite">
              Under cash, Marcus&rsquo;s December shows $1,200 out and nothing
              in. Under accrual, it shows $4,800 in, $700 out. Same man, same
              mulch, two completely different moods. If you&rsquo;d like the
              long version of either method on its own, we&rsquo;ve written
              up{' '}
              <Link href="/blog/cash-basis-accounting" className={linkClass}>
                how cash basis accounting works
              </Link>{' '}
              and{' '}
              <Link href="/blog/accrual-basis-accounting" className={linkClass}>
                how accrual basis accounting works
              </Link>{' '}
              separately. This post is the side-by-side.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="side-by-side">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Cash vs accrual, side by side
            </h2>
            <p className="mt-4 text-body text-graphite">
              The cleanest way to hold the two in your head: cash basis is
              checking your bank balance. Accrual basis is checking your bank
              balance and also opening your mail.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">When income counts.</strong>{' '}
                Cash: when you receive it. Accrual: when you&rsquo;ve earned it
                and the amount is known, usually when you finish and bill the
                work.
              </li>
              <li>
                <strong className="text-aubergine">When expenses count.</strong>{' '}
                Cash: when you pay them. Accrual: when you incur them, meaning
                you owe the money and the goods or services have been
                provided.
              </li>
              <li>
                <strong className="text-aubergine">What the books track.</strong>{' '}
                Cash books mostly track the bank. Accrual books also carry
                accounts receivable, what customers owe you, and accounts
                payable, what you owe suppliers.
              </li>
              <li>
                <strong className="text-aubergine">What the numbers tell you.</strong>{' '}
                Cash tells you how much money you have. Accrual tells you
                whether you made money. Those are different questions, and a
                growing business can answer &ldquo;yes&rdquo; to the second
                while the first is quietly alarming.
              </li>
              <li>
                <strong className="text-aubergine">Effort.</strong>{' '}
                Cash is simpler to keep. Accrual takes more bookkeeping and
                needs someone to track open invoices and bills every month.
              </li>
              <li>
                <strong className="text-aubergine">Outside reporting.</strong>{' '}
                Accrual is the basis for GAAP financial statements, which
                lenders, investors and buyers of a business usually want to
                see. Cash-basis statements are not GAAP, so the question tends
                to come up the day a bank asks for financials.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              If several of those terms made your eyes slide off the page, our{' '}
              <Link href="/blog/bookkeeping-terms" className={linkClass}>
                plain-English list of bookkeeping terms
              </Link>{' '}
              covers receivables, payables and the rest without making anyone
              sit an exam. And if you&rsquo;re weighing accrual specifically,
              here are the{' '}
              <Link href="/blog/benefits-of-accrual-accounting" className={linkClass}>
                benefits of accrual accounting
              </Link>{' '}
              and what they cost.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/stack-of-unpaid-paperwork.webp`}
              alt="A loose, slightly curled stack of printed forms and papers lying on a desk in warm light"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="tax-timing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How each method moves your tax bill
            </h2>
            <p className="mt-4 text-body text-graphite">
              Your accounting method isn&rsquo;t just a bookkeeping
              preference. It decides which year income and deductions land in,
              and the IRS sets out the rules for both methods in{' '}
              <SourceLink href="https://www.irs.gov/publications/p538">
                Publication 538, Accounting Periods and Methods
              </SourceLink>
              .
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Cash: income counts when it&rsquo;s available to you.
                </strong>{' '}
                That includes money credited to your account or made available
                without restriction, even if you haven&rsquo;t withdrawn it.
                This is called constructive receipt, and it means a check that
                arrived December 30 is December income whether or not you
                opened the envelope. Leaving it in a drawer is not a tax
                strategy; it&rsquo;s just a drawer.
              </li>
              <li>
                <strong className="text-aubergine">
                  Cash: prepaid expenses have a 12-month rule.
                </strong>{' '}
                A prepayment for a benefit that doesn&rsquo;t extend beyond
                the earlier of 12 months after it starts or the end of the
                next tax year can generally be deducted when paid. Marcus&rsquo;s
                one-year software subscription fits. A three-year prepayment
                would not, and gets deducted over the years it covers.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accrual: income counts when your right to it is fixed.
                </strong>{' '}
                Under the all events test, you report income once everything
                that fixes your right to it has happened and the amount can be
                determined with reasonable accuracy &mdash; usually when the
                job is done and billed, not when the customer pays.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accrual: expenses wait for economic performance.
                </strong>{' '}
                You deduct an expense once the liability is fixed and the goods
                or services have actually been provided. Signing next
                year&rsquo;s contract in December doesn&rsquo;t create a
                December deduction.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              The practical upshot: cash basis gives you a little more control
              over timing near year end, because paying a bill in December or
              collecting an invoice in January genuinely changes the year. On
              accrual, the calendar of the work decides, and the bank
              doesn&rsquo;t get a vote.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="who-must-use-accrual">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who has to use accrual, and who gets to choose
            </h2>
            <p className="mt-4 text-body text-graphite">
              For most owners reading this, the answer is &ldquo;you get to
              choose.&rdquo; The rules that force accrual are aimed at much
              bigger companies and at businesses that hold inventory.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Sole proprietors, S corporations and most partnerships.
                </strong>{' '}
                Free to use either method, regardless of size, as long as it
                clearly reflects income.
              </li>
              <li>
                <strong className="text-aubergine">
                  C corporations and partnerships with a C corporation partner.
                </strong>{' '}
                Can use cash only while they pass the gross receipts test. For
                tax years beginning in 2026, that means average annual gross
                receipts over the prior three tax years of no more than
                $32,000,000, per{' '}
                <SourceLink href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf">
                  Revenue Procedure 2025-32
                </SourceLink>
                . The figure is indexed for inflation and moves most years.
              </li>
              <li>
                <strong className="text-aubergine">Tax shelters.</strong>{' '}
                Can&rsquo;t use the cash method at all, whatever their size.
              </li>
              <li>
                <strong className="text-aubergine">Businesses with inventory.</strong>{' '}
                If you keep an inventory, you generally use accrual for
                purchases and sales. Small business taxpayers under the same
                gross receipts threshold can choose not to keep an inventory in
                the traditional sense, but still need a method that clearly
                reflects income.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              If your business averages more than $32 million a year,
              congratulations, and also you probably have a controller who
              would like you to stop reading accounting blogs at 11pm. For
              everyone else, the IRS is mostly out of this decision. Your
              business model is in it.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="which-fits">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Which method fits your business
            </h2>
            <p className="mt-4 text-body text-graphite">
              We&rsquo;re accountants, so you may have braced yourself for
              &ldquo;it depends.&rdquo; It does. But here is exactly what it
              depends on.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Cash basis usually fits if you get paid on the spot.
                </strong>{' '}
                Consultants, trades and personal services paid at the end of
                the job, with few unpaid bills and no inventory, gain very
                little from accrual. Their bank balance and their profit are
                close cousins anyway.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accrual usually fits if you invoice on terms.
                </strong>{' '}
                Net-30 or net-60 invoices, retainers, deposits and big
                multi-month projects make cash-basis months swing wildly. A
                great month can look like a disaster and the reverse.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accrual fits if someone outside needs your numbers.
                </strong>{' '}
                Lenders, investors and anyone buying the business will want
                statements that match income to the period it was earned.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accrual fits if you make decisions from the reports.
                </strong>{' '}
                Hiring, pricing and &ldquo;can we afford the new truck&rdquo;
                are better answered by true monthly profit than by a bank
                balance that rises and falls with when clients feel like
                paying.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              The honest part: if you&rsquo;re a solo or small service
              business, paid promptly, with no inventory and no lender asking
              for GAAP statements, cash basis is probably fine and you
              don&rsquo;t need anyone, including us, to switch you. Decent
              software and a monthly bank reconciliation will carry you a long
              way. Our post on{' '}
              <Link href="/blog/why-is-accounting-important-in-business" className={linkClass}>
                why accounting matters in a small business
              </Link>{' '}
              covers what those monthly habits buy you.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/coin-jar-on-wooden-table.webp`}
              alt="Overhead view of a glass jar half full of pennies with a few quarters and dimes beside it on a weathered white wooden table"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="switching">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Switching methods without making a mess
            </h2>
            <p className="mt-4 text-body text-graphite">
              Changing accounting methods is a bit like changing which side of
              the road you drive on. Entirely doable. Best done on a quiet
              morning with a plan, rather than halfway across an intersection.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. You generally need IRS approval.
                </strong>{' '}
                Changing your overall method is requested on{' '}
                <SourceLink href="https://www.irs.gov/forms-pubs/about-form-3115">
                  Form 3115, Application for Change in Accounting Method
                </SourceLink>
                . You can&rsquo;t simply start filing the other way one year.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Expect a one-time catch-up.
                </strong>{' '}
                Moving from cash to accrual means invoices you&rsquo;d already
                billed but not collected suddenly count. The change comes with
                an adjustment so nothing is taxed twice or slips through
                untaxed, and how it&rsquo;s handled depends on the change.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Start at the top of a tax year.
                </strong>{' '}
                A clean cutover date, with a list of every open invoice and
                unpaid bill on that date, makes the switch auditable instead of
                archaeological.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Preview it before you commit.
                </strong>{' '}
                Most accounting software can show the same transactions on
                either basis with a report setting. Looking at last year both
                ways tells you what the change would actually do.
              </li>
            </ol>
            <p className="mt-6 text-body text-graphite">
              There&rsquo;s also a middle path. The IRS allows a hybrid
              method, mixing cash and accrual, if the combination clearly
              reflects income and you stick with it. The classic version is
              accrual for inventory and cash for everything else.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="wrong-method">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What the wrong method quietly costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Back to Marcus and his December invoice. On cash basis, his
              December looked so bad he nearly turned down a January job to
              &ldquo;get his costs under control.&rdquo; His costs were fine.
              His client was just on holiday.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Flip it around. On accrual, that $4,800 is this year&rsquo;s
              income even though it&rsquo;s sitting in someone else&rsquo;s
              account on December 31. At an illustrative 22% federal bracket,
              that&rsquo;s $1,056 of income tax on money he hasn&rsquo;t
              received yet, before self-employment tax. Neither outcome is a
              disaster. Both are the kind of surprise that makes owners stop
              trusting their own numbers.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              That is the real cost of a method chosen by accident: not a
              penalty, but a year of decisions made from the wrong report.
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
              title: 'Cash Basis Accounting: What It Is and When It Works',
              blurb:
                'Counting money when it moves, who has to switch to accrual, and when it is smart to switch anyway.',
            },
            {
              href: '/blog/accrual-basis-accounting',
              eyebrow: 'Blog',
              title: 'Accrual Basis Accounting: What It Is and How It Works',
              blurb:
                'Why accrual books can show a profit while your bank account disagrees, and who has to use them.',
            },
            {
              href: '/blog/bookkeeping-vs-accounting',
              eyebrow: 'Blog',
              title: 'Bookkeeping vs. Accounting: What Is the Difference?',
              blurb:
                'Who records the transactions, who interprets them, and which one a small business actually needs.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure which method your books are on?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. No pitch. We
              just listen, look at what you have, and tell you honestly
              whether we&rsquo;re a fit. Our{' '}
              <Link href="/services" className={linkClass}>
                monthly bookkeeping services
              </Link>{' '}
              run on whichever method fits your business, start at $299 a
              month, and every price is on the{' '}
              <Link href="/pricing" className={linkClass}>
                pricing page
              </Link>
              .
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
