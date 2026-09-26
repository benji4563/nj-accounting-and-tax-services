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

const SLUG = 'sales-tax-compliance-services';
const TITLE = 'Sales Tax Compliance Services: What Small Businesses Need';
const DESCRIPTION =
  'What sales tax compliance services cover for a small business: what is taxable, whether labor is taxed in TX, FL and NY, filing due dates, and when to DIY.';
const PUBLISHED = '2026-09-26';
const MODIFIED = '2026-09-26';
const HERO = `/blog/${SLUG}/hero-vintage-cash-register-counter.webp`;

const TOC = [
  { id: 'what-it-covers', label: 'What sales tax compliance services actually cover' },
  { id: 'do-you-charge-tax-on-labor', label: 'Do you charge sales tax on labor?' },
  { id: 'texas-florida-new-york', label: 'Labor in Texas, Florida and New York: three different answers' },
  { id: 'when-is-sales-tax-due', label: 'When is sales tax due?' },
  { id: 'where-you-owe', label: 'Where you owe sales tax after Wayfair' },
  { id: 'when-to-diy', label: 'When you can handle sales tax yourself' },
  { id: 'what-getting-it-wrong-costs', label: 'What getting sales tax wrong actually costs' },
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
        alt: 'A pale green vintage cash register with a hand crank on a shop counter beside a white teacup and saucer',
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
    q: 'What do sales tax compliance services include?',
    a: "Sales tax compliance services usually include registering with each state where you owe, deciding which of your sales are taxable, setting the right rates in your invoicing or point-of-sale system, filing returns on each state's schedule, and answering state notices. Many providers also review where you have nexus and help you catch up on returns you missed.",
  },
  {
    q: 'Do you charge sales tax on labor?',
    a: 'It depends on the state and on what the labor is for. Some states tax labor to repair personal property or commercial buildings, while others exempt labor-only repairs or capital improvements. Check the rules for each state where you work before you set up your invoices.',
  },
  {
    q: 'Is labor taxed in Florida?',
    a: 'In Florida, a repair that is truly labor only is exempt, but only if your records show that no parts or materials were added to the item. If you supply any part or material, even a little lubricant, the whole repair charge is taxable, including the labor.',
  },
  {
    q: 'Do I charge sales tax on services in Texas?',
    a: 'Only on the services Texas lists as taxable. The Texas Comptroller lists 16 categories, including repair of personal property, repair and remodeling of nonresidential real property, landscaping, janitorial and security services. Professional services such as accounting and tax preparation are not on the list.',
  },
  {
    q: 'Do contractors charge sales tax on labor in NY?',
    a: 'Yes, for repair, maintenance and installation work on real property: New York taxes the whole charge, including labor and materials. Work that qualifies as a capital improvement is not taxed, and a customer-signed Form ST-124 documents that.',
  },
  {
    q: 'When is NYS sales tax due?',
    a: "New York quarterly returns are due 20 days after each quarter ends. New York's sales tax quarters run March to May, June to August, September to November and December to February, so the due dates are June 20, September 20, December 20 and March 20.",
  },
  {
    q: 'When is Florida sales tax due?',
    a: 'Florida sales tax returns and payments are due on the 1st and are late after the 20th of the month following each reporting period. The state assigns you a monthly, quarterly, semiannual or annual schedule based on how much tax you collect.',
  },
  {
    q: 'When is sales tax due in California?',
    a: 'California quarterly returns are due on the last day of the month after the quarter ends: April 30, July 31, October 31 and January 31. You must file by the due date even if you had no sales to report.',
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
              <time dateTime={PUBLISHED}>September 26, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>September 26, 2026</time>
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
              alt="A pale green vintage cash register with a hand crank on a shop counter beside a white teacup and saucer"
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
                <strong>Short answer:</strong> Sales tax compliance services
                handle the whole sales tax job for a business: working out which
                states you owe in, which of your sales are taxable, charging the
                right rate, and filing every return on time. For a small business
                selling in one state, it is often a few hours a quarter. For a
                business with repair labor, multiple states or online sales, the
                rules get specific fast.
              </p>
              <p className="mt-4 text-body text-graphite">
                Sales tax is a state-by-state system with no national rulebook.
                The same $50 repair can be taxable in one state and exempt in the
                next, which is the whole reason this service exists.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s nine at night on the 19th, and Marco &mdash; I&rsquo;ll
              call him Marco &mdash; is at the counter of his two-bay mower repair
              shop with the state tax website open and a cold slice of pizza he
              keeps meaning to finish. The return is due tomorrow. He is scrolling
              back through the month&rsquo;s invoices and has stopped on one: $50,
              &ldquo;tightened loose bolts,&rdquo; no tax charged.
            </p>
            <p className="mt-4 text-body text-graphite">
              He remembers the job. One bolt was stuck, so he gave it a drop of
              oil. That drop of oil, it turns out, may be the most expensive
              lubricant in the building.
            </p>
            <p className="mt-4 text-body text-graphite">
              Marco isn&rsquo;t careless. He&rsquo;s running a repair shop, and
              the state has quietly made him a part-time tax collector without
              ever handing him the manual.
            </p>
            <p className="mt-4 text-body text-graphite">
              This guide is that manual, in plain English: what sales tax
              compliance services actually do, how labor is taxed in three big
              states, when returns are due, and &mdash; honestly &mdash; when you
              don&rsquo;t need to pay anyone for any of it.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="what-it-covers">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What sales tax compliance services actually cover
            </h2>
            <p className="mt-4 text-body text-graphite">
              Sales tax is unusual because it is not really your tax. You collect
              it from your customer, hold it for a few weeks, and pass it to the
              state. You are the middleman in a transaction you never asked to be
              part of &mdash; like being the friend who ends up holding
              everyone&rsquo;s coats at a party, except the coats are money and
              the host audits you.
            </p>
            <p className="mt-4 text-body text-graphite">
              A proper sales tax compliance service covers five jobs:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Working out where you owe.
                </strong>{' '}
                The state you are based in, plus any state where your sales or
                presence cross that state&rsquo;s threshold. This is called nexus,
                and it is covered further down.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Deciding what is taxable.
                </strong>{' '}
                Products, services, labor, shipping, digital goods. Each state
                draws its own lines, and they rarely line up with common sense.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Charging the right rate.
                </strong>{' '}
                State rate plus county and city rates, set correctly in your
                invoicing or point-of-sale system so the tax is collected at the
                moment of sale, not reconstructed at month end.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Filing on each state&rsquo;s schedule.
                </strong>{' '}
                Monthly, quarterly or annually, depending on what the state assigns
                you &mdash; including zero returns in quiet periods.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Answering the letters.
                </strong>{' '}
                Notices, exemption certificate requests, and the occasional audit.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              Most of those five depend on clean books underneath. If the sales
              ledger is a guess, the return is a guess. That is the same line we
              draw in{' '}
              <Link href="/blog/bookkeeping-vs-accounting" className={linkClass}>
                bookkeeping vs. accounting
              </Link>
              : the bookkeeping records what you sold; the accounting decides
              what the state is owed.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="do-you-charge-tax-on-labor">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Do you charge sales tax on labor?
            </h2>
            <p className="mt-4 text-body text-graphite">
              The honest answer is &ldquo;it depends on the state, and on what the
              labor touched.&rdquo; That sounds like an accountant dodging the
              question. It is actually the whole answer, and every state asks
              roughly the same three things.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Was it personal property or real property?
                </strong>{' '}
                Fixing a mower, a laptop or a sofa is personal property. Fixing a
                roof, a wall or a water heater that is built into the house is
                real property. States often treat the two completely differently.
              </li>
              <li>
                <strong className="text-aubergine">
                  Was it a repair or an improvement?
                </strong>{' '}
                Patching something back to how it was is usually a repair. Adding
                something that makes the property worth more, or last much longer,
                can be an improvement with its own rules.
              </li>
              <li>
                <strong className="text-aubergine">
                  Did any parts or materials change hands?
                </strong>{' '}
                In some states, one part turns a labor-only job into a taxable
                sale. The size of the part does not matter. Remember Marco&rsquo;s
                drop of oil.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              The trap is assuming the rule from one state travels. A contractor
              who learned the trade in one state and moved to another often
              invoices exactly the way they always have &mdash; which is a bit like
              driving on the side of the road you grew up on. It feels completely
              natural right up until it doesn&rsquo;t.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/workbench-clipboard-hand-tools.webp`}
              alt="Overhead view of a worn wooden workbench with a blank clipboard and pencil surrounded by a hammer, tape measure, saw and a plank of wood"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="texas-florida-new-york">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Labor in Texas, Florida and New York: three different answers
            </h2>
            <p className="mt-4 text-body text-graphite">
              Three large states, three different philosophies. If you ever wanted
              proof that sales tax was written by committee, this is it &mdash;
              three committees, in fact, who have clearly never met.
            </p>
            <ul className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Texas taxes a specific list of services.
                </strong>{' '}
                The Comptroller&rsquo;s guide to{' '}
                <SourceLink href="https://comptroller.texas.gov/taxes/publications/96-259.php">
                  taxable services in Texas
                </SourceLink>{' '}
                names 16 categories, including repair of personal property and
                repair or remodeling of nonresidential real property. Labor to
                repair or remodel residential real property is not taxable,
                according to the Comptroller&rsquo;s{' '}
                <SourceLink href="https://comptroller.texas.gov/taxes/publications/94-116.php">
                  real property repair and remodeling
                </SourceLink>{' '}
                guidance. So fixing a homeowner&rsquo;s kitchen and fixing a
                restaurant&rsquo;s kitchen can be taxed differently, even if the
                work is identical.
              </li>
              <li>
                <strong className="text-aubergine">
                  Florida exempts labor only if it was truly labor only.
                </strong>{' '}
                Under the Department of Revenue&rsquo;s guidance on{' '}
                <SourceLink href="https://floridarevenue.com/Forms_library/current/brochure/gt800010.pdf">
                  repairs to tangible personal property
                </SourceLink>
                , a labor-only repair is exempt when your records show no parts or
                materials were added. Add any part or material and the whole
                charge is taxable &mdash; even if you didn&rsquo;t bill for the
                part. The brochure&rsquo;s own example is a $50 mower repair that
                became taxable because of a little lubricant. Marco&rsquo;s drop of
                oil is, it turns out, a documented case study.
              </li>
              <li>
                <strong className="text-aubergine">
                  New York taxes contractor repairs, not capital improvements.
                </strong>{' '}
                The state&rsquo;s bulletin on{' '}
                <SourceLink href="https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/repair_maintenance.htm">
                  repair, maintenance and installation services
                </SourceLink>{' '}
                says a contractor must charge sales tax on that work, labor
                included. A capital improvement &mdash; work that adds value or
                substantially extends the life of the property &mdash; is not
                taxed, and the customer documents it on Form ST-124.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              One practical habit covers all three: write down what the job was
              and what went into it. &ldquo;Labor only&rdquo; on the invoice is not
              a formality in Florida. It is your defense.
            </p>
            <p className="mt-4 text-body text-graphite">
              If you work in Texas, our{' '}
              <Link href="/locations/dallas" className={linkClass}>
                Dallas small-business accounting page
              </Link>{' '}
              covers the other Texas tax that surprises people: the franchise tax.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="when-is-sales-tax-due">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When is sales tax due?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Every state picks its own calendar, and some of them don&rsquo;t
              even agree on when a quarter starts. New York&rsquo;s sales tax year
              begins on March 1, a date chosen, as far as anyone can tell,
              specifically to confuse people who own calendars.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">New York: the 20th.</strong>{' '}
                According to the state&rsquo;s{' '}
                <SourceLink href="https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/filing_requirements_for_sales_and_use_tax_returns.htm">
                  filing requirements
                </SourceLink>
                , quarterly returns are due 20 days after each quarter ends. The
                quarters run March to May, June to August, September to November
                and December to February &mdash; so returns are due June 20,
                September 20, December 20 and March 20.
              </li>
              <li>
                <strong className="text-aubergine">
                  Florida: due on the 1st, late after the 20th.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx">
                  Florida Department of Revenue
                </SourceLink>{' '}
                assigns monthly, quarterly, semiannual or annual filing based on
                how much tax you collect.
              </li>
              <li>
                <strong className="text-aubergine">
                  California: the last day of the following month.
                </strong>{' '}
                The CDTFA&rsquo;s{' '}
                <SourceLink href="https://cdtfa.ca.gov/taxes-and-fees/sales-use-tax-returns-filing-dates.htm">
                  filing dates
                </SourceLink>{' '}
                put quarterly returns on April 30, July 31, October 31 and January
                31.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              All three states say the same thing about slow periods: you file
              even if you had no taxable sales. The zero return is the one people
              forget, because it feels silly to fill in a form that says
              &ldquo;nothing happened.&rdquo; States do not find it silly. If
              you&rsquo;re in California, our{' '}
              <Link href="/locations/san-diego" className={linkClass}>
                San Diego accounting page
              </Link>{' '}
              covers the local district rates that sit on top of the state rate.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="where-you-owe">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Where you owe sales tax after Wayfair
            </h2>
            <p className="mt-4 text-body text-graphite">
              Until 2018, the rule was simple: no physical presence in a state, no
              duty to collect its sales tax. Then the Supreme Court decided{' '}
              <SourceLink href="https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf">
                South Dakota v. Wayfair
              </SourceLink>{' '}
              and let states require out-of-state sellers to collect based on
              their sales into the state, not their buildings in it.
            </p>
            <p className="mt-4 text-body text-graphite">
              South Dakota&rsquo;s law, the one the Court upheld, applied to
              sellers with more than $100,000 in sales or 200 or more separate
              transactions into the state in a year. Each state now sets its own
              threshold, and several have changed theirs since, so check the
              current number for every state you ship into rather than trusting
              a figure you read once.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Local-only service businesses rarely need to worry.
                </strong>{' '}
                If you fix mowers in one town, you owe in one state.
              </li>
              <li>
                <strong className="text-aubergine">
                  Online sellers need to watch it every year.
                </strong>{' '}
                A good holiday season can push you over a threshold in a state
                you have never set foot in. Congratulations on the growth; here is
                your new filing obligation.
              </li>
              <li>
                <strong className="text-aubergine">
                  Marketplaces may collect for you.
                </strong>{' '}
                Many states require large marketplaces to collect on sales made
                through them. Your own website sales are still yours.
              </li>
            </ul>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/desk-calculator-cash-receipts.webp`}
              alt="Overhead view of a light wood desk with a blue calculator, a few dollar bills, orange and white paper receipts and a notebook"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="when-to-diy">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When you can handle sales tax yourself
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is the part a firm selling sales tax compliance services is not
              supposed to write: a lot of small businesses don&rsquo;t need one.
              We&rsquo;re writing it anyway. Accountants are not famous for
              living dangerously, so this is about as wild as we get.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You can probably DIY if
                </strong>{' '}
                you sell in one state, everything you sell is clearly taxable or
                clearly not, your point-of-sale system calculates the rate, and you
                file quarterly or annually. That is an hour or two per return once
                the setup is right.
              </li>
              <li>
                <strong className="text-aubergine">
                  It is worth getting help if
                </strong>{' '}
                you mix taxable and exempt work on the same invoice, do repair or
                contracting labor, sell into several states, or have ever received
                a letter from a state revenue department that you put in a drawer.
              </li>
              <li>
                <strong className="text-aubergine">
                  Get help now if
                </strong>{' '}
                you realize you should have been collecting and haven&rsquo;t. Many
                states offer voluntary disclosure programs that are far kinder
                than being found.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              If you&rsquo;re in the middle group, the question is less about
              sales tax and more about whether you need an accountant at all
              &mdash; which we walk through honestly in{' '}
              <Link
                href="/blog/do-i-need-an-accountant-for-your-small-business"
                className={linkClass}
              >
                do I need an accountant for my small business
              </Link>
              . Our{' '}
              <Link href="/services" className={linkClass}>
                services page
              </Link>{' '}
              shows what we handle, and{' '}
              <Link href="/pricing" className={linkClass}>
                our pricing
              </Link>{' '}
              is flat and published. How many states you file in changes the
              scope, so we confirm that on the discovery call rather than guess
              here.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="what-getting-it-wrong-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What getting sales tax wrong actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Here is the uncomfortable arithmetic. Say a repair shop does $40,000
              a year of work it treated as labor only, and a state later decides
              it was taxable. At an illustrative 6% rate, that is $2,400 of tax a
              year the shop never collected from anyone.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The state still wants it. You cannot send a bill to last
              year&rsquo;s customers, so it comes out of your margin &mdash; for
              every year it went on, plus penalties and interest on top.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Getting it right does not take heroics. It takes knowing the rule
              for your kind of work, writing the invoice to match, and filing on
              time, including the boring zero returns. A drop of oil is cheap. Not
              knowing what it means is not.
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
              href: '/blog/bookkeeping-vs-accounting',
              eyebrow: 'Blog',
              title: 'Bookkeeping vs. Accounting: What’s the Difference?',
              blurb:
                'A bookkeeper records the numbers; an accountant interprets them and files your taxes. Where the line falls and what each costs.',
            },
            {
              href: '/blog/do-i-need-an-accountant-for-your-small-business',
              eyebrow: 'Blog',
              title: 'Do you actually need an accountant for your small business?',
              blurb:
                'The honest signs you have outgrown doing it yourself, and the signs you have not.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Bookkeeping, tax and compliance for small businesses',
              blurb:
                'Monthly books, returns and state filings handled remotely, with a 4-business-hour email reply.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure whether your labor is taxable?
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
