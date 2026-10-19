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

const SLUG = 'accounting-for-donations-to-nonprofit-organizations';
const TITLE = 'Accounting for Donations to Nonprofit Organizations: 6 Rules';
const DESCRIPTION =
  'Accounting for donations to nonprofit organizations: when to record a gift, pledges, restrictions, in-kind gifts, volunteers and IRS receipts, with sources.';
const PUBLISHED = '2026-10-19';
const MODIFIED = '2026-10-19';
const HERO = `/blog/${SLUG}/hero-donated-canned-goods-on-table.webp`;

const TOC = [
  { id: 'record-when-promised', label: 'Rule 1: Record the gift when it is promised, not when the check clears' },
  { id: 'conditional-gifts', label: 'Rule 2: A matching gift is not revenue until the match happens' },
  { id: 'tag-restrictions', label: 'Rule 3: Tag every restriction the day the money arrives' },
  { id: 'in-kind-donations', label: 'Rule 4: Donated stuff goes on the books at fair value' },
  { id: 'volunteer-time', label: 'Rule 5: Most volunteer hours never touch the books' },
  { id: 'donor-receipts', label: 'Rule 6: The receipt is a tax document, not a thank-you card' },
  { id: 'cost-of-one-gala', label: 'What one sloppy gala can cost' },
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
        alt: 'Stacks of unlabeled food cans beside bags of bread on a table at a donation drive',
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
    q: 'How do you record donations in nonprofit accounting?',
    a: 'Record a cash donation as contribution revenue when it is received, and an unconditional pledge as contribution revenue and a pledge receivable when the promise is made. Classify each gift as with or without donor restrictions at that moment. Gifts of goods are recorded at fair value, and gifts with a barrier and a right of return are not recorded as revenue until the barrier is met.',
  },
  {
    q: 'Are donations considered revenue for a nonprofit?',
    a: 'Yes. Under U.S. GAAP for not-for-profits, unconditional donations are reported as contribution revenue in the statement of activities, split between net assets with donor restrictions and net assets without donor restrictions. They are not treated as loans or as deferred income, unless the gift is conditional.',
  },
  {
    q: 'What is the journal entry for a pledge to a nonprofit?',
    a: 'For an unconditional pledge, debit pledges receivable and credit contribution revenue, in the restricted or unrestricted column as the donor specified. When the cash arrives, debit cash and credit pledges receivable. Pledges payable over more than one year are generally recorded at their present value.',
  },
  {
    q: 'How do you account for in-kind donations?',
    a: 'Record donated goods as an asset or expense and as contribution revenue at their fair value on the date received. Contributed nonfinancial assets are shown as a separate line from cash gifts in the statement of activities, with disclosures about how they were used and valued. Gifts of time follow separate, narrower rules.',
  },
  {
    q: 'Do you record volunteer hours as donations?',
    a: 'Usually not. Contributed services are recognized only if they create or enhance a nonfinancial asset, or if they require specialized skills, are provided by people with those skills, and would otherwise have to be purchased. A volunteer accountant doing your books qualifies; a volunteer serving soup generally does not.',
  },
  {
    q: 'Does a nonprofit have to give a receipt for donations?',
    a: "For a single contribution of $250 or more, the donor needs a written acknowledgment from the charity to claim a deduction, and the IRS says the donor is responsible for obtaining it. It must state the amount of cash or describe any noncash gift, and say whether the charity provided goods or services in return. Separately, a charity that receives a payment of more than $75 that is partly a gift and partly for goods or services must give a written disclosure.",
  },
  {
    q: 'What is the penalty for not giving a quid pro quo disclosure?',
    a: 'The IRS penalty is $10 per contribution, up to $5,000 per fundraising event or mailing. The charity can avoid it by showing reasonable cause for the failure.',
  },
  {
    q: 'What is the difference between restricted and unrestricted donations?',
    a: 'A restricted donation can only be used for the purpose or time period the donor specified, such as a building fund. An unrestricted donation can be used for any purpose within the mission. When the restriction is met, the amount is reclassified from net assets with donor restrictions to net assets without donor restrictions.',
  },
];

const CANONICAL_URL = `https://njaccountstax.com/blog/${SLUG}`;
const IMAGE_URL = `https://njaccountstax.com${HERO}`;

const linkClass =
  'border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon';

const darkLinkClass =
  'border-b-[1.5px] border-ivory pb-0.5 font-medium text-ivory hover:border-persimmon';

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
            <div className="section-eyebrow mb-3">For nonprofit treasurers and directors</div>
            <h1 className="font-display text-h1 text-aubergine">{TITLE}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-graphite/75">
              <time dateTime={PUBLISHED}>October 19, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 19, 2026</time>
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
              alt="Stacks of unlabeled food cans beside bags of bread on a table at a donation drive"
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
                <strong>Short answer:</strong> Accounting for donations to
                nonprofit organizations comes down to recording each gift as
                contribution revenue when it is received or unconditionally
                promised, classifying it as with or without donor restrictions
                at that moment, and valuing noncash gifts at fair value. Gifts
                that depend on a condition wait until the condition is met,
                most volunteer time is not recorded at all, and donors giving
                $250 or more need a written acknowledgment.
              </p>
              <p className="mt-4 text-body text-graphite">
                The accounting rules come from U.S. GAAP for not-for-profits;
                the receipt rules come from the IRS. Most small nonprofits get
                tripped up where the two meet.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s the Monday after the spring gala, and Dolores &mdash;
              I&rsquo;ll call her Dolores &mdash; is the volunteer treasurer of
              a food pantry. On the dining table: a cash box, a stack of
              checks, a signed pledge card for $10,000 &ldquo;over the next two
              years,&rdquo; a list of who won the silent auction, and a
              treadmill. Someone donated a treadmill. It is in her garage.
            </p>
            <p className="mt-4 text-body text-graphite">
              Every one of those things is a donation, and almost every one of
              them gets recorded differently. The checks are easy. The pledge
              is revenue now, even though the money isn&rsquo;t here. The
              auction winners need a letter that tells them how much of their
              bid they can actually deduct. And the treadmill needs a value,
              which is a sentence nobody wants to type into accounting
              software.
            </p>
            <p className="mt-4 text-body text-graphite">
              Dolores isn&rsquo;t bad at this. She&rsquo;s doing a
              professional&rsquo;s job on a volunteer&rsquo;s evenings.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here are the six rules that cover nearly every gift a small
              nonprofit receives, in the order the questions usually arrive.
              If you need the bigger picture first &mdash; what funds are and
              why nonprofits keep separate ones &mdash; start with our plain
              guide to{' '}
              <Link href="/blog/fund-accounting" className={linkClass}>
                fund accounting basics
              </Link>
              , then come back.
            </p>
          </div>
        </Section>

        {/* 1 — RECORD WHEN PROMISED */}
        <Section background="ivory" id="record-when-promised">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Rule 1: Record the gift when it is promised, not when the check clears
            </h2>
            <p className="mt-4 text-body text-graphite">
              Under the not-for-profit rules in U.S. GAAP, an unconditional
              promise to give is revenue the day it is made. That surprises
              people who run their books on a checkbook basis, because it means
              recording income you have not been paid.
            </p>
            <p className="mt-4 text-body text-graphite">
              It works the same way an invoice does in a business. If a
              plumber sends a bill, the work is income when it&rsquo;s billed,
              not when the customer finally gets round to paying &mdash; which,
              with some customers, is roughly when the next leak happens. Our
              explainer on{' '}
              <Link href="/blog/accrual-basis-accounting" className={linkClass}>
                accrual basis accounting
              </Link>{' '}
              walks through the same idea for businesses.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">A cash or check gift.</strong>{' '}
                Debit cash, credit contribution revenue. Done.
              </li>
              <li>
                <strong className="text-aubergine">A signed pledge.</strong>{' '}
                Debit pledges receivable, credit contribution revenue. When the
                money arrives, debit cash and credit pledges receivable. The
                revenue was already counted; the cash just catches up.
              </li>
              <li>
                <strong className="text-aubergine">A pledge spread over years.</strong>{' '}
                Dolores&rsquo;s two-year, $10,000 pledge is recorded now, but
                multi-year pledges are generally recorded at a discounted
                present value, and the part due later carries an implied time
                restriction. This is the point where a treasurer usually wants
                a second pair of eyes.
              </li>
              <li>
                <strong className="text-aubergine">A verbal &ldquo;we&rsquo;ll probably give again&rdquo;.</strong>{' '}
                Not a promise. Intentions are lovely, and they are not
                receivables.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              One honest caveat: a very small nonprofit that keeps cash-basis
              books and is not required to produce GAAP financial statements
              may not record pledges at all until they are paid. That is a
              legitimate choice for a tiny group. It stops working the moment a
              bank, grantor or auditor asks for GAAP statements.
            </p>
          </div>
        </Section>

        {/* 2 — CONDITIONAL GIFTS */}
        <Section background="cream" id="conditional-gifts">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Rule 2: A matching gift is not revenue until the match happens
            </h2>
            <p className="mt-4 text-body text-graphite">
              &ldquo;We&rsquo;ll give you $10,000 if you raise $10,000 by
              June&rdquo; feels like money in the bank. It isn&rsquo;t yet. A
              gift is conditional when the agreement has both a barrier the
              nonprofit must overcome and a right for the donor to take the
              money back, or not pay it, if the barrier is missed.
            </p>
            <p className="mt-4 text-body text-graphite">
              Think of it as a gym that promises a refund if you attend thirty
              classes. Until class thirty, the refund is a hope with a
              punch card.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Barriers that count.</strong>{' '}
                A matching requirement, a measurable level of service (serve
                500 families), or a specific outcome.
              </li>
              <li>
                <strong className="text-aubergine">Things that don&rsquo;t count.</strong>{' '}
                Routine reporting, a requirement to send an annual update, or
                ordinary compliance. Those are paperwork, not barriers, and the
                gift is unconditional.
              </li>
              <li>
                <strong className="text-aubergine">If cash arrives early.</strong>{' '}
                Record it as a refundable advance, which is a liability, and
                move it to revenue when the barrier is met.
              </li>
              <li>
                <strong className="text-aubergine">Conditional is not the same as restricted.</strong>{' '}
                &ldquo;Use this for the new van&rdquo; is a restriction: it is
                revenue now, just earmarked. &ldquo;We&rsquo;ll pay for the
                van once you raise half&rdquo; is a condition: it is not
                revenue yet.
              </li>
            </ul>
          </div>
        </Section>

        {/* 3 — TAG RESTRICTIONS */}
        <Section background="ivory" id="tag-restrictions">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Rule 3: Tag every restriction the day the money arrives
            </h2>
            <p className="mt-4 text-body text-graphite">
              Every contribution lands in one of two buckets: net assets with
              donor restrictions, or net assets without donor restrictions.
              The donor decides which, not the board, and the decision is
              recorded when the gift comes in. A restriction you discover
              eleven months later, in a memo line nobody read, is a restriction
              you have probably already spent.
            </p>
            <p className="mt-4 text-body text-graphite">
              When the restricted money is used for its purpose, or the time
              period passes, you record a release: the amount moves from
              &ldquo;with restrictions&rdquo; to &ldquo;without.&rdquo; That
              release entry is your evidence that the building fund built
              something. We cover the mechanics, and the classic one-bucket
              mistakes, in{' '}
              <Link href="/blog/fund-accounting" className={linkClass}>
                our fund accounting guide
              </Link>
              , so here is just the short version for donations:
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Read the envelope, the card and the email.</strong>{' '}
                Restrictions turn up in all three. &ldquo;For the kids&rdquo;
                is vague; ask the donor rather than guess.
              </li>
              <li>
                <strong className="text-aubergine">Board designations are not donor restrictions.</strong>{' '}
                If your own board sets money aside for a reserve, it stays
                &ldquo;without donor restrictions.&rdquo; The board can undo
                its own decision; it cannot undo a donor&rsquo;s.
              </li>
              <li>
                <strong className="text-aubergine">Pledges for future years are time-restricted.</strong>{' '}
                Even with no stated purpose, money promised for next year
                cannot be spent this year.
              </li>
            </ul>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/thank-you-note-in-kraft-envelope.webp`}
              alt="A handwritten thank-you note tucked into a kraft envelope on a dark wooden table, beside white daisies, reading glasses and a fountain pen"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 4 — IN-KIND */}
        <Section background="cream" id="in-kind-donations">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Rule 4: Donated stuff goes on the books at fair value
            </h2>
            <p className="mt-4 text-body text-graphite">
              Gifts of things &mdash; food, furniture, a laptop, office space,
              the treadmill &mdash; are recorded as contribution revenue at
              their fair value on the day you receive them, with the other side
              going to inventory, equipment or an expense, depending on what
              you do with it. Fair value means what it would cost to buy the
              same thing in its current condition, not what the donor paid and
              not what the donor feels it was worth emotionally.
            </p>
            <p className="mt-4 text-body text-graphite">
              That last distinction matters more than you&rsquo;d think. Every
              donated sofa is, in the donor&rsquo;s memory, the sofa from the
              showroom. Your books need the sofa from the curb.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Show it separately.</strong>{' '}
                Since{' '}
                <SourceLink href="https://storage.fasb.org/ASU_2020-07.pdf">
                  FASB&rsquo;s 2020 update on contributed nonfinancial assets
                </SourceLink>
                , GAAP statements show these gifts on their own line, apart
                from cash gifts, with notes on what kind of items they were,
                whether you used or sold them, and how you valued them. The
                update changed presentation, not when or how you record them.
              </li>
              <li>
                <strong className="text-aubergine">Keep the evidence.</strong>{' '}
                A screenshot of comparable listings, a price list or a weight
                and a per-pound value for food is enough to show your number
                did not come out of thin air.
              </li>
              <li>
                <strong className="text-aubergine">Selling donated property has a form attached.</strong>{' '}
                If you sell certain donated property within three years, the
                IRS expects you to file{' '}
                <SourceLink href="https://www.irs.gov/forms-pubs/about-form-8282">
                  Form 8282
                </SourceLink>{' '}
                and give the donor a copy. Larger organizations that file Form
                990 may also report noncash gifts on Schedule M.
              </li>
              <li>
                <strong className="text-aubergine">Donated securities are not in-kind.</strong>{' '}
                Stock is a financial asset and is usually sold quickly, so it
                is recorded like cash at its fair value on the day received.
              </li>
            </ul>
          </div>
        </Section>

        {/* 5 — VOLUNTEER TIME */}
        <Section background="ivory" id="volunteer-time">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Rule 5: Most volunteer hours never touch the books
            </h2>
            <p className="mt-4 text-body text-graphite">
              Volunteers are the most valuable thing most small nonprofits
              have, and almost none of their hours appear in the financial
              statements. That isn&rsquo;t ingratitude; it is a deliberately
              narrow rule. Contributed services are recorded only if they meet
              one of two tests:
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. They create or improve a nonfinancial asset.
                </strong>{' '}
                Volunteers who build a wheelchair ramp or re-roof the hall are
                adding to a physical asset, so the value of that work can be
                recorded.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. They need specialized skills, come from someone who has
                  them, and you would otherwise have paid for them.
                </strong>{' '}
                An electrician rewiring the kitchen, a lawyer drafting your
                lease, an accountant closing your books. Your board
                member&rsquo;s time at board meetings usually does not qualify,
                even if that board member happens to be a lawyer.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              The person who has been sorting cans every Saturday since 2011
              is a pillar of the place and, for accounting purposes, invisible.
              Thank them anyway. Loudly.
            </p>
            <p className="mt-4 text-body text-graphite">
              One tax point your volunteers will ask about: the{' '}
              <SourceLink href="https://www.irs.gov/publications/p526">
                IRS says volunteers cannot deduct the value of their time or
                services
              </SourceLink>
              . Some out-of-pocket costs of volunteering can be deductible for
              the volunteer, but the hours themselves cannot.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-holding-envelope-at-desk.webp`}
              alt="Hands holding a plain cream envelope over a light wooden desk with sheets of pale green paper and a pencil"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — RECEIPTS */}
        <Section background="cream" id="donor-receipts">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Rule 6: The receipt is a tax document, not a thank-you card
            </h2>
            <p className="mt-4 text-body text-graphite">
              The warm letter with a photo of smiling volunteers is lovely.
              The IRS is interested in three sentences of it. For any single
              contribution of $250 or more, the donor needs a written
              acknowledgment to claim the deduction, and{' '}
              <SourceLink href="https://www.irs.gov/charities-non-profits/substantiating-charitable-contributions">
                the IRS says the donor is responsible for obtaining it
              </SourceLink>
              , generally by the time they file their return. In practice,
              donors expect the charity to send it, so send it.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">What it must say.</strong>{' '}
                Your organization&rsquo;s name; the amount of a cash gift, or a
                description, not a value, of a noncash gift; and whether you
                gave anything in return. If you did, a description and a good
                faith estimate of its value. If you gave nothing, say so.
              </li>
              <li>
                <strong className="text-aubergine">Don&rsquo;t value the treadmill on the receipt.</strong>{' '}
                You describe the item. Putting a dollar figure on a donor&rsquo;s
                noncash gift is their job for their tax return, even though
                you still need your own fair value for your books.
              </li>
              <li>
                <strong className="text-aubergine">Gala tickets and auction wins need a second disclosure.</strong>{' '}
                When a donor pays{' '}
                <SourceLink href="https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions-quid-pro-quo-contributions">
                  more than $75 and gets something back
                </SourceLink>
                , you must tell them in writing that only the amount above the
                value of what they received is deductible, with a good faith
                estimate of that value. A $150 dinner ticket with a $60 meal is
                a $90 gift, not a $150 one.
              </li>
              <li>
                <strong className="text-aubergine">No format is prescribed.</strong>{' '}
                A letter, an email or a year-end statement listing each gift
                all work, as long as the required facts are in it.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Here is the part where an accounting firm is supposed to say you
              need an accounting firm. Often you don&rsquo;t. A small
              congregation or club that takes cash and checks, has no pledges,
              no grants with conditions and no gala can run all six rules from
              decent donor software and a careful volunteer. Where we earn our
              fee is the mix: multi-year pledges, matching grants, donated
              property and an audit on the horizon. Our{' '}
              <Link href="/services" className={linkClass}>
                bookkeeping and accounting services
              </Link>{' '}
              cover that, and the{' '}
              <Link href="/pricing" className={linkClass}>
                flat monthly pricing
              </Link>{' '}
              is published, so you can decide before talking to anyone. If you
              are still learning the vocabulary, our{' '}
              <Link href="/blog/bookkeeping-terms" className={linkClass}>
                plain-English bookkeeping terms
              </Link>{' '}
              list is a gentler place to start.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-one-gala">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What one sloppy gala can cost
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Take an illustrative fundraiser: 200 tickets at $150 each,
              dinner worth $60 a head, and a thank-you email that says
              &ldquo;thanks for your generous $150 gift&rdquo; and nothing
              else.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Every ticket is a payment over $75 with dinner attached, so every
              one needed a quid pro quo disclosure. At the IRS penalty of $10
              per contribution, that is 200 &times; $10 = $2,000, under the
              $5,000 cap per event. That is real money for a food pantry. It
              buys a lot of cans.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The quieter cost is the donors. Two hundred people were told they
              gave $150 when they gave $90, and some of them will deduct $150.
              Meanwhile the books show $30,000 of contribution revenue that is
              really $18,000 of gifts and $12,000 of dinner sales. Fixing one
              email before the event costs an hour. Fixing it after costs a
              very awkward letter.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              None of this needs a professional if you know the rules. That is
              why they are{' '}
              <a href="#record-when-promised" className={darkLinkClass}>
                all six, above
              </a>
              .
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
              href: '/blog/fund-accounting',
              eyebrow: 'Nonprofits',
              title: 'Fund accounting basics, without the jargon',
              blurb: 'Restricted funds, unrestricted funds, and how to keep them apart before an auditor asks.',
            },
            {
              href: '/blog/accrual-basis-accounting',
              eyebrow: 'Methods',
              title: 'Accrual basis accounting, explained',
              blurb: 'Why income can count before the money arrives, which is exactly how pledges work.',
            },
            {
              href: '/blog/bookkeeping-vs-accounting',
              eyebrow: 'Getting help',
              title: 'Bookkeeping vs accounting',
              blurb: 'What a volunteer treasurer can handle, and where a professional actually earns the fee.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Treasurer with a treadmill in the garage?
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
