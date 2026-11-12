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

const SLUG = 'how-to-calculate-food-cost-percentage';
const TITLE = 'How to Calculate Food Cost Percentage, With Examples';
const DESCRIPTION =
  'How to calculate food cost percentage: the formula, a worked month, plate costs and menu prices, what a good number is, and where it lands on your tax return.';
const PUBLISHED = '2026-11-12';
const MODIFIED = '2026-11-12';
const HERO = `/blog/${SLUG}/hero-restaurant-kitchen-prep-table-evening.webp`;

const TOC = [
  { id: 'food-cost-formula', label: 'The food cost percentage formula' },
  { id: 'worked-example', label: 'A worked example: one month, start to finish' },
  { id: 'plate-cost', label: 'Food cost per plate, and pricing the menu' },
  { id: 'good-food-cost', label: 'What is a good food cost percentage?' },
  { id: 'books-and-taxes', label: 'Where food cost lives in your books and on your tax return' },
  { id: 'diy-or-help', label: 'A spreadsheet, software, or an accountant' },
  { id: 'cost-of-not-counting', label: 'What a few points of food cost really cost' },
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
        alt: 'A dim restaurant kitchen in the evening with a wooden prep table holding trays of ingredients, a grill and steel shelving behind',
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
    q: 'What is the formula for food cost percentage?',
    a: 'Food cost percentage equals beginning inventory plus purchases minus ending inventory, divided by food sales, times 100. The top half of that formula is the cost of the food you actually used during the period. Dividing it by the food sales for the same period tells you what share of every sales dollar went to ingredients.',
  },
  {
    q: 'What is a good food cost percentage for a restaurant?',
    a: 'Many restaurants aim for roughly 28% to 35% of food sales, and around 30% is the most commonly quoted target. Quick-service and pizza concepts often run lower, while steakhouses and seafood-heavy menus often run higher. The right target for you depends on your labor, rent and profit goal, so treat the industry range as a starting point rather than a rule.',
  },
  {
    q: 'What is the 30% rule for food cost?',
    a: 'The 30% rule is a pricing shortcut: set a menu price so the ingredients cost about 30% of it. To use it, divide the plate cost by 0.30. A dish that costs $3.85 in ingredients would be priced at about $12.83, which most owners would round to $12.95 or $13.',
  },
  {
    q: 'Does food cost include drinks and packaging?',
    a: 'Most restaurants track beverage cost separately from food cost, because drinks usually carry very different margins. Packaging and to-go containers can be tracked separately or included in food cost, but you must treat them the same way every period. A percentage that mixes categories one month and splits them the next cannot be compared.',
  },
  {
    q: 'How often should I calculate food cost percentage?',
    a: 'Weekly is ideal for most restaurants, and monthly is the minimum. Each calculation needs a real ending inventory count, because estimated counts make the number meaningless. Count the same items on the same day of the week, ideally before deliveries arrive.',
  },
  {
    q: 'What is the difference between actual and ideal food cost?',
    a: 'Actual food cost is what the inventory formula says you really used. Ideal, or theoretical, food cost is what you should have used if every dish sold had been made exactly to its recipe, calculated from plate costs and the item counts in your point-of-sale system. The gap between the two is waste, over-portioning, comps, theft or recording errors.',
  },
  {
    q: 'What is prime cost in a restaurant?',
    a: 'Prime cost is cost of goods sold plus total labor cost, including payroll taxes and benefits. It is the largest controllable cost in most restaurants. A commonly quoted rule of thumb is to keep prime cost at or below about 60% to 65% of total sales.',
  },
  {
    q: 'Is food cost the same as cost of goods sold?',
    a: 'Food cost is usually the largest part of a restaurant\'s cost of goods sold, but cost of goods sold can also include beverages and other items bought for resale. On a sole proprietor\'s federal return, cost of goods sold is figured on lines 35 through 42 of Schedule C using beginning inventory, purchases and ending inventory, the same structure as the food cost formula.',
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
            <div className="section-eyebrow mb-3">For restaurant owners</div>
            <h1 className="font-display text-h1 text-aubergine">{TITLE}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-graphite/75">
              <time dateTime={PUBLISHED}>November 12, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 12, 2026</time>
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
              alt="A dim restaurant kitchen in the evening with a wooden prep table holding trays of ingredients, a grill and steel shelving behind"
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
                <strong>Short answer:</strong> To calculate food cost
                percentage, add your beginning inventory to your purchases,
                subtract your ending inventory, divide the result by your food
                sales for the same period, and multiply by 100. If you used
                $10,600 of food to make $34,000 of food sales, your food cost
                percentage is 31.2%.
              </p>
              <p className="mt-4 text-body text-graphite">
                The formula takes thirty seconds. The honest caveat is the
                ending inventory: the number is only as good as the count
                behind it, and a guessed count gives you a guessed percentage.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Sunday night after close and Marisol &mdash;
              I&rsquo;ll call her Marisol &mdash; is standing in her walk-in
              with a clipboard, a pen that only works upside down, and a
              case of avocados that cost noticeably more than the case she
              bought last month. She sold more tacos than ever this week. Her
              bank balance has not noticed.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t bad at running a restaurant. She&rsquo;s running
              it on feel, and feel can&rsquo;t see a price change on an
              invoice.
            </p>
            <p className="mt-4 text-body text-graphite">
              Food cost percentage is the number that turns &ldquo;it felt
              like a good week&rdquo; into something you can check. Below is
              the formula, a full month worked through, how to price a plate,
              what a good number looks like, and &mdash; the part the
              point-of-sale blogs skip &mdash; where all of this ends up on
              your tax return.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="food-cost-formula">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The food cost percentage formula
            </h2>
            <p className="mt-4 text-body text-graphite">
              There are two steps. First you work out how much food you
              actually used. Then you compare it with what that food earned.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Food used = beginning inventory + purchases &minus; ending
                  inventory.
                </strong>{' '}
                Beginning inventory is the dollar value of food on your
                shelves at the start of the period. Purchases are every food
                invoice during the period. Ending inventory is what is still
                on the shelves at the end, counted, not estimated.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Food cost percentage = food used &divide; food sales
                  &times; 100.
                </strong>{' '}
                Food sales means food only, for the same dates, before sales
                tax and tips. If your point-of-sale system lumps drinks in
                with food, split them out first.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              That is the same classic formula{' '}
              <SourceLink href="https://www.isbe.net/CTEDocuments/E-700029.pdf">
                taught in culinary programs
              </SourceLink>
              , and it is worth noticing why it uses inventory at all. Your
              purchases alone would tell you what you bought, not what you
              used. Buy a big order of rice on the 30th and a purchases-only
              number makes the month look like a disaster and the next month
              look like a miracle.
            </p>
            <p className="mt-4 text-body text-graphite">
              The inventory count is the step everyone wants to skip. It is
              cold, it is tedious, and someone always discovers a second,
              forgotten bag of shredded cheese behind the first one. Do it
              anyway &mdash; that bag is exactly the kind of thing the number
              exists to find.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="worked-example">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              A worked example: one month, start to finish
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is an illustrative month for a small taqueria. The
              numbers are made up but realistic in shape.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Beginning inventory:</strong>{' '}
                $6,200, from last month&rsquo;s ending count.
              </li>
              <li>
                <strong className="text-aubergine">Purchases:</strong>{' '}
                $9,800 of food invoices during the month.
              </li>
              <li>
                <strong className="text-aubergine">Ending inventory:</strong>{' '}
                $5,400, counted on the last night of the month.
              </li>
              <li>
                <strong className="text-aubergine">Food sales:</strong>{' '}
                $34,000, from the point-of-sale report, drinks excluded.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Food used is $6,200 + $9,800 &minus; $5,400 = $10,600. Divide
              by $34,000 and you get 0.312, or a food cost percentage of
              31.2%. Roughly 31 cents of every food dollar went to
              ingredients.
            </p>
            <p className="mt-4 text-body text-graphite">
              Two habits make this number trustworthy month after month.
              Count on the same day and at the same time, ideally before the
              morning delivery. And value the count at what you actually
              paid recently, not at the price you remember from when the
              restaurant opened &mdash; nostalgia is lovely, but it is not a
              valuation method.
            </p>
            <p className="mt-4 text-body text-graphite">
              Your ending inventory this month becomes next month&rsquo;s
              beginning inventory. Get one count wrong and you distort two
              months: one looks too good, the next too bad, and you spend a
              week blaming the cooks for a mistake made with a clipboard.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/prep-bowls-basil-tomato-steel-counter.webp`}
              alt="Prep bowls of basil, diced tomato and chopped chicken beside a tub of tomato sauce and a dish of grated cheese on a steel kitchen counter"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="plate-cost">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Food cost per plate, and pricing the menu
            </h2>
            <p className="mt-4 text-body text-graphite">
              The monthly percentage tells you how the kitchen did. The plate
              cost tells you whether a dish can ever do well, however
              carefully it is made.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Cost the recipe, one portion at a time.
                </strong>{' '}
                Three tacos might be 4.5 ounces of carnitas, six tortillas,
                onion, cilantro, salsa, a lime wedge and the side of rice and
                beans. Price each from your latest invoice and add them up.
                Say it comes to $3.85.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Include the things nobody thinks of as ingredients.
                </strong>{' '}
                Frying oil, the garnish, the free chips that arrive before
                anyone orders. Small per plate, large per year.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Divide by your target food cost percentage.
                </strong>{' '}
                At a 30% target, $3.85 &divide; 0.30 = $12.83. Round to a price
                that reads well on a menu, such as $12.95 or $13.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Check the plate cost against the current price.
                </strong>{' '}
                If the same plate is on the menu at $11, its food cost is 35%.
                Not a crime, but now you know which dish is quietly carrying
                the others less than you thought.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              Re-cost your top sellers whenever a key ingredient moves. The
              avocado is the classic example: its price can swing enough
              between seasons that a dish priced comfortably in spring is
              barely breaking even by autumn. The menu did not change. The
              invoice did.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="good-food-cost">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What is a good food cost percentage?
            </h2>
            <p className="mt-4 text-body text-graphite">
              The number you will hear most is around 30%, and many
              restaurants aim for somewhere between roughly 28% and 35% of
              food sales. Those are industry rules of thumb, not regulations,
              and they move with the concept.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Lower is normal</strong>{' '}
                for pizza, pasta, coffee and other menus built on cheap
                ingredients with a lot of labor or atmosphere added.
              </li>
              <li>
                <strong className="text-aubergine">Higher is normal</strong>{' '}
                for steak, seafood and anything where the ingredient is the
                whole point of the plate.
              </li>
              <li>
                <strong className="text-aubergine">Your own target</strong>{' '}
                comes from the rest of your numbers: what is left of sales
                after labor, rent and the profit you want. If labor is heavy,
                food cost has less room.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              That is why food cost is usually read alongside prime cost
              &mdash; food and drink cost plus total labor. A restaurant with
              a 34% food cost and lean labor can be healthier than one
              boasting 26% food cost while paying for a kitchen twice the
              size it needs.
            </p>
            <p className="mt-4 text-body text-graphite">
              Comparing your number with a neighbor&rsquo;s is a bit like
              comparing electric bills with someone whose house you have
              never seen. Compare yourself with last month instead. The
              trend tells you far more than the industry average does.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="books-and-taxes">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Where food cost lives in your books and on your tax return
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is the part most food cost guides leave out. The formula
              you just used is not only a kitchen metric. It is, almost line
              for line, how the IRS asks you to figure cost of goods sold.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  It is a line on Schedule C.
                </strong>{' '}
                If you file as a sole proprietor or single-member LLC,{' '}
                <SourceLink href="https://www.irs.gov/publications/p334">
                  IRS Publication 334
                </SourceLink>{' '}
                walks through figuring cost of goods sold on lines 35 to 42
                of Schedule C: inventory at the start of the year, plus
                purchases, minus inventory at the end. Partnerships and
                corporations report the same idea on their own returns.
              </li>
              <li>
                <strong className="text-aubergine">
                  Food you take home is not a business purchase.
                </strong>{' '}
                The same publication says merchandise withdrawn for personal
                or family use must be taken out of purchases. The steaks that
                went to your own grill on Sunday are a draw, not cost of goods
                sold.
              </li>
              <li>
                <strong className="text-aubergine">
                  Small businesses have a choice about inventory.
                </strong>{' '}
                Under the{' '}
                <SourceLink href="https://www.irs.gov/publications/p538">
                  small business taxpayer exception in IRS Publication 538
                </SourceLink>
                , a business under an inflation-indexed average gross
                receipts limit can skip formal tax inventories and follow the
                method used in its books instead. Almost every independent
                restaurant qualifies. Which option suits you is worth a
                conversation, because it can change the timing of your
                deductions.
              </li>
              <li>
                <strong className="text-aubergine">
                  Comps and staff meals need their own lines.
                </strong>{' '}
                Record them separately in your point-of-sale system. They
                push food cost percentage up without being waste, and the tax
                treatment of meals has its own rules.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              The practical upshot: a restaurant that counts inventory
              properly every month has already done most of the hard work for
              its tax return. The same count also feeds the{' '}
              <Link href="/blog/difference-between-cash-and-accrual-accounting" className={linkClass}>
                choice between cash and accrual accounting
              </Link>{' '}
              and shows up again when you sort out your other{' '}
              <Link href="/blog/small-business-tax-deductions" className={linkClass}>
                small business tax deductions
              </Link>
              . Count once, use the number three times &mdash; the kitchen
              version of buying in bulk.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/kitchen-scale-berries-almonds-overhead.webp`}
              alt="Overhead view of a steel kitchen scale holding raspberries and blackberries, surrounded by a halved avocado, strawberries, almonds and leafy greens on a wooden table"
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
              A spreadsheet, software, or an accountant
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is the honest version. If you run one location, you count
              inventory every week, and your invoices go into a spreadsheet
              the same day they arrive, you probably do not need us for food
              cost. A spreadsheet and a clipboard are enough.
            </p>
            <p className="mt-4 text-body text-graphite">
              Inventory software helps once the counting itself becomes the
              bottleneck &mdash; many items, several storage areas, more than
              one person counting. Most point-of-sale systems can also give
              you the item counts you need for an ideal food cost
              comparison.
            </p>
            <p className="mt-4 text-body text-graphite">
              It is time for restaurant accounting services when the number
              stops matching anything else. Common signs:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Your percentage swings</strong>{' '}
                several points month to month and nobody can say why.
              </li>
              <li>
                <strong className="text-aubergine">Invoices arrive by text</strong>,
                email, paper and occasionally inside a box of lemons.
              </li>
              <li>
                <strong className="text-aubergine">Your tax return disagrees</strong>{' '}
                &mdash; its cost of goods sold looks nothing like the food cost
                you track.
              </li>
              <li>
                <strong className="text-aubergine">You also run payroll</strong>,
                and{' '}
                <Link href="/blog/how-to-do-payroll-for-a-small-business" className={linkClass}>
                  doing payroll for a small business
                </Link>{' '}
                is already eating your Sunday nights.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              We keep the books current, match invoices to inventory, and
              hand you food cost and prime cost every month. Our{' '}
              <Link href="/services" className={linkClass}>
                bookkeeping and tax services
              </Link>{' '}
              cover the rest, and the{' '}
              <Link href="/pricing" className={linkClass}>
                flat monthly pricing
              </Link>{' '}
              starts at $299. We will admit we find a clean inventory
              reconciliation more exciting than most people find dessert.
              We are working on it.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-not-counting">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What a few points of food cost really cost
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Go back to the taqueria. Suppose the point-of-sale item counts
              and recipe costs say the month should have run at 28.5%, and
              the inventory count says it actually ran at 31.2%. That is a
              2.7-point gap.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              On $34,000 of food sales, 2.7 points is $918 for the month.
              Over a year, if nothing changes, that is about $11,000 &mdash;
              in over-portioned carnitas, avocados that went brown before
              anyone used them, and a supplier price increase nobody
              noticed.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              None of it shows up as a bill. It just shows up as a bank
              balance that never quite matches how busy the dining room
              felt. Counting does not fix any of it on its own. It just stops
              you from finding out once a year, at tax time, when the money
              is long gone.
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
              eyebrow: 'Accounting methods',
              title: 'The difference between cash and accrual accounting',
              blurb: 'Why the timing of your food invoices changes what your profit looks like.',
            },
            {
              href: '/blog/small-business-tax-deductions',
              eyebrow: 'Deductions',
              title: 'Small business tax deductions',
              blurb: 'The everyday write-offs, and the tests each one has to pass.',
            },
            {
              href: '/blog/how-to-do-payroll-for-a-small-business',
              eyebrow: 'Payroll',
              title: 'How to do payroll for a small business',
              blurb: 'The other half of prime cost, worked through one paycheck at a time.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Want someone else to do the counting math?
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
