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

const SLUG = 'how-to-do-payroll-for-a-small-business';
const TITLE = 'How to Do Payroll for a Small Business, Step by Step';
const DESCRIPTION =
  'How to do payroll for a small business: the setup list, a worked paycheck with 2026 tax rates, deposits and filings, and when software is enough. IRS-sourced.';
const PUBLISHED = '2026-11-11';
const MODIFIED = '2026-11-11';
const HERO = `/blog/${SLUG}/hero-time-clock-punch-cards-brick-wall.webp`;

const TOC = [
  { id: 'before-first-paycheck', label: 'Before the first paycheck: the setup list' },
  { id: 'pay-schedule', label: 'Pick a pay schedule and keep track of hours' },
  { id: 'calculate-paycheck', label: 'How to calculate a paycheck, step by step' },
  { id: 'deposit-and-file', label: 'Deposit the taxes, then file the returns' },
  { id: 'pay-yourself', label: 'How to pay yourself as a small business owner' },
  { id: 'diy-or-help', label: 'Doing it yourself, software, or an accountant' },
  { id: 'payroll-mistakes-cost', label: 'What payroll mistakes cost' },
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
        alt: 'A retro wall-mounted time clock beside a rack of paper punch cards and a notice board on a dimly lit brick wall',
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
    q: 'What are the 5 basic steps in processing payroll?',
    a: 'First, collect each employee\'s hours or salary for the pay period. Second, calculate gross pay, including any overtime. Third, subtract withholding for federal income tax, Social Security, Medicare and any state or local tax, plus deductions such as benefits. Fourth, pay the employee their net pay. Fifth, deposit the withheld taxes and your employer share on schedule and keep the records for the quarterly and annual filings.',
  },
  {
    q: 'How can I create my own payroll?',
    a: 'Get an employer identification number, register with your state for withholding and unemployment tax, and collect a Form W-4 and Form I-9 from each employee. Then choose a pay schedule, calculate each paycheck and its withholding using IRS Publication 15 and your state\'s tables, deposit the taxes electronically, and file Form 941 every quarter and Form 940 and Forms W-2 every year. Most owners use payroll software for the calculations and filings rather than doing them by hand.',
  },
  {
    q: 'Is it better to be on payroll or 1099?',
    a: 'It is not a free choice. Whether someone is an employee on payroll or a contractor paid on a 1099 depends on how much control the business has over how, when and where the work is done. Employees have taxes withheld and the employer pays its share of Social Security, Medicare and unemployment tax; contractors pay their own self-employment tax. Calling an employee a contractor to save tax can lead to back taxes and penalties.',
  },
  {
    q: 'What payroll taxes does a small business pay?',
    a: 'For 2026, the employer pays 6.2% Social Security tax on each employee\'s wages up to $184,500 and 1.45% Medicare tax on all wages, matching what is withheld from the employee. The employer also pays federal unemployment tax of 6.0% on the first $7,000 of each employee\'s wages, usually reduced to 0.6% by the credit for state unemployment tax. State unemployment tax, and in some states other payroll taxes, come on top.',
  },
  {
    q: 'Can I do payroll myself without software?',
    a: 'Yes. Nothing in federal law requires payroll software. You can calculate withholding with the tables in IRS Publication 15-T, make deposits through the Electronic Federal Tax Payment System, and file the forms yourself. It is practical with one or two employees on a fixed schedule, but every calculation, deadline and record is then your responsibility.',
  },
  {
    q: 'Do I need an EIN to run payroll?',
    a: 'Yes. An employer identification number is required to report employment taxes and to give employees their Forms W-2. You can apply for one free from the IRS. You will usually also need a separate state employer account number for state withholding and unemployment tax.',
  },
  {
    q: 'How long do I have to keep payroll records?',
    a: 'The IRS says to keep all employment tax records for at least four years after filing the fourth-quarter return for the year. That includes pay amounts and dates, Forms W-4, copies of returns, and records of tax deposits. Your state may set its own retention rules for wage and hour records.',
  },
  {
    q: 'How often do I have to run payroll?',
    a: 'Federal law does not set a pay frequency, so common choices are weekly, every two weeks, twice a month or monthly. Many states do set a minimum frequency for some or all employees, so check your state labor department\'s rules before you choose. Whatever you pick, run it on the same schedule every time.',
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
              <time dateTime={PUBLISHED}>November 11, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 11, 2026</time>
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
              alt="A retro wall-mounted time clock beside a rack of paper punch cards and a notice board on a dimly lit brick wall"
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
                <strong>Short answer:</strong> How to do payroll for a small
                business comes down to five steps: get an EIN and register with
                your state, collect a Form W-4 and Form I-9 from each employee,
                calculate gross pay and withhold income tax plus Social Security
                and Medicare, deposit those taxes with your employer share on
                schedule, and file Forms 941, 940 and W-2.
              </p>
              <p className="mt-4 text-body text-graphite">
                The setup happens once. After that, payroll is the same short
                routine every payday, plus a return every quarter and a few
                forms every January.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Wednesday night and Rosa &mdash; I&rsquo;ll call her
              Rosa &mdash; runs a flower shop that has finally outgrown her.
              Her first employee starts Monday. She has a cardboard box of
              ribbon, a bucket of carnations that didn&rsquo;t sell, and one
              question she is slightly embarrassed to type into a search bar:
              what number do I actually write on the paycheck? She has already
              bought a little frame for it, the way shops frame their first
              dollar.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t unprepared. She has just reached the point where
              the business needs someone besides her, and nobody hands out the
              instructions at that point.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here they are: the setup list, one paycheck worked through with
              real 2026 rates, the deposits and forms that follow, how to pay
              yourself, and when you honestly don&rsquo;t need help.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="before-first-paycheck">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Before the first paycheck: the setup list
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most of payroll&rsquo;s paperwork happens before anyone gets paid.
              Do these once, in roughly this order, and the rest becomes routine:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Get an employer identification number.
                </strong>{' '}
                The IRS&rsquo;s{' '}
                <SourceLink href="https://www.irs.gov/publications/p15">
                  Employer&rsquo;s Tax Guide, Publication 15
                </SourceLink>
                , says you need an EIN if you report employment taxes or give
                tax statements to employees. It is free from the IRS.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Register with your state.
                </strong>{' '}
                Usually two accounts: one for state income tax withholding
                where your state has an income tax, and one for state
                unemployment tax. Your state also runs a new hire registry,
                and Publication 15 confirms you must report each new employee
                to it. Check your state&rsquo;s deadline for doing so.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Collect a Form W-4 from each employee.
                </strong>{' '}
                It tells you how much federal income tax to withhold. If an
                employee never gives you one, Pub 15 says to withhold as if
                they checked Single or Married filing separately with no other
                entries. Many states have their own version too.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Complete Form I-9.
                </strong>{' '}
                The employee fills in Section 1 by their first day, and you
                complete Section 2, checking their documents,{' '}
                <SourceLink href="https://www.uscis.gov/i-9-central/completing-form-i-9/completing-section-2-employer-review-and-attestation">
                  within 3 business days of the hire date
                </SourceLink>
                , per USCIS. You keep it on file; it does not go to the IRS.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Sort out workers&rsquo; compensation.
                </strong>{' '}
                Most states require it once you have employees, with rules
                that vary by state and headcount. Your insurer or state
                agency will tell you which applies.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              One check before all of it: make sure the person is actually an
              employee. Someone who works your hours, at your counter, with
              your tools is very hard to call a contractor &mdash; our guide
              to{' '}
              <Link href="/blog/who-gets-a-1099" className={linkClass}>
                who gets a 1099
              </Link>{' '}
              covers where that line sits. Five forms before a single dollar
              changes hands may feel like the bank asking for ID to deposit
              money. It only happens once.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="pay-schedule">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Pick a pay schedule and keep track of hours
            </h2>
            <p className="mt-4 text-body text-graphite">
              Federal law doesn&rsquo;t say how often to pay, so the usual
              choices are:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Weekly, 52 paydays a year.</strong>{' '}
                Common for hourly staff. The most processing, but the easiest
                for employees to budget around.
              </li>
              <li>
                <strong className="text-aubergine">Every two weeks, 26 paydays.</strong>{' '}
                The popular middle ground. Twice a year, a month has three
                paydays, which your cash flow should expect.
              </li>
              <li>
                <strong className="text-aubergine">Twice a month, 24 paydays.</strong>{' '}
                Often the 15th and the last day. Tidy for salaried staff,
                fiddlier for hourly overtime.
              </li>
              <li>
                <strong className="text-aubergine">Monthly, 12 paydays.</strong>{' '}
                The least work, and not allowed for all employees in every
                state.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              That last caveat applies more widely: many states set a minimum
              pay frequency, so check yours before you choose. Then track hours
              for every non-exempt employee. Under federal law, the{' '}
              <SourceLink href="https://www.dol.gov/agencies/whd/overtime">
                Department of Labor&rsquo;s overtime rule
              </SourceLink>{' '}
              requires at least time and one-half the regular rate for hours
              over 40 in a workweek, and some states go further.
            </p>
            <p className="mt-4 text-body text-graphite">
              A shared spreadsheet or a timekeeping app both work. A pencil
              mark on the back of a delivery invoice does not, however
              carefully Rosa underlines it.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/taxes-folder-calculator-red-pens.webp`}
              alt="Flat lay of a pink folder labelled taxes, a black calculator, two red pens and a roll of correction tape on a white desk"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="calculate-paycheck">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to calculate a paycheck, step by step
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is Rosa&rsquo;s first weekly paycheck, with illustrative
              numbers: 30 hours at $20 an hour. The rates are the 2026 figures
              from Publication 15.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Gross pay: $600.
                </strong>{' '}
                Hours times rate, plus any overtime at time and a half.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Withhold Social Security: $37.20.
                </strong>{' '}
                6.2% of wages, up to a $184,500 wage base for the year.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Withhold Medicare: $8.70.
                </strong>{' '}
                1.45% of all wages, plus an extra 0.9% once an employee&rsquo;s
                wages pass $200,000 for the year, which is not Rosa&rsquo;s
                problem this week.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Withhold federal income tax from the W-4.
                </strong>{' '}
                The amount comes from the employee&rsquo;s W-4 and the IRS
                withholding tables in Publication 15-T, or from your software.
                It varies too much by household to quote one number.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Withhold state and local tax, then other deductions.
                </strong>{' '}
                State income tax where it applies, then things like health
                premiums or retirement contributions.
              </li>
              <li>
                <strong className="text-aubergine">
                  6. What is left is net pay.
                </strong>{' '}
                That is the number on the check, or the direct deposit.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Then the part that never appears on the pay stub. Rosa owes her
              own matching $37.20 of Social Security and $8.70 of Medicare,
              plus federal unemployment tax of 0.6% after the state credit,
              or $3.60, until that employee has earned $7,000 for the year.
              That makes $649.50 before state unemployment tax and
              workers&rsquo; comp.
            </p>
            <p className="mt-4 text-body text-graphite">
              So the paycheck for the frame is smaller than $600, and the cost
              to Rosa is bigger than $600. Payroll is the only purchase where
              the receipt and the price tag disagree in both directions at once.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="deposit-and-file">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Deposit the taxes, then file the returns
            </h2>
            <p className="mt-4 text-body text-graphite">
              The withheld money and your share don&rsquo;t sit in your
              account until spring. They go to the IRS through federal tax
              deposits, made electronically, on a schedule set by how much tax
              you reported in your lookback period:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Monthly depositors deposit by the 15th of the next month.</strong>{' '}
                You are one if you reported $50,000 or less in the lookback
                period, and a brand-new employer starts here.
              </li>
              <li>
                <strong className="text-aubergine">Larger employers deposit semiweekly.</strong>{' '}
                The timing follows your paydays instead.
              </li>
              <li>
                <strong className="text-aubergine">Form 941 every quarter.</strong>{' '}
                The report that totals wages, withholding and both halves of
                Social Security and Medicare. Our explainer on{' '}
                <Link href="/blog/what-is-form-941" className={linkClass}>
                  what Form 941 is
                </Link>{' '}
                covers the due dates and the deposit rules in full.
              </li>
              <li>
                <strong className="text-aubergine">Form 940 once a year.</strong>{' '}
                Federal unemployment tax, which only you pay.
              </li>
              <li>
                <strong className="text-aubergine">Forms W-2 every January.</strong>{' '}
                One per employee, to them and to the Social Security
                Administration, by January 31.
              </li>
              <li>
                <strong className="text-aubergine">Your state&rsquo;s returns.</strong>{' '}
                Withholding and unemployment, on the state&rsquo;s own
                schedule.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Then keep the paper. The IRS says to{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping">
                keep employment tax records for at least four years
              </SourceLink>{' '}
              after filing the fourth-quarter return for the year: pay dates
              and amounts, W-4s, returns and deposit confirmations. Four years
              is longer than most of us keep a phone. The IRS keeps everything
              longer than that, so you&rsquo;ll want your copies to match.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="pay-yourself">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to pay yourself as a small business owner
            </h2>
            <p className="mt-4 text-body text-graphite">
              Whether you go on your own payroll depends on how the business
              is set up, not on how hard you work:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Sole proprietors and single-member LLCs take draws.</strong>{' '}
                Moving money from the business account to yours is not a wage,
                so nothing is withheld and you are not on payroll. You pay
                income and self-employment tax on the profit, usually through
                quarterly estimated payments.
              </li>
              <li>
                <strong className="text-aubergine">Partners usually take draws too.</strong>{' '}
                A partner is generally not an employee of the partnership, so
                the same logic applies.
              </li>
              <li>
                <strong className="text-aubergine">S corporation owners who work in the business get a salary.</strong>{' '}
                The IRS is explicit that{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-compensation-and-medical-insurance-issues">
                  S corporations must pay reasonable compensation
                </SourceLink>{' '}
                to a shareholder-employee before taking non-wage distributions.
                That salary runs through payroll like anyone else&rsquo;s.
              </li>
              <li>
                <strong className="text-aubergine">C corporation owners who work there are employees.</strong>{' '}
                Same answer: wages, withholding, W-2.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The tempting S corporation move is a tiny salary and a large
              distribution, because distributions skip Social Security and
              Medicare. It is the payroll version of ordering a side salad and
              eating everyone&rsquo;s fries, and the IRS has noticed. What
              counts as reasonable for your role is a real question, and the{' '}
              <Link href="/services" className={linkClass}>
                planning side of what we do
              </Link>{' '}
              is where it gets answered.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/vintage-cash-register-keys.webp`}
              alt="Close-up of a worn, pale green vintage cash register with rows of number keys against a rough brick wall"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="diy-or-help">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Doing it yourself, software, or an accountant
            </h2>
            <p className="mt-4 text-body text-graphite">
              Honest answer first: if you have one to five employees on steady
              hours, decent payroll software will calculate the withholding,
              make the deposits and file the 941, 940 and W-2s for you. You
              probably don&rsquo;t need an accountant for payroll itself. Rosa,
              with one part-time florist, is squarely in that group.
            </p>
            <p className="mt-4 text-body text-graphite">
              Doing it fully by hand is legal and, with one employee, possible.
              It also means every table, deadline and record is yours, every
              payday, forever. The trouble starts in the places software
              can&rsquo;t see:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">The setup was wrong from day one.</strong>{' '}
                A missing state account or a contractor who is really an
                employee. Software files whatever you told it.
              </li>
              <li>
                <strong className="text-aubergine">Payroll and the books disagree.</strong>{' '}
                The payroll report says one thing, the bank says another, and
                nobody notices until a W-2 doesn&rsquo;t match.
              </li>
              <li>
                <strong className="text-aubergine">You are paying yourself the wrong way.</strong>{' '}
                Draws from an S corporation, or a salary nobody could call
                reasonable.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              If those sound familiar, that is roughly when{' '}
              <Link
                href="/blog/do-i-need-an-accountant-for-your-small-business"
                className={linkClass}
              >
                hiring an accountant starts to pay for itself
              </Link>
              . Our Full-Service plan includes payroll for up to 10 people, and
              the{' '}
              <Link href="/pricing" className={linkClass}>
                pricing is published in full
              </Link>
              . We will admit to being the kind of people who check a pay stub
              the way other people check the weather. It has not made us more
              interesting at dinner.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="payroll-mistakes-cost">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What payroll mistakes cost
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Payroll tax is the one business tax that can follow you home.
              The income tax, Social Security and Medicare you withhold were
              never your money; you are holding them for your employees and
              the IRS. If they are not paid over, the trust fund recovery
              penalty, set out in{' '}
              <a
                href="https://www.irs.gov/publications/p15"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                Publication 15
              </a>
              , can be charged to the people responsible personally, at 100%
              of the unpaid amount.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The ordinary penalties come first. Late deposits cost 2% if 1 to
              5 days late, 5% at 6 to 15 days, 10% after that, and 15% if the
              tax is still unpaid 10 days after an IRS notice. Late returns add
              their own penalty, plus interest.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Do the arithmetic on Rosa&rsquo;s one employee. At $600 a week,
              both halves of Social Security and Medicare come to 15.3%, about
              $398 a month, before any income tax withheld. Deposit that three
              weeks late each month and the 10% penalty is roughly $40 a time,
              or about $477 a year. That is a lot of carnations, paid for
              handing over money that was never hers, a little late.
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
              href: '/blog/what-is-form-941',
              eyebrow: 'Blog',
              title: 'What Is Form 941?',
              blurb:
                'The quarterly payroll return: what goes on it, the four due dates, and the deposit rules.',
            },
            {
              href: '/blog/who-gets-a-1099',
              eyebrow: 'Blog',
              title: 'Who Gets a 1099?',
              blurb:
                'The contractor side of the line, and how to tell it apart from an employee.',
            },
            {
              href: '/pricing',
              eyebrow: 'Pricing',
              title: 'Flat monthly pricing, published upfront',
              blurb:
                'Bookkeeping, tax and payroll plans from $299 a month, with no surprise invoices.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Want someone else to work out the number on the check?
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
