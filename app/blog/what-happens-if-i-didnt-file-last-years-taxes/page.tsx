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

const SLUG = 'what-happens-if-i-didnt-file-last-years-taxes';
const TITLE = "What Happens If I Didn't File Last Year's Taxes? Next Steps";
const DESCRIPTION =
  "What happens if I didn't file last year's taxes? The real IRS penalties, your refund deadline, what the IRS can do next, and how to catch up without panic.";
const PUBLISHED = '2026-09-28';
const MODIFIED = '2026-09-28';
const HERO = `/blog/${SLUG}/hero-bundle-of-unopened-letters.webp`;
const HERO_ALT =
  'A stack of airmail envelopes and a handwritten card tied together with twine on a dark table';

const TOC = [
  { id: 'what-actually-happens', label: 'What actually happens: it depends on one question' },
  { id: 'the-penalties', label: 'The penalties, in real dollars' },
  { id: 'does-the-irs-notice', label: 'Does the IRS notice a missing return?' },
  { id: 'skip-a-year', label: 'Can you skip a year and just file this one?' },
  { id: 'how-to-catch-up', label: 'How to file a late return, step by step' },
  { id: 'when-to-diy', label: 'When you can fix this yourself' },
  { id: 'what-waiting-costs', label: 'What another year of waiting costs' },
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
        height: 1064,
        alt: HERO_ALT,
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
    q: 'Is it okay to skip a year filing taxes?',
    a: "If your income was above the filing threshold, no. You are required to file, and skipping a year leaves that return open indefinitely. If you owe tax, penalties and interest keep growing until you file and pay. If you are owed a refund, there is no penalty, but you must file within three years of the original due date to claim it.",
  },
  {
    q: 'What happens if I forget to file my tax return last year?',
    a: 'If you are owed a refund, nothing bad happens beyond the delay, as long as you file within three years of the due date. If you owe tax, the IRS charges a failure-to-file penalty of 5% of the unpaid tax for each month or part of a month the return is late, up to 25%, plus a failure-to-pay penalty and interest. Filing as soon as possible stops the failure-to-file penalty from growing.',
  },
  {
    q: 'Does the IRS always catch unfiled taxes?',
    a: 'Not always right away, but the IRS receives copies of your W-2s and 1099s from employers and payers, so it can see income that has no matching return. When a return is missing, the IRS can send notices and eventually prepare a substitute return for you based on that income, without most of your deductions.',
  },
  {
    q: 'Do unfiled taxes ever go away?',
    a: 'No. The usual three-year limit on the IRS assessing more tax does not start until you file a return, which is why the IRS tells people to keep records indefinitely if they do not file. An unfiled year stays open until it is filed.',
  },
  {
    q: 'What is the penalty for filing taxes late if you don\'t owe?',
    a: 'There is no failure-to-file penalty if you do not owe tax, because the penalty is a percentage of the unpaid tax. The risk is losing your refund: you must file within three years of the original due date to claim it, or the money stays with the Treasury.',
  },
  {
    q: "What happens if you don't file taxes for 3 years?",
    a: 'Each unfiled year carries its own penalties and interest if tax is owed, and refunds older than three years from their due date are lost. The IRS may prepare substitute returns, assess the tax, and then collect it through a federal tax lien or a levy on wages or bank accounts. Repeated failure to file can also lead to additional penalties or criminal prosecution.',
  },
  {
    q: "Can I file 2025 taxes without filing 2024?",
    a: 'Yes. You can and should file the current year on time even if an earlier year is missing. The missing year does not disappear, though, so file it as soon as you can, and be aware the IRS may hold a refund from the new return against a balance owed on the old one.',
  },
  {
    q: 'Can you go to jail for not filing taxes?',
    a: 'Willful failure to file can be prosecuted as a crime, and the IRS warns that repeated failure to file could result in criminal prosecution. Criminal cases are aimed at deliberate, repeated non-filing, not at someone who missed a year and files it voluntarily. If you are worried about criminal exposure, talk to a tax attorney before you contact the IRS.',
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
              <time dateTime={PUBLISHED}>September 28, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>September 28, 2026</time>
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
              alt={HERO_ALT}
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
                <strong>Short answer:</strong> What happens if I didn&rsquo;t
                file last year&rsquo;s taxes depends on whether you owe. If you
                are owed a refund, there is no penalty, but you must file within
                three years of the due date to claim it. If you owe, the IRS
                charges 5% of the unpaid tax per month late, up to 25%, plus a
                separate late-payment penalty and interest, until you file and
                pay.
              </p>
              <p className="mt-4 text-body text-graphite">
                The fix is the same either way: file the missing return as soon
                as you can, even if you can&rsquo;t pay yet. Filing is what stops
                the biggest penalty from growing.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Sunday evening in late September, and Dana &mdash;
              I&rsquo;ll call her Dana &mdash; runs a small dog-grooming van and
              is finally clearing the kitchen counter. Under the takeout menus
              and a warranty card for a blender she no longer owns, there is an
              envelope from the IRS. She knows it&rsquo;s from the IRS because
              it has been there since June, and for most of that time it has
              been working as a coaster.
            </p>
            <p className="mt-4 text-body text-graphite">
              Dana didn&rsquo;t file last year. Not on purpose. April was the
              month the van needed a new transmission, then it was May, and
              every week the not-filing got a little heavier and a little easier
              to put a mug on.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t a tax dodger. She&rsquo;s a busy person who let one
              deadline slide and then got embarrassed about it, which is the
              single most common way people end up here.
            </p>
            <p className="mt-4 text-body text-graphite">
              This is what actually happens next, in plain English: what the
              penalties really cost, what the IRS can and can&rsquo;t do, how
              to catch up, and when you honestly don&rsquo;t need to pay anyone
              to help.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="what-actually-happens">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What actually happens: it depends on one question
            </h2>
            <p className="mt-4 text-body text-graphite">
              Everything turns on whether you owe money or are owed money. It is
              a choose-your-own-adventure book where one ending is a refund and
              the other is a series of increasingly firm letters. Most people
              assume they are on the second path. A surprising number are on the
              first.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">If you&rsquo;re owed a refund:</strong>{' '}
                there is no failure-to-file penalty, because that penalty is a
                percentage of tax you owe, and you owe nothing. The catch is the
                clock. The IRS says you must{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/filing-past-due-tax-returns">
                  file within three years of the return due date to claim a refund
                </SourceLink>
                . For last year&rsquo;s return, which was due April 15, 2026,
                that gives you until April 2029. After that, the money stays with
                the Treasury.
              </li>
              <li>
                <strong className="text-aubergine">If you owe tax:</strong>{' '}
                two penalties start running from the April deadline, plus
                interest on both the tax and the penalties. None of it is
                dramatic on day one. All of it compounds quietly while the
                envelope sits under a mug.
              </li>
              <li>
                <strong className="text-aubergine">If you don&rsquo;t know which one you are:</strong>{' '}
                that&rsquo;s normal. People who had tax withheld from a paycheck,
                or who qualify for credits, are often owed money. Self-employed
                people with no estimated payments usually owe. You find out by
                doing the return, which is annoying but also the only way.
              </li>
            </ul>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="the-penalties">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The penalties, in real dollars
            </h2>
            <p className="mt-4 text-body text-graphite">
              There are two penalties, and the IRS is far more annoyed about one
              of them. Think of a parent who is mostly fine that you missed
              curfew but genuinely upset that you didn&rsquo;t text. Not filing
              is the not-texting.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Failure to file: 5% of the unpaid tax per month, up to 25%.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://www.irs.gov/payments/failure-to-file-penalty">
                  failure-to-file penalty
                </SourceLink>{' '}
                counts each month or part of a month the return is late. If the
                return is more than 60 days late, there&rsquo;s a minimum: for
                returns due after December 31, 2025, which includes last
                year&rsquo;s, it is $525 or 100% of the tax owed, whichever is
                less.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Failure to pay: 0.5% of the unpaid tax per month, up to 25%.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://www.irs.gov/payments/failure-to-pay-penalty">
                  failure-to-pay penalty
                </SourceLink>{' '}
                is ten times smaller, and it drops to 0.25% a month if you filed
                on time and set up an approved payment plan. It rises to 1% a
                month if you ignore a notice of intent to levy.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Interest runs on top of both.
                </strong>{' '}
                The rate is reset every quarter, and it applies to the tax and
                to the penalties themselves, so the total creeps up even after
                the failure-to-file penalty has maxed out.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              Here is the arithmetic, with an illustrative number. Say you owed
              $4,000 and file five months late. When both penalties apply, the
              IRS reduces the filing penalty by the payment penalty, so together
              they come to 5% a month: $200 a month, or $1,000 after five months,
              before interest. If you had filed on time and simply not paid, the
              same five months would have cost $100.
            </p>
            <p className="mt-4 text-body text-graphite">
              That gap is the whole lesson of this post. Filing without paying
              is ten times cheaper than doing neither.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/vintage-card-catalog-drawers.webp`}
              alt="Five worn metal card-catalog drawers stacked on a shelf, photographed in black and white"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="does-the-irs-notice">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Does the IRS notice a missing return?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Usually, yes. Your employer sent the IRS a copy of your W-2.
              Every client who paid you $600 or more may have sent a 1099. Not
              filing when the IRS already holds copies of your income forms is a
              bit like hiding from someone who has a key to your house.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">It can take a while.</strong>{' '}
                The matching isn&rsquo;t instant, which is why some people go a
                year or two before hearing anything. The silence is not the IRS
                forgetting. It is the IRS getting to you.
              </li>
              <li>
                <strong className="text-aubergine">
                  It can file a return for you, and you won&rsquo;t like it.
                </strong>{' '}
                The IRS can prepare a substitute return from the income it can
                see. That return{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/filing-past-due-tax-returns">
                  might not give you credit for deductions
                </SourceLink>{' '}
                you&rsquo;re entitled to. For a self-employed person, that can
                mean being taxed on gross income with none of the business
                expenses that would have shrunk it.
              </li>
              <li>
                <strong className="text-aubergine">Then it can collect.</strong>{' '}
                After a notice of deficiency, which gives you 90 days to file
                your own return or go to Tax Court, the IRS can assess the tax
                and collect it through a federal tax lien or a levy on wages or
                a bank account.
              </li>
              <li>
                <strong className="text-aubergine">The year doesn&rsquo;t expire.</strong>{' '}
                The usual time limit on the IRS assessing more tax only starts
                once you file. The IRS tells people to{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records">
                  keep records indefinitely if they do not file a return
                </SourceLink>
                , which tells you everything about how long an unfiled year stays
                open.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              One more reason to file that nobody puts on a billboard: if the
              IRS files a lien, that becomes public record, and it is exactly how
              the{' '}
              <Link href="/blog/why-is-tax-relief-services-calling-me" className={linkClass}>
                tax relief cold calls start
              </Link>
              . Filing early keeps your phone quieter too.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="skip-a-year">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Can you skip a year and just file this one?
            </h2>
            <p className="mt-4 text-body text-graphite">
              You can file this year&rsquo;s return on time even with last
              year&rsquo;s missing, and you should. But filing the new year while
              ignoring the old one is like tidying the living room and keeping the
              spare-room door shut. Guests are impressed. The spare room is still
              the spare room.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">The missing year stays open.</strong>{' '}
                Penalties and interest on it keep running, and nothing about the
                new return closes it.
              </li>
              <li>
                <strong className="text-aubergine">Your new refund may not arrive.</strong>{' '}
                If you owe on the old year, the IRS can apply a refund from the
                new year against that balance.
              </li>
              <li>
                <strong className="text-aubergine">
                  Self-employed people lose more than money.
                </strong>{' '}
                Your Social Security record is built from the self-employment
                income you report. An unfiled year is a year that may not count
                toward your future benefits.
              </li>
              <li>
                <strong className="text-aubergine">Loans and leases ask for returns.</strong>{' '}
                Lenders routinely ask for the last two years of returns. &ldquo;I
                have one of them&rdquo; is not the answer a mortgage officer is
                hoping for.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              If the reason you didn&rsquo;t file is a missing form rather than
              a missing evening, that problem has a fix too. Here&rsquo;s{' '}
              <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                how to file your taxes without a W-2
              </Link>{' '}
              using the IRS&rsquo;s own substitute form.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="how-to-catch-up">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to file a late return, step by step
            </h2>
            <p className="mt-4 text-body text-graphite">
              Step one is the hardest, and it has nothing to do with tax. It is
              lifting the mug and opening the envelope. Everything after that is
              paperwork, and paperwork is survivable.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Read any notice you have, and note its deadline.
                </strong>{' '}
                If it is a notice of deficiency, the 90-day window matters more
                than anything else on this list.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Get your income records from the IRS.
                </strong>{' '}
                Use Get Transcript in your IRS online account to pull the wage
                and income transcript for the year. It lists the W-2s and 1099s
                the IRS already has, which is also exactly what it would use
                against you.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Rebuild your deductions.
                </strong>{' '}
                If you run a business, this is where your own bank statements and
                receipts do the heavy lifting. Every legitimate expense you
                document is money the substitute return would have ignored.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. File on that year&rsquo;s forms, even if you can&rsquo;t pay.
                </strong>{' '}
                Use the prior-year version of Form 1040 and schedules. The IRS
                says a complete past-due return takes about six weeks to process.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Set up payment for whatever you owe.
                </strong>{' '}
                The IRS offers short extensions to pay in full and longer
                installment agreements, which you can usually request online.
              </li>
              <li>
                <strong className="text-aubergine">
                  6. Ask about penalty relief.
                </strong>{' '}
                If your previous three years were filed on time and clean, you may
                qualify for{' '}
                <SourceLink href="https://www.irs.gov/payments/penalty-relief-due-to-first-time-abate-or-other-administrative-waiver">
                  first-time abatement
                </SourceLink>
                , which can remove failure-to-file and failure-to-pay penalties.
                You have to ask. The IRS doesn&rsquo;t volunteer it.
              </li>
            </ol>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/calculator-handwritten-sums.webp`}
              alt="A hand pressing keys on a large black calculator beside a folder of handwritten sums on a textured tablecloth"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="when-to-diy">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When you can fix this yourself
            </h2>
            <p className="mt-4 text-body text-graphite">
              We are an accounting firm telling you that you might not need an
              accounting firm. We&rsquo;re aware this is a strange business
              model. But one missed year with simple income is very often a
              weekend job, not a hire.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">You can probably DIY it if</strong>{' '}
                it is one year, your income was mostly W-2 wages, you have no IRS
                notice yet or only an early reminder, and tax software can
                handle the prior year. Free help from the IRS&rsquo;s VITA
                volunteer program is also worth a look if you qualify.
              </li>
              <li>
                <strong className="text-aubergine">Get help if</strong>{' '}
                you run a business and need to rebuild a year of books before a
                return is even possible, there are several unfiled years, the IRS
                has already sent a substitute return or a levy notice, or payroll
                taxes are involved.
              </li>
              <li>
                <strong className="text-aubergine">Get a lawyer, not us, if</strong>{' '}
                you are worried about criminal exposure, for example several
                deliberately skipped years with significant income. That is{' '}
                <Link href="/blog/when-to-hire-a-tax-attorney" className={linkClass}>
                  when a tax attorney is the right call
                </Link>
                , and we&rsquo;ll say so on the first call.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Where we come in is the business owner whose return can&rsquo;t be
              filed because the books were never done. Rebuilding a year of
              bookkeeping, then filing, is what our{' '}
              <Link href="/services" className={linkClass}>
                catch-up bookkeeping and tax preparation
              </Link>{' '}
              is for, and the{' '}
              <Link href="/pricing" className={linkClass}>
                prices are posted
              </Link>{' '}
              so you know the number before the call. Njock is an accountant,
              not a CPA or an attorney. If your situation needs IRS
              representation, we&rsquo;ll tell you upfront. For the difference
              between real help and a sales pitch, see our guide to{' '}
              <Link href="/blog/tax-resolution-services" className={linkClass}>
                what tax resolution services actually cover
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="what-waiting-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What another year of waiting costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Back to the $4,000 example. Filed five months late, the penalties
              are about $1,000. Leave it a full year and the filing penalty has
              long since maxed out at 22.5%, the payment penalty has reached 6%,
              and interest has been running on all of it. That is about $1,140 in
              penalties before interest. Filed on time with an approved payment
              plan, the same year would have cost $120 in penalties.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              If you are owed a refund, waiting costs nothing, right up until it
              costs everything. Miss the three-year window and the whole refund
              is gone, not reduced.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              And the cost nobody puts a number on: every week the envelope sits
              there, it gets a little harder to open. The tax doesn&rsquo;t grow
              as fast as the dread does. Filing is the only thing that shrinks
              both.
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
                'Payment plans, Offers in Compromise and penalty relief: what is real, what is a sales pitch, and what you can do free.',
            },
            {
              href: '/blog/can-you-do-taxes-without-w2',
              eyebrow: 'Blog',
              title: 'Can you do taxes without a W-2? Yes, here is exactly how',
              blurb:
                'The IRS has a form for exactly this. How Form 4852 works, and why waiting costs more than owing.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Tax preparation and catch-up bookkeeping',
              blurb:
                'Behind on books and returns? We rebuild the year, file it, and keep you current after.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Behind on a return? Let&rsquo;s open the envelope together.
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
