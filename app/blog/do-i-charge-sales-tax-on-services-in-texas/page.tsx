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

const SLUG = 'do-i-charge-sales-tax-on-services-in-texas';
const TITLE = 'Do I Charge Sales Tax on Services in Texas? The Full List';
const DESCRIPTION =
  'Do I charge sales tax on services in Texas? Only if yours is one of 16 listed categories. What is taxed, what is not, the 5 percent rule and filing dates.';
const PUBLISHED = '2026-10-12';
const MODIFIED = '2026-10-12';
const HERO = `/blog/${SLUG}/hero-orange-lawn-mower-on-backyard-grass.webp`;

const TOC = [
  { id: 'the-list', label: 'Texas taxes services by list, not by logic' },
  { id: 'taxable-services', label: 'The 16 taxable service categories in plain English' },
  { id: 'not-taxable', label: 'Services Texas does not tax' },
  { id: 'homes-vs-businesses', label: 'Same job, different answer: homes versus businesses' },
  { id: 'five-percent-rule', label: 'Mixed invoices and the 5 percent rule' },
  { id: 'rate-permit-filing', label: 'The rate, the permit and the filing dates' },
  { id: 'what-guessing-wrong-costs', label: 'What guessing wrong costs a Texas service business' },
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
        alt: 'An orange and white push lawn mower standing on a freshly cut backyard lawn in front of a dark line of trees',
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
    q: 'Do I charge sales tax on services in Texas?',
    a: 'Only if your service falls in one of the 16 categories of taxable services listed in Texas Tax Code Section 151.0101. Services that are not on that list, such as accounting, legal work and most consulting, are not subject to Texas sales tax. If your service is on the list, you need a Texas sales and use tax permit and you collect state tax plus any local tax.',
  },
  {
    q: 'What services are taxable in Texas?',
    a: 'The Texas Comptroller lists 16 categories: amusement, cable television, credit reporting, data processing, debt collection, information, insurance, motor vehicle parking and storage, nonresidential real property repair and remodeling, personal property repair and maintenance, personal services, real property services, security, telecommunications, telephone answering, and utility transmission and distribution services. Each category covers many specific services, such as lawn care, janitorial work, pest control, locksmithing and appliance repair.',
  },
  {
    q: 'What services are not taxable in Texas?',
    a: 'Services that do not appear on the list of taxable services are not taxed. That includes professional services such as accounting, and the Comptroller states that the professional services of landscape designers and architects are not subject to sales tax. Labor to repair or remodel residential real property and labor for new construction are also not taxable.',
  },
  {
    q: 'Is labor taxable in Texas?',
    a: 'It depends on the job. All charges for labor and materials to repair, restore or remodel nonresidential real property are taxable, and so is repair of tangible personal property such as appliances and furniture. Labor to repair, remodel or restore residential real property is not taxable, and neither is labor for new construction.',
  },
  {
    q: 'Do I charge sales tax on lawn care in Texas?',
    a: 'Usually yes. Landscaping and lawn care, including mowing, trimming, planting and watering, are taxable real property services. There is an exception for a self-employed person who does the work personally, has no employees or partners, and had gross receipts from these services of $5,000 or less during the most recent four calendar quarters.',
  },
  {
    q: 'What is the sales tax rate on services in Texas?',
    a: 'Taxable services are taxed at the same rate as goods. Texas imposes a 6.25 percent state sales and use tax, and local jurisdictions can add up to 2 percent, for a maximum combined rate of 8.25 percent. For data processing and information services, 20 percent of the charge is exempt, so tax applies to 80 percent of the price.',
  },
  {
    q: 'Do I need a sales tax permit to sell services in Texas?',
    a: 'Yes, if you sell taxable services in Texas. The Comptroller requires a Texas sales and use tax permit for anyone engaged in business in Texas who sells taxable services. There is no fee for the permit, although you may be required to post a security bond.',
  },
  {
    q: 'When is Texas sales tax due?',
    a: 'Monthly filers report by the 20th of the month following the reporting month. Quarterly filers report by April 20, July 20, October 20 and January 20, and yearly filers by January 20. If the due date falls on a weekend or legal holiday, the next working day is the due date, and a return is required even when there were no taxable sales.',
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
              <time dateTime={PUBLISHED}>October 12, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 12, 2026</time>
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
              alt="An orange and white push lawn mower standing on a freshly cut backyard lawn in front of a dark line of trees"
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
                <strong>Short answer:</strong> Do I charge sales tax on services
                in Texas? Only if your service falls in one of the 16 categories
                of taxable services listed in Texas Tax Code Section 151.0101.
                Lawn care, janitorial work, pest control, security, data
                processing and repairs to nonresidential buildings are on the
                list. Accounting, legal work, most consulting and repair labor
                on a home are not.
              </p>
              <p className="mt-4 text-body text-graphite">
                If your service is on the list, you need a free Texas sales tax
                permit and you collect 6.25% state tax plus up to 2% local tax.
                If it is not on the list, you charge nothing. The hard cases are
                the businesses that do a bit of both.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s 9:40 on a Friday night and Renee &mdash; I&rsquo;ll
              call her Renee &mdash; is at her kitchen table in Garland with a
              laptop, a plate of brisket going cold, and three invoices she has
              to send before Monday. Her two-person crew mowed a
              homeowner&rsquo;s yard for $180. They rehung a sagging gate at
              that same house for $240. Then they rehung an identical sagging
              gate behind a dentist&rsquo;s office for $240.
            </p>
            <p className="mt-4 text-body text-graphite">
              Three jobs, one truck, one week. She has a feeling the tax answer
              is not the same for all three, and she is right. It is three
              different answers.
            </p>
            <p className="mt-4 text-body text-graphite">
              Renee isn&rsquo;t disorganized. She&rsquo;s running a business
              that Texas has quietly sorted into three separate drawers.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is how the drawers work, checked line by line against the
              Texas Comptroller&rsquo;s own publications, including what happens
              to those two gates.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="the-list">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Texas taxes services by list, not by logic
            </h2>
            <p className="mt-4 text-body text-graphite">
              Texas sales tax starts with goods. The state imposes a 6.25% tax
              on retail sales, leases and rentals of most goods, and then adds a
              specific set of services on top. The Comptroller&rsquo;s guide to{' '}
              <SourceLink href="https://comptroller.texas.gov/taxes/publications/96-259.php">
                taxable services
              </SourceLink>{' '}
              explains that the term is defined in Tax Code Section 151.0101,
              which names 16 broad categories.
            </p>
            <p className="mt-4 text-body text-graphite">
              That is the whole mechanism. Think of it as a guest list at a
              door. Texas does not ask how skilled the work was, how long it
              took, or whether it feels like the kind of thing that ought to be
              taxed. It checks whether your service is on the list.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  On the list: you collect tax.
                </strong>{' '}
                State tax plus whatever local tax applies, on the charge for the
                service.
              </li>
              <li>
                <strong className="text-aubergine">
                  Not on the list: you don&rsquo;t.
                </strong>{' '}
                There is no general sales tax on services in Texas, so an
                unlisted service is simply not taxed.
              </li>
              <li>
                <strong className="text-aubergine">
                  Some of each: you separate them.
                </strong>{' '}
                This is where most of the mistakes happen, and it gets its own
                section below.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              The reason people get this wrong is that the list is not
              intuitive. Nobody would guess, standing in a parking lot, that
              mowing is in and rehanging a homeowner&rsquo;s gate is out. You
              have to read it.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="taxable-services">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The 16 taxable service categories in plain English
            </h2>
            <p className="mt-4 text-body text-graphite">
              The category names are the Comptroller&rsquo;s. The translations
              are ours. Small service businesses mostly meet the first few.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Real property services.</strong>{' '}
                Pest control and extermination, garbage and waste removal,
                janitorial and custodial work, parking lot sweeping, landscaping
                and lawn care, and surveying.
              </li>
              <li>
                <strong className="text-aubergine">
                  Nonresidential real property repair, restoration or
                  remodeling.
                </strong>{' '}
                Rebuilding, replacing, altering or upgrading an existing
                business property. Labor and materials are both taxed.
              </li>
              <li>
                <strong className="text-aubergine">
                  Personal property maintenance, remodeling or repair.
                </strong>{' '}
                Appliance repair, furniture refurbishing and upholstering, shoe
                repair, jewelry repair or cleaning, and dog grooming.
              </li>
              <li>
                <strong className="text-aubergine">Security services.</strong>{' '}
                Anything that needs a private security license: locksmiths,
                private investigators, armored cars, and burglar alarm
                installation or monitoring.
              </li>
              <li>
                <strong className="text-aubergine">
                  Data processing and information services.
                </strong>{' '}
                Data entry, data storage, web hosting, check preparation,
                newsletters and database access. Twenty percent of the charge is
                exempt.
              </li>
              <li>
                <strong className="text-aubergine">Amusement services.</strong>{' '}
                Movies, concerts, sporting events, bowling alleys, fitness
                centers, sightseeing tours, online games and fortune telling.
              </li>
              <li>
                <strong className="text-aubergine">Personal services.</strong>{' '}
                A narrow one: massage parlors, Turkish baths and escort
                services. A massage by a licensed massage therapist or physical
                therapist is not taxed under this category.
              </li>
              <li>
                <strong className="text-aubergine">The remaining eight.</strong>{' '}
                Cable television, credit reporting, debt collection, insurance
                services, motor vehicle parking and storage, telecommunications,
                telephone answering, and utility transmission and distribution.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Read top to bottom, it has the feel of a small-town classifieds
              page: a locksmith, a dog groomer, an exterminator, and a fortune
              teller, who is taxable and presumably saw it coming.
            </p>
            <p className="mt-4 text-body text-graphite">
              Renee&rsquo;s first invoice is settled here. Mowing and trimming
              are lawn care, lawn care is a real property service, and the $180
              is taxable. It does not matter that the customer is a homeowner.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/cleaning-cart-in-brick-hallway.webp`}
              alt="A janitorial cart loaded with a mop, bucket and cleaning supplies parked against a brick wall beside a white office door in an empty hallway"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="not-taxable">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Services Texas does not tax
            </h2>
            <p className="mt-4 text-body text-graphite">
              Everything that is missing from the list. That turns out to be
              most of the professional world, plus a few carve-outs the
              Comptroller spells out by name.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Professional services that aren&rsquo;t listed.
                </strong>{' '}
                Accounting, legal work and consulting are not among the 16
                categories. The Comptroller even notes that an accountant using
                a computer to prepare financial statements is not selling data
                processing.
              </li>
              <li>
                <strong className="text-aubergine">Design work.</strong> The
                Comptroller&rsquo;s publication on{' '}
                <SourceLink href="https://comptroller.texas.gov/taxes/publications/94-112.php">
                  landscaping and lawn care services
                </SourceLink>{' '}
                says the professional services of landscape designers and
                architects are not subject to sales tax. Drawing the yard is
                not taxed. Planting it is.
              </li>
              <li>
                <strong className="text-aubergine">
                  Repair labor on a home.
                </strong>{' '}
                Labor to repair, remodel or restore residential real property
                is not taxable.
              </li>
              <li>
                <strong className="text-aubergine">
                  New construction labor.
                </strong>{' '}
                Building something new is not a repair, and the construction
                labor is not taxable. Adding new usable square footage to a
                business property is not treated as taxable remodeling either.
              </li>
              <li>
                <strong className="text-aubergine">
                  The smallest lawn businesses.
                </strong>{' '}
                Lawn care is exempt when a self-employed person does the work
                personally, has no employees or partners, and took in $5,000 or
                less from it over the most recent four calendar quarters.
              </li>
              <li>
                <strong className="text-aubergine">Internet access.</strong>{' '}
                Texas no longer taxes separately stated internet access charges.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Yes, accounting is on the not-taxed side. We checked that one
              first, and with a level of enthusiasm we don&rsquo;t usually bring
              to statute.
            </p>
            <p className="mt-4 text-body text-graphite">
              One caution on the lawn exemption: once receipts pass $5,000, you
              start collecting on the first day of the following quarter. And it
              disappears the day you hire help, which is why Renee, with one
              employee, does not get it.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="homes-vs-businesses">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Same job, different answer: homes versus businesses
            </h2>
            <p className="mt-4 text-body text-graphite">
              Now the two gates. Same hinges, same ninety minutes, same $240.
              The hinge has no idea what kind of building it is attached to.
              The Comptroller does, and it is the only thing that matters.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  The gate at the house: no tax on the labor.
                </strong>{' '}
                The Comptroller&rsquo;s guidance on{' '}
                <SourceLink href="https://comptroller.texas.gov/taxes/publications/94-116.php">
                  real property repair and remodeling
                </SourceLink>{' '}
                opens with the rule: labor to repair, remodel or restore
                residential real property is not taxable.
              </li>
              <li>
                <strong className="text-aubergine">
                  The gate at the dentist: the whole $240 is taxed.
                </strong>{' '}
                The total amount charged for remodeling, repairing or restoring
                nonresidential real property is taxable. Labor and materials,
                together.
              </li>
              <li>
                <strong className="text-aubergine">
                  &ldquo;Nonresidential&rdquo; is broader than offices.
                </strong>{' '}
                It covers businesses, farms, ranches, hospitals and parking
                lots. Family dwellings, including apartments, nursing homes and
                retirement homes, are residential.
              </li>
              <li>
                <strong className="text-aubergine">
                  Routine maintenance is a separate question.
                </strong>{' '}
                Scheduled, periodic maintenance on a business property is not
                treated as taxable repair, so a standing monthly upkeep contract
                and a one-off fix can land differently.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Materials on the residential job follow the contract. Under a
              lump-sum contract, one price for everything, Renee pays tax on the
              hinges at the supply store and charges the homeowner no tax. Under
              a separated contract, materials and labor priced apart, she buys
              the hinges with a resale certificate and collects tax from the
              customer on the materials only.
            </p>
            <p className="mt-4 text-body text-graphite">
              If you also work across state lines, do not carry these rules with
              you. Our guide to{' '}
              <Link href="/blog/is-labor-taxed-in-florida" className={linkClass}>
                whether labor is taxed in Florida
              </Link>{' '}
              shows a state that sorts the same work by a completely different
              test.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="five-percent-rule">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Mixed invoices and the 5 percent rule
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is the rule that turns a small oversight into a large one.
              When taxable and non-taxable services are sold for one combined
              price, Texas looks at how much of that price is the taxable part.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  5 percent or less: no tax on the bundle.
                </strong>{' '}
                If the taxable service is 5 percent or less of the overall
                contract price, you don&rsquo;t collect tax on it.
              </li>
              <li>
                <strong className="text-aubergine">
                  More than 5 percent: the total is taxable.
                </strong>{' '}
                The Comptroller&rsquo;s guidance on{' '}
                <SourceLink href="https://comptroller.texas.gov/taxes/publications/94-127.php">
                  data processing services
                </SourceLink>{' '}
                puts it plainly: your total charge is taxable unless you
                separately show the charges for taxable and non-taxable
                services.
              </li>
              <li>
                <strong className="text-aubergine">
                  Separate lines fix it.
                </strong>{' '}
                Show the two charges apart and you collect tax only on the
                taxable one.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              It works like one red sock in a white wash. The sock is a small
              share of the load, and everything comes out pink anyway.
            </p>
            <p className="mt-4 text-body text-graphite">
              Say Renee bills a homeowner one line: &ldquo;Yard design and
              planting, $1,000.&rdquo; The design is $600 and not taxable. The
              planting is $400 and taxable. Planting is 40% of the price, far
              past 5%, so the whole $1,000 is presumed taxable. At 8.25% that is
              $82.50 of tax instead of $33.00, and the only cause is a missing
              line break. The lawn care publication gives the same warning:
              state non-taxable charges separately.
            </p>
            <p className="mt-4 text-body text-graphite">
              The 20% exemption for data processing and information services is
              simpler. A $500 web hosting charge is taxed on 80% of it, which is
              $400.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/calculator-notepad-laptop-on-desk.webp`}
              alt="A pocket calculator in a leather folio with a blank lined notepad on a pale wooden desk, beside an open laptop and a stack of red and green folders"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="rate-permit-filing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The rate, the permit and the filing dates
            </h2>
            <p className="mt-4 text-body text-graphite">
              The mechanics are the easy half, and most single-trade Texas
              businesses can run them without an accountant. We keep saying
              things like that on this blog. Nobody in the office has taken the
              keyboard away yet.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  The rate is 6.25% plus up to 2%.
                </strong>{' '}
                The Comptroller&rsquo;s{' '}
                <SourceLink href="https://comptroller.texas.gov/taxes/sales/">
                  sales and use tax page
                </SourceLink>{' '}
                gives the state rate as 6.25% and lets local jurisdictions add
                up to 2%, for a maximum combined rate of 8.25%. Taxable services
                have no rate of their own.
              </li>
              <li>
                <strong className="text-aubergine">The permit is free.</strong>{' '}
                Anyone selling taxable services in Texas needs a sales and use
                tax permit. There is no fee, although you may be asked to post a
                security bond.
              </li>
              <li>
                <strong className="text-aubergine">
                  Reports are due on the 20th.
                </strong>{' '}
                Monthly filers report by the 20th of the following month.
                Quarterly filers report by April 20, July 20, October 20 and
                January 20. Yearly filers report by January 20.
              </li>
              <li>
                <strong className="text-aubergine">
                  A quiet quarter still gets a return.
                </strong>{' '}
                You are required to file even if there were no taxable sales in
                the period.
              </li>
              <li>
                <strong className="text-aubergine">
                  On time earns a small discount.
                </strong>{' '}
                Permitted taxpayers can keep 0.5% of the tax they report and pay
                on time. On $1,000 of tax, that is $5. Texas is thanking you
                with roughly one breakfast taco.
              </li>
              <li>
                <strong className="text-aubergine">
                  Out-of-state sellers get a threshold.
                </strong>{' '}
                Remote sellers with total Texas revenue under $500,000 in the
                preceding twelve calendar months are not required to hold a
                permit or collect.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              On Renee&rsquo;s week, at the 8.25% maximum: $14.85 on the mowing,
              $19.80 on the dentist&rsquo;s gate, and nothing on the
              homeowner&rsquo;s gate labor. That is $34.65 collected from
              customers and passed along, on $660 of work.
            </p>
            <p className="mt-4 text-body text-graphite">
              If you do one kind of work for one kind of customer, decide the
              rule once, set it in your invoicing app, and file on the
              state&rsquo;s own system. Help is worth paying for when you
              straddle the drawers: homes and businesses, design and
              installation, repairs and maintenance contracts. Selling goods
              online as well adds another layer, which we cover in{' '}
              <Link href="/blog/does-shopify-collect-sales-tax" className={linkClass}>
                does Shopify collect sales tax
              </Link>
              .
            </p>
            <p className="mt-4 text-body text-graphite">
              If that is you, our{' '}
              <Link href="/services" className={linkClass}>
                services page
              </Link>{' '}
              shows what we take on,{' '}
              <Link href="/pricing" className={linkClass}>
                our pricing
              </Link>{' '}
              is flat and published, and we work with owners around{' '}
              <Link href="/locations/dallas" className={linkClass}>
                Dallas
              </Link>{' '}
              remotely. For the multi-state picture, see our guide to{' '}
              <Link href="/blog/sales-tax-compliance-services" className={linkClass}>
                sales tax compliance services
              </Link>
              . Njock is an accountant, not a CPA or a Texas tax attorney; if
              you are already in a dispute with the Comptroller, we will tell
              you that you need one of those instead.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="what-guessing-wrong-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What guessing wrong costs a Texas service business
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The common mistake is the comfortable one: &ldquo;I sell labor,
              not products, so there is no sales tax.&rdquo; Suppose a lawn care
              business believes that on $60,000 of mowing a year. At 8.25%, that
              is $4,950 a year of tax nobody collected. Over three years it is
              $14,850.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The customers who should have paid it are not going to send a
              check for mowing done two summers ago, so it comes out of the
              business. Then the penalties stack on top: 5% if the tax is paid 1
              to 30 days late, 10% after that, $50 for each report filed after
              its due date, and interest beginning 61 days after the due date.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The mistake in the other direction costs less money and more
              goodwill: charging tax a homeowner never owed on gate labor, and
              having to explain the refund.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              None of this needs a clever fix. It needs one read of the list and
              an invoice with honest line breaks. Renee sent all three invoices
              before ten. Two with tax, one without, and the brisket reheated
              fine.
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
              href: '/blog/is-labor-taxed-in-florida',
              eyebrow: 'Blog',
              title: 'Is Labor Taxed in Florida? Repairs, Contractors, Services',
              blurb:
                'Florida sorts the same work by what you touched, and one free part can make a whole repair bill taxable.',
            },
            {
              href: '/locations/dallas',
              eyebrow: 'Locations',
              title: 'Accounting and tax help for Dallas small businesses',
              blurb:
                'Remote bookkeeping, tax and state filings for Dallas-area owners, at flat published prices.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure which drawer your service is in?
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
