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

const SLUG = 'fund-accounting';
const TITLE = 'What Is Fund Accounting? A Plain-English Guide for Nonprofits';
const DESCRIPTION =
  'Fund accounting tracks donations and grants by purpose instead of one bank total. What it means, when a spreadsheet still works, and when it doesn’t.';
const PUBLISHED = '2026-07-25';
const MODIFIED = '2026-07-25';
const HERO = `/blog/${SLUG}/hero-ledger-and-fund-folders.webp`;

const TOC = [
  { id: 'what-fund-accounting-means', label: 'What fund accounting actually means' },
  { id: 'restricted-vs-unrestricted', label: 'Restricted funds, unrestricted funds, and why donors care' },
  { id: 'not-your-regular-bookkeeping', label: 'How it’s different from the bookkeeping you already know' },
  { id: 'setting-up-without-hiring', label: 'Setting it up without hiring anyone yet' },
  { id: 'recording-donations-correctly', label: 'Recording donations so the numbers hold up' },
  { id: 'when-to-get-help', label: 'When a bookkeeper or accountant actually earns their fee' },
  { id: 'cost-of-not-separating-funds', label: 'What it costs to keep it all in one bucket' },
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
        alt: 'A worn ledger book, folders labeled Donations, Expenses and Volunteers, two open envelopes, and an old adding machine with curling paper tape on a sunlit wooden desk',
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
    q: 'What is fund accounting in simple terms?',
    a: 'It’s bookkeeping that groups money into separate “buckets” — funds — by purpose or restriction, instead of tracking everything as one bank balance. A $5,000 grant for new books, a $600 bake-sale deposit, and $1,200 in general donations each get tracked on their own, even if they all sit in the same checking account.',
  },
  {
    q: 'Is fund accounting only for nonprofits?',
    a: 'Mostly, yes. Nonprofits, churches, and government entities use it because donors and grantors attach conditions to their money and the organization has to prove the conditions were honored. A typical small business doesn’t need it — there’s no donor to answer to, just a profit-and-loss statement.',
  },
  {
    q: 'What’s the difference between restricted and unrestricted funds?',
    a: 'Unrestricted funds can be spent on anything that fits the mission. Restricted funds come with a donor-specified purpose, a time limit, or both — spend a restricted gift on the wrong line item and, technically, you owe that money back to its original purpose. Permanently restricted funds (an endowment) keep the principal invested forever; only what it earns can be spent.',
  },
  {
    q: 'Do small churches really need fund accounting?',
    a: 'Once there’s more than the general offering — a building fund, a missions trip, a memorial gift — yes, in practice if not always by law. Small churches can track a handful of funds in a spreadsheet: general operating, building, missions. Keep the list short and reconcile it monthly against the bank statement.',
  },
  {
    q: 'Can I do fund accounting in QuickBooks?',
    a: 'Yes, for a small organization. QuickBooks Online Plus and Advanced both support “classes” or “locations,” which you can use to tag transactions by fund and run a report per fund. Once you’re juggling a dozen grants with different reporting deadlines, dedicated nonprofit accounting software usually pays for itself.',
  },
  {
    q: 'What happens if a nonprofit doesn’t separate its funds?',
    a: 'The immediate risk is spending restricted money on something a donor or grantor didn’t approve, which can mean returning the funds or reclassifying other income to cover the gap. Do it repeatedly and it shows up as an audit finding — and in serious, sustained cases, it can put a 501(c)(3)’s tax-exempt status at risk.',
  },
  {
    q: 'Does my nonprofit need an independent audit?',
    a: 'It depends on size and funding source, not on being a nonprofit. Under federal rules, an organization that expends $1,000,000 or more in federal awards in a fiscal year needs a Single Audit. Separately, gross receipts and asset levels determine which version of Form 990 you file with the IRS. Many states also set their own, often lower, audit thresholds for charitable organizations — worth checking against your state’s specific rule.',
  },
  {
    q: 'Does NJ’s handle fund accounting for nonprofits and churches?',
    a: 'Yes — monthly bookkeeping and tax preparation for small nonprofits and churches is work we do regularly. One honest limit: Njock is an accountant, not a CPA, and a required independent Single Audit has to be signed off by a CPA. If your organization is at that stage, we’ll say so upfront and bring in a CPA partner or refer you out.',
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
            <div className="section-eyebrow mb-3">For nonprofits &amp; small organizations</div>
            <h1 className="font-display text-h1 text-aubergine">{TITLE}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-graphite/75">
              <time dateTime={PUBLISHED}>July 25, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>July 25, 2026</time>
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
              alt="A worn ledger book, folders labeled Donations, Expenses and Volunteers, two open envelopes, and an old adding machine with curling paper tape on a sunlit wooden desk"
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
                <strong>Short answer:</strong> fund accounting is bookkeeping
                that keeps money in separate &ldquo;buckets&rdquo; by purpose
                instead of one big total, so a grant, a memorial gift, or a
                building-campaign donation never gets spent on something the
                donor didn&rsquo;t approve. It&rsquo;s standard for
                nonprofits, churches, and government entities because
                accountability is the whole job, not just the bottom line.
              </p>
              <p className="mt-4 text-body text-graphite">
                You don&rsquo;t need special software to start. You need to
                stop treating your bank balance as your budget.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s Sunday night and Dana &mdash; I&rsquo;ll call her
              Dana &mdash; is the volunteer treasurer for a nine-person
              after-school reading program, staring at a spreadsheet titled
              &ldquo;Money 2026.&rdquo; One column holds a $600 bake-sale
              deposit, a $5,000 foundation grant earmarked for new books only,
              and $1,200 in general donations from the newsletter. All three
              sit in the same checking account and, until tonight, the same
              spreadsheet column too.
            </p>
            <p className="mt-4 text-body text-graphite">
              She isn&rsquo;t bad at this. She just built a system for
              tracking one bucket of money, and the program now has three.
            </p>
            <p className="mt-4 text-body text-graphite">
              That&rsquo;s the entire idea behind fund accounting, and almost
              nobody explains it without three pages of accounting-department
              language first. Here it is without that.
            </p>
          </div>
        </Section>

        {/* 1 — WHAT IT MEANS */}
        <Section background="ivory" id="what-fund-accounting-means">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What fund accounting actually means
            </h2>
            <p className="mt-4 text-body text-graphite">
              Regular business bookkeeping answers one question: did we make
              money? Fund accounting answers a different one: did each pot of
              money go where it was supposed to? That shift &mdash; from
              profitability to stewardship &mdash; is the whole method.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A fund is its own mini set of books.
                </strong>{' '}
                Each one tracks its own income, expenses, and balance, even
                though the actual cash usually sits in one shared bank
                account.
              </li>
              <li>
                <strong className="text-aubergine">
                  It matters most when money comes with strings attached.
                </strong>{' '}
                A grant with a stated purpose, a gift given &ldquo;in memory
                of&rdquo; someone, a capital campaign for a specific
                project &mdash; each is a promise, and the books have to
                prove the promise was kept.
              </li>
              <li>
                <strong className="text-aubergine">
                  It isn&rsquo;t optional once the money is restricted.
                </strong>{' '}
                You can choose not to bother with fund accounting, but you
                can&rsquo;t choose not to honor a donor restriction &mdash;
                the funds are the mechanism for proving you did.
              </li>
            </ul>
          </div>
        </Section>

        {/* 2 — RESTRICTED VS UNRESTRICTED */}
        <Section background="cream" id="restricted-vs-unrestricted">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Restricted funds, unrestricted funds, and why donors care
            </h2>
            <p className="mt-4 text-body text-graphite">
              Every dollar that comes in falls into one of a few categories,
              and the category is set by the donor, not by you.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Unrestricted funds.
                </strong>{' '}
                General operating money. Spend it on rent, payroll, or
                printer paper &mdash; anything that fits the mission.
              </li>
              <li>
                <strong className="text-aubergine">
                  Temporarily restricted funds.
                </strong>{' '}
                Earmarked for a purpose or until a date. Dana&rsquo;s $5,000
                book grant stays in this bucket until it&rsquo;s spent on
                books, or the grant period ends.
              </li>
              <li>
                <strong className="text-aubergine">
                  Permanently restricted funds.
                </strong>{' '}
                An endowment. The principal stays invested forever; only what
                it earns each year can be spent.
              </li>
              <li>
                <strong className="text-aubergine">
                  Board-designated isn&rsquo;t the same thing.
                </strong>{' '}
                A board can vote to set money aside for a future project and
                vote again to change its mind. A donor restriction doesn&rsquo;t
                move that easily &mdash; it survives the board&rsquo;s vote.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              A grant letter that sounds official isn&rsquo;t automatically a
              restricted fund, either. Read what it actually says. If there
              is no stated purpose and no time limit, the money is
              unrestricted no matter how formal the paperwork looks.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/labeled-fund-folders-closeup.webp`}
              alt="Manila folders labeled Donations, Project Ideas, Receipts, Volunteers and Misc, fanned out on a wooden desk beside a paperclipped note tallying donations by cause"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — HOW IT DIFFERS FROM REGULAR BOOKKEEPING */}
        <Section background="ivory" id="not-your-regular-bookkeeping">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How it&rsquo;s different from the bookkeeping you already know
            </h2>
            <p className="mt-4 text-body text-graphite">
              If you&rsquo;ve run a small business, you know a profit and
              loss statement and a balance sheet. A nonprofit&rsquo;s books
              carry the same discipline but different labels, because
              there&rsquo;s no owner and no profit motive to report against.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Net assets, not owner&rsquo;s equity.
                </strong>{' '}
                Nonprofit financial statements group everything into net
                assets with donor restrictions and net assets without them
                &mdash; two categories instead of the profit-driven equity
                accounts a for-profit uses.
              </li>
              <li>
                <strong className="text-aubergine">
                  A statement of activities, not a P&amp;L.
                </strong>{' '}
                Same idea &mdash; income minus expenses over a period &mdash;
                but broken out by fund, so a reader can see the restricted
                money and the general money separately.
              </li>
              <li>
                <strong className="text-aubergine">
                  Revenue is recognized when it&rsquo;s received, not spent.
                </strong>{' '}
                A $5,000 grant counts as revenue the day it arrives, even
                though it might take a school year to spend it on books.
                What changes over time is whether it&rsquo;s still restricted
                or has been released.
              </li>
              <li>
                <strong className="text-aubergine">
                  One deposit can touch several funds.
                </strong>{' '}
                A single fundraising-night deposit might be part ticket
                sales (unrestricted) and part a designated gift (restricted)
                &mdash; the split happens at the point of entry, not later.
              </li>
            </ul>
          </div>
        </Section>

        {/* 4 — SETTING IT UP WITHOUT HIRING ANYONE */}
        <Section background="cream" id="setting-up-without-hiring">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Setting it up without hiring anyone yet
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most small nonprofits and churches don&rsquo;t need dedicated
              fund-accounting software on day one. They need a system and the
              discipline to use it monthly.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. One spreadsheet tab per fund.
                </strong>{' '}
                Track deposits and withdrawals per fund, and reconcile the
                total against the single bank statement every month. Below a
                certain size, this is genuinely enough.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Use classes or locations if you&rsquo;re on QuickBooks.
                </strong>{' '}
                QuickBooks Online Plus and Advanced let you tag every
                transaction with a class, then run a report filtered by
                fund &mdash; no extra software required at this stage.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Keep the grant letters and receipts, not just the totals.
                </strong>{' '}
                Exempt organizations are expected to{' '}
                <SourceLink href="https://www.irs.gov/charities-non-profits/eo-operational-requirements-recordkeeping-requirements-for-exempt-organizations">
                  keep records that document the source of every receipt and
                  expenditure
                </SourceLink>
                , not just a summary number. A folder per fund with the
                agreement letter inside solves most of this on its own.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Reconcile monthly, not at tax time.
                </strong>{' '}
                Commingling almost never happens in one dramatic mistake. It
                happens in small, unreviewed decisions across eleven months,
                discovered on the twelfth.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              If that&rsquo;s your whole situation &mdash; one bank account, a
              handful of funds, and a volunteer willing to spend twenty
              minutes a month on it &mdash; a spreadsheet and a habit are
              genuinely enough. We&rsquo;d tell you the same thing on a call.
              See{' '}
              <Link href="/how-we-work" className={linkClass}>
                how a first month with us actually runs
              </Link>{' '}
              if you want to compare it against doing this yourself.
            </p>
          </div>
        </Section>

        {/* 5 — RECORDING DONATIONS CORRECTLY */}
        <Section background="ivory" id="recording-donations-correctly">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Recording donations so the numbers hold up
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most fund-accounting mistakes happen at the moment a donation is
              entered, not later. Get this part right and the rest is mostly
              maintenance.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Record the restriction at the gift, not at the spend.
                </strong>{' '}
                The moment a check with &ldquo;for the building fund&rdquo; in
                the memo line clears, it belongs to that fund &mdash; not
                whenever someone gets around to categorizing it.
              </li>
              <li>
                <strong className="text-aubergine">
                  In-kind donations count too.
                </strong>{' '}
                Donated equipment, supplies, or professional services need an
                honest fair-value estimate and a note of who gave what, even
                though no cash changed hands.
              </li>
              <li>
                <strong className="text-aubergine">
                  Track the release, not just the receipt.
                </strong>{' '}
                When the $5,000 book grant is actually spent on books, that
                gets logged as a release from restriction &mdash; the money
                moves from &ldquo;restricted&rdquo; to &ldquo;spent as
                promised,&rdquo; and that entry is your proof.
              </li>
              <li>
                <strong className="text-aubergine">
                  When in doubt, ask the donor.
                </strong>{' '}
                A vague memo line (&ldquo;for the kids&rdquo;) is worth a
                two-line email asking what they meant. It&rsquo;s faster than
                guessing wrong and re-explaining it later.
              </li>
            </ul>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/collection-basket-and-fund-notebook.webp`}
              alt="A wicker collection basket of envelopes beside an open spiral notebook with hand-ruled columns and a cooling cup of coffee, in a quiet fellowship hall"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — WHEN TO GET HELP */}
        <Section background="cream" id="when-to-get-help">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When a bookkeeper or accountant actually earns their fee
            </h2>
            <p className="mt-4 text-body text-graphite">
              There&rsquo;s a point where the spreadsheet stops being enough,
              and it usually isn&rsquo;t about size alone &mdash; it&rsquo;s
              about complexity.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Multiple grants with different reporting deadlines.
                </strong>{' '}
                Once you&rsquo;re tracking three funders who each want a
                report in a different format on a different schedule, a
                dedicated bookkeeper stops being overhead and starts being
                time back.
              </li>
              <li>
                <strong className="text-aubergine">
                  You&rsquo;ve added payroll.
                </strong>{' '}
                Fund tracking plus employer payroll tax deadlines is where
                volunteer treasurers most often fall behind.
              </li>
              <li>
                <strong className="text-aubergine">
                  You&rsquo;re near the Form 990 filing thresholds.
                </strong>{' '}
                The IRS requires the{' '}
                <SourceLink href="https://www.irs.gov/charities-non-profits/form-990-series-which-forms-do-exempt-organizations-file-filing-phase-in">
                  full Form 990 once gross receipts reach $200,000 or total
                  assets reach $500,000
                </SourceLink>
                , with simpler forms below that. The full return is a
                different level of documentation than the e-Postcard most
                small nonprofits start with.
              </li>
              <li>
                <strong className="text-aubergine">
                  You&rsquo;re approaching $1,000,000 in federal awards.
                </strong>{' '}
                Under{' '}
                <SourceLink href="https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-F/subject-group-ECFRfd0932e473d10ba/section-200.501">
                  federal Uniform Guidance
                </SourceLink>
                , an organization that expends $1,000,000 or more in federal
                awards in a fiscal year needs a Single Audit &mdash; and that
                has to be signed off by a CPA. Njock is an accountant, not a
                CPA, so at this stage we&rsquo;ll say so plainly and bring in
                a CPA partner rather than pretend otherwise.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              Short of that threshold, monthly bookkeeping and tax
              preparation for a small nonprofit or church is ordinary work
              for us &mdash; the same{' '}
              <Link href="/services" className={linkClass}>
                bookkeeping and tax services
              </Link>{' '}
              we run for small businesses, applied to fund reporting instead
              of a profit and loss.
            </p>
          </div>
        </Section>

        {/* 7 — EMPHASIS: COST OF NOT SEPARATING FUNDS */}
        <Section background="aubergine" id="cost-of-not-separating-funds">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What it costs to keep it all in one bucket
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              The immediate risk is small and specific: a restricted grant
              gets spent on the wrong line item, and now you either return
              the money or scramble to cover it from somewhere else. Annoying,
              but recoverable.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The slower risk is the expensive one. Eleven months of
              unreviewed decisions turn into a twelfth month spent
              reconstructing an entire year from bank statements and memory
              &mdash; usually right before a Form 990 filing or an audit,
              when there&rsquo;s no slack left in the calendar.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              There&rsquo;s no official price tag on a mess, but do the
              arithmetic yourself: a CPA reconstructing a year of commingled
              transactions after the fact bills by the hour, and that clock
              runs a lot longer than the one for keeping monthly records
              straight in the first place.{' '}
              <strong className="text-ivory">
                A $299-a-month bookkeeping habit is the cheaper problem, every
                time.
              </strong>
            </p>
            <p className="mt-4 text-body text-ivory/85">
              And the part that doesn&rsquo;t show up on any invoice: donor
              trust doesn&rsquo;t come back with an amended report. A funder
              who gets asked to overlook a misused grant remembers it longer
              than they remember the correction.
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
                'Six honest signs it’s time, three signs it isn’t, and the real cost math — the same questions apply whether you run a business or a nonprofit.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Bookkeeping and tax prep, explained plainly',
              blurb:
                'What monthly bookkeeping, tax preparation, and audit support actually include — no jargon, no vague deliverables.',
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
              Volunteer treasurer, wearing too many hats?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute call with Njock. Bring the spreadsheet
              exactly as it is &mdash; funds mixed together is normal at this
              stage, not a red flag. We&rsquo;ll tell you honestly whether a
              habit fixes it or whether it&rsquo;s time to hand it off.
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
