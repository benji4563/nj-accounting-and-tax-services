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

const SLUG = 'is-tax-forgiveness-real';
const TITLE = 'Is Tax Forgiveness Real? What the IRS Actually Offers';
const DESCRIPTION =
  'Is tax forgiveness real? Partly. The IRS can settle, pause, or trim a tax debt through specific programs, and none is automatic. Who qualifies, with sources.';
const PUBLISHED = '2026-10-11';
const MODIFIED = '2026-10-11';
const HERO = `/blog/${SLUG}/hero-metal-mailbox-against-hedge.webp`;

const TOC = [
  { id: 'what-it-means', label: 'What “tax forgiveness” actually means at the IRS' },
  { id: 'offer-in-compromise', label: 'The Offer in Compromise: the closest thing to forgiveness' },
  { id: 'penalty-relief', label: 'Penalty relief: the forgiveness most people actually get' },
  { id: 'paused-not-forgiven', label: 'Currently Not Collectible and the ten-year clock' },
  { id: 'who-qualifies', label: 'Who actually qualifies, and who doesn’t' },
  { id: 'real-or-pitch', label: 'How to tell a real program from a sales pitch' },
  { id: 'cost-of-waiting', label: 'What waiting for forgiveness costs you' },
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
        height: 1066,
        alt: 'A weathered metal mailbox with a raised red flag standing on a wooden post in front of a dark green hedge',
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
    q: 'Is tax forgiveness real?',
    a: 'Partly. The IRS has no program called tax forgiveness, but it runs several real programs that can reduce, pause, or trim a tax debt: the Offer in Compromise, penalty relief, Currently Not Collectible status, and innocent spouse relief. Each has its own eligibility rules and none is automatic. Full forgiveness with no conditions, as advertised in some ads and cold calls, is not a real program.',
  },
  {
    q: 'Does the IRS have a one-time forgiveness program?',
    a: 'No. There is no one-time forgiveness program and no enrollment deadline. The phrase usually refers to First Time Abate, an IRS penalty waiver for taxpayers who filed and paid on time for the three prior years. It removes certain penalties and the interest charged on those penalties. It does not remove the tax itself.',
  },
  {
    q: 'Who qualifies for IRS tax forgiveness?',
    a: 'It depends on the program. For an Offer in Compromise you must have filed all required returns, made required estimated payments, and not be in an open bankruptcy, and the IRS generally will not accept an offer if you could pay in full through a payment plan or your asset equity. Penalty relief under First Time Abate requires three prior years of on-time filing and payment. Currently Not Collectible status requires showing that paying would cause financial hardship.',
  },
  {
    q: 'How much will the IRS settle for?',
    a: 'There is no standard percentage. The IRS looks at your income, expenses, and asset equity and accepts an offer only when it reflects what the agency could reasonably expect to collect. In fiscal year 2025 taxpayers proposed 38,797 offers in compromise and the IRS accepted 5,464. The free IRS Offer in Compromise Pre-Qualifier tool gives a preliminary answer for your own numbers.',
  },
  {
    q: 'Does the IRS forgive tax debt after 10 years?',
    a: 'The IRS generally has 10 years from the date a tax is assessed to collect it, a deadline called the Collection Statute Expiration Date. After that date the IRS can no longer collect that assessment. The clock is paused by several events, including a pending Offer in Compromise, a payment plan request, bankruptcy, and living outside the United States for six months or more, so the real date is often later than ten years.',
  },
  {
    q: 'Does it cost money to apply for tax forgiveness?',
    a: 'An Offer in Compromise has a $205 application fee plus an initial payment, both waived for individuals who meet the low-income certification. Requesting First Time Abate penalty relief is free and can be done by calling the number on your IRS notice. A long-term payment plan set up online with direct debit has a $29 setup fee. Anything a tax relief company charges is on top of those amounts.',
  },
  {
    q: 'Do I need a tax relief company to get tax forgiveness?',
    a: 'No. Every IRS relief program can be applied for directly by the taxpayer, and the IRS publishes the forms and a free pre-qualifier tool. The IRS warns about Offer in Compromise mills that overpromise results and charge high fees to people who do not qualify. A credentialed representative, meaning an enrolled agent, CPA, or attorney, can be worth paying for in a complicated case.',
  },
  {
    q: 'Does NJ’s Accounting and Tax Services handle tax forgiveness cases?',
    a: 'Not the negotiation. Njock is an accountant, not a CPA, enrolled agent, or tax attorney, so we do not represent clients before the IRS in an Offer in Compromise. We do the step that has to come first: catch-up bookkeeping and preparing unfiled returns so your numbers are accurate. If your case needs formal representation, we will say so and refer you to someone who holds the credential.',
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
              <time dateTime={PUBLISHED}>October 11, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 11, 2026</time>
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
              alt="A weathered metal mailbox with a raised red flag standing on a wooden post in front of a dark green hedge"
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
                <strong>Short answer:</strong> partly. If you are asking
                &ldquo;is tax forgiveness real,&rdquo; the IRS has no program
                by that name, but it runs several real ones that can settle,
                pause, or trim a tax debt: the Offer in Compromise, penalty
                relief, and Currently Not Collectible status.
              </p>
              <p className="mt-4 text-body text-graphite">
                None of them is automatic, and none wipes a debt just because
                you asked. Each has its own test, and the most generous one is
                also the hardest to pass. The version in the ads, where
                everything disappears by Friday, is not a program.
              </p>
            </div>

            <p className="text-body text-graphite">
              Renata &mdash; I&rsquo;ll call her Renata &mdash; runs a mobile
              dog-grooming business out of two vans. It&rsquo;s 7:40 on a
              Thursday morning, she&rsquo;s parked outside a house with a very
              wet labradoodle in the back, and the radio has just told her,
              for the third time this week, that the IRS is forgiving tax debt
              and she may qualify. There&rsquo;s an envelope from the IRS on
              the passenger seat that she picked out of the mailbox on the way
              out. It says she owes about $31,000.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t gullible for wondering. She&rsquo;s holding a
              real bill and hearing about a real-sounding way out of it, and
              the two arrived on the same morning.
            </p>
            <p className="mt-4 text-body text-graphite">
              So here is what the word covers, program by program, with the
              IRS&rsquo;s own pages linked and Renata&rsquo;s numbers run
              through each one. Some of it is better news than the ad. Most of
              it is slower.
            </p>
          </div>
        </Section>

        {/* 1 — WHAT IT MEANS */}
        <Section background="ivory" id="what-it-means">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What &ldquo;tax forgiveness&rdquo; actually means at the IRS
            </h2>
            <p className="mt-4 text-body text-graphite">
              &ldquo;Forgiveness&rdquo; is a word from greeting cards. The IRS
              has forms, and not one of them is called that. Asking the agency
              for tax forgiveness is a bit like walking into a hardware store
              and asking for &ldquo;the fixing tool.&rdquo; They have several.
              Which one you need depends entirely on what&rsquo;s broken.
            </p>
            <p className="mt-4 text-body text-graphite">
              The IRS lists its actual options on its{' '}
              <SourceLink href="https://www.irs.gov/payments/get-help-with-tax-debt">
                tax debt help page
              </SourceLink>
              . Sorted by what they really do to the balance:
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Reduces the debt: the Offer in Compromise.
                </strong>{' '}
                You settle for less than you owe. This is the one the ads mean,
                and the only one that truly shrinks the tax.
              </li>
              <li>
                <strong className="text-aubergine">
                  Removes the extras: penalty relief.
                </strong>{' '}
                Certain penalties come off, along with the interest charged on
                them. The tax stays.
              </li>
              <li>
                <strong className="text-aubergine">
                  Pauses collection: Currently Not Collectible.
                </strong>{' '}
                The IRS stops chasing you for now. You still owe every dollar.
              </li>
              <li>
                <strong className="text-aubergine">
                  Spreads it out: a payment plan.
                </strong>{' '}
                Nothing is forgiven, but the pressure comes off and one penalty
                rate drops.
              </li>
              <li>
                <strong className="text-aubergine">
                  Moves it off you: innocent spouse relief.
                </strong>{' '}
                For tax a spouse understated on a joint return without your
                knowledge. Narrow, and real.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              One requirement runs through nearly all of them: your returns
              have to be filed first. If a year is missing, start with{' '}
              <Link
                href="/blog/what-happens-if-i-didnt-file-last-years-taxes"
                className={linkClass}
              >
                what happens when last year&rsquo;s return didn&rsquo;t get
                filed
              </Link>
              , because nothing below opens until that&rsquo;s fixed.
            </p>
          </div>
        </Section>

        {/* 2 — OFFER IN COMPROMISE */}
        <Section background="cream" id="offer-in-compromise">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The Offer in Compromise: the closest thing to forgiveness
            </h2>
            <p className="mt-4 text-body text-graphite">
              An{' '}
              <SourceLink href="https://www.irs.gov/payments/offer-in-compromise">
                Offer in Compromise
              </SourceLink>{' '}
              lets you settle a tax debt for less than the full amount. The IRS
              weighs your income, your expenses, and the equity in what you
              own. Its own page says it generally won&rsquo;t accept an offer
              if you could pay in full through a payment plan or by using that
              equity.
            </p>
            <p className="mt-4 text-body text-graphite">
              That is the part the radio leaves out. The IRS isn&rsquo;t moved
              by how sorry you are. Picture less a judge showing mercy and more
              a used-car buyer walking slowly around the vehicle with a
              flashlight. It is working out what it could collect, and it will
              accept that number and not a dollar under it.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You must be current before you apply.
                </strong>{' '}
                All required returns filed, required estimated payments made,
                and no open bankruptcy. Employers also need their recent
                federal tax deposits made.
              </li>
              <li>
                <strong className="text-aubergine">
                  It costs $205 to apply, plus money down.
                </strong>{' '}
                A lump-sum offer needs 20% of the offer amount sent with the
                application. Both the fee and the payment are waived for
                individuals who meet the low-income certification.
              </li>
              <li>
                <strong className="text-aubergine">
                  Most offers are not accepted.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://www.irs.gov/statistics/collections-activities-penalties-and-appeals">
                  IRS Data Book
                </SourceLink>{' '}
                reports that in fiscal year 2025 taxpayers proposed 38,797
                offers and the IRS accepted 5,464, worth $98.1 million. Those
                two counts don&rsquo;t cover exactly the same applications, but
                the ratio is roughly one in seven.
              </li>
              <li>
                <strong className="text-aubergine">
                  It pauses the collection clock.
                </strong>{' '}
                While an offer is pending, most collection activity stops and
                the time the IRS has to collect is extended. A federal tax lien
                can still be filed.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              One in seven is not nothing. For someone with little income and
              few assets, an accepted offer is the real thing, and it changes
              a life. It just isn&rsquo;t what happens to the typical person
              who hears the ad.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/chalk-on-wiped-blackboard-ledge.webp`}
              alt="A green and a yellow stick of chalk resting on the dusty wooden ledge of a wiped blackboard"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — PENALTY RELIEF */}
        <Section background="ivory" id="penalty-relief">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Penalty relief: the forgiveness most people actually get
            </h2>
            <p className="mt-4 text-body text-graphite">
              When someone tells you about the IRS&rsquo;s &ldquo;one-time
              forgiveness,&rdquo; this is almost always what they mean, whether
              they know it or not. The IRS calls it{' '}
              <SourceLink href="https://www.irs.gov/payments/penalty-relief-due-to-first-time-abate-or-other-administrative-waiver">
                First Time Abate
              </SourceLink>
              , and it is the least dramatic and most useful item on this
              page.
            </p>
            <p className="mt-4 text-body text-graphite">
              It works like a library waiving your late fee because
              you&rsquo;ve returned every book on time for three years. A kind
              gesture, quickly granted. You do still have to bring the book
              back.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  What it removes.
                </strong>{' '}
                Failure-to-file, failure-to-pay, and failure-to-deposit
                penalties, regardless of amount. Interest charged on a removed
                penalty comes off with it.
              </li>
              <li>
                <strong className="text-aubergine">
                  What it leaves.
                </strong>{' '}
                The tax, and the interest on the tax.
              </li>
              <li>
                <strong className="text-aubergine">
                  The test.
                </strong>{' '}
                You filed the same type of return on time for the prior three
                years and had no penalties in that stretch, other than an
                estimated tax penalty or one later removed for good reason.
              </li>
              <li>
                <strong className="text-aubergine">
                  How you ask.
                </strong>{' '}
                Call the number on your notice. You don&rsquo;t need to name
                the waiver or send documents, because the IRS checks your
                account history itself.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              The IRS page says this waiver is moving to an automatic version,
              called Automatic Exemption from Penalty, beginning in summer
              2026. The three-clean-years idea is the same either way, but
              check that page for the current procedure before you call.
            </p>
            <p className="mt-4 text-body text-graphite">
              On Renata&rsquo;s bill, about $1,400 is a failure-to-pay penalty.
              If her last three years were clean, that is a phone call. It
              won&rsquo;t make the radio, because nobody can charge $4,000 for
              a phone call. Well. Somebody can.
            </p>
          </div>
        </Section>

        {/* 4 — PAUSED NOT FORGIVEN */}
        <Section background="cream" id="paused-not-forgiven">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Currently Not Collectible and the ten-year clock
            </h2>
            <p className="mt-4 text-body text-graphite">
              If paying anything right now would leave you unable to cover
              basic living costs, the IRS can{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/temporarily-delay-the-collection-process">
                temporarily delay collection
              </SourceLink>{' '}
              and mark your account Currently Not Collectible. It usually asks
              for a financial statement and proof of income and expenses
              first.
            </p>
            <p className="mt-4 text-body text-graphite">
              This is a pause button. It is not a delete key. It&rsquo;s like
              putting a gym membership on hold, except that penalties and
              interest keep growing the whole time, which is a thing not even
              gyms have thought of yet.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You still owe the full amount.
                </strong>{' '}
                The IRS says plainly that the debt is not forgiven or
                cancelled.
              </li>
              <li>
                <strong className="text-aubergine">
                  Your refunds go to the balance.
                </strong>{' '}
                Any federal refund you&rsquo;re due can be applied to the
                debt.
              </li>
              <li>
                <strong className="text-aubergine">
                  A lien is still possible.
                </strong>{' '}
                The IRS may file a Notice of Federal Tax Lien while the account
                is paused.
              </li>
              <li>
                <strong className="text-aubergine">
                  It can end.
                </strong>{' '}
                The IRS can review your finances later and restart collection
                if things improve.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Then there is the clock, which is where the phrase
              &ldquo;forgiven after ten years&rdquo; comes from. The IRS
              generally has{' '}
              <SourceLink href="https://www.irs.gov/filing/time-irs-can-collect-tax">
                ten years from the date a tax is assessed
              </SourceLink>{' '}
              to collect it. After that date, it can&rsquo;t.
            </p>
            <p className="mt-4 text-body text-graphite">
              The catch is that the clock stops for a long list of reasons: a
              pending Offer in Compromise, a payment plan request under
              review, a bankruptcy, a collection hearing, six months or more
              living abroad. Waiting it out is a strategy only in the sense
              that not opening the mailbox is a strategy.
            </p>
          </div>
        </Section>

        {/* 5 — WHO QUALIFIES */}
        <Section background="ivory" id="who-qualifies">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who actually qualifies, and who doesn&rsquo;t
            </h2>
            <p className="mt-4 text-body text-graphite">
              Run Renata through it. Her numbers are illustrative, but the
              shape is common. She owes $28,000 in tax from one bad year, plus
              roughly $3,000 in penalties and interest. She filed on time. Her
              business is steady, and she owns two vans outright.
            </p>
            <p className="mt-4 text-body text-graphite">
              Those vans are the end of the Offer in Compromise conversation.
              The formula counts equity in assets, and it does not care that
              one of them smells permanently of wet spaniel. Steady income
              plus two paid-off vehicles reads, to the IRS, as a person who
              can pay over time.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Offer in Compromise: unlikely.
                </strong>{' '}
                She could pay in full through a payment plan, which is the
                IRS&rsquo;s stated reason for turning offers down. The free
                Pre-Qualifier would tell her this in a few minutes.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Currently Not Collectible: no.
                </strong>{' '}
                She can cover her living costs. That&rsquo;s good news wearing
                a disappointing outfit.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Penalty relief: quite possibly.
                </strong>{' '}
                If her prior three years are clean, the $1,400 failure-to-pay
                penalty is a candidate for removal.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Payment plan: yes.
                </strong>{' '}
                She owes under $50,000 and has filed, so she can{' '}
                <SourceLink href="https://www.irs.gov/payments/payment-plans-installment-agreements">
                  apply online for a long-term plan
                </SourceLink>
                . The setup fee is $29 with direct debit.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              So Renata&rsquo;s real &ldquo;forgiveness&rdquo; is about $1,400
              off and a monthly payment. It is a much smaller headline than the
              one on the radio, and it has the advantage of being available.
            </p>
            <p className="mt-4 text-body text-graphite">
              This is also where we talk ourselves out of a sale, which is
              becoming a habit. If your situation looks like hers, you
              don&rsquo;t need us or anyone else. It&rsquo;s a phone call and
              an online form. The people who should get help are the ones with
              several unfiled years, payroll tax debt, or finances thin enough
              that an offer might succeed. We laid out which professional fits
              which problem in our guide to{' '}
              <Link href="/blog/tax-resolution-services" className={linkClass}>
                tax resolution services
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/laptop-among-crumpled-paper-drafts.webp`}
              alt="Overhead view of an open laptop on a white surface surrounded by crumpled sheets of yellow, white and green paper"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — REAL OR PITCH */}
        <Section background="cream" id="real-or-pitch">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to tell a real program from a sales pitch
            </h2>
            <p className="mt-4 text-body text-graphite">
              The programs are real. A good share of the advertising around
              them is not describing the programs. A reliable tell: government
              forms have never needed a man talking at double speed for the
              last six seconds.
            </p>
            <p className="mt-4 text-body text-graphite">
              The IRS has a name for the worst of it. In a{' '}
              <SourceLink href="https://www.irs.gov/newsroom/eligible-taxpayers-may-be-able-to-resolve-tax-debt-through-an-offer-in-compromise">
                May 2026 tax tip
              </SourceLink>{' '}
              it warned about &ldquo;OIC mills,&rdquo; which it describes as
              misleading marketing that overpromises and charges high fees to
              people who don&rsquo;t qualify. They are on its Dirty Dozen list
              of scams for 2026.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  &ldquo;You qualify,&rdquo; said before anyone has seen your
                  finances.
                </strong>{' '}
                Qualifying is a calculation. Nobody can do it from a phone
                number.
              </li>
              <li>
                <strong className="text-aubergine">
                  A deadline.
                </strong>{' '}
                None of these programs has an enrollment window that closes
                this month. The same goes for{' '}
                <Link href="/blog/is-fresh-start-tax-relief-legit" className={linkClass}>
                  &ldquo;Fresh Start,&rdquo; which is a real IRS term borrowed
                  for the same purpose
                </Link>
                .
              </li>
              <li>
                <strong className="text-aubergine">
                  &ldquo;Pennies on the dollar&rdquo; as the expected result.
                </strong>{' '}
                It happens. It happens to people with almost nothing to
                collect.
              </li>
              <li>
                <strong className="text-aubergine">
                  The whole fee upfront.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://consumer.ftc.gov/articles/tax-relief-companies">
                  Federal Trade Commission
                </SourceLink>{' '}
                advises against it, for every firm in the industry.
              </li>
              <li>
                <strong className="text-aubergine">
                  They called you.
                </strong>{' '}
                There&rsquo;s a reason your phone started ringing when it did,
                and we explained it in{' '}
                <Link href="/blog/why-is-tax-relief-services-calling-me" className={linkClass}>
                  why tax relief services keep calling
                </Link>
                .
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              None of this means every tax relief firm is a mill. Plenty are
              staffed by enrolled agents and attorneys doing careful work. The
              test is whether they look at your IRS transcripts before they
              tell you what you&rsquo;ll get.
            </p>
            <p className="mt-4 text-body text-graphite">
              Where we fit is narrower than the ads. Njock is an accountant,
              not a CPA or enrolled agent, so we don&rsquo;t negotiate with the
              IRS. We rebuild the books and prepare the returns that have to
              exist before any of these applications can be filed. That work
              is on our{' '}
              <Link href="/services" className={linkClass}>
                services page
              </Link>
              , with{' '}
              <Link href="/pricing" className={linkClass}>
                the prices written down
              </Link>{' '}
              where you can see them before you talk to anyone.
            </p>
          </div>
        </Section>

        {/* 7 — EMPHASIS: COST OF WAITING */}
        <Section background="aubergine" id="cost-of-waiting">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What waiting for forgiveness costs you
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The quiet danger of the word is that it gives you a reason to
              wait. If forgiveness might be coming, why set up a payment plan
              this week.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Here is why. The{' '}
              <a
                href="https://www.irs.gov/payments/failure-to-pay-penalty"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory/60 pb-0.5 font-medium text-ivory hover:border-persimmon hover:text-persimmon"
              >
                failure-to-pay penalty
              </a>{' '}
              is 0.5% of the unpaid tax for each month or part of a month, up
              to 25%, with interest on top. On Renata&rsquo;s $28,000 that is
              $140 a month in penalty alone. Six months of hoping is $840.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              For an individual who filed on time, an approved payment plan
              cuts that rate to 0.25% a month. Her $140 becomes $70 the month
              the plan is approved. Ignore the notices long enough to receive
              a notice of intent to levy, and the rate goes the other way, to
              1%.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              So tax forgiveness is real in the way the fixing tool is real.
              There are several, they each fix one thing, and none of them
              works from the passenger seat. The envelope is the one that
              needs opening. The radio will keep.
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
              href: '/blog/tax-resolution-services',
              eyebrow: 'Blog',
              title: 'Tax Resolution Services: What They Actually Cover',
              blurb:
                'Which professional fits which IRS problem, and the parts you can handle without paying anyone.',
            },
            {
              href: '/blog/is-fresh-start-tax-relief-legit',
              eyebrow: 'Blog',
              title: 'Is Fresh Start Tax Relief Legit?',
              blurb:
                'The real IRS initiative behind the name, and how the phrase gets borrowed for sales calls.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Tax preparation and catch-up bookkeeping',
              blurb:
                'Books rebuilt and returns prepared from whatever you have. The step every IRS relief program requires first.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure which of these fits your bill?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. No pitch. Bring
              the notice, and we&rsquo;ll tell you honestly whether this looks
              like a phone call you can make yourself or a case that needs a
              credentialed representative.
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
