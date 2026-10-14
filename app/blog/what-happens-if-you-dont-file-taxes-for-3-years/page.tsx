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

const SLUG = 'what-happens-if-you-dont-file-taxes-for-3-years';
const TITLE = "What Happens If You Don't File Taxes for 3 Years, Explained";
const DESCRIPTION =
  "What happens if you don't file taxes for 3 years? If you owe, penalties and interest grow. If you are owed, refunds expire. How to catch up, with IRS sources.";
const PUBLISHED = '2026-10-14';
const MODIFIED = '2026-10-14';
const HERO = `/blog/${SLUG}/hero-hourglass-in-afternoon-light.webp`;

const TOC = [
  { id: 'owe-or-owed', label: 'It depends on one thing: do you owe, or are you owed?' },
  { id: 'three-years-of-penalties', label: 'What three years of penalties add up to' },
  { id: 'irs-files-for-you', label: 'The IRS may file a return for you, and it will not be generous' },
  { id: 'refund-clock', label: 'The three-year refund clock, and which refund expires next' },
  { id: 'clock-never-starts', label: 'Why the IRS clock never starts, and how far back to go' },
  { id: 'catching-up', label: 'How to catch up on three years, and when you can do it yourself' },
  { id: 'cost-of-year-four', label: 'What a fourth year costs' },
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
        alt: 'A glass hourglass of pale sand on a dark wooden table, crossed by bands of low afternoon sunlight',
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
    q: "What happens if you don't file taxes for 3 years?",
    a: 'If you owe tax, the IRS charges a failure-to-file penalty of 5% a month up to 25%, a failure-to-pay penalty of 0.5% a month up to 25%, and interest, for each of the three years. It may prepare a substitute return for you and then collect through wage levies, bank levies or a lien. If you are owed refunds instead, there is usually no penalty, but each refund is forfeited if it is not claimed within three years of that return\'s due date.',
  },
  {
    q: 'Can I still get a refund if I did not file for 3 years?',
    a: 'Only for the years still inside the window. A refund must generally be claimed within three years of the return\'s due date, and after that the money becomes the property of the U.S. Treasury. The IRS may also hold a refund for one year if returns for later years are still missing.',
  },
  {
    q: 'How many years can you go without filing taxes?',
    a: 'None, if your income is above the filing threshold, because a return is due every year. In practice, the IRS manual says its enforcement period for unfiled returns is generally not more than six years, so the IRS usually asks for the last six. That is an enforcement policy, not a time limit on what you owe.',
  },
  {
    q: 'Will the IRS file my taxes for me if I do not?',
    a: 'It can. The IRS says that if you fail to file, it may file a substitute return for you, which might not include deductions and credits you are entitled to. It then sends a Notice of Deficiency, CP3219N, and you have 90 days to file your own return or petition the Tax Court.',
  },
  {
    q: 'Can you go to jail for not filing taxes for 3 years?',
    a: 'It is possible but rare. Under 26 U.S.C. 7203, willfully failing to file a required return is a misdemeanor punishable by a fine of up to $25,000 and up to one year in prison, for each year. Criminal cases are reserved for willful conduct; most people who are behind face penalties, interest and collection rather than prosecution.',
  },
  {
    q: 'How far back can the IRS go for unfiled taxes?',
    a: 'There is no time limit for a year in which no return was filed, because the assessment clock does not start until a return is filed. That is why the IRS tells people who have not filed a return to keep their records indefinitely.',
  },
  {
    q: 'Should I file all three years at once?',
    a: 'File every return that is due, even if you cannot pay. Each year is filed on that year\'s own forms. The IRS says an accurately completed past-due return takes approximately six weeks to process.',
  },
  {
    q: 'What if I cannot pay what I owe for the three years?',
    a: 'File anyway, because the failure-to-file penalty is ten times larger per month than the failure-to-pay penalty. Then ask for more time or a payment plan. The IRS offers 60 to 120 extra days to pay in full, installment agreements, and in some cases an offer in compromise.',
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
            <div className="section-eyebrow mb-3">For anyone a few years behind</div>
            <h1 className="font-display text-h1 text-aubergine">{TITLE}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-graphite/75">
              <time dateTime={PUBLISHED}>October 14, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 14, 2026</time>
              </span>
              <span aria-hidden>·</span>
              <span>11 min read</span>
              <span aria-hidden>·</span>
              <span>Written by Njock</span>
            </div>
          </header>

          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={HERO}
              alt="A glass hourglass of pale sand on a dark wooden table, crossed by bands of low afternoon sunlight"
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
                <strong>Short answer:</strong> What happens if you don&rsquo;t
                file taxes for 3 years depends on whether you owe. If you owe,
                each year collects a failure-to-file penalty of up to 25%, a
                failure-to-pay penalty of up to 25%, and interest, and the IRS
                can file substitute returns and collect from your wages or bank
                account. If you are owed refunds, there is usually no penalty,
                but each refund expires three years after that return was due.
              </p>
              <p className="mt-4 text-body text-graphite">
                Either way, nothing about it fixes itself with time. For a year
                with no return, the IRS&rsquo;s clock to assess tax never
                starts.
              </p>
            </div>

            <p className="text-body text-graphite">
              There is a drawer in Marisol&rsquo;s kitchen &mdash; I&rsquo;ll
              call her Marisol &mdash; that holds takeout menus, a single AA
              battery of unknown charge, and three years of tax paperwork. She
              runs a mobile bike-repair van. Her bookkeeper retired the spring
              before last, and somewhere between finding a new one and actually
              finding a new one, three Aprils went by.
            </p>
            <p className="mt-4 text-body text-graphite">
              Two of the envelopes in the drawer are from the IRS. She has not
              opened them. She has, however, moved them to the bottom of the
              drawer, which felt like progress.
            </p>
            <p className="mt-4 text-body text-graphite">
              Marisol isn&rsquo;t a tax dodger. She&rsquo;s a busy person who
              let one hard year turn into a habit.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is what three unfiled years actually set in motion, what it
              costs in real dollars, and the order to fix it in, checked
              against the IRS&rsquo;s own pages.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="owe-or-owed">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              It depends on one thing: do you owe, or are you owed?
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most of the scary stories about unfiled taxes assume you owe
              money. Plenty of people who stop filing don&rsquo;t. Their
              employer withheld too much, or a credit would have covered the
              bill, and the IRS is holding money that belongs to them.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  If you owe, every year is its own bill.
                </strong>{' '}
                Three unfiled years means three sets of penalties and three
                running interest charges, each started on a different April.
              </li>
              <li>
                <strong className="text-aubergine">
                  If you are owed, the cost is the refund itself.
                </strong>{' '}
                There is generally no failure-to-file penalty when no tax is
                due. The risk is quieter: unclaimed refunds expire.
              </li>
              <li>
                <strong className="text-aubergine">
                  If you don&rsquo;t know, assume you owe until you check.
                </strong>{' '}
                Self-employed income, like Marisol&rsquo;s van, has no
                withholding at all, so a return showing a balance due is the
                likelier outcome.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Not filing when you&rsquo;re owed a refund is like leaving your
              coat at a restaurant. Nobody chases you about it. After long
              enough, they give it away.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="three-years-of-penalties">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What three years of penalties add up to
            </h2>
            <p className="mt-4 text-body text-graphite">
              Two penalties run side by side, and they behave very differently.
              The filing one is front-loaded, like a gym membership with a
              joining fee: most of the damage lands in the first five months.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Failure to file: 5% a month, capped at 25%.
                </strong>{' '}
                The IRS&rsquo;s{' '}
                <SourceLink href="https://www.irs.gov/payments/failure-to-file-penalty">
                  failure-to-file penalty
                </SourceLink>{' '}
                is 5% of the unpaid tax for each month or part of a month the
                return is late, up to 25%. For a return more than 60 days late,
                there is a minimum: $525 for returns due after December 31,
                2025, or 100% of the tax owed if that is less.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Failure to pay: 0.5% a month, capped at 25%.
                </strong>{' '}
                The{' '}
                <SourceLink href="https://www.irs.gov/payments/failure-to-pay-penalty">
                  failure-to-pay penalty
                </SourceLink>{' '}
                keeps running long after the filing penalty has stopped. If
                you ignore a notice of intent to levy for 10 days, the rate
                rises to 1% a month.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. They overlap, so the combined ceiling is 47.5%.
                </strong>{' '}
                In any month both apply, the filing penalty is reduced by the
                paying one. That makes the filing penalty max out at 22.5% after
                five months, with up to 25% more for late payment on top.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Interest is charged on the tax and on the penalties.
                </strong>{' '}
                It compounds daily and has no cap. It stops only when the
                balance is paid.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              Now multiply by three. With three unfiled years, the oldest year
              has usually hit its filing-penalty ceiling and is grinding through
              the slow 0.5% monthly charges. The newest is still in its
              expensive first months. All three are drawing interest.
            </p>
            <p className="mt-4 text-body text-graphite">
              We worked through the single-year version of this in{' '}
              <Link href="/blog/what-happens-if-i-didnt-file-last-years-taxes" className={linkClass}>
                what happens if you didn&rsquo;t file last year&rsquo;s taxes
              </Link>
              . The three-year version is the same arithmetic, three times,
              with staggered start dates.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/thick-ring-binder-of-papers.webp`}
              alt="A sepia close-up of an open ring binder packed with typed pages, its metal rings curving over the edge of the stack"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="irs-files-for-you">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The IRS may file a return for you, and it will not be generous
            </h2>
            <p className="mt-4 text-body text-graphite">
              The IRS doesn&rsquo;t need your return to know about your income.
              Employers, clients and banks send it copies of your W-2s and
              1099s. When those copies show income and no return arrives, it
              can do the paperwork itself.
            </p>
            <p className="mt-4 text-body text-graphite">
              Its page on{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/filing-past-due-tax-returns">
                filing past-due tax returns
              </SourceLink>{' '}
              sets out what happens next:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  It prepares a substitute for return.
                </strong>{' '}
                The IRS warns that this return might not give you credit for
                deductions and exemptions you are entitled to. For a
                self-employed person, that can mean income counted with none of
                the costs of earning it.
              </li>
              <li>
                <strong className="text-aubergine">
                  It sends a Notice of Deficiency, CP3219N.
                </strong>{' '}
                You then have 90 days to file your own return or petition the
                Tax Court, and you cannot get an extension of that deadline.
              </li>
              <li>
                <strong className="text-aubergine">
                  Then it collects.
                </strong>{' '}
                Unpaid tax from a substitute return can lead to a levy on your
                wages or bank account, or a federal tax lien.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              A substitute return is the IRS doing your taxes the way a
              stranger packs your suitcase. Everything taxable goes in.
              Nothing you&rsquo;d actually need does.
            </p>
            <p className="mt-4 text-body text-graphite">
              The good news is that it isn&rsquo;t final. The IRS still
              recommends you file your own return, and it will generally adjust
              your account to reflect the correct figures. That is often the
              single biggest saving available to someone three years behind.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="refund-clock">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The three-year refund clock, and which refund expires next
            </h2>
            <p className="mt-4 text-body text-graphite">
              The IRS says you must file to claim a refund within three years
              of the return&rsquo;s due date. Miss it and, in the IRS&rsquo;s
              own words, the money becomes the property of the U.S. Treasury.
              A refund is a gift card with an expiry date, except the shop
              does not email you a reminder.
            </p>
            <p className="mt-4 text-body text-graphite">
              The numbers are not small. In March 2026 the IRS said that{' '}
              <SourceLink href="https://www.irs.gov/newsroom/time-is-running-out-to-claim-1-point-2-billion-in-refunds-for-tax-year-2022-taxpayers-face-april-15-deadline">
                over 1.3 million people had unclaimed refunds for tax year 2022
              </SourceLink>
              , about $1.2 billion in total, with a median of $686. Their
              deadline was April 15, 2026. It has passed.
            </p>
            <p className="mt-4 text-body text-graphite">
              If your three unfiled years are 2023, 2024 and 2025, here is how
              the clock reads as of October 2026:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">2023: urgent.</strong> The
                return was due April 15, 2024, so the window to claim a refund
                closes in April 2027. This is the next one to go.
              </li>
              <li>
                <strong className="text-aubergine">2024: open until 2028.</strong>{' '}
                Due April 15, 2025. Plenty of time, but the money is doing
                nothing for you in the meantime.
              </li>
              <li>
                <strong className="text-aubergine">2025: open until 2029.</strong>{' '}
                Due April 15, 2026, so this one is only months late.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              There are two catches. The IRS holds refunds while its records
              show past-due returns, so a refund for one year can wait on the
              others. And any refund can be applied to tax you owe for another
              year first, so a refund year and an owing year partly cancel out
              only if you file both.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="clock-never-starts">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Why the IRS clock never starts, and how far back to go
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here is the rule that surprises people most. The IRS normally
              has three years from the date you file to assess more tax. If you
              never file, that clock never starts. Its{' '}
              <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records">
                record-keeping guidance
              </SourceLink>{' '}
              puts it in one line: keep records indefinitely if you do not file
              a return. It is the tax version of a bar tab that never closes.
            </p>
            <p className="mt-4 text-body text-graphite">
              In practice, the IRS doesn&rsquo;t ask for everything back to
              your first summer job. Its internal manual on{' '}
              <SourceLink href="https://www.irs.gov/irm/part4/irm_04-012-001">
                nonfiled returns
              </SourceLink>{' '}
              says the enforcement period is not to be more than six years,
              though it can run longer or shorter depending on the case. Three
              missing years sit comfortably inside that.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Six years is a policy, not a pardon.
                </strong>{' '}
                Older years are not forgiven. They are simply not usually
                pursued, and the IRS can extend the period based on your
                history.
              </li>
              <li>
                <strong className="text-aubergine">
                  Jail is possible, and rare.
                </strong>{' '}
                Under{' '}
                <SourceLink href="https://www.law.cornell.edu/uscode/text/26/7203">
                  26 U.S.C. 7203
                </SourceLink>
                , willfully failing to file is a misdemeanor carrying a fine of
                up to $25,000 and up to a year in prison for each year. The
                word doing the work is &ldquo;willfully.&rdquo; Prosecution is
                aimed at deliberate concealment, not at a drawer of unopened
                envelopes.
              </li>
              <li>
                <strong className="text-aubergine">
                  The realistic outcome is boring and expensive.
                </strong>{' '}
                Penalties, interest, a substitute return, and eventually a levy.
                No dramatic knock at the door, just a bank balance that is
                suddenly lower than you left it.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              One side effect of being behind: you become very interesting to
              companies that cold-call people with tax debt. If that has
              started, our guide to{' '}
              <Link href="/blog/why-is-tax-relief-services-calling-me" className={linkClass}>
                why tax relief services are calling you
              </Link>{' '}
              explains where they got your number and what they are selling.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/stacked-metal-file-drawers.webp`}
              alt="Five worn metal card-file drawers stacked in two rows, each with a pull handle and a small label, in black and white"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="catching-up">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to catch up on three years, and when you can do it yourself
            </h2>
            <p className="mt-4 text-body text-graphite">
              Three years of paperwork is a jigsaw where you&rsquo;ve lost the
              picture on the box lid. The good news is that the IRS kept a
              copy of most of the pieces.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Pull your transcripts first.
                </strong>{' '}
                A wage and income transcript lists every W-2 and 1099 the IRS
                has on file for each year. Get it through the IRS&rsquo;s Get
                Transcript service or by filing Form 4506-T. Missing a form
                entirely? Our guide to{' '}
                <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                  doing your taxes without a W-2
                </Link>{' '}
                covers that.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Open the envelopes.
                </strong>{' '}
                A notice tells you which years the IRS is already working on
                and what deadlines are running. A CP3219N starts a 90-day
                clock, so that letter goes to the top of the pile.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. File every year, each on its own forms.
                </strong>{' '}
                A 2023 return uses 2023 forms. The IRS says an accurately
                completed past-due return takes approximately six weeks to
                process.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. File even if you can&rsquo;t pay.
                </strong>{' '}
                Filing stops the 5% monthly penalty. Then ask for 60 to 120
                extra days or an installment agreement.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Ask about penalty relief.
                </strong>{' '}
                First-time abatement looks at whether the three years before the
                penalty year were filed on time, so with three missed years in
                a row, at most the earliest can qualify. Our piece on whether{' '}
                <Link href="/blog/is-tax-forgiveness-real" className={linkClass}>
                  tax forgiveness is real
                </Link>{' '}
                covers the other routes.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              Now the part an accounting firm is not supposed to say. If all
              three years are a single W-2 and you suspect refunds, you very
              likely don&rsquo;t need us. You need the transcripts, an
              afternoon, and a pot of coffee. The IRS&rsquo;s free VITA program
              may even prepare them for you if you qualify.
            </p>
            <p className="mt-4 text-body text-graphite">
              Help earns its fee when the years involve self-employment
              income, missing expense records, or a substitute return you need
              to replace. That is the work in our{' '}
              <Link href="/services" className={linkClass}>
                bookkeeping and tax services
              </Link>
              , at{' '}
              <Link href="/pricing" className={linkClass}>
                flat, published prices
              </Link>
              . Njock is an accountant, not a CPA. If your case has turned
              into a collection fight, our guide to{' '}
              <Link href="/blog/tax-resolution-services" className={linkClass}>
                tax resolution services
              </Link>{' '}
              explains when to bring in someone who can represent you.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-year-four">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What a fourth year costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Take an illustrative case: $4,000 of unpaid tax for each of 2023,
              2024 and 2025, $12,000 in all. As of October 2026, each year has
              reached the 22.5% filing-penalty ceiling, which is $900 a year.
              The late-payment penalty adds roughly $600 on the oldest year,
              $360 on the middle one and $120 on the newest. That is about
              $3,780 in penalties before a dollar of interest.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Waiting doesn&rsquo;t freeze that number. The late-payment
              penalty keeps climbing toward 25% on every year, so the ceiling
              on the three years together is $5,700, plus interest, which has
              no ceiling at all. A fourth unfiled April starts the whole cycle
              again, with the expensive first five months included. Filing all
              three returns this month stops the{' '}
              <a
                href="https://www.irs.gov/payments/failure-to-file-penalty"
                target="_blank"
                rel="noopener noreferrer"
                className={darkLinkClass}
              >
                failure-to-file penalty
              </a>{' '}
              on any year still accruing it, and puts the refund years back in
              play before the 2023 window shuts.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Marisol opened the drawer on a Sunday. The two IRS envelopes were
              not as bad as the drawer had made them sound. One year turned out
              to be a refund she had been one spring away from losing. The
              battery, sadly, was dead.
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
              href: '/blog/what-happens-if-i-didnt-file-last-years-taxes',
              eyebrow: 'Blog',
              title: "What Happens If I Didn't File Last Year's Taxes?",
              blurb:
                'The one-year version: penalties in real dollars and how to file a late return.',
            },
            {
              href: '/blog/is-tax-forgiveness-real',
              eyebrow: 'Blog',
              title: 'Is Tax Forgiveness Real?',
              blurb:
                'Offers in compromise, penalty relief and the ten-year collection clock.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Bookkeeping, tax and compliance for small businesses',
              blurb:
                'Monthly books, returns and filings handled remotely, with a 4-business-hour email reply.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Ready to empty the drawer?
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
