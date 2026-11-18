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

const SLUG = 'home-office-deduction-requirements';
const TITLE = 'Home Office Deduction Requirements, Plainly Explained';
const DESCRIPTION =
  'The home office deduction requirements: regular and exclusive use, principal place of business, who qualifies, the $5 simplified method vs actual expenses, and the records.';
const PUBLISHED = '2026-11-18';
const MODIFIED = '2026-11-18';
const HERO = `/blog/${SLUG}/hero-wooden-desk-by-window.webp`;

const TOC = [
  { id: 'the-two-tests', label: 'The two tests every home office has to pass' },
  { id: 'principal-place', label: 'When your home counts as your principal place of business' },
  { id: 'who-can-claim', label: 'Who can claim it, and who cannot' },
  { id: 'exceptions', label: 'The exceptions: inventory, daycare and the backyard studio' },
  { id: 'two-methods', label: 'Simplified method vs regular method, with real numbers' },
  { id: 'limits-and-records', label: 'The income limit, the paperwork and the catch when you sell' },
  { id: 'cost-of-skipping', label: 'What skipping it, or stretching it, actually costs' },
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
        alt: 'A home office with a rustic wooden desk, a laptop and a black chair beside a bright window with sheer curtains',
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
    q: 'What are the requirements for the home office deduction?',
    a: "You must use a specific part of your home regularly and exclusively for your business. That space must also be your principal place of business, a place where you regularly meet clients or customers, or a separate structure used for the business. Storing inventory and running a daycare are the two exceptions to the exclusive-use rule.",
  },
  {
    q: 'Can I claim the home office deduction if I work from home as an employee?',
    a: "No. The IRS says employees can no longer deduct a home office, because miscellaneous itemized deductions for employee business expenses were eliminated for tax years beginning after 2017. This applies even if you use the simplified method. If you also run your own side business, that business can qualify on its own if it meets the tests.",
  },
  {
    q: 'Does a home office have to be a separate room?',
    a: "No. IRS Publication 587 says the business area can be a room or another separately identifiable space, and it does not need a permanent partition. A clearly defined corner used only for the business can qualify. A space you also use for personal or family purposes does not.",
  },
  {
    q: 'How much is the simplified home office deduction?',
    a: "The simplified method gives you $5 per square foot of the area used for business, up to 300 square feet. That makes the maximum $1,500 a year. You cannot deduct depreciation under the simplified method, and you cannot carry over any amount that exceeds your business income.",
  },
  {
    q: 'Can I take the home office deduction if I also have an office elsewhere?',
    a: "Sometimes. If you regularly meet clients or customers at home in the normal course of business, the space can qualify even if you work at another location too. Your home can also be your principal place of business if you do your administrative or management work there and have no other fixed location where you do substantial amounts of that work.",
  },
  {
    q: 'Can renters take the home office deduction?',
    a: "Yes. The deduction is available to renters and homeowners alike. Under the regular method, a renter deducts the business share of rent, utilities, renters insurance and repairs. Under the simplified method, a renter uses the same $5 per square foot rate as anyone else.",
  },
  {
    q: 'Can I switch between the simplified and regular methods?',
    a: "Yes. You can choose either method each tax year, and the IRS says switching from one year to the next is not a change in accounting method and does not need IRS consent. If you used the regular method before and had expenses carried over, you cannot use that carryover in a year you use the simplified method.",
  },
  {
    q: 'Where do I report the home office deduction?',
    a: "Self-employed people who file Schedule C report the home office deduction on line 30 of Schedule C. If you use the regular method, you figure it on Form 8829 and attach that form. If you use the simplified method, you use the Simplified Method Worksheet in the Schedule C instructions instead.",
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
              <time dateTime={PUBLISHED}>November 18, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 18, 2026</time>
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
              alt="A home office with a rustic wooden desk, a laptop and a black chair beside a bright window with sheer curtains"
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
                <strong>Short answer:</strong> The home office deduction
                requirements are that you use a specific part of your home
                regularly and exclusively for your business, and that the space
                is your principal place of business, a place where you regularly
                meet clients or customers, or a separate structure used for the
                business. Employees cannot claim it; self-employed people can.
              </p>
              <p className="mt-4 text-body text-graphite">
                You can figure it the simple way, $5 per square foot up to 300
                square feet, or the regular way, using the office&rsquo;s share
                of your actual home costs. Either way, it cannot be larger than
                the income the business earns.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Sunday evening in March and Marcus &mdash; I&rsquo;ll
              call him Marcus &mdash; is a freelance graphic designer doing his
              taxes in the room he calls the office. It has a desk, a good
              chair, two monitors, a filing box, and an ironing board that went
              up &ldquo;just for this week&rdquo; about eleven months ago. His
              tax software has just asked him, very politely, whether this space
              is used exclusively for business.
            </p>
            <p className="mt-4 text-body text-graphite">
              Marcus looks at the ironing board. The ironing board looks back.
            </p>
            <p className="mt-4 text-body text-graphite">
              Marcus isn&rsquo;t trying to cheat. He just doesn&rsquo;t know
              where the line is, and the line is surprisingly specific. Here is
              where it sits: the two use tests, the location test, who is
              allowed to claim it at all, the exceptions, the two ways to
              calculate it with real numbers, and the paperwork that keeps it
              standing.
            </p>
          </div>
        </Section>

        {/* BODY SECTION 1 */}
        <Section background="ivory" id="the-two-tests">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The two tests every home office has to pass
            </h2>
            <p className="mt-4 text-body text-graphite">
              The rule lives in{' '}
              <SourceLink href="https://www.law.cornell.edu/uscode/text/26/280A">
                section 280A of the Internal Revenue Code
              </SourceLink>
              , which starts by saying you cannot deduct the costs of your home
              and then lists the exceptions. The main exception is a home
              office, and the IRS explains it in{' '}
              <SourceLink href="https://www.irs.gov/publications/p587">
                Publication 587, Business Use of Your Home
              </SourceLink>
              . Before any math happens, the space has to pass two tests about
              how you use it:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Exclusive use: the space is only for the business.
                </strong>{' '}
                It can be a room or another separately identifiable space, and
                it does not need a wall around it. But if the family also uses
                it, it fails. Publication 587&rsquo;s own example is an attorney
                whose den doubles as the family rec room: no deduction.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Regular use: you work there on a regular basis.
                </strong>{' '}
                Incidental or occasional use does not count. The desk you sit
                at twice a year to sort receipts is a desk, not an office.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              On top of both, the work has to be a real trade or business.
              Managing your own investments in a spare room, however seriously,
              does not qualify.
            </p>
            <p className="mt-4 text-body text-graphite">
              Exclusive really does mean exclusive. The IRS does not grade on a
              curve for the treadmill that is mostly a coat rack now, or for the
              ironing board that is only up because nobody has the heart to fold
              it.
            </p>
          </div>
        </Section>

        {/* BODY SECTION 2 */}
        <Section background="cream" id="principal-place">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When your home counts as your principal place of business
            </h2>
            <p className="mt-4 text-body text-graphite">
              Passing the use tests is not enough. The space also has to meet
              one of these, per Publication 587:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  It is your principal place of business.
                </strong>{' '}
                The IRS weighs how important the work done at each location is
                and how much time you spend there.
              </li>
              <li>
                <strong className="text-aubergine">
                  It is where you do the admin, and there is nowhere else.
                </strong>{' '}
                Your home office qualifies if you use it regularly and
                exclusively for administrative or management work, such as
                billing, scheduling, ordering supplies and keeping the books,
                and you have no other fixed location where you do a substantial
                amount of that work.
              </li>
              <li>
                <strong className="text-aubergine">
                  You meet clients or customers there.
                </strong>{' '}
                Regular, in-person meetings in the normal course of business
                qualify the space even if you also work somewhere else.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              The admin rule is the one most people miss. Publication 587 walks
              through a self-employed plumber who spends nearly every working
              hour in other people&rsquo;s kitchens. His small home office,
              where he phones customers and keeps the books, still qualifies,
              because he does that work nowhere else. Paying an outside service
              to do his billing does not change that.
            </p>
            <p className="mt-4 text-body text-graphite">
              Which is a relief, because the real headquarters of most trades
              businesses is a van during the day and a laptop at 9pm, and only
              one of those is deductible as a home office.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/tape-measure-on-wooden-table.webp`}
              alt="A rolled cloth measuring tape lying across the edge of an old wooden table in warm low light"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY SECTION 3 */}
        <Section background="ivory" id="who-can-claim">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who can claim it, and who cannot
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is where a lot of hope goes to die, so here it is plainly.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Self-employed people can.
                </strong>{' '}
                Sole proprietors, single-member LLCs and independent
                contractors who file Schedule C are who this deduction is built
                for. Partners can claim it through the partnership rules too.
              </li>
              <li>
                <strong className="text-aubergine">
                  Renters and homeowners both can.
                </strong>{' '}
                It works for a house, an apartment, a condo or a mobile home.
              </li>
              <li>
                <strong className="text-aubergine">W-2 employees cannot.</strong>{' '}
                The{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/simplified-option-for-home-office-deduction">
                  IRS says plainly
                </SourceLink>{' '}
                that taxpayers can no longer deduct a home office as an
                employee, because miscellaneous itemized deductions for employee
                business expenses were eliminated for tax years after 2017. That
                holds even if you use the simplified method.
              </li>
              <li>
                <strong className="text-aubergine">
                  Employees with a side business can, for the business.
                </strong>{' '}
                If you run your own business on the side and a space at home
                passes the tests for that business, it can qualify. If the same
                desk also hosts your day job, that is a wrinkle worth a
                conversation before you claim it.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              We have delivered the employee news on more discovery calls than
              we would like, and we have watched the person on the other end
              quietly do the math on their spare-room furniture. We are sorry.
              We didn&rsquo;t write the rule, we just have to read it out loud.
            </p>
          </div>
        </Section>

        {/* BODY SECTION 4 */}
        <Section background="cream" id="exceptions">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The exceptions: inventory, daycare and the backyard studio
            </h2>
            <p className="mt-4 text-body text-graphite">
              Three situations bend the rules, and they are worth knowing if
              your business is anything other than a person at a desk.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Storing inventory.</strong>{' '}
                If you sell products wholesale or retail, keep inventory or
                samples at home, and your home is the only fixed location of
                the business, the storage space does not have to be used
                exclusively for business. It does have to be used regularly and
                be a separately identifiable space suitable for storage.
              </li>
              <li>
                <strong className="text-aubergine">Running a daycare.</strong>{' '}
                A home daycare does not need exclusive use either. Instead, you
                compare the hours the space is used for daycare against the
                total hours in the year, so a basement used 12 hours a day, five
                days a week, gets a partial deduction rather than none.
              </li>
              <li>
                <strong className="text-aubergine">
                  A separate structure.
                </strong>{' '}
                A detached studio, garage or barn used regularly and
                exclusively in connection with the business qualifies without
                having to be your principal place of business or where you meet
                clients.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              The inventory rule is a small mercy for anyone selling online.
              Half the basement can be stacked with stock and still host the
              holiday decorations, which is good, because the holiday
              decorations were never going anywhere.
            </p>
          </div>
        </Section>

        {/* BODY SECTION 5 */}
        <Section background="ivory" id="two-methods">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Simplified method vs regular method, with real numbers
            </h2>
            <p className="mt-4 text-body text-graphite">
              Once you qualify, you pick how to calculate it. The rules for
              both are on the{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/simplified-option-for-home-office-deduction">
                IRS simplified option page
              </SourceLink>
              , and you can choose either one each year.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Simplified: $5 per square foot, up to 300 square feet.
                </strong>{' '}
                Maximum $1,500 a year. No depreciation, no Form 8829, and your
                mortgage interest and property taxes stay fully on Schedule A
                if you itemize.
              </li>
              <li>
                <strong className="text-aubergine">
                  Regular: the office&rsquo;s share of actual costs.
                </strong>{' '}
                Divide the office&rsquo;s square footage by the home&rsquo;s.
                Apply that percentage to rent or mortgage interest, property
                taxes, insurance, utilities and repairs that benefit the whole
                home. Homeowners also depreciate the business part of the house.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Here is an illustrative example. Say Marcus rents a 1,500 square
              foot apartment and his office is 150 square feet, so 10%.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Simplified: 150 x $5 = $750.
                </strong>{' '}
                Done in the time it takes to read this sentence.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Regular: about $2,484.
                </strong>{' '}
                Rent of $1,800 a month is $21,600 a year. Add $3,000 of
                utilities and $240 of renters insurance for $24,840. Ten percent
                of that is $2,484.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              That gap is real, and it is why the regular method is usually
              worth the extra twenty minutes for renters in expensive cities.
              It narrows for a small office in a cheap home.
            </p>
            <p className="mt-4 text-body text-graphite">
              The simplified method is the flat-rate shipping box of tax:
              if it fits, it ships, and nobody weighs anything. The regular
              method is weighing every parcel. Sometimes the scale is worth it.
            </p>
            <p className="mt-4 text-body text-graphite">
              And honestly, if you rent, use one room and are happy with the
              simplified number, you do not need an accountant for this part.
              Measure the room, multiply by five, move on with your Sunday.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/cardboard-boxes-on-workbench.webp`}
              alt="Open cardboard boxes stacked on a worn wooden workbench beside a small pile of books and a roll of tape, against a white wall"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY SECTION 6 */}
        <Section background="cream" id="limits-and-records">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The income limit, the paperwork and the catch when you sell
            </h2>
            <p className="mt-4 text-body text-graphite">
              Three things decide whether the deduction you calculated is the
              deduction you keep.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. It cannot exceed what the business earns.
                </strong>{' '}
                The deduction is capped at the gross income from the business
                use of your home minus your other business expenses. Under the
                regular method, anything over the cap carries forward to next
                year. Under the simplified method, the excess is simply lost.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. It goes on Schedule C, line 30.
                </strong>{' '}
                The regular method is figured on{' '}
                <SourceLink href="https://www.irs.gov/forms-pubs/about-form-8829">
                  Form 8829
                </SourceLink>
                , which you attach to your return. The simplified method uses a
                worksheet in the Schedule C instructions instead.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Depreciation comes back when you sell.
                </strong>{' '}
                If you own your home and use the regular method, you claim
                depreciation on the business part. When you sell, you cannot
                exclude the part of your gain equal to depreciation allowed or
                allowable after May 6, 1997. Years on the simplified method
                carry no depreciation and no recapture.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              Depreciation is the polite house guest of the tax code. It helps
              with the dishes every year, then mails you a bill the week you
              sell the house.
            </p>
            <p className="mt-4 text-body text-graphite">
              For records, keep what proves the space and the use: the square
              footage of the office and the home, a floor sketch or a couple of
              dated photos, and the bills you used for the percentage. It is the
              same habit that holds up every other line on the return, which we
              cover in our guide to{' '}
              <Link href="/blog/small-business-tax-deductions" className={linkClass}>
                small business tax deductions
              </Link>
              , and the same one that saves your{' '}
              <Link href="/blog/business-meal-deduction" className={linkClass}>
                business meal deduction
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-skipping">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What skipping it, or stretching it, actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Plenty of people who qualify never claim it, because they heard
              it invites trouble. Take Marcus&rsquo;s $2,484. If his combined
              federal income tax and self-employment tax rate were around 30%,
              which is illustrative and depends on his whole return, skipping it
              costs him roughly $745 a year. Over five years, that is close to
              $3,700 left on the table for a room he was already paying for.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The opposite mistake costs more. Claiming a room that fails the
              exclusive-use test means the whole deduction can be disallowed,
              plus the tax, plus interest, plus possible penalties, plus the
              evenings spent proving what the room was for.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The fix is usually small and physical. Fold the ironing board.
              Move it to the hall closet. Measure the room. Write the number
              down. That is most of the work.
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

            <p className="mt-8 text-body text-graphite">
              If you would rather someone else measured the room, ran both
              methods and filed the form, that is part of our{' '}
              <Link href="/services" className={linkClass}>
                tax and bookkeeping services
              </Link>
              , with flat monthly{' '}
              <Link href="/pricing" className={linkClass}>
                pricing
              </Link>{' '}
              starting at $299. Not sure you need help at all? Our honest take is
              in{' '}
              <Link
                href="/blog/do-i-need-an-accountant-for-your-small-business"
                className={linkClass}
              >
                do I need an accountant for my small business
              </Link>
              .
            </p>

            <AuthorBio />
          </div>
        </Section>

        {/* RELATED */}
        <RelatedPosts
          items={[
            {
              href: '/blog/small-business-tax-deductions',
              eyebrow: 'Deductions',
              title: 'Small Business Tax Deductions for 2026',
              blurb:
                'The IRS test every write-off has to pass, plus meals, mileage, equipment and the records behind each one.',
            },
            {
              href: '/blog/business-meal-deduction',
              eyebrow: 'Deductions',
              title: 'Business Meal Deduction Rules for 2026',
              blurb:
                'What is 50%, what is 100%, what is now zero, and the eight-second habit that keeps a receipt deductible.',
            },
            {
              href: '/blog/do-i-need-an-accountant-for-your-small-business',
              eyebrow: 'Getting help',
              title: 'Do I Need an Accountant for My Small Business?',
              blurb:
                'The signs you have outgrown doing it yourself, and the honest cases where software is enough.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure your office passes? Ask us.
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
