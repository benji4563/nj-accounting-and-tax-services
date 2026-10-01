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

const SLUG = 'is-tax-relief-advocates-legit';
const TITLE = 'Is Tax Relief Advocates Legit? An Honest, Sourced Answer';
const DESCRIPTION =
  'Is Tax Relief Advocates legit? Yes, it is a real, BBB-accredited company. Whether it fits your case is a separate question. What to check before you sign.';
const PUBLISHED = '2026-10-01';
const MODIFIED = '2026-10-01';
const HERO = `/blog/${SLUG}/hero-magnifier-documents-phone-desk.webp`;

const TOC = [
  { id: 'who-they-are', label: 'Who Tax Relief Advocates actually is' },
  { id: 'legit-or-not', label: 'So is Tax Relief Advocates legit?' },
  { id: 'reviews-and-complaints', label: 'What the reviews and complaints actually tell you' },
  { id: 'what-it-costs', label: 'What a tax relief firm costs, and what the IRS charges' },
  { id: 'questions-to-ask', label: 'Five questions to ask before you sign anything' },
  { id: 'free-version', label: 'The free version, which the IRS runs itself' },
  { id: 'cost-of-stalling', label: 'What it costs to sit on the decision' },
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
        alt: 'Overhead view of a magnifying glass resting on printed documents beside a smartphone, a fountain pen, a cup of coffee and a laptop on a pale wooden desk',
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
    q: 'Is Tax Relief Advocates legit?',
    a: 'Yes. Tax Relief Advocates, also known as TRA, is a real tax resolution company based in Irvine, California. As of October 2026 its Better Business Bureau profile shows BBB accreditation since September 2018 and an A+ rating. Being a legitimate company does not mean it is the right choice for every tax debt, so check the fee, the scope of work, and who will represent you before you sign.',
  },
  {
    q: 'Is Tax Relief Advocates a reputable company?',
    a: 'Its public record is mixed, which is normal for a large firm in this industry. As of October 2026 it holds an A+ BBB rating and a 4.7 average across more than 8,000 Google reviews, and its BBB profile also carries many pages of customer complaints, mostly about communication, timelines, and refunds. We have not worked with the firm, so we cannot vouch for or against it. Read the complaints and the company replies yourself before deciding.',
  },
  {
    q: 'How much does Tax Relief Advocates charge?',
    a: 'Tax Relief Advocates does not publish a fee schedule, so the only reliable number is the one in your own written agreement. Third-party review sites report an initial investigation fee of roughly $595 to $795 and total resolution fees from about $2,500 to $10,000 depending on complexity. We have not verified those figures. Ask for the full fee, what triggers additional charges, and the refund terms in writing before you pay anything.',
  },
  {
    q: 'Do tax relief companies really work?',
    a: 'They can, when a credentialed professional handles a case that genuinely needs one. A tax relief company cannot access any IRS program that you cannot apply for yourself. The Federal Trade Commission warns that some companies charge large upfront fees and then fail to deliver, and it advises against paying a whole fee upfront.',
  },
  {
    q: 'Can a tax relief company negotiate with the IRS for me?',
    a: 'Only through a person who holds the right credential. Enrolled agents, certified public accountants, and attorneys have unlimited representation rights before the IRS, which covers audits, collections, and appeals. You authorize them with Form 2848, the power of attorney. A salesperson or case manager without one of those credentials cannot represent you.',
  },
  {
    q: 'How much will the IRS usually settle for?',
    a: 'There is no usual percentage. The IRS accepts an Offer in Compromise only when the amount offered reflects what it could reasonably expect to collect from you, based on your income, expenses, and asset equity. Many applicants do not qualify at all. The free IRS Offer in Compromise Pre-Qualifier tool gives you an eligibility check before you pay anyone.',
  },
  {
    q: 'Can I set up an IRS payment plan without a tax relief company?',
    a: 'Yes. Individuals who owe $50,000 or less in combined tax, penalties, and interest and have filed all required returns can apply for a long-term payment plan online. The IRS lists a $29 setup fee for an online plan paid by direct debit, and the fee is waived for low-income applicants. A short-term plan of up to 180 days has no setup fee.',
  },
  {
    q: 'Does NJ’s Accounting and Tax Services do tax relief?',
    a: 'Not the representation part. Njock is an accountant, not a CPA, enrolled agent, or tax attorney, so we do not negotiate with the IRS on your behalf. What we do is catch-up bookkeeping and return preparation, which is the work that has to be finished before any payment plan or settlement can be requested. If your case needs formal representation, we will tell you and point you toward someone who holds the credential.',
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
              <time dateTime={PUBLISHED}>October 1, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 1, 2026</time>
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
              alt="Overhead view of a magnifying glass resting on printed documents beside a smartphone, a fountain pen, a cup of coffee and a laptop on a pale wooden desk"
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
                <strong>Short answer:</strong> yes. If you are asking &ldquo;is
                Tax Relief Advocates legit,&rdquo; it is a real tax resolution
                company based in Irvine, California, BBB-accredited since
                September 2018 with an A+ rating as of October 2026. It is not
                a scam operation or a fake IRS caller.
              </p>
              <p className="mt-4 text-body text-graphite">
                Legit and right for you are different questions, though. The
                same public record that shows the A+ also shows a long list of
                customer complaints, and nothing the firm offers is an IRS
                program you can&rsquo;t apply for yourself. The useful question
                is what you&rsquo;d be paying for.
              </p>
            </div>

            <p className="text-body text-graphite">
              Denise &mdash; I&rsquo;ll call her Denise &mdash; runs a small
              catering company out of a rented commercial kitchen. A wedding
              season that never quite arrived left her about $19,000 behind
              with the IRS, and now it&rsquo;s a Tuesday night and she has
              three browser tabs open: the notice she photographed on the prep
              counter, an ad for a tax relief firm, and a search box where
              she&rsquo;s typed the firm&rsquo;s name followed by the word
              &ldquo;legit.&rdquo;
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t being paranoid. She&rsquo;s doing for a tax firm
              exactly what she&rsquo;d do before hiring a new produce supplier,
              which is check whether they&rsquo;re real before handing over a
              card number.
            </p>
            <p className="mt-4 text-body text-graphite">
              One disclosure before the body, because it matters: we&rsquo;re an
              accounting firm writing about another company in a neighboring
              corner of the same industry. We have never worked with Tax Relief
              Advocates, so we can&rsquo;t vouch for them or against them. What
              we can do is lay out the public record as it stood on October 1,
              2026, link every claim, and show you how to check the rest
              yourself.
            </p>
          </div>
        </Section>

        {/* 1 — WHO THEY ARE */}
        <Section background="ivory" id="who-they-are">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Who Tax Relief Advocates actually is
            </h2>
            <p className="mt-4 text-body text-graphite">
              Tax Relief Advocates, usually shortened to TRA, is a tax
              resolution company headquartered in Irvine, California. Its{' '}
              <SourceLink href="https://www.bbb.org/us/ca/irvine/profile/tax-representative/tax-relief-advocates-1126-172019525">
                Better Business Bureau profile
              </SourceLink>{' '}
              lists it as accredited since September 5, 2018, rated A+, and
              nine years in business. The same profile names its management
              and its alternate business names. That is a company with a street
              address, a named chief executive, and a paper trail.
            </p>
            <p className="mt-4 text-body text-graphite">
              Which, to be fair, already puts it several rungs above the
              voicemail that has now left you your &ldquo;final courtesy
              notice&rdquo; for the ninth time. A fake IRS caller doesn&rsquo;t
              have a BBB file. It has a callback number that changes weekly.
            </p>
            <p className="mt-4 text-body text-graphite">
              What a firm like this sells is help with the standard IRS
              collection tools: payment plans, Offers in Compromise, penalty
              relief, and getting unfiled returns caught up. If you want the
              longer map of those, we wrote one on{' '}
              <Link href="/blog/tax-resolution-services" className={linkClass}>
                what tax resolution services actually cover
              </Link>
              . The short version is that every firm in this business is
              working with the same four or five IRS mechanisms. None of them
              has a private door.
            </p>
          </div>
        </Section>

        {/* 2 — LEGIT OR NOT */}
        <Section background="cream" id="legit-or-not">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              So is Tax Relief Advocates legit?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Yes, in the sense the word usually means: it&rsquo;s a registered,
              operating business rather than a scam. But &ldquo;legit&rdquo; is
              the lowest bar there is. Denise would put it this way: a kitchen
              passing its health inspection tells you the food won&rsquo;t make
              you ill. It tells you nothing about whether you&rsquo;ll like
              dinner, or what it costs.
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
              its advice is blunt: don&rsquo;t do business with anyone who
              wants their whole fee upfront, and be wary of promises about
              qualifying before anyone has checked with the IRS. Hold every
              firm to that, the reputable ones included. If the name on your
              ad was a different one, the same test applies &mdash; we ran it
              on the phrase{' '}
              <Link href="/blog/is-fresh-start-tax-relief-legit" className={linkClass}>
                &ldquo;Fresh Start tax relief&rdquo;
              </Link>{' '}
              too.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/contract-phone-coffee-table.webp`}
              alt="Overhead view of a printed contract with a pencil and a smartphone lying on it, next to a cup of tea, scissors and an open laptop on a dark round table"
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
              What the reviews and complaints actually tell you
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is the public picture as of October 1, 2026. On Google, the
              firm showed a 4.7 average across roughly 8,300 reviews. On the
              BBB, an A+ rating, alongside a complaints section that runs to
              dozens of pages. Both of those are true at the same time, and
              neither cancels the other out.
            </p>
            <p className="mt-4 text-body text-graphite">
              Anyone who has read restaurant reviews knows how this goes. Two
              people order the same lasagna on the same night, and one of them
              writes a love letter while the other writes to the health department. A
              star average tells you surprisingly little about which of the two
              you&rsquo;ll be.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A BBB grade is not a customer-satisfaction score.
                </strong>{' '}
                It weighs things like how a business responds to complaints and
                how long it has operated. A firm can hold an A+ and still have
                a lot of unhappy customers on file, provided it answers them.
              </li>
              <li>
                <strong className="text-aubergine">
                  Read the complaints for the pattern, not the count.
                </strong>{' '}
                A large firm will collect complaints by sheer volume. What
                matters is the theme. In this industry the recurring ones are
                slow communication, cases that drag, and disputes over refunds
                of upfront fees. Check whether those show up and how the
                company replied.
              </li>
              <li>
                <strong className="text-aubergine">
                  Check when the glowing ones were written.
                </strong>{' '}
                A review posted the week someone signed up can&rsquo;t describe
                a result, because there isn&rsquo;t one yet. A review that
                describes an actual outcome, with a timeline, is worth ten that
                praise the person who answered the phone.
              </li>
              <li>
                <strong className="text-aubergine">
                  Look for your own situation.
                </strong>{' '}
                Someone who owed $80,000 across six unfiled years had a
                different experience from someone who owed $9,000 and needed a
                payment plan. Find the reviewer who sounds like you.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              That last point is the one that matters most, and it&rsquo;s the
              one a rating can&rsquo;t answer for you.
            </p>
          </div>
        </Section>

        {/* 4 — WHAT IT COSTS */}
        <Section background="cream" id="what-it-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What a tax relief firm costs, and what the IRS charges
            </h2>
            <p className="mt-4 text-body text-graphite">
              Tax Relief Advocates doesn&rsquo;t publish a fee schedule, which
              is standard for the industry and still worth noticing. Third-party
              review sites report an initial investigation fee somewhere around
              $595 to $795, with total fees from roughly $2,500 to $10,000
              depending on the case. We haven&rsquo;t verified those numbers,
              and the only figure that counts is the one in your own written
              agreement.
            </p>
            <p className="mt-4 text-body text-graphite">
              Now the other side of the ledger, which is what the IRS itself
              charges for the same paperwork.
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
                application fee is non-refundable and waived if you meet the
                low-income certification.
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
              Do the arithmetic on Denise. She owes $19,000, which is under the
              $50,000 online limit, so her most likely outcome is a payment
              plan. Paying $3,000 to have someone submit a $29 form is a
              little like hiring a moving company to carry one box across the
              street. Perfectly legal, and occasionally sensible if the box
              turns out to be a piano. Usually it&rsquo;s a box.
            </p>
            <p className="mt-4 text-body text-graphite">
              The fee starts earning its keep when the case is a piano: several
              unfiled years, payroll taxes, a levy already in motion, or an
              Offer in Compromise with real financial disclosure behind it.
              That&rsquo;s skilled work, and a credentialed person&rsquo;s time
              is worth paying for.
            </p>
          </div>
        </Section>

        {/* 5 — QUESTIONS TO ASK */}
        <Section background="ivory" id="questions-to-ask">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Five questions to ask before you sign anything
            </h2>
            <p className="mt-4 text-body text-graphite">
              These work on any tax relief firm, this one included. A good firm
              answers all five without flinching. The order matters, because
              the first one tends to end the conversation early if it&rsquo;s
              going to end at all.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Who, by name, will represent me, and what credential do
                  they hold?
                </strong>{' '}
                Only enrolled agents, CPAs, and attorneys have{' '}
                <SourceLink href="https://www.irs.gov/tax-professionals/understanding-tax-return-preparer-credentials-and-qualifications">
                  unlimited representation rights before the IRS
                </SourceLink>
                . The IRS runs a public directory where you can look the person
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
                covers, and whether preparing back returns is billed
                separately. It usually is.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. What are the refund terms if I don&rsquo;t qualify?
                </strong>{' '}
                Get the exact wording. &ldquo;Money-back guarantee&rdquo; on a
                website and the refund clause in a contract are frequently
                distant cousins.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Given what you see, could I do this myself?
                </strong>{' '}
                The honest firms will tell you when the answer is yes. It&rsquo;s
                the single most revealing question on the list, and it costs
                nothing to ask.
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
              src={`/blog/${SLUG}/magnifier-letter-crumpled-drafts.webp`}
              alt="A brass-handled magnifying glass lying on a handwritten letter beside several crumpled sheets of paper and an orange alarm clock on a worn wooden table"
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
              The free version, which the IRS runs itself
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
                Year by year, with penalties and interest broken out. This is
                the number every later decision hangs on.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Confirm every required return is filed.
                </strong>{' '}
                Both payment plans and Offers in Compromise require it. If a
                year is missing, that comes first &mdash; here is{' '}
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
                It&rsquo;s a form, not a negotiation.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. If money is tight, look at the free help.
                </strong>{' '}
                The FTC points people to the Taxpayer Advocate Service and to
                Low Income Taxpayer Clinics, which represent people of modest
                income for free or a small fee.
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

        {/* 7 — EMPHASIS: COST OF STALLING */}
        <Section background="aubergine" id="cost-of-stalling">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What it costs to sit on the decision
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Spending a week vetting a firm is sensible. Spending four months
              with three tabs open is the expensive option, and it&rsquo;s the
              one most people accidentally choose.
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
              to 25%, and the IRS charges interest on top. On Denise&rsquo;s
              $19,000, that&rsquo;s about $95 a month in penalty alone, before
              interest, for the privilege of not deciding.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Here&rsquo;s the part worth knowing. Once an individual who filed
              on time has an approved payment plan, that penalty rate drops to
              0.25% a month. The plan she can set up herself for $29 cuts the
              penalty in half the month it&rsquo;s approved.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              So the question was never really whether one company is legit. It
              was whether the health inspection certificate on the wall was
              enough to order from the menu. It isn&rsquo;t, but it does mean
              you can sit down and read the prices.
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
              href: '/blog/why-is-tax-relief-services-calling-me',
              eyebrow: 'Blog',
              title: 'Why Is Tax Relief Services Calling Me? And How to Stop It',
              blurb:
                'Where the callers got your number, why it started when it did, and how to make it stop.',
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
