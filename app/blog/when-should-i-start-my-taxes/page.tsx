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

const SLUG = 'when-should-i-start-my-taxes';
const TITLE = 'When Should I Start My Taxes? A Month-by-Month Answer';
const DESCRIPTION =
  'When should I start my taxes? Gather records in January, file once every form has arrived, and never wait for April. The key dates, with IRS sources.';
const PUBLISHED = '2026-10-13';
const MODIFIED = '2026-10-13';
const HERO = `/blog/${SLUG}/hero-metal-mailbox-with-red-flag.webp`;

const TOC = [
  { id: 'starting-vs-filing', label: 'Starting your taxes and filing them are two different dates' },
  { id: 'tax-calendar', label: 'The tax calendar, month by month' },
  { id: 'too-early', label: 'Why the first week of the season is usually too early' },
  { id: 'file-early', label: 'The case for filing as soon as the last form is in' },
  { id: 'self-employed', label: 'If you are self-employed, you started in April' },
  { id: 'before-december-31', label: 'What to do before December 31, and when you can do this yourself' },
  { id: 'cost-of-april-14', label: 'What starting on April 14 actually costs' },
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
        alt: 'A weathered metal roadside mailbox with its red flag raised, standing on a wooden post in front of a dark green hedge',
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
    q: 'When should I start my taxes?',
    a: 'Start gathering records in January and prepare the return as your forms arrive. File once every W-2 and 1099 is in hand, which for most people is between mid-February and mid-March. The federal deadline is generally April 15. If you are self-employed, the work starts earlier, because estimated tax payments are due through the year.',
  },
  {
    q: 'When can I start filing taxes?',
    a: 'You can file once the IRS opens the filing season, which it announces each winter. In 2026 the IRS opened the season on January 26. You can prepare your return before that date, but the IRS does not begin processing returns until the season opens.',
  },
  {
    q: 'Is it better to file taxes early or wait?',
    a: 'File as early as you can file accurately. Filing early gets a refund sooner, tells you sooner what you owe, and leaves less time for someone else to file a return using your Social Security number. Filing before all your forms have arrived usually means filing an amended return later, so wait for the last form.',
  },
  {
    q: 'What happens if I file before I get all my tax forms?',
    a: 'If a form arrives later and changes your income, deductions or credits, you correct the return by filing Form 1040-X, the amended return. The IRS says to allow 8 to 12 weeks for an amended return to be processed, and that it can take up to 16 weeks.',
  },
  {
    q: 'When is the deadline to file taxes?',
    a: 'The due date for a federal individual income tax return is generally April 15. If that date falls on a Saturday, Sunday or legal holiday, the due date moves to the next business day. Filing Form 4868 by the original due date gives an automatic six-month extension of time to file.',
  },
  {
    q: 'Does filing early get my refund faster?',
    a: 'Yes, because the clock starts when you file. The IRS says an e-filed return typically produces a refund about three weeks after filing, and a mailed return takes six weeks or more. By law, refunds on returns that claim the Earned Income Tax Credit are held until mid-February, however early the return was filed.',
  },
  {
    q: 'When should self-employed people start their taxes?',
    a: 'During the tax year, not after it. Self-employed people generally have to make estimated tax payments if they expect to owe $1,000 or more. The payments are due April 15, June 15, September 15 and January 15 of the following year, so the first one for a tax year falls about a year before the return itself is due.',
  },
  {
    q: 'Does a tax extension give me more time to pay?',
    a: 'No. The IRS states that an extension of time to file is not an extension of time to pay. Form 4868 gives up to six more months to file the return, but interest is charged on any tax not paid by the original due date.',
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
            <div className="section-eyebrow mb-3">For freelancers, side-giggers and owners</div>
            <h1 className="font-display text-h1 text-aubergine">{TITLE}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-graphite/75">
              <time dateTime={PUBLISHED}>October 13, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 13, 2026</time>
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
              alt="A weathered metal roadside mailbox with its red flag raised, standing on a wooden post in front of a dark green hedge"
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
                <strong>Short answer:</strong> When should I start my taxes?
                Start gathering records in January, prepare the return as your
                forms arrive, and file once every W-2 and 1099 is in hand. For
                most people that is between mid-February and mid-March. The
                federal deadline is generally April 15.
              </p>
              <p className="mt-4 text-body text-graphite">
                If you are self-employed the honest answer is earlier than
                that. Your tax year comes with four payment dates of its own,
                and the first one arrives before most people have thought about
                the return at all.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s the evening of January 27 and Wes &mdash; I&rsquo;ll
              call him Wes &mdash; has a W-2 from his day job, a 1099 from the
              weekend sound work he does for a wedding band, and a strong
              feeling that there is a refund in there somewhere. The filing
              season opened yesterday. He is done by 9:40pm and tells two
              separate people about it.
            </p>
            <p className="mt-4 text-body text-graphite">
              On February 16 an envelope arrives from an investing app he
              opened two summers ago and forgot. Inside is a form reporting
              $212 of gains. It is, technically, income. It is not on his
              return.
            </p>
            <p className="mt-4 text-body text-graphite">
              Wes wasn&rsquo;t careless. He was early, which everyone had told
              him was the responsible thing to be.
            </p>
            <p className="mt-4 text-body text-graphite">
              The trouble is that &ldquo;start your taxes&rdquo; and
              &ldquo;file your taxes&rdquo; are two different instructions with
              two different right answers. Here are both, checked against the
              IRS&rsquo;s own pages.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="starting-vs-filing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Starting your taxes and filing them are two different dates
            </h2>
            <p className="mt-4 text-body text-graphite">
              Filing is the last ten minutes. Starting is everything before it.
              Treating them as one job is like saying dinner takes three
              minutes because that is how long the microwave ran.
            </p>
            <p className="mt-4 text-body text-graphite">
              So the question splits into three, and each has its own date:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Gathering starts in January.
                </strong>{' '}
                One folder, paper or digital, where every tax form goes the day
                it arrives. This is the only step with no downside to doing
                early.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Preparing starts when the first forms land.
                </strong>{' '}
                You can enter a W-2 into software in late January and leave the
                return open. A half-finished return sitting in a draft costs
                nothing.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Filing waits for the last form.
                </strong>{' '}
                Not the first one. The IRS&rsquo;s own{' '}
                <SourceLink href="https://www.irs.gov/individuals/get-ready-to-file-your-taxes">
                  get-ready checklist
                </SourceLink>{' '}
                says to wait to file until you have your tax records, and lists
                Forms W-2, the 1099 family and records of digital asset
                transactions.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              Wes did step three on the date meant for step two. Everything
              that follows is about putting the right job on the right date.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="tax-calendar">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The tax calendar, month by month
            </h2>
            <p className="mt-4 text-body text-graphite">
              The tax year has more fixed dates than a school calendar, and
              nobody sends a newsletter home. These are the ones that matter
              for an individual return. When a date lands on a weekend or a
              legal holiday, it moves to the next business day.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Mid-January.</strong> The
                last estimated tax payment for the year just ended is due
                January 15. Only relevant if you pay estimated tax; more on
                that below.
              </li>
              <li>
                <strong className="text-aubergine">Late January.</strong> The
                IRS opens the filing season on a date it announces each winter.
                In 2026 that was{' '}
                <SourceLink href="https://www.irs.gov/newsroom/irs-opens-2026-filing-season">
                  January 26
                </SourceLink>
                . W-2s are due to employees by the end of the month.
              </li>
              <li>
                <strong className="text-aubergine">Mid-February.</strong>{' '}
                Brokerage statements arrive. For the 2025 tax year, the IRS
                gave brokers until February 17, 2026 to send Forms 1099-B, and
                the same date applies to consolidated statements. This is also
                when refunds that include the Earned Income Tax Credit can
                first be released.
              </li>
              <li>
                <strong className="text-aubergine">End of February.</strong> If
                a W-2 still hasn&rsquo;t shown up, the IRS says you can now
                call them about it. Our guide to{' '}
                <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                  doing your taxes without a W-2
                </Link>{' '}
                covers what happens next.
              </li>
              <li>
                <strong className="text-aubergine">April 15.</strong> The
                return is due, and so is any tax you owe. It is also the first
                estimated payment date for the new year, which is an unkind
                piece of scheduling.
              </li>
              <li>
                <strong className="text-aubergine">October 15.</strong> The
                extended deadline, if you filed Form 4868 back in April. An
                extension to file. Not to pay.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Read down that list and the sensible window shows itself. After
              the mid-February forms, comfortably before April. For most
              households that is four or five calm weeks that almost nobody
              uses.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/accordion-file-of-papers-on-desk.webp`}
              alt="An open pale blue accordion file with papers sorted into its brown pockets, seen from above on a light wooden desk"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="too-early">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Why the first week of the season is usually too early
            </h2>
            <p className="mt-4 text-body text-graphite">
              Filing on opening day feels like being first in the queue. In
              practice it is more like leaving for the airport before checking
              which terminal. Three things tend to go wrong.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Some forms are not due to you yet.
                </strong>{' '}
                A brokerage or investing app has until mid-February. That form
                turns up like a guest who replies to the invitation after the
                wedding, and it still counts.
              </li>
              <li>
                <strong className="text-aubergine">
                  You forget accounts you barely use.
                </strong>{' '}
                The savings account paying a few dollars of interest. The
                payment app. The investing app from two summers ago. Each can
                generate a form, and each form is also sent to the IRS.
              </li>
              <li>
                <strong className="text-aubergine">
                  Fixing it is slow.
                </strong>{' '}
                A return that left something out is corrected with{' '}
                <SourceLink href="https://www.irs.gov/taxtopics/tc308">
                  Form 1040-X, the amended return
                </SourceLink>
                . The IRS says to allow 8 to 12 weeks for it to be processed,
                and that it can take up to 16.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              There is also less reward for the rush than people think. If
              your return claims the Earned Income Tax Credit, the IRS says
              that by law the refund is held until mid-February. Filing on day
              one does not move that date by an hour.
            </p>
            <p className="mt-4 text-body text-graphite">
              A quick test before you file: open last year&rsquo;s return and
              count the forms attached to it. If you have fewer this year, find
              out why before you press the button.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="file-early">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The case for filing as soon as the last form is in
            </h2>
            <p className="mt-4 text-body text-graphite">
              None of that is an argument for April. Once the last form has
              arrived, every extra week of waiting buys you nothing. It is
              like finishing a crossword and then carrying it around in your
              bag for a month.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  The refund clock starts when you file.
                </strong>{' '}
                The IRS&rsquo;s{' '}
                <SourceLink href="https://www.irs.gov/refunds">
                  refunds page
                </SourceLink>{' '}
                puts an e-filed return at about three weeks and a mailed one at
                six weeks or more. A refund is your own money on a long
                holiday. You decide when it comes home.
              </li>
              <li>
                <strong className="text-aubergine">
                  You find out what you owe while there is time to plan.
                </strong>{' '}
                Filing in March does not mean paying in March. You can file
                early and still pay on April 15. Learning the number six weeks
                ahead is the difference between a budget and a bad Tuesday.
              </li>
              <li>
                <strong className="text-aubergine">
                  It closes the door on someone filing as you.
                </strong>{' '}
                The IRS offers an Identity Protection PIN, a six-digit number
                that prevents someone else from filing a federal return with
                your Social Security number. A return already filed in your
                name does a similar job.
              </li>
              <li>
                <strong className="text-aubergine">
                  Preparers have time for you.
                </strong>{' '}
                In early March an accountant can think about your return. In
                the second week of April they can mostly just process it. We
                say this with affection for our April selves.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              So the rule is neither &ldquo;early&rdquo; nor
              &ldquo;late.&rdquo; It is: the week after your last form arrives.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="self-employed">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              If you are self-employed, you started in April
            </h2>
            <p className="mt-4 text-body text-graphite">
              An employee&rsquo;s tax is taken out of every paycheck by
              somebody else. When you work for yourself, you are the payroll
              department, and it is staffed by the same person who does the
              sales, the deliveries and the bins.
            </p>
            <p className="mt-4 text-body text-graphite">
              The IRS says individuals, including sole proprietors, partners
              and S corporation shareholders, generally have to make{' '}
              <SourceLink href="https://www.irs.gov/faqs/estimated-tax">
                estimated tax payments
              </SourceLink>{' '}
              if they expect to owe $1,000 or more when the return is filed.
              The year is cut into four uneven pieces:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">January 1 to March 31.</strong>{' '}
                Payment due April 15.
              </li>
              <li>
                <strong className="text-aubergine">April 1 to May 31.</strong>{' '}
                Payment due June 15.
              </li>
              <li>
                <strong className="text-aubergine">June 1 to August 31.</strong>{' '}
                Payment due September 15.
              </li>
              <li>
                <strong className="text-aubergine">September 1 to December 31.</strong>{' '}
                Payment due January 15 of the following year.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Yes, the second &ldquo;quarter&rdquo; is two months long and the
              last one is four. Nobody at the IRS has ever explained this to
              our satisfaction.
            </p>
            <p className="mt-4 text-body text-graphite">
              You generally avoid an underpayment penalty if what you paid in
              covers the smaller of 90% of this year&rsquo;s tax or 100% of the
              tax shown on last year&rsquo;s return. That second figure becomes
              110% if last year&rsquo;s adjusted gross income was above
              $150,000. In practice, last year&rsquo;s return is the starting
              point for this year&rsquo;s payments, which is one more reason to
              have finished it in March.
            </p>
            <p className="mt-4 text-body text-graphite">
              Wes sits in the middle. His day job withholds; his weekend sound
              work doesn&rsquo;t. Whether he needs estimated payments depends
              on whether the withholding covers both, and that takes about ten
              minutes with last year&rsquo;s return to work out.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/red-alarm-clock-and-paper-clips.webp`}
              alt="A small red twin-bell alarm clock standing on a wooden desk beside a scatter of coloured paper clips"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="before-december-31">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What to do before December 31, and when you can do this yourself
            </h2>
            <p className="mt-4 text-body text-graphite">
              Some of next spring&rsquo;s return can only be changed this
              year. Once the calendar turns, the year&rsquo;s income and most
              of its expenses are fixed, and the return becomes a report on
              decisions already made. Three things are worth an hour before
              then.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Bring your records up to date now.
                </strong>{' '}
                Mileage, receipts, who paid you and when. A mileage log written
                in March from memory is a creative-writing exercise.
              </li>
              <li>
                <strong className="text-aubergine">
                  Know which side of the line a payment falls on.
                </strong>{' '}
                Most small businesses count income when it is received and
                expenses when they are paid, so the date matters. Our
                explainer on{' '}
                <Link href="/blog/cash-basis-accounting" className={linkClass}>
                  cash basis accounting
                </Link>{' '}
                shows how that works.
              </li>
              <li>
                <strong className="text-aubergine">
                  Check your withholding or your last estimated payment.
                </strong>{' '}
                If you have under-paid during the year, the January 15 payment
                is the last chance to narrow the gap.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Not everything closes on December 31. IRA contributions for a
              year can be made up to the April filing deadline; the IRS&rsquo;s{' '}
              <SourceLink href="https://www.irs.gov/retirement-plans/ira-year-end-reminders">
                IRA year-end reminders
              </SourceLink>{' '}
              say, for example, that 2024 contributions could be made until
              April 15, 2025. That is one decision you can
              reasonably leave until you have seen the draft return.
            </p>
            <p className="mt-4 text-body text-graphite">
              Now the part an accounting firm is not supposed to say. If you
              have one job, a W-2 and nothing unusual, you do not need us. You
              need a folder and one free evening in early March. Our breakdown
              of{' '}
              <Link href="/blog/how-much-does-it-cost-to-do-your-taxes" className={linkClass}>
                how much it costs to do your taxes
              </Link>{' '}
              lists the free filing options and who qualifies.
            </p>
            <p className="mt-4 text-body text-graphite">
              Help earns its fee when the calendar is the hard part: several
              income streams, estimated payments, or a business whose books are
              not current by January. That is what our{' '}
              <Link href="/services" className={linkClass}>
                bookkeeping and tax services
              </Link>{' '}
              are for, at{' '}
              <Link href="/pricing" className={linkClass}>
                flat, published prices
              </Link>
              . Njock is an accountant, not a CPA; if your situation needs one,
              we will say so.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-april-14">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What starting on April 14 actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Starting late rarely ends in disaster. It ends in a missed
              deadline, and the IRS prices those differently. Suppose you owe
              $3,000. File on time and pay a month late, and the failure-to-pay
              penalty is 0.5% for the month: $15. File a month late, and the
              IRS&rsquo;s{' '}
              <a
                href="https://www.irs.gov/payments/failure-to-file-penalty"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                failure-to-file penalty
              </a>{' '}
              brings the total to 5% for the month: $150. Same debt, same
              month, ten times the price. Interest is extra in both cases.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Let it run past 60 days and a minimum applies. For returns due
              after December 31, 2025, it is $525 or 100% of the tax owed,
              whichever is less. Form 4868 avoids the late-filing penalty if
              you send it by the original due date, but the IRS is plain that
              an{' '}
              <a
                href="https://www.irs.gov/taxtopics/tc304"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                extension of time to file is not an extension of time to pay
              </a>
              . If the year has already got away from you, our guide to{' '}
              <Link
                href="/blog/what-happens-if-i-didnt-file-last-years-taxes"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                what happens if you didn&rsquo;t file last year&rsquo;s taxes
              </Link>{' '}
              picks up from there.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The other end of the calendar has a price too, though a smaller
              one. Wes amended. It took one more form, a small additional
              payment on $212 of gains, and a wait measured in weeks. He now
              keeps a folder, and the first thing in it is a sticky note that
              says &ldquo;investing app&rdquo; in capital letters. He files in
              the first week of March. He still tells two people.
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
              href: '/blog/can-you-do-taxes-without-w2',
              eyebrow: 'Blog',
              title: 'Can You Do Taxes Without a W-2?',
              blurb:
                'What to do when the form you were waiting for never arrives.',
            },
            {
              href: '/blog/how-much-does-it-cost-to-do-your-taxes',
              eyebrow: 'Blog',
              title: 'How Much Does It Cost to Do Your Taxes?',
              blurb:
                'IRS averages, the free filing options and how preparers actually bill.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Bookkeeping, tax and compliance for small businesses',
              blurb:
                'Monthly books, returns and filings handled remotely, with a 4-business-hour email reply.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Want next spring to be a quiet one?
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
