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

const SLUG = 'how-much-does-it-cost-to-do-your-taxes';
const TITLE = 'How Much Does It Cost to Do Your Taxes? The Real Numbers';
const DESCRIPTION =
  'How much does it cost to do your taxes? From $0 with IRS Free File to $600 or more for a business return. What moves the price, and when free is enough.';
const PUBLISHED = '2026-10-05';
const MODIFIED = '2026-10-05';
const HERO = `/blog/${SLUG}/hero-wooden-desk-tax-folder-coins.webp`;

const TOC = [
  { id: 'cost-by-route', label: 'What it costs to do your taxes, route by route' },
  { id: 'irs-average', label: 'What the IRS itself says the average is' },
  { id: 'what-moves-the-price', label: 'What actually moves the price' },
  { id: 'how-preparers-bill', label: 'How preparers set their fees, and one to walk away from' },
  { id: 'when-free-is-enough', label: 'When doing your taxes should cost you nothing' },
  { id: 'business-owners', label: 'If you run a business, the return is the cheap part' },
  { id: 'cheapest-option', label: 'What the cheapest option can end up costing' },
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
        alt: 'A wooden desk with a paper folder labelled taxes, a folded banknote, scattered coins, reading glasses, stacked files and a vintage rotary telephone',
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
    q: 'How much does it cost to do your taxes?',
    a: 'It costs anywhere from $0 to several hundred dollars. The IRS estimates the average out-of-pocket cost of a 2025 Form 1040 at about $290 across all filers: roughly $160 for people with no business income and about $610 for people who file a Schedule C, E or F. Most filers pay less than the average, and many qualify to file for free.',
  },
  {
    q: 'How much does it cost to have someone do your taxes?',
    a: 'A paid preparer typically charges a few hundred dollars for an individual return, and more as schedules are added. Preparers who bill by the hour average about $182 an hour, with half charging between $129 and $250, according to the National Association of Tax Professionals 2025 fee study. Ask for the fee in writing before any work starts.',
  },
  {
    q: 'Is it cheaper to do your own taxes?',
    a: 'In cash, almost always yes. In time, not necessarily: the IRS estimates an average of 8 hours for a return with no business income and 21 hours for one with business income, most of it recordkeeping. Doing it yourself is cheaper when your return is simple and your records are already in order.',
  },
  {
    q: 'Can I do my taxes for free?',
    a: 'Yes, in many cases. IRS Free File offers free guided software for a federal return if your adjusted gross income is $89,000 or less, and Free File Fillable Forms is free at any income. IRS-certified VITA volunteers prepare basic returns free for people who generally make about $70,000 or less. State returns are not always included.',
  },
  {
    q: 'How much does a CPA charge to do taxes?',
    a: 'CPAs and enrolled agents charge more on average than preparers without a credential, and the fee rises with the number of forms and the state of your records. There is no single national price. Get a written quote that names the forms it covers, and ask what would make it go up.',
  },
  {
    q: 'Are tax preparation fees tax deductible?',
    a: 'The business part is. The IRS instructions for Schedule C, line 17, say to include fees for tax advice related to your business and for preparing the tax forms related to your business. Ask your preparer to show the business portion separately on the invoice so the split is documented.',
  },
  {
    q: 'Why does a business tax return cost more than a personal one?',
    a: 'Because there is more to assemble and more to get wrong. A business return needs a full year of income and expenses sorted into categories, plus items like mileage, home office and equipment. If the books are already clean, the return itself is quick. If they are not, the fee is mostly paying for a year of bookkeeping done in one go.',
  },
  {
    q: 'How do I know a tax preparer is legitimate?',
    a: 'Anyone paid to prepare a federal return must have an IRS Preparer Tax Identification Number and must sign the return. The IRS says to avoid preparers who base their fee on a percentage of your refund, and to never sign a blank form. You can look up credentialed preparers in the IRS directory.',
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
              <time dateTime={PUBLISHED}>October 5, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>October 5, 2026</time>
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
              alt="A wooden desk with a paper folder labelled taxes, a folded banknote, scattered coins, reading glasses, stacked files and a vintage rotary telephone"
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
                <strong>Short answer:</strong> how much it costs to do your
                taxes runs from $0 to several hundred dollars. The IRS puts the
                average out-of-pocket cost of a 2025 return at about $290:
                roughly $160 if you have no business income, and about $610 if
                you file a Schedule C, E or F. Many people qualify to file for
                free.
              </p>
              <p className="mt-4 text-body text-graphite">
                Those are averages, and the IRS says most filers come in under
                them. What you pay depends on which forms you need and what
                shape your records are in, far more than on who you hire.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Sunday afternoon in late January and Carmen &mdash;
              I&rsquo;ll call her Carmen &mdash; is forty minutes into tax
              software that told her, on the first screen, in large friendly
              letters, that it was free. She has typed in her W-2. She has
              answered a question about whether she owns a farm.
            </p>
            <p className="mt-4 text-body text-graphite">
              Then she mentions the $2,300 she made selling candles at weekend
              markets, and the software becomes thoughtful. There is a new
              screen. The screen has a price on it. The price has a state
              return added to it, which is a second price.
            </p>
            <p className="mt-4 text-body text-graphite">
              Carmen isn&rsquo;t being scammed, and she isn&rsquo;t bad with
              money. She asked a question that sounds like it has one answer
              and actually has about five.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here are the five, with real numbers, where each one comes from,
              and &mdash; because it&rsquo;s true for a lot of people &mdash;
              when the right amount to spend is nothing at all.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="cost-by-route">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What it costs to do your taxes, route by route
            </h2>
            <p className="mt-4 text-body text-graphite">
              Asking what it costs to do your taxes is a bit like asking a
              mechanic what it costs to fix a car. The honest reply is another
              question: well, what&rsquo;s it doing? So here is the price list,
              sorted by how you get the return done.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Free government-backed options: $0.
                </strong>{' '}
                IRS Free File, Free File Fillable Forms and volunteer
                preparation through VITA cost nothing for the federal return.
                The catch is eligibility, and sometimes the state return. More
                on exactly who qualifies below.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Paid tax software: from $0 to a couple of hundred dollars.
                </strong>{' '}
                The advertised price is usually for the simplest federal
                return. Self-employment income, investments, rental property
                and each state return tend to be separate line items. The
                number that matters is the one on the last screen, not the
                first.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. A paid preparer for an individual return: a few hundred
                  dollars.
                </strong>{' '}
                Figures reported from the National Association of Tax
                Professionals&rsquo; 2025 fee survey put a plain Form 1040 with
                a state return at a little over $300, with each extra schedule
                adding to it. Treat that as a starting point, not a quote.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. A return with business income: several hundred dollars,
                  and up from there.
                </strong>{' '}
                The IRS&rsquo;s own average for this group is about $610, and
                that average includes people who did it themselves with
                software. A messy year pushes a preparer&rsquo;s fee well past
                it.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Hourly help: about $130 to $250 an hour.
                </strong>{' '}
                The same survey found preparers who bill by the hour{' '}
                <SourceLink href="https://dam.natptax.com/m/5f112786acbd1130/original/2025_NATP_Fee_Study_MediaHighlights.pdf">
                  average $182 an hour, with half falling between $129 and $250
                </SourceLink>
                . Only about 7% of preparers bill this way, but it is common
                for cleanup work and one-off questions.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              One thing that is not on this list: a tax attorney. That is a
              different job at a very different price, for when something has
              already gone wrong. We covered it separately in{' '}
              <Link href="/blog/how-much-does-a-tax-attorney-cost" className={linkClass}>
                how much a tax attorney costs
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="irs-average">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What the IRS itself says the average is
            </h2>
            <p className="mt-4 text-body text-graphite">
              The best single source on this question is one almost nobody
              reads, because it sits near the back of the Form 1040
              instructions. The IRS is, as far as I know, the only organisation
              that publishes an official estimate of how tedious its own
              paperwork is.
            </p>
            <p className="mt-4 text-body text-graphite">
              For a 2025 return, the{' '}
              <SourceLink href="https://www.irs.gov/instructions/i1040gi">
                IRS estimates of taxpayer burden
              </SourceLink>{' '}
              come out like this:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">All filers:</strong> about
                12 hours and $290.
              </li>
              <li>
                <strong className="text-aubergine">No business income:</strong>{' '}
                about 8 hours and $160. This is 71% of returns.
              </li>
              <li>
                <strong className="text-aubergine">Business filers:</strong>{' '}
                about 21 hours and $610. The IRS counts you here if you file a
                Schedule C, E or F, or Form 2106.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The dollar figure covers whatever you spent to get the return
              prepared and submitted: preparer fees, software, postage,
              photocopying. The hours are your own time, and they are not
              included in the dollars.
            </p>
            <p className="mt-4 text-body text-graphite">
              Two details in that table are worth more than the headline. The
              first is that the IRS says plainly that most taxpayers experience
              a lower burden than the average, because a small number of
              complicated returns drag it upward. The second is where the time
              goes. Of those 21 hours for a business filer, about 10 are
              recordkeeping. Filling in the actual form is 5.
            </p>
            <p className="mt-4 text-body text-graphite">
              Which means roughly half the job is looking for things.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-pink-calculator-receipts.webp`}
              alt="A pair of hands pressing the keys of a pink desk calculator on top of a spread of paper till receipts and orange slips"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="what-moves-the-price">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What actually moves the price
            </h2>
            <p className="mt-4 text-body text-graphite">
              Two people with the same income can pay wildly different amounts
              to file. Income is not really the thing being priced. These are.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">The number of forms.</strong>{' '}
                A W-2 and the standard deduction is one form. Add a side
                business, a rental, stock sales or a second state and each one
                brings its own schedule, and most preparers price per schedule.
              </li>
              <li>
                <strong className="text-aubergine">The state of your records.</strong>{' '}
                This is the big one, and the only one fully in your control. A
                tidy spreadsheet of income and expenses is a short job. A
                grocery bag of receipts is a long one, and an experienced
                preparer can estimate your invoice from the sound the bag makes
                when you put it on the desk.
              </li>
              <li>
                <strong className="text-aubergine">Where you live.</strong>{' '}
                Fees track local costs. The same survey found higher averages
                in the Northeast and in cities, and some of the lowest in the
                Midwest. A state with no income tax also means one fewer return
                to pay for.
              </li>
              <li>
                <strong className="text-aubergine">Who is doing it.</strong>{' '}
                CPAs and enrolled agents charge more on average than preparers
                with no credential. That premium buys something specific, which
                the next section gets into, and it is not always something you
                need.
              </li>
              <li>
                <strong className="text-aubergine">When you turn up.</strong>{' '}
                Some firms charge more for returns that arrive in the last
                couple of weeks before the deadline, and all of them have less
                time for you. Nobody has ever described
                the second week of April as a calm time to become a new client.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Prices also drift up over time. In that 2025 survey, 83% of
              preparers said they raise fees every one to two years, typically
              by 6% to 10%. If last year&rsquo;s number is the one in your head,
              add a little before you are surprised.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="how-preparers-bill">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How preparers set their fees, and one to walk away from
            </h2>
            <p className="mt-4 text-body text-graphite">
              Knowing how the fee is built is the difference between a quote
              and a guess. There are really three models.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Per form.</strong> A set
                price for the 1040, a set price for each schedule. Easy to
                compare between firms, and the reason it pays to ask which
                forms your return will need before you ask what it costs.
              </li>
              <li>
                <strong className="text-aubergine">A minimum, then adjusted.</strong>{' '}
                The most common approach: nearly half of preparers in the
                survey set a minimum fee and move it up for complexity. Ask
                what would move it. A good preparer can tell you in one
                sentence.
              </li>
              <li>
                <strong className="text-aubergine">Hourly.</strong> Fair for
                unpredictable work, nerve-racking for everything else. Ask for
                an estimate of hours and a number at which they will stop and
                call you.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              I should admit the profession did this to itself. Accountants
              spent decades answering &ldquo;what will it cost&rdquo; with
              &ldquo;it depends,&rdquo; which is accurate and also the least
              reassuring sentence in the language. It is the entire reason we
              put our own prices on a page and left them there.
            </p>
            <p className="mt-4 text-body text-graphite">
              Then there is the model to walk away from. The IRS says to{' '}
              <SourceLink href="https://www.irs.gov/taxtopics/tc254">
                avoid preparers who base their fees on a percentage of the
                refund
              </SourceLink>
              , and to be wary of anyone claiming they can get you a bigger
              refund than everyone else. A preparer paid by the size of your
              refund has a reason to inflate it, and you are the one who signs
              it.
            </p>
            <p className="mt-4 text-body text-graphite">
              Two quick checks from that same IRS guidance: every paid preparer
              must have a Preparer Tax Identification Number and must sign your
              return, and only attorneys, CPAs and enrolled agents can
              represent you before the IRS in all matters. If you think you may
              need that kind of representation, our guide on{' '}
              <Link href="/blog/when-to-hire-a-tax-attorney" className={linkClass}>
                when to hire a tax attorney
              </Link>{' '}
              sets out where the line is.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="when-free-is-enough">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              When doing your taxes should cost you nothing
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the section where an accounting firm tells you not to
              hire an accounting firm. A large share of people reading this
              should pay $0 for their federal return, and here is how.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">IRS Free File guided software.</strong>{' '}
                If your adjusted gross income is $89,000 or less, you can{' '}
                <SourceLink href="https://www.irs.gov/e-file-do-your-taxes-for-free">
                  prepare and e-file your federal return for free
                </SourceLink>{' '}
                with partner software. You have to start from the IRS page; go
                straight to the company&rsquo;s own website and you get the
                paid version. Some partners include a free state return and
                some charge for it.
              </li>
              <li>
                <strong className="text-aubergine">Free File Fillable Forms.</strong>{' '}
                Free at any income. It is the electronic version of the paper
                forms, with limited calculations, no guidance and no state
                return. Think of flat-pack furniture where the instructions
                have no pictures. Everything is in the box. You are holding the
                Allen key.
              </li>
              <li>
                <strong className="text-aubergine">VITA and TCE volunteers.</strong>{' '}
                IRS-certified volunteers{' '}
                <SourceLink href="https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers">
                  prepare basic returns for free
                </SourceLink>{' '}
                for people who generally make about $70,000 or less, people
                with disabilities and limited-English speakers, with TCE
                focused on those 60 and over. Individual sites set their own
                limits, and a return that is too complex gets referred out.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              That $89,000 figure is for the current filing season and the IRS
              adjusts it most years, so check the page rather than trusting the
              number here.
            </p>
            <p className="mt-4 text-body text-graphite">
              If you have a W-2, maybe some bank interest, and the standard
              deduction, paying anyone several hundred dollars is buying
              reassurance, not expertise. That is a fine thing to buy if you
              want it. Just know that it is what you are buying.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-notebook-glasses-paperwork.webp`}
              alt="Hands writing in a small notebook on a wooden table covered with printed forms, a pair of reading glasses and a phone showing a calculator"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="business-owners">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              If you run a business, the return is the cheap part
            </h2>
            <p className="mt-4 text-body text-graphite">
              Go back to the IRS table. Business filers spend 21 hours, and 10
              of them are recordkeeping. That ratio is the whole story of what
              a business return costs.
            </p>
            <p className="mt-4 text-body text-graphite">
              When a preparer quotes $900 for a return that &ldquo;should&rdquo;
              cost $400, they are usually not pricing the return. They are
              pricing twelve months of bank statements that nobody has
              categorised, which is bookkeeping, done all at once, in March, by
              the most expensive person available. If the difference between
              those two jobs is hazy, we laid it out in{' '}
              <Link href="/blog/bookkeeping-vs-accounting" className={linkClass}>
                bookkeeping versus accounting
              </Link>
              .
            </p>
            <p className="mt-4 text-body text-graphite">
              Nobody&rsquo;s tax return is expensive. Their January is
              expensive.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Keep the books monthly and the return gets cheap.</strong>{' '}
                Whether you do it yourself in a spreadsheet or hand it off, a
                preparer who receives clean, reconciled numbers is doing an
                hour or two of work, not a weekend of archaeology.
              </li>
              <li>
                <strong className="text-aubergine">The business part of the fee is deductible.</strong>{' '}
                The IRS{' '}
                <SourceLink href="https://www.irs.gov/instructions/i1040sc">
                  instructions for Schedule C
                </SourceLink>{' '}
                say line 17 includes fees for tax advice related to your
                business and for preparing the tax forms related to your
                business. Ask for the business portion to be shown separately
                on the invoice.
              </li>
              <li>
                <strong className="text-aubergine">Bundled can be cheaper than one-off.</strong>{' '}
                Our own plans start at $299 a month and include the monthly
                bookkeeping and the annual return, so there is no separate
                invoice in the spring.{' '}
                <Link href="/pricing" className={linkClass}>
                  The prices are published in full
                </Link>
                , which is not a boast so much as a low bar the industry keeps
                tripping over.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              And the honest counterweight: $299 a month is $3,588 a year. If
              your side business brings in a few thousand dollars and has
              thirty transactions, that is absurd, and software plus a tidy
              spreadsheet is the right answer. Monthly help starts to earn its
              keep when the bookkeeping is eating your evenings or the business
              is big enough that mistakes are expensive. Our post on{' '}
              <Link
                href="/blog/do-i-need-an-accountant-for-your-small-business"
                className={linkClass}
              >
                whether you actually need an accountant
              </Link>{' '}
              has the signs to look for, and{' '}
              <Link href="/services" className={linkClass}>
                the services page
              </Link>{' '}
              shows what is and is not included.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="cheapest-option">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What the cheapest option can end up costing
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Here is the arithmetic the price tag leaves out. Take the
              IRS&rsquo;s 21 hours for a business filer. If an hour of your
              time is worth $50 to your business &mdash; pick your own number
              &mdash; the free option cost you $1,050 before you spent a cent.
              At $75 an hour it is $1,575.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              That does not make doing it yourself wrong. It makes it a
              purchase. You are paying in hours instead of dollars, and for
              plenty of people, in plenty of years, hours are the cheaper
              currency.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The cost that is harder to see is the one from rushing. A return
              assembled in one long weekend from a year of unsorted records is
              the return that leaves out the mileage, the home office, the
              equipment bought in February and forgotten by December. Nobody
              sends you a letter about a deduction you did not claim. It just
              quietly costs you, every year, and you never find out how much.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              So the useful question is not which route is cheapest. It is
              which one you can do carefully. For a simple return, that is very
              often the free one. For a business with a full year of activity
              and no books, it almost never is.
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

            <p className="mt-8 text-body-sm text-graphite/75">
              The IRS figures above are for 2025 returns and the Free File
              income limit is for the current filing season. Both are updated
              most years, so confirm them at the source before you rely on a
              number from a blog post &mdash; including this one.
            </p>

            <AuthorBio />
          </div>
        </Section>

        {/* RELATED */}
        <RelatedPosts
          items={[
            {
              href: '/blog/how-much-does-a-tax-attorney-cost',
              eyebrow: 'Blog',
              title: 'How Much Does a Tax Attorney Cost? A Straight Answer',
              blurb:
                'Hourly and flat-fee ranges by case type, and when a cheaper kind of help does the same job.',
            },
            {
              href: '/blog/bookkeeping-vs-accounting',
              eyebrow: 'Blog',
              title: 'Bookkeeping vs. Accounting: What’s the Difference?',
              blurb:
                'A bookkeeper records the numbers; an accountant interprets them and files your taxes. Where the line falls and what each costs.',
            },
            {
              href: '/pricing',
              eyebrow: 'Pricing',
              title: 'Flat monthly plans from $299',
              blurb:
                'Three plans with real prices in writing. Monthly bookkeeping and the annual return in one fee.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure what yours is doing?
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
