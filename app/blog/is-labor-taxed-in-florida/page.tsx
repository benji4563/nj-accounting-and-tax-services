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

const SLUG = 'is-labor-taxed-in-florida';
const TITLE = 'Is Labor Taxed in Florida? Repairs, Contractors, Services';
const DESCRIPTION =
  'Is labor taxed in Florida? Repair labor is taxed once any part is used, most contractor labor on buildings is not, and only a few services are. With sources.';
const PUBLISHED = '2026-10-08';
const MODIFIED = '2026-10-08';
const HERO = `/blog/${SLUG}/hero-open-toolbox-wrenches-on-concrete-floor.webp`;

const TOC = [
  { id: 'what-you-worked-on', label: 'Florida taxes labor by what you worked on' },
  { id: 'repair-labor', label: 'Repair labor: one part makes the whole bill taxable' },
  { id: 'contractor-labor', label: 'Contractor labor on a house or building' },
  { id: 'taxable-services', label: 'The short list of services Florida does tax' },
  { id: 'rate-and-invoice', label: 'The rate, and how to write the invoice' },
  { id: 'when-to-diy', label: 'When you can sort this out yourself' },
  { id: 'what-guessing-wrong-costs', label: 'What guessing wrong costs a Florida shop' },
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
        alt: 'An open blue toolbox on a concrete floor filled with rows of wrenches, sockets and screwdrivers, with a pair of hands reaching for a socket',
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
    q: 'Is labor taxed in Florida?',
    a: 'It depends on what the labor was performed on. Labor to repair or install tangible personal property, such as a car or a free-standing appliance, is taxable when the repairer supplies any part or material. Labor-only repairs are not taxable if the records prove no parts were used, and labor on real property is generally not taxed to the customer.',
  },
  {
    q: 'Do you charge tax on labor for car repairs in Florida?',
    a: 'Yes, when the shop supplies any part or material. The Florida Department of Revenue says the total amount charged for the repair is taxable, labor included, and that this applies even if the shop does not charge for the part. A repair that used no parts or materials at all is not taxable if the shop documents it as labor only.',
  },
  {
    q: 'Is a labor-only repair taxable in Florida?',
    a: 'No. Charges for repairs to tangible personal property that need only labor or service are not taxable in Florida. The repairer must keep documentation proving that no tangible personal property was joined with or attached to the repaired item, such as an invoice marked "Labor Only".',
  },
  {
    q: 'Do contractors charge sales tax on labor in Florida?',
    a: 'Generally no. Under lump sum, cost plus, fixed fee, guaranteed price and time-and-materials contracts for real property, the contractor pays sales tax to suppliers on the materials and should not charge tax to the customer. Under a retail sale plus installation contract, the contractor charges the customer tax on the materials.',
  },
  {
    q: 'Is installation labor taxable in Florida?',
    a: 'It depends on what is installed. A business that provides and installs tangible personal property, such as a free-standing appliance, should charge sales tax on the full price including installation. Installing a fixture that becomes part of the building, such as a central air-conditioning unit or built-in cabinets, is treated as real property work and the customer is not charged tax on materials or labor.',
  },
  {
    q: 'What services are taxable in Florida?',
    a: 'Florida taxes only specific services. The Department of Revenue gives investigative and crime protection services, interior nonresidential cleaning services and nonresidential pest control services as examples of taxable services. Repairing or altering tangible personal property also requires a business to register to collect sales tax.',
  },
  {
    q: 'What is the sales tax rate on labor in Florida?',
    a: "Taxable labor is taxed at the same rate as any other taxable sale: Florida's general state rate of 6%, plus any discretionary sales surtax the county imposes. For a repair, the surtax is calculated at the rate of the county where the repair is done.",
  },
  {
    q: 'When is Florida sales tax due?',
    a: 'Florida sales and use tax returns and payments are due on the 1st and late after the 20th day of the month following each reporting period. A return must be filed for every reporting period, even if no tax is due. Most new businesses are set up to file quarterly.',
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
              <time dateTime={PUBLISHED}>October 8, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 8, 2026</time>
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
              alt="An open blue toolbox on a concrete floor filled with rows of wrenches, sockets and screwdrivers, with a pair of hands reaching for a socket"
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
                <strong>Short answer:</strong> Is labor taxed in Florida?
                Sometimes. Labor to repair or install tangible personal property,
                like a car or a free-standing appliance, is taxable whenever the
                repairer supplies any part or material. A repair that is truly
                labor only is not taxable, and labor on real property, like a
                roof or a driveway, is generally not taxed to the customer.
              </p>
              <p className="mt-4 text-body text-graphite">
                Florida has no general sales tax on services. It taxes a short
                list of specific services, and it taxes labor that comes attached
                to a sale of goods. Almost every question about labor comes down
                to which of those you are looking at.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s ten past four on a Thursday and Wes &mdash; I&rsquo;ll
              call him Wes &mdash; is sitting in his van in a customer&rsquo;s
              driveway in Tampa, air conditioning on full, writing up an invoice
              on his phone. The job was a washing machine that wouldn&rsquo;t
              drain. Ninety minutes of labor, $140. One hose clamp, which he
              found rolling around the floor of the van and isn&rsquo;t charging
              for.
            </p>
            <p className="mt-4 text-body text-graphite">
              His thumb is hovering over the tax field. He didn&rsquo;t sell
              anything. He fixed something. Surely you can&rsquo;t tax a man for
              knowing where the drain pump is.
            </p>
            <p className="mt-4 text-body text-graphite">
              Wes isn&rsquo;t being sloppy. He&rsquo;s asking a perfectly
              reasonable question that Florida happens to answer in an
              unreasonable number of parts.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here are those parts, in plain English, each one checked against
              the Florida Department of Revenue&rsquo;s own publications &mdash;
              including the bit about the free hose clamp, which matters more
              than Wes would like.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="what-you-worked-on">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Florida taxes labor by what you worked on
            </h2>
            <p className="mt-4 text-body text-graphite">
              Florida doesn&rsquo;t ask how hard you worked or how long it took.
              It asks what you touched. It&rsquo;s a bit like airline baggage
              fees: nobody at the counter cares how carefully you packed, only
              which category the bag falls into.
            </p>
            <p className="mt-4 text-body text-graphite">
              There are three categories, and every job lands in one of them:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Tangible personal property.
                </strong>{' '}
                Things that can be moved: cars, mowers, jewelry, furniture,
                phones, free-standing appliances. Labor here is taxable as soon
                as any part or material is involved.
              </li>
              <li>
                <strong className="text-aubergine">2. Real property.</strong>{' '}
                Land, buildings and whatever is permanently attached to them:
                roofs, driveways, tile, wiring, central air. The customer is
                generally not charged sales tax on this labor at all.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. A specifically taxed service.
                </strong>{' '}
                A handful of services Florida has chosen to tax by name, with or
                without any goods changing hands.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              If your work is none of the three &mdash; consulting, design,
              bookkeeping, teaching, most personal services &mdash; there is
              usually no sales tax on your labor in Florida. The rest of this
              guide is for everyone whose work involves a wrench, a ladder or a
              mop.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="repair-labor">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Repair labor: one part makes the whole bill taxable
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the rule that catches repair shops. The Department of
              Revenue&rsquo;s brochure on{' '}
              <SourceLink href="https://floridarevenue.com/Forms_library/current/brochure/gt800010.pdf">
                repairs to tangible personal property
              </SourceLink>{' '}
              says that when a repairer supplies any parts or materials, the
              total amount charged for the repair is taxable. Not the part. The
              total.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Parts plus labor: all of it is taxed.
                </strong>{' '}
                Say a mechanic bills $150 for an alternator and $150 for fitting
                it. Sales tax applies to $300, not $150. Splitting the two lines
                on the invoice does not split the tax.
              </li>
              <li>
                <strong className="text-aubergine">
                  A free part still counts.
                </strong>{' '}
                The same brochure says sales tax applies even if the repairer
                does not charge the customer for the parts or materials. Its own
                example is a $50 mower repair where the only material was a
                little lubricant on a stubborn bolt.
              </li>
              <li>
                <strong className="text-aubergine">
                  Labor only is not taxed.
                </strong>{' '}
                When a repair needs nothing but labor or service, the charge is
                not taxable. The brochure&rsquo;s example is a $25 bracelet
                clasp adjustment, invoiced with the notation &ldquo;Labor
                Only&rdquo; and kept in the jeweler&rsquo;s records.
              </li>
              <li>
                <strong className="text-aubergine">
                  Custom fabrication is taxed.
                </strong>{' '}
                Cutting, bending, welding, drilling or machining material into
                something new is fabrication, and the charge for it is taxable.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              So Wes&rsquo;s complimentary hose clamp, the one he was being
              generous about, has just made $140 of labor taxable. No good deed
              goes unassessed. Had he cleared the blockage by hand and attached
              nothing, the same ninety minutes would have been exempt.
            </p>
            <p className="mt-4 text-body text-graphite">
              A few edge cases from the same brochure: a repair paid for by the
              customer&rsquo;s insurance company is still taxable, and an item
              shipped into Florida, repaired and shipped back to its owner in
              another state is not.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/socket-set-tray-in-auto-shop.webp`}
              alt="A tray of chrome sockets and ratchet bits in sharp focus on a workbench, with a blurred auto repair shop floor behind it"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="contractor-labor">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Contractor labor on a house or building
            </h2>
            <p className="mt-4 text-body text-graphite">
              Real property works the other way around. The Department&rsquo;s
              guide to{' '}
              <SourceLink href="https://floridarevenue.com/forms_library/current/gt800067.pdf">
                construction, improvements, installations and repairs
              </SourceLink>{' '}
              treats the contractor, not the homeowner, as the final consumer of
              the materials.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Most contracts: no tax on the customer&rsquo;s bill.
                </strong>{' '}
                Under lump sum, cost plus, fixed fee, guaranteed price and
                time-and-materials contracts, the contractor pays sales tax to
                suppliers on everything bought and should not charge tax to the
                customer. The tax is already inside the price of the lumber.
              </li>
              <li>
                <strong className="text-aubergine">
                  The exception: retail sale plus installation.
                </strong>{' '}
                If the contract lists and prices every material before work
                begins and sells them to the customer separately from the
                installation, the contractor buys the materials tax-exempt and
                charges the customer tax on the materials.
              </li>
              <li>
                <strong className="text-aubergine">
                  Fixtures count as the building.
                </strong>{' '}
                Built-in cabinets, central air-conditioning units, furnaces,
                kitchen sinks and wired lighting are fixtures. The contractor
                pays tax on the materials and does not charge the customer tax
                on materials or labor.
              </li>
              <li>
                <strong className="text-aubergine">
                  Appliances depend on the plug.
                </strong>{' '}
                A free-standing residential appliance is tangible personal
                property, so tax is charged on the appliance and the labor. A
                hard-wired or permanently installed one becomes real property,
                and the customer is charged no tax on either.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              The line between the two can be very fine. The guide&rsquo;s own
              example is a mailbox: bricked into a post by the road, it is an
              improvement to real property; screwed to a wooden post in the
              ground, it is tangible personal property. Somewhere in
              Tallahassee, someone had to write that down with a straight face.
            </p>
            <p className="mt-4 text-body text-graphite">
              Mobile homes get the same treatment by sticker. A home with an
              &ldquo;RP&rdquo; decal is real property; one with an
              &ldquo;MH&rdquo; decal, or no decal at all, is tangible personal
              property, and the whole repair bill is taxable unless the invoice
              shows it was labor only.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="taxable-services">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The short list of services Florida does tax
            </h2>
            <p className="mt-4 text-body text-graphite">
              Separate from repairs, Florida taxes a few services outright. The{' '}
              <SourceLink href="https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx">
                Florida Department of Revenue
              </SourceLink>{' '}
              gives these as its examples of taxable services that require you
              to register:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Investigative and crime protection services.
                </strong>{' '}
                Detectives, guards, alarm monitoring and similar security work.
              </li>
              <li>
                <strong className="text-aubergine">
                  Interior nonresidential cleaning services.
                </strong>{' '}
                Cleaning the inside of an office or shop. Cleaning a home is not
                on the list.
              </li>
              <li>
                <strong className="text-aubergine">
                  Nonresidential pest control services.
                </strong>{' '}
                Treating a restaurant or warehouse, not a house.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              It is a short list and an odd one. It reads less like tax policy
              and more like the supporting cast of a detective novel: the
              investigator, the security guard, the exterminator and the night
              cleaner.
            </p>
            <p className="mt-4 text-body text-graphite">
              The word doing the work is &ldquo;nonresidential.&rdquo; A cleaning
              company with both office and household clients has taxable and
              non-taxable sales on the same day, which is the kind of thing that
              needs to be set up correctly in the invoicing software once rather
              than remembered every Friday.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="rate-and-invoice">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The rate, and how to write the invoice
            </h2>
            <p className="mt-4 text-body text-graphite">
              Taxable labor has no special rate. It is taxed like any other
              taxable sale: Florida&rsquo;s general state rate of 6%, plus the
              discretionary sales surtax most counties add. For a repair, the
              surtax is the rate of the county where the repair is done, so a
              mobile tech who crosses a county line before lunch can owe two
              different rates in one day.
            </p>
            <p className="mt-4 text-body text-graphite">
              On Wes&rsquo;s job, the state portion alone is $140 &times; 6% =
              $8.40, plus the surtax for his county. Small. It is also $8.40 on
              every similar job, every week.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  State the tax separately.
                </strong>{' '}
                Florida requires sales tax to be shown separately on each
                invoice or receipt. Sales tax and surtax can be one combined
                line.
              </li>
              <li>
                <strong className="text-aubergine">
                  Write &ldquo;Labor Only&rdquo; when it was.
                </strong>{' '}
                They are the two most valuable words on a Florida repair
                invoice, and they are free. Without them, you have no proof that
                nothing was attached.
              </li>
              <li>
                <strong className="text-aubergine">
                  List what went into the job.
                </strong>{' '}
                Parts, materials, even the ones you gave away. It is the record
                that decides the tax, and a memory of the job is not a record.
              </li>
              <li>
                <strong className="text-aubergine">
                  Buy repair parts with your resale certificate.
                </strong>{' '}
                Parts that become part of the repaired item can be bought
                tax-exempt, because the customer pays the tax. Tools, sandpaper
                and other supplies that don&rsquo;t stay with the item are
                taxable to you.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              All of this rests on the sales records being right in the first
              place, which is the unglamorous half of{' '}
              <Link href="/blog/bookkeeping-vs-accounting" className={linkClass}>
                bookkeeping vs. accounting
              </Link>
              . If you work in other states too, our guide to{' '}
              <Link href="/blog/sales-tax-compliance-services" className={linkClass}>
                sales tax compliance services
              </Link>{' '}
              compares how Texas and New York treat the same labor &mdash; they
              disagree with Florida and with each other.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/wrenches-hanging-on-teal-pegboard.webp`}
              alt="A row of combination wrenches hanging in size order on a worn teal pegboard above a rack of sockets"
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
              When you can sort this out yourself
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most single-trade Florida businesses can handle this without an
              accountant, and we would rather say so than pretend otherwise.
              Talking ourselves out of work is becoming a habit on this blog.
              Nobody has stopped us yet.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You can probably do it yourself if
                </strong>{' '}
                you do one kind of work, in one or two counties, and it clearly
                falls in one category. Decide the rule once, set the tax in your
                invoicing app, and file on the state&rsquo;s free portal.
              </li>
              <li>
                <strong className="text-aubergine">
                  Know the calendar.
                </strong>{' '}
                Returns are due on the 1st and late after the 20th of the month
                following each reporting period. Most new businesses are set up
                quarterly, and a return is required even when no tax is due.
              </li>
              <li>
                <strong className="text-aubergine">
                  Take the small reward.
                </strong>{' '}
                File and pay electronically and on time, and Florida lets you
                keep a collection allowance of 2.5% of the first $1,200 of tax
                due, up to $30. It won&rsquo;t change your life, but it is more
                gratitude than most tax agencies manage.
              </li>
              <li>
                <strong className="text-aubergine">
                  Ask the state directly.
                </strong>{' '}
                The Department&rsquo;s Taxpayer Services line is 850-488-6800.
                A question about your specific trade is free to ask.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              It is worth getting help when one business straddles the
              categories: a handyman who fixes both the dishwasher and the wall
              behind it, a cleaner with offices and homes, a shop that sells
              parts online as well as fitting them. Online sales bring their own
              rules, which we cover in{' '}
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
              shows what we take on, and{' '}
              <Link href="/pricing" className={linkClass}>
                our pricing
              </Link>{' '}
              is flat and published. Njock is an accountant, not a CPA or a
              Florida tax attorney; if you are already in a dispute with the
              Department, we will tell you that you need one of those instead.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="what-guessing-wrong-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What guessing wrong costs a Florida shop
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The most common mistake is the most natural one: charging tax on
              the parts and not on the labor. Suppose a repair business does
              that on $45,000 of labor a year. At the 6% state rate, that is
              $2,700 a year of tax nobody collected. If it runs for three years,
              it is $8,100, before any county surtax.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The state can still ask for it. Last year&rsquo;s customers have
              long since driven away, so it comes out of the shop&rsquo;s own
              margin. Florida&rsquo;s late penalty is 10% of the tax owed, with
              a $50 minimum that applies even when no tax is due, and interest
              runs on top at a rate that floats.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              None of it requires a clever fix. It requires knowing which of the
              three categories your work falls in, and an invoice that says what
              actually went into the job. Wes charged the tax, by the way. He
              also started keeping the hose clamps in a labeled bin.
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
              title: 'Does Shopify Collect Sales Tax? What It Does and Doesn’t Do',
              blurb:
                'Shopify charges sales tax at checkout but never files or remits it. Where the line falls for online sellers.',
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
              Not sure which category your work falls in?
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
