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

const SLUG = 'when-is-nys-sales-tax-due';
const TITLE = 'When Is NYS Sales Tax Due? Quarterly, Annual and Monthly';
const DESCRIPTION =
  'When is NYS sales tax due? Quarterly returns are due June 20, Sept 20, Dec 20 and March 20. The annual and monthly dates, zero returns and late penalties.';
const PUBLISHED = '2026-10-22';
const MODIFIED = '2026-10-22';
const HERO = `/blog/${SLUG}/hero-vintage-cash-register-on-shop-counter.webp`;

const TOC = [
  { id: 'march-not-january', label: 'New York starts its sales tax year in March' },
  { id: 'quarterly-due-dates', label: 'The four quarterly due dates' },
  { id: 'annual-and-monthly', label: 'Annual and monthly filers run on different clocks' },
  { id: 'which-schedule', label: 'How to tell which schedule you are on' },
  { id: 'zero-returns', label: 'No sales still means a return' },
  { id: 'filing-and-paying', label: 'Filing, paying and the weekend rule' },
  { id: 'what-late-costs', label: 'What a missed 20th actually costs' },
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
        alt: 'A mint green vintage cash register on a wooden shop counter beside a white teacup and saucer',
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
    q: 'When is NYS sales tax due?',
    a: 'Most New York vendors file quarterly, and quarterly returns are due 20 days after each sales tax quarter ends: June 20, September 20, December 20 and March 20. If the 20th falls on a Saturday, Sunday or legal holiday, the return is due the next business day. Annual filers file once, by March 20, and part-quarterly filers file every month.',
  },
  {
    q: 'What are the New York sales tax quarters?',
    a: 'New York sales tax quarters do not follow the calendar year. They run March 1 to May 31, June 1 to August 31, September 1 to November 30, and December 1 to the last day of February.',
  },
  {
    q: 'When is the NYS annual sales tax return due?',
    a: 'The annual return covers March 1 through the last day of February and is due by March 20. You can be an annual filer only if you owe $3,000 or less in sales and use tax for the annual period, and the Tax Department tells you if you are reclassified.',
  },
  {
    q: 'Who has to file NYS sales tax monthly?',
    a: 'Vendors whose taxable receipts, purchases subject to use tax, rents and amusement charges total $300,000 or more in a quarter become part-quarterly filers. They file a monthly return by the 20th of the following month for the first two months of each quarter and a full quarterly return for the quarter as a whole.',
  },
  {
    q: 'Do I have to file a NYS sales tax return if I had no sales?',
    a: 'Yes. New York requires a sales and use tax return by the due date even if you made no taxable sales or purchases during the period. The minimum penalty for filing late is $50, even when no tax is due.',
  },
  {
    q: 'What is the penalty for filing NYS sales tax late?',
    a: 'For tax that is not paid on time, the penalty is generally 10% of the tax due for the first month plus 1% for each additional month or part of a month, up to 30% of the tax. Interest is charged on top, compounded daily. A late return is never cheaper than $50.',
  },
  {
    q: 'What happens if the NYS sales tax due date is on a weekend?',
    a: 'The return and payment are due on the next business day. In 2026 that moved the June 20 due date to June 22, the September 20 due date to September 21, and the December 20 due date to December 21.',
  },
  {
    q: 'How do I file and pay NYS sales tax?',
    a: 'Most vendors file and pay online through the Tax Department\'s Web File system in their Online Services account. Web filing is required if you prepare your own return using a computer and have broadband internet access. Vendors with more than $500,000 a year in sales and use tax liability generally must use the PrompTax electronic payment program instead.',
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
              <time dateTime={PUBLISHED}>October 22, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 22, 2026</time>
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
              alt="A mint green vintage cash register on a wooden shop counter beside a white teacup and saucer"
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
                <strong>Short answer:</strong> When is NYS sales tax due? For
                most businesses, quarterly: by June 20, September 20, December
                20 and March 20, which is 20 days after each New York sales tax
                quarter ends. Annual filers file once, by March 20. Monthly
                filers file by the 20th of every month.
              </p>
              <p className="mt-4 text-body text-graphite">
                The catch is that New York&rsquo;s quarters end in May, August,
                November and February, not March, June, September and December.
                When the 20th lands on a weekend or holiday, the due date moves
                to the next business day, and a return is due even if you sold
                nothing taxable.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s the first week of April and Dolores &mdash; I&rsquo;ll
              call her Dolores &mdash; is closing up her candle shop in Albany.
              Behind the counter sits a mint-green cash register she bought at
              an estate sale and named Gus. Next to Gus is a sticky note she
              wrote in January: &ldquo;Q1 sales tax &mdash; due April 20.&rdquo;
            </p>
            <p className="mt-4 text-body text-graphite">
              It is a perfectly reasonable note. It is also wrong in two
              places. New York&rsquo;s first quarter didn&rsquo;t end in March,
              and the return she was thinking of was due on March 20.
            </p>
            <p className="mt-4 text-body text-graphite">
              Dolores isn&rsquo;t careless. She is using the calendar everyone
              else uses, and New York&rsquo;s sales tax doesn&rsquo;t.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is the calendar New York actually runs on, checked against
              the Tax Department&rsquo;s own publications: the quarters, the
              three filing schedules, the weekend rule, and what each missed
              20th costs.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="march-not-january">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              New York starts its sales tax year in March
            </h2>
            <p className="mt-4 text-body text-graphite">
              The Tax Department&rsquo;s bulletin on{' '}
              <SourceLink href="https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/filing_requirements_for_sales_and_use_tax_returns.htm">
                filing requirements for sales and use tax returns
              </SourceLink>{' '}
              sets out the quarters. They are shifted two months later than the
              calendar quarters most people carry in their heads.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">March 1 to May 31.</strong>{' '}
                The first quarter of the New York sales tax year.
              </li>
              <li>
                <strong className="text-aubergine">June 1 to August 31.</strong>{' '}
                The summer quarter.
              </li>
              <li>
                <strong className="text-aubergine">
                  September 1 to November 30.
                </strong>{' '}
                The quarter you are probably in right now, if you are reading
                this in the fall.
              </li>
              <li>
                <strong className="text-aubergine">
                  December 1 to the last day of February.
                </strong>{' '}
                The holiday quarter, which straddles two calendar years and
                includes a leap day when there is one.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              It is a bit like a school year. Nobody thinks the year starts in
              January if they have children in school, and nobody filing New
              York sales tax should either. The difference is that school sends
              a reminder home in a backpack.
            </p>
            <p className="mt-4 text-body text-graphite">
              Your income tax still runs on the calendar year, and so does your
              federal estimated tax schedule. That is why the mistake is so
              easy: you are keeping two calendars, and only one of them is
              printed on the wall.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="quarterly-due-dates">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The four quarterly due dates
            </h2>
            <p className="mt-4 text-body text-graphite">
              Quarterly is the default schedule for most small businesses.
              Quarterly returns are due no later than 20 days after the end of
              the quarter they cover, which gives you four dates to remember.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. June 20, for March through May.
                </strong>{' '}
                In 2026 the 20th was a Saturday, so the Tax Department&rsquo;s
                calendar moved it to June 22.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. September 20, for June through August.
                </strong>{' '}
                In 2026 the 20th was a Sunday, so it moved to September 21.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. December 20, for September through November.
                </strong>{' '}
                December 20, 2026 is a Sunday, so the return for the current
                quarter is due Monday, December 21, 2026.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. March 20, for December through February.
                </strong>{' '}
                March 20, 2027 is a Saturday, so under the weekend rule that
                return is due Monday, March 22, 2027.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              You can check any year&rsquo;s dates on the{' '}
              <SourceLink href="https://www.tax.ny.gov/help/calendar/2026.htm">
                Tax Department&rsquo;s 2026 tax calendar
              </SourceLink>
              , which lists the quarterly returns on March 20, June 22,
              September 21 and December 21.
            </p>
            <p className="mt-4 text-body text-graphite">
              Notice the December one. It lands in the busiest retail week of
              the year, the week when you are least likely to sit down with a
              spreadsheet. New York did not plan that to annoy candle shops. It
              just works out that way, every single year.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/blank-notepad-coffee-laptop-on-desk.webp`}
              alt="A blank spiral notepad with a black pen on a wooden table beside a cup of black coffee and an open laptop"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="annual-and-monthly">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Annual and monthly filers run on different clocks
            </h2>
            <p className="mt-4 text-body text-graphite">
              Quarterly is the middle setting. Very small vendors file less
              often and large vendors file more often, and the thresholds are
              set by the Tax Department, not chosen by you.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Annual filers: once a year, by March 20.
                </strong>{' '}
                The annual period runs March 1 through the last day of February.
                You qualify only if you owe $3,000 or less in sales and use tax
                for that period.
              </li>
              <li>
                <strong className="text-aubergine">
                  Part-quarterly filers: every month, by the 20th.
                </strong>{' '}
                If your taxable receipts, purchases subject to use tax, rents and
                amusement charges reach $300,000 or more in a quarter, you
                switch to monthly filing starting with the first month of the
                next quarter.
              </li>
              <li>
                <strong className="text-aubergine">
                  Monthly filers still file a quarterly return.
                </strong>{' '}
                For the first two months of each quarter you file a short
                monthly return on the{' '}
                <SourceLink href="https://www.tax.ny.gov/forms/monthly_filer_forms_st809_series.htm">
                  Form ST-809 series
                </SourceLink>
                , due the 20th of the following month. The quarterly Form ST-810
                then covers the full quarter and reports sales by locality.
              </li>
              <li>
                <strong className="text-aubergine">
                  The biggest vendors prepay through PrompTax.
                </strong>{' '}
                Vendors with annual sales and use tax liability over $500,000
                generally must use PrompTax, an electronic program that replaces
                the monthly return with prepayments.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Think of it as a gym membership in reverse. The more you use New
              York, the more often New York wants to see you.
            </p>
            <p className="mt-4 text-body text-graphite">
              The $3,000 annual threshold is tax owed, not sales. At an 8%
              combined rate, $3,000 of tax is roughly $37,500 of taxable sales a
              year, so a side business or a seasonal stall can easily qualify,
              while a busy storefront usually will not.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="which-schedule">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to tell which schedule you are on
            </h2>
            <p className="mt-4 text-body text-graphite">
              You do not pick your filing frequency off a menu. New York
              assigns it when you register for your Certificate of Authority and
              changes it when your numbers change, and it tells you when it
              does.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Look in your Online Services account.
                </strong>{' '}
                Your account shows the returns you are expected to file and the
                periods they cover. If the list shows quarterly periods ending
                in May, August, November and February, you are a quarterly
                filer.
              </li>
              <li>
                <strong className="text-aubergine">
                  Quarterly can become annual.
                </strong>{' '}
                The Tax Department may reclassify you as an annual filer if
                your tax for the four most recent quarters totals $3,000 or
                less.
              </li>
              <li>
                <strong className="text-aubergine">
                  Annual can become quarterly.
                </strong>{' '}
                If your annual tax goes over $3,000, you may be moved back to
                quarterly.
              </li>
              <li>
                <strong className="text-aubergine">
                  Quarterly can become monthly.
                </strong>{' '}
                Cross $300,000 in a quarter and the switch takes effect the
                first month after that quarter.
              </li>
              <li>
                <strong className="text-aubergine">
                  Read the letter from the Tax Department.
                </strong>{' '}
                Reclassification arrives as a notice. It looks exactly like
                every other envelope you have been meaning to open.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              That last one is where most schedule mistakes come from. Not
              misunderstanding the rule, just a letter sitting under a catalog
              for three months. We are an accounting firm and we have our own
              pile. Ours is tidier, but it is still a pile.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="zero-returns">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              No sales still means a return
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the rule that catches seasonal businesses, new
              businesses and anyone who registered &ldquo;just in case.&rdquo;
              Once you hold a Certificate of Authority, a return is due every
              period, whether or not anything was sold.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Zero sales: still file by the due date.
                </strong>{' '}
                The Tax Department says you must file even if your business made
                no taxable sales or purchases during the period.
              </li>
              <li>
                <strong className="text-aubergine">
                  A late zero return still costs $50.
                </strong>{' '}
                The minimum penalty for late filing is $50, even if no tax is
                due for the period.
              </li>
              <li>
                <strong className="text-aubergine">
                  Closing down? Tell the state.
                </strong>{' '}
                If you stop making taxable sales for good, tell the Tax
                Department and file your final return. Until you do, the state
                keeps expecting one every period.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              A $50 penalty on a return that says &ldquo;0&rdquo; is the purest
              fee in American tax. You are not paying for tax. You are paying
              for silence.
            </p>
            <p className="mt-4 text-body text-graphite">
              Dolores runs a summer pop-up at a lake as well as the shop. The
              pop-up is closed from September to May, and its quarter still
              needs a return. Filing a zero takes a few minutes online. Skipping
              it costs $50 a time.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-calculator-receipts.webp`}
              alt="Two hands working a pink calculator over a spread of paper receipts, orange forms and a pencil on a desk"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="filing-and-paying">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Filing, paying and the weekend rule
            </h2>
            <p className="mt-4 text-body text-graphite">
              The return and the payment share one due date, and most of the
              mechanics are simpler than the calendar.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  File online through Web File.
                </strong>{' '}
                Web filing is required if you prepare your own return using a
                computer and have broadband internet access, which describes
                almost everyone reading this.
              </li>
              <li>
                <strong className="text-aubergine">
                  Weekends and holidays push the date forward.
                </strong>{' '}
                If the due date falls on a Saturday, Sunday or legal holiday,
                the return is due the next business day. Never earlier.
              </li>
              <li>
                <strong className="text-aubergine">
                  The return reports sales by location.
                </strong>{' '}
                New York collects state and local tax on one return, so your
                records need to show where each taxable sale happened, not
                just the total.
              </li>
              <li>
                <strong className="text-aubergine">
                  Interest compounds daily.
                </strong>{' '}
                The rate can change every quarter, so the cost of waiting grows
                a little every day rather than once a month.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Here is the honest part. If you sell from one location, file
              quarterly and your point-of-sale system already reports taxable
              sales by quarter, you do not need an accountant for this. Put the
              four dates in your phone, set the reminder a week early, and file
              it yourself. It is a twenty-minute job that we would be
              embarrassed to charge you for.
            </p>
            <p className="mt-4 text-body text-graphite">
              Help pays for itself when the picture gets crowded: several
              locations, a monthly schedule, services that may or may not be
              taxable, or online sales into other states. Our guide to{' '}
              <Link href="/blog/sales-tax-compliance-services" className={linkClass}>
                sales tax compliance services
              </Link>{' '}
              covers how New York taxes contractor labor and what a multi-state
              setup looks like, and{' '}
              <Link href="/blog/does-shopify-collect-sales-tax" className={linkClass}>
                does Shopify collect sales tax
              </Link>{' '}
              explains where online sales leave you on your own.
            </p>
            <p className="mt-4 text-body text-graphite">
              If that is you, our{' '}
              <Link href="/services" className={linkClass}>
                services page
              </Link>{' '}
              shows what we take on, and{' '}
              <Link href="/pricing" className={linkClass}>
                our pricing
              </Link>{' '}
              is flat and published. We work with New York owners remotely.
              Njock is an accountant, not a CPA or a tax attorney; if you are
              already disputing an assessment with the Tax Department, we will
              tell you that you need one of those instead.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="what-late-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What a missed 20th actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Take Dolores&rsquo;s holiday quarter. Say she collects $4,000 of
              sales tax from customers between December and February. That money
              was never hers. She was holding it for the state, the way a coat
              check holds your coat.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              If she pays a month late, the penalty is generally 10% of the tax
              for the first month: $400. Each further month or part of a month
              adds 1%, which is $40, up to a cap of 30%, which is $1,200. Interest
              runs on top, compounded daily. And a late return is never cheaper
              than $50, even if it shows no tax at all.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The worse version is the quiet one: a note that says &ldquo;April
              20&rdquo; for a return that was due March 20, repeated every
              quarter for a year. Each quarter is late by about a month, and
              each one picks up its own 10%.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              None of this needs anything clever. It needs the right four dates.
              Dolores threw away the sticky note, wrote June 20, September 20,
              December 20 and March 20 on a new one, and stuck it to Gus, who
              has been keeping better time ever since.
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
              href: '/blog/sales-tax-compliance-services',
              eyebrow: 'Blog',
              title: 'Sales Tax Compliance Services: What Small Businesses Need',
              blurb:
                'How Texas, Florida and New York each tax labor, when returns are due, and when you can handle sales tax yourself.',
            },
            {
              href: '/blog/does-shopify-collect-sales-tax',
              eyebrow: 'Blog',
              title: "Does Shopify Collect Sales Tax? What It Does and Doesn't Do",
              blurb:
                'Where Shopify stops and your own registration, filing and remittance begin.',
            },
            {
              href: '/blog/do-i-charge-sales-tax-on-services-in-texas',
              eyebrow: 'Blog',
              title: 'Do I Charge Sales Tax on Services in Texas? The Full List',
              blurb:
                'Texas taxes services by list, not by logic. The 16 categories, the 5 percent rule and the filing dates.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Rather not keep a second calendar?
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
