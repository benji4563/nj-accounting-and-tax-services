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

const SLUG = 'who-gets-a-1099';
const TITLE = 'Who Gets a 1099? The 1099-NEC Rules, Plainly Explained';
const DESCRIPTION =
  'Who gets a 1099? Anyone you pay $2,000 or more for business services, with exceptions. IRS-sourced rules on W-9s, deadlines and penalties.';
const PUBLISHED = '2026-11-02';
const MODIFIED = '2026-11-02';
const HERO = `/blog/${SLUG}/hero-pink-calculator-pen-lined-notebook.webp`;

const TOC = [
  { id: 'the-three-part-test', label: 'The three-part test for who gets a 1099' },
  { id: 'who-does-not-get-one', label: 'Who does not get a 1099-NEC' },
  { id: 'the-2000-threshold', label: 'The $2,000 threshold, and the $600 you remember' },
  { id: 'collect-a-w9', label: 'Collect a W-9 before the first payment' },
  { id: 'contractor-or-employee', label: 'Contractor or employee: the form does not decide' },
  { id: 'sending-the-forms', label: 'Sending the forms, and when to do it yourself' },
  { id: 'what-skipping-costs', label: 'What skipping 1099s costs' },
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
        height: 1067,
        alt: 'Overhead view of a pink calculator and a pink pen on a pale pink sheet beside an open lined notebook on a yellow background',
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
    q: 'Who gets a 1099?',
    a: 'A person you paid for services in the course of your business gets a Form 1099-NEC when the payments reach the IRS threshold, which is $2,000 for tax years beginning after 2025. The worker generally must be someone other than your employee, and payments to corporations, payments by credit card and personal payments are generally left off.',
  },
  {
    q: 'Am I considered self-employed if I get a 1099?',
    a: 'Usually yes. A 1099-NEC reports payments to a nonemployee, and someone paid that way is generally treated as self-employed for those earnings rather than as an employee. The IRS decides worker status by how the relationship actually works, so the form alone does not settle it.',
  },
  {
    q: 'What is the penalty for not filing a 1099 form?',
    a: 'For returns due in 2026 the IRS lists $60 per return if you are up to 30 days late, $130 if you file from day 31 through August 1, and $340 if you file after August 1 or never. Intentional disregard carries $680 per return with no annual maximum. Amounts are adjusted over time, so check the current IRS table.',
  },
  {
    q: 'When is Form 1099-NEC due?',
    a: 'January 31. The IRS says Section 6071(c) requires the form to be filed on or before that date, and the payee statement is due the same day. Gather the paperwork in December so January 31 is a filing day, not a hunting day.',
  },
  {
    q: 'Do I send a 1099 for payments made by credit card?',
    a: 'No. The IRS says credit card, payment card and certain third-party network payments are reported by the payment settlement entity on Form 1099-K, so they are left off your 1099-NEC. Payments by check, cash or direct bank transfer still count toward the threshold.',
  },
  {
    q: 'Do I send a 1099 to a corporation?',
    a: 'Generally no. Payments to corporations are not reported on Form 1099-NEC, with exceptions such as attorneys\' fees. A Form W-9 from the vendor tells you how they are classified, which is why you collect one before you pay.',
  },
  {
    q: 'What if a contractor will not give me a W-9?',
    a: 'Without a taxpayer identification number, you may have to withhold. The IRS says backup withholding applies at a flat 24% when a payee does not provide a TIN or the IRS tells you the one given is incorrect. Ask for the W-9 before the first payment, not after the last.',
  },
  {
    q: 'Can I send a 1099 to someone who should be an employee?',
    a: 'Sending a 1099 does not make someone a contractor. The IRS looks at behavioral control, financial control and the type of relationship, and a worker who is really an employee stays one whatever form you file. If the classification is unclear, settle it before the year ends.',
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
              <time dateTime={PUBLISHED}>November 2, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 2, 2026</time>
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
              alt="Overhead view of a pink calculator and a pink pen on a pale pink sheet beside an open lined notebook on a yellow background"
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
                <strong>Short answer:</strong> Who gets a 1099? A business
                sends a Form 1099-NEC to each person it paid $2,000 or more
                during the year for services, as long as the payment was for
                business purposes and the worker was not an employee. Payments
                to corporations, credit card payments, personal payments and
                wages are generally left off.
              </p>
              <p className="mt-4 text-body text-graphite">
                The $2,000 figure applies to tax years beginning after 2025, so
                it governs the forms you send in January for work paid this
                year. The form is due January 31.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s the first week of December and Tomasz &mdash;
              I&rsquo;ll call him Tomasz &mdash; owns a small bakery and has
              just opened a folder labelled &ldquo;misc.&rdquo; Inside: an
              invoice from a photographer, one from a guy who fixed the oven
              fan, a Venmo screenshot for his nephew who rebuilt the website,
              and a receipt from a company whose name sounds like a law firm
              and a cough drop.
            </p>
            <p className="mt-4 text-body text-graphite">
              He isn&rsquo;t careless. Nobody told him the folder was a
              homework assignment.
            </p>
            <p className="mt-4 text-body text-graphite">
              The rules are shorter than the dread. Below: the test the IRS
              applies, who stays off the list, the threshold, why you collect a
              W-9 first, and where the line sits between a contractor and an
              employee.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="the-three-part-test">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The three-part test for who gets a 1099
            </h2>
            <p className="mt-4 text-body text-graphite">
              The IRS publishes the rule in its{' '}
              <SourceLink href="https://www.irs.gov/instructions/i1099mec">
                instructions for Form 1099-NEC
              </SourceLink>
              . Boiled down, a person gets a form from you when all three of
              these are true:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. You paid them for services in the course of your
                  business.
                </strong>{' '}
                A hobby, a personal favour or a gift to your cousin does not
                count. Only payments made for business purposes are reportable.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. They were not your employee.
                </strong>{' '}
                Employees get a W-2 and have taxes taken out of their pay.
                Everyone else you pay for services is a candidate for a 1099.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. The total reached the threshold.
                </strong>{' '}
                For this year that is $2,000 across the whole year, not per
                invoice.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Three questions is a reasonable length for a test. It is also,
              somehow, enough to turn a folder of invoices into a small
              mystery novel in which every vendor is a suspect.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="who-does-not-get-one">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who does not get a 1099-NEC
            </h2>
            <p className="mt-4 text-body text-graphite">
              The same IRS page lists what stays off the form. This is the
              part that saves you the most paperwork, because a good share of
              that misc folder is probably not reportable at all:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Corporations, generally.
                </strong>{' '}
                Payments to corporations are not reported on the 1099-NEC,
                with exceptions such as attorneys&rsquo; fees. The company with
                the law-firm-and-cough-drop name is likely one of these, which
                is exactly why you ask for a W-9.
              </li>
              <li>
                <strong className="text-aubergine">
                  Anything paid by card.
                </strong>{' '}
                Credit card, payment card and certain third-party network
                payments are reported by the payment company on Form 1099-K,
                so you leave them off yours.
              </li>
              <li>
                <strong className="text-aubergine">
                  Personal payments.
                </strong>{' '}
                Only business payments are reportable. Paying a friend back
                for a concert ticket is not a filing event.
              </li>
              <li>
                <strong className="text-aubergine">
                  Wages and merchandise.
                </strong>{' '}
                Employee pay goes on a W-2, and buying goods or freight is not
                paying for services.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              That card rule matters more than it sounds. The oven-fan guy who
              took your card is somebody else&rsquo;s paperwork. If you are
              unsure how a payment app fits, our guide on{' '}
              <Link
                href="/blog/do-you-have-to-claim-venmo-on-taxes"
                className={linkClass}
              >
                whether you have to claim Venmo on taxes
              </Link>{' '}
              covers the 1099-K side of the same coin.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/toolbox-screwdrivers-workshop-bench.webp`}
              alt="A clear plastic tray of screwdrivers sitting on a dusty workshop bench with blurred equipment in the foreground"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="the-2000-threshold">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The $2,000 threshold, and the $600 you remember
            </h2>
            <p className="mt-4 text-body text-graphite">
              If you learned this rule a few years ago, you learned $600, and
              that number lived in everyone&rsquo;s head rent-free. It no
              longer applies to this form. The IRS now says the minimum for
              reporting nonemployee compensation on Form 1099-NEC increased to
              $2,000 for tax years beginning after 2025.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  It is a yearly total per person.
                </strong>{' '}
                Six $400 invoices from the same freelancer add up to $2,400,
                and that clears the bar.
              </li>
              <li>
                <strong className="text-aubergine">
                  It is a reporting line, not a tax-free line.
                </strong>{' '}
                The freelancer who earned $1,900 from you still owes tax on it.
                You just do not send a form.
              </li>
              <li>
                <strong className="text-aubergine">
                  Older articles are out of date.
                </strong>{' '}
                Anything still saying $600 for a 1099-NEC predates the change.
                Check the date before you trust it, including ours.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              One exception worth knowing: the IRS page keeps $600 for gross
              proceeds paid to attorneys, which are reported on a different
              form. If a lawyer is on your list, double-check that line. Our
              side-by-side on{' '}
              <Link href="/blog/1099-nec-vs-1099-misc" className={linkClass}>
                1099-NEC vs 1099-MISC
              </Link>{' '}
              shows which payments go on which form.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="collect-a-w9">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Collect a W-9 before the first payment
            </h2>
            <p className="mt-4 text-body text-graphite">
              A W-9 is a one-page form where a vendor tells you their legal
              name, how they are classified and their taxpayer identification
              number. Asking for it on day one feels fussy, in the way that
              asking for a spare key feels fussy until the day it does not.
            </p>
            <p className="mt-4 text-body text-graphite">
              There is a practical reason beyond manners. The IRS explains in{' '}
              <SourceLink href="https://www.irs.gov/taxtopics/tc307">
                Topic 307 on backup withholding
              </SourceLink>{' '}
              that a payer withholds at a flat 24% when a payee does not give a
              TIN, or when the IRS says the TIN given is wrong.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Ask before you pay.</strong>{' '}
                Chasing a number in January, after the work is done and the
                relationship has cooled, is the slow way.
              </li>
              <li>
                <strong className="text-aubergine">
                  Keep it with the invoices.
                </strong>{' '}
                The W-9 holds everything the 1099 needs, so the form practically
                fills itself in.
              </li>
              <li>
                <strong className="text-aubergine">
                  It answers the corporation question.
                </strong>{' '}
                The classification tells you whether the vendor is likely to
                need a 1099 at all.
              </li>
            </ul>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="contractor-or-employee">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Contractor or employee: the form does not decide
            </h2>
            <p className="mt-4 text-body text-graphite">
              Many owners think a 1099 is a label you choose, like picking a
              font. It is not. The IRS uses a three-part common-law test, set
              out on its page about{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee">
                independent contractors versus employees
              </SourceLink>
              :
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Behavioral control.</strong>{' '}
                Do you control, or have the right to control, what the worker
                does and how the job gets done?
              </li>
              <li>
                <strong className="text-aubergine">Financial control.</strong>{' '}
                Who controls the business side: how they are paid, who
                reimburses expenses and who supplies the tools?
              </li>
              <li>
                <strong className="text-aubergine">
                  Type of relationship.
                </strong>{' '}
                Written contracts, employee-style benefits, ongoing work and
                whether the work is central to your business all count.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              A designer who sets her own hours, uses her own laptop and also
              works for six other clients looks like a contractor. Someone who
              arrives at nine, uses your equipment and takes direction on every
              task, then gets a 1099 because that is what you did last year,
              looks like an employee wearing a contractor costume. The costume
              does not hold up. Employees bring a quarterly payroll return
              with them, which we explain in{' '}
              <Link href="/blog/what-is-form-941" className={linkClass}>
                what Form 941 is and when it is due
              </Link>
              .
            </p>
            <p className="mt-4 text-body text-graphite">
              Household help is a different situation again, as we explain in{' '}
              <Link
                href="/blog/do-babysitters-have-to-pay-taxes"
                className={linkClass}
              >
                do babysitters have to pay taxes
              </Link>
              . If you cannot tell which side of the line someone falls on,
              that is a good use of a short call before the year closes.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/bundle-of-letters-tied-with-twine.webp`}
              alt="A stack of handwritten letters and airmail envelopes tied together with twine on a dark surface"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="sending-the-forms">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Sending the forms, and when to do it yourself
            </h2>
            <p className="mt-4 text-body text-graphite">
              The deadline is January 31. The IRS says Section 6071(c) requires
              the 1099-NEC to be filed on or before that date, and the payee
              copy goes out by then too. January 31 arrives with all the
              warning of a surprise party, so the easy way is to do the sorting
              in December.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Add up each person&rsquo;s year.
                </strong>{' '}
                Checks, cash and bank transfers count. Card payments do not.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Match totals to W-9s.
                </strong>{' '}
                Anyone at $2,000 or more with no W-9 is your first phone call.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Send the payee copy and file with the IRS.
                </strong>{' '}
                Both by January 31.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              Now the honest part. If you have one or two contractors,
              you probably do not need an accountant for this. A tidy
              spreadsheet, a W-9 for each person and an evening in January is
              plenty, and our post on{' '}
              <Link
                href="/blog/when-should-i-start-my-taxes"
                className={linkClass}
              >
                when to start your taxes
              </Link>{' '}
              shows how to get ahead of the calendar.
            </p>
            <p className="mt-4 text-body text-graphite">
              It starts to make sense to hand it off when the list grows past a
              handful, when payments run through several channels, or when
              you are not sure who is an employee. That is where our{' '}
              <Link href="/services" className={linkClass}>
                monthly bookkeeping service
              </Link>{' '}
              pays for itself, because the totals are already sitting in the
              books in December. Our{' '}
              <Link href="/pricing" className={linkClass}>
                pricing
              </Link>{' '}
              is published in full. We are the sort of people who get a small
              thrill from a clean W-9 folder, and we have made our peace with
              that.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="what-skipping-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What skipping 1099s costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The IRS sets penalties per form, not per business. Its{' '}
              <a
                href="https://www.irs.gov/payments/information-return-penalties"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                information return penalties table
              </a>{' '}
              for returns due in 2026 lists $60 if you are up to 30 days late,
              $130 from day 31 through August 1, and $340 after that or if you
              never file. Intentional disregard is $680 per return.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Do the arithmetic on an illustrative bakery with ten contractors
              over the threshold and none filed. Ten forms at $340 is $3,400
              on the filing side alone, for paperwork that would have taken one
              evening. The IRS publishes the penalty amounts as adjusted over
              time, so treat these as the current figures, not forever
              figures.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              If a deadline has already slipped, it is fixable and usually
              cheaper the sooner you act. Our guide to{' '}
              <Link
                href="/blog/what-happens-if-i-didnt-file-last-years-taxes"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                what to do about last year&rsquo;s unfiled taxes
              </Link>{' '}
              walks through the same logic.
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
                'Gifts versus income, and what the 1099-K threshold actually decides.',
            },
            {
              href: '/blog/when-should-i-start-my-taxes',
              eyebrow: 'Blog',
              title: 'When Should I Start My Taxes?',
              blurb:
                'A calendar that keeps January from turning into a scavenger hunt.',
            },
            {
              href: '/pricing',
              eyebrow: 'Pricing',
              title: 'Flat monthly pricing, published upfront',
              blurb:
                'Bookkeeping and tax plans from $299 a month, with no surprise invoices.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Staring at a folder labelled &ldquo;misc&rdquo;?
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
