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

const SLUG = 'tax-resolution-services';
const TITLE = 'Tax Resolution Services: What They Actually Cover';
const DESCRIPTION =
  'Tax resolution services cover IRS payment plans, Offers in Compromise, and penalty relief. What is real, what is a sales pitch, and what you can do free.';
const PUBLISHED = '2026-08-24';
const MODIFIED = '2026-08-24';
const HERO = `/blog/${SLUG}/hero-desk-calculator-notices.webp`;

const TOC = [
  { id: 'start-here', label: 'Start here: what tax resolution actually means' },
  { id: 'what-it-covers', label: 'The four things tax resolution services actually do' },
  { id: 'spot-the-scam', label: 'How to tell a real firm from an OIC mill' },
  { id: 'is-fresh-start-legit', label: 'Is the "IRS Fresh Start Program" actually real?' },
  { id: 'why-they-call', label: 'Why tax relief companies keep calling you' },
  { id: 'diy-first', label: 'What you can do yourself, for free, before you hire anyone' },
  { id: 'what-waiting-costs', label: 'What waiting costs' },
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
        alt: 'A calculator, phone, pay stub and a notepad with handwritten totals spread across a desk',
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
    q: 'Is Fresh Start tax relief legit?',
    a: 'The “Fresh Start” initiative itself is real — it is the nickname the IRS gave to a 2011 set of changes that widened eligibility for Offers in Compromise and installment agreements and raised the threshold for filing a lien. It is not a standalone program you enroll in, and it is not owned by any single company. When a caller or a company name uses “Fresh Start” as if it is a special one-time deal only they can get you into, that is marketing language borrowing a real government term — vet the company the same way you would vet anyone else.',
  },
  {
    q: 'Why is tax relief services calling me?',
    a: 'Not because the IRS told them to — the IRS never initiates contact about a balance by phone. Notices of Federal Tax Lien are filed with your county recorder and become public record the moment they are filed, and lead-generation companies scrape those filings (along with purchased data-broker lists) and resell your name to whichever tax relief company is bidding that week. That is usually why the calls start right after a lien appears, even though nothing was actually leaked.',
  },
  {
    q: 'Is tax forgiveness real?',
    a: 'Partial forgiveness is real but conditional, not automatic. An Offer in Compromise can reduce what you owe, but the IRS only approves one when your offer represents the most it could realistically collect from you — most applicants who apply do not qualify for a reduction close to what ads imply. Full, no-conditions “forgiveness” as pitched in cold calls is not a real program.',
  },
  {
    q: 'Are companies like Tax Relief Advocates or Alleviate Tax legit?',
    a: 'We have not worked directly with either firm, so we cannot vouch for or against a specific company by name — and neither can any other blog post you read. What we can tell you is the test that applies to any firm regardless of its name: does it review your actual IRS transcripts before quoting a result, does it name the credentialed person (enrolled agent, CPA, or attorney) handling your case, and does it avoid demanding the full fee before any work starts. Fail any one of those and the name on the letterhead does not matter.',
  },
  {
    q: 'How much do tax resolution services cost?',
    a: 'It varies widely — flat fees for a single installment agreement can run a few hundred dollars, while a full Offer in Compromise case with a CPA, EA, or attorney often runs into the low thousands because of the financial documentation involved. The IRS itself only charges $205 to file an Offer in Compromise application, so most of what you are paying a firm for is their time and expertise, not a government fee.',
  },
  {
    q: 'Can I apply for an Offer in Compromise myself, without paying a company?',
    a: 'Yes. The IRS publishes a free Offer in Compromise Pre-Qualifier tool so you can check your own eligibility before paying anyone, and the application itself is something you can file directly for the $205 fee. Where people usually want help is not the paperwork itself but the financial disclosure and negotiation that follows — that is the part a credentialed representative is actually being paid for.',
  },
  {
    q: 'What happens if I just keep ignoring the calls and the balance?',
    a: 'The debt does not go away, and it gets more expensive the longer it sits. Interest compounds daily on the unpaid balance, and unpaid tax debt above a certain threshold can lead to a federal tax lien on your property or, eventually, a levy on your bank account or wages. None of that requires you to pick up the phone first — it happens on its own timeline.',
  },
  {
    q: 'Does NJ’s Accounting and Tax Services handle IRS negotiations?',
    a: 'Njock is an accountant, not a CPA, enrolled agent, or tax attorney — the credentials the IRS requires to formally represent you in an Offer in Compromise negotiation or a collections hearing. We are upfront about that. What we do well is catch-up bookkeeping and return preparation that gets your actual numbers straight, which is usually the first thing any representative needs before they can negotiate anything on your behalf — and if your situation needs that level of representation, we will say so and point you toward someone who holds it.',
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
              <time dateTime={PUBLISHED}>August 24, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>August 24, 2026</time>
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
              alt="A calculator, phone, pay stub and a notepad with handwritten totals spread across a desk"
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
                <strong>Short answer:</strong> tax resolution services means
                working out a formal arrangement with the IRS (or your state)
                for tax debt you can&rsquo;t pay in full right now — an
                installment agreement, a reduced settlement called an Offer in
                Compromise, a temporary pause called Currently Not
                Collectible status, or penalty relief. Every one of those
                programs is real, and every one of them is free to apply for
                yourself.
              </p>
              <p className="mt-4 text-body text-graphite">
                What you&rsquo;re often paying a company for is someone to do
                the paperwork and talk to the IRS on your behalf — which is a
                real service some people genuinely need. It is also, not
                coincidentally, the exact gap the scam side of this industry
                lives in.
              </p>
            </div>

            <p className="text-body text-graphite">
              Renata — I&rsquo;ll call her Renata — runs a landscape design
              business, and two years ago it had a slow stretch. She paid her
              two employees, she paid her supplier, and she quietly skipped
              her own quarterly estimated taxes, telling herself she&rsquo;d
              catch up in the fall. She didn&rsquo;t. Now there&rsquo;s an IRS
              balance, a stack of notices she&rsquo;s been sliding to the
              bottom of the mail pile, and — this week — a phone that keeps
              lighting up with unknown numbers promising to settle the whole
              thing for &ldquo;pennies on the dollar&rdquo; if she calls back
              today.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t a deadbeat. She paid herself last during a hard
              year, and the tax bill was the one thing that could wait —
              right up until it couldn&rsquo;t.
            </p>
            <p className="mt-4 text-body text-graphite">
              What she needs isn&rsquo;t a company that already knows her
              number. It&rsquo;s a clear picture of what &ldquo;tax
              resolution&rdquo; actually means, which parts of it are real
              government programs, and how to tell the difference between a
              firm that will help and one that is just another version of the
              robocall.
            </p>
          </div>
        </Section>

        {/* 1 — START HERE */}
        <Section background="ivory" id="start-here">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Start here: what tax resolution actually means
            </h2>
            <p className="mt-4 text-body text-graphite">
              &ldquo;Tax resolution&rdquo; isn&rsquo;t one program — it&rsquo;s
              the general term for any formal path to dealing with tax debt
              you can&rsquo;t pay off today. Some routes reduce what you owe.
              Most don&rsquo;t reduce anything at all; they just spread the
              balance out, pause collection, or remove a penalty that was
              added on top of the tax itself.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You have an IRS balance you can&rsquo;t pay in full.
                </strong>{' '}
                This is the most common reason people go looking for tax
                resolution — a notice arrived with a number bigger than what
                is sitting in the bank account.
              </li>
              <li>
                <strong className="text-aubergine">
                  You have unfiled returns behind the balance.
                </strong>{' '}
                If missing paperwork is part of your situation, that&rsquo;s
                its own fixable problem —{' '}
                <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                  we&rsquo;ve written about catching up on a missing year
                </Link>{' '}
                separately, because it usually has to happen before
                resolution can start.
              </li>
              <li>
                <strong className="text-aubergine">
                  You&rsquo;re facing a lien, levy, or wage garnishment.
                </strong>{' '}
                This is the point where the IRS has moved from asking to
                collecting, and it changes how urgently you need to act.
              </li>
              <li>
                <strong className="text-aubergine">
                  A business has payroll tax trouble.
                </strong>{' '}
                Unpaid payroll tax carries its own, sharper penalties and is
                usually the case that most needs a credentialed
                representative, not a DIY afternoon.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              For most individual situations, one of four tools does the job
              — and the IRS lets you apply for every one of them yourself,
              for free, before you ever pay a company to do it for you.
            </p>
          </div>
        </Section>

        {/* 2 — WHAT IT COVERS */}
        <Section background="cream" id="what-it-covers">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The four things tax resolution services actually do
            </h2>
            <p className="mt-4 text-body text-graphite">
              Strip away the marketing and the entire industry is selling
              access to (or help with) four IRS mechanisms. All four exist
              on{' '}
              <SourceLink href="https://www.irs.gov/payments">
                irs.gov
              </SourceLink>{' '}
              whether or not you ever talk to a company.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Installment agreement — spread the balance over time.
                </strong>{' '}
                Owe $50,000 or less in combined tax, penalties and interest
                and you can typically set up a long-term{' '}
                <SourceLink href="https://www.irs.gov/payments/payment-plans-installment-agreements">
                  online payment plan
                </SourceLink>{' '}
                yourself. Direct-debit setup online runs $22; the same plan
                arranged by mail or phone runs $107. Under $100,000, a
                short-term plan of up to 180 days carries no setup fee at
                all.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Offer in Compromise — settle for less than you owe.
                </strong>{' '}
                An{' '}
                <SourceLink href="https://www.irs.gov/payments/offer-in-compromise">
                  Offer in Compromise
                </SourceLink>{' '}
                is approved only when your offer represents the most the IRS
                could realistically collect from you within a reasonable
                time — not simply the amount you&rsquo;d prefer to pay. The
                application fee is $205, and a free Pre-Qualifier tool lets
                anyone check their own eligibility before filing.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Currently Not Collectible — a temporary pause.
                </strong>{' '}
                If paying anything toward the balance would create genuine
                economic hardship, the IRS can place your account in
                Currently Not Collectible status after you submit a full
                financial disclosure on Form 433-F. Collection stops; the
                debt and interest do not disappear, but nothing is actively
                being taken from you while you&rsquo;re in that status.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Penalty relief — remove the add-on, not the tax.
                </strong>{' '}
                First-time penalty abatement and reasonable-cause relief can
                remove failure-to-file or failure-to-pay penalties that were
                stacked on top of the underlying tax. It doesn&rsquo;t touch
                what you actually owe, but for someone who missed a deadline
                for a genuinely good reason, it can meaningfully shrink the
                bill.
              </li>
            </ol>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/phone-notepad-desk.webp`}
              alt="A phone with a blank screen resting on an orange desk beside a notepad and pencil"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — SPOT THE SCAM */}
        <Section background="ivory" id="spot-the-scam">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to tell a real firm from an OIC mill
            </h2>
            <p className="mt-4 text-body text-graphite">
              The IRS has a name for the bad actors in this space:{' '}
              <SourceLink href="https://www.irs.gov/newsroom/dirty-dozen-tax-scams-for-2026-irs-reminds-taxpayers-to-watch-out-for-dangerous-threats">
                &ldquo;OIC mills,&rdquo;
              </SourceLink>{' '}
              which it describes as often overpromising results and charging
              high fees to taxpayers who don&rsquo;t even qualify for the
              program being sold to them. The{' '}
              <SourceLink href="https://consumer.ftc.gov/articles/tax-relief-companies">
                FTC
              </SourceLink>{' '}
              adds the same warning from the consumer side: dishonest
              companies promise to settle debt for &ldquo;pennies on the
              dollar&rdquo; before ever examining your actual tax situation.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  They guarantee a result before reviewing anything.
                </strong>{' '}
                No legitimate firm can promise a settlement amount, or that
                you&rsquo;ll qualify for an Offer in Compromise at all,
                before seeing your transcripts and financials. The IRS makes
                that determination with a formula, not a salesperson.
              </li>
              <li>
                <strong className="text-aubergine">
                  They want the full fee before any work starts.
                </strong>{' '}
                A retainer is normal. Thousands of dollars up front, before a
                single document has been reviewed, is not.
              </li>
              <li>
                <strong className="text-aubergine">
                  They can&rsquo;t or won&rsquo;t name your case handler.
                </strong>{' '}
                A firm that won&rsquo;t tell you which enrolled agent, CPA,
                or attorney is actually assigned to your case is a red flag
                on its own — that credential is what lets someone legally
                represent you.
              </li>
              <li>
                <strong className="text-aubergine">
                  They pressure you to sign today.
                </strong>{' '}
                &ldquo;The IRS will seize your assets tomorrow&rdquo; is a
                sales tactic, not how IRS collections actually move. Real
                urgency exists in this world, but it is measured in weeks,
                not hours.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              A legitimate firm does the opposite of all four: it asks for
              your transcripts and financial picture first, it can point you
              to the same free IRS Pre-Qualifier result to sanity-check what
              it&rsquo;s proposing, and its fees are a menu you can read, not
              a number that appears only after you&rsquo;ve committed.
            </p>
          </div>
        </Section>

        {/* 4 — IS FRESH START LEGIT */}
        <Section background="cream" id="is-fresh-start-legit">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Is the &ldquo;IRS Fresh Start Program&rdquo; actually real?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Yes — and also, it&rsquo;s not what most of the ads make it
              sound like. Fresh Start is the nickname the IRS itself gave to
              a set of policy changes from 2011: wider eligibility for
              Offers in Compromise, more accessible installment agreements,
              and a higher dollar threshold before a lien gets filed in the
              first place. Those changes are real, and they&rsquo;re now
              simply baked into how the existing programs work.
            </p>
            <p className="mt-4 text-body text-graphite">
              What Fresh Start is not is a standalone product you enroll in,
              owned by whichever company happens to have it in their name.
              When a caller offers you &ldquo;the Fresh Start Program&rdquo;
              as if it&rsquo;s a special, limited-time amnesty only they can
              unlock, that&rsquo;s a real government term being used as a
              hook. The company&rsquo;s name doesn&rsquo;t carry any more
              legitimacy than the process it actually follows — the four
              checks in the section above apply just as much to a firm
              called &ldquo;Fresh Start&rdquo; something as to any other.
            </p>
          </div>
        </Section>

        {/* 5 — WHY THEY CALL */}
        <Section background="ivory" id="why-they-call">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Why tax relief companies keep calling you
            </h2>
            <p className="mt-4 text-body text-graphite">
              Not because the IRS told them to. The IRS&rsquo;s own first
              contact about a balance due is always by mail — never a cold
              phone call. So a call claiming to be &ldquo;about your tax
              debt&rdquo; is, by definition, not the IRS and not sent by
              them.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here&rsquo;s the part that feels invasive but is actually
              mundane: a federal tax lien is a public record, filed with
              your county recorder the moment it goes on file. Lead-generation
              companies scrape those public filings, mix them with purchased
              data-broker lists, and sell the resulting names to whichever
              tax relief company is bidding that week. That is usually why
              the calls seem to start right after a lien appears — nothing
              was leaked, the paperwork simply became public on schedule.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Don&rsquo;t engage.</strong>{' '}
                You owe the caller nothing, including a callback, and
                confirming any personal details just validates the number
                for future lists.
              </li>
              <li>
                <strong className="text-aubergine">
                  Verify any real notice independently.
                </strong>{' '}
                If a call claims to reference an actual IRS letter you
                received, call the number printed on that letter yourself —
                never the number the caller gives you.
              </li>
              <li>
                <strong className="text-aubergine">Report it if it escalates.</strong>{' '}
                Genuine threats or high-pressure tactics can be reported to
                the FTC at ReportFraud.ftc.gov and to your state attorney
                general.
              </li>
            </ul>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/organized-document-folder.webp`}
              alt="An accordion document folder packed with organized paperwork on a desk"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — DIY FIRST */}
        <Section background="cream" id="diy-first">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What you can do yourself, for free, before you hire anyone
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most of this process is, honestly, something you can start
              without paying anyone a fee at all.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Run the free Pre-Qualifier tool yourself.
                </strong>{' '}
                It takes about fifteen minutes and tells you the same
                eligibility signal a company would otherwise charge you to
                &ldquo;determine.&rdquo;
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Set up a payment plan online.
                </strong>{' '}
                For most balances under $50,000 this takes roughly as long
                as filling out a lead-gen form on a tax relief website — and
                the $22 online setup fee is a fraction of any firm&rsquo;s
                retainer.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Pull your own transcript before believing a caller&rsquo;s number.
                </strong>{' '}
                Your actual IRS balance is available directly from your IRS
                online account — check it yourself rather than trusting
                whatever figure a cold call quoted you.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Call the IRS directly if you&rsquo;d rather negotiate yourself.
                </strong>{' '}
                A Power of Attorney (Form 2848) is only required if you want
                someone else to represent you — you&rsquo;re always allowed
                to speak for yourself.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              Where it stops being a DIY afternoon: multiple unresolved
              years, payroll or trust-fund taxes tied to a business, a levy
              already in motion, or you simply don&rsquo;t have the hours to
              chase it down properly. That is when hiring someone starts
              paying for itself — not because the forms are hard, but
              because sequencing several years and negotiating on your
              behalf is a full-time skill in its own right. Our{' '}
              <Link href="/pricing" className={linkClass}>
                pricing is posted plainly
              </Link>{' '}
              and{' '}
              <Link href="/how-we-work" className={linkClass}>
                the first 30 days are written out
              </Link>{' '}
              if you want to see what that actually looks like before
              committing to anything. And if what you need is representation
              in front of the IRS rather than clean books, we&rsquo;ll tell
              you that upfront and point you to{' '}
              <Link href="/services" className={linkClass}>
                the kind of help that covers
              </Link>
              , rather than pretend a bookkeeper can do a tax attorney&rsquo;s
              job.
            </p>
          </div>
        </Section>

        {/* 7 — EMPHASIS: WHAT WAITING COSTS */}
        <Section background="aubergine" id="what-waiting-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What waiting costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Shopping around for the right help is smart. Doing nothing
              while you shop is where the real cost lives.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The{' '}
              <a
                href="https://www.irs.gov/payments/failure-to-file-penalty"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory/60 pb-0.5 font-medium text-ivory hover:border-persimmon hover:text-persimmon"
              >
                failure-to-file penalty
              </a>{' '}
              runs 5% of the unpaid tax per month, capped at 25%. The
              failure-to-pay penalty runs 0.5% per month. Interest compounds
              daily on top of both, for as long as the balance sits unpaid —
              and none of that pauses while you decide which company to
              call back.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              A balance that goes unaddressed long enough can also trigger a
              federal tax lien, which attaches to property and shows up in
              places that matter — financing, business credit, sometimes a
              sale. Every one of the four legitimate tools above stops that
              clock. A robocall promising to freeze it for free while you
              think it over does not.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Vetting a firm properly takes a week, maybe two. That is a
              reasonable amount of time to spend getting it right. What
              isn&rsquo;t reasonable is letting the notices pile up in a
              drawer for another year because the whole subject feels too
              loaded to open.
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
              title: 'Can you do taxes without a W-2? Yes — here’s exactly how',
              blurb:
                'The IRS has a form for exactly this. How Form 4852 works, and why waiting costs ten times more than owing.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Tax preparation and catch-up bookkeeping',
              blurb:
                'What we actually do when your books are behind: federal, state and local returns, rebuilt month by month from whatever you have.',
            },
            {
              href: '/pricing',
              eyebrow: 'Pricing',
              title: 'Real prices. No “call for a quote.”',
              blurb:
                'Three plans, all-in, every fee on the page — including how one-time cleanup work is quoted before you commit.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure which category you&rsquo;re in?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute call with Njock. Bring the notices, not
              just the panic. We&rsquo;ll tell you honestly whether this is
              something you can handle yourself this week or something worth
              bringing in a specialist for.
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
