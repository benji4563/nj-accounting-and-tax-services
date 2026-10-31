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

const SLUG = 'do-you-have-to-claim-venmo-on-taxes';
const TITLE = 'Do You Have to Claim Venmo on Taxes? Gifts vs. Income';
const DESCRIPTION =
  'Do you have to claim Venmo on taxes? Payments for goods or services are taxable even with no 1099-K. Split dinners and gifts are not. IRS-sourced guide.';
const PUBLISHED = '2026-10-31';
const MODIFIED = '2026-10-31';
const HERO = `/blog/${SLUG}/hero-phone-calculator-card-reader-desk.webp`;

const TOC = [
  { id: 'reason-not-the-app', label: 'The app is not the income. The reason for the payment is.' },
  { id: 'sorting-your-feed', label: 'Taxable or not: sorting your Venmo feed' },
  { id: 'form-1099-k-threshold', label: 'The 1099-K threshold: $20,000 and 200 payments' },
  { id: 'no-form-still-income', label: 'No 1099-K does not mean no tax' },
  { id: 'selling-personal-items', label: 'Selling your own stuff through Venmo' },
  { id: 'how-to-report', label: 'How to report Venmo income, and when to do it yourself' },
  { id: 'cost-of-ignoring-it', label: 'What ignoring the side-hustle money costs' },
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
        alt: 'Overhead view of a wooden desk with a laptop, a smartphone, a calculator, a card payment terminal and a curled roll of receipt paper on a green notebook',
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
    q: 'Do you have to claim Venmo on taxes?',
    a: 'You have to report Venmo payments that are income, meaning money you received for goods or services. Personal payments from friends and family, such as a gift or someone paying you back for their share of dinner or rent, are not taxable and do not need to be reported. The IRS says you must report all income whether or not you receive a Form 1099-K.',
  },
  {
    q: 'How much money can you receive on Venmo before it is taxed?',
    a: 'There is no tax-free amount for income. The $20,000 and 200-transaction figure is only the threshold at which a payment app must send a Form 1099-K, not a threshold for owing tax. If you are self-employed, you generally owe self-employment tax once your net earnings reach $400 for the year.',
  },
  {
    q: 'Does Venmo report to the IRS?',
    a: 'Payment apps report payments for goods and services on Form 1099-K, which goes to both you and the IRS. Federally, the app has to file it when your payments exceed $20,000 and more than 200 transactions in a year, but it may send one for lower amounts. Personal payments between friends and family should not be included.',
  },
  {
    q: 'Do I have to report Venmo payments from friends and family?',
    a: 'No, not when they are genuinely personal: gifts, repayments for a shared meal or trip, or a roommate covering their share of rent. Those are not income. Keep a note of what larger personal payments were for, in case a form ever reports them by mistake.',
  },
  {
    q: 'What if I got a 1099-K for personal Venmo payments?',
    a: 'Contact the company listed as the filer on the form and ask for a corrected Form 1099-K, and keep copies of the form and your correspondence. Do not wait to file. If you cannot get a corrected form, the IRS says to report the amount at the top of Schedule 1 of Form 1040 so the mismatch is explained on your return.',
  },
  {
    q: 'Do I pay taxes on selling personal items through Venmo?',
    a: 'Only if you sold them for more than you paid. Selling a used couch for less than its original price is a loss, and losses on personal items are not deductible, but they are not taxed either. A gain on a personal item is reported on Form 8949 and Schedule D.',
  },
  {
    q: 'Where do I report Venmo business income on my tax return?',
    a: 'Freelancers, gig workers and other sole proprietors report it on Schedule C of Form 1040, along with the related expenses such as payment app fees, refunds and shipping. Net earnings of $400 or more also bring in self-employment tax on Schedule SE. Partnerships and corporations report on their own returns instead.',
  },
  {
    q: 'What happens if I do not report Venmo income?',
    a: 'If a Form 1099-K was filed, the IRS already has a copy, so unreported income can lead to a notice proposing extra tax, plus interest and possible penalties. Even without a form, the income was still taxable. Filing an amended return to add it is usually cheaper than waiting for the IRS to find it.',
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
              <time dateTime={PUBLISHED}>October 31, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 31, 2026</time>
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
              alt="Overhead view of a wooden desk with a laptop, a smartphone, a calculator, a card payment terminal and a curled roll of receipt paper on a green notebook"
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
                <strong>Short answer:</strong> Do you have to claim Venmo on
                taxes? Yes, if the money was income: payments you received for
                goods you sold or work you did are taxable and must be
                reported, whether or not Venmo sends you a Form 1099-K. No, if
                it was personal: gifts and friends paying you back for dinner,
                a trip or their share of rent are not income.
              </p>
              <p className="mt-4 text-body text-graphite">
                The app does not decide the tax. The reason someone paid you
                does. The 1099-K rule, $20,000 and more than 200 payments, only
                decides whether you get a form, not whether you owe.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Sunday afternoon and Dani &mdash; I&rsquo;ll call
              her Dani &mdash; is scrolling her Venmo history for the first time
              all year. Between the candle orders from her weekend market stall
              there&rsquo;s &ldquo;tacos&rdquo; with three taco emoji from her sister, &ldquo;rent
              lol&rdquo; from her roommate, three dog-walking clients, and a
              $40 payment from someone named Kevin with the note
              &ldquo;thanks for everything,&rdquo; which she cannot place at
              all.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t hiding anything. She just runs a small business
              out of the same app she uses to split pizza.
            </p>
            <p className="mt-4 text-body text-graphite">
              That is the whole problem with payment-app taxes, and it&rsquo;s
              more solvable than it looks. Below: what counts as income, what
              the 1099-K rule actually is now, how to handle personal sales and
              wrong forms, and where it all goes on your return.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="reason-not-the-app">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The app is not the income. The reason for the payment is.
            </h2>
            <p className="mt-4 text-body text-graphite">
              Tax law doesn&rsquo;t care whether money arrived by Venmo, Zelle,
              a check or a folded twenty in a birthday card. It cares what the
              money was for. A payment app is a pipe. The IRS is interested in
              what came through it, not the pipe.
            </p>
            <p className="mt-4 text-body text-graphite">
              The IRS splits payment-app money into two piles on its page{' '}
              <SourceLink href="https://www.irs.gov/businesses/understanding-your-form-1099-k">
                understanding your Form 1099-K
              </SourceLink>
              :
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Payments for goods or services are income.
                </strong>{' '}
                Candles, dog walks, a logo you designed, the couch you sold for
                more than you paid.
              </li>
              <li>
                <strong className="text-aubergine">
                  Personal payments from friends and family are not.
                </strong>{' '}
                Gifts, splitting a meal or a ride, a roommate&rsquo;s share of
                the rent. These shouldn&rsquo;t show up on a 1099-K at all.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The trouble is that Venmo history mixes both piles into one
              scrolling feed, sorted by date and decorated with emoji. It is,
              to be fair, a terrible ledger. Nobody designed it to be one.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="sorting-your-feed">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Taxable or not: sorting your Venmo feed
            </h2>
            <p className="mt-4 text-body text-graphite">
              If you go through a year of Venmo payments with one question
              &mdash; <em>did they pay me for something?</em> &mdash; most
              entries sort themselves in seconds. A rough guide:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Not income:</strong> your
                share of the group dinner coming back to you, a cousin&rsquo;s
                wedding gift, your roommate&rsquo;s half of the electric bill,
                your friend repaying the concert tickets you fronted.
              </li>
              <li>
                <strong className="text-aubergine">Income:</strong> customers
                paying for products, clients paying for services, tips for work
                you did, and payments routed through a business profile.
              </li>
              <li>
                <strong className="text-aubergine">It depends:</strong> selling
                your own used things. That is only taxable if you made a profit,
                which we cover below.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Where you can, the IRS suggests labelling personal payments as
              non-business in the app. Get into the habit of writing a real
              memo too. &ldquo;Rent, October&rdquo; is evidence. A single
              pizza-slice emoji is, legally speaking, a mystery.
            </p>
            <p className="mt-4 text-body text-graphite">
              And if you genuinely can&rsquo;t tell what a payment was for
              &mdash; Kevin&rsquo;s $40, say &mdash; that&rsquo;s worth finding
              out before you file, not after. Unexplained deposits are exactly
              what makes a return hard to defend.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/table-after-shared-dinner.webp`}
              alt="Overhead view of a dining table after a shared meal, with empty plates, used cutlery, small bowls of sauces on a wooden board and crumpled napkins"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="form-1099-k-threshold">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The 1099-K threshold: $20,000 and 200 payments
            </h2>
            <p className="mt-4 text-body text-graphite">
              If you heard a few years ago that Venmo would start sending tax
              forms for anything over $600, you weren&rsquo;t imagining it. That
              rule was passed, then delayed, then delayed again, like a
              dentist appointment nobody wanted to keep.
            </p>
            <p className="mt-4 text-body text-graphite">
              It is now gone. The One Big Beautiful Bill{' '}
              <SourceLink href="https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000">
                retroactively reinstated the older reporting threshold
              </SourceLink>
              , so the federal rule for payment apps is back to this:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. More than $20,000 in goods-and-services payments,
                </strong>{' '}
                <em>and</em>
              </li>
              <li>
                <strong className="text-aubergine">
                  2. More than 200 of those transactions in the year.
                </strong>{' '}
                Both tests have to be met before the app is required to send a
                Form 1099-K.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Two catches. The app may still send a form for lower amounts,
              and your state can have its own rules. And card payments taken
              through a processor are reported regardless of amount.
            </p>
            <p className="mt-4 text-body text-graphite">
              Most importantly, this number is a paperwork threshold, not a
              tax-free allowance. A dog walker who earned $14,000 through Venmo
              will probably never see a 1099-K, and owes tax on every dollar of
              profit anyway.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="no-form-still-income">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              No 1099-K does not mean no tax
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the part people get wrong most often, so it gets its own
              heading. The IRS is blunt about it: you must report all income,
              whether or not a form arrives. A missing 1099-K is like a missing
              receipt for groceries. You still bought the groceries.
            </p>
            <p className="mt-4 text-body text-graphite">
              The same logic runs through{' '}
              <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                filing taxes without a W-2
              </Link>
              : forms are how the IRS checks your homework, not how income
              comes into existence. If you&rsquo;re self-employed, the number
              to know is smaller than anything on a 1099-K. Per{' '}
              <SourceLink href="https://www.irs.gov/taxtopics/tc554">
                IRS Topic 554 on self-employment tax
              </SourceLink>
              , you generally owe it once net earnings from self-employment
              reach $400 for the year.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Self-employment tax is 15.3%:
                </strong>{' '}
                12.4% for Social Security and 2.9% for Medicare, on top of
                regular income tax.
              </li>
              <li>
                <strong className="text-aubergine">
                  It applies to profit, not gross.
                </strong>{' '}
                Supplies, app fees, refunds and shipping all come off first.
              </li>
              <li>
                <strong className="text-aubergine">
                  Cash and app money are treated the same.
                </strong>{' '}
                The same rule we walked through for{' '}
                <Link href="/blog/do-babysitters-have-to-pay-taxes" className={linkClass}>
                  babysitters paid in cash
                </Link>{' '}
                applies to a candle stall paid by QR code.
              </li>
            </ul>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="selling-personal-items">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Selling your own stuff through Venmo
            </h2>
            <p className="mt-4 text-body text-graphite">
              Clearing out the garage is not a business, and the IRS
              doesn&rsquo;t treat it like one. Selling a personal item only
              creates taxable income if you sell it for more than you paid.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Sold at a loss:</strong>{' '}
                the $900 couch you sold for $250. No tax, and no deduction
                either &mdash; losses on personal items aren&rsquo;t
                deductible. The couch&rsquo;s emotional value is also not
                deductible, sadly.
              </li>
              <li>
                <strong className="text-aubergine">Sold at a gain:</strong>{' '}
                the concert poster you bought for $40 and sold for $400. The
                $360 gain is reported on Form 8949 and Schedule D.
              </li>
              <li>
                <strong className="text-aubergine">
                  Buying things to resell:
                </strong>{' '}
                that has crossed into business, and it belongs on Schedule C
                with the costs.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              If a personal loss sale lands on a 1099-K, you still need to show
              the IRS why it isn&rsquo;t income, otherwise it just looks like
              money you forgot. The IRS guide on{' '}
              <SourceLink href="https://www.irs.gov/businesses/what-to-do-with-form-1099-k">
                what to do with Form 1099-K
              </SourceLink>{' '}
              gives two ways: enter it at the top of Schedule 1, or report the
              loss on Form 8949.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/farmers-market-stall-price-tags.webp`}
              alt="An outdoor market stall on a striped tablecloth with jars of preserves, wicker baskets, fresh herbs and handwritten cardboard price tags"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="how-to-report">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to report Venmo income, and when to do it yourself
            </h2>
            <p className="mt-4 text-body text-graphite">
              Where the money goes depends on what it was:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Business income goes on Schedule C.
                </strong>{' '}
                Freelancers, gig workers and side hustlers are sole proprietors
                to the IRS. Report gross receipts, then subtract the expenses:
                materials, app fees, refunds, shipping.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Self-employment tax goes on Schedule SE
                </strong>{' '}
                once net earnings hit $400.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. A 1099-K sent in error gets corrected, not ignored.
                </strong>{' '}
                Ask the filer named on the form for a corrected one showing
                zero, keep copies, and file on time anyway. If no correction
                comes, the IRS says to report the amount at the top of Schedule
                1 so your return explains the gap.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Personal gains go on Form 8949 and Schedule D.
                </strong>
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Now the honest part. If your side income is a few hundred dollars
              of crafts and a handful of clients, you probably don&rsquo;t need
              us. Mainstream tax software walks you through Schedule C in an
              evening, and paying a professional to handle it would eat a good
              share of the profit. Do it yourself, keep your records, and
              don&rsquo;t leave it to the last weekend &mdash; our post on{' '}
              <Link href="/blog/when-should-i-start-my-taxes" className={linkClass}>
                when to start your taxes
              </Link>{' '}
              has a calendar for that.
            </p>
            <p className="mt-4 text-body text-graphite">
              It&rsquo;s worth bringing someone in when the app money stops
              being pocket change: quarterly estimated payments, a business
              profile, inventory, or several platforms to reconcile. That is
              the point where our{' '}
              <Link href="/services" className={linkClass}>
                monthly bookkeeping and tax service
              </Link>{' '}
              starts paying for itself. We are, admittedly, the kind of people
              who enjoy reconciling Venmo exports. We have accepted this about
              ourselves.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-ignoring-it">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What ignoring the side-hustle money costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Take an illustrative side business that clears $6,000 of profit
              through Venmo in a year. Self-employment tax of 15.3% applies to
              most of that, so before income tax even enters the room the bill
              is in the high hundreds of dollars. That is real money, but it is
              a known, plannable amount.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Leaving it off the return doesn&rsquo;t make it go away. If a
              1099-K was filed, the IRS already has its copy, and a mismatch
              tends to come back later as a notice with interest and possible
              penalties attached. It&rsquo;s the same tax, just with a late fee
              and a worse mood.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              If that has already happened and a year went by unreported, it is
              fixable &mdash; see{' '}
              <Link
                href="/blog/what-happens-if-i-didnt-file-last-years-taxes"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                what to do about last year&rsquo;s taxes
              </Link>
              . Fixing it yourself, before a letter arrives, is almost always
              the cheaper path.
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
              href: '/blog/do-babysitters-have-to-pay-taxes',
              eyebrow: 'Blog',
              title: 'Do Babysitters Have to Pay Taxes?',
              blurb:
                'Cash, apps and the $400 and $3,000 rules for sitters and the families who hire them.',
            },
            {
              href: '/blog/can-you-do-taxes-without-w2',
              eyebrow: 'Blog',
              title: 'Can You Do Taxes Without a W-2?',
              blurb:
                'How to report income when the form never arrived, or was never going to.',
            },
            {
              href: '/pricing',
              eyebrow: 'Pricing',
              title: 'Flat monthly pricing, published upfront',
              blurb:
                'Bookkeeping and tax plans from $299 a month, with no surprise invoices.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Venmo turned into a business by accident?
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
