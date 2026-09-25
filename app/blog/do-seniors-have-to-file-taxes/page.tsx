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

const SLUG = 'do-seniors-have-to-file-taxes';
const TITLE = 'Do Seniors Have to File Taxes? A Plain-English Answer';
const DESCRIPTION =
  'Do seniors have to file taxes? There is no age when filing stops. Here are the 2025 income thresholds, the Social Security rules, and the new senior deduction.';
const PUBLISHED = '2026-08-28';
const MODIFIED = '2026-08-28';
const HERO = `/blog/${SLUG}/hero-tax-folders-reading-glasses-desk.webp`;

const TOC = [
  { id: 'no-age-limit', label: 'Filing taxes has no age limit' },
  { id: 'income-thresholds', label: 'How much can a senior make before they have to file?' },
  { id: 'what-counts-as-income', label: 'What counts as income, and what the IRS ignores' },
  { id: 'is-social-security-taxable', label: 'Is Social Security taxable?' },
  { id: 'senior-deduction', label: 'The new $6,000 senior deduction, explained' },
  { id: 'file-anyway', label: 'When to file even when you do not have to' },
  { id: 'what-skipping-costs', label: 'What skipping a return you owed actually costs' },
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
        height: 1067,
        alt: 'A wooden desk with two folders labeled taxes, a vintage rotary telephone, wire-rimmed reading glasses, loose coins and cash under a warm desk lamp',
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
    q: 'At what age do you stop filing taxes?',
    a: 'There is no age at which filing stops. Whether you must file depends on your gross income, your filing status, and the type of income you receive. A 90-year-old with enough taxable income has to file; a 66-year-old whose only income is Social Security usually does not.',
  },
  {
    q: 'Do seniors have to file taxes if Social Security is their only income?',
    a: 'Usually no. If Social Security benefits are your only source of income, they are generally not taxable and you typically are not required to file a federal return. One exception worth checking: if federal tax was withheld from your benefits, you have to file to get that money refunded.',
  },
  {
    q: 'Does a retired person have to file taxes?',
    a: 'It depends on income, not on being retired. Pensions, annuity payments, taxable IRA and 401(k) withdrawals, required minimum distributions, interest, dividends, and capital gains all count toward the filing thresholds. If your total is below the threshold for your filing status and age, you generally do not have to file.',
  },
  {
    q: 'How much can a retiree make without paying federal income tax?',
    a: 'For tax year 2025, a single filer who is 65 or older generally must file once gross income reaches $17,550, and for a married couple filing jointly with both spouses 65 or older the figure is $34,700. The new $6,000 per-person senior deduction for 2025 through 2028 means many seniors who are required to file still owe no tax. These figures change every year, so confirm the current ones before you rely on them.',
  },
  {
    q: 'Do I have to pay taxes on IRA or 401(k) withdrawals?',
    a: 'Withdrawals from a traditional IRA or 401(k) are generally taxable income and count toward whether you must file. Qualified withdrawals from a Roth IRA are generally not taxable. Required minimum distributions are taxable in the year you take them, whether or not you needed the money.',
  },
  {
    q: 'Do I owe taxes when I sell personal items or a car?',
    a: 'Selling used personal property for less than you paid is generally not taxable, and the loss is not deductible either. If you sell an item for more than its original cost, the gain is taxable. Payment apps and online marketplaces may send you a Form 1099-K, so keep records of what you originally paid so you can show the sale was not a profit.',
  },
  {
    q: 'Do seniors still have to file a state tax return?',
    a: 'Possibly, even in a year with no federal filing requirement. State filing thresholds and the way states tax retirement income and Social Security vary widely, and some state thresholds are lower than the federal one. Check your state department of revenue or ask us on a call.',
  },
  {
    q: 'Does NJ’s Accounting and Tax Services prepare tax returns for retirees?',
    a: 'Yes. We prepare federal, state and local returns for retirees, sole proprietors and small-business owners at a flat monthly price. If your only income is Social Security and you are not required to file, we will tell you that rather than sell you a return you do not need. Njock is an accountant, not a CPA; if your situation needs CPA-level work we will say so.',
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
              <time dateTime={PUBLISHED}>August 28, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>August 28, 2026</time>
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
              alt="A wooden desk with two folders labeled taxes, a vintage rotary telephone, wire-rimmed reading glasses, loose coins and cash under a warm desk lamp"
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
                <strong>Short answer:</strong> seniors have to file taxes when
                their income crosses the same IRS thresholds that apply to
                everyone else &mdash; there is no age at which filing stops. For
                tax year 2025, a single filer who is 65 or older generally must
                file once gross income reaches $17,550; for a married couple
                filing jointly with both spouses 65 or older, the figure is
                $34,700. If Social Security is your only income, you usually do
                not have to file at all.
              </p>
              <p className="mt-4 text-body text-graphite">
                Turning 65 changes the size of your standard deduction, not
                whether the rules apply to you. What decides it is how much you
                made, what kind of income it was, and your filing status.
              </p>
            </div>

            <p className="text-body text-graphite">
              Eleanor &mdash; I&rsquo;ll call her Eleanor &mdash; retired from
              teaching four years ago and spent this past year doing the things
              a spreadsheet does not warn you about. She took a little more out
              of her IRA than usual to fix the roof. She sold her late
              husband&rsquo;s woodworking tools at two weekend markets and got a
              tax form in the mail from the app that handled the payments. She
              has a small pension, Social Security, and a savings account that
              finally pays real interest again.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t behind on anything. She has just been told her
              whole adult life that at some point this stops, and nobody ever
              said which point.
            </p>
            <p className="mt-4 text-body text-graphite">
              What Eleanor needs isn&rsquo;t a lecture on tax brackets.
              It&rsquo;s a plain read on whether a year like this one is a
              filing year, which of her income actually counts, and what the
              new senior deduction everyone keeps mentioning does for her.
            </p>
          </div>
        </Section>

        {/* 1 — NO AGE LIMIT */}
        <Section background="ivory" id="no-age-limit">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Filing taxes has no age limit
            </h2>
            <p className="mt-4 text-body text-graphite">
              The idea that you &ldquo;age out&rdquo; of filing is one of the
              most widely held tax beliefs that is simply not true. There is no
              birthday on which the IRS takes you off its list, and if there
              were a card, it would arrive late and ask for a signature. The
              filing rules do not care whether you are 34 or 84. They care about
              three things.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Your gross income.</strong>{' '}
                The total of everything you received during the year that is not
                specifically tax-exempt &mdash; wages, self-employment, pension
                and annuity payments, taxable retirement-account withdrawals,
                interest, dividends, capital gains, rent.
              </li>
              <li>
                <strong className="text-aubergine">Your filing status.</strong>{' '}
                Single, married filing jointly, married filing separately, head
                of household, or qualifying surviving spouse. Each has its own
                threshold.
              </li>
              <li>
                <strong className="text-aubergine">
                  Whether you are 65 or older.
                </strong>{' '}
                This does one thing: it raises your standard deduction, which
                raises the income level at which you are required to file. It
                does not switch the requirement off.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              So &ldquo;do seniors have to file taxes&rdquo; has the same answer
              as &ldquo;does anyone have to file taxes&rdquo;: yes, once your
              income is high enough for your situation. The rest of this post is
              about where that line actually sits for someone over 65.
            </p>
          </div>
        </Section>

        {/* 2 — INCOME THRESHOLDS */}
        <Section background="cream" id="income-thresholds">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How much can a senior make before they have to file?
            </h2>
            <p className="mt-4 text-body text-graphite">
              These are not round numbers you can keep in your head. They are
              the kind of figures that exist specifically so you have to look
              them up, and they move a little every year for inflation. Here is
              where{' '}
              <SourceLink href="https://www.irs.gov/individuals/check-if-you-need-to-file-a-tax-return">
                the IRS filing-requirement thresholds
              </SourceLink>{' '}
              sit for tax year 2025 if you are 65 or older.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Single, 65 or older:</strong>{' '}
                file if gross income was $17,550 or more.
              </li>
              <li>
                <strong className="text-aubergine">
                  Head of household, 65 or older:
                </strong>{' '}
                $25,625 or more.
              </li>
              <li>
                <strong className="text-aubergine">
                  Married filing jointly, one spouse 65 or older:
                </strong>{' '}
                $33,100 or more.
              </li>
              <li>
                <strong className="text-aubergine">
                  Married filing jointly, both spouses 65 or older:
                </strong>{' '}
                $34,700 or more.
              </li>
              <li>
                <strong className="text-aubergine">
                  Qualifying surviving spouse, 65 or older:
                </strong>{' '}
                $33,100 or more.
              </li>
              <li>
                <strong className="text-aubergine">
                  Married filing separately, any age:
                </strong>{' '}
                $5 or more &mdash; which is the IRS&rsquo;s way of saying
                &ldquo;basically always.&rdquo;
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Two things override all of the above. If you had more than $400 in
              net earnings from self-employment &mdash; a consulting gig, a
              craft booth, driving &mdash; you have to file regardless of the
              totals here, because of self-employment tax. And if you took money
              from a health savings account or owe certain other special taxes,
              a return is required no matter how low your income was. When in
              doubt, the exact figure for your year is worth confirming with us
              on a call, because it has changed in each of the last few years.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/inline-glasses-tax-checklist.webp`}
              alt="An overhead view of a printed tax form and an accounting checklist on a grey desk, with wire-rimmed reading glasses, a phone showing a calculator app, a laptop and scattered paper clips"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — WHAT COUNTS AS INCOME */}
        <Section background="ivory" id="what-counts-as-income">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What counts as income, and what the IRS ignores
            </h2>
            <p className="mt-4 text-body text-graphite">
              The threshold test runs on <em>gross income</em>, and in
              retirement the hardest part is knowing which of your money the IRS
              is actually counting. Some of it does not go into the total at
              all &mdash; which is why a retiree can receive $40,000 in a year
              and still sit under the filing line.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Counts:</strong> pension and
                annuity payments, taxable withdrawals from a traditional IRA or
                401(k), required minimum distributions, interest, dividends
                (including that $14 one from a stock you forgot you owned),
                capital gains, rental income, and any wages or 1099 work.
              </li>
              <li>
                <strong className="text-aubergine">
                  Usually does not count toward the basic test:
                </strong>{' '}
                the non-taxable portion of your Social Security, qualified Roth
                IRA withdrawals, the return of money you already paid tax on,
                gifts and inheritances you received, life-insurance payouts, and
                most Department of Veterans Affairs benefits.
              </li>
              <li>
                <strong className="text-aubergine">The grey area:</strong>{' '}
                selling personal belongings. The couch you sold online for $200
                is not income &mdash; you paid more than that for it years ago,
                and a loss on personal property is not deductible. But if a sale
                is above what you originally paid, the gain is taxable, and the
                marketplace may send a Form 1099-K either way.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              If you already lost the paperwork for a year you now need to file,
              that is a fixable problem &mdash; our post on{' '}
              <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                filing without a W-2 or a missing 1099
              </Link>{' '}
              walks through how to rebuild the numbers from IRS records.
            </p>
          </div>
        </Section>

        {/* 4 — IS SOCIAL SECURITY TAXABLE */}
        <Section background="cream" id="is-social-security-taxable">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Is Social Security taxable?
            </h2>
            <p className="mt-4 text-body text-graphite">
              For a lot of retirees, none of it is. For others, up to 50% or up
              to 85% of benefits become taxable once other income is added in.
              The word the IRS uses for the calculation is &ldquo;provisional
              income,&rdquo; a term that makes adding two numbers together sound
              like a background check.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is the actual test. Take half of your annual Social Security
              benefits, add all of your other income including any tax-exempt
              interest, and compare the result to the base amount for your
              filing status:{' '}
              <SourceLink href="https://www.irs.gov/faqs/social-security-income">
                $25,000 for single filers and $32,000 for married couples
                filing jointly
              </SourceLink>
              . Below the base amount, your benefits are generally not taxed,
              and if benefits are your only real income, that usually means no
              federal return is required.
            </p>
            <p className="mt-4 text-body text-graphite">
              One trap for couples: if you are married, lived together at any
              point in the year, and file separately, the base amount is $0 and
              benefits are taxable from the first dollar of other income. That
              one catches people who filed separately for an unrelated reason
              and never re-checked.
            </p>
          </div>
        </Section>

        {/* 5 — SENIOR DEDUCTION */}
        <Section background="ivory" id="senior-deduction">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The new $6,000 senior deduction, explained
            </h2>
            <p className="mt-4 text-body text-graphite">
              For tax years 2025 through 2028, each taxpayer who is 65 or older
              can claim{' '}
              <SourceLink href="https://www.irs.gov/newsroom/2026-filing-season-updates-and-resources-for-seniors">
                an additional $6,000 deduction
              </SourceLink>{' '}
              &mdash; $12,000 for a married couple where both spouses qualify
              &mdash; on top of the standard deduction, which is already larger
              for people over 65. Congress gave this one a sell-by date, like a
              carton of milk. In 2029 it either gets renewed or quietly
              disappears, and nobody is going to send you a reminder.
            </p>
            <p className="mt-4 text-body text-graphite">
              A few things to keep straight about it. It phases out for higher
              incomes &mdash; it starts shrinking above $75,000 of modified
              adjusted gross income for a single filer, $150,000 for a couple,
              and is gone entirely well above those. It does not change whether
              you are <em>required</em> to file; the gross-income thresholds
              above still govern that. What it changes is whether you owe
              anything once you do file.
            </p>
            <p className="mt-4 text-body text-graphite">
              The practical effect: a single filer who is 65 or older can be
              over the filing line and still land at $0 tax once the regular
              standard deduction and this extra $6,000 are applied. You may
              still have to file the return. You just may not have to write a
              check with it.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/inline-1040-calculator-magnifier.webp`}
              alt="An overhead view of a printed 1040 tax return partly covered by a desktop calculator and a magnifying glass on a wooden table, with a columnar spreadsheet page alongside"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — FILE ANYWAY */}
        <Section background="cream" id="file-anyway">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When to file even when you do not have to
            </h2>
            <p className="mt-4 text-body text-graphite">
              Being under the threshold means the IRS will not come looking. It
              does not always mean filing is the wrong move. An unclaimed refund
              is just an interest-free loan to the federal government that it did
              not ask for and will not thank you for.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Tax was withheld and you want it back.
                </strong>{' '}
                If a pension, an annuity, or your Social Security had federal tax
                withheld, filing is the only way to get a refund of it.
              </li>
              <li>
                <strong className="text-aubergine">
                  You qualify for a refundable credit.
                </strong>{' '}
                Some credits pay out even when you owe no tax, and you only get
                them by filing a return that claims them.
              </li>
              <li>
                <strong className="text-aubergine">
                  A 1099 or 1099-K showed up.
                </strong>{' '}
                If a form was issued to you, the IRS got a copy. Filing a return
                that explains a small sale or a bit of side income is easier
                than answering a notice about it a year later.
              </li>
              <li>
                <strong className="text-aubergine">
                  Your state has a lower bar.
                </strong>{' '}
                Some state filing thresholds sit below the federal one, so a
                no-federal-filing year can still be a state-filing year.
              </li>
              <li>
                <strong className="text-aubergine">
                  You want the clock to start.
                </strong>{' '}
                Filing starts the three-year period the IRS has to question a
                return, and the three-year window you have to claim a refund. A
                return you never file leaves both open.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              And the honest other side: if Social Security is genuinely your
              only income, you almost certainly do not need to file, and you do
              not need to pay anyone &mdash; us included &mdash; to tell you
              that every spring. Free software or the IRS&rsquo;s own free filing
              options handle a simple return with a pension and some interest.
              Hiring someone starts to earn its keep when there is a small
              business, rental property, several 1099s, a house sale, or a year
              you never filed. If that is you, our{' '}
              <Link href="/pricing" className={linkClass}>
                pricing is on one page
              </Link>{' '}
              and{' '}
              <Link href="/how-we-work" className={linkClass}>
                the first 30 days are written out
              </Link>
              , and{' '}
              <Link href="/blog/tax-resolution-services" className={linkClass}>
                catching up on unfiled years
              </Link>{' '}
              has a clear path too.
            </p>
          </div>
        </Section>

        {/* 7 — EMPHASIS: WHAT SKIPPING COSTS */}
        <Section background="aubergine" id="what-skipping-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What skipping a return you owed actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Deciding you are under the threshold and skipping the return is
              fine when you are right. It gets expensive when the income was
              there and the return was owed.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The{' '}
              <a
                href="https://www.irs.gov/payments/failure-to-file-penalty"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory/60 pb-0.5 font-medium text-ivory hover:border-persimmon hover:text-persimmon"
              >
                failure-to-file penalty
              </a>{' '}
              runs 5% of the unpaid tax for each month a return is late, capped
              at 25%. The failure-to-pay penalty runs another 0.5% per month.
              Interest compounds daily on top of both, and none of it pauses
              while you decide whether the return was needed.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The quieter cost runs the other way. A refund you were owed but
              never claimed expires after three years, and the money stays with
              the Treasury. There is no penalty for that one. There is just a
              check you were entitled to and never cashed.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Either way, the safe move in a year you are unsure about is to run
              the numbers once, properly, and find out which side of the line
              you are on &mdash; not to guess and hope.
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
              title: 'Can you do taxes without a W-2? Yes — here’s exactly how',
              blurb:
                'Retired and missing a form for a past year? The IRS has a way to pull your income history and a form to file with it.',
            },
            {
              href: '/blog/tax-resolution-services',
              eyebrow: 'Blog',
              title: 'Tax Resolution Services: What They Actually Cover',
              blurb:
                'If you skipped a few years of returns, here is what getting caught up involves and what it costs.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Tax preparation and year-round bookkeeping',
              blurb:
                'Federal, state and local returns for retirees, sole proprietors and small businesses at a flat monthly price.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure if this year is a filing year?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute call with Njock. Tell us what kind of income
              you had &mdash; a pension, a few 1099s, a house sale, nothing but
              Social Security &mdash; and we&rsquo;ll tell you plainly whether
              you need to file, and whether you need us.
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
