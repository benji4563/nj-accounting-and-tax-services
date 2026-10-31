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

const SLUG = 'is-alleviate-tax-legit';
const TITLE = 'Is Alleviate Tax Legit? The Public Record, Sourced';
const DESCRIPTION =
  'Is Alleviate Tax legit? It is a real, BBB-accredited firm in Irvine, CA. Whether it fits your tax debt is a separate question. What to check before you pay.';
const PUBLISHED = '2026-10-31';
const MODIFIED = '2026-10-31';
const HERO = `/blog/${SLUG}/hero-taxes-envelope-calculator-coins.webp`;

const TOC = [
  { id: 'who-they-are', label: 'Who Alleviate Tax is, on paper' },
  { id: 'legit-or-not', label: 'So is Alleviate Tax legit?' },
  { id: 'reviews-and-complaints', label: 'What the BBB record and the reviews tell you' },
  { id: 'what-it-costs', label: 'What a firm costs, and what the IRS charges' },
  { id: 'the-contract', label: 'What to check in the contract before you sign' },
  { id: 'free-version', label: 'When you may not need a firm at all' },
  { id: 'cost-of-waiting', label: 'What waiting costs while you decide' },
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
        height: 1066,
        alt: 'Flat lay of a notepad, a black calculator, a pen and a pale pink envelope folder marked Taxes beside a brass dish of loose coins on a white surface',
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
    q: 'Is Alleviate Tax legit?',
    a: 'Yes. Alleviate Tax is a real tax resolution company based in Irvine, California. As of October 31, 2026 its Better Business Bureau profile shows BBB accreditation since July 3, 2019, an A rating, and no alerts. Being a legitimate company does not mean it is the right choice for every tax debt, so check the fee, the scope of work, and who will represent you before you sign.',
  },
  {
    q: 'Is Alleviate Tax a scam?',
    a: 'Nothing in the public record we reviewed suggests it is a scam. It is a registered business with a street address, a BBB profile and a public complaints process. It is also a large firm with a long complaints list, which is common in this industry. We have never worked with Alleviate Tax, so we cannot vouch for or against it. Read the complaints and the company replies yourself.',
  },
  {
    q: 'How many BBB complaints does Alleviate Tax have?',
    a: 'As of October 31, 2026 the BBB profile for Alleviate Tax LLC listed 235 complaints filed in the last three years. The BBB advises weighing complaint volume against company size and, more importantly, against how the company responds. Counts change daily, so check the live profile.',
  },
  {
    q: 'Do tax relief companies really work?',
    a: 'They can, when a credentialed professional handles a case that genuinely needs one. A tax relief company cannot access any IRS program that you cannot apply for yourself. The Federal Trade Commission warns that some companies charge thousands of dollars upfront and that no company can guarantee a result.',
  },
  {
    q: 'Can a tax relief company negotiate with the IRS for me?',
    a: 'Only through a person who holds the right credential. Enrolled agents, certified public accountants and attorneys have unlimited representation rights before the IRS. You authorize them with Form 2848, the power of attorney. A salesperson or case manager without one of those credentials cannot represent you.',
  },
  {
    q: 'Can I set up an IRS payment plan without a tax relief company?',
    a: 'Yes. Individuals who owe $50,000 or less in combined tax, penalties and interest and have filed all required returns can apply for a long-term payment plan online. The IRS lists a $29 setup fee for an online plan paid by direct debit, and the fee is waived for low-income applicants. A short-term plan of up to 180 days has no setup fee.',
  },
  {
    q: 'What does the IRS charge for an Offer in Compromise?',
    a: 'The IRS application fee is $205, plus a first payment, unless you meet the low-income qualifications. The fee is not returned if the offer is rejected. You must also have filed all required returns and made required estimated tax payments. The free IRS Pre-Qualifier tool checks your eligibility before you pay anyone.',
  },
  {
    q: 'Does NJ’s Accounting and Tax Services do tax relief?',
    a: 'Not the representation part. Njock is an accountant, not a CPA, enrolled agent or tax attorney, so we do not negotiate with the IRS on your behalf. What we do is catch-up bookkeeping and return preparation, which is the work that has to be finished before any payment plan or settlement can be requested. If your case needs formal representation, we will tell you and point you toward someone who holds the credential.',
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
              <time dateTime={PUBLISHED}>October 31, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 31, 2026</time>
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
              alt="Flat lay of a notepad, a black calculator, a pen and a pale pink envelope folder marked Taxes beside a brass dish of loose coins on a white surface"
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
                <strong>Short answer:</strong> yes. If you are asking
                &ldquo;is Alleviate Tax legit,&rdquo; it is a real tax
                resolution company based in Irvine, California, BBB-accredited
                since July 2019 with an A rating as of October 31, 2026. It is
                not a scam operation or a fake IRS caller.
              </p>
              <p className="mt-4 text-body text-graphite">
                Legit and right for you are different questions, though. The
                same public record that shows the A also shows hundreds of
                customer complaints, and nothing the firm offers is an IRS
                program you can&rsquo;t apply for yourself. The useful question
                is what you&rsquo;d be paying for.
              </p>
            </div>

            <p className="text-body text-graphite">
              Marcus &mdash; I&rsquo;ll call him Marcus &mdash; runs a
              two-truck landscaping company. A slow spring and a bad quarter
              left him about $24,000 behind with the IRS, and today he is
              sitting in the cab of his truck outside a job site, eating a
              gas-station sandwich and thinking about the ad he heard on the
              radio on the way over. A calm voice promised the IRS could be
              made to see reason. He has the company name in his phone,
              followed by the word &ldquo;legit.&rdquo;
            </p>
            <p className="mt-4 text-body text-graphite">
              He isn&rsquo;t being paranoid. He&rsquo;s doing what he&rsquo;d do
              before letting a stranger near a customer&rsquo;s irrigation
              system, which is check that the stranger exists.
            </p>
            <p className="mt-4 text-body text-graphite">
              One disclosure before the body, because it matters: we&rsquo;re an
              accounting firm writing about a company in a neighboring corner
              of the same industry. We have never worked with Alleviate Tax, so
              we can&rsquo;t vouch for it or against it. What we can do is lay
              out the public record as it stood on October 31, 2026, link what
              we can, and show you how to check the rest yourself.
            </p>
          </div>
        </Section>

        {/* 1 — WHO THEY ARE */}
        <Section background="ivory" id="who-they-are">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who Alleviate Tax is, on paper
            </h2>
            <p className="mt-4 text-body text-graphite">
              Alleviate Tax, listed with the Better Business Bureau as Alleviate
              Tax LLC, is a tax resolution company headquartered in Irvine,
              California. Its{' '}
              <SourceLink href="https://www.bbb.org/us/ca/irvine/profile/tax-return-preparation/alleviate-tax-llc-1126-1000062423">
                BBB profile
              </SourceLink>{' '}
              shows a business start date in February 2018, BBB accreditation
              since July 3, 2019, an A rating, and no alerts on the page when
              we looked. That is a company with an address, a paper trail and
              someone whose job it is to answer a public complaint.
            </p>
            <p className="mt-4 text-body text-graphite">
              That alone separates it from a scam, which has a phone number and
              a very confident voice and not much else. Tax relief ads in
              general have a way of making the IRS sound like a dragon that can
              be negotiated down into a puppy. It&rsquo;s a good ad. The IRS,
              unfortunately, is a formula.
            </p>
            <p className="mt-4 text-body text-graphite">
              What a firm like this sells is help with the standard IRS
              collection tools: payment plans, Offers in Compromise, penalty
              relief, and getting unfiled returns caught up. We mapped those in{' '}
              <Link href="/blog/tax-resolution-services" className={linkClass}>
                what tax resolution services actually cover
              </Link>
              . Every firm in this business works with the same handful of IRS
              mechanisms. None of them has a private door.
            </p>
          </div>
        </Section>

        {/* 2 — LEGIT OR NOT */}
        <Section background="cream" id="legit-or-not">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              So is Alleviate Tax legit?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Yes, in the sense the word usually means: it&rsquo;s a registered,
              operating business rather than a scam. But &ldquo;legit&rdquo; is
              the lowest bar there is. Marcus would put it this way: a
              contractor with a valid license and a clean truck can still be
              the wrong person to hire for a job that needed a shovel and a
              Saturday.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  What &ldquo;legit&rdquo; does tell you.
                </strong>{' '}
                The company exists, has operated for years, answers to a public
                complaints process, and isn&rsquo;t impersonating the IRS.
              </li>
              <li>
                <strong className="text-aubergine">
                  What it doesn&rsquo;t tell you.
                </strong>{' '}
                Whether your particular debt needs a firm at all, whether the
                fee is proportionate to the work, and whether the result
                you&rsquo;re hoping for is one the IRS would ever approve.
              </li>
              <li>
                <strong className="text-aubergine">
                  What no firm can tell you on a first call.
                </strong>{' '}
                What you&rsquo;ll settle for. That depends on your transcripts
                and your finances, and the IRS decides it with a formula.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              The{' '}
              <SourceLink href="https://consumer.ftc.gov/articles/tax-relief-companies">
                FTC&rsquo;s guidance on tax relief companies
              </SourceLink>{' '}
              is written about the industry as a whole, not any one firm, and
              it is blunt: walk away from anyone who wants their whole fee
              upfront, no company can guarantee a result, and only the IRS can
              decide whether you qualify for a program. Hold every firm to
              that, the reputable ones included. If the name on your ad was a
              different one, the test is the same. We ran it on{' '}
              <Link href="/blog/is-tax-relief-advocates-legit" className={linkClass}>
                Tax Relief Advocates
              </Link>{' '}
              and on the phrase{' '}
              <Link href="/blog/is-fresh-start-tax-relief-legit" className={linkClass}>
                &ldquo;Fresh Start tax relief&rdquo;
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/clipboard-checklist-laptop-pen.webp`}
              alt="A handwritten checklist on a lined notepad clipped to a marbled clipboard, with a pen across it and the corner of a silver laptop on a white desk"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — REVIEWS AND COMPLAINTS */}
        <Section background="ivory" id="reviews-and-complaints">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What the BBB record and the reviews tell you
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is the public picture as of October 31, 2026. The BBB
              profile showed an A rating and 235 complaints filed in the last
              three years. Both are true at once, and neither cancels the
              other. Reading 235 complaints is nobody&rsquo;s idea of a fun
              evening, so here is how to read them without losing the weekend.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A BBB grade is not a customer-satisfaction score.
                </strong>{' '}
                It weighs things like how a business responds to complaints and
                how long it has operated. A firm can hold a high grade and
                still have unhappy customers on file, provided it answers them.
              </li>
              <li>
                <strong className="text-aubergine">
                  Read for the pattern, not the count.
                </strong>{' '}
                The BBB itself says to weigh volume against a company&rsquo;s
                size. A large firm collects complaints by sheer headcount. What
                matters is the theme, and in this industry the recurring ones
                are slow communication, cases that drag, and disputes over
                refunds of upfront fees. Check whether those show up here and
                how the company replied.
              </li>
              <li>
                <strong className="text-aubergine">
                  Mind the mood of the moment.
                </strong>{' '}
                When we looked, the three most recent customer reviews on the
                BBB page were negative. On a profile with hundreds of entries,
                that tells you what the latest few days looked like, not the
                average. Scroll further back before you decide anything.
              </li>
              <li>
                <strong className="text-aubergine">
                  Find the reviewer who sounds like you.
                </strong>{' '}
                Someone who owed $80,000 across six unfiled years had a
                different experience from someone who owed $9,000 and needed a
                payment plan. Marcus, at $24,000, should be reading the
                $24,000 stories.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Review sites outside the BBB score the firm very differently from
              one another, and the ones that make money from referrals aren&rsquo;t
              neutral. We&rsquo;d rely on the BBB file, the company&rsquo;s
              replies in it, and your own contract before any star rating.
            </p>
          </div>
        </Section>

        {/* 4 — WHAT IT COSTS */}
        <Section background="cream" id="what-it-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What a firm costs, and what the IRS charges
            </h2>
            <p className="mt-4 text-body text-graphite">
              We haven&rsquo;t verified what Alleviate Tax charges and
              won&rsquo;t guess. Fees in this industry depend on the case, and
              the only number that counts is the one in your own written
              agreement. What we can do is show you the other side of the
              ledger, which is what the IRS itself charges for the same
              paperwork.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A long-term payment plan: $29.
                </strong>{' '}
                That is the setup fee the IRS lists for a{' '}
                <SourceLink href="https://www.irs.gov/payments/payment-plans-installment-agreements">
                  payment plan applied for online
                </SourceLink>{' '}
                with direct debit. It&rsquo;s $107 by phone or mail, and waived
                for low-income applicants. A short-term plan of up to 180 days
                has no setup fee.
              </li>
              <li>
                <strong className="text-aubergine">
                  An Offer in Compromise: $205.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://www.irs.gov/payments/offer-in-compromise">
                  Offer in Compromise
                </SourceLink>{' '}
                application fee is not returned if the offer is rejected, and
                it&rsquo;s waived if you meet the low-income certification.
              </li>
              <li>
                <strong className="text-aubergine">
                  Checking whether you qualify: $0.
                </strong>{' '}
                The IRS Pre-Qualifier tool is free and takes about as long as
                an intake call.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Do the arithmetic on Marcus. He owes $24,000, which is under the
              $50,000 online limit, so the likeliest outcome is a payment plan.
              Paying thousands of dollars to have someone submit a $29 form is a
              bit like hiring a guide to find your own kitchen. Occasionally
              sensible, if the house turns out to be a maze. Usually it&rsquo;s
              a kitchen.
            </p>
            <p className="mt-4 text-body text-graphite">
              A fee starts earning its keep when the case is a maze: several
              unfiled years, payroll taxes, a levy already in motion, or an
              Offer in Compromise with real financial disclosure behind it.
              That&rsquo;s skilled work, and a credentialed person&rsquo;s time
              is worth paying for. If you&rsquo;re weighing the credentialed
              route, here is{' '}
              <Link href="/blog/how-much-does-a-tax-attorney-cost" className={linkClass}>
                what a tax attorney costs
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* 5 — THE CONTRACT */}
        <Section background="ivory" id="the-contract">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What to check in the contract before you sign
            </h2>
            <p className="mt-4 text-body text-graphite">
              The sales call is the brochure. The contract is the product. It is
              also the one piece of paper in this story that nobody has ever
              written in your favor by accident, so read it with a pen. These
              checks work on any tax relief firm, this one included.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Who, by name, will represent me, and what credential do
                  they hold?
                </strong>{' '}
                Only enrolled agents, CPAs and attorneys have{' '}
                <SourceLink href="https://www.irs.gov/tax-professionals/understanding-tax-return-preparer-credentials-and-qualifications">
                  unlimited representation rights before the IRS
                </SourceLink>
                . The IRS keeps a public directory where you can look the person
                up. If the answer to &ldquo;who&rdquo; is a department, that is
                an answer.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Will you pull my IRS transcripts before quoting an
                  outcome?
                </strong>{' '}
                Any number offered before the transcripts are in hand is a
                guess. A confident guess, delivered warmly, but a guess.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. What is the total fee, in writing, and what triggers more?
                </strong>{' '}
                Ask what the investigation fee covers, what the resolution fee
                covers, whether preparing back returns is billed separately, and
                whether there are monthly maintenance fees. The FTC flags those
                last ones specifically.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. What are the refund terms if I don&rsquo;t qualify?
                </strong>{' '}
                Get the exact wording. A money-back promise on a website and the
                refund clause in the contract are frequently distant cousins.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Given what you see, could I do this myself?
                </strong>{' '}
                The honest firms will tell you when the answer is yes. It&rsquo;s
                the most revealing question on the list, and it costs nothing
                to ask.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              If you didn&rsquo;t go looking for a firm and one found you
              instead, that&rsquo;s a separate story with its own explanation.
              We covered it in{' '}
              <Link href="/blog/why-is-tax-relief-services-calling-me" className={linkClass}>
                why tax relief services keep calling you
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/taxes-folder-calculator-numbers.webp`}
              alt="A pale pink envelope folder marked Taxes with a black calculator resting on its corner and white number tiles scattered across it"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — FREE VERSION */}
        <Section background="cream" id="free-version">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When you may not need a firm at all
            </h2>
            <p className="mt-4 text-body text-graphite">
              Nobody has ever described the IRS website as a pleasure cruise.
              But it&rsquo;s free, it&rsquo;s the same system the firms use, and
              an hour on it will tell you whether you need to hire anyone.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Log in to your IRS online account and read your real
                  balance.
                </strong>{' '}
                Year by year, with penalties and interest broken out. Every
                later decision hangs on this number.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Confirm every required return is filed.
                </strong>{' '}
                Payment plans and Offers in Compromise both require it. If a
                year is missing, that comes first. Here is{' '}
                <Link
                  href="/blog/what-happens-if-i-didnt-file-last-years-taxes"
                  className={linkClass}
                >
                  what happens when a return didn&rsquo;t get filed
                </Link>{' '}
                and how to fix it.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Run the Offer in Compromise Pre-Qualifier.
                </strong>{' '}
                If it says you&rsquo;re unlikely to qualify, you&rsquo;ve just
                saved yourself an investigation fee.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. If you owe $50,000 or less, apply for a payment plan
                  online.
                </strong>{' '}
                It&rsquo;s a form, not a negotiation. The rules differ for
                business balances such as payroll tax, so confirm which
                category yours is in first.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. If money is tight, look at the free help.
                </strong>{' '}
                The FTC points people to the Taxpayer Advocate Service and to
                Low Income Taxpayer Clinics, which help people of modest means
                with IRS disputes.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              And here is where we talk ourselves out of your business, which
              we seem to do about once a post. If you need someone to negotiate
              with the IRS, we&rsquo;re not that firm. Njock is an accountant,
              not a CPA or enrolled agent, and we&rsquo;ll refer you to someone
              who holds the credential.
            </p>
            <p className="mt-4 text-body text-graphite">
              What we are good at is the unglamorous step before any of it:
              rebuilding the books and preparing the returns so the numbers
              going to the IRS are right. That&rsquo;s on our{' '}
              <Link href="/services" className={linkClass}>
                services page
              </Link>
              , and{' '}
              <Link href="/pricing" className={linkClass}>
                the prices are printed on the page
              </Link>{' '}
              rather than revealed after a consultation.
            </p>
          </div>
        </Section>

        {/* 7 — EMPHASIS: COST OF WAITING */}
        <Section background="aubergine" id="cost-of-waiting">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What waiting costs while you decide
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Spending a week vetting a firm is sensible. Spending four months
              with the folder marked &ldquo;Taxes&rdquo; riding around on the
              passenger seat is the expensive option, and it&rsquo;s the one
              most people accidentally choose.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The{' '}
              <a
                href="https://www.irs.gov/payments/failure-to-pay-penalty"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-ivory/60 pb-0.5 font-medium text-ivory hover:border-persimmon hover:text-persimmon"
              >
                failure-to-pay penalty
              </a>{' '}
              is 0.5% of the unpaid tax for each month or part of a month, up
              to 25%, and the IRS charges interest on top. On Marcus&rsquo;s
              $24,000, that&rsquo;s about $120 a month in penalty alone, before
              interest, for the privilege of not deciding.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Here&rsquo;s the part worth knowing. While an individual who filed
              on time has an approved payment plan, that penalty rate drops to
              0.25% a month. On the same $24,000 that&rsquo;s about $60. The
              plan he can set up himself for $29 cuts the penalty in half the
              month it&rsquo;s approved.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              So the question was never really whether one company is legit. It
              was whether legit is enough to sign on. It isn&rsquo;t. It does
              mean you can sit down, open the folder, and read the prices.
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
                'The IRS mechanisms behind every tax relief pitch, and which ones you can use without paying anyone.',
            },
            {
              href: '/blog/is-tax-relief-advocates-legit',
              eyebrow: 'Blog',
              title: 'Is Tax Relief Advocates Legit? An Honest, Sourced Answer',
              blurb:
                'The same public-record check, run on a different firm, with five questions to ask before signing.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Tax preparation and catch-up bookkeeping',
              blurb:
                'Books rebuilt and returns prepared from whatever you have. Usually the first step before any IRS payment plan.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Want a second pair of eyes before you sign?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. No pitch. Bring
              the notice and the quote you were given, and we&rsquo;ll tell you
              honestly whether this looks like a form you can file yourself or
              a case that needs a credentialed representative.
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
