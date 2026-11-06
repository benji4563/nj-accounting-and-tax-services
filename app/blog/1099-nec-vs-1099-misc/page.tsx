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

const SLUG = '1099-nec-vs-1099-misc';
const TITLE = '1099-NEC vs 1099-MISC: Which Form, Plainly Explained';
const DESCRIPTION =
  '1099-NEC vs 1099-MISC: NEC is for paying people for services, MISC is for rent, royalties, prizes and the rest. IRS-sourced thresholds and deadlines.';
const PUBLISHED = '2026-11-03';
const MODIFIED = '2026-11-03';
const HERO = `/blog/${SLUG}/hero-four-rusty-mailboxes-wooden-wall.webp`;

const TOC = [
  { id: 'one-question', label: 'The one question that picks the form' },
  { id: 'what-goes-on-1099-nec', label: 'What goes on a 1099-NEC' },
  { id: 'what-goes-on-1099-misc', label: 'What goes on a 1099-MISC' },
  { id: 'thresholds', label: 'The thresholds for payments made in 2026' },
  { id: 'deadlines', label: 'The deadlines, side by side' },
  { id: 'lawyers-and-landlords', label: 'Lawyers, landlords and the payments that split' },
  { id: 'wrong-form-cost', label: 'What the wrong form costs' },
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
        alt: 'Four old metal mailboxes, two pale green and two rusted orange, mounted in a row on a weathered wooden wall',
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
    q: 'What is the difference between a 1099-NEC and a 1099-MISC?',
    a: 'Form 1099-NEC reports nonemployee compensation, meaning payments to people who are not your employees for services they performed for your business. Form 1099-MISC reports other business payments, such as rents, royalties, prizes and awards, medical and health care payments, and gross proceeds paid to an attorney. Service work goes on the NEC; most other reportable payments go on the MISC.',
  },
  {
    q: 'What is the 1099-MISC threshold for 2026?',
    a: 'For tax years beginning after 2025, the IRS says the general threshold for Form 1099-MISC rose to $2,000, the same as Form 1099-NEC. Some lines keep their own amounts: royalties and substitute payments are reportable at $10, and gross proceeds paid to an attorney and fish purchased for resale at $600.',
  },
  {
    q: 'When are Forms 1099-NEC and 1099-MISC due?',
    a: 'Form 1099-NEC is due to both the IRS and the recipient by January 31. Form 1099-MISC is due to the recipient by January 31 and to the IRS by February 28 on paper or March 31 if filed electronically. When a date falls on a weekend or legal holiday, it moves to the next business day.',
  },
  {
    q: 'Do I need to send a 1099 to my accounting firm?',
    a: 'Only if the firm is not a corporation and you paid it $2,000 or more for services during the year, in which case it goes on Form 1099-NEC. Payments to corporations are generally not reportable, and card payments are reported on Form 1099-K instead. Ask the firm for a Form W-9, which shows how it is classified.',
  },
  {
    q: 'What happens if I get a 1099-NEC but don\'t have a business?',
    a: 'The income is still reportable on your tax return even if you never thought of yourself as running a business. Payment for services as a nonemployee is generally treated as self-employment income, which can mean self-employment tax as well as income tax. If the form is wrong, ask the payer to issue a corrected one.',
  },
  {
    q: 'Do attorney fees go on a 1099-NEC or a 1099-MISC?',
    a: 'Fees paid to a lawyer for legal services to your business go on Form 1099-NEC at $2,000 or more. Gross proceeds paid to an attorney that are not for the attorney\'s own services, such as a settlement passed through to a client, go in box 10 of Form 1099-MISC at $600 or more. Both rules apply even when the law firm is a corporation.',
  },
  {
    q: 'Do I report rent paid to a property manager on a 1099-MISC?',
    a: 'No. The IRS says you do not report rent paid to a real estate agent or property manager on Form 1099-MISC; the agent or manager reports the rent it passes on to the owner. If you pay rent directly to an individual landlord, it goes in box 1 of Form 1099-MISC once it reaches the threshold.',
  },
  {
    q: 'Can I get an extension for Form 1099-NEC?',
    a: 'Not an automatic one. The IRS says no automatic extension is available for Forms W-2 and 1099-NEC, while most other information returns can get an automatic 30-day extension to file by submitting Form 8809. Plan on January 31 for every NEC.',
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
              <time dateTime={PUBLISHED}>November 3, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>November 3, 2026</time>
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
              alt="Four old metal mailboxes, two pale green and two rusted orange, mounted in a row on a weathered wooden wall"
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
                <strong>Short answer:</strong> The 1099 NEC vs 1099 MISC
                question comes down to what the money paid for. Use Form 1099-NEC for payments
                to non-employees for services they performed for your business.
                Use Form 1099-MISC for other business payments, such as rent,
                royalties, prizes and awards, medical and health care payments,
                and gross proceeds paid to an attorney.
              </p>
              <p className="mt-4 text-body text-graphite">
                For payments made in 2026, both forms generally use a $2,000
                threshold. The 1099-NEC is due January 31; the 1099-MISC goes to
                the recipient by January 31 and to the IRS by February 28 on
                paper or March 31 electronically.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Tuesday evening in November and Rafael &mdash;
              I&rsquo;ll call him Rafael &mdash; runs a small yoga studio. He
              paid a guest instructor to teach Saturday mornings all year. He
              also pays the retired dentist next door $250 a month to use the
              back parking lot, in cash, in an envelope, handed over the fence
              like a slightly suspicious garden party.
            </p>
            <p className="mt-4 text-body text-graphite">
              He knows both of them probably need &ldquo;a 1099.&rdquo; He has
              just learned there are two kinds of 1099, and the dentist is not
              on the same one as the instructor.
            </p>
            <p className="mt-4 text-body text-graphite">
              He isn&rsquo;t behind. He&rsquo;s at the exact point where most
              owners discover the IRS has more than one mailbox. Here&rsquo;s
              how to sort the envelopes.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="one-question">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The one question that picks the form
            </h2>
            <p className="mt-4 text-body text-graphite">
              Ask what the payment was for. If someone did work for your
              business and they are not your employee, that is nonemployee
              compensation, and it belongs on the 1099-NEC. If the money paid
              for something other than a person&rsquo;s services &mdash; using
              a building, using a creative work, winning a prize &mdash; it is
              a candidate for the 1099-MISC.
            </p>
            <p className="mt-4 text-body text-graphite">
              Think of two mail slots on the same wall. One is labelled
              &ldquo;people who did a job.&rdquo; The other is labelled
              &ldquo;everything else that cost money,&rdquo; which is a very
              honest label and also the kind of drawer every kitchen has.
            </p>
            <p className="mt-4 text-body text-graphite">
              Rafael&rsquo;s instructor taught classes: that is a service, so
              the NEC slot. The dentist did not teach anything. He owns
              asphalt. That is rent, so the MISC slot. Who qualifies for a form
              at all &mdash; employees, corporations, card payments &mdash; is
              its own topic, and our guide to{' '}
              <Link href="/blog/who-gets-a-1099" className={linkClass}>
                who gets a 1099
              </Link>{' '}
              covers that test in full.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="what-goes-on-1099-nec">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What goes on a 1099-NEC
            </h2>
            <p className="mt-4 text-body text-graphite">
              The 1099-NEC is the narrower of the two. According to the IRS{' '}
              <SourceLink href="https://www.irs.gov/instructions/i1099mec">
                instructions for Forms 1099-MISC and 1099-NEC
              </SourceLink>
              , it is mainly for:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Fees for services by a non-employee.
                </strong>{' '}
                Freelancers, independent contractors, consultants, the person
                who rebuilt your website, the guest instructor. Box 1.
              </li>
              <li>
                <strong className="text-aubergine">
                  Attorneys&rsquo; fees for legal services.
                </strong>{' '}
                Even when the law firm is a corporation, which is one of the
                few times a corporation lands on this form.
              </li>
              <li>
                <strong className="text-aubergine">
                  Direct sales of $5,000 or more.
                </strong>{' '}
                Consumer products sold to a buyer for resale can be flagged
                with a checkbox in box 2 of the NEC, or box 7 of the MISC. The
                IRS says to use one form for it, not both.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              That is most of it. If you only ever pay people to do things,
              the NEC is the only 1099 you will meet, and you can skip the next
              section with a clear conscience and a cup of tea.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/wall-of-labelled-wooden-drawers.webp`}
              alt="A wall of small wooden card-catalogue drawers, each with a white paper label and a metal handle"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="what-goes-on-1099-misc">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What goes on a 1099-MISC
            </h2>
            <p className="mt-4 text-body text-graphite">
              The 1099-MISC is the form with the most drawers. The boxes a
              typical small business will actually use are:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Box 1, rents.</strong>{' '}
                Office space, a storage unit, equipment, or a parking lot owned
                by a retired dentist, when you pay the owner directly.
              </li>
              <li>
                <strong className="text-aubergine">Box 2, royalties.</strong>{' '}
                Payments for the right to use someone&rsquo;s intellectual
                property, such as a licensed song, photo or book.
              </li>
              <li>
                <strong className="text-aubergine">
                  Box 3, other income.
                </strong>{' '}
                Prizes and awards that are not for services, and certain
                damages. The contest winner who gets $2,500 from your shop
                lands here, not on the NEC.
              </li>
              <li>
                <strong className="text-aubergine">
                  Box 6, medical and health care payments.
                </strong>{' '}
                Payments to providers of medical or health care services, and
                this one applies even when the provider is a corporation.
              </li>
              <li>
                <strong className="text-aubergine">
                  Box 10, gross proceeds paid to an attorney.
                </strong>{' '}
                Money that passes through a lawyer but is not their fee, such
                as a settlement.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The form also has boxes for crop insurance, fishing boat
              proceeds, fish purchased for resale and deferred compensation. If
              your business has a fishing boat, you already know more about
              paperwork than this article does.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="thresholds">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The thresholds for payments made in 2026
            </h2>
            <p className="mt-4 text-body text-graphite">
              For years, both forms ran on $600, and that number is still
              tattooed on the memory of every bookkeeper alive. The IRS now
              says that for tax years beginning after 2025, the threshold
              increased to $2,000 and may be adjusted for inflation beginning
              in 2027. That governs the forms you send in early 2027 for money
              paid this year.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">$2,000.</strong>{' '}
                Nonemployee compensation on the NEC, plus rents, other income,
                medical and health care payments and crop insurance on the
                MISC.
              </li>
              <li>
                <strong className="text-aubergine">$600.</strong>{' '}
                Gross proceeds paid to an attorney, and fish purchased for
                resale. These did not move.
              </li>
              <li>
                <strong className="text-aubergine">$10.</strong>{' '}
                Royalties and substitute payments in lieu of dividends or
                interest. Ten dollars. Somewhere a songwriter is getting a form
                for a sandwich.
              </li>
              <li>
                <strong className="text-aubergine">$5,000.</strong>{' '}
                Direct sales of consumer products for resale, on either form.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Rafael&rsquo;s dentist gets $3,000 a year in parking rent, so he
              clears the bar and gets a 1099-MISC. And a reporting threshold is
              not a tax threshold: someone paid $1,800 still owes tax on it;
              you just do not send a form.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="deadlines">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The deadlines, side by side
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is where the two forms really part ways. They are
              siblings with the same surname and different birthdays, and
              the IRS does not accept &ldquo;I thought it was the other
              one&rsquo;s party&rdquo; as an excuse. Section
              6071(c) requires the 1099-NEC to be filed with the IRS by January
              31, and the IRS{' '}
              <SourceLink href="https://www.irs.gov/instructions/i1099gi">
                general instructions for information returns
              </SourceLink>{' '}
              say plainly that there is no automatic extension for it.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. 1099-NEC: January 31, to everyone.
                </strong>{' '}
                The recipient&rsquo;s copy and the IRS copy are both due that
                day, on paper or electronically.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. 1099-MISC to the recipient: January 31.
                </strong>{' '}
                If you report amounts in box 8 or box 10, the recipient copy
                is due February 15 instead.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. 1099-MISC to the IRS: February 28 or March 31.
                </strong>{' '}
                February 28 if you file on paper, March 31 if you file
                electronically.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Weekends move the date.
                </strong>{' '}
                When a deadline falls on a weekend or legal holiday, it moves
                to the next business day. For example, the 2025 instructions
                list February 2, 2026 for the NEC, because January 31 was a
                Saturday. Next season&rsquo;s shifted dates are worked out in
                our{' '}
                <Link href="/blog/1099-filing-deadline" className={linkClass}>
                  1099 filing deadline calendar for 2027
                </Link>
                .
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              One more rule: if you file 10 or more information returns in
              total, the IRS requires you to file them electronically. That
              count includes every form, so it&rsquo;s easy to reach without
              noticing. Before your first January, our post on{' '}
              <Link href="/blog/when-should-i-start-my-taxes" className={linkClass}>
                when to start your taxes
              </Link>{' '}
              helps you start early enough that none of these dates is a
              surprise.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/wooden-house-model-keys-lease.webp`}
              alt="A small wooden model house and a set of keys resting on a printed document on a teal surface"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="lawyers-and-landlords">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Lawyers, landlords and the payments that split
            </h2>
            <p className="mt-4 text-body text-graphite">
              A few payments look like they belong in one slot and actually go
              in the other, or nowhere:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  One lawyer, two forms.
                </strong>{' '}
                The lawyer&rsquo;s fee for advising your business goes on the
                NEC. Settlement money paid through the same lawyer to someone
                else goes in box 10 of the MISC. Same envelope, different
                mailbox.
              </li>
              <li>
                <strong className="text-aubergine">
                  Rent through a property manager.
                </strong>{' '}
                You do not report it. The IRS says the agent or property
                manager reports the rent it passes on to the owner. Rent paid
                straight to the owner, like Rafael&rsquo;s envelope over the
                fence, is yours to report.
              </li>
              <li>
                <strong className="text-aubergine">Anything paid by card.</strong>{' '}
                Card and certain payment-app payments are reported on Form
                1099-K by the payment company, so they stay off both of yours.
                Our post on{' '}
                <Link
                  href="/blog/do-you-have-to-claim-venmo-on-taxes"
                  className={linkClass}
                >
                  whether you have to claim Venmo on taxes
                </Link>{' '}
                explains that third form.
              </li>
              <li>
                <strong className="text-aubergine">
                  A contractor who also rents you equipment.
                </strong>{' '}
                The labour goes on the NEC and the equipment rental on the
                MISC. Yes, one person can get two forms from you. They will
                live.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Now the honest part. If you pay three contractors and nothing
              else, you probably do not need us for this. Collect a W-9 from
              each, add up the year, and file the NEC by January 31; the
              IRS&rsquo;s free online filing system will handle a short list.
            </p>
            <p className="mt-4 text-body text-graphite">
              It starts to make sense to hand it off when you have both forms
              in play, a lawyer or landlord on the list, or payments scattered
              across cash, checks and apps. That is where our{' '}
              <Link href="/services" className={linkClass}>
                monthly bookkeeping service
              </Link>{' '}
              earns its keep, because every payment is already tagged by what
              it was for. The{' '}
              <Link href="/pricing" className={linkClass}>
                pricing
              </Link>{' '}
              is published in full. We will admit to finding box 10 genuinely
              interesting, which tells you something about our weekends.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="wrong-form-cost">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What the wrong form costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The most common mistake is not filing the wrong box. It is
              putting contractor pay on a MISC, seeing the March 31 date, and
              relaxing. The NEC deadline was January 31 the whole time.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The IRS penalties apply to failing to file a correct information
              return on time, and they are charged per form. Its{' '}
              <a
                href="https://www.irs.gov/payments/information-return-penalties"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon"
              >
                information return penalties table
              </a>{' '}
              for returns due in 2026 lists $60 per return up to 30 days late,
              $130 from day 31 through August 1, and $340 after that or if
              never filed. A missed payee copy is penalised separately.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Do the arithmetic on an illustrative studio with six contractors
              and one landlord, every form late past August. Seven forms at
              $340 is $2,380 on the IRS side, and potentially the same again
              for the payee copies. The figures are adjusted over time, so
              check the current table, but the shape does not change: an
              evening in December is cheaper.
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
                'The three-part test, who stays off the list, and why you collect a W-9 first.',
            },
            {
              href: '/blog/do-you-have-to-claim-venmo-on-taxes',
              eyebrow: 'Blog',
              title: 'Do You Have to Claim Venmo on Taxes?',
              blurb:
                'Gifts versus income, and how the 1099-K fits beside the other two.',
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
              Not sure which mailbox an envelope goes in?
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
