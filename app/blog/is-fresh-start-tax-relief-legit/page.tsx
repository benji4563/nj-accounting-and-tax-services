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

const SLUG = 'is-fresh-start-tax-relief-legit';
const TITLE = 'Is Fresh Start Tax Relief Legit? What Is Real, What Is Not';
const DESCRIPTION =
  'Is Fresh Start tax relief legit? The IRS Fresh Start changes are real, but it is not a program you enroll in. What is genuine, what is a sales pitch, what is free.';
const PUBLISHED = '2026-08-27';
const MODIFIED = '2026-08-27';
const HERO = `/blog/${SLUG}/hero-calculator-magnifier-tax-form.webp`;

const TOC = [
  { id: 'what-it-is', label: 'What the Fresh Start "program" actually is' },
  { id: 'is-it-legit', label: 'So is Fresh Start tax relief legit or not?' },
  { id: 'what-it-changed', label: 'The four things Fresh Start actually changed' },
  { id: 'who-qualifies', label: 'Who actually qualifies' },
  { id: 'vetting-a-company', label: 'How to vet a company with "Fresh Start" in its name' },
  { id: 'do-it-yourself', label: 'What you can do yourself, for free, first' },
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
        height: 1067,
        alt: 'Overhead view of a calculator and a magnifying glass resting on a printed 1040 tax form with W-9 and W-4 forms on a wooden desk',
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
    a: 'The IRS Fresh Start changes are legitimate. "Fresh Start" is the nickname the IRS gave to a set of policy changes made in 2011 and 2012 that widened access to installment agreements, Offers in Compromise, penalty relief, and lien withdrawal. It is not a standalone program you sign up for, there is no Fresh Start application form, and no single company owns it. When a caller or an ad presents "the Fresh Start Program" as a limited-time deal only they can get you into, that is real government language being used as a marketing hook.',
  },
  {
    q: 'Is there an IRS Fresh Start application?',
    a: 'No. There is no Fresh Start enrollment form and no Fresh Start hotline. You apply to whichever specific relief option fits your situation: an installment agreement, an Offer in Compromise, Currently Not Collectible status, penalty abatement, or a lien withdrawal. Each has its own form and its own eligibility rules. Any company that tells you it will "enroll you in Fresh Start" is describing paperwork that does not exist under that name.',
  },
  {
    q: 'Can I settle my tax debt for pennies on the dollar?',
    a: 'Rarely, and never on demand. The mechanism behind that phrase is the Offer in Compromise, which the IRS approves only when your offer represents the most it could realistically collect from you within a reasonable time. Most people who apply do not get a reduction anywhere near what the ads imply. The IRS publishes a free Offer in Compromise Pre-Qualifier tool so you can check your own eligibility before paying anyone to tell you.',
  },
  {
    q: 'Why do tax relief companies keep calling me about Fresh Start?',
    a: 'The IRS does not initiate contact about a balance by phone, so a cold call about "your tax debt" is not the IRS. A Notice of Federal Tax Lien becomes public record with your county recorder the moment it is filed. Lead-generation companies scrape those filings, combine them with purchased data-broker lists, and sell your name to whichever tax relief firm is bidding that week. That is usually why the calls start right after a lien appears.',
  },
  {
    q: 'Are companies like Tax Relief Advocates or Alleviate Tax legitimate?',
    a: 'We have not worked with either firm, so we cannot vouch for or against a specific company by name, and neither can any other blog post you read. The test that applies to any firm regardless of its name: does it pull and review your actual IRS transcripts before quoting a result, does it name the credentialed person (enrolled agent, CPA, or tax attorney) handling your case, and does it avoid demanding the full fee before any work starts. Fail any one of those and the name on the letterhead does not matter.',
  },
  {
    q: 'How much does the Fresh Start / Offer in Compromise process cost?',
    a: 'The IRS charges a $205 application fee for an Offer in Compromise, waived for taxpayers who meet the low-income certification. A long-term installment agreement set up online with direct debit costs $22; set up by phone or mail it is $107. What a firm charges on top of that is for their time, and it ranges from a few hundred dollars for a single installment agreement to low thousands for a full Offer in Compromise with a CPA, enrolled agent, or attorney.',
  },
  {
    q: 'Do I have to file all my tax returns before I can use Fresh Start relief?',
    a: 'Yes. Being current on all required federal returns and estimated payments is a precondition for an installment agreement and for an Offer in Compromise. If you have unfiled years, that has to be fixed first. Catching up on missing returns is a separate, fixable problem, and it is usually the first thing any representative needs done before they can negotiate anything on your behalf.',
  },
  {
    q: 'Does NJ’s Accounting and Tax Services handle IRS negotiations?',
    a: 'Njock is an accountant, not a CPA, enrolled agent, or tax attorney, which are the credentials the IRS requires to formally represent you in an Offer in Compromise or a collections hearing. We are upfront about that. What we do well is catch-up bookkeeping and return preparation that gets your actual numbers straight, which is the step that has to happen before any negotiation can start. If your situation needs formal representation, we will say so and point you to someone who holds the credential.',
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
              alt="Overhead view of a calculator and a magnifying glass resting on a printed 1040 tax form with W-9 and W-4 forms on a wooden desk"
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
                <strong>Short answer:</strong> the IRS Fresh Start changes are
                legitimate, so &ldquo;is Fresh Start tax relief legit&rdquo; is
                really two questions. Fresh Start is the nickname the IRS gave a
                set of 2011&ndash;2012 policy changes that made installment
                agreements, Offers in Compromise, penalty relief, and lien
                withdrawal easier to get. It is not a program you enroll in,
                there is no Fresh Start application, and no company owns it.
              </p>
              <p className="mt-4 text-body text-graphite">
                So the relief is real. The &ldquo;limited-time Fresh Start
                Program&rdquo; in the radio ad is not &mdash; that is a real
                government term being used as a sales hook, and telling the two
                apart is the whole job.
              </p>
            </div>

            <p className="text-body text-graphite">
              Marcus &mdash; I&rsquo;ll call him Marcus &mdash; runs a two-van
              HVAC business, and last year a slow winter meant he paid his
              techs, paid his parts supplier, and let his own estimated taxes
              slide until spring. Spring came and went. Now there&rsquo;s an
              IRS balance, a drawer of notices he opens the way you open a
              utility bill you already know is bad, and a phone that rings
              twice a day from numbers promising to wipe it all out under
              &ldquo;the Fresh Start Program&rdquo; if he calls back before
              five.
            </p>
            <p className="mt-4 text-body text-graphite">
              He isn&rsquo;t a tax cheat. He paid himself last in a hard year,
              and the tax bill was the one creditor that didn&rsquo;t send a
              guy to the door.
            </p>
            <p className="mt-4 text-body text-graphite">
              What Marcus needs isn&rsquo;t a company that already knows his
              number before it&rsquo;s pulled a single transcript. It&rsquo;s a
              plain read on what &ldquo;Fresh Start&rdquo; actually refers to,
              which parts are genuine IRS mechanisms, and how to tell a firm
              that will help from one that is just the robocall with a website.
            </p>
          </div>
        </Section>

        {/* 1 — WHAT IT IS */}
        <Section background="ivory" id="what-it-is">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What the Fresh Start &ldquo;program&rdquo; actually is
            </h2>
            <p className="mt-4 text-body text-graphite">
              There is no binder at the IRS labeled &ldquo;Fresh Start
              Program.&rdquo; The name comes from the IRS itself, which used it
              as an umbrella term for a run of changes it announced starting in{' '}
              <SourceLink href="https://www.irs.gov/node/5107">
                2011 and expanded in 2012
              </SourceLink>{' '}
              to help people who owed back taxes after the recession. Those
              changes got folded into the normal collection programs years ago.
              What&rsquo;s left is a phrase that outlived its press release and
              got adopted by an entire advertising industry.
            </p>
            <p className="mt-4 text-body text-graphite">
              That matters because you can&rsquo;t apply for a marketing term.
              You apply for the specific tool underneath it &mdash; an
              installment agreement, an Offer in Compromise, Currently Not
              Collectible status, penalty abatement, or a lien withdrawal. Each
              has its own form, its own rules, and its own $0 price tag to
              apply. &ldquo;Fresh Start&rdquo; is the label on the aisle, not a
              product on the shelf, and any pitch that treats it as a single
              thing you sign up for is telling you something about the pitch.
            </p>
          </div>
        </Section>

        {/* 2 — IS IT LEGIT */}
        <Section background="cream" id="is-it-legit">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              So is Fresh Start tax relief legit or not?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Both answers are true at once, which is why the question is
              confusing. The relief mechanisms are real, run by the IRS, and
              free to apply for. The &ldquo;program&rdquo; as sold in cold calls
              &mdash; a one-time amnesty, guaranteed forgiveness, act now
              &mdash; is not a thing that exists. Same two words, two very
              different claims.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Legit: the underlying IRS programs.
                </strong>{' '}
                Installment agreements, Offers in Compromise, penalty relief,
                and lien withdrawal are all real, all documented on irs.gov, and
                all available to you whether or not you ever call a company.
              </li>
              <li>
                <strong className="text-aubergine">
                  Legit: some of the firms selling help with them.
                </strong>{' '}
                Plenty of enrolled agents, CPAs, and tax attorneys do this work
                honestly for a clear fee. Paying a credentialed person to
                handle disclosure and negotiation is a normal transaction.
              </li>
              <li>
                <strong className="text-aubergine">
                  Not legit: &ldquo;you&rsquo;re pre-approved for Fresh
                  Start.&rdquo;
                </strong>{' '}
                Nobody can tell you what you&rsquo;ll settle for, or whether
                you qualify for an Offer at all, before seeing your transcripts
                and financials. The IRS decides that with a formula, not a
                script read off a call sheet.
              </li>
              <li>
                <strong className="text-aubergine">
                  Not legit: pressure measured in hours.
                </strong>{' '}
                &ldquo;The offer expires today&rdquo; is a closing technique.
                Real IRS deadlines are printed on real IRS letters and measured
                in weeks.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              The{' '}
              <SourceLink href="https://consumer.ftc.gov/articles/tax-relief-companies">
                FTC&rsquo;s guidance on tax relief companies
              </SourceLink>{' '}
              lands in the same place: the debt is real, the programs are real,
              and the promise to erase it for &ldquo;pennies on the
              dollar&rdquo; before anyone has looked at your situation is the
              part to walk away from.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/rotary-phone-tax-folder-desk.webp`}
              alt="A vintage rotary telephone on a wooden desk beside a folder labeled taxes, a stack of files, loose coins, cash and reading glasses"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — WHAT IT CHANGED */}
        <Section background="ivory" id="what-it-changed">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The four things Fresh Start actually changed
            </h2>
            <p className="mt-4 text-body text-graphite">
              If you strip the ads away, Fresh Start was four concrete
              adjustments to how IRS collections work. They&rsquo;re useful to
              know because they&rsquo;re the real thing a good representative is
              working with &mdash; and the thing an ad is gesturing at when it
              waves the phrase around like a coupon.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. The lien-filing threshold went up.
                </strong>{' '}
                The IRS raised the balance at which it generally files a{' '}
                <SourceLink href="https://www.irs.gov/node/9654">
                  Notice of Federal Tax Lien
                </SourceLink>{' '}
                to $10,000. Below that, a lien is less likely to be filed
                automatically &mdash; though the IRS can still file one when it
                decides it needs to.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Streamlined installment agreements got bigger and longer.
                </strong>{' '}
                Individuals who owe up to $50,000 can generally set up a{' '}
                <SourceLink href="https://www.irs.gov/payments/payment-plans-installment-agreements">
                  direct-debit payment plan
                </SourceLink>{' '}
                for up to 72 months with only limited financial information,
                instead of the full Collection Information Statement larger
                balances require.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Lien withdrawal became possible while you&rsquo;re still paying.
                </strong>{' '}
                Set up a Direct Debit Installment Agreement and meet the
                conditions, and you can request that the IRS withdraw the lien
                notice before the balance is fully paid &mdash; which helps if
                the public filing is affecting financing.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. The Offer in Compromise got more flexible.
                </strong>{' '}
                The IRS loosened how it calculates a taxpayer&rsquo;s ability to
                pay when it reviews an{' '}
                <SourceLink href="https://www.irs.gov/payments/offer-in-compromise">
                  Offer in Compromise
                </SourceLink>
                , which brought more people into range. &ldquo;More
                people&rdquo; still isn&rsquo;t &ldquo;most people,&rdquo; and
                the $205 application fee and Pre-Qualifier tool are both still
                right there on the IRS site.
              </li>
            </ol>
          </div>
        </Section>

        {/* 4 — WHO QUALIFIES */}
        <Section background="cream" id="who-qualifies">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who actually qualifies
            </h2>
            <p className="mt-4 text-body text-graphite">
              There&rsquo;s no single Fresh Start eligibility list, because
              there&rsquo;s no single Fresh Start. Each tool has its own bar.
              But a few conditions show up across all of them, and they&rsquo;re
              the questions a caller almost never asks before quoting you a
              number.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You&rsquo;ve filed all your required returns.
                </strong>{' '}
                Being current on every required federal return and estimated
                payment is a precondition for both installment agreements and
                Offers in Compromise. Missing years get fixed first &mdash;{' '}
                <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                  even a year where you&rsquo;ve lost the paperwork
                </Link>{' '}
                has a filing path.
              </li>
              <li>
                <strong className="text-aubergine">
                  For a payment plan: the balance is in range.
                </strong>{' '}
                Up to $50,000 for the streamlined direct-debit route. Above
                that, you&rsquo;re into full financial disclosure, and the
                process stops being a fifteen-minute online form.
              </li>
              <li>
                <strong className="text-aubergine">
                  For an Offer: the math has to actually work.
                </strong>{' '}
                The IRS approves an Offer only when your proposed amount is the
                most it could realistically collect from you within a
                reasonable period. If you have equity in assets or steady
                income that could cover the debt over time, an Offer usually
                isn&rsquo;t your route, no matter what the ad said.
              </li>
              <li>
                <strong className="text-aubergine">
                  You&rsquo;re not in an open bankruptcy.
                </strong>{' '}
                The IRS won&rsquo;t process an Offer in Compromise while a
                bankruptcy case is active. That one catches people off guard.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              The honest version: if you owe a manageable amount and just need
              time, the streamlined payment plan is probably your answer and
              you can set it up yourself this week. The Offer in Compromise
              &mdash; the &ldquo;settle for less&rdquo; part everyone&rsquo;s
              picturing &mdash; is the narrower door, and most people who walk
              up to it don&rsquo;t fit through.
            </p>
          </div>
        </Section>

        {/* 5 — VETTING A COMPANY */}
        <Section background="ivory" id="vetting-a-company">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to vet a company with &ldquo;Fresh Start&rdquo; in its name
            </h2>
            <p className="mt-4 text-body text-graphite">
              A company can legally put &ldquo;Fresh Start&rdquo; on the door.
              It carries exactly as much authority as any other company name,
              which is to say none &mdash; the words are borrowed from an IRS
              press release, not licensed from the Treasury. So judge the firm
              by what it does, not what it&rsquo;s called. The IRS even has a
              term for the bad actors here:{' '}
              <SourceLink href="https://www.irs.gov/newsroom/dirty-dozen-tax-scams-for-2026-irs-reminds-taxpayers-to-watch-out-for-dangerous-threats">
                &ldquo;OIC mills,&rdquo;
              </SourceLink>{' '}
              outfits that charge high fees to people who don&rsquo;t qualify
              for the program being sold to them.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Do they pull your transcripts before quoting a result?
                </strong>{' '}
                A real analysis starts with your IRS account transcripts and a
                financial picture. A number offered before either of those is a
                guess dressed as a quote.
              </li>
              <li>
                <strong className="text-aubergine">
                  Will they name the credentialed person on your case?
                </strong>{' '}
                Only an enrolled agent, CPA, or tax attorney can represent you
                before the IRS. If the firm won&rsquo;t tell you which one is
                assigned to you, that&rsquo;s the answer.
              </li>
              <li>
                <strong className="text-aubergine">
                  Is the full fee due before any work starts?
                </strong>{' '}
                A retainer is normal. Thousands up front, before a single
                document has been reviewed, is a business model, and not one
                that&rsquo;s pointed at your outcome.
              </li>
              <li>
                <strong className="text-aubergine">
                  Do the fees exist as a readable menu?
                </strong>{' '}
                If the price only appears after a &ldquo;consultation&rdquo;
                and a credit check, you&rsquo;re being priced by how worried you
                sounded on the phone.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              A firm worth hiring does the opposite of all four: transcripts
              first, a named representative, a published fee structure, and no
              objection when you say you want to run the free IRS Pre-Qualifier
              yourself to sanity-check the plan.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-sorting-box-of-files.webp`}
              alt="A person's hands sorting through tied bundles of documents in a cardboard file box under warm light"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — DO IT YOURSELF */}
        <Section background="cream" id="do-it-yourself">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What you can do yourself, for free, first
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most of this you can start without paying anyone. The forms are
              tedious, not hard &mdash; the part people actually pay for is the
              negotiation and the disclosure, not the clicking.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Pull your own transcript.
                </strong>{' '}
                Your real balance is in your IRS online account. Check it
                before you believe any figure a caller quoted you &mdash; the
                two are often not the same, and the caller&rsquo;s is usually
                bigger.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Run the Offer in Compromise Pre-Qualifier.
                </strong>{' '}
                It takes about fifteen minutes and gives you the same
                eligibility signal a firm would charge you to
                &ldquo;determine.&rdquo;
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Set up a payment plan online if the balance is under $50,000.
                </strong>{' '}
                The direct-debit setup fee is $22 online, versus $107 by phone
                or mail &mdash; and versus a four-figure retainer to have
                someone else fill in the same form.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Only then decide whether you need to hire anyone.
                </strong>{' '}
                A Power of Attorney (Form 2848) is required only if you want
                someone to speak to the IRS for you. You&rsquo;re always
                allowed to speak for yourself.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              Where it stops being a DIY afternoon: several unfiled years,
              payroll or trust-fund taxes tied to a business, a levy already in
              motion, or simply not having the hours to chase it properly.
              That&rsquo;s when hiring someone starts paying for itself. If what
              you need first is clean books and filed returns, our{' '}
              <Link href="/pricing" className={linkClass}>
                pricing is on the page
              </Link>{' '}
              and{' '}
              <Link href="/how-we-work" className={linkClass}>
                the first 30 days are written out
              </Link>
              . If you need representation in front of the IRS, we&rsquo;ll say
              so and point you toward{' '}
              <Link href="/services" className={linkClass}>
                the kind of help that covers
              </Link>{' '}
              rather than pretend a bookkeeper can do a tax attorney&rsquo;s
              job. For the wider map of settlement options, our post on{' '}
              <Link href="/blog/tax-resolution-services" className={linkClass}>
                what tax resolution services actually cover
              </Link>{' '}
              walks through all four tools in more detail.
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
              Taking a week or two to vet a firm properly is smart. Doing
              nothing while you decide is where the real money goes.
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
              daily on top of both, for as long as the balance sits &mdash; and
              none of it pauses while you decide which company to call back.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              A balance left alone long enough can also trigger a federal tax
              lien, which attaches to property and surfaces exactly where it
              hurts: financing, business credit, a sale. Every one of the four
              Fresh Start tools stops that clock. A voicemail promising to
              freeze it for free while you think it over does not.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The thing the notices in the drawer have in common is that they
              were all smaller when they were printed than they are now.
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
              href: '/blog/tax-resolution-services',
              eyebrow: 'Blog',
              title: 'Tax Resolution Services: What They Actually Cover',
              blurb:
                'The four IRS mechanisms behind every tax relief pitch, how to spot an OIC mill, and what you can do yourself for free.',
            },
            {
              href: '/blog/can-you-do-taxes-without-w2',
              eyebrow: 'Blog',
              title: 'Can You Do Taxes Without a W-2? Yes — Here’s Exactly How',
              blurb:
                'Filing all your returns is a precondition for Fresh Start relief. The IRS has a form for the year you lost the paperwork.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Tax preparation and catch-up bookkeeping',
              blurb:
                'Federal, state and local returns rebuilt month by month from whatever you have — usually the first step before any IRS negotiation.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure which door you&rsquo;re standing at?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute call with Njock. Bring the notices, not
              just the dread. We&rsquo;ll tell you honestly whether this is
              something you can handle yourself this week or something worth
              bringing in a credentialed specialist for.
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
