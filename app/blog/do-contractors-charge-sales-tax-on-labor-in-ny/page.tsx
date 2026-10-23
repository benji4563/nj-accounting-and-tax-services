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

const SLUG = 'do-contractors-charge-sales-tax-on-labor-in-ny';
const TITLE = 'Do Contractors Charge Sales Tax on Labor in NY? Yes, Unless';
const DESCRIPTION =
  'Do contractors charge sales tax on labor in NY? Yes for repairs, maintenance and installs; no for capital improvements backed by Form ST-124. Jobs sorted.';
const PUBLISHED = '2026-10-23';
const MODIFIED = '2026-10-23';
const HERO = `/blog/${SLUG}/hero-contractor-tools-on-wooden-table.webp`;

const TOC = [
  { id: 'repair-or-improvement', label: 'The one question that decides it: repair or improvement' },
  { id: 'three-tests', label: 'The three tests for a capital improvement' },
  { id: 'jobs-sorted', label: 'Common jobs, sorted: taxed or not' },
  { id: 'form-st-124', label: 'Form ST-124: the paper that does the arguing for you' },
  { id: 'materials', label: 'You still pay tax on materials either way' },
  { id: 'invoicing', label: 'How to bill a taxable job' },
  { id: 'wrong-guess', label: 'What a wrong guess costs three years later' },
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
        alt: 'Hand tools laid out on a worn wooden table: a hand saw, trowel, hammer, wrenches, nails, safety glasses, a clamp and an orange hard hat',
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
    q: 'Do contractors charge sales tax on labor in NY?',
    a: 'Yes, when the job is a repair, maintenance or installation service to real property: New York taxes the whole charge, labor and materials included. No, when the job is a capital improvement and the customer gives the contractor a properly completed Form ST-124, Certificate of Capital Improvement.',
  },
  {
    q: 'Is labor taxable in New York State?',
    a: 'It depends on what the labor accomplishes. Labor to repair, maintain or install items that do not become part of a building is taxable. Labor that results in a capital improvement, meaning it adds substantial value or prolongs useful life, becomes part of the property, and is intended to be permanent, is not taxable.',
  },
  {
    q: 'What counts as a capital improvement for NY sales tax?',
    a: 'A capital improvement is an addition or alteration to real property that meets all three conditions: it substantially adds to the value or appreciably prolongs the useful life of the property, it becomes part of or is permanently affixed to the property, and it is intended to be a permanent installation. Building a deck, installing kitchen cabinets and replacing an entire roof are examples.',
  },
  {
    q: 'Who fills out Form ST-124?',
    a: 'The customer completes Form ST-124 and gives it to the contractor, and both sign it. The contractor keeps it, gives copies to any subcontractors on the job, and must keep it for at least three years. If the contractor gets it within 90 days of doing the work and accepts it in good faith, the burden of proving the job was taxable shifts to the customer.',
  },
  {
    q: 'Do contractors pay sales tax on materials in New York?',
    a: 'Yes. Contractors pay sales tax when they buy building materials, whether the materials go into a capital improvement or a repair, and there is no exemption for materials used in a capital improvement. On a taxable repair job, the contractor may be able to take a credit for the tax already paid on materials that were transferred to the customer.',
  },
  {
    q: 'Is roof repair taxable in NY?',
    a: 'Yes. Repairing or spot-replacing roofing materials, and cleaning or repairing gutters, is taxable repair work. Replacing an entire roof, or the complete side of a peaked roof, is a capital improvement and is not taxed when the customer provides Form ST-124.',
  },
  {
    q: 'Is carpet installation taxable in New York?',
    a: 'Usually, yes. Installing carpet or similar floor covering in an existing building is a taxable installation service. It is a capital improvement only when it is the initial finished floor covering in new construction or a new addition, or is installed within six months after the building is otherwise completed.',
  },
  {
    q: 'Is painting taxable in NY?',
    a: 'Painting existing walls, doors, cabinets or structures is taxable repair and maintenance work in New York. Painting a new structure, or painting, staining or sealing a new deck, door or set of cabinets, is classified as a capital improvement.',
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
              <time dateTime={PUBLISHED}>October 23, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 23, 2026</time>
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
              alt="Hand tools laid out on a worn wooden table: a hand saw, trowel, hammer, wrenches, nails, safety glasses, a clamp and an orange hard hat"
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
                <strong>Short answer:</strong> Do contractors charge sales tax
                on labor in NY? Yes, on repair, maintenance and installation
                work: New York taxes the whole bill, labor and materials
                together. No, on a capital improvement, as long as the customer
                gives you a completed Form ST-124.
              </p>
              <p className="mt-4 text-body text-graphite">
                So the real question is never &ldquo;is labor taxable.&rdquo;
                It&rsquo;s &ldquo;what kind of job was this.&rdquo; Separating
                labor from materials on the invoice does not change the answer,
                and you pay tax on your own materials either way.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Thursday in late October and Teodoro &mdash;
              I&rsquo;ll call him Teodoro &mdash; is sitting in his pickup
              outside a lumberyard in Rochester. He runs a three-person
              carpentry and handyman outfit. On the passenger seat: a coffee,
              a tape measure, and a stack of invoices he is about to send. In
              the glovebox: eleven Form ST-124s, two takeout menus, and a tire
              gauge that has never measured a tire.
            </p>
            <p className="mt-4 text-body text-graphite">
              This week he built a deck, replaced a rotted stair tread, hung
              a set of new kitchen cabinets, and repainted the old ones in a
              customer&rsquo;s basement. Four jobs. He charged sales tax on
              exactly one of them, and he picked which one by feel.
            </p>
            <p className="mt-4 text-body text-graphite">
              Teodoro isn&rsquo;t careless. He&rsquo;s running a business
              under a tax rule that sorts jobs by outcome, not by effort
              &mdash; and nobody ever handed him the sorting key. Here it is.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="repair-or-improvement">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The one question that decides it: repair or improvement
            </h2>
            <p className="mt-4 text-body text-graphite">
              New York doesn&rsquo;t sort your work into &ldquo;labor&rdquo;
              and &ldquo;materials&rdquo; and tax one of them. It treats the
              whole job as a single service to real property, then asks what
              the property looks like when you drive away. That&rsquo;s why
              the state&rsquo;s{' '}
              <SourceLink href="https://tax.ny.gov/pubs_and_bulls/tg_bulletins/st/repair_maintenance.htm">
                bulletin on repair, maintenance and installation services
              </SourceLink>{' '}
              says the taxable amount is all the charges for materials and
              labor you bill, markups included.
            </p>
            <p className="mt-4 text-body text-graphite">
              Think of it as a haircut versus a tattoo. A haircut maintains
              what was already there and grows back; the state taxes it. A
              tattoo is a permanent change to the property; the state
              doesn&rsquo;t. Nobody has ever argued their haircut was a
              capital improvement, though several people have tried with
              their bathroom.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Repair or maintenance: taxed.</strong>{' '}
                Fixing a broken railing, re-pointing a chimney, replacing a
                faucet, replacing damaged shingles. The thing existed; you
                kept it working.
              </li>
              <li>
                <strong className="text-aubergine">Installation of things that stay movable: taxed.</strong>{' '}
                Hooking up a freestanding appliance, putting up an
                above-ground pool or a canvas awning. The item never becomes
                part of the building.
              </li>
              <li>
                <strong className="text-aubergine">Capital improvement: not taxed.</strong>{' '}
                Building a deck, installing a hot water heater, putting in
                kitchen cabinets. The property is permanently better, bigger,
                or longer-lived than before.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              The regulations judge the end result, not the steps. A job
              full of capital-looking tasks that ends in a repaired wall is
              a repair.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="three-tests">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The three tests for a capital improvement
            </h2>
            <p className="mt-4 text-body text-graphite">
              Under{' '}
              <SourceLink href="https://tax.ny.gov/pubs_and_bulls/tg_bulletins/st/capital_improvements.htm">
                Tax Bulletin ST-104 on capital improvements
              </SourceLink>
              , a job only escapes sales tax if it passes all three of these.
              Two out of three is a repair with good intentions.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. It substantially adds value or appreciably prolongs the
                  property&rsquo;s useful life.
                </strong>{' '}
                A new roof does. Patching three shingles keeps the existing
                roof going, which is the definition of maintenance.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. It becomes part of the property or is permanently
                  affixed to it.
                </strong>{' '}
                Built-in cabinets, yes. A freestanding fridge, no, however
                expensive it was and however long it took to get through the
                door.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. It is intended to be a permanent installation.
                </strong>{' '}
                This is the test that trips up commercial work. Items a
                commercial tenant installs as trade fixtures may not qualify
                even when the identical item would qualify for an owner.
              </li>
            </ol>
            <p className="mt-6 text-body text-graphite">
              The third test is the one where the state asks what everybody
              was thinking when the work was done &mdash; a question most of
              us would rather not answer about our own kitchens.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/paint-roller-on-stepladder.webp`}
              alt="A paint roller with rust-red paint resting on a paint-spattered stepladder in front of a half-painted wall"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="jobs-sorted">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Common jobs, sorted: taxed or not
            </h2>
            <p className="mt-4 text-body text-graphite">
              The state publishes a long list of examples in{' '}
              <SourceLink href="https://www.tax.ny.gov/pdf/publications/sales/pub862.pdf">
                Publication 862
              </SourceLink>
              . These are the ones that come up most for small contractors.
              The pattern: complete and new is an improvement, partial and
              existing is a repair.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Roofs.</strong>{' '}
                Replacing the entire roof, or the complete side of a peaked
                roof, is a capital improvement. Repairs, spot replacement,
                coatings and gutter cleaning are taxed.
              </li>
              <li>
                <strong className="text-aubergine">Painting.</strong>{' '}
                Painting a new structure is part of the improvement.
                Repainting existing walls, doors or cabinets is taxed &mdash;
                which is how Teodoro&rsquo;s basement cabinet job ended up
                taxable while the new cabinets upstairs did not.
              </li>
              <li>
                <strong className="text-aubergine">Floor coverings.</strong>{' '}
                Carpet or vinyl as the first finished floor in new
                construction or a new addition is an improvement. The same
                carpet in an existing building is a taxable installation.
              </li>
              <li>
                <strong className="text-aubergine">Driveways and walks.</strong>{' '}
                Installing or completely repaving is an improvement.
                Patching holes and cracks, or replacing sections, is taxed.
              </li>
              <li>
                <strong className="text-aubergine">Masonry.</strong>{' '}
                Installing or completely replacing a wall, footing or
                sidewalk is an improvement. Repairing or partly replacing
                one is taxed.
              </li>
              <li>
                <strong className="text-aubergine">Yard work.</strong>{' '}
                Planting trees and shrubs or putting in a permanent fence is
                an improvement. Mowing, pruning, fixing a fence and snow
                removal are taxed.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              Our favorite oddity: carpet in a brand-new building is an
              improvement, but the same carpet installed more than six
              months after the building was finished is taxable. The carpet
              has no idea what day it is. The tax code does.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="form-st-124">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Form ST-124: the paper that does the arguing for you
            </h2>
            <p className="mt-4 text-body text-graphite">
              On a capital improvement job, the customer fills out{' '}
              <SourceLink href="https://www.tax.ny.gov/pdf/current_forms/st/st124_fill_in.pdf">
                Form ST-124, Certificate of Capital Improvement
              </SourceLink>
              , and both of you sign it. That one page changes who has to
              prove what if the state ever asks.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Get it within 90 days.</strong>{' '}
                If you receive a properly completed ST-124 within 90 days of
                doing the work and accept it in good faith, the customer
                carries the burden of proving the job wasn&rsquo;t taxable.
                Miss the window and that burden sits with you.
              </li>
              <li>
                <strong className="text-aubergine">Good faith has limits.</strong>{' '}
                It means you didn&rsquo;t know the certificate was false and
                used ordinary care accepting it. A signed ST-124 for a
                cracked-window repair is not a document you can lean on.
              </li>
              <li>
                <strong className="text-aubergine">You don&rsquo;t have to accept it.</strong>{' '}
                If you think the job is a repair, you can refuse the form and
                charge tax. Signing an improper certificate can make you
                personally liable for the tax, plus penalties and interest.
              </li>
              <li>
                <strong className="text-aubergine">Keep it three years, and share it.</strong>{' '}
                Keep each certificate for at least three years after the
                related return was due or filed, whichever is later, and give
                copies to every subcontractor on the job.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              A glovebox is technically a filing system. It is just one with
              no index, no backup, and a tire gauge in it.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is the honest part: if nearly all your work is new decks,
              additions and full remodels for homeowners, and you collect a
              signed ST-124 at the start of every job, you probably
              don&rsquo;t need an accountant for this. You need a folder and
              the habit. Buy the folder.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="materials">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              You still pay tax on materials either way
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the part that surprises people who came from retail.
              In New York, contractors are generally the consumer of the
              building materials they buy, so you pay sales tax at the
              lumberyard. ST-104 is blunt about it: there is no exemption for
              materials used in a capital improvement project.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">On a capital improvement,</strong>{' '}
                the tax you paid on materials is a cost of the job. No credit,
                no refund. Price it in.
              </li>
              <li>
                <strong className="text-aubergine">On a taxable repair,</strong>{' '}
                you collect tax on the whole bill, including the materials,
                and you may be able to take a credit for the tax you already
                paid on materials you transferred to the customer, claimed on
                your sales tax return.
              </li>
              <li>
                <strong className="text-aubergine">You can&rsquo;t use ST-124 to buy tax-free.</strong>{' '}
                The certificate covers what you charge the customer, not what
                the supplier charges you.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              The lumberyard does not ask whether your two-by-fours are
              headed for a new deck or a patched one. It charges tax and
              wishes you a good weekend.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/chimney-flashing-roof-repair.webp`}
              alt="The base of a weathered brick chimney on a shingled roof, with metal flashing, a roll of roofing membrane and tools beside it"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="invoicing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to bill a taxable job
            </h2>
            <p className="mt-4 text-body text-graphite">
              The state&rsquo;s own example in TB-ST-129 is a homeowner repair
              with $130 of materials and $250 of labor. The tax applies to
              the full $380, not just the $130. At the illustrative 8% rate
              the bulletin uses, that is $30.40 of tax and a $410.40 total.
              Your actual rate is the combined state and local rate where
              the work is done.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">1. Decide the job type before you quote.</strong>{' '}
                Repair or improvement changes the price the customer pays, so
                settle it at the estimate, not at the invoice.
              </li>
              <li>
                <strong className="text-aubergine">2. Tax the whole bill on a repair.</strong>{' '}
                Labor, materials, trip charges and markups. Itemizing labor
                is fine for clarity, but it doesn&rsquo;t take labor out of
                the taxable amount.
              </li>
              <li>
                <strong className="text-aubergine">3. Collect the ST-124 on an improvement.</strong>{' '}
                At signing is best. Within 90 days is the deadline that
                matters.
              </li>
              <li>
                <strong className="text-aubergine">4. Split mixed jobs in writing.</strong>{' '}
                A remodel plus an unrelated repair is two jobs. Write them up
                as two, so one doesn&rsquo;t drag the other&rsquo;s tax
                treatment with it.
              </li>
            </ol>
            <p className="mt-6 text-body text-graphite">
              Writing &ldquo;LABOR&rdquo; in bigger letters does not help.
              We&rsquo;ve seen it tried. The font size has no standing.
            </p>
            <p className="mt-4 text-body text-graphite">
              Once you&rsquo;re collecting tax, the returns follow New
              York&rsquo;s odd calendar &mdash; we covered{' '}
              <Link href="/blog/when-is-nys-sales-tax-due" className={linkClass}>
                when NYS sales tax is due
              </Link>{' '}
              yesterday. If you also work across state lines, compare{' '}
              <Link href="/blog/is-labor-taxed-in-florida" className={linkClass}>
                how Florida taxes labor
              </Link>
              , and the bigger picture in our guide to{' '}
              <Link href="/blog/sales-tax-compliance-services" className={linkClass}>
                sales tax compliance for small businesses
              </Link>
              . Full disclosure: we are an accounting firm, and our idea of
              a capital improvement is a second monitor.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="wrong-guess">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What a wrong guess costs three years later
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Picking repair-or-improvement by feel works fine right up until
              an auditor sorts the same jobs by the rules. The tax you
              didn&rsquo;t collect doesn&rsquo;t disappear. It just stops
              being your customer&rsquo;s money and becomes yours.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Do the arithmetic with illustrative numbers. Say $100,000 a
              year of your work is repairs you treated as improvements, at an
              8% combined rate. That is $8,000 a year you never collected.
              Across three years of records, $24,000 &mdash; before
              penalties and interest, and with no way to send the customers
              a bill for tax they were never charged.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The other mistake costs too, just more quietly: charging tax on
              genuine improvements makes your quotes 8% higher than the
              contractor down the road who knows the rule. Either way, the
              sorting key is cheaper than the guess.
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
              href: '/blog/when-is-nys-sales-tax-due',
              eyebrow: 'Blog',
              title: 'When Is NYS Sales Tax Due? Quarterly, Annual and Monthly',
              blurb:
                "New York's sales tax year starts in March. The four quarterly dates, the weekend rule and what a late 20th costs.",
            },
            {
              href: '/blog/is-labor-taxed-in-florida',
              eyebrow: 'Blog',
              title: 'Is Labor Taxed in Florida? Repairs, Contractors, Services',
              blurb:
                'Florida taxes repair labor the moment a part is used, even a free one. The three categories it uses.',
            },
            {
              href: '/blog/sales-tax-compliance-services',
              eyebrow: 'Blog',
              title: 'Sales Tax Compliance Services: What Small Businesses Need',
              blurb:
                'How Texas, Florida and New York each tax labor, when returns are due, and when you can handle sales tax yourself.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Want a second pair of eyes on your job list?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. No pitch. We
              just listen, look at what you have, and tell you honestly
              whether we&rsquo;re a fit. Our{' '}
              <Link href="/services" className={linkClass}>
                bookkeeping and sales tax services
              </Link>{' '}
              start at $299 a month, and every price is on the{' '}
              <Link href="/pricing" className={linkClass}>
                pricing page
              </Link>
              .
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
