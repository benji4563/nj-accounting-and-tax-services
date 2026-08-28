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

const SLUG = 'why-is-tax-relief-services-calling-me';
const TITLE = 'Why Is Tax Relief Services Calling Me? And How to Stop It';
const DESCRIPTION =
  'Why is tax relief services calling me? Usually because your number sold to a lead list after a public tax lien. It is not the IRS — here is how to stop it.';
const PUBLISHED = '2026-08-28';
const MODIFIED = '2026-08-28';
const HERO = `/blog/${SLUG}/hero-desk-phone-document-tray.webp`;

const TOC = [
  { id: 'why-theyre-calling', label: 'Why tax relief services are calling you' },
  { id: 'not-the-irs', label: 'Is it the IRS? Almost certainly not' },
  { id: 'how-the-pitch-works', label: 'How the tax relief phone pitch works' },
  { id: 'scam-or-legit', label: 'Telling a scam call from a real firm' },
  { id: 'make-it-stop', label: 'How to make the calls stop' },
  { id: 'if-you-actually-owe', label: 'What to do if you actually do owe back taxes' },
  { id: 'what-ignoring-it-costs', label: 'What ignoring a real balance costs' },
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
        height: 900,
        alt: 'A classic black push-button desk telephone beside a wire document tray holding white papers on a wood-veneer office desk',
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
    q: 'Why is tax relief services calling me if I do not owe any back taxes?',
    a: 'Because the calls are driven by lists, not by your actual IRS account. Autodialers work through whole blocks of phone numbers, and data brokers sell contact files that are often wrong or out of date. If you have never received an IRS letter about a balance, a call claiming you owe one is almost certainly a marketing dial or a scam. You can ignore it, and you can report it.',
  },
  {
    q: 'Is the "final notice" or "last attempt to reach you" voicemail real?',
    a: 'No. That phrasing is a sales technique designed to make you call back quickly. There is no single, final attempt — the same operations dial the same numbers repeatedly. Real IRS deadlines arrive on paper, are measured in weeks, and tell you exactly which notice and tax year they refer to.',
  },
  {
    q: 'How did tax relief companies get my phone number?',
    a: 'Usually one of three ways. A Notice of Federal Tax Lien is a public record, and lead-generation firms scrape those filings and resell the names. Data brokers compile phone numbers from warranty cards, online forms, sweepstakes, and "free" quote sites, then sell them in bulk. And some numbers are simply dialed at random or spoofed. If the calls started right after a lien was filed, the public record is the most likely source.',
  },
  {
    q: 'Are companies like Tax Relief Advocates, Alleviate Tax, or Clear Start Tax legitimate?',
    a: 'We have not worked with any of those firms, so we cannot vouch for or against a specific company by name, and no honest blog post can. Judge any firm by what it does: it should pull and review your actual IRS transcripts before quoting a result, name the enrolled agent, CPA, or tax attorney assigned to your case, and put its fees in writing before taking money. A firm that fails any one of those is not worth hiring, whatever its name is.',
  },
  {
    q: 'Does the IRS ever call about taxes I owe?',
    a: 'It can, but only after it has first contacted you by mail, usually more than once. The IRS says its first contact with a taxpayer is normally a letter delivered by the U.S. Postal Service. It will not open with a phone call, and it will never demand payment by gift card, prepaid debit card, or wire transfer, ask for card numbers over the phone, or threaten to send police to arrest you.',
  },
  {
    q: 'How do I stop tax relief robocalls for good?',
    a: 'There is no single switch, but a few steps thin them out. Do not press 1 or call back, because any response confirms a live person and raises your value on the list. Let unknown numbers go to voicemail and turn on your carrier and phone spam filtering. Register at donotcall.gov, report IRS impersonation calls to the Treasury Inspector General for Tax Administration at 800-366-4484, and report other unwanted calls to the FTC. Opting out of the major data brokers reduces new calls over the following months.',
  },
  {
    q: 'What should I do if I actually owe the IRS money?',
    a: 'Start by pulling your own transcript from your IRS online account so you know the real balance. If you have unfiled years, those have to be filed first. If you owe under $50,000, you can usually set up a direct-debit payment plan yourself on the IRS website. Bring in a credentialed professional if you have several missing returns, payroll tax issues, or a levy already in progress.',
  },
  {
    q: 'Does NJ\'s Accounting and Tax Services handle IRS collections calls?',
    a: 'Njock is an accountant, not a CPA, enrolled agent, or tax attorney, which are the credentials the IRS requires to formally represent you in a collections case or a settlement. We are upfront about that. What we do well is the catch-up bookkeeping and return preparation that gets your numbers straight, which is the step that has to happen before any negotiation can start. If your situation needs formal representation, we will say so and point you to someone who holds the credential.',
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
              <time dateTime={PUBLISHED}>August 28, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>August 28, 2026</time>
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
              alt="A classic black push-button desk telephone beside a wire document tray holding white papers on a wood-veneer office desk"
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
                <strong>Short answer:</strong> the honest version of{' '}
                <em>why is tax relief services calling me</em> is rarely
                flattering and almost always the same &mdash; your phone number
                reached a sales lead list. Most often that happens after the IRS
                files a tax lien, which becomes a public record, or after a data
                broker bundles up your details and sells them. The callers are
                not the IRS, and the large majority are marketing companies
                working a script, with some outright scams mixed in.
              </p>
              <p className="mt-4 text-body text-graphite">
                If you genuinely owe back taxes, you can deal with the IRS
                directly for a fraction of what these callers charge. If you
                don&rsquo;t owe anything, the calls are just noise attached to a
                list &mdash; and you can get off it.
              </p>
            </div>

            <p className="text-body text-graphite">
              Carla &mdash; not her real name &mdash; runs a two-chair hair
              salon, and for about three weeks now her phone has done the same
              thing every afternoon around two: an unknown number, a half-second
              pause after she answers, then a recorded voice telling her that
              her federal tax debt may qualify for a special relief program if
              she presses 1 or calls back before the end of the day.
            </p>
            <p className="mt-4 text-body text-graphite">
              She did fall behind. Last year was slow, she paid her booth
              renter and her product supplier, her own quarterly taxes came
              last, and now there&rsquo;s a balance and two IRS letters she has
              read once and put in a drawer. So the calls land somewhere tender.
              They sound like they know something true about her.
            </p>
            <p className="mt-4 text-body text-graphite">
              They don&rsquo;t, really. They know she&rsquo;s on a list. What
              Carla actually needs is a plain read on why the calls started,
              whether any of them are worth picking up, and how to make the two
              o&rsquo;clock robocall stop.
            </p>
          </div>
        </Section>

        {/* 1 — WHY THEY'RE CALLING */}
        <Section background="ivory" id="why-theyre-calling">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Why tax relief services are calling you
            </h2>
            <p className="mt-4 text-body text-graphite">
              The calls almost never start because someone at a tax firm looked
              at your IRS account. They start because your name and number
              landed on a list that gets bought, sold, and dialed. There are
              four common ways that happens, and a slow year of your business
              becoming a public document is the one people never see coming
              &mdash; a tax lien gets filed at the county recorder and indexed
              right next to property deeds and business licenses, free for
              anyone with a scraper and a phone bank to read.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  A tax lien made your situation public.
                </strong>{' '}
                When a balance passes a certain size, the IRS can file a{' '}
                <SourceLink href="https://www.irs.gov/businesses/small-businesses-self-employed/understanding-a-federal-tax-lien">
                  Notice of Federal Tax Lien
                </SourceLink>{' '}
                with your county. It becomes public record the day it posts.
                Lead-generation companies pull those filings in bulk and resell
                the names to whichever tax relief firm is buying that week.
              </li>
              <li>
                <strong className="text-aubergine">
                  A data broker sold your file.
                </strong>{' '}
                Warranty cards, online quote forms, sweepstakes entries, that
                one &ldquo;free&rdquo; credit-score site &mdash; all of it feeds
                brokers who package phone numbers by ZIP code, income estimate,
                and &ldquo;likely to have debt.&rdquo; Tax relief marketers are
                a standard buyer.
              </li>
              <li>
                <strong className="text-aubergine">
                  You searched for tax help once.
                </strong>{' '}
                Typing &ldquo;IRS payment plan&rdquo; into a search box and
                filling in a form on a site that turned out not to be the IRS
                often means you filled in a lead form. The calls can start
                within the hour.
              </li>
              <li>
                <strong className="text-aubergine">
                  Your number came up at random.
                </strong>{' '}
                Autodialers churn through entire area-code ranges and spoof the
                caller ID to look local. Plenty of people with no tax balance at
                all get the exact same recording Carla does.
              </li>
            </ul>
          </div>
        </Section>

        {/* 2 — NOT THE IRS */}
        <Section background="cream" id="not-the-irs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Is it the IRS? Almost certainly not
            </h2>
            <p className="mt-4 text-body text-graphite">
              The single most useful fact for sorting real from fake is how the
              IRS opens a conversation. Its first move is a letter. It is a very
              large organization that runs on paper and pre-printed notices, and
              it is not going to reinvent itself to catch you by phone before
              your two o&rsquo;clock appointment. The IRS says it{' '}
              <SourceLink href="https://www.irs.gov/help/how-to-know-its-the-irs">
                normally contacts taxpayers first by regular mail
              </SourceLink>{' '}
              delivered by the U.S. Postal Service.
            </p>
            <p className="mt-4 text-body text-graphite">
              From there, the IRS lays out a list of things it{' '}
              <SourceLink href="https://www.irs.gov/newsroom/taxpayers-should-hang-up-if-tax-season-scammers-come-calling">
                will never do
              </SourceLink>
              , and every one of them is a scammer&rsquo;s opening line:
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  Demand immediate payment by gift card, prepaid debit card, or
                  wire transfer.
                </strong>{' '}
                The IRS accepts payment through its own documented channels and
                gives you time. It does not send you to a store counter.
              </li>
              <li>
                <strong className="text-aubergine">
                  Demand payment without letting you question or appeal.
                </strong>{' '}
                You always have the right to dispute what you owe.
              </li>
              <li>
                <strong className="text-aubergine">
                  Threaten to bring in local police to have you arrested.
                </strong>{' '}
                Unpaid taxes are a civil matter first. Nobody is coming to the
                salon.
              </li>
              <li>
                <strong className="text-aubergine">
                  Ask for a card number over the phone.
                </strong>{' '}
                If a caller wants card digits read aloud, that alone ends the
                call.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              A cold call about a balance you have never received a letter about
              fails that test on the first line. If you are genuinely unsure
              whether you owe, hang up and check your own IRS online account
              &mdash; not a number the caller gave you.
            </p>
          </div>
        </Section>

        {/* IMAGE BREAK 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-pre-approved-offer-envelope.webp`}
              alt="A person's hands holding a white window envelope stamped with a You have been pre-approved for the offer inside sticker over a wooden table"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 3 — HOW THE PITCH WORKS */}
        <Section background="ivory" id="how-the-pitch-works">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How the tax relief phone pitch works
            </h2>
            <p className="mt-4 text-body text-graphite">
              The calls follow a funnel, and it helps to recognize the shape.
              The voicemail almost always includes a version of &ldquo;this may
              be our final attempt to reach you.&rdquo; It is never the final
              attempt. There is always another attempt. The attempts are the
              entire business.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. The robocall.
                </strong>{' '}
                Pre-recorded, vague, and urgent: your tax debt may be
                &ldquo;eligible for elimination&rdquo; under a program that is
                closing soon. No tax year, no notice number, no specifics.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. The callback to a live agent.
                </strong>{' '}
                Press 1 or dial the number back and you reach a sales floor, not
                a tax office. The person is reading a script and is paid to keep
                you on the line.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. The instant &ldquo;pre-qualification.&rdquo;
                </strong>{' '}
                They tell you that you qualify &mdash; often for &ldquo;the
                Fresh Start Program,&rdquo; which{' '}
                <Link href="/blog/is-fresh-start-tax-relief-legit" className={linkClass}>
                  is not a program you enroll in
                </Link>
                . No transcript has been pulled. The number is a guess dressed
                as a quote.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. The upfront fee.
                </strong>{' '}
                A few hundred to a few thousand dollars, due before anyone has
                looked at your actual IRS records.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. The silence.
                </strong>{' '}
                The paperwork is filed late, or not at all, and calls to your
                &ldquo;case manager&rdquo; stop being returned. The{' '}
                <SourceLink href="https://consumer.ftc.gov/articles/tax-relief-companies">
                  FTC&rsquo;s guidance on tax relief companies
                </SourceLink>{' '}
                describes exactly this pattern.
              </li>
            </ol>
          </div>
        </Section>

        {/* 4 — SCAM OR LEGIT */}
        <Section background="cream" id="scam-or-legit">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Telling a scam call from a real firm
            </h2>
            <p className="mt-4 text-body text-graphite">
              Not every company in this space is a scam. Plenty of enrolled
              agents, CPAs, and tax attorneys do settlement work honestly for a
              clear fee. The difference shows up fast: a firm worth hiring will
              bore you a little first. It wants your IRS transcripts, a
              financial statement, and a couple of days. Nobody quotes a
              settlement figure off a call sheet the way you&rsquo;d quote a
              price for a haircut.
            </p>

            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Walk away when:</strong> a
                result is promised before anyone has pulled your transcripts,
                the pressure is measured in hours, the full fee is due up front,
                no named enrolled agent, CPA, or tax attorney is attached to
                your case, or the pitch guarantees &ldquo;pennies on the
                dollar.&rdquo;
              </li>
              <li>
                <strong className="text-aubergine">Reasonable when:</strong>{' '}
                transcripts get reviewed before any figure is discussed, a
                specific credentialed person is named as your representative,
                the fee is written down and itemized, and nobody objects when
                you say you want to run the IRS&rsquo;s free tools yourself
                first.
              </li>
            </ul>

            <p className="mt-8 text-body text-graphite">
              And the honest version: most people who owe a manageable amount
              and just need time do not need a firm at all. A payment plan you
              set up yourself covers it, and the callers are selling you a
              middleman for a form you can file in fifteen minutes.
            </p>
          </div>
        </Section>

        {/* 5 — MAKE IT STOP */}
        <Section background="ivory" id="make-it-stop">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              How to make the calls stop
            </h2>
            <p className="mt-4 text-body text-graphite">
              Blocking numbers feels productive for about a day. Then the next
              call comes from a fresh number spoofed to look like your own area
              code, your bank, or &mdash; a personal favorite &mdash; your own
              phone number apparently calling itself. Blocking is worth doing,
              but the steps that actually move the needle are these.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Don&rsquo;t press 1, and don&rsquo;t call back.
                </strong>{' '}
                Any response at all confirms a live person answered and moves
                your number up the list. Let it ring out.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Send unknown numbers to voicemail.
                </strong>{' '}
                Turn on your phone&rsquo;s built-in call filtering and your
                carrier&rsquo;s spam labeling. Both catch a large share of these
                automatically.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Register at{' '}
                  <SourceLink href="https://www.donotcall.gov/">
                    donotcall.gov
                  </SourceLink>
                  .
                </strong>{' '}
                It will not stop outright scammers, but it makes legitimate
                telemarketers who keep calling after 31 days reportable.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Report the calls.
                </strong>{' '}
                IRS impersonation calls go to the{' '}
                <SourceLink href="https://www.tigta.gov/reportcrime-misconduct">
                  Treasury Inspector General for Tax Administration
                </SourceLink>{' '}
                at 800-366-4484. Other unwanted calls, and any money lost, go to
                the FTC. The FTC&rsquo;s{' '}
                <SourceLink href="https://consumer.ftc.gov/articles/phone-scams">
                  phone scams guide
                </SourceLink>{' '}
                walks through both.
              </li>
              <li>
                <strong className="text-aubergine">
                  5. Slow the source.
                </strong>{' '}
                Opt out of the major data brokers. It is tedious and there are
                dozens, but it thins the lists your number sits on over the
                following months.
              </li>
            </ol>
          </div>
        </Section>

        {/* IMAGE BREAK 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-turning-document-pages.webp`}
              alt="Close-up of a person's hands turning the pages of a printed multi-page document on a white desk, a pencil held between the fingers"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* 6 — IF YOU ACTUALLY OWE */}
        <Section background="cream" id="if-you-actually-owe">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What to do if you actually do owe back taxes
            </h2>
            <p className="mt-4 text-body text-graphite">
              If there really is a balance, the good news is that the direct
              route is cheaper and faster than the one on the phone. The forms
              are tedious, not hard. The part people pay a professional for is
              the negotiation and the disclosure, not the clicking.
            </p>

            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Pull your own transcript.
                </strong>{' '}
                Your real balance is in your{' '}
                <SourceLink href="https://www.irs.gov/individuals/get-transcript">
                  IRS online account
                </SourceLink>
                . Check it before you believe any figure a caller quoted &mdash;
                theirs is usually bigger, and sometimes invented.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. File any missing years first.
                </strong>{' '}
                Being current on all required returns is a precondition for a
                payment plan or a settlement.{' '}
                <Link href="/blog/can-you-do-taxes-without-w2" className={linkClass}>
                  Even a year where the paperwork is gone
                </Link>{' '}
                has a filing path.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. Set up a payment plan.
                </strong>{' '}
                Owe under $50,000 and you can generally arrange a{' '}
                <SourceLink href="https://www.irs.gov/payments/payment-plans-installment-agreements">
                  direct-debit installment agreement
                </SourceLink>{' '}
                online, in roughly the time this afternoon&rsquo;s call has been
                ringing.
              </li>
              <li>
                <strong className="text-aubergine">
                  4. Then decide whether to hire anyone.
                </strong>{' '}
                Several unfiled years, payroll or trust-fund taxes tied to a
                business, or a levy already in motion is where a professional
                pays for itself. If what you need first is clean books and filed
                returns, our{' '}
                <Link href="/pricing" className={linkClass}>
                  pricing is on the page
                </Link>{' '}
                and{' '}
                <Link href="/how-we-work" className={linkClass}>
                  the first 30 days are written out
                </Link>
                . If you need someone to speak to the IRS for you, that is a{' '}
                <Link href="/services" className={linkClass}>
                  different kind of help
                </Link>
                , and our post on{' '}
                <Link href="/blog/tax-resolution-services" className={linkClass}>
                  what tax resolution services actually cover
                </Link>{' '}
                maps out the options.
              </li>
            </ol>

            <p className="mt-8 text-body text-graphite">
              If your balance is small, your returns are filed, and you just
              need a few months, you don&rsquo;t need us and you certainly
              don&rsquo;t need the callers. The IRS&rsquo;s own online plan is
              the whole answer.
            </p>
          </div>
        </Section>

        {/* 7 — EMPHASIS: WHAT IGNORING IT COSTS */}
        <Section background="aubergine" id="what-ignoring-it-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What ignoring a real balance costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Screening the calls is smart. Leaving a real balance to sit while
              you screen them is where the money actually goes.
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
              failure-to-pay penalty runs another 0.5% per month. Interest
              compounds daily on top of both, for as long as the balance sits.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              Left long enough, a balance can trigger a federal tax lien, which
              attaches to your property and surfaces exactly where it stings
              &mdash; a business loan, a line of credit, the sale of the shop.
              Filing a return, or setting up a plan, stops that clock. A
              voicemail promising to freeze it for free while you think it over
              does not.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The robocall was right about one thing: there is a clock. It just
              isn&rsquo;t the one it wanted you to worry about.
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
              href: '/blog/is-fresh-start-tax-relief-legit',
              eyebrow: 'Blog',
              title: 'Is Fresh Start Tax Relief Legit? What Is Real, What Is Not',
              blurb:
                'The IRS Fresh Start changes are real, but it is not a program you enroll in. What is genuine, what is a sales hook, and what is free.',
            },
            {
              href: '/blog/tax-resolution-services',
              eyebrow: 'Blog',
              title: 'Tax Resolution Services: What They Actually Cover',
              blurb:
                'The four IRS mechanisms behind every tax relief pitch, how to spot an OIC mill, and what you can do yourself for free.',
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
              Not sure if the call means anything?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute call with Njock. Read us the voicemail if
              you still have it. We&rsquo;ll tell you honestly whether there is a
              real balance to deal with, whether you can handle it yourself this
              week, or whether your case needs a credentialed specialist &mdash;
              Njock is an accountant, not a CPA or tax attorney, and will say so
              if it does.
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
