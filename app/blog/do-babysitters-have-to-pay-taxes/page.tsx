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

const SLUG = 'do-babysitters-have-to-pay-taxes';
const TITLE = 'Do Babysitters Have to Pay Taxes? The $400 and $3,000 Rules';
const DESCRIPTION =
  'Do babysitters have to pay taxes? Yes, the income is taxable. What you owe depends on whether you are self-employed or a household employee. IRS sources.';
const PUBLISHED = '2026-10-09';
const MODIFIED = '2026-10-09';
const HERO = `/blog/${SLUG}/hero-toy-train-on-wooden-floor.webp`;

const TOC = [
  { id: 'income-even-in-cash', label: 'Babysitting money is income, even in cash' },
  { id: 'employee-or-self-employed', label: 'Employee or self-employed: the question that decides everything' },
  { id: 'self-employed-400-rule', label: 'If you are self-employed: the $400 rule' },
  { id: 'household-employee-3000-rule', label: 'If you are a household employee: the $3,000 rule' },
  { id: 'teens-students-grandparents', label: 'Teen sitters, students and grandparents' },
  { id: 'records-and-diy', label: 'What to keep, and when you can file this yourself' },
  { id: 'cost-of-off-the-books', label: 'What staying off the books costs the sitter' },
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
        alt: 'A baby hand resting on a light wooden floor beside a curved wooden toy train track with a red and a black toy train car',
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
    q: 'Do babysitters have to pay taxes?',
    a: 'Yes, babysitting income is taxable income, whether it is paid in cash, by check or through an app. A self-employed babysitter must file a return and pay self-employment tax once net earnings reach $400 for the year. A babysitter who is a household employee has Social Security and Medicare taxes withheld only when one family pays $3,000 or more in 2026.',
  },
  {
    q: 'How much can a babysitter make before paying taxes?',
    a: 'It depends on how the babysitter is classified. A self-employed babysitter owes self-employment tax once net earnings from self-employment are $400 or more. For a household employee, Social Security and Medicare taxes apply when one family pays cash wages of $3,000 or more in 2026. Federal income tax is separate and depends on total income for the year.',
  },
  {
    q: 'Do I have to report babysitting money if I was paid in cash?',
    a: 'Yes. Income is taxable whether it is paid in cash, by check or through a payment app, and whether or not anyone sends a tax form. The payment method changes the paper trail, not the tax rule.',
  },
  {
    q: 'Do parents have to give a babysitter a 1099?',
    a: 'Generally no. The IRS instructions for Form 1099-NEC say to report only payments made in the course of a trade or business, and that personal payments are not reportable. A family that employs a household employee and pays wages at or above the annual threshold gives that employee a Form W-2 instead.',
  },
  {
    q: 'Does a 16-year-old babysitter have to pay taxes?',
    a: 'Usually not Social Security or Medicare tax. Wages a family pays to a household employee who is under 18 at any time during the year are not counted for those taxes unless household work is the employee’s principal occupation, and the IRS does not treat it as the principal occupation of a student. The earnings are still income, and a teen with $400 or more of net self-employment earnings must file a return.',
  },
  {
    q: 'Is a babysitter an employee or self-employed?',
    a: 'It depends on who controls the work. IRS Publication 926 says a worker is your employee if you can control not only what work is done but how it is done, and it lists babysitters among its examples of household workers. A sitter who provides childcare in their own home is generally not the family’s employee, and neither is one whose work is controlled by an agency.',
  },
  {
    q: 'Do I owe taxes if I pay my mom to babysit?',
    a: 'Generally not Social Security and Medicare taxes. Wages you pay your parent for household work are usually not counted for those taxes, with a narrow exception for certain caregiving situations described in IRS Publication 926. The money is still income to your parent for income tax purposes.',
  },
  {
    q: 'Why is the family asking for my Social Security number?',
    a: 'Usually for one of two reasons. A family claiming the child and dependent care credit must list the care provider’s name, address and taxpayer identification number on Form 2441, and can use Form W-10 to ask for it. A family that owes household employment taxes also needs it to prepare your Form W-2.',
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
            <div className="section-eyebrow mb-3">For sitters, nannies and side-giggers</div>
            <h1 className="font-display text-h1 text-aubergine">{TITLE}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-graphite/75">
              <time dateTime={PUBLISHED}>October 9, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 9, 2026</time>
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
              alt="A baby hand resting on a light wooden floor beside a curved wooden toy train track with a red and a black toy train car"
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
                <strong>Short answer:</strong> Do babysitters have to pay taxes?
                Yes, babysitting income is taxable, including cash. A
                self-employed babysitter must file and pay self-employment tax
                once net earnings reach $400 in a year. A babysitter who is a
                family&rsquo;s household employee has Social Security and
                Medicare taxes withheld only when that family pays $3,000 or
                more in 2026.
              </p>
              <p className="mt-4 text-body text-graphite">
                Owing a return and owing money are different things. Plenty of
                sitters, teenagers especially, end up owing little or nothing.
                What decides it is which of those two boxes you are in, and
                most sitters have never been told there are two.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Sunday night in January and Dani &mdash; I&rsquo;ll
              call her Dani &mdash; is nineteen, on her bed in a shared
              apartment, scrolling back through a year of Venmo payments. Three
              families. Payment notes like &ldquo;thank you for surviving
              bedtime&rdquo; and &ldquo;sorry about the slime.&rdquo; It adds
              up to $4,950, which is more than she expected and less than it
              felt like.
            </p>
            <p className="mt-4 text-body text-graphite">
              She is only doing the sum because one of the mums texted an hour
              ago: &ldquo;Hi love, can you send me your Social Security number?
              Our accountant needs it.&rdquo; Nothing in her life so far has
              prepared her for that sentence.
            </p>
            <p className="mt-4 text-body text-graphite">
              Dani hasn&rsquo;t done anything wrong. She has a real job that
              nobody ever described to her as a real job.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is how the tax side of it works, checked against the
              IRS&rsquo;s own publications, including why that text message is
              good news for her.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="income-even-in-cash">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Babysitting money is income, even in cash
            </h2>
            <p className="mt-4 text-body text-graphite">
              Start with the part nobody enjoys. Money you are paid for looking
              after someone&rsquo;s children is income. It doesn&rsquo;t matter
              whether it arrived as a transfer, a check, or two folded twenties
              pressed into your hand at the front door by a parent who is
              already apologising for being late.
            </p>
            <p className="mt-4 text-body text-graphite">
              The tax code has no category called &ldquo;money that felt
              informal.&rdquo; We checked. What it has instead is three
              separate questions, and most of the confusion comes from treating
              them as one:
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Is it income? Yes, always.
                </strong>{' '}
                Cash, app or check. With or without a tax form.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Do you have to file a return?
                </strong>{' '}
                That depends on how much you made, what kind of worker you are,
                and whether someone else can claim you as a dependent.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Will you actually owe anything?
                </strong>{' '}
                Often less than you fear. Sometimes nothing. Occasionally you
                are owed a refund.
              </li>
            </ol>
            <p className="mt-8 text-body text-graphite">
              One more thing to clear up early. A family is not going to send
              you a 1099, and that is not them hiding anything. The IRS&rsquo;s{' '}
              <SourceLink href="https://www.irs.gov/instructions/i1099mec">
                instructions for Form 1099-NEC
              </SourceLink>{' '}
              say to report only payments made in the course of a trade or
              business, and that personal payments are not reportable. A
              family&rsquo;s date night is many things, but it is not a trade
              or business.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="employee-or-self-employed">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Employee or self-employed: the question that decides everything
            </h2>
            <p className="mt-4 text-body text-graphite">
              A babysitter is taxed in one of two completely different ways, and
              which one applies is not up to the sitter or the family. It comes
              from a test in{' '}
              <SourceLink href="https://www.irs.gov/publications/p926">
                IRS Publication 926
              </SourceLink>
              , the Household Employer&rsquo;s Tax Guide: a worker is your
              employee if you can control not only what work is done, but how it
              is done.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  You are probably a household employee if
                </strong>{' '}
                you work in the family&rsquo;s home, on their schedule, by their
                rules. Publication 926 lists babysitters by name among its
                examples of household workers.
              </li>
              <li>
                <strong className="text-aubergine">
                  You are probably self-employed if
                </strong>{' '}
                you look after children in your own home, set your own rates and
                rules, and offer the service to the public. The publication says
                a worker who provides childcare in their own home generally
                isn&rsquo;t the family&rsquo;s employee.
              </li>
              <li>
                <strong className="text-aubergine">
                  An agency changes the answer.
                </strong>{' '}
                If an agency places you and controls what work is done and how,
                you aren&rsquo;t the family&rsquo;s employee.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              A rough field test: if there is a laminated schedule on the
              fridge that specifies screen time to the minute and which of the
              two identical blue cups is the acceptable one, somebody is
              controlling how the work is done. It isn&rsquo;t you.
            </p>
            <p className="mt-4 text-body text-graphite">
              That makes Dani, who works in three families&rsquo; living rooms
              under three sets of house rules, a household employee three times
              over. It matters because the two boxes come with different
              thresholds, different forms and a different bill.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/cash-under-laptop-on-coffee-table.webp`}
              alt="Several folded dollar bills tucked under a closed laptop on a round dark wooden table, with pencils, a brass clip and a coffee cup beside it"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="self-employed-400-rule">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              If you are self-employed: the $400 rule
            </h2>
            <p className="mt-4 text-body text-graphite">
              For a self-employed sitter the threshold is low. The IRS says you
              usually must pay{' '}
              <SourceLink href="https://www.irs.gov/taxtopics/tc554">
                self-employment tax
              </SourceLink>{' '}
              if you had net earnings from self-employment of $400 or more, and
              that same $400 is enough to require a tax return on its own. Four
              hundred dollars is roughly two New Year&rsquo;s Eves.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  What the tax is.
                </strong>{' '}
                Social Security at 12.4% plus Medicare at 2.9%. You pay both
                halves, because when you are self-employed you are the employee
                and the boss.
              </li>
              <li>
                <strong className="text-aubergine">
                  What it is charged on.
                </strong>{' '}
                Only 92.35% of your net earnings, and &ldquo;net&rdquo; means
                after genuine business expenses.
              </li>
              <li>
                <strong className="text-aubergine">
                  What softens it.
                </strong>{' '}
                You can deduct one-half of your self-employment tax when
                working out your adjusted gross income.
              </li>
              <li>
                <strong className="text-aubergine">
                  Where it goes.
                </strong>{' '}
                Income and expenses on Schedule C, the tax itself on Schedule
                SE, both attached to your Form 1040.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Here is the arithmetic for a sitter who runs a small after-school
              group from her own home and clears $6,000 after expenses. $6,000
              &times; 92.35% = $5,541. $5,541 &times; 15.3% = about $848.
              Income tax is worked out separately, on top, and depends on
              everything else on the return.
            </p>
            <p className="mt-4 text-body text-graphite">
              If you were paid through an app rather than by families directly,
              the platform may send you a 1099. For payments made in 2026 the
              reporting threshold for Form 1099-NEC is $2,000. No form
              doesn&rsquo;t mean no income; our guide to{' '}
              <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                doing your taxes without a W-2
              </Link>{' '}
              covers how to report earnings nobody sent paperwork for.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="household-employee-3000-rule">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              If you are a household employee: the $3,000 rule
            </h2>
            <p className="mt-4 text-body text-graphite">
              Here the threshold is higher and most of the paperwork lands on
              the family. Under Publication 926, a family that pays cash wages
              of $3,000 or more in 2026 to any one household employee owes
              Social Security and Medicare taxes on those wages. The IRS notes
              that the figure can change from year to year, so check it each
              January.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Your share is 7.65%.
                </strong>{' '}
                That is 6.2% Social Security and 1.45% Medicare, withheld from
                your pay. The family pays a matching 7.65% from its own pocket.
              </li>
              <li>
                <strong className="text-aubergine">
                  The test is per family.
                </strong>{' '}
                It applies to what one household pays one employee. Two families
                paying you $2,000 each are both under it.
              </li>
              <li>
                <strong className="text-aubergine">
                  You get a W-2, not a 1099.
                </strong>{' '}
                A family over the threshold gives you a Form W-2 and reports the
                taxes on Schedule H with its own return.
              </li>
              <li>
                <strong className="text-aubergine">
                  Income tax is not withheld automatically.
                </strong>{' '}
                A family isn&rsquo;t required to withhold federal income tax.
                It can if you ask and they agree, using a Form W-4.
              </li>
              <li>
                <strong className="text-aubergine">
                  Unemployment tax is the family&rsquo;s alone.
                </strong>{' '}
                A household that pays total cash wages of $1,000 or more in any
                calendar quarter owes federal unemployment tax. None of it comes
                out of your pay.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              Under the threshold, nobody owes Social Security or Medicare on
              those wages. They are still income, and Form 1040 has a line for
              household employee wages that weren&rsquo;t reported on a W-2.
            </p>
            <p className="mt-4 text-body text-graphite">
              Dani&rsquo;s year, then. One family paid her $3,400 for regular
              Tuesdays and Thursdays; the other two paid $900 and $650. Only the
              first family is over the line. Her share is $3,400 &times; 7.65% =
              $260.10, the family matches it, and they have just become the
              world&rsquo;s smallest payroll department, operating out of a
              kitchen drawer. That is why the text asked for her Social Security
              number.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="teens-students-grandparents">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Teen sitters, students and grandparents
            </h2>
            <p className="mt-4 text-body text-graphite">
              The household employee rules carve out the people who do most of
              the country&rsquo;s babysitting. Publication 926 says wages paid
              to these workers generally aren&rsquo;t counted for Social
              Security and Medicare, whatever the amount:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A sitter under 18.
                </strong>{' '}
                Wages paid to an employee who is under 18 at any time in the
                year aren&rsquo;t counted, unless household work is their
                principal occupation. If the employee is a student, it
                isn&rsquo;t considered to be. It is one of the few places the
                tax code assumes a sixteen-year-old has algebra homework, and
                for once it is right.
              </li>
              <li>
                <strong className="text-aubergine">
                  The family&rsquo;s own child under 21.
                </strong>{' '}
                Paying your seventeen-year-old to watch a younger sibling does
                not make you a household employer for these taxes.
              </li>
              <li>
                <strong className="text-aubergine">
                  A parent.
                </strong>{' '}
                Wages you pay your own mother or father are generally not
                counted, with a narrow exception for certain caregiving
                situations spelled out in the publication. Grandma remains the
                best deal in childcare, and the IRS mostly agrees.
              </li>
              <li>
                <strong className="text-aubergine">
                  A spouse.
                </strong>{' '}
                Also not counted.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              &ldquo;Not counted for Social Security&rdquo; is not the same as
              &ldquo;not income.&rdquo; A dependent teenager must file a return
              once earned income passes the limit in{' '}
              <SourceLink href="https://www.irs.gov/publications/p501">
                IRS Publication 501
              </SourceLink>
              , which was $15,750 for 2025 returns and moves most years. Very
              few weekend sitters get near it. A teenager who is genuinely
              self-employed is different: the $400 rule applies at any age.
            </p>
            <p className="mt-4 text-body text-graphite">
              For a grandparent, the babysitting money is added to whatever else
              they have coming in. Whether that tips them into filing is its own
              question, which we cover in{' '}
              <Link href="/blog/do-seniors-have-to-file-taxes" className={linkClass}>
                do seniors have to file taxes
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/wooden-blocks-scattered-on-floor.webp`}
              alt="Plain wooden building blocks in assorted shapes scattered across a dark wooden floor, seen from above"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="records-and-diy">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What to keep, and when you can file this yourself
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most babysitters do not need an accountant. We are an accounting
              firm and we are telling you that in writing, which goes some way
              to explaining our sales figures.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Keep a running log.
                </strong>{' '}
                Date, family, hours, amount, how you were paid. A note on your
                phone is fine. Your payment app history covers the transfers;
                the cash is the part you will forget by March.
              </li>
              <li>
                <strong className="text-aubergine">
                  Total it per family.
                </strong>{' '}
                The $3,000 test is per household, so one lump figure for the
                year doesn&rsquo;t tell you or them whether anyone crossed it.
              </li>
              <li>
                <strong className="text-aubergine">
                  Hand over your details when asked.
                </strong>{' '}
                A family claiming the{' '}
                <SourceLink href="https://www.irs.gov/taxtopics/tc602">
                  child and dependent care credit
                </SourceLink>{' '}
                has to list each care provider&rsquo;s name, address and
                taxpayer identification number on Form 2441. Form W-10 exists
                for exactly this request.
              </li>
              <li>
                <strong className="text-aubergine">
                  If you are self-employed, keep expense receipts.
                </strong>{' '}
                Craft supplies, snacks you provide, a first-aid course. They
                reduce the net figure the $400 rule and the 15.3% are applied
                to.
              </li>
            </ul>
            <p className="mt-8 text-body text-graphite">
              If babysitting is your only income, or it sits beside one ordinary
              job, free filing software will walk you through it. Our breakdown
              of{' '}
              <Link href="/blog/how-much-does-it-cost-to-do-your-taxes" className={linkClass}>
                how much it costs to do your taxes
              </Link>{' '}
              lists the free options and who qualifies for them.
            </p>
            <p className="mt-4 text-body text-graphite">
              It is worth getting help in three situations: you run childcare
              from your own home as a proper business, you are a full-time nanny
              being paid off the books and want to fix it, or you are the family
              and have just discovered you are an employer. Our{' '}
              <Link href="/services" className={linkClass}>
                services page
              </Link>{' '}
              shows what we take on, and{' '}
              <Link href="/pricing" className={linkClass}>
                our pricing
              </Link>{' '}
              is flat and published. Njock is an accountant, not a CPA; if your
              situation needs one, we will say so.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cost-of-off-the-books">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What staying off the books costs the sitter
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Getting the box wrong has a price. Suppose Dani assumed, as a lot
              of advice online would tell her, that every babysitter is
              self-employed. On $4,950 the sum would be $4,950 &times; 92.35%
              &times; 15.3% = about $699. As a household employee her share is
              $260.10. That is roughly $439 she would have paid for no reason
              except that nobody explained the difference.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Reporting nothing at all costs more, and not only in tax. Earnings
              that are never reported never reach your Social Security record.
              They also don&rsquo;t exist when a landlord or a lender asks for
              proof of income. A year of real work, and on paper you spent it
              doing nothing.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              So the text message was good news. A family asking for your Social
              Security number is a family putting your work on the record, and
              paying a matching 7.65% for the privilege. Dani sent it. She also
              started a spreadsheet, with a column for the payment notes,
              because &ldquo;sorry about the slime&rdquo; deserved to be filed
              somewhere.
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
              title: 'Can You Do Taxes Without a W-2?',
              blurb:
                'How to report income when the form never arrived, or was never going to.',
            },
            {
              href: '/blog/how-much-does-it-cost-to-do-your-taxes',
              eyebrow: 'Blog',
              title: 'How Much Does It Cost to Do Your Taxes?',
              blurb:
                'IRS averages, the free filing options and how preparers actually bill.',
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
              Not sure which box you are in?
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
