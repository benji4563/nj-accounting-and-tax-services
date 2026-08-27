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

const SLUG = 'when-to-hire-a-tax-attorney';
const TITLE = 'When to Hire a Tax Attorney (and When You Don’t)';
const DESCRIPTION =
  'When to hire a tax attorney versus an accountant, with the specific situations that actually need one and the far more common ones that don’t.';
const PUBLISHED = '2026-08-27';
const MODIFIED = '2026-08-27';
const HERO = `/blog/${SLUG}/hero-stacked-case-documents.webp`;

const TOC = [
  { id: 'clear-signs', label: 'The clear-cut signs you need a tax attorney' },
  { id: 'who-handles-what', label: 'Tax attorney vs. CPA vs. accountant: who actually handles what' },
  { id: 'still-your-accountants-job', label: 'When it’s still probably a job for your accountant' },
  { id: 'cost-comparison', label: 'What a tax attorney costs, and why accountants exist as the cheaper first stop' },
  { id: 'quick-gut-check', label: 'A 60-second gut-check before you call anyone' },
  { id: 'before-you-call', label: 'What to do in the next 24 hours, no matter who you call' },
  { id: 'cost-of-waiting', label: 'What waiting to decide actually costs you' },
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
        width: 1600,
        height: 1066,
        alt: 'A close-up overhead view of a thick stack of assorted papers and documents fanned out on a desk surface',
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
    q: 'When should I hire a tax attorney instead of an accountant?',
    a: 'Hire a tax attorney when there’s real legal exposure — a fraud allegation, a criminal investigation, a trust fund recovery penalty naming you personally, a lien or levy on your assets, or a case heading to U.S. Tax Court. For almost everything short of that, an accountant or enrolled agent handles it for a fraction of the price.',
  },
  {
    q: 'Do I need a tax attorney for an IRS audit?',
    a: 'Not usually. Most audits are routine reviews of specific line items on a return, and an accountant or enrolled agent can represent you through the whole process. A tax attorney becomes worth it if the audit turns up a fraud allegation, involves multiple years of a business return, or is heading toward a dispute the IRS won’t settle informally.',
  },
  {
    q: 'Can an accountant represent me before the IRS?',
    a: 'Yes — an accountant, enrolled agent, or CPA can represent you for exam, collections, and most disputes. The one thing they can’t offer is attorney-client privilege, which only matters if you’re worried about criminal exposure or need to discuss something you don’t want compelled into evidence later.',
  },
  {
    q: 'What is a trust fund recovery penalty, and does it always need a lawyer?',
    a: 'It’s a penalty the IRS assesses personally against a business owner or responsible person when payroll taxes withheld from employees weren’t deposited. It doesn’t automatically require an attorney — but because it can attach to you individually, not just the business, it’s one of the situations worth at least a consultation before you respond.',
  },
  {
    q: 'How much does a tax attorney cost compared to an accountant?',
    a: 'Tax attorneys typically bill $200 to $500 an hour or a flat fee of $750 to $10,000-plus depending on the case; accountants typically run a flat monthly rate in the low hundreds. The gap is one reason it’s worth confirming you actually need attorney-level representation before you pay for it.',
  },
  {
    q: 'Is it too late to hire a tax attorney if I already responded to the IRS?',
    a: 'No, but what you already said matters — unlike a conversation with an attorney, anything you told the IRS or wrote in a response isn’t privileged. It’s still worth calling; just bring copies of everything you’ve already sent or said, not just the original notice.',
  },
  {
    q: 'Do tax attorneys handle back taxes and unfiled returns?',
    a: 'Some do, but catching up on unfiled returns themselves is usually accounting work, not legal work — an accountant reconstructs the numbers and files them. An attorney becomes relevant if the unfiled years overlap with a criminal referral or a debt large enough to need formal settlement negotiation with the IRS.',
  },
  {
    q: 'What happens if I ignore the letter while I decide who to call?',
    a: 'Penalties and interest keep accruing, and some IRS letters carry hard response deadlines — a trust fund recovery penalty proposal, for instance, gives you 60 days to appeal before it’s final. Deciding who to call can take a day or two; letting the deadline pass while you decide is the actual risk.',
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
              <time dateTime={PUBLISHED}>August 27, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>August 27, 2026</time>
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
              alt="A close-up overhead view of a thick stack of assorted papers and documents fanned out on a desk surface"
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
                <strong>Short answer:</strong> knowing when to hire a tax
                attorney comes down to whether real legal exposure is on the
                table &mdash; a fraud allegation, a criminal investigation, a
                trust fund recovery penalty, a lien or levy, or a case headed
                to Tax Court. Short of that, an accountant or enrolled agent
                usually handles it for a fraction of the cost.
              </p>
              <p className="mt-4 text-body text-graphite">
                Most people typing this question into Google at midnight
                don&rsquo;t have that kind of problem. They have a letter that
                sounds scary, which is a different thing entirely.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Wednesday morning and Ade &mdash; I&rsquo;ll call
              him Ade &mdash; is standing in the garage that doubles as his
              landscaping company&rsquo;s office, holding an IRS notice that
              uses the phrase &ldquo;trust fund recovery penalty&rdquo; and
              addresses him personally, not just the business, while his crew
              waits outside for the morning huddle.
            </p>
            <p className="mt-4 text-body text-graphite">
              That phrase is doing a lot of work on purpose. It&rsquo;s the
              IRS telling him this might follow him home, not just the LLC.
            </p>
            <p className="mt-4 text-body text-graphite">
              Ade genuinely needs to make a call today. But most people who
              land on this page are not Ade &mdash; they have a CP2000, or an
              audit notice, or a payment plan they haven&rsquo;t set up yet,
              and the googling that follows finds law firm sites built to make
              every letter sound like Ade&rsquo;s. The rest of this post is
              the honest version of how to tell the difference.
            </p>
          </div>
        </Section>

        {/* 1 — THE CLEAR-CUT SIGNS */}
        <Section background="ivory" id="clear-signs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The clear-cut signs you need a tax attorney
            </h2>
            <p className="mt-4 text-body text-graphite">
              This list is short on purpose. If none of these describe your
              situation, keep reading &mdash; the next section is probably
              where you belong instead.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You&rsquo;re facing a fraud allegation or criminal
                  investigation.
                </strong>{' '}
                This is the one situation where attorney-client privilege
                genuinely matters &mdash; what you tell an accountant isn&rsquo;t
                protected the same way a conversation with a lawyer is.
              </li>
              <li>
                <strong className="text-aubergine">
                  You&rsquo;re named in a trust fund recovery penalty, like
                  Ade.
                </strong>{' '}
                Unpaid payroll taxes can attach personally to whoever the IRS
                decides is the &ldquo;responsible person,&rdquo; separate from
                any liability shield the business itself has.
              </li>
              <li>
                <strong className="text-aubergine">
                  Your case is heading to U.S. Tax Court.
                </strong>{' '}
                Only an attorney can represent you in actual litigation
                against the IRS &mdash; an accountant can prep the numbers but
                can&rsquo;t stand up in that courtroom for you.
              </li>
              <li>
                <strong className="text-aubergine">
                  The IRS is threatening a lien, levy, or wage garnishment on
                  real assets.
                </strong>{' '}
                Once the conversation shifts from paperwork to seizing
                property, an attorney&rsquo;s legal standing starts to matter
                in a way it didn&rsquo;t before.
              </li>
              <li>
                <strong className="text-aubergine">
                  You have undisclosed foreign accounts or a large chunk of
                  unreported income.
                </strong>{' '}
                Voluntary disclosure carries real legal exposure, and it
                benefits from privileged advice before you tell anyone
                anything.
              </li>
            </ul>
          </div>
        </Section>

        {/* 2 — WHO HANDLES WHAT */}
        <Section background="cream" id="who-handles-what">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Tax attorney vs. CPA vs. accountant: who actually handles what
            </h2>
            <p className="mt-4 text-body text-graphite">
              The{' '}
              <SourceLink href="https://www.irs.gov/tax-professionals/choosing-a-tax-professional">
                IRS lays out several categories of tax professional
              </SourceLink>
              , and the honest way to pick between them is to ask which job
              you actually need done, not which title sounds most serious.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. An accountant files returns and handles routine notices.
                </strong>{' '}
                Preparing, amending, answering a CP2000, and catching a
                problem before it turns into an IRS problem &mdash; most of
                what people worry about lives here.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. An enrolled agent is licensed by the IRS specifically to
                  represent you before it.
                </strong>{' '}
                A federal credential earned by exam, at fees well below an
                attorney&rsquo;s, for exactly the kind of audit and dispute
                representation most cases actually need.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. A CPA covers broader accounting and financial planning
                  territory.
                </strong>{' '}
                State-licensed, able to represent you before the IRS, and
                often the right call for complex business accounting &mdash;
                but not able to offer attorney-client privilege.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. A tax attorney is the only one licensed to practice law.
                </strong>{' '}
                That buys privilege and courtroom representation &mdash;
                genuinely necessary for the situations above, and genuinely
                unnecessary for almost everything else.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              Njock is an accountant, not a CPA or attorney &mdash; which,
              honestly, is what most of what lands in a small-business
              owner&rsquo;s mailbox actually calls for. See{' '}
              <Link href="/services" className={linkClass}>
                what our bookkeeping and tax service covers
              </Link>{' '}
              if you&rsquo;re not sure which bucket your letter falls into.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/envelope-and-pen.webp`}
              alt="An overhead composition of a plain envelope and a pen resting on a desk, near a roll of twine and a pair of scissors"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — WHEN IT'S STILL YOUR ACCOUNTANT'S JOB */}
        <Section background="ivory" id="still-your-accountants-job">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When it&rsquo;s still probably a job for your accountant
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most letters people panic-Google over look nothing like
              Ade&rsquo;s. They look like these.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A CP2000 income-mismatch notice.
                </strong>{' '}
                Usually resolved by agreeing, disagreeing with documentation,
                or filing an amended return &mdash; routine accounting work,
                not legal work.
              </li>
              <li>
                <strong className="text-aubergine">
                  A standard audit of one or two line items.
                </strong>{' '}
                Most audits are conducted{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/irs-audits">
                  by mail or through a documented interview
                </SourceLink>
                , not a courtroom, and an accountant can walk you through
                either.
              </li>
              <li>
                <strong className="text-aubergine">
                  A payment plan for a manageable balance.
                </strong>{' '}
                Many installment agreements can be set up directly with the
                IRS, no representation required at all.
              </li>
              <li>
                <strong className="text-aubergine">
                  A few years of unfiled returns, with no criminal exposure.
                </strong>{' '}
                We&rsquo;ve written a whole post on{' '}
                <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                  what actually happens when you&rsquo;re behind on filing
                </Link>{' '}
                &mdash; short version: it&rsquo;s an accounting problem first.
              </li>
              <li>
                <strong className="text-aubergine">
                  A first-time penalty for filing or paying late.
                </strong>{' '}
                Often waivable through a request an accountant files, with no
                legal fees attached at all.
              </li>
            </ul>
          </div>
        </Section>

        {/* 4 — COST COMPARISON */}
        <Section background="cream" id="cost-comparison">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What a tax attorney costs, and why accountants exist as the
              cheaper first stop
            </h2>
            <p className="mt-4 text-body text-graphite">
              We&rsquo;ve run the full numbers in{' '}
              <Link href="/blog/how-much-does-a-tax-attorney-cost" className={linkClass}>
                a separate post on tax attorney cost
              </Link>
              , but the short version is worth having here too.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Attorneys typically bill $200 to $500 an hour.
                </strong>{' '}
                Flat fees for routine matters run roughly $750 to $1,500;
                more involved cases like an Offer in Compromise or audit
                defense run $3,000 to $10,000-plus.
              </li>
              <li>
                <strong className="text-aubergine">
                  Accountants typically run a flat monthly rate in the low
                  hundreds.
                </strong>{' '}
                Our own plans start at $299 a month &mdash; see{' '}
                <Link href="/pricing" className={linkClass}>
                  our published pricing
                </Link>{' '}
                for the full breakdown.
              </li>
              <li>
                <strong className="text-aubergine">
                  Messy books make the attorney bill worse.
                </strong>{' '}
                If your records are a mess by the time you call a lawyer, the
                first two or three hours of a $400-an-hour retainer often go
                to reconstructing income from bank statements &mdash; work a
                bookkeeper does routinely for a fraction of that rate.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Run the arithmetic before you dial the more expensive number
              first: an hour of attorney time to confirm you don&rsquo;t
              actually need an attorney is an expensive way to learn something
              a $299-a-month accountant would have told you for free on a
              discovery call.
            </p>
          </div>
        </Section>

        {/* 5 — QUICK GUT-CHECK */}
        <Section background="ivory" id="quick-gut-check">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              A 60-second gut-check before you call anyone
            </h2>
            <p className="mt-4 text-body text-graphite">
              Answer these honestly, in order. The first &ldquo;yes&rdquo;
              you hit tells you who to call.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Does the letter mention fraud, a criminal
                  investigation, or intent?
                </strong>{' '}
                Yes &mdash; call an attorney today. No &mdash; keep going.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Is the IRS threatening to seize property, garnish wages,
                  or naming you personally for business tax debt?
                </strong>{' '}
                Yes &mdash; an attorney is worth a consultation. No &mdash;
                keep going.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Is this heading to, or already in, Tax Court?
                </strong>{' '}
                Yes &mdash; you need an attorney; only one can represent you
                there. No &mdash; keep going.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Is it a notice, a mismatch, an audit, or a balance you
                  can pay off over time?
                </strong>{' '}
                That&rsquo;s almost certainly an accountant&rsquo;s job, and
                the cheaper call to make first.
              </li>
            </ol>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/briefcase-with-documents.webp`}
              alt="An overhead view of an open briefcase with documents and papers arranged neatly inside, on a wooden table"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — WHAT TO DO IN THE NEXT 24 HOURS */}
        <Section background="cream" id="before-you-call">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What to do in the next 24 hours, no matter who you call
            </h2>
            <p className="mt-4 text-body text-graphite">
              A few things are true regardless of which side of the gut-check
              you landed on.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Read the deadline on the letter, out loud, once.
                </strong>{' '}
                It&rsquo;s usually printed near the top or bottom, and it
                matters more than anything else on the page.
              </li>
              <li>
                <strong className="text-aubergine">
                  Don&rsquo;t call the IRS to explain yourself before you talk
                  to anyone.
                </strong>{' '}
                You have{' '}
                <SourceLink href="https://www.irs.gov/newsroom/taxpayer-bill-of-rights-9">
                  the right to retain a representative of your choice
                </SourceLink>{' '}
                before you say anything &mdash; use it.
              </li>
              <li>
                <strong className="text-aubergine">
                  Gather everything, not just the letter.
                </strong>{' '}
                Prior notices, bank statements, payroll records &mdash;
                whoever you call will ask, and having it ready saves you
                billable time either way.
              </li>
              <li>
                <strong className="text-aubergine">
                  Get a second, cheaper opinion before you sign an attorney
                  retainer.
                </strong>{' '}
                A short conversation with an accountant who has no reason to
                sell you legal representation is a fast, low-cost way to find
                out whether you actually need it.
              </li>
            </ul>
          </div>
        </Section>

        {/* EMPHASIS — COST OF WAITING */}
        <Section background="aubergine" id="cost-of-waiting">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What waiting to decide actually costs you
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              None of this needs to be solved in an hour. But it does need to
              be solved before the clock on the letter runs out &mdash; a
              trust fund recovery penalty proposal, for instance, gives you
              60 days to appeal (75 if you&rsquo;re outside the country) once
              the IRS decides you&rsquo;re a responsible person. Miss that
              window deciding who to call, and the penalty becomes final
              whether or not you had a good case.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The rest of the letters &mdash; a CP2000, a routine audit, a
              payment plan &mdash; give you more room, but interest and
              penalties keep compounding while you sit on it either way.
              Ade&rsquo;s situation genuinely needed a call within the week.
              Most people reading this have more time than they think, and
              spend it Googling instead of just calling someone who can tell
              them, for free, which category they&rsquo;re actually in.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              <strong className="text-ivory">
                Finding out on day one which kind of letter you have is
                always cheaper than finding out on day fifty-nine.
              </strong>
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
              href: '/blog/how-much-does-a-tax-attorney-cost',
              eyebrow: 'Blog',
              title: 'How much does a tax attorney actually cost?',
              blurb:
                'Real ranges by the hour and by the case, and the free tax help most people never hear about.',
            },
            {
              href: '/blog/tax-resolution-services',
              eyebrow: 'Blog',
              title: 'Tax resolution services: what they actually cover',
              blurb:
                'Payment plans, Offers in Compromise, and penalty relief — what’s real, what’s a scam, and what you can do yourself.',
            },
            {
              href: '/pricing',
              eyebrow: 'Pricing',
              title: 'Real prices. No “call for a quote.”',
              blurb:
                'Three flat monthly plans, every fee on the page, including how one-time cleanup work gets quoted before you commit.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure if your letter needs a lawyer or a bookkeeper?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. Bring the
              letter exactly as it came. We&rsquo;ll tell you honestly which
              one you need &mdash; and point you to a good attorney ourselves
              if that&rsquo;s the answer.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" href="/contact" showArrow>
                Book a free 15-min call
              </Button>
              <Button variant="secondary" href="/how-we-work">
                See how we work
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
