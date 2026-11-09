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

const SLUG = 'small-business-tax-deductions';
const TITLE = 'Small Business Tax Deductions That Hold Up in 2026';
const DESCRIPTION =
  'Small business tax deductions for 2026, plainly explained: the IRS test, meals, home office, car mileage, equipment, and the records that keep each one safe.';
const PUBLISHED = '2026-11-09';
const MODIFIED = '2026-11-09';
const HERO = `/blog/${SLUG}/hero-calculator-receipts-pile.webp`;

const TOC = [
  { id: 'the-test', label: 'The one test every deduction has to pass' },
  { id: 'everyday-write-offs', label: 'The everyday write-offs you probably already have' },
  { id: 'car', label: 'Can you write off your car for business?' },
  { id: 'meals-and-receipts', label: 'Business meals, and the receipt myth' },
  { id: 'big-purchases', label: 'Big purchases and the $2,500 rule' },
  { id: 'home-office', label: 'The home office deduction requirements' },
  { id: 'cost', label: 'What a missed deduction actually costs' },
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
        alt: 'Hands using a pink calculator on top of a spread of paper receipts and printed invoices',
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
    q: 'What tax deductions can self-employed individuals take advantage of?',
    a: "Self-employed people can deduct ordinary and necessary business expenses such as supplies, software, the business share of phone and internet, contract labor, insurance, advertising, professional fees, business mileage and 50% of qualifying business meals. They can also deduct half of their self-employment tax, self-employed health insurance premiums if they qualify, retirement plan contributions, and a home office that meets the IRS tests. Many also qualify for the qualified business income deduction of up to 20% of qualified business income.",
  },
  {
    q: 'Can I claim up to $300 without receipts?',
    a: "No. There is no IRS rule that lets a business deduct $300 without records. For travel, meal, gift and car expenses, IRS Publication 463 says you generally do not need a receipt for an expense under $75 other than lodging, but you still need a record of the amount, date, place and business purpose. Every business deduction has to be supported if the IRS asks.",
  },
  {
    q: 'What is the most overlooked tax break?',
    a: "For small businesses, the most commonly missed deductions are business mileage that was never logged, the home office deduction, half of self-employment tax, and the qualified business income deduction of up to 20% of qualified business income. The common thread is records: a deduction you cannot document is a deduction you cannot safely take.",
  },
  {
    q: 'What is the $2,500 expense rule?',
    a: "The $2,500 rule is the IRS de minimis safe harbor. A business without an applicable financial statement can elect to deduct tangible property costing up to $2,500 per invoice or item right away instead of depreciating it, as long as it treats the purchase the same way in its books. The election is made by attaching a statement to a timely filed return each year.",
  },
  {
    q: 'How much of a business meal can I deduct?',
    a: "You can generally deduct 50% of the cost of a business meal. The meal must not be lavish or extravagant, you or an employee must be present, and the food must be provided to a current or potential customer, client, consultant or similar business contact. Entertainment, such as event tickets, is generally not deductible.",
  },
  {
    q: 'What are the home office deduction requirements?',
    a: "To claim the home office deduction, you must use part of your home regularly and exclusively for business, and it must be your principal place of business or a place where you meet clients or customers. Doing administrative work there counts if you have no other fixed location for it. Storage of inventory and daycare use are exceptions to the exclusive-use rule.",
  },
  {
    q: 'Can I write off my car for business?',
    a: "Yes, you can deduct the business use of a car you use in your business, using either the standard mileage rate or your actual expenses for the business share. Commuting between home and a regular workplace is not deductible. You need a log showing dates, miles and the business purpose of each trip.",
  },
  {
    q: 'What is the standard mileage rate for 2026?',
    a: "The IRS business standard mileage rate for 2026 is 72.5 cents per mile for January 1 through June 30, and 76 cents per mile for July 1 through December 31. Miles driven in each half of the year use that period's rate, which is one more reason to keep a dated mileage log.",
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
              <time dateTime={PUBLISHED}>November 9, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 9, 2026</time>
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
              alt="Hands using a pink calculator on top of a spread of paper receipts and printed invoices"
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
                <strong>Short answer:</strong> Small business tax deductions
                cover any business expense that is both ordinary and necessary
                for your trade, as the IRS puts it. The big ones are supplies
                and software, contract labor, business mileage at 72.5 cents a
                mile for the first half of 2026 and 76 cents for the second,
                50% of business meals, a qualifying home office, equipment,
                half of self-employment tax, and the qualified business income
                deduction of up to 20%.
              </p>
              <p className="mt-4 text-body text-graphite">
                The honest caveat: a deduction is only as good as the record
                behind it. The list is the easy part. The proof is where people
                lose money.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Sunday in late November and Rosa &mdash; I&rsquo;ll
              call her Rosa &mdash; is sitting in the driver&rsquo;s seat of her
              mobile dog-grooming van, parked in her own driveway, because the
              van is where the paperwork lives. The glovebox holds receipts in
              no particular order, a tin of dog treats, and a spiral mileage
              notebook whose last entry is from March. After March, apparently,
              the van drove itself.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t careless. She was busy, which is the same thing
              as successful from the outside and the same thing as careless
              from the IRS&rsquo;s side of the desk.
            </p>
            <p className="mt-4 text-body text-graphite">
              This guide is for Rosa, and for anyone else whose deductions are
              currently living in a glovebox. We&rsquo;ll go through what
              actually counts, what the 2026 numbers are, and what each one
              needs on paper so it survives a question from the IRS. Every rule
              here is sourced to the IRS itself, not to a forum thread.
            </p>
          </div>
        </Section>

        {/* BODY SECTION 1 */}
        <Section background="ivory" id="the-test">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The one test every deduction has to pass
            </h2>
            <p className="mt-4 text-body text-graphite">
              Before any list of write-offs, there is one test, and every
              expense goes through it. The IRS says in{' '}
              <SourceLink href="https://www.irs.gov/publications/p334">
                Publication 334, its tax guide for small business
              </SourceLink>
              , that a business expense must be both ordinary and necessary.
              Ordinary means common and accepted in your field. Necessary means
              helpful and appropriate for your business. It does not have to be
              indispensable.
            </p>
            <p className="mt-4 text-body text-graphite">
              Think of it as a bouncer with a short list of questions. Would
              other people in your line of work spend money on this? Does it
              help you earn the money you report? The bouncer is not impressed
              by how badly you wanted the thing, which is why your streaming
              subscription, however much it helps you decompress after a long
              day of grooming poodles, does not get in.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Mixed-use items get split, not guessed.
                </strong>{' '}
                If your phone is 60% business, 60% of the bill is the
                deduction, and you should be able to say how you arrived at 60.
              </li>
              <li>
                <strong className="text-aubergine">
                  Personal expenses stay personal even when paid from the
                  business account.
                </strong>{' '}
                Paying for groceries with the business card does not make
                groceries a business expense. It just makes your bookkeeping
                sadder.
              </li>
              <li>
                <strong className="text-aubergine">
                  The expense has to be yours and paid in the right year.
                </strong>{' '}
                Which year depends on your accounting method, which we unpack
                in{' '}
                <Link
                  href="/blog/difference-between-cash-and-accrual-accounting"
                  className={linkClass}
                >
                  our guide to cash versus accrual accounting
                </Link>
                .
              </li>
            </ul>
          </div>
        </Section>

        {/* BODY SECTION 2 */}
        <Section background="cream" id="everyday-write-offs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The everyday write-offs you probably already have
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most of what a small business deducts is unglamorous. It is the
              stuff you pay for every month without thinking about it, which is
              exactly why it gets missed: nobody remembers to write down the
              thing that happens automatically.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Software and subscriptions.</strong>{' '}
                Invoicing tools, scheduling apps, cloud storage, your website
                hosting.
              </li>
              <li>
                <strong className="text-aubergine">
                  The business share of phone and internet.
                </strong>{' '}
                Split by actual use, as above.
              </li>
              <li>
                <strong className="text-aubergine">Supplies and materials.</strong>{' '}
                For Rosa, shampoo, clippers, towels and a truly heroic quantity
                of dog treats.
              </li>
              <li>
                <strong className="text-aubergine">Contract labor.</strong>{' '}
                Payments to freelancers and subcontractors, which may also
                trigger a 1099 &mdash; see{' '}
                <Link href="/blog/who-gets-a-1099" className={linkClass}>
                  who gets a 1099
                </Link>{' '}
                before January.
              </li>
              <li>
                <strong className="text-aubergine">
                  Insurance, advertising, bank and card fees.
                </strong>{' '}
                Including the processing fee your payment app quietly took off
                every transaction.
              </li>
              <li>
                <strong className="text-aubergine">Professional fees.</strong>{' '}
                Legal, bookkeeping and tax preparation for the business. Yes,
                that includes accountants. We are, technically, a write-off,
                and we try not to let it go to our heads.
              </li>
              <li>
                <strong className="text-aubergine">
                  The deductions that live on page one of your return.
                </strong>{' '}
                Half of your self-employment tax, self-employed health
                insurance premiums if you qualify, and contributions to a
                retirement plan for yourself.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              One more that is easy to forget because it is not an expense at
              all: the{' '}
              <SourceLink href="https://www.irs.gov/newsroom/qualified-business-income-deduction">
                qualified business income deduction
              </SourceLink>
              , which lets many sole proprietors, partners and S corporation
              owners deduct up to 20% of their qualified business income,
              subject to income limits. It is calculated on the return, not
              earned with receipts, so it is less of a hunt and more of a
              &ldquo;make sure whoever files your return actually claims
              it.&rdquo;
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/laptop-notebook-car-key.webp`}
              alt="An open laptop on a white desk beside a spiral notebook, a stack of envelopes and a car key on a leather fob"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY SECTION 3 */}
        <Section background="ivory" id="car">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Can you write off your car for business?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Yes, for the business share of its use. You pick one of two
              methods: the standard mileage rate, or your actual costs (gas,
              insurance, repairs, depreciation and so on) multiplied by your
              business-use percentage. The standard rate is simpler and is what
              most small businesses use.
            </p>
            <p className="mt-4 text-body text-graphite">
              2026 has a wrinkle that is easy to miss. The IRS{' '}
              <SourceLink href="https://www.irs.gov/tax-professionals/standard-mileage-rates">
                standard mileage rates page
              </SourceLink>{' '}
              shows two business rates this year: 72.5 cents a mile from January
              1 through June 30, and 76 cents a mile from July 1 through
              December 31. Your miles have to be sorted into the right half of
              the year, which is easy with a dated log and impossible with a
              notebook that stops in March.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Commuting does not count.</strong>{' '}
                Driving from home to your regular place of business is personal,
                even if you think about work the whole way there.
              </li>
              <li>
                <strong className="text-aubergine">
                  Trips between clients, suppliers and job sites do count.
                </strong>{' '}
                For a mobile business like Rosa&rsquo;s, that can be most of
                the driving.
              </li>
              <li>
                <strong className="text-aubergine">The log is the deduction.</strong>{' '}
                Date, starting point, destination, miles and business purpose.
                A phone app that records trips automatically is the single
                best purchase most driving businesses can make.
              </li>
            </ul>
          </div>
        </Section>

        {/* BODY SECTION 4 */}
        <Section background="cream" id="meals-and-receipts">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Business meals, and the receipt myth
            </h2>
            <p className="mt-4 text-body text-graphite">
              Business meals are deductible at 50%, not 100%. According to{' '}
              <SourceLink href="https://www.irs.gov/publications/p463">
                IRS Publication 463
              </SourceLink>
              , the meal cannot be lavish, you or an employee has to be there,
              and it has to be with a current or potential customer, client,
              consultant or similar business contact. Lunch alone at your desk
              is just lunch, however hard you were thinking.
            </p>
            <p className="mt-4 text-body text-graphite">
              Entertainment is a separate category, and since 2018 it is
              generally not deductible at all. The dinner with a client can
              qualify; the concert tickets you bought for the same client
              cannot. The concert was probably more fun, which feels like the
              point.
            </p>
            <p className="mt-4 text-body text-graphite">
              Now the myth. A lot of people believe there is a rule that you
              can claim up to $300 without receipts. There isn&rsquo;t. What
              Publication 463 actually says is narrower: for travel, meals,
              gifts and car expenses, you generally don&rsquo;t need a receipt
              for an expense under $75, other than lodging. You still need a
              record of the amount, the date, the place and the business
              purpose. No receipt is not the same as no record.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Write the purpose on it.</strong>{' '}
                &ldquo;Lunch with Dan, quote for kennel cleaning contract&rdquo;
                takes eight seconds and turns a receipt into evidence.
              </li>
              <li>
                <strong className="text-aubergine">Photograph, then file.</strong>{' '}
                Thermal-paper receipts fade. We have strong feelings about
                receipt apps, and we are aware nobody at a party has ever asked
                to hear them.
              </li>
            </ul>
          </div>
        </Section>

        {/* BODY SECTION 5 */}
        <Section background="ivory" id="big-purchases">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Big purchases and the $2,500 rule
            </h2>
            <p className="mt-4 text-body text-graphite">
              When you buy something that lasts more than a year &mdash; a
              laptop, a grooming table, a van &mdash; the default rule is that
              you deduct it over several years through depreciation. That is
              the tax code&rsquo;s way of saying &ldquo;you didn&rsquo;t use up
              the whole table this year, so you don&rsquo;t get to deduct the
              whole table this year.&rdquo; Fair, and also slightly
              disappointing, like being told to save half your birthday cake.
            </p>
            <p className="mt-4 text-body text-graphite">
              There are three ways around the wait:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. The de minimis safe harbor, better known as the $2,500
                  rule.
                </strong>{' '}
                Under the IRS{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/tangible-property-final-regulations">
                  tangible property regulations
                </SourceLink>
                , a business without audited financial statements can elect to
                deduct items costing up to $2,500 per invoice or item right
                away, as long as it expenses them in its own books too. You make
                the election each year with a short statement attached to a
                timely filed return.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Section 179 expensing.
                </strong>{' '}
                Lets you deduct the cost of qualifying equipment in the year
                you put it into service, up to an annual limit that is far above
                what most small businesses spend. The limits change each year,
                so confirm the current number before you plan around it.
              </li>
              <li>
                <strong className="text-aubergine">3. Bonus depreciation.</strong>{' '}
                A separate route to writing off qualifying property faster.
                Which of the three fits best depends on your income this year
                versus next year, and this is one of the places where an
                hour of planning before December is worth more than an hour of
                filing in April.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              One warning that saves people every year: buying something you do
              not need to get a deduction is spending a dollar to save a
              fraction of a dollar. A deduction reduces your taxable income; it
              does not refund the purchase.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/sunlit-home-office-desk.webp`}
              alt="A sunlit home office with a laptop and a large monitor on a wooden desk in front of tall paned windows"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY SECTION 6 */}
        <Section background="cream" id="home-office">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The home office deduction requirements
            </h2>
            <p className="mt-4 text-body text-graphite">
              The home office deduction has a reputation for triggering audits,
              which scares people off a deduction they are entitled to. The
              requirements are specific rather than scary. Per{' '}
              <SourceLink href="https://www.irs.gov/taxtopics/tc509">
                IRS Topic 509
              </SourceLink>
              , the space must be used:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Regularly and exclusively for business.</strong>{' '}
                The spare room that is an office on weekdays and a guest room
                at Thanksgiving fails the exclusive test. So does the kitchen
                table, sadly, no matter how many invoices it has seen.
              </li>
              <li>
                <strong className="text-aubergine">
                  As your principal place of business, or where you meet
                  clients.
                </strong>{' '}
                Doing your administrative and management work there counts if
                you have no other fixed location where you do it. That covers
                Rosa: she grooms in the van but does her booking and billing at
                home.
              </li>
              <li>
                <strong className="text-aubergine">Exceptions:</strong>{' '}
                storing inventory or product samples when your home is your
                only fixed business location, and daycare use, do not need
                exclusive use.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              You can calculate it two ways. The actual-expense method takes
              the office&rsquo;s share of rent or mortgage interest, utilities,
              insurance and repairs. The{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/simplified-option-for-home-office-deduction">
                simplified option
              </SourceLink>{' '}
              is $5 per square foot for up to 300 square feet, so a maximum of
              $1,500. Fewer records, smaller number.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is the part where we argue against ourselves. If you are a
              sole proprietor with one income stream, a phone, a laptop, no
              employees and no car in the business, good software and a
              disciplined receipt folder will capture nearly everything on this
              page. You probably don&rsquo;t need an accountant for that.
              Where we earn our fee is the in-between: mixed-use vehicles,
              equipment timing, contractors, and books that have drifted. That
              is what{' '}
              <Link href="/services" className={linkClass}>
                our bookkeeping and tax services
              </Link>{' '}
              are built for, at{' '}
              <Link href="/pricing" className={linkClass}>
                flat monthly prices starting at $299
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What a missed deduction actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Back to the glovebox. Say Rosa drives 9,000 business miles in
              2026, split evenly across the year. That is 4,500 miles at 72.5
              cents, or $3,262.50, plus 4,500 miles at 76 cents, or $3,420. A
              mileage deduction of $6,682.50.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Now say her notebook only supports the miles through March. If
              she can document 2,000 miles, she can claim $1,450. The other
              $5,232.50 of deduction exists in real life and nowhere on paper.
              At an illustrative combined federal income and self-employment
              tax rate of 25%, that is roughly $1,300 of tax she pays for the
              privilege of not writing things down. Your rate will differ; the
              shape of the arithmetic will not.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              And that is one category. Add the meals without a purpose noted,
              the subscriptions nobody tagged, and the half of self-employment
              tax that a rushed return forgot, and the cost of a disorganized
              year is usually larger than the cost of getting organized. The
              cheapest fix is the boring one: a log that does not stop in
              March.
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
              href: '/blog/do-you-have-to-claim-venmo-on-taxes',
              eyebrow: 'Blog',
              title: 'Do You Have to Claim Venmo on Taxes?',
              blurb:
                'The income side of the same ledger: what counts, what the 1099-K means, and what does not.',
            },
            {
              href: '/blog/when-should-i-start-my-taxes',
              eyebrow: 'Blog',
              title: 'When Should I Start My Taxes?',
              blurb:
                'Why the best time to gather deductions is before the year ends, not after.',
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
              Want your deductions out of the glovebox?
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
