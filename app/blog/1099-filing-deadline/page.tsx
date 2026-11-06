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

const SLUG = '1099-filing-deadline';
const TITLE = '1099 Filing Deadline: Every 2027 Date, Plainly Explained';
const DESCRIPTION =
  'The 1099 filing deadline for 2026 payments, form by form: February 1, 2027 for the NEC, the MISC dates, weekend shifts, extensions and late penalties.';
const PUBLISHED = '2026-11-06';
const MODIFIED = '2026-11-06';
const HERO = `/blog/${SLUG}/hero-red-pin-desk-calendar.webp`;

const TOC = [
  { id: 'the-dates', label: 'The 1099 deadlines for 2027, form by form' },
  { id: 'two-copies', label: 'Two copies, two clocks' },
  { id: 'weekend-rule', label: 'Why the dates move: weekends and holidays' },
  { id: 'paper-or-efile', label: 'Paper or e-file: the 10-return rule' },
  { id: 'extensions', label: 'Extensions, and the one you cannot get' },
  { id: 'who-should-file', label: 'Software, an accountant, or you' },
  { id: 'missed-deadline', label: 'What missing the deadline costs' },
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
        alt: 'A red push pin stuck into a spiral desk calendar on a wooden desk, beside a binder clip, a pen and a calculator',
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
    q: 'What is the 1099 filing deadline?',
    a: 'Form 1099-NEC is due to both the contractor and the IRS by January 31. Most other 1099s, including the 1099-MISC, go to the recipient by January 31 and to the IRS by February 28 on paper or March 31 electronically. For payments made in 2026, January 31, 2027 is a Sunday, so the NEC is due Monday, February 1, 2027.',
  },
  {
    q: 'What are the 1099 filing requirements for 2026?',
    a: 'For payments made in 2026, a business generally files a 1099-NEC for each non-employee it paid $2,000 or more for services, and a 1099-MISC for rent, prizes and similar payments at the same threshold, with royalties starting at $10. If you file 10 or more information returns of any type in total, you must file them electronically. Each form goes to the IRS and a copy goes to the recipient.',
  },
  {
    q: 'How late can an employer send a 1099?',
    a: 'Legally, a 1099 that is due on January 31 is late on February 1, and a late form can still be filed and furnished afterward. The penalty depends on how late it is: for returns due in 2027 the IRS charges $60 per form if corrected within 30 days, $130 if filed by August 1, and $340 after that or if never filed. Sending it late is always cheaper than not sending it.',
  },
  {
    q: 'Can I get an extension on the 1099-NEC deadline?',
    a: 'Not an automatic one. The IRS says no automatic extension is available for Forms W-2 and 1099-NEC. Most other information returns can get an automatic 30-day extension to file with the IRS by submitting Form 8809 by the original due date, and you can ask for up to 30 extra days to furnish recipient copies by faxing Form 15397.',
  },
  {
    q: 'What happens if a 1099 deadline falls on a weekend?',
    a: 'It moves to the next business day. The IRS instructions say that if a due date falls on a Saturday, Sunday or legal holiday, the return is timely if filed by the next day that is not a Saturday, Sunday or legal holiday. That is why the 1099-NEC deadline for 2025 payments was February 2, 2026.',
  },
  {
    q: 'Do I have to pay taxes on 1099 income?',
    a: 'Yes. Income reported on a 1099 is generally taxable, and it is taxable even if the form never arrives or arrives late. Self-employed people also generally owe self-employment tax once net earnings reach $400. The 1099 is a report of the payment, not the thing that makes it taxable.',
  },
  {
    q: 'What is a 1099 form used for?',
    a: 'A 1099 is an information return. A business uses it to tell the IRS, and the person it paid, about payments other than wages, such as contractor fees, rent, royalties or interest. The IRS matches the forms against the recipient\'s tax return to check that the income was reported.',
  },
  {
    q: 'Is there a free way to e-file 1099s?',
    a: 'Yes. The IRS Information Returns Intake System, called IRIS, has a free taxpayer portal for filing Forms 1099 electronically. You need an IRIS Transmitter Control Code, or TCC, to use it, and applying for one takes time, so it is worth doing well before January.',
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
              <time dateTime={PUBLISHED}>November 6, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 6, 2026</time>
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
              alt="A red push pin stuck into a spiral desk calendar on a wooden desk, beside a binder clip, a pen and a calculator"
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
                <strong>Short answer:</strong> The 1099 filing deadline for
                Form 1099-NEC is January 31, for both the contractor&rsquo;s
                copy and the IRS copy. For payments made in 2026, January 31,
                2027 is a Sunday, so the NEC is due Monday, February 1, 2027.
                Most other 1099s go to the recipient by the same date and to
                the IRS by February 28 on paper or March 31 if filed
                electronically.
              </p>
              <p className="mt-4 text-body text-graphite">
                The NEC has no automatic extension, which is the detail that
                catches people. Everything else on this page is about the
                exceptions, and there are more of them than you would hope.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Tuesday in late January and Marisol &mdash;
              I&rsquo;ll call her Marisol &mdash; runs a landscaping company
              with four trucks and a rotating cast of subcontractors. On her
              fridge, between a takeout menu and a school photo, is a sticky
              note that has been there since October. It says &ldquo;1099s
              &mdash; Jan.&rdquo; It does not say which day in January. Past
              Marisol felt that was a detail for future Marisol.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t disorganized. She&rsquo;s running a business on
              one calendar and the IRS is running it on four.
            </p>
            <p className="mt-4 text-body text-graphite">
              Because that&rsquo;s the real problem with the 1099 deadline:
              it isn&rsquo;t one date. It depends on the form, on which copy
              you mean, on what day of the week the 31st lands, and on whether
              you file on paper. Here is every one of those dates for the forms
              covering 2026 payments, sourced to the IRS, so the sticky note
              can finally say something specific.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="the-dates">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The 1099 deadlines for 2027, form by form
            </h2>
            <p className="mt-4 text-body text-graphite">
              The base rules come from the IRS{' '}
              <SourceLink href="https://www.irs.gov/instructions/i1099gi">
                General Instructions for Certain Information Returns
              </SourceLink>
              . The 2027 dates below apply those rules to next year&rsquo;s
              calendar, including the weekend and holiday shifts the IRS spells
              out. Think of the base dates as the recipe and the 2027 dates as
              the cake: same ingredients, but someone still has to check the
              oven.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. 1099-NEC, both copies: Monday, February 1, 2027.
                </strong>{' '}
                The base date is January 31, for the contractor and the IRS
                alike, on paper or electronically. January 31, 2027 is a
                Sunday, so it rolls to Monday.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. 1099-MISC to the recipient: February 1, 2027.
                </strong>{' '}
                Same January 31 base date and the same Sunday shift.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. 1099-MISC with only box 8 or box 10 filled: February 16,
                  2027.
                </strong>{' '}
                Those recipient copies have a February 15 base date. February
                15, 2027 is Washington&rsquo;s Birthday, a federal legal
                holiday, so it moves to Tuesday. In 2026 the same rule produced
                February 17.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. 1099-MISC and most other 1099s to the IRS, on paper:
                  Monday, March 1, 2027.
                </strong>{' '}
                The base date is February 28, which is a Sunday in 2027.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. The same forms filed electronically: Wednesday, March 31,
                  2027.
                </strong>{' '}
                No shift needed. This is the latest date for most small
                businesses, and the NEC is not on this list.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              The IRS publishes its exact dates for each season in the new
              edition of the instructions, so check them when they arrive. If
              you are unsure which form a payment belongs on in the first
              place, start with{' '}
              <Link href="/blog/1099-nec-vs-1099-misc" className={linkClass}>
                1099-NEC vs 1099-MISC
              </Link>{' '}
              and{' '}
              <Link href="/blog/who-gets-a-1099" className={linkClass}>
                who gets a 1099
              </Link>
              , which cover the $2,000 threshold and the people who stay off
              the list.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="two-copies">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Two copies, two clocks
            </h2>
            <p className="mt-4 text-body text-graphite">
              Every 1099 is really two obligations wearing one form number.
              There is the copy you <em>file</em> with the IRS, Copy A, and the
              copy you <em>furnish</em> to the person you paid, Copy B. They
              run on separate clocks, and the IRS penalty table counts them
              separately: it is charged per return or statement.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  For the NEC, the clocks are synchronized.
                </strong>{' '}
                Both copies are due the same day. There is no grace period for
                the IRS copy while the contractor gets theirs.
              </li>
              <li>
                <strong className="text-aubergine">
                  For the MISC, the clocks drift apart.
                </strong>{' '}
                The recipient gets theirs by the end of January, while the IRS
                copy can wait until March. That gap is exactly how people end
                up late on the NEC: they see &ldquo;March 31&rdquo; somewhere
                and assume it covers everything.
              </li>
              <li>
                <strong className="text-aubergine">
                  Mailing on time counts.
                </strong>{' '}
                The IRS treats a recipient statement as furnished on time if it
                is properly addressed and mailed, or posted to a website for
                electronic delivery, on or before the due date. Electronic
                delivery needs the recipient&rsquo;s consent first.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              It&rsquo;s a bit like a wedding where the couple and the
              caterer were sent different start times. Both are your problem
              if either one shows up late.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/old-letters-slot-stone-wall.webp`}
              alt="An old brass letter slot set into a pale stone wall, with the word Letters engraved in script beneath the opening"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="weekend-rule">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Why the dates move: weekends and holidays
            </h2>
            <p className="mt-4 text-body text-graphite">
              The IRS instructions say that when a filing due date falls on a
              Saturday, Sunday or legal holiday, you are on time if you file by
              the next day that is not one of those. Legal holidays here mean
              holidays in the District of Columbia, or a statewide holiday
              where the return is filed.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  It is a shift, not a gift.
                </strong>{' '}
                The rule moves the deadline by a day or two. It does not
                create an extension, and it does not help you if the delay is
                bigger than the weekend.
              </li>
              <li>
                <strong className="text-aubergine">
                  February 28 stays February 28.
                </strong>{' '}
                The instructions note that a leap year does not extend the
                filing deadline. February 29 is not a bonus day for paper
                filers.
              </li>
              <li>
                <strong className="text-aubergine">
                  Plan for the base date anyway.
                </strong>{' '}
                Software support lines, banks and contractors who have not
                sent a W-9 all keep regular hours. Aim for January 31 and
                treat the shift as a cushion you hope not to need.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              We will admit we keep a list of which deadlines land on a
              Sunday each year. Nobody asked us to. It has come in handy
              exactly as often as you would think.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="paper-or-efile">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Paper or e-file: the 10-return rule
            </h2>
            <p className="mt-4 text-body text-graphite">
              Paper is still allowed for small filers, but the bar is low. The
              IRS says that if you are required to file 10 or more information
              returns during the year, you must e-file. The count is not per
              form type: four 1099-NECs and six 1099-MISCs add up to ten.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Count every form, not each type.
                </strong>{' '}
                The ten is a running total across the information returns you
                file, so a business with a few contractors, a landlord and an
                interest payment crosses the line faster than it expects.
              </li>
              <li>
                <strong className="text-aubergine">
                  The IRS has a free portal.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://www.irs.gov/filing/e-file-information-returns-with-iris">
                  Information Returns Intake System, or IRIS
                </SourceLink>
                , lets you file Forms 1099 online at no cost. You need an IRIS
                Transmitter Control Code to use it, and that application is not
                something to start on January 30.
              </li>
              <li>
                <strong className="text-aubergine">
                  Paper filers need Form 1096.
                </strong>{' '}
                Paper Copy A goes on the official scannable form or an approved
                substitute, sent with a Form 1096 summary. A black-and-white
                printout from the IRS website is accepted only for the few
                online fillable forms the instructions name.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Paper 1099s are a little like fax machines: still legal, still
              in use, and slightly alarming to anyone under thirty who watches
              you do it.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="extensions">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Extensions, and the one you cannot get
            </h2>
            <p className="mt-4 text-body text-graphite">
              There are two kinds of extension, one for each copy, and one
              very loud exception.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Filing with the IRS: Form 8809, 30 days, automatic for
                  most forms.
                </strong>{' '}
                You get an automatic 30-day extension of time to file by
                submitting Form 8809 by the original due date. It covers most
                1099s, including the MISC.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Not for the 1099-NEC.
                </strong>{' '}
                The IRS says it plainly: for Forms W-2 and 1099-NEC, no
                automatic extension is available. A non-automatic extension
                exists only in limited circumstances described on Form 8809,
                so plan as if there is none.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Furnishing to recipients: Form 15397, by fax.
                </strong>{' '}
                You can request more time to send recipient copies by faxing
                Form 15397, no earlier than January 1 and no later than the
                date the statements are due. If approved, you generally get up
                to 30 extra days. It is a request, not a right.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              The NEC is the friend who says the party starts at seven and
              means seven. Every other 1099 will at least let you text that
              you are running late.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/bundle-of-envelopes-tied-with-twine.webp`}
              alt="A stack of airmail envelopes and handwritten letters tied together with brown twine on a dark surface"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="who-should-file">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Software, an accountant, or you
            </h2>
            <p className="mt-4 text-body text-graphite">
              Honestly, a lot of businesses do not need us for this. If you
              paid three contractors, each one gave you a W-9 in the spring,
              and your payments run through one bank account, a free IRIS
              filing or your bookkeeping software&rsquo;s 1099 feature will
              handle it in an afternoon. The forms are not the hard part.
            </p>
            <p className="mt-4 text-body text-graphite">
              The hard part is the year that came before them. Here is when it
              stops being an afternoon:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You are chasing W-9s in January.
                </strong>{' '}
                Without a taxpayer ID you cannot complete the form, and a
                contractor who stopped working with you in June has very little
                reason to answer your email.
              </li>
              <li>
                <strong className="text-aubergine">
                  Payments are spread across cards, apps and checks.
                </strong>{' '}
                Card and payment-app payments are generally reported by the
                processor instead, so mixing them in can double-count.
              </li>
              <li>
                <strong className="text-aubergine">
                  You are near ten forms.
                </strong>{' '}
                Once your information returns together reach ten, paper is off
                the table.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              That is where{' '}
              <Link href="/services" className={linkClass}>
                our bookkeeping and payroll services
              </Link>{' '}
              earn their keep: the W-9s are collected when the contractor
              starts, not when the deadline does. If you also run payroll, the
              same January rush includes your fourth-quarter{' '}
              <Link href="/blog/what-is-form-941" className={linkClass}>
                Form 941
              </Link>
              , which is due the same week. It&rsquo;s the tax equivalent of
              two buses arriving at once after a long wait.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="missed-deadline">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What missing the deadline costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The IRS{' '}
              <a
                href="https://www.irs.gov/payments/information-return-penalties"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                information return penalties
              </a>{' '}
              for returns due in 2027 are $60 per return or statement if you
              are up to 30 days late, $130 if you are 31 days late through
              August 1, and $340 after August 1 or if you never file.
              Intentional disregard starts at $690, with no maximum.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Now do Marisol&rsquo;s arithmetic. Say she has eight
              subcontractors and misses the NEC deadline entirely until
              September. That is eight IRS copies and eight contractor copies,
              each potentially $340: up to $5,440 for forms that would have
              taken an afternoon in January. Even catching it in mid-February
              could run $60 times sixteen, or $960.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The lesson is not panic. It is that the penalty grows with time,
              so a late form filed now is always cheaper than a late form filed
              later, and cheapest of all is the one the sticky note finally
              dated correctly.
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
              href: '/blog/who-gets-a-1099',
              eyebrow: 'Blog',
              title: 'Who Gets a 1099?',
              blurb:
                'The three-part test, the $2,000 threshold for 2026 payments, and why the W-9 comes first.',
            },
            {
              href: '/blog/1099-nec-vs-1099-misc',
              eyebrow: 'Blog',
              title: '1099-NEC vs 1099-MISC',
              blurb:
                'Which form a payment belongs on, before you worry about when it is due.',
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
              Want January to be a quiet month?
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
