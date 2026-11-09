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

const SLUG = 'is-labor-taxable';
const TITLE = 'Is Labor Taxable? Sales Tax on Labor, State by State';
const DESCRIPTION =
  'Is labor taxable? Usually not on its own, but repair labor, labor with parts and listed services often are. The two-question test, state by state.';
const PUBLISHED = '2026-11-10';
const MODIFIED = '2026-11-10';
const HERO = `/blog/${SLUG}/hero-multimeter-repair-tools-workbench.webp`;
const HERO_ALT =
  'A digital multimeter with red and black test leads on a workbench, with pliers, a screwdriver and other repair tools behind it';

const TOC = [
  { id: 'no-single-answer', label: 'Why there is no single answer' },
  { id: 'two-questions', label: 'The two questions that decide it almost everywhere' },
  { id: 'state-by-state', label: 'How seven states actually treat labor' },
  { id: 'itemizing', label: 'Does listing labor separately on the invoice help?' },
  { id: 'more-than-one-state', label: 'Working in more than one state' },
  { id: 'five-minute-check', label: 'A five-minute check before your next invoice' },
  { id: 'wrong-guess', label: 'What the wrong guess costs' },
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
        alt: HERO_ALT,
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
    q: 'Is labor taxable?',
    a: 'It depends on the state and on the job. In most states, labor is not taxed on its own, but labor to repair or make a movable item, labor bundled with parts, and services a state specifically lists are often taxable. Labor that permanently improves a building is usually not taxed to the customer.',
  },
  {
    q: 'Do you charge sales tax on labor?',
    a: 'You charge it only where the state where the work is done taxes that kind of labor. New York taxes repair and maintenance labor on buildings, Florida taxes repair labor when any part is supplied, and Texas taxes labor in 16 listed service categories. Alaska, Delaware, Montana, New Hampshire and Oregon have no statewide sales tax at all.',
  },
  {
    q: 'Which states tax labor the most?',
    a: 'Hawaii and South Dakota tax the broadest range of services. Hawaii’s general excise tax applies to the gross receipts of virtually all business activity, services included, and South Dakota taxes services unless a law specifically exempts them. Most other states tax only the services they list.',
  },
  {
    q: 'Is labor taxable in California?',
    a: 'Some of it. California does not tax a separately stated charge for labor to repair an item or restore it to its original use. Labor to make or fabricate a new item is taxable, so the answer turns on whether the work repaired something or created something.',
  },
  {
    q: 'Is installation labor taxable?',
    a: 'It depends on what is installed and where. Installing something that becomes a permanent part of a building is usually treated as real property work and is often not taxed to the customer. Installing a movable item, such as a freestanding appliance, is taxable in many states along with the item itself.',
  },
  {
    q: 'Does listing labor separately on the invoice make it nontaxable?',
    a: 'Only in some states and only for some jobs. California and Louisiana let certain separately stated labor go untaxed, while New York taxes the whole charge for a repair job no matter how the invoice is laid out. Separating labor is good practice, but it does not change what the state taxes.',
  },
  {
    q: 'Can I charge sales tax on labor if my state does not tax it?',
    a: 'You should not. Sales tax is a tax the state imposes, not a fee you choose to add, and tax collected by mistake does not become your money. If you have been charging it on labor your state does not tax, talk to an accountant about correcting your returns and your invoices.',
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
              <time dateTime={PUBLISHED}>November 10, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 10, 2026</time>
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
              alt={HERO_ALT}
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
                <strong>Short answer:</strong> Is labor taxable? In most
                states, not on its own. Labor becomes taxable when it repairs
                or makes a movable item, when it comes bundled with parts, or
                when the state lists that service as taxable. Labor that
                permanently improves a building is usually not taxed to the
                customer.
              </p>
              <p className="mt-4 text-body text-graphite">
                Sales tax is set state by state, so the same job can be taxed
                in one state and tax-free in the next. Five states have no
                statewide sales tax at all. The rest each publish their own
                rules, and they disagree.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s the first week of November and Walt &mdash; I&rsquo;ll
              call him Walt &mdash; is packing his van in Saratoga Springs. He
              repairs furnaces and appliances, and like a lot of tradespeople
              he follows the weather: summers in upstate New York, winters in
              Fort Myers. In the cup holder: a coffee, two pens that work and
              one that has never worked. On the dashboard: a printed invoice
              template with &ldquo;TAX&rdquo; and a blank next to it.
            </p>
            <p className="mt-4 text-body text-graphite">
              He fixed the same model of dryer twice this year, once in each
              state. Same part, same two hours, same rattling noise that
              turned out to be a sock. He charged tax both times, at what he
              hoped was the right rate.
            </p>
            <p className="mt-4 text-body text-graphite">
              Walt isn&rsquo;t sloppy. He&rsquo;s running one business under
              fifty different rulebooks, and nobody gave him the index. This
              is the index.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="no-single-answer">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Why there is no single answer
            </h2>
            <p className="mt-4 text-body text-graphite">
              There is no federal sales tax in the United States. Each state
              that has one decides what it covers, and the default almost
              everywhere is the same: sales of physical goods are taxed,
              services are taxed only if the law names them. Labor is a
              service, so it starts out untaxed and becomes taxable only when
              the state&rsquo;s rules pull it in.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Five states have no statewide sales tax.</strong>{' '}
                Alaska, Delaware, Montana, New Hampshire and Oregon. Alaska
                still lets local governments charge one, so &ldquo;no sales
                tax&rdquo; there depends on the town.
              </li>
              <li>
                <strong className="text-aubergine">A few states tax almost every service.</strong>{' '}
                Hawaii and South Dakota are the clearest examples, and labor
                is taxed there as a matter of course.
              </li>
              <li>
                <strong className="text-aubergine">Most states tax a list.</strong>{' '}
                Repair of movable items, certain building services, and named
                categories such as cleaning or security. If your work
                isn&rsquo;t on the list, the labor isn&rsquo;t taxed.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              The result is a country where fixing a lawn mower can be taxable
              on one side of a river and tax-free on the other. The lawn mower
              is unaware of this and continues to not start.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="two-questions">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The two questions that decide it almost everywhere
            </h2>
            <p className="mt-4 text-body text-graphite">
              The state rules disagree on the details but sort jobs with the
              same two questions. Louisiana&rsquo;s Department of Revenue puts
              the pattern in plain words in its{' '}
              <SourceLink href="https://revenue.louisiana.gov/tax-education-and-faqs/faqs/sales-tax/do-i-have-to-collect-sales-tax-on-charges-for-labor/">
                answer on charges for labor
              </SourceLink>
              : labor on movable property is generally taxable, labor on
              buildings and land generally is not. Most states start from
              some version of that.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. What did you work on: a movable thing or a building?
                </strong>{' '}
                Cars, appliances, furniture, electronics and equipment are
                movable property, and repair labor on them is taxed in many
                states. Houses, offices and land are real property, where
                labor is more often untaxed, with big exceptions such as New
                York repair work and Texas commercial buildings.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. What did the work do: repair, make, or permanently
                  improve?
                </strong>{' '}
                Repairing or maintaining is the most commonly taxed.
                Fabricating a new item is often taxed even where repair
                isn&rsquo;t. A permanent improvement to a building is the most
                commonly exempt.
              </li>
            </ol>
            <p className="mt-6 text-body text-graphite">
              Then one follow-up question catches the rest: did any part or
              material change hands? In some states, a single washer turns a
              tax-free repair into a taxable one. Plumbers have suspected for
              years that washers were up to something. They were right.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/open-toolbox-light-bulb.webp`}
              alt="An open black toolbox holding orange-handled screwdrivers, pliers and a spare light bulb"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="state-by-state">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How seven states actually treat labor
            </h2>
            <p className="mt-4 text-body text-graphite">
              These are the states our clients ask about most, plus the two
              that tax the most. Each has more detail than fits here, and
              three have their own full guide on this blog.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">New York: taxed on repairs, not on improvements.</strong>{' '}
                Repair, maintenance and installation work on real property is
                taxed on the whole bill, labor included. A capital improvement
                is not, when the customer signs Form ST-124. Full detail in{' '}
                <Link href="/blog/do-contractors-charge-sales-tax-on-labor-in-ny" className={linkClass}>
                  our guide to sales tax on labor in New York
                </Link>
                .
              </li>
              <li>
                <strong className="text-aubergine">Florida: taxed the moment a part is used.</strong>{' '}
                Repair labor on a movable item is taxable whenever the
                repairer supplies any part or material, even a free one. A
                documented labor-only repair is not. See{' '}
                <Link href="/blog/is-labor-taxed-in-florida" className={linkClass}>
                  how Florida taxes labor
                </Link>
                .
              </li>
              <li>
                <strong className="text-aubergine">Texas: taxed if the service is on the list.</strong>{' '}
                Sixteen categories of services are taxable, including repair
                of personal property and repair or remodeling of commercial
                buildings. Residential remodeling and new construction labor
                are not. The categories are in{' '}
                <Link href="/blog/do-i-charge-sales-tax-on-services-in-texas" className={linkClass}>
                  our Texas services guide
                </Link>
                .
              </li>
              <li>
                <strong className="text-aubergine">California: repair no, fabrication yes.</strong>{' '}
                A separately stated charge for labor to repair an item is not
                taxable, but labor to make or fabricate a new one is. The
                state&rsquo;s{' '}
                <SourceLink href="https://cdtfa.ca.gov/formspubs/pub108/">
                  Publication 108 on labor charges
                </SourceLink>{' '}
                opens by warning that many sellers wrongly assume all labor is
                exempt.
              </li>
              <li>
                <strong className="text-aubergine">Louisiana: movable yes, buildings generally no.</strong>{' '}
                Labor to fabricate, repair or maintain movable property is
                generally taxable. Labor to build, install, remodel or repair
                buildings is generally not.
              </li>
              <li>
                <strong className="text-aubergine">Hawaii: nearly everything.</strong>{' '}
                Hawaii has no sales tax as such. Its{' '}
                <SourceLink href="https://tax.hawaii.gov/get/">
                  general excise tax
                </SourceLink>{' '}
                falls on the gross receipts of virtually all business activity,
                services and labor included, and it is charged to the business
                rather than the customer, though most pass it on.
              </li>
              <li>
                <strong className="text-aubergine">South Dakota: taxed unless exempt.</strong>{' '}
                The{' '}
                <SourceLink href="https://dor.sd.gov/businesses/taxes/sales-use-tax/">
                  Department of Revenue
                </SourceLink>{' '}
                taxes services as well as products, and a service escapes only
                if a law specifically exempts it. The default is flipped.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              Seven states, at least five different philosophies. If tax law
              were a group project, this is the slide where everyone used a
              different font.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="itemizing">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Does listing labor separately on the invoice help?
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the most common hope we hear: if labor and parts sit on
              separate lines, surely the labor line is safe. Sometimes it is.
              It depends entirely on the state, and itemizing never turns a
              taxable job into a tax-free one where the law taxes the whole
              charge.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Where it helps.</strong>{' '}
                California leaves a separately stated repair labor charge
                untaxed. Louisiana says certain installation and repair labor
                may be untaxed when it is separately stated. In both, the
                exemption depends on the labor having its own line.
              </li>
              <li>
                <strong className="text-aubergine">Where it doesn&rsquo;t.</strong>{' '}
                New York taxes the entire charge for a repair to real
                property, labor and materials together. Writing them on
                separate lines is tidy and changes nothing about the tax.
              </li>
              <li>
                <strong className="text-aubergine">Where proof matters more than layout.</strong>{' '}
                Florida exempts a labor-only repair, but only if your records
                show no part or material was used. &ldquo;Labor only&rdquo; on
                the invoice is the start of that proof, not the end of it.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              Itemize anyway. It costs nothing, it answers the customer&rsquo;s
              next question before they ask it, and in the states where it
              matters, it is the difference between a taxable bill and a
              tax-free one. The invoice is a contract with the tax code, and
              the tax code reads the small print.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="more-than-one-state">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Working in more than one state
            </h2>
            <p className="mt-4 text-body text-graphite">
              The rule that applies is the rule of the state where the work
              is done, not the state on your van&rsquo;s license plate. Walt
              owes New York&rsquo;s rules in Saratoga and Florida&rsquo;s in
              Fort Myers, and he needs to be registered to collect in each
              state where his work is taxable.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Register before you collect.</strong>{' '}
                You can&rsquo;t collect a state&rsquo;s sales tax without a
                permit from that state, and you can&rsquo;t skip collecting
                where your work is taxable.
              </li>
              <li>
                <strong className="text-aubergine">Each state has its own calendar.</strong>{' '}
                New York&rsquo;s sales tax quarters start in March, not
                January, which catches everyone at least once. We laid out{' '}
                <Link href="/blog/when-is-nys-sales-tax-due" className={linkClass}>
                  when NYS sales tax is due
                </Link>{' '}
                date by date.
              </li>
              <li>
                <strong className="text-aubergine">Rates follow the location, too.</strong>{' '}
                Most states add local taxes on top of the state rate, and the
                combined rate is usually set by where the work happens or the
                item is delivered.
              </li>
            </ul>
            <p className="mt-6 text-body text-graphite">
              Here&rsquo;s the honest part. If you work in one state, and your
              work is clearly outside its taxable list &mdash; residential
              remodeling in Texas, say, or labor-only repairs you document
              carefully in Florida &mdash; you may never collect sales tax at
              all. You don&rsquo;t need an accountant to tell you that twice.
              Keep the state&rsquo;s guidance bookmarked and get on with your
              day.
            </p>
            <p className="mt-4 text-body text-graphite">
              It&rsquo;s when you cross a state line, or mix taxable and
              untaxed work on the same invoice, that the hours start to add
              up. Our{' '}
              <Link href="/blog/sales-tax-compliance-services" className={linkClass}>
                guide to sales tax compliance for small businesses
              </Link>{' '}
              covers what that work involves and when it is worth handing
              off.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hammer-screws-organizer-box.webp`}
              alt="A claw hammer, loose screws and an orange parts organizer full of screws and wall anchors on a stone floor"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="five-minute-check">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              A five-minute check before your next invoice
            </h2>
            <p className="mt-4 text-body text-graphite">
              Run every new kind of job through these once. After that, you
              will know your answers by heart for the work you do most.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">1. Which state is the job in?</strong>{' '}
                Not where you live. Where the work happens.
              </li>
              <li>
                <strong className="text-aubergine">2. Does that state have a sales tax?</strong>{' '}
                If it&rsquo;s Alaska, Delaware, Montana, New Hampshire or
                Oregon, check for local taxes and you may be done.
              </li>
              <li>
                <strong className="text-aubergine">3. Movable item or building?</strong>{' '}
                Repair labor on movable items is taxed in many more states
                than labor on buildings.
              </li>
              <li>
                <strong className="text-aubergine">4. Repair, make, or permanent improvement?</strong>{' '}
                Repair and fabrication are the most commonly taxed;
                permanent improvements, the least.
              </li>
              <li>
                <strong className="text-aubergine">5. Did any parts change hands?</strong>{' '}
                In states like Florida, that one detail decides it.
              </li>
              <li>
                <strong className="text-aubergine">6. Is the service on the state&rsquo;s list?</strong>{' '}
                Read the state&rsquo;s own page, not a forum thread from
                2014.
              </li>
            </ol>
            <p className="mt-6 text-body text-graphite">
              Write the answers on the job template so the next invoice
              starts right. Five minutes now beats an afternoon with a
              state auditor later, and the auditor never brings coffee.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="wrong-guess">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What the wrong guess costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Guessing on labor goes wrong in two directions, and both cost
              real money. Under-collect, and the tax you should have charged
              becomes yours to pay, because you can&rsquo;t send last
              year&rsquo;s customers a bill for it.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Do the arithmetic with illustrative numbers. Say $60,000 a year
              of your labor is taxable and you treated it as exempt, at a 7%
              combined rate. That is $4,200 a year you never collected.
              Across a three-year look-back, $12,600 &mdash; before penalties
              and interest.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Over-collect, and you make every quote 7% more expensive than
              the competitor who knows the rule, on tax the state never asked
              for. Either way, the rule is cheaper than the guess.
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
              href: '/blog/do-contractors-charge-sales-tax-on-labor-in-ny',
              eyebrow: 'Blog',
              title: 'Do Contractors Charge Sales Tax on Labor in NY? Yes, Unless',
              blurb:
                'Repair or capital improvement decides it. The three tests, common jobs sorted, and what Form ST-124 does.',
            },
            {
              href: '/blog/is-labor-taxed-in-florida',
              eyebrow: 'Blog',
              title: 'Is Labor Taxed in Florida? Repairs, Contractors, Services',
              blurb:
                'Florida taxes repair labor the moment a part is used, even a free one. The three categories it uses.',
            },
            {
              href: '/blog/do-i-charge-sales-tax-on-services-in-texas',
              eyebrow: 'Blog',
              title: 'Do I Charge Sales Tax on Services in Texas? The Full List',
              blurb:
                'The 16 taxable service categories, what is not taxed, and when you need a Texas sales tax permit.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Working in more than one state?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. No pitch. We
              look at where you work and what you bill, and tell you honestly
              whether you need help or just a checklist. Our{' '}
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
