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

const SLUG = 'can-you-do-taxes-without-w2';
const TITLE = 'Can You Do Taxes Without a W-2? Yes — Here’s Exactly How';
const DESCRIPTION =
  'Yes, you can do taxes without a W-2 — the IRS has a form for it. How Form 4852 works, how to get your wage data free, and what waiting actually costs.';
const PUBLISHED = '2026-07-22';
const MODIFIED = '2026-07-22';
const HERO = `/blog/${SLUG}/hero-missing-w2-paperwork.webp`;

const TOC = [
  { id: 'start-here', label: 'Start here: it might not be missing yet' },
  { id: 'form-4852', label: 'The IRS wrote a form for exactly this problem' },
  { id: 'wage-transcript', label: 'The shortcut: get your wage data from the IRS' },
  { id: 'what-you-need', label: 'What you actually need to file without a W-2' },
  { id: 'no-job', label: 'What if you didn’t have a job at all?' },
  { id: 'behind-years', label: 'What if it’s not one year — it’s three?' },
  { id: 'what-waiting-costs', label: 'What waiting actually costs' },
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
        width: 1376,
        height: 768,
        alt: 'A torn-open IRS envelope, a fan of paper pay stubs, and a laptop showing a blank tax form on a kitchen table',
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
    q: 'Can I file my taxes without my W-2?',
    a: 'Yes. The IRS created Form 4852 — the Substitute for Form W-2 — for exactly this. You estimate your wages and withholding from your own records, attach the form to your return, and file on time. You do not need your employer’s cooperation to use it.',
  },
  {
    q: 'How accurate do my numbers have to be on Form 4852?',
    a: 'They have to be your honest best estimate, and you have to explain on the form how you arrived at them. Your final pay stub of the year is usually the strongest evidence because it carries year-to-date totals for both wages and withholding. If the real W-2 turns up later and the numbers differ, you file an amended return.',
  },
  {
    q: 'What happens if I didn’t file last year’s taxes?',
    a: 'File as soon as you can, even if you cannot pay. The failure-to-file penalty runs at 5% of the tax due per month, capped at 25%. The failure-to-pay penalty is 0.5% per month. Filing late and paying late is roughly ten times more expensive per month than filing on time and paying late.',
  },
  {
    q: 'Can you file taxes without a job?',
    a: 'Yes, and sometimes you should even when you are not required to. If you had no income at all you generally have no filing requirement, but filing a return can still be worth it to claim refundable credits, to create a record for income verification, or to start the clock on the statute of limitations.',
  },
  {
    q: 'What happens if you don’t file taxes for 3 years?',
    a: 'The IRS can file a Substitute for Return on your behalf, calculated with no deductions and no credits you would have claimed — so the bill is usually far higher than reality. You can still file your own returns to replace it. Note that refunds generally expire three years after the original due date, so an unfiled year with a refund owed to you can time out permanently.',
  },
  {
    q: 'Can I file 2025 taxes without filing 2024?',
    a: 'Technically yes, and it is better than filing nothing. But an unfiled prior year does not go away, and it can hold up a refund on the year you did file. If you are missing more than one year, deal with them together rather than one at a time.',
  },
  {
    q: 'Are tax relief companies that promise to settle my debt legit?',
    a: 'Some are legitimate; many are not. Be sceptical of anyone who guarantees a settlement amount before reviewing your transcripts, asks for a large fee up front, or tells you to stop communicating with the IRS. Offers in Compromise are real but genuinely uncommon, and the IRS publishes its own qualification tool for free.',
  },
  {
    q: 'Will filing with Form 4852 delay my refund?',
    a: 'Often, yes. The IRS may verify your wage figures with the Social Security Administration before releasing a refund, which can add weeks. It is still faster than not filing, and it stops penalties from accruing.',
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
              <time dateTime={PUBLISHED}>July 22, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>July 22, 2026</time>
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
              alt="A torn-open IRS envelope, a fan of paper pay stubs, and a laptop showing a blank tax form on a kitchen table in morning light"
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
                <strong>Short answer:</strong> yes — you can do taxes without a
                W-2. The IRS built a form for it, called Form 4852, where you
                report your wages and withholding from your own records
                instead. You do not need your employer to send anything, you
                do not need their permission, and you do not get to skip the
                deadline while you wait.
              </p>
              <p className="mt-4 text-body text-graphite">
                The missing paperwork is the small problem. Waiting is the
                expensive one.
              </p>
            </div>

            <p className="text-body text-graphite">
              Marcus worked at a print shop until it closed in October. Not
              dramatically — the owner just stopped opening, the sign came
              down, and that was that. In March, Marcus is sitting with a
              laptop, a shoebox of pay stubs, and a phone number for his old
              boss that rings once and disconnects. Everyone he asks tells him
              the same unhelpful thing: you need your W-2.
            </p>
            <p className="mt-4 text-body text-graphite">
              He does not, actually. He needs the numbers that were going to be
              printed on it — and he has been holding most of them the whole
              time.
            </p>
            <p className="mt-4 text-body text-graphite">
              This is one of the most common questions we get between February
              and April, and it is almost always solvable in an afternoon. Here
              is the order to do it in.
            </p>
          </div>
        </Section>

        {/* 1 — START HERE */}
        <Section background="ivory" id="start-here">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Start here: it might not be missing yet
            </h2>
            <p className="mt-4 text-body text-graphite">
              Before you reach for a substitute form, rule out the boring
              explanations. Most missing W-2s are not missing — they are late,
              mailed to an old address, or sitting in a payroll portal nobody
              told you about.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Check the date before you panic.
                </strong>{' '}
                Employers have to get your W-2 to you by January 31 — it slides
                to the next business day when that lands on a weekend. If it is
                the first week of February, nothing has gone wrong yet.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Check the payroll portal, not just the mailbox.
                </strong>{' '}
                If your employer used a payroll provider, your W-2 is very
                likely sitting in an online account you can still reach — even
                if the business itself has closed. The provider is a separate
                company and their records outlive your employer.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Ask the employer directly, once, in writing.
                </strong>{' '}
                The IRS asks you to do this first, and a written request gives
                you a dated record that you tried. Email is fine. Confirm the
                address they have on file while you are at it.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. After the end of February, call the IRS.
                </strong>{' '}
                Per{' '}
                <SourceLink href="https://www.irs.gov/taxtopics/tc154">
                  the IRS&rsquo;s own guidance on missing W-2s
                </SourceLink>
                , you can call them at 800-829-1040 once February is over.
                Have your name, address, Social Security number and dates of
                employment ready, plus your employer&rsquo;s name, address and
                EIN if you can find it — an old pay stub usually has it. The
                IRS will contact the employer for you.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              If any of those four steps produces the W-2, you are done and the
              rest of this post is not your problem. Genuinely — most people
              stop here.
            </p>
          </div>
        </Section>

        {/* 2 — FORM 4852 */}
        <Section background="cream" id="form-4852">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The IRS wrote a form for exactly this problem
            </h2>
            <p className="mt-4 text-body text-graphite">
              When the W-2 genuinely is not coming, you file anyway using{' '}
              <SourceLink href="https://www.irs.gov/forms-pubs/about-form-4852">
                Form 4852, the Substitute for Form W-2
              </SourceLink>
              . It exists for two situations: your employer never sent the
              form, or they sent one that is wrong.
            </p>
            <p className="mt-4 text-body text-graphite">
              It is a one-page form. You fill in what you earned and what was
              withheld, explain how you worked the numbers out, and describe
              what you did to try to get the real thing. Then it goes in with
              your return like any other attachment.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">You estimate, honestly.</strong>{' '}
                The form asks for your best figures, not certified ones. Nobody
                expects you to have accounting-grade precision on a form whose
                entire premise is that the paperwork went missing.
              </li>
              <li>
                <strong className="text-aubergine">
                  Your last pay stub is the star witness.
                </strong>{' '}
                Final stubs of the year usually carry year-to-date totals for
                gross wages, federal withholding, Social Security and Medicare.
                That is most of a W-2 already.
              </li>
              <li>
                <strong className="text-aubergine">
                  You show your working.
                </strong>{' '}
                The form has a line asking how you determined the amounts. Be
                specific — &ldquo;year-to-date totals from my final pay stub,
                dated 12/20&rdquo; is a real answer.
              </li>
              <li>
                <strong className="text-aubergine">
                  If the real W-2 shows up later and differs, you amend.
                </strong>{' '}
                That is Form 1040-X. It is a normal, unremarkable thing to file
                and it is not an admission that you did anything wrong.
              </li>
            </ul>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/pay-stubs-and-bank-statements.webp`}
              alt="Pay stubs, bank statements and a manila folder spread across a worn wooden desk beside a calculator"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — WAGE TRANSCRIPT */}
        <Section background="ivory" id="wage-transcript">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The shortcut: get your wage data from the IRS
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is the part most people never find out about. Your employer
              did not only send that W-2 to you — they filed a copy with the
              government. The IRS will give you that data back, for free, in
              something called a{' '}
              <SourceLink href="https://www.irs.gov/individuals/get-transcript">
                Wage and Income Transcript
              </SourceLink>
              .
            </p>
            <p className="mt-4 text-body text-graphite">
              It lists the W-2s, 1099s and other information returns filed
              under your Social Security number for a given year. If your
              employer filed their copy — and most do even when they are
              falling apart — your numbers are already sitting on an IRS server
              waiting for you to ask.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Online is fastest.</strong>{' '}
                Through your IRS individual online account you can pull it
                immediately. Setting up the account takes identity
                verification, which is the slow part.
              </li>
              <li>
                <strong className="text-aubergine">By mail takes 5–10 days.</strong>{' '}
                You can also request one by phone on 800-908-9946 if you would
                rather not create an online account.
              </li>
              <li>
                <strong className="text-aubergine">It is free.</strong>{' '}
                Anyone charging you a fee to retrieve your own transcript is
                selling you a phone call you could make yourself.
              </li>
              <li>
                <strong className="text-aubergine">
                  It is not instant for the current year.
                </strong>{' '}
                Wage data takes time to post after employers file. For a very
                recent tax year the transcript may be thin or empty well into
                the filing season — which is exactly when Form 4852 earns its
                keep.
              </li>
            </ul>
          </div>
        </Section>

        {/* 4 — WHAT YOU NEED */}
        <Section background="cream" id="what-you-need">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What you actually need to file without a W-2
            </h2>
            <p className="mt-4 text-body text-graphite">
              Strip away the anxiety and the list is short. You are trying to
              reconstruct four numbers and prove where they came from.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Total wages for the year.
                </strong>{' '}
                Year-to-date gross on your final pay stub. If stubs are missing
                too, bank deposits plus your pay rate and dates worked will get
                you close enough to estimate honestly.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Federal income tax withheld.
                </strong>{' '}
                This one matters most — it is money already paid on your behalf,
                and understating it means overpaying your own tax bill.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Social Security and Medicare withheld.
                </strong>{' '}
                Also on the stub. These do not change your income tax but they
                belong on the form.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Employer name, address and EIN.
                </strong>{' '}
                The EIN is a nine-digit number printed on old pay stubs and on
                any prior-year W-2 from the same employer.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              If that is your whole situation — one employer, one missing form,
              stubs in hand — this is genuinely a do-it-yourself afternoon. You
              do not need to hire anyone, and we would tell you the same thing
              on a call. Where it stops being simple is when the missing W-2
              sits on top of something else: multiple years, a business of your
              own, or a notice from the IRS that already arrived.
            </p>
          </div>
        </Section>

        {/* 5 — NO JOB */}
        <Section background="ivory" id="no-job">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What if you didn&rsquo;t have a job at all?
            </h2>
            <p className="mt-4 text-body text-graphite">
              &ldquo;Can you file taxes without a job?&rdquo; is a slightly
              different question hiding inside the same worry, and the answer
              is also yes. A W-2 is evidence of employment income. Plenty of
              people have taxable income without an employer, and plenty of
              people with no income at all still benefit from filing.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Self-employed, gig, or 1099 work.
                </strong>{' '}
                No W-2 is expected here at all. You report the income on
                Schedule C, deduct genuine business expenses, and handle
                self-employment tax. Missing 1099s do not stop you either —
                your own records are the authority, and you owe tax on the
                income whether or not anyone sent a form.
              </li>
              <li>
                <strong className="text-aubergine">
                  Unemployment, interest, or retirement income.
                </strong>{' '}
                These arrive on their own forms — 1099-G, 1099-INT, 1099-R —
                and are reported the same way.
              </li>
              <li>
                <strong className="text-aubergine">
                  No income whatsoever.
                </strong>{' '}
                You usually have no filing requirement. Filing anyway can still
                be worth it: refundable credits, a filed return for income
                verification when you rent or borrow, and a clean record rather
                than a silent gap.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              If a chunk of your year was self-employment, the missing W-2 is
              probably not your biggest question —{' '}
              <Link href="/services" className={linkClass}>
                how the business side gets recorded
              </Link>{' '}
              is.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/desk-calendar-filing-deadline.webp`}
              alt="A small desk calendar beside a closed laptop and a mug of tea in warm late-afternoon window light"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — BEHIND YEARS */}
        <Section background="cream" id="behind-years">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What if it&rsquo;s not one year — it&rsquo;s three?
            </h2>
            <p className="mt-4 text-body text-graphite">
              A missing W-2 is often how someone discovers they are further
              behind than they thought. One skipped year turns into two because
              the first one is unresolved, and by year three the whole thing
              has become something you avoid thinking about after 9pm.
            </p>
            <p className="mt-4 text-body text-graphite">
              The mechanics are less frightening than the feeling.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  The IRS may file for you — badly.
                </strong>{' '}
                If you do not file, they can prepare a Substitute for Return
                using the income reported by employers and banks, with no
                deductions and none of the credits you would have claimed. The
                resulting bill is usually much larger than what you actually
                owed. You can replace it by filing your own return.
              </li>
              <li>
                <strong className="text-aubergine">
                  Refunds expire, bills do not.
                </strong>{' '}
                You generally have three years from the original due date to
                claim a refund. Miss that window and money the government owed
                you simply stops being available. Tax you owe has no such
                kindness.
              </li>
              <li>
                <strong className="text-aubergine">
                  Wage transcripts make catch-up work possible.
                </strong>{' '}
                This is the practical reason the transcript matters so much for
                multi-year situations — you can reconstruct several years of
                income from IRS records even when your own paperwork is long
                gone.
              </li>
              <li>
                <strong className="text-aubergine">
                  Do the years together, not one at a time.
                </strong>{' '}
                Numbers carry forward between years. Filing them piecemeal
                tends to create corrections you then have to unwind.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              This is the point where an accountant stops being optional
              overhead and starts being cheaper than the alternative — not
              because the forms are hard, but because sequencing several years
              correctly is the whole job. If you want to see what that looks
              like before committing to anything, our{' '}
              <Link href="/pricing" className={linkClass}>
                pricing is on the page
              </Link>{' '}
              and{' '}
              <Link href="/how-we-work" className={linkClass}>
                the first 30 days are written out
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* 7 — EMPHASIS: WHAT WAITING COSTS */}
        <Section background="aubergine" id="what-waiting-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What waiting actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Here is the number that should change your afternoon. The IRS
              charges two separate penalties, and people consistently fear the
              wrong one.
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
              is 5% of the tax you owe, per month, capped at 25%. The
              failure-to-pay penalty is 0.5% per month. Read those again:{' '}
              <strong className="text-ivory">
                not filing costs ten times more per month than not paying
              </strong>
              .
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Which means the worst possible move — the one that feels safest
              when the paperwork is missing — is to hold the return back until
              everything looks tidy. If you owe $4,000 and file five months
              late, the filing penalty alone reaches its 25% ceiling: $1,000,
              for the sin of waiting. Had you filed on time and paid five
              months late, you would be looking at roughly a tenth of that.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              There is also a floor. For returns filed more than 60 days late,
              the minimum penalty is the lesser of $525 or 100% of what you
              owe — so even a small balance can carry a disproportionate
              charge.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              File with your best estimate. Amend later if you have to. The
              amendment is free; the delay is not.
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
              href: '/blog/do-i-need-an-accountant-for-your-small-business',
              eyebrow: 'Blog',
              title: 'Do you actually need an accountant?',
              blurb:
                'Six honest signs it’s time, three signs it isn’t, and the real cost math — including when the answer is that software is still enough.',
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
              Missing more than one form?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute call with Njock. Bring whatever you have —
              a shoebox is fine. We will tell you honestly whether this is a
              form you can file yourself this afternoon or something worth
              handing over.
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
