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

const SLUG = 'business-meal-deduction';
const TITLE = 'Business Meal Deduction Rules for 2026, Plainly Explained';
const DESCRIPTION =
  'The business meal deduction for 2026: what is 50%, what is 100%, what is now zero, travel meals, entertainment, and the records that keep the write-off safe.';
const PUBLISHED = '2026-11-16';
const MODIFIED = '2026-11-16';
const HERO = `/blog/${SLUG}/hero-two-coffees-cafe-table.webp`;

const TOC = [
  { id: 'the-50-percent-rule', label: 'The 50% rule and the three tests a meal has to pass' },
  { id: 'what-counts', label: 'Which meals count, and which are just lunch' },
  { id: 'full-or-nothing', label: 'When a meal is 100% deductible, and when it is zero' },
  { id: 'what-changed-in-2026', label: 'What changed in 2026: meals for staff at the office' },
  { id: 'travel-and-entertainment', label: 'Travel meals, conferences and the ballgame problem' },
  { id: 'records', label: 'The records that make a meal deduction stick' },
  { id: 'cost-of-sloppy-records', label: 'What a pile of unlabeled receipts actually costs' },
  { id: 'faq', label: 'Frequently asked questions' },
];

export const metadata: Metadata = {
  title: TITLE,
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
        width: 2560,
        height: 1440,
        alt: 'Two coffees side by side on a round white cafe table in bright sunlight, with red chairs behind',
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
    q: 'Can you write off 100% of a business meal?',
    a: "Usually not. Most business meals, including meals with clients and meals while traveling for business, are limited to 50%. A meal is 100% deductible only if it falls under an IRS exception, such as a holiday party or picnic for employees, food you provide free to the general public, food you sell to customers, or a meal you report as taxable pay to the person who ate it. The temporary 100% deduction for restaurant meals ended after 2022.",
  },
  {
    q: 'Can I deduct a meal if I eat alone?',
    a: "Only when you are traveling away from your tax home overnight on business. Then your own meals are deductible at 50%. A meal you eat alone in your usual town is a personal expense, even if you spent it working on the business.",
  },
  {
    q: 'Is coffee with a client deductible?',
    a: "Yes, if it meets the same tests as any business meal. The cost must be ordinary and necessary, not lavish, you or an employee must be there, and the person must be a current or potential customer, client, supplier, adviser or similar business contact. It is deductible at 50%, including tax and tip.",
  },
  {
    q: 'Are office snacks deductible in 2026?',
    a: "Snacks and drinks kept in the office are generally still 50% deductible in 2026, as long as they are not connected to an employer-operated eating facility. What changed in 2026 is that meals provided to employees on your premises for your convenience, such as meals furnished so staff can keep working, are no longer deductible at all under section 274(o).",
  },
  {
    q: 'Do I need a receipt for every business meal?',
    a: "Not for every one. IRS Publication 463 says you generally do not need a receipt for a meal under $75. You still need a record of the amount, the date, the place, the business purpose and who you ate with. For meals of $75 or more, keep the receipt showing the restaurant name and location, the number of people served, and the date and amount.",
  },
  {
    q: 'Is a company holiday party deductible?',
    a: "Yes. Recreational and social events for employees, such as a holiday party or summer picnic, are an exception to the 50% limit and are generally 100% deductible. The event has to be for employees in general, not just for owners or the most highly paid staff.",
  },
  {
    q: 'What is the $2,500 expense rule?',
    a: "The $2,500 rule is the de minimis safe harbor, which lets a business without audited financial statements deduct items costing up to $2,500 per invoice or item instead of depreciating them. It applies to things like equipment and supplies. It does not change the business meal deduction, which stays at 50% for most meals.",
  },
  {
    q: 'Where do I report business meals on my tax return?',
    a: "Sole proprietors and single-member LLCs report the deductible part of business meals on Schedule C, line 24b, Deductible meals. Partnerships and corporations report them as part of their business deductions on their own returns. In every case, the amount you enter is the deductible share, usually 50%, not the full bill.",
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
              <time dateTime={PUBLISHED}>November 16, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 16, 2026</time>
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
              alt="Two coffees side by side on a round white cafe table in bright sunlight, with red chairs behind"
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
                <strong>Short answer:</strong> The business meal deduction lets
                you deduct 50% of the cost of a meal with a current or potential
                customer, client or other business contact, as long as the meal
                is not lavish and you or an employee is present. Meals while
                traveling overnight for business are also 50% deductible.
                Entertainment is not deductible at all.
              </p>
              <p className="mt-4 text-body text-graphite">
                A few meals are 100% deductible, such as a holiday party for
                your staff. And starting in 2026, meals you provide employees
                at your workplace for your own convenience are not deductible
                at all.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Tuesday in February and Rosa &mdash; I&rsquo;ll call
              her Rosa &mdash; runs a small sign-printing shop. She is in her
              van in the parking lot of a client&rsquo;s office, going through
              the glovebox. There are eleven receipts in there, two parking
              stubs, a napkin with a phone number on it, and a receipt for an
              $11 flat white she bought a prospective client last fall. She
              cannot remember the client&rsquo;s name. She does remember the
              flat white was excellent.
            </p>
            <p className="mt-4 text-body text-graphite">
              Rosa isn&rsquo;t careless. She just never had anyone tell her
              which of those eleven receipts the IRS actually cares about.
            </p>
            <p className="mt-4 text-body text-graphite">
              So here is the whole map: the 50% rule and its three tests, the
              meals that are fully deductible, the ones that are now worth
              zero, what changed in 2026, and the eight-second habit that turns
              a receipt into evidence.
            </p>
          </div>
        </Section>

        {/* BODY SECTION 1 */}
        <Section background="ivory" id="the-50-percent-rule">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The 50% rule and the three tests a meal has to pass
            </h2>
            <p className="mt-4 text-body text-graphite">
              The starting point is simple. Under{' '}
              <SourceLink href="https://www.law.cornell.edu/uscode/text/26/274">
                section 274(n) of the Internal Revenue Code
              </SourceLink>
              , the deduction for food and beverages is capped at 50% of what
              would otherwise be deductible. Before you even get to the 50%,
              the meal has to qualify at all.
            </p>
            <p className="mt-4 text-body text-graphite">
              The Treasury regulation that spells this out,{' '}
              <SourceLink href="https://www.ecfr.gov/current/title-26/section-1.274-12">
                26 CFR 1.274-12
              </SourceLink>
              , sets three tests on top of the usual rule that every business
              expense be ordinary and necessary:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. It is not lavish or extravagant.
                </strong>{' '}
                The IRS judges this on the facts. A nice restaurant is not
                automatically lavish, and there is no fixed dollar limit. The
                $400 bottle of wine to close a $900 job is going to have a
                harder time.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. You, or an employee of yours, are there.
                </strong>{' '}
                Sending a client a gift card for dinner is not a business meal.
                Neither is paying for a lunch you didn&rsquo;t attend.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. The food goes to you or a business associate.
                </strong>{' '}
                A business associate is someone you could reasonably expect to
                do business with: a current or likely customer, client,
                supplier, employee, agent, partner or professional adviser.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              The 50% applies to the whole bill, tax and tip included. The
              ride to the restaurant is a separate travel expense and is not
              cut in half. Think of the 50% like a two-for-one deal in
              reverse: the IRS lets you buy lunch for two and pay tax on lunch
              for one.
            </p>
          </div>
        </Section>

        {/* BODY SECTION 2 */}
        <Section background="cream" id="what-counts">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Which meals count, and which are just lunch
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most confusion comes from one assumption: that thinking about
              your business while eating makes the meal a business meal. It
              doesn&rsquo;t. Lunch alone at your desk is just lunch, even if
              the spreadsheet was open the whole time and you were very
              stressed about it.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Usually 50%:</strong>{' '}
                coffee with a prospect, lunch with a supplier to negotiate
                prices, dinner with your bookkeeper or lawyer to discuss the
                business, a working lunch with an employee where you are
                actually talking shop.
              </li>
              <li>
                <strong className="text-aubergine">Usually 50%:</strong>{' '}
                your own meals when you travel away from home overnight for
                business, and meals at a business convention or trade
                association meeting.
              </li>
              <li>
                <strong className="text-aubergine">Not deductible:</strong>{' '}
                meals alone in your home town, meals with friends where
                business came up for four minutes over dessert, and the
                family dinner where your spouse is technically a board member
                of your household.
              </li>
              <li>
                <strong className="text-aubergine">Not deductible:</strong>{' '}
                the lunch rotation. IRS Publication 463 says that if a group of
                business acquaintances takes turns picking up the check mainly
                for personal reasons, nobody in the group can deduct any of it.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              A good rule of thumb: if you would be slightly embarrassed to
              explain the business purpose out loud to a stranger, it probably
              isn&rsquo;t one. If you can say it in one sentence, write that
              sentence on the receipt. More on that below.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/paying-the-bill-with-receipt.webp`}
              alt="Overhead view of hands passing dollar bills across a table while another hand holds out a printed receipt, with a cup of coffee and scissors on a side table"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY SECTION 3 */}
        <Section background="ivory" id="full-or-nothing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When a meal is 100% deductible, and when it is zero
            </h2>
            <p className="mt-4 text-body text-graphite">
              The 50% rule has exceptions in both directions. These are the
              ones that actually come up in a small business:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">100%: parties and picnics for staff.</strong>{' '}
                Recreational and social events for your employees, like a
                holiday party or a summer picnic, are not subject to the 50%
                limit. It has to be for employees in general, not a dinner for
                you and your top earner.
              </li>
              <li>
                <strong className="text-aubergine">100%: food for the public.</strong>{' '}
                Free hot dogs at your shop&rsquo;s open house, or cookies on
                the counter for anyone who walks in, count as advertising.
              </li>
              <li>
                <strong className="text-aubergine">100%: food you sell.</strong>{' '}
                If you run a restaurant or caf&eacute;, the food you serve
                customers is a cost of sales, not a meal expense. Our guide on{' '}
                <Link href="/blog/how-to-calculate-food-cost-percentage" className={linkClass}>
                  how to calculate food cost percentage
                </Link>{' '}
                covers how that lands on your return.
              </li>
              <li>
                <strong className="text-aubergine">100%: meals treated as pay.</strong>{' '}
                If you report the value of a meal as taxable wages to the
                employee, you deduct it as compensation.
              </li>
              <li>
                <strong className="text-aubergine">0%: entertainment.</strong>{' '}
                Since 2018, tickets, golf, nightclubs and similar activities
                are not deductible at all, even with a client and even if you
                talked about nothing but invoices.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              One more thing that is now zero, which surprises people: the
              100% deduction for restaurant meals. That was a temporary
              pandemic rule for 2021 and 2022. It ended, quietly, the way most
              good things in the tax code do, and nobody sent a card.
            </p>
          </div>
        </Section>

        {/* BODY SECTION 4 */}
        <Section background="cream" id="what-changed-in-2026">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What changed in 2026: meals for staff at the office
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the part most older articles miss. Starting with 2026,{' '}
              <SourceLink href="https://www.law.cornell.edu/uscode/text/26/274">
                section 274(o)
              </SourceLink>{' '}
              denies any deduction for two kinds of employee food that used to
              be partly or fully deductible:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Meals for your convenience, on your premises.</strong>{' '}
                Meals you furnish to employees at your place of business so
                they can keep working, the kind that are tax-free to the
                employee under section 119. Those went from 50% to zero.
              </li>
              <li>
                <strong className="text-aubergine">An employer-run eating facility.</strong>{' '}
                The costs of running a company cafeteria, and the food
                associated with it, are no longer deductible either.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              There are narrow exceptions, mainly for crews on certain vessels
              and offshore rigs, and for food employees pay full price for. The
              2025 tax law added to those exceptions, but none of them help a
              typical office, shop or studio.
            </p>
            <p className="mt-4 text-body text-graphite">
              What did not change: ordinary office snacks and coffee that are
              not tied to a company cafeteria are generally still 50%
              deductible, and the holiday party is still 100%. So the break
              room coffee survives. It has been through worse, judging by the
              taste.
            </p>
            <p className="mt-4 text-body text-graphite">
              If you regularly feed a crew &mdash; think a restaurant feeding
              staff, or a shop that buys lunch every day during a busy season
              &mdash; this is worth a real conversation, because the right
              answer depends on how the meals are set up. It ties directly into{' '}
              <Link href="/blog/how-to-do-payroll-for-a-small-business" className={linkClass}>
                how you run payroll
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* BODY SECTION 5 */}
        <Section background="ivory" id="travel-and-entertainment">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Travel meals, conferences and the ballgame problem
            </h2>
            <p className="mt-4 text-body text-graphite">
              When you travel away from your tax home overnight for business,
              your own meals become deductible even if you eat alone.
              According to{' '}
              <SourceLink href="https://www.irs.gov/publications/p463">
                IRS Publication 463
              </SourceLink>
              , you can use the actual cost or the federal standard meal
              allowance, and either way you generally deduct 50%. The daily
              rates vary by city and change each year, so look them up for the
              trip rather than guessing.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Truck drivers and other DOT workers get 80%.</strong>{' '}
                If you are subject to the Department of Transportation&rsquo;s
                hours-of-service limits, such as interstate truck and bus
                drivers, you can deduct 80% of meals while away from home.
              </li>
              <li>
                <strong className="text-aubergine">Conference meals are 50%.</strong>{' '}
                Meals at a business convention or trade group meeting fall
                under the normal rule.
              </li>
              <li>
                <strong className="text-aubergine">The ballgame problem.</strong>{' '}
                Take a client to a game and the tickets are entertainment, so
                zero. Hot dogs bought separately at the stand are a meal, so
                50%. If the suite ticket includes food and the invoice
                doesn&rsquo;t list the food separately, the IRS treats all of
                it as entertainment. Ask for an itemized invoice. It is the
                most valuable thing you will ever request from a stadium.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Mixing business and pleasure on a trip has its own rules for
              airfare and hotel. The meals logic stays the same: on business
              days, 50%; on the beach day you added at the end, they are just
              vacation meals, however much you checked email.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/sorting-receipts-calculator.webp`}
              alt="Overhead view of a light wooden desk with a calculator, a notebook, dollar bills and a spread of white and orange paper receipts being sorted by hand"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY SECTION 6 */}
        <Section background="cream" id="records">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The records that make a meal deduction stick
            </h2>
            <p className="mt-4 text-body text-graphite">
              Meals are one of the categories the IRS holds to stricter proof.
              Publication 463 says you generally don&rsquo;t need a receipt for
              a meal under $75, but no receipt is not the same as no record.
              For every business meal, you need:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">1. The amount.</strong>{' '}
                Including tax and tip.
              </li>
              <li>
                <strong className="text-aubergine">2. The date and the place.</strong>{' '}
                For meals of $75 or more, the receipt should show the
                restaurant&rsquo;s name and location, the number of people
                served, and the date and amount.
              </li>
              <li>
                <strong className="text-aubergine">3. The business purpose.</strong>{' '}
                What you discussed or expected to gain, in one plain sentence.
              </li>
              <li>
                <strong className="text-aubergine">4. Who you ate with.</strong>{' '}
                Their name and their business relationship to you.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              The habit that covers all four takes about eight seconds: before
              you leave the table, write the name and the purpose on the
              receipt, then photograph it. &ldquo;Coffee with Dana Ortiz,
              quote for storefront signage&rdquo; is evidence. A crumpled
              receipt in a glovebox is a memory test you will fail in 14
              months.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is the honest part. If you have a handful of client
              lunches a year, you don&rsquo;t need an accountant for this.
              Write the purpose on the receipt, put it in a &ldquo;Meals&rdquo;
              category in your software, and enter half of the total at tax
              time. Our wider guide to{' '}
              <Link href="/blog/small-business-tax-deductions" className={linkClass}>
                small business tax deductions
              </Link>{' '}
              covers the rest of the list the same way.
            </p>
            <p className="mt-4 text-body text-graphite">
              Where it gets worth paying for help is when meals are a real
              line in your budget, when employees put meals on company cards,
              or when you feed staff regularly and the 2026 rules apply.
              That&rsquo;s the kind of thing our{' '}
              <Link href="/services" className={linkClass}>
                monthly bookkeeping and tax services
              </Link>{' '}
              sort out as it happens, rather than in a panic in March.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-sloppy-records">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What a pile of unlabeled receipts actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Say you spend $150 a month on client coffees and lunches. That
              is $1,800 a year, and a $900 deduction. At an illustrative
              combined tax rate of 30%, the deduction is worth about $270 a
              year in tax.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Now say you never wrote down who any of it was with. If the IRS
              asks and you can&rsquo;t show a business purpose, the whole $900
              can be disallowed. You owe the $270 back, plus interest, and in
              some cases a 20% accuracy-related penalty on top. Three years of
              that and you have paid real money for coffee you already paid
              for once.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The opposite mistake costs too. Deduct the full $1,800 instead
              of half, and you have overstated the deduction by $900 every
              year. Either way, the fix costs eight seconds per receipt. It is
              the cheapest tax planning there is.
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
              href: '/blog/small-business-tax-deductions',
              eyebrow: 'Deductions',
              title: 'Small business tax deductions that hold up in 2026',
              blurb: 'The one IRS test every write-off has to pass, from home office to mileage.',
            },
            {
              href: '/blog/how-to-calculate-food-cost-percentage',
              eyebrow: 'Restaurants',
              title: 'How to calculate food cost percentage',
              blurb: 'For the businesses where food is the product, not the lunch meeting.',
            },
            {
              href: '/blog/do-i-need-an-accountant-for-your-small-business',
              eyebrow: 'Getting help',
              title: 'Do you need an accountant for your small business?',
              blurb: 'An honest look at when software is enough and when it is not.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Want someone else to deal with the glovebox?
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
