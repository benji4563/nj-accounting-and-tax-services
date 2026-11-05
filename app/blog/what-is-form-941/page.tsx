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

const SLUG = 'what-is-form-941';
const TITLE = 'What Is Form 941? The Quarterly Payroll Return, Explained';
const DESCRIPTION =
  'What is Form 941? The quarterly IRS return where employers report wages, withheld income tax, and Social Security and Medicare. Due dates and 2026 rules.';
const PUBLISHED = '2026-11-05';
const MODIFIED = '2026-11-05';
const HERO = `/blog/${SLUG}/hero-taxes-envelope-rotary-phone-coins.webp`;

const TOC = [
  { id: 'what-it-reports', label: 'What Form 941 actually reports' },
  { id: 'who-files', label: 'Who has to file it, and who is exempt' },
  { id: 'due-dates', label: 'The four due dates' },
  { id: 'deposits-vs-return', label: 'Paying the tax is not the same as filing the form' },
  { id: 'other-forms', label: 'Form 941 vs 940, 944 and the W-2' },
  { id: 'who-should-file', label: 'Software, an accountant, or you' },
  { id: 'late-941-cost', label: 'What a late 941 costs' },
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
        alt: 'A wooden desk with an envelope marked taxes, a folded banknote, stacks of coins, reading glasses and an old rotary phone',
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
    q: 'Is Form 941 a payroll tax return?',
    a: 'Yes. Form 941, the Employer\'s Quarterly Federal Tax Return, is the main federal payroll tax return for most employers. Each quarter it reports the wages you paid, the federal income tax you withheld, and both the employee and employer shares of Social Security and Medicare tax.',
  },
  {
    q: 'What is the difference between Form 940 and Form 941?',
    a: 'Form 941 is filed quarterly and covers federal income tax withholding plus Social Security and Medicare taxes. Form 940 is filed once a year and covers federal unemployment tax, or FUTA, which the employer pays alone and never withholds from employees. Most employers file both.',
  },
  {
    q: 'How do I file Form 941?',
    a: 'You can file Form 941 electronically, which the IRS encourages, usually through payroll software or a tax professional, or you can mail a paper return. The mailing address depends on your state and on whether you include a payment. The tax itself is normally paid through federal tax deposits by electronic funds transfer, not with the return.',
  },
  {
    q: 'Is a 941 the same as a W-2?',
    a: 'No. A Form W-2 is an annual statement for one employee showing that person\'s wages and withholding for the year. Form 941 is a quarterly return for the whole business, totaling the wages and payroll taxes for everyone you paid that quarter. The four 941s for a year should line up with the W-2s you file for that year.',
  },
  {
    q: 'When is Form 941 due?',
    a: 'Form 941 is due April 30, July 31, October 31 and January 31, for the quarters ending March 31, June 30, September 30 and December 31. If you deposited all the tax for the quarter on time and in full, you have until the 10th day of the second month after the quarter ends. A due date on a weekend or legal holiday moves to the next business day.',
  },
  {
    q: 'Do I have to file Form 941 if I paid no wages this quarter?',
    a: 'Usually yes. Once you have filed your first Form 941, the IRS expects a return every quarter, even a zero one, until you file a final return. Seasonal employers are the main exception: they can skip quarters with no wages by checking the seasonal box on line 18 each time they do file.',
  },
  {
    q: 'Do I file Form 941 if I am the only person in my business?',
    a: 'It depends on how the business is set up. A sole proprietor or single-member LLC owner who pays no employees does not file Form 941, because owner draws are not wages; the owner pays self-employment tax on a personal return instead. If your business is a corporation, including an S corporation, that pays you a salary, you are its employee and those wages go on Form 941.',
  },
  {
    q: 'What happens if I file Form 941 late?',
    a: 'The IRS charges a failure-to-file penalty of 5% of the unpaid tax for each month or part of a month the return is late, up to 25%, plus a failure-to-pay penalty and interest. Late deposits carry their own penalty of 2% to 15% depending on how late they are. Withheld taxes that never reach the IRS can also trigger the trust fund recovery penalty against the people responsible.',
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
              <time dateTime={PUBLISHED}>November 5, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 5, 2026</time>
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
              alt="A wooden desk with an envelope marked taxes, a folded banknote, stacks of coins, reading glasses and an old rotary phone"
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
                <strong>Short answer:</strong> What is Form 941? It is the
                Employer&rsquo;s Quarterly Federal Tax Return. Every employer
                that pays wages files it four times a year to report the wages
                paid, the federal income tax withheld from paychecks, and both
                the employee and employer shares of Social Security and Medicare
                tax.
              </p>
              <p className="mt-4 text-body text-graphite">
                It is due April 30, July 31, October 31 and January 31. The
                tax itself is usually paid earlier, through federal tax
                deposits; the 941 is the report that shows those deposits add
                up.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Thursday afternoon in November and Dana &mdash;
              I&rsquo;ll call her Dana &mdash; runs a small bakery. She hired
                her first two employees in September, which went well, and set
              up payroll software, which also went well. Then an email arrives
              saying &ldquo;Your Q3 Form 941 has been filed,&rdquo; and she
              realises she has no idea what she just filed. She is reading it
              next to the jar of quarters she keeps by the register for the
              parking meter.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t behind. She has simply become an employer, and
              employers get a quarterly form whether or not anyone mentions
              it at the hiring stage.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is what the 941 is, what goes on it, when it is due, and
              what it costs when it slips.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="what-it-reports">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What Form 941 actually reports
            </h2>
            <p className="mt-4 text-body text-graphite">
              Every paycheck you write has money taken out of it before it
              reaches your employee, and money you add on top that never
              appears on the stub. Form 941 is where you tell the IRS, once a
              quarter, how much of both there was. Per the{' '}
              <SourceLink href="https://www.irs.gov/instructions/i941">
                IRS instructions for Form 941
              </SourceLink>
              , the return reports:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Wages and reported tips.</strong>{' '}
                Everything you paid employees in the quarter, plus tips they
                reported to you.
              </li>
              <li>
                <strong className="text-aubergine">Federal income tax withheld.</strong>{' '}
                The amount you held back from paychecks based on each
                employee&rsquo;s W-4.
              </li>
              <li>
                <strong className="text-aubergine">Social Security tax, both halves.</strong>{' '}
                For 2026 that is 6.2% from the employee and 6.2% from you, on
                wages up to a $184,500 wage base per employee.
              </li>
              <li>
                <strong className="text-aubergine">Medicare tax, both halves.</strong>{' '}
                1.45% each, with no wage cap, plus Additional Medicare Tax
                withheld once an employee&rsquo;s wages pass $200,000 for the
                year.
              </li>
              <li>
                <strong className="text-aubergine">Small adjustments and credits.</strong>{' '}
                Fractions of cents, sick pay, tips, group-term life insurance,
                and the small-business research payroll credit if you claim it.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The withheld part is the important bit. That money was never
              yours; you are holding it for your employees and the IRS, the
              way a coat-check attendant holds coats. Nobody thinks the
              attendant owns the coats. The IRS feels the same way, and more
              strongly.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="who-files">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who has to file it, and who is exempt
            </h2>
            <p className="mt-4 text-body text-graphite">
              If you pay wages subject to federal income tax withholding or
              to Social Security and Medicare tax, you file Form 941 every
              quarter. That is the whole rule for most small businesses. The
              exceptions are narrow:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Very small employers the IRS has told to file Form 944.</strong>{' '}
                If your annual liability is expected to be $1,000 or less, you
                can ask to file once a year on Form 944, but only after the IRS
                sends you written notice.
              </li>
              <li>
                <strong className="text-aubergine">Seasonal employers in their quiet quarters.</strong>{' '}
                No wages, no return that quarter, as long as you tick the
                seasonal box on line 18 when you do file.
              </li>
              <li>
                <strong className="text-aubergine">Household employers.</strong>{' '}
                A nanny or housekeeper paid by a family is generally reported
                on Schedule H with the family&rsquo;s own return, not a 941.
              </li>
              <li>
                <strong className="text-aubergine">Farm employers.</strong>{' '}
                Wages for agricultural labor go on Form 943 instead.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Contractors are not on it at all. People you pay on a 1099 are
              not employees, so nothing is withheld and nothing goes on the
              941 &mdash; our guide to{' '}
              <Link href="/blog/who-gets-a-1099" className={linkClass}>
                who gets a 1099
              </Link>{' '}
              covers that line in full.
            </p>
            <p className="mt-4 text-body text-graphite">
              One catch worth knowing: after your first 941, you file every
              quarter, even with nothing to report, until you file a final
              return. It works like a gym membership. Not going does not
              cancel it.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-marking-payroll-papers.webp`}
              alt="Overhead view of two hands marking printed financial pages with a red pen on a dark wooden desk, with two more pens beside them"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="due-dates">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The four due dates
            </h2>
            <p className="mt-4 text-body text-graphite">
              Each return is due on the last day of the month after the
              quarter ends:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. January to March is due April 30.
                </strong>{' '}
                Right after individual tax day, which is unkind but memorable.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. April to June is due July 31.
                </strong>{' '}
                The one most likely to be forgotten on a beach.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. July to September is due October 31.
                </strong>{' '}
                Halloween, for the scariest envelope of the season.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. October to December is due January 31.
                </strong>{' '}
                The same day your W-2s and 1099-NECs are due, so January is
                busy.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Two adjustments, both from the IRS instructions. If you made
              every deposit for the quarter on time and in full, you get until
              the 10th of the month after the normal due date instead &mdash;
              May 10 rather than April 30, for example. And a due date that
              lands on a weekend or legal holiday moves to the next business
              day.
            </p>
            <p className="mt-4 text-body text-graphite">
              Dana&rsquo;s jar of quarters is, it turns out, the right mental
              model. The IRS thinks in quarters the way a laundromat does, and
              it is just as particular about getting exact change.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="deposits-vs-return">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Paying the tax is not the same as filing the form
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the part that catches new employers. The 941 is a
              report. The money moves separately, through federal tax deposits
              made by electronic funds transfer &mdash; EFTPS, IRS Direct Pay,
              or your IRS business tax account. Think of the deposit as paying
              the restaurant bill and the 941 as the itemised receipt. Handing
              over the receipt without paying is not a strategy, although
              people have tried.
            </p>
            <p className="mt-4 text-body text-graphite">
              How often you deposit depends on your lookback period, which
              the{' '}
              <SourceLink href="https://www.irs.gov/publications/p15">
                IRS Employer&rsquo;s Tax Guide, Publication 15
              </SourceLink>{' '}
              defines as July 1 of the second year back through June 30 of
              last year:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">$50,000 or less in the lookback period: monthly depositor.</strong>{' '}
                Deposit each month&rsquo;s taxes by the 15th of the next month.
              </li>
              <li>
                <strong className="text-aubergine">More than $50,000: semiweekly depositor.</strong>{' '}
                Deposits follow your paydays, and you attach Schedule B to the
                941 to show your liability day by day.
              </li>
              <li>
                <strong className="text-aubergine">$100,000 on any single day: next-day deposit.</strong>{' '}
                And you become a semiweekly depositor from then on, for at
                least the rest of the year and the next one.
              </li>
              <li>
                <strong className="text-aubergine">Under $2,500 for the quarter: you can pay with the return.</strong>{' '}
                If this quarter or last quarter&rsquo;s total tax was under
                $2,500, you can pay it in full with a timely filed 941 instead
                of depositing.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              A brand-new employer like Dana has no lookback history, so she
              starts as a monthly depositor. Most bakeries with two employees
              stay there for a long time.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="other-forms">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Form 941 vs 940, 944 and the W-2
            </h2>
            <p className="mt-4 text-body text-graphite">
              The IRS numbers its payroll forms the way a hotel numbers
              rooms: neighbouring digits, completely different guests. Here
              is who is staying where.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Form 941, quarterly.</strong>{' '}
                Income tax withholding, Social Security and Medicare, for the
                whole business.
              </li>
              <li>
                <strong className="text-aubergine">Form 940, once a year.</strong>{' '}
                Federal unemployment tax, which only the employer pays. For
                2026 it is 6.0% on the first $7,000 of each employee&rsquo;s
                wages, with a credit of up to 5.4% for state unemployment tax
                paid. It is due January 31.
              </li>
              <li>
                <strong className="text-aubergine">Form 944, once a year, by invitation.</strong>{' '}
                The annual version of the 941 for employers with $1,000 or less
                of liability, and only after the IRS says so in writing.
              </li>
              <li>
                <strong className="text-aubergine">Form W-2, once a year, per employee.</strong>{' '}
                Each person&rsquo;s wages and withholding for the year. Add up
                the year&rsquo;s four 941s and they should match the W-2s you
                send, which is exactly the comparison the IRS makes.
              </li>
              <li>
                <strong className="text-aubergine">Form 941-X, when something was wrong.</strong>{' '}
                You don&rsquo;t refile a 941 to fix it. You file a 941-X,
                separately, to correct the one already on record.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              None of this covers what you pay yourself. If you are a sole
              proprietor, your draws are not wages and never touch a 941; if
              your company is an S corporation paying you a salary, you are an
              employee and you do. Which setup suits you is a bigger question,
              and the{' '}
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
              src={`/blog/${SLUG}/jar-of-pennies-four-coins.webp`}
              alt="Top view of a glass jar of copper pennies on a pale wooden table beside two quarters and two dimes"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="who-should-file">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Software, an accountant, or you
            </h2>
            <p className="mt-4 text-body text-graphite">
              Honest answer first: if you have one to five employees, a
              steady schedule and decent payroll software that makes the
              deposits and files the 941 for you, you probably don&rsquo;t
              need an accountant for this part. Dana is already in that
              position. The email she got was the software doing its job.
            </p>
            <p className="mt-4 text-body text-graphite">
              Where it goes wrong is the bit software can&rsquo;t see:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Someone is on the wrong side of the employee line.</strong>{' '}
                A &ldquo;contractor&rdquo; who works your hours, at your
                counter, with your tools. Software files what you tell it.
              </li>
              <li>
                <strong className="text-aubergine">The deposits and the books disagree.</strong>{' '}
                Payroll says one figure, the bank says another, and nobody
                notices until a W-2 doesn&rsquo;t match.
              </li>
              <li>
                <strong className="text-aubergine">You do payroll by hand.</strong>{' '}
                Then the deposit schedule, Schedule B and the 941 are all on
                you, every quarter.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              If that sounds familiar, it is the point at which{' '}
              <Link
                href="/blog/do-i-need-an-accountant-for-your-small-business"
                className={linkClass}
              >
                hiring an accountant starts to pay for itself
              </Link>
              . Our Full-Service plan includes payroll for up to 10 people,
              and the{' '}
              <Link href="/pricing" className={linkClass}>
                pricing is published in full
              </Link>
              . We are, admittedly, the kind of people who find Schedule B
              relaxing. We have made peace with it.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="late-941-cost">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What a late 941 costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Payroll tax is the one tax debt that can follow you home. If
              withheld income, Social Security and Medicare taxes are not paid
              over, the IRS can charge the{' '}
              <a
                href="https://www.irs.gov/instructions/i941"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                trust fund recovery penalty
              </a>{' '}
              &mdash; 100% of the unpaid amount &mdash; to the people
              responsible for paying it, personally, not just to the business.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The ordinary penalties stack before that. Deposits are charged
              2% if 1 to 5 days late, 5% at 6 to 15 days, 10% after that, and
              15% once an IRS notice goes unanswered for 10 days. A late return
              adds 5% of the unpaid tax per month, up to 25%, plus a
              failure-to-pay penalty and interest.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Do the arithmetic on an illustrative bakery: two employees paid
              $4,000 a month each. Both halves of Social Security and Medicare
              come to 15.3%, or $1,224 a month, before any income tax
              withheld. Deposit that three weeks late and the 10% penalty is
              about $122, before interest. Make it a habit for a year and it
              is roughly $1,470 &mdash; for paying money that was never yours
              a little late.
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
              href: '/blog/who-gets-a-1099',
              eyebrow: 'Blog',
              title: 'Who Gets a 1099?',
              blurb:
                'The contractor side of the line: the three-part test, the W-9, and the January 31 deadline.',
            },
            {
              href: '/blog/1099-nec-vs-1099-misc',
              eyebrow: 'Blog',
              title: '1099-NEC vs 1099-MISC',
              blurb:
                'Which year-end form goes to whom, with the 2026 thresholds and deadlines side by side.',
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
              Want someone else counting the quarters?
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
