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

const SLUG = 'benefits-of-accrual-accounting';
const TITLE = 'Benefits of Accrual Accounting: What You Actually Get';
const DESCRIPTION =
  'The benefits of accrual accounting for a small business: true monthly profit, receivables you can see, better decisions and lender-ready books. Plus the catch.';
const PUBLISHED = '2026-10-30';
const MODIFIED = '2026-10-30';
const HERO = `/blog/${SLUG}/hero-open-weekly-planner-on-white-desk.webp`;

const TOC = [
  { id: 'true-monthly-profit', label: 'True profit for the month you actually worked' },
  { id: 'who-owes-whom', label: 'You can see who owes you, and who you owe' },
  { id: 'better-decisions', label: 'Better decisions from numbers that match reality' },
  { id: 'lenders-and-buyers', label: 'Books that lenders and buyers will accept' },
  { id: 'tax-side', label: 'The tax side: a few wins and one real catch' },
  { id: 'when-to-skip', label: 'What accrual costs, and when to skip it' },
  { id: 'cost-of-cash-numbers', label: 'What cash-basis numbers cost a growing business' },
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
        alt: 'Overhead view of an open weekly planner with empty day boxes beside a laptop, a cup of black coffee and white earbuds on a white desk',
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
    q: 'What are the benefits of accrual accounting?',
    a: "Accrual accounting matches income to the period it was earned and expenses to the period they relate to, so each month shows true profit. It also tracks what customers owe you and what you owe suppliers, supports better budgeting and pricing decisions, and produces the financial statements that lenders, investors and buyers usually expect.",
  },
  {
    q: 'What are the disadvantages of accrual accounting?',
    a: "It takes more bookkeeping, because someone has to track open invoices and unpaid bills every month. It can also create a tax bill on income you have not collected yet, which strains cash flow. Profit on the report and money in the bank can drift far apart, so you need to watch both.",
  },
  {
    q: 'Is accrual accounting better than cash accounting?',
    a: "Neither is better in general. Accrual gives a truer picture of profit when you invoice on payment terms, carry inventory or need statements for a lender. Cash is simpler and shows what is actually in the bank, which suits many small service businesses that get paid on the spot.",
  },
  {
    q: 'Do I pay tax on accrual income I have not received yet?',
    a: "Generally, yes. Under the accrual method you report income in the year the all events test is met, meaning everything that fixes your right to it has happened and the amount can be determined with reasonable accuracy. That is usually when the work is done and billed, not when the customer pays.",
  },
  {
    q: 'Can an accrual-basis business deduct unpaid invoices that turn out to be bad debts?',
    a: "Generally, yes, because a business bad debt is deductible only if the amount owed was included in your gross income, and an accrual-basis business reported the invoice as income when it was earned. Cash-method taxpayers generally cannot deduct unpaid fees they never reported. The debt must be genuinely uncollectible.",
  },
  {
    q: 'Can a small business use accrual accounting?',
    a: "Yes. Sole proprietors, S corporations and most partnerships can choose either method regardless of size, as long as it clearly reflects income. Businesses that keep inventory generally use accrual for purchases and sales, and larger C corporations may be required to use it.",
  },
  {
    q: 'How do I switch from cash to accrual accounting?',
    a: "You generally request the change by filing Form 3115, Application for Change in Accounting Method. The switch comes with a one-time adjustment so income is not counted twice or skipped, and it is cleanest to start at the beginning of a tax year with a list of every open invoice and unpaid bill.",
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
              <time dateTime={PUBLISHED}>October 30, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 30, 2026</time>
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
              alt="Overhead view of an open weekly planner with empty day boxes beside a laptop, a cup of black coffee and white earbuds on a white desk"
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
                <strong>Short answer:</strong> The main benefits of accrual
                accounting are that it shows true profit for each month,
                tracks what customers owe you and what you owe suppliers,
                supports better decisions, and produces the financial
                statements lenders and buyers expect. The tradeoffs are more
                bookkeeping and tax on income before the cash arrives.
              </p>
              <p className="mt-4 text-body text-graphite">
                Accrual counts income when you earn it and expenses when you
                incur them. Whether the benefits are worth the extra work
                depends on how you get paid.
              </p>
            </div>

            <p className="text-body text-graphite">
              Tomás &mdash; I&rsquo;ll call him Tomás &mdash; runs a
              commercial cleaning company with six crews and a whiteboard
              that has been wrong since 2019. In March his crews did $20,000
              of work. He paid out $12,000 in wages and supplies. And when he
              checked the bank at the end of the month, he was down $3,000.
            </p>
            <p className="mt-4 text-body text-graphite">
              He spent that weekend drafting a speech about tightening
              belts. Nobody asked for the speech. His books were fine. His
              clients pay on net-45 terms, so March&rsquo;s money was still
              somewhere in an accounts payable inbox, and the cash that
              arrived in March was mostly February&rsquo;s.
            </p>
            <p className="mt-4 text-body text-graphite">
              That gap between &ldquo;what I earned&rdquo; and &ldquo;what
              landed&rdquo; is the whole reason accrual accounting exists.
              Here&rsquo;s what it buys you, in plain terms &mdash; and, since
              bookkeeping is how we make our living, an honest section on when
              you shouldn&rsquo;t bother.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="true-monthly-profit">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              True profit for the month you actually worked
            </h2>
            <p className="mt-4 text-body text-graphite">
              Judging a business by its bank balance alone is like reviewing a
              restaurant by checking the tip jar at 2 p.m. Technically
              it&rsquo;s data. It just isn&rsquo;t the dinner rush.
            </p>
            <p className="mt-4 text-body text-graphite">
              Accrual matches each month&rsquo;s income to the expenses that
              helped earn it. The{' '}
              <SourceLink href="https://www.irs.gov/publications/p538">
                IRS describes the accrual method
              </SourceLink>{' '}
              in the same terms: income generally counts in the year it is
              earned, and expenses in the year they are incurred. Run
              Tomás&rsquo;s March through both methods and you get two very
              different stories.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Cash view of March:</strong>{' '}
                $9,000 collected from February work, $12,000 paid out. Result:
                down $3,000.
              </li>
              <li>
                <strong className="text-aubergine">Accrual view of March:</strong>{' '}
                $20,000 earned, $12,000 of costs. Result: $8,000 profit.
              </li>
              <li>
                <strong className="text-aubergine">The $11,000 gap</strong>{' '}
                is exactly the growth in what clients owe him: $20,000 earned
                minus the $9,000 that came in. It isn&rsquo;t missing. It
                just hasn&rsquo;t been invoiced into a bank account yet.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              That&rsquo;s the first benefit, and the biggest: every month
              shows what you made in that month, so a slow-paying client
              can&rsquo;t make a strong month look weak. Our{' '}
              <Link href="/blog/accrual-basis-accounting" className={linkClass}>
                full guide to accrual basis accounting
              </Link>{' '}
              covers the mechanics.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="who-owes-whom">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              You can see who owes you, and who you owe
            </h2>
            <p className="mt-4 text-body text-graphite">
              Accrual books remember every unpaid invoice, which is more than
              most clients do. Two lines on your balance sheet do the
              remembering.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Accounts receivable.</strong>{' '}
                What customers owe you right now. It turns &ldquo;I think the
                Hendersons still owe me something&rdquo; into a list with
                amounts and dates, sorted by how overdue each one is.
              </li>
              <li>
                <strong className="text-aubergine">Accounts payable.</strong>{' '}
                What you owe suppliers and subcontractors. It stops a bill
                from existing only in an email you meant to answer.
              </li>
              <li>
                <strong className="text-aubergine">Early warning on collections.</strong>{' '}
                A receivables total that keeps climbing while sales stay flat
                is a customer-payment problem, and you can see it months
                before the bank account does.
              </li>
              <li>
                <strong className="text-aubergine">Bills matched to the work.</strong>{' '}
                A supplier invoice for March materials lands in March, so the
                job it belongs to shows its real cost.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              If receivables and payables still sound like homework, our{' '}
              <Link href="/blog/bookkeeping-terms" className={linkClass}>
                plain-English list of bookkeeping terms
              </Link>{' '}
              takes about five minutes and no one grades it.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/planner-do-not-forget-note.webp`}
              alt="Close-up of a spiral-bound planner page with a handwritten note reading Do Not Forget, next to the edge of a keyboard on a wooden desk"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="better-decisions">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Better decisions from numbers that match reality
            </h2>
            <p className="mt-4 text-body text-graphite">
              Hiring from a bank balance is a bit like adopting a dog because
              the fridge happens to be full this week. The feeling is real. The
              information is not.
            </p>
            <p className="mt-4 text-body text-graphite">
              Because accrual puts income and costs in the same month, the
              questions you actually ask a business become answerable:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Is this month better than last month?
                </strong>{' '}
                On cash, the answer depends on who paid when. On accrual, it
                depends on how the business did.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Can I afford to hire?
                </strong>{' '}
                Tomás almost let a crew lead go in April. On accrual, March
                was an $8,000 month. Crew leads were not the problem.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Is this job actually profitable?
                </strong>{' '}
                When the materials and labor land in the same month as the
                revenue, job-level margins stop being guesses.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. What will next quarter look like?
                </strong>{' '}
                A forecast built on earned revenue and known bills is steadier
                than one built on when clients feel like paying.
              </li>
            </ol>
            <p className="mt-6 text-body text-graphite">
              One caution, and it matters: accrual tells you whether you made
              money, not whether you have cash. Tomás still needed to know he
              had $11,000 to chase. Good accrual books show both stories side
              by side. Our post on{' '}
              <Link href="/blog/why-is-accounting-important-in-business" className={linkClass}>
                why accounting matters in a small business
              </Link>{' '}
              covers the monthly habits that make this routine.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="lenders-and-buyers">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Books that lenders and buyers will accept
            </h2>
            <p className="mt-4 text-body text-graphite">
              A loan officer who asks for accrual statements is, financially
              speaking, asking to see your homework. Banks like it done in the
              same language as everyone else&rsquo;s so they can compare.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Lenders.</strong>{' '}
                Financial statements prepared under GAAP use the accrual basis.
                A bank deciding on a line of credit generally wants profit
                that reflects the period, plus a clear receivables and
                payables picture.
              </li>
              <li>
                <strong className="text-aubergine">Investors.</strong>{' '}
                Anyone putting money into the business wants to know what it
                earns, not how quickly its customers pay.
              </li>
              <li>
                <strong className="text-aubergine">Buyers of the business.</strong>{' '}
                A buyer will want trailing profit that isn&rsquo;t distorted
                by timing. Rebuilding three years of cash books into accrual
                during a sale is the most expensive way to do it.
              </li>
              <li>
                <strong className="text-aubergine">Comparisons year over year.</strong>{' '}
                Timing noise washes out, so this December is comparable to last
                December even if a big client paid late once.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              If none of those apply &mdash; no lender, no investor, no
              exit in sight &mdash; this benefit is worth nothing to you today.
              It&rsquo;s worth keeping in your back pocket, though. Books can
              be rebuilt, but the weeks it takes are never free.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="tax-side">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The tax side: a few wins and one real catch
            </h2>
            <p className="mt-4 text-body text-graphite">
              The catch is the kind you find out about in April: you owe tax
              on money you are still politely emailing someone about. First,
              the wins.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Deductions follow the work, not the payment.
                </strong>{' '}
                Under{' '}
                <SourceLink href="https://www.irs.gov/publications/p538">
                  IRS Publication 538
                </SourceLink>
                , an expense is generally deductible once the amount is fixed
                and economic performance has occurred, and for services
                provided to you, that is as they are provided. A December
                bill for December work is a December deduction, paid or not.
              </li>
              <li>
                <strong className="text-aubergine">
                  Recurring items get a little grace.
                </strong>{' '}
                A recurring expense can be treated as incurred in the year it
                is owed if economic performance follows within 8&frac12;
                months after year end, or by your return&rsquo;s due date if
                earlier, and a few other conditions are met. Worth asking
                about before year end.
              </li>
              <li>
                <strong className="text-aubergine">
                  Unpaid invoices can become bad-debt deductions.
                </strong>{' '}
                The IRS{' '}
                <SourceLink href="https://www.irs.gov/taxtopics/tc453">
                  bad debt topic
                </SourceLink>{' '}
                says a business bad debt is deductible only if the amount owed
                was included in your gross income, and that cash-method
                taxpayers generally can&rsquo;t deduct unpaid fees. Accrual
                already reported the invoice, so a debt that is truly
                uncollectible can generally be written off.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              Now the catch. Under accrual, income counts once everything that
              fixes your right to it has happened and the amount can be
              reasonably determined, usually when the job is finished and
              billed. If a client owes you $10,000 on December 31, that is
              this year&rsquo;s income. At an illustrative 22% federal
              bracket, that is $2,200 of income tax on money you have not
              collected, before self-employment tax. Plan for it, or the
              April bill will plan for you.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/desk-calendar-month-grid.webp`}
              alt="A spiral-bound desk calendar page showing a month grid of days in grey and white"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="when-to-skip">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What accrual costs, and when to skip it
            </h2>
            <p className="mt-4 text-body text-graphite">
              We sell bookkeeping, so we have an obvious stake in telling you
              accrual is wonderful. That is exactly why this section exists.
              If every customer pays before you pack the van, accrual is a
              very elaborate way to learn what you already know.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">More work, every month.</strong>{' '}
                Someone has to record invoices when they go out, bills when
                they arrive, and reconcile both to the bank. Skipped for two
                months, the books drift fast.
              </li>
              <li>
                <strong className="text-aubergine">Profit is not cash.</strong>{' '}
                A profitable month can still leave you short on payroll. You
                need a receivables aging report and a cash view, not just the
                P&amp;L.
              </li>
              <li>
                <strong className="text-aubergine">Tax before cash.</strong>{' '}
                As covered above, you can owe tax on uncollected invoices.
              </li>
              <li>
                <strong className="text-aubergine">
                  Cash may be perfectly fine for you.
                </strong>{' '}
                A solo or small service business paid on the spot, with no
                inventory and no lender asking for statements, is usually well
                served by cash. See{' '}
                <Link href="/blog/cash-basis-accounting" className={linkClass}>
                  how cash basis accounting works
                </Link>
                . Decent software and a monthly bank reconciliation will carry
                you a long way, and you don&rsquo;t need us for it.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              If you do decide to switch, you generally request it on{' '}
              <SourceLink href="https://www.irs.gov/forms-pubs/about-form-3115">
                Form 3115, Application for Change in Accounting Method
              </SourceLink>
              , ideally at the start of a tax year. Our side-by-side post on{' '}
              <Link href="/blog/difference-between-cash-and-accrual-accounting" className={linkClass}>
                the difference between cash and accrual accounting
              </Link>{' '}
              walks through the switch and who has no choice.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-cash-numbers">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What cash-basis numbers cost a growing business
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Back to Tomás. In April he nearly let go of a crew lead because
              March looked like a $3,000 hole. If that crew lead brings in even
              $4,000 a month of billings &mdash; an illustrative figure &mdash;
              the decision would have cost more than the loss it was meant to
              fix.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              His $8,000 March was real. The $11,000 gap was a list of
              invoices to chase, not a problem to cut. The books that told him
              the opposite were not wrong. They were answering a question he
              had not asked.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              That is the real price of numbers that do not match the work:
              not a penalty, but a decision made from the wrong report.
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
              href: '/blog/difference-between-cash-and-accrual-accounting',
              eyebrow: 'Blog',
              title: 'What Is the Difference Between Cash and Accrual Accounting?',
              blurb:
                'One invoice worked both ways, how each method moves your tax bill, and how to switch.',
            },
            {
              href: '/blog/accrual-basis-accounting',
              eyebrow: 'Blog',
              title: 'Accrual Basis Accounting: What It Is and How It Works',
              blurb:
                'Why accrual books can show a profit while your bank account disagrees, and who has to use them.',
            },
            {
              href: '/blog/cash-basis-accounting',
              eyebrow: 'Blog',
              title: 'Cash Basis Accounting: What It Is and When It Works',
              blurb:
                'Counting money when it moves, and when it is smart to stay on cash.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Want your books to tell you the truth?
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
