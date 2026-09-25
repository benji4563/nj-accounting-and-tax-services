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

const SLUG = 'how-much-does-a-tax-attorney-cost';
const TITLE = 'How Much Does a Tax Attorney Cost? A Straight Answer';
const DESCRIPTION =
  'Real numbers on tax attorney cost by the hour and by the case, how much you actually need to spend, and the free tax help most people never hear about.';
const PUBLISHED = '2026-08-10';
const MODIFIED = '2026-08-10';
const HERO = `/blog/${SLUG}/hero-desk-folders-and-legal-pad.webp`;

const TOC = [
  { id: 'what-tax-attorneys-charge', label: 'What tax attorneys actually charge, by billing model and case' },
  { id: 'who-does-what', label: 'Tax attorney vs. CPA vs. enrolled agent vs. bookkeeper — who does what' },
  { id: 'when-you-genuinely-need-one', label: 'When you genuinely need a tax attorney' },
  { id: 'when-you-probably-dont', label: 'When you probably don’t — and what that price tag is actually buying' },
  { id: 'what-moves-the-price', label: 'What pushes the price up, and what brings it down' },
  { id: 'free-and-lower-cost-help', label: 'The free and lower-cost help most people don’t know exists' },
  { id: 'cost-of-waiting-to-find-out', label: 'What waiting to find out costs you' },
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
        width: 1376,
        height: 768,
        alt: 'An overhead view of a stack of manila folders tied with string, a yellow legal pad covered in handwritten notes with a pencil resting on it, an antique push-button calculator with a glowing red digital display, and wire-rimmed reading glasses on a worn wooden desk, lit by warm golden late-afternoon light',
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
    q: 'How much does a tax attorney cost?',
    a: 'Most tax attorneys charge $200 to $500 an hour, and experienced attorneys in major cities sometimes charge over $1,000. For routine matters they often quote a flat fee instead — roughly $750 to $1,500 for an installment agreement, $3,000 to $10,000-plus for an Offer in Compromise, and $2,000 to $8,000 or more for audit defense. Full Tax Court litigation on a complex business case can run past $100,000.',
  },
  {
    q: 'Is a CPA cheaper than a tax attorney?',
    a: 'Usually not by much for identical work — CPAs and enrolled agents often bill similar hourly rates to attorneys. The real savings come from not needing attorney-level services at all: a CPA, enrolled agent, or accountant can represent you before the IRS for standard notices, audits, and payment plans without attorney-client privilege ever coming into play.',
  },
  {
    q: 'What’s the difference between a tax attorney and an enrolled agent?',
    a: 'An enrolled agent is a tax specialist licensed directly by the IRS to prepare returns and represent taxpayers before the agency, and their fees typically sit well below an attorney’s. A tax attorney is licensed to practice law, which means they alone can offer attorney-client privilege and represent you in U.S. Tax Court or a criminal proceeding — protections that most notices and audits never actually require.',
  },
  {
    q: 'Do tax attorneys offer free consultations?',
    a: 'Many do, but treat it as a sales conversation, not legal advice — it exists to size up your case and quote a fee. If you’re not sure whether you even need an attorney, a paid conversation with an accountant who has no reason to sell you legal representation is usually more useful than a free one with someone who does.',
  },
  {
    q: 'Can I resolve an IRS notice without hiring anyone?',
    a: 'For a lot of notices, yes. A CP2000 income-mismatch letter usually just needs you to agree, disagree with documentation, or amend a return — no attorney required. Straightforward payment plans can be set up directly with the IRS online in under an hour.',
  },
  {
    q: 'How much is the IRS Offer in Compromise application fee?',
    a: 'The IRS charges a $205 application fee for Form 656, separate from anything a tax attorney or accountant charges you to prepare it. That fee is waived entirely if you qualify under the IRS’s low-income guidelines.',
  },
  {
    q: 'What is a Low Income Taxpayer Clinic, and who qualifies?',
    a: 'Low Income Taxpayer Clinics are independent organizations, some university-run, that represent qualifying taxpayers in IRS disputes for free or close to it, alongside broader free help from the Taxpayer Advocate Service. They exist specifically because attorney fees put real representation out of reach for a lot of the people who need it most.',
  },
  {
    q: 'When should I hire a tax attorney instead of an accountant?',
    a: 'When there’s genuine legal exposure — a fraud allegation, a criminal investigation, undisclosed foreign accounts, or a case heading to Tax Court — because only an attorney can offer attorney-client privilege and courtroom representation. For everything short of that, which is most tax problems, an accountant or enrolled agent handles it for a fraction of the price.',
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
              <time dateTime={PUBLISHED}>August 10, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>August 10, 2026</time>
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
              alt="An overhead view of a stack of manila folders tied with string, a yellow legal pad covered in handwritten notes with a pencil resting on it, an antique push-button calculator with a glowing red digital display, and wire-rimmed reading glasses on a worn wooden desk, lit by warm golden late-afternoon light"
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
                <strong>Short answer:</strong> tax attorney cost varies
                enormously by case &mdash; expect $200 to $500 an hour, or a
                flat fee anywhere from about $750 for a simple installment
                agreement up to $10,000-plus for an Offer in Compromise or
                full audit defense, with the biggest cases running into six
                figures.
              </p>
              <p className="mt-4 text-body text-graphite">
                How much you personally need to spend depends far more on the
                size of your problem than on how scary that envelope looks.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Tuesday afternoon and Dara &mdash; I&rsquo;ll call
              her Dara &mdash; is standing in her kitchen holding an IRS
              letter she&rsquo;s read four times, googling &ldquo;how much
              does a tax attorney cost&rdquo; on her phone while her coffee
              goes cold, half expecting a number with too many zeroes in it.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t in trouble. She got a letter, and letters are
              built to feel like trouble whether or not they actually are.
            </p>
            <p className="mt-4 text-body text-graphite">
              Hers is a CP2000 &mdash; the IRS&rsquo;s way of saying one of
              her 1099s doesn&rsquo;t match what it has on file &mdash; and
              it&rsquo;s the single most common notice a small-business owner
              gets. Nobody needs a $400-an-hour lawyer to answer one. But the
              googling that follows finds attorney firm sites with big,
              understandably scary numbers, and no context for whether they
              apply to her.
            </p>
          </div>
        </Section>

        {/* 1 — WHAT TAX ATTORNEYS CHARGE */}
        <Section background="ivory" id="what-tax-attorneys-charge">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What tax attorneys actually charge, by billing model and case
            </h2>
            <p className="mt-4 text-body text-graphite">
              Attorneys bill one of two ways, and which one you get depends on
              how well-defined the problem is.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Hourly rates run $200 to $500 for most attorneys.
                </strong>{' '}
                Highly experienced attorneys, or firms in major cities, can
                charge well over $1,000 an hour. Hourly billing suits messy,
                unpredictable cases where nobody yet knows how many hours it
                will take.
              </li>
              <li>
                <strong className="text-aubergine">
                  Installment agreements and penalty abatement run roughly
                  $500 to $1,500 flat.
                </strong>{' '}
                These are the most routine, most templated services a tax
                attorney offers.
              </li>
              <li>
                <strong className="text-aubergine">
                  An Offer in Compromise typically runs $3,000 to
                  $10,000-plus.
                </strong>{' '}
                The range reflects how much documentation and negotiation the
                case actually needs, not just the size of the debt.
              </li>
              <li>
                <strong className="text-aubergine">
                  IRS audit defense runs $2,000 to $8,000 or more.
                </strong>{' '}
                Multi-year or business audits push toward the top of that
                range and sometimes past it.
              </li>
              <li>
                <strong className="text-aubergine">
                  Tax Court litigation starts around $10,000 and can pass
                  $100,000.
                </strong>{' '}
                This is the tier reserved for genuinely contested, high-stakes
                cases &mdash; not where most people who Google this question
                end up.
              </li>
            </ul>
          </div>
        </Section>

        {/* 2 — WHO DOES WHAT */}
        <Section background="cream" id="who-does-what">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Tax attorney vs. CPA vs. enrolled agent vs. bookkeeper &mdash;
              who does what
            </h2>
            <p className="mt-4 text-body text-graphite">
              The{' '}
              <SourceLink href="https://www.irs.gov/tax-professionals/choosing-a-tax-professional">
                IRS itself lists several types of tax professionals
              </SourceLink>{' '}
              with genuinely different jobs, and the price tag mostly tracks
              which job you actually need done.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. A bookkeeper keeps the books current.
                </strong>{' '}
                Their job is making sure nothing looks wrong to the IRS in the
                first place &mdash; the cheapest and most preventive layer of
                all of this.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. An accountant prepares returns and handles the routine
                  stuff.
                </strong>{' '}
                Filing, amending, answering most notices, and catching a
                problem before it becomes an IRS problem.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. An enrolled agent is licensed by the IRS specifically to
                  represent taxpayers before it.
                </strong>{' '}
                A federal credential earned by exam, at fees typically well
                below an attorney&rsquo;s, for exactly the kind of
                representation most audits and disputes need.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. A CPA covers broader financial and accounting territory.
                </strong>{' '}
                Licensed by the state, able to represent you before the IRS,
                and often the right call for complex business accounting
                &mdash; but not able to offer attorney-client privilege.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. A tax attorney is the only one licensed to practice law.
                </strong>{' '}
                That&rsquo;s what buys attorney-client privilege and courtroom
                representation &mdash; genuinely necessary in some cases, and
                genuinely unnecessary in most.
              </li>
            </ol>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/clock-and-invoice-pad.webp`}
              alt="An antique brass desk clock beside a blank paper invoice pad and an uncapped fountain pen, lit by a warm brass banker's lamp"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — WHEN YOU GENUINELY NEED ONE */}
        <Section background="ivory" id="when-you-genuinely-need-one">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When you genuinely need a tax attorney
            </h2>
            <p className="mt-4 text-body text-graphite">
              A short list, on purpose &mdash; because it really is a short
              list.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You&rsquo;re facing a fraud allegation or criminal
                  investigation.
                </strong>{' '}
                This is the one situation where attorney-client privilege
                actually matters &mdash; what you tell a CPA or accountant
                isn&rsquo;t protected the same way.
              </li>
              <li>
                <strong className="text-aubergine">
                  Your case is heading to U.S. Tax Court.
                </strong>{' '}
                Only an attorney can represent you in litigation against the
                IRS.
              </li>
              <li>
                <strong className="text-aubergine">
                  You have undisclosed foreign accounts.
                </strong>{' '}
                Voluntary disclosure programs carry real legal exposure and
                benefit from privileged advice before you say anything to
                anyone.
              </li>
              <li>
                <strong className="text-aubergine">
                  Real assets are at risk of seizure or levy.
                </strong>{' '}
                Once negotiation shifts toward legal leverage rather than
                paperwork, an attorney&rsquo;s standing with the IRS starts to
                matter.
              </li>
            </ul>
          </div>
        </Section>

        {/* 4 — WHEN YOU PROBABLY DON'T */}
        <Section background="cream" id="when-you-probably-dont">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When you probably don&rsquo;t &mdash; and what that price tag is
              actually buying
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most letters people panic-Google over look nothing like the list
              above.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A CP2000 mismatch notice, like Dara&rsquo;s.
                </strong>{' '}
                Usually resolved by agreeing, disagreeing with documentation,
                or filing an amended return &mdash; work an accountant does
                routinely.
              </li>
              <li>
                <strong className="text-aubergine">
                  A straightforward payment plan.
                </strong>{' '}
                Many can be set up directly with the IRS online, no
                representation required at all.
              </li>
              <li>
                <strong className="text-aubergine">
                  A first-time penalty for filing or paying late.
                </strong>{' '}
                Often waivable through a request an accountant can file
                without any legal fees attached.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              A lot of the flat fees in the &ldquo;simple matters&rdquo; tier
              above are really selling peace of mind &mdash; someone else
              making a phone call you could make yourself, with the right
              guidance. Njock is an accountant, not a CPA or an attorney,
              which is honestly what most of what lands in this inbox
              actually needs. If yours is the rare letter that calls for real
              legal representation, we&rsquo;ll say so upfront and point you
              to someone who can give it, instead of quietly billing you to
              find that out. See{' '}
              <Link href="/services" className={linkClass}>
                what our bookkeeping and tax service actually covers
              </Link>{' '}
              if you&rsquo;re not sure which bucket your letter falls into.
            </p>
          </div>
        </Section>

        {/* 5 — WHAT MOVES THE PRICE */}
        <Section background="ivory" id="what-moves-the-price">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What pushes the price up, and what brings it down
            </h2>
            <p className="mt-4 text-body text-graphite">
              Inside any given service tier, the same &ldquo;audit
              defense&rdquo; quote can land anywhere in its range depending on
              a handful of things.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  How much you owe, and how many tax years are involved.
                </strong>{' '}
                A one-year, low-dollar issue and a five-year, six-figure one
                are not the same engagement.
              </li>
              <li>
                <strong className="text-aubergine">
                  Whether fraud is even alleged.
                </strong>{' '}
                The moment intent is in question, the case moves into a more
                careful, more expensive category of work.
              </li>
              <li>
                <strong className="text-aubergine">
                  Hourly vs. flat fee.
                </strong>{' '}
                Flat fees buy budget certainty; hourly billing can be cheaper
                for a case that turns out simpler than expected, and more
                expensive for one that doesn&rsquo;t.
              </li>
              <li>
                <strong className="text-aubergine">
                  Whether your books are already clean.
                </strong>{' '}
                This is the one most people don&rsquo;t think about.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              That last one is worth doing the arithmetic on. If your records
              are a mess when you finally call an attorney, the first two or
              three hours of a $400-an-hour retainer often go to
              reconstructing income and expenses from bank statements &mdash;
              work a bookkeeper does routinely for a fraction of that rate.{' '}
              <strong className="text-aubergine">
                That&rsquo;s $800 to $1,200 in legal fees spent doing a
                bookkeeper&rsquo;s job before the actual tax question even
                gets discussed.
              </strong>
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/home-desk-tea-and-laptop.webp`}
              alt="A modest home-office desk with a plain folder, a mug of tea, an open laptop, and a small potted succulent near a sunlit window"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — FREE AND LOWER-COST HELP */}
        <Section background="cream" id="free-and-lower-cost-help">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The free and lower-cost help most people don&rsquo;t know
              exists
            </h2>
            <p className="mt-4 text-body text-graphite">
              Before any hourly rate enters the picture, a few genuinely free
              resources are worth knowing about.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  IRS online payment plans.
                </strong>{' '}
                Many installment agreements can be set up directly with the
                IRS at no professional cost at all.
              </li>
              <li>
                <strong className="text-aubergine">
                  The Offer in Compromise application fee is $205
                  &mdash; and waivable.
                </strong>{' '}
                That&rsquo;s the{' '}
                <SourceLink href="https://www.irs.gov/payments/offer-in-compromise">
                  IRS&rsquo;s own fee for Form 656
                </SourceLink>
                , separate from whatever a professional charges to help you
                file it, and it&rsquo;s waived entirely under the IRS&rsquo;s
                low-income guidelines.
              </li>
              <li>
                <strong className="text-aubergine">
                  Low Income Taxpayer Clinics represent qualifying taxpayers
                  for free.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://www.taxpayeradvocate.irs.gov/about/low-income-taxpayer-clinics/">
                  Taxpayer Advocate Service
                </SourceLink>{' '}
                connects eligible taxpayers to these clinics, along with its
                own free help for IRS disputes and hardship cases.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              None of these replace an accountant for the ongoing work of
              keeping your books straight in the first place &mdash; see{' '}
              <Link href="/pricing" className={linkClass}>
                our real, published pricing
              </Link>{' '}
              for what that costs when you&rsquo;d rather not find any of this
              out the hard way.
            </p>
          </div>
        </Section>

        {/* EMPHASIS — COST OF WAITING */}
        <Section background="aubergine" id="cost-of-waiting-to-find-out">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What waiting to find out costs you
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              None of this is a crisis on day one. A CP2000 gives you real
              time to respond, and most people Googling &ldquo;how much does
              a tax attorney cost&rdquo; are standing at day one, not day
              ninety. A letter that&rsquo;s just confusing is a different
              problem from a letter that&rsquo;s now three months overdue with
              penalties and interest stacking on top of it every month it
              sits unanswered.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The math runs the wrong direction the longer you wait. By the
              time a routine mismatch has turned into a real balance with a
              lien threat attached, you&rsquo;ve moved yourself into the
              price bracket where an attorney genuinely is the right call
              &mdash; and a considerably more expensive one than answering the
              original letter would ever have been.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              A free or low-cost conversation with someone who can tell you,
              on day one, whether a letter is routine or serious is the
              cheapest version of this problem there is.{' '}
              <strong className="text-ivory">
                Finding out on day ninety almost never is.
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
              href: '/blog/can-you-do-taxes-without-w2',
              eyebrow: 'Blog',
              title: 'Behind on filing? Here’s what actually happens',
              blurb:
                'What the IRS actually does when returns are missing, and why most catch-up situations need an accountant, not a lawyer.',
            },
            {
              href: '/blog/do-i-need-an-accountant-for-your-small-business',
              eyebrow: 'Blog',
              title: 'Do you actually need an accountant?',
              blurb:
                'Six honest signs it’s time, three signs it isn’t, and the real cost math behind the decision.',
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
              Not sure if your letter is routine or serious?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. Bring the
              letter exactly as it came. We&rsquo;ll tell you honestly
              whether this is a $299-a-month bookkeeping problem or one that
              genuinely needs a lawyer &mdash; and say so either way.
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
