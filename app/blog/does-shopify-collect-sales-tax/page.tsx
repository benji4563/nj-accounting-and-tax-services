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

const SLUG = 'does-shopify-collect-sales-tax';
const TITLE = "Does Shopify Collect Sales Tax? What It Does and Doesn't Do";
const DESCRIPTION =
  'Does Shopify collect sales tax? It charges it at checkout once you set it up, but it never files or remits it. What that means for your store, and what to do.';
const PUBLISHED = '2026-09-30';
const MODIFIED = '2026-09-30';
const HERO = `/blog/${SLUG}/hero-packing-desk-labels-laptop.webp`;

const TOC = [
  { id: 'what-shopify-does', label: 'What Shopify actually does about sales tax' },
  { id: 'collect-vs-remit', label: 'Collect, remit, file: three very different jobs' },
  { id: 'shop-app-exception', label: 'The one place Shopify does remit for you' },
  { id: 'etsy-vs-shopify', label: 'Why Etsy handles this and Shopify does not' },
  { id: 'where-you-owe', label: 'Where you owe: nexus and the thresholds that trigger it' },
  { id: 'money-isnt-yours', label: 'The money in your payout is not all yours' },
  { id: 'what-it-costs', label: 'What finding out late actually costs' },
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
        alt: 'An overhead view of a wooden desk with labelled shipping boxes, a tape dispenser, printed order forms on a clipboard and an open laptop',
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
    q: 'Do I need to collect sales tax on Shopify?',
    a: 'You need to collect sales tax in any state where you have nexus and sell something taxable. Nexus comes from physical presence, such as your home, a warehouse, inventory or staff, or from economic activity once your sales into a state pass its threshold. Shopify will not work this out for you. You tell it where to charge tax, and it charges it.',
  },
  {
    q: 'Does Shopify remit sales tax?',
    a: 'No. For sales through your own online store, Shopify calculates and collects sales tax at checkout, then pays it out to you along with the rest of the order. Registering with each state, filing the returns and sending the money are all your responsibility. The only exception is the Shop app marketplace channel, where Shopify does remit and file.',
  },
  {
    q: "Why isn't my Shopify charging sales tax?",
    a: 'Almost always because no tax region has been switched on for that state in your admin, or because the product is set as exempt, or because the customer is marked tax exempt. Shopify only charges tax where you have told it to. A brand new store charges nothing anywhere until you configure it.',
  },
  {
    q: 'How do I pay sales tax on Shopify?',
    a: 'You do not pay it through Shopify. You register for a sales tax permit with each state where you have nexus, pull your collected tax totals from Shopify reports, then file and pay on that state’s own website on its schedule. Most states assign you a monthly, quarterly or annual filing frequency based on how much you collect.',
  },
  {
    q: 'Does Shopify report sales to the IRS?',
    a: 'Shopify Payments issues a Form 1099-K when you pass the reporting threshold, which the IRS currently sets at more than $20,000 in payments and more than 200 transactions. That threshold has changed several times in recent years, so confirm the current one before you rely on it. Either way, you must report all your business income whether or not a 1099-K arrives.',
  },
  {
    q: 'How much does Shopify take from a $100 sale?',
    a: 'Shopify takes a payment processing fee plus your monthly subscription; the exact percentage depends on your plan and where the card was issued. Sales tax is not part of what Shopify takes. The tax is added on top of the $100, passed through to you, and owed onward to the state.',
  },
  {
    q: 'Does Etsy collect sales tax?',
    a: 'Yes. Etsy is a marketplace facilitator, so state law makes it responsible for collecting and remitting sales tax on sales made through its platform. You do not file those sales yourself. Shopify is not a marketplace facilitator for your own storefront, which is why the two behave completely differently.',
  },
  {
    q: 'Why do some online stores not charge sales tax?',
    a: 'Usually because the seller has no nexus in the buyer’s state, or has not passed that state’s economic threshold yet, or sells something that state does not tax. Sometimes it is because the seller has not set it up and does not realise they should have. Not being charged tax does not mean no tax is owed.',
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
              <time dateTime={PUBLISHED}>September 30, 2026</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>September 30, 2026</time>
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
              alt="An overhead view of a wooden desk with labelled shipping boxes, a tape dispenser, printed order forms on a clipboard and an open laptop"
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
                <strong>Short answer:</strong> Shopify does collect sales tax at
                checkout, but only in the places you have told it to, and it
                never files or remits that money for you. Registering with each
                state, filing the returns and sending the tax onward are all
                yours. The one exception is the Shop app marketplace channel,
                where Shopify collects, remits and files on your behalf.
              </p>
              <p className="mt-4 text-body text-graphite">
                So the honest version of the answer is: Shopify is a very good
                calculator. It has never once mailed anything to a state.
              </p>
            </div>

            <p className="text-body text-graphite">
              It&rsquo;s a Tuesday night and Tobi &mdash; I&rsquo;ll call him
              Tobi &mdash; is at his kitchen table with three flat-packed boxes,
              a tape gun, and his second year of selling ceramics online going
              considerably better than his first. On the laptop is an envelope he
              opened at lunch and put down again: a letter from a state revenue
              department, about a state he has never been to, regarding a permit
              he does not have.
            </p>
            <p className="mt-4 text-body text-graphite">
              He opens his Shopify reports and finds the number that makes his
              stomach drop. There is a column called &ldquo;taxes.&rdquo; It is
              not zero. It has not been zero for fourteen months.
            </p>
            <p className="mt-4 text-body text-graphite">
              Tobi didn&rsquo;t do anything wrong, exactly. He did the thing
              almost every new store owner does: he switched on the setting that
              said tax, saw tax appear on orders, and reasonably concluded that
              the tax was being handled. Nothing on the screen suggested
              otherwise.
            </p>
            <p className="mt-4 text-body text-graphite">
              Here is what is actually happening behind that setting, why it
              trips up so many people, and &mdash; genuinely &mdash; when this is
              simple enough that you should just do it yourself.
            </p>
          </div>
        </Section>

        {/* BODY 1 */}
        <Section background="ivory" id="what-shopify-does">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              What Shopify actually does about sales tax
            </h2>
            <p className="mt-4 text-body text-graphite">
              Shopify does one part of the job, and it does it well. Once you
              switch on a tax region, it looks at the customer&rsquo;s shipping
              address, works out the combined state, county and city rate for
              that exact address, adds it to the order, and records it in your
              reports.
            </p>
            <p className="mt-4 text-body text-graphite">
              That is genuinely hard. There are thousands of overlapping tax
              jurisdictions in the United States, and a rate can change on one
              side of a street. Shopify getting that right is worth a lot.
            </p>
            <p className="mt-4 text-body text-graphite">
              What it does not do is anything that involves a government.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">It does not register you.</strong>{' '}
                Every state wants you to hold a permit before you start
                collecting. New York, for example,{' '}
                <SourceLink href="https://www.tax.ny.gov/bus/st/register.htm">
                  requires you to register before beginning business
                </SourceLink>
                . Shopify will happily start charging tax for a state you have
                never registered in, because it has no way of knowing that you
                haven&rsquo;t.
              </li>
              <li>
                <strong className="text-aubergine">It does not decide where you owe.</strong>{' '}
                You pick the regions. Shopify has tools that flag where your
                sales are heading, but the decision, and the liability, are
                yours.
              </li>
              <li>
                <strong className="text-aubergine">It does not file your returns.</strong>{' '}
                No form is generated, nothing is submitted, no deadline is
                tracked. The tax it collected is paid out to you with everything
                else.
              </li>
              <li>
                <strong className="text-aubergine">It does not send the money on.</strong>{' '}
                This is the one that surprises people, and it is the heart of the
                whole question.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              Think of it as a very diligent assistant who adds the right amount
              to every bill, hands you the cash at the end of the day, and then
              goes home. Everything after that is you.
            </p>
          </div>
        </Section>

        {/* BODY 2 */}
        <Section background="cream" id="collect-vs-remit">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Collect, remit, file: three very different jobs
            </h2>
            <p className="mt-4 text-body text-graphite">
              Most of the confusion here lives in three verbs that sound like
              they belong together and absolutely do not.
            </p>
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. Collect means adding the tax to the customer&rsquo;s order.
                </strong>{' '}
                Shopify does this. It is the visible part, which is exactly why
                it is mistaken for the whole thing.
              </li>
              <li>
                <strong className="text-aubergine">
                  2. Remit means sending the collected money to the state.
                </strong>{' '}
                You do this, from your own bank account, on the state&rsquo;s
                website, on the state&rsquo;s schedule.
              </li>
              <li>
                <strong className="text-aubergine">
                  3. File means submitting the return that explains the money.
                </strong>{' '}
                Also you. And you usually have to file even in a period where you
                collected nothing, which is the part people forget and get
                penalised for.
              </li>
            </ol>
            <p className="mt-4 text-body text-graphite">
              A restaurant analogy that has never let me down: collecting is the
              server adding the tax line to your check. Remitting is somebody
              actually walking that money to the bank. Shopify is a superb
              server. Shopify has never walked anywhere.
            </p>
            <p className="mt-4 text-body text-graphite">
              If you want the longer version of what those filings involve, we
              wrote it up in{' '}
              <Link href="/blog/sales-tax-compliance-services" className={linkClass}>
                our guide to sales tax compliance services
              </Link>
              , including how due dates differ state by state.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 1 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/flat-lay-mailers-notebook-scissors.webp`}
              alt="An overhead flat lay of padded mailers, a cardboard box, folded clothing, an open notebook and a pair of scissors on a textured blanket"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 3 */}
        <Section background="ivory" id="shop-app-exception">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The one place Shopify does remit for you
            </h2>
            <p className="mt-4 text-body text-graphite">
              There is a real exception, and it is narrow enough that it causes
              as much confusion as it resolves.
            </p>
            <p className="mt-4 text-body text-graphite">
              Shopify runs its own consumer marketplace, the Shop app. For orders
              placed there, Shopify{' '}
              <SourceLink href="https://help.shopify.com/en/manual/online-sales-channels/shop/sales-tax">
                automatically collects, remits and files taxes for all orders
                shipping to or within the United States
              </SourceLink>
              , and has done since January 1, 2025. On those sales, it genuinely
              is handling the whole job.
            </p>
            <p className="mt-4 text-body text-graphite">
              Now the trap. Shopify also has a checkout button called Shop Pay,
              which appears on your own store. Orders placed with Shop Pay on
              your own checkout are explicitly excluded from that arrangement.
              Same brand, nearly the same name, opposite tax treatment.
            </p>
            <p className="mt-4 text-body text-graphite">
              Two products separated by one word, doing opposite things to your
              liability. Whoever signed off on that naming has, indirectly, paid
              for a lot of accountants&rsquo; coffee.
            </p>
            <p className="mt-4 text-body text-graphite">
              The practical upshot: if you sell through both, your Shop app sales
              have already had tax handled and your own-store sales have not. Do
              not add them together and file the lot. That overpays, and
              unpicking it later is worse than doing it right the first time.
            </p>
          </div>
        </Section>

        {/* BODY 4 */}
        <Section background="cream" id="etsy-vs-shopify">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Why Etsy handles this and Shopify does not
            </h2>
            <p className="mt-4 text-body text-graphite">
              If you sell on Etsy as well, you have probably noticed that Etsy
              just deals with sales tax and never mentions it again. That is not
              Etsy being generous. It is state law.
            </p>
            <p className="mt-4 text-body text-graphite">
              Etsy is what states call a marketplace facilitator. Texas, for
              instance, says marketplace providers{' '}
              <SourceLink href="https://comptroller.texas.gov/taxes/sales/marketplace-providers-sellers.php">
                must collect, report and remit state and local sales and use tax
                on all sales made through a marketplace
              </SourceLink>
              , and must certify to their sellers that they are doing so. Once
              that certification exists, the seller is off the hook for those
              particular sales.
            </p>
            <p className="mt-4 text-body text-graphite">
              Your own Shopify store is not a marketplace. It is your shop.
              Shopify sold you the building; it is not standing at the till.
              Etsy runs the market and takes responsibility for every stall in
              it, which is why the two platforms behave nothing alike.
            </p>
            <p className="mt-4 text-body text-graphite">
              One detail people miss: in Texas, if you are a Texas seller selling
              through a marketplace, you are{' '}
              <SourceLink href="https://comptroller.texas.gov/taxes/sales/marketplace-providers-sellers.php">
                still responsible for holding a permit and filing your returns on
                time
              </SourceLink>
              . The marketplace covers the tax on its own sales. It does not make
              your filing obligation disappear.
            </p>
          </div>
        </Section>

        {/* BODY 5 */}
        <Section background="ivory" id="where-you-owe">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Where you owe: nexus and the thresholds that trigger it
            </h2>
            <p className="mt-4 text-body text-graphite">
              Shopify will charge tax anywhere you tell it to. Working out where
              you are actually required to is the part with real money attached,
              and it comes down to a word you will see everywhere: nexus.
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Physical nexus</strong> is the
                old rule and still applies. An office, a spare room you ship
                from, inventory in a third-party warehouse, an employee, a
                weekend market stall. If it is physically in the state, you have
                nexus there.
              </li>
              <li>
                <strong className="text-aubergine">Economic nexus</strong> is the
                one that catches online sellers. Since the Supreme Court decided{' '}
                <SourceLink href="https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf">
                  South Dakota v. Wayfair
                </SourceLink>{' '}
                in 2018, a state can require you to collect purely because of how
                much you sell into it, with no physical presence at all.
              </li>
              <li>
                <strong className="text-aubergine">The thresholds vary a lot.</strong>{' '}
                Texas, for example, sets its remote seller threshold at{' '}
                <SourceLink href="https://comptroller.texas.gov/taxes/publications/94-108.php">
                  more than $500,000 of Texas revenue in the preceding twelve
                  months
                </SourceLink>
                . Other states sit far lower. There is no national number, and
                states have adjusted theirs since 2018, so check the current
                figure rather than a number you remember.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              The genuinely strange part of economic nexus is that you can pick
              up a tax obligation in a state you have never visited, from
              customers you will never meet, because enough of them bought a $28
              mug. Nobody warns you. There is no notification. The threshold is
              simply crossed one Tuesday while you are packing orders.
            </p>
            <p className="mt-4 text-body text-graphite">
              This is also where physical location still matters more than people
              expect. If you are running a store from{' '}
              <Link href="/locations/dallas" className={linkClass}>
                Dallas or anywhere else in Texas
              </Link>
              , you have home-state nexus from day one, threshold or no
              threshold.
            </p>
          </div>
        </Section>

        {/* INLINE IMAGE 2 */}
        <Section background="ivory" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/hands-taping-shipping-box.webp`}
              alt="A pair of hands running a tape gun along the seam of a closed cardboard shipping box"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* BODY 6 */}
        <Section background="cream" id="money-isnt-yours">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              The money in your payout is not all yours
            </h2>
            <p className="mt-4 text-body text-graphite">
              This is the bookkeeping habit that prevents almost every bad
              outcome in this article, and it takes about ten minutes a month to
              build.
            </p>
            <p className="mt-4 text-body text-graphite">
              When Shopify pays you out, the sales tax is in there, mixed in with
              your actual revenue. It looks like a good month. It is a slightly
              less good month wearing a costume.
            </p>
            <p className="mt-4 text-body text-graphite">
              Collected sales tax is not income. You are holding it on behalf of
              a state that has not asked for it yet. Treated properly, it never
              touches your profit and loss as revenue at all &mdash; it sits as a
              liability until you pay it. If that distinction is fuzzy, our post
              on{' '}
              <Link href="/blog/bookkeeping-vs-accounting" className={linkClass}>
                bookkeeping versus accounting
              </Link>{' '}
              covers where those two ledgers separate.
            </p>
            <p className="mt-4 text-body text-graphite">
              Two habits, and you are most of the way there:
            </p>
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">Book it as a liability, not revenue.</strong>{' '}
                Every month, take the tax total from your Shopify reports and
                record it in a sales tax payable account. Your real revenue
                number stops lying to you immediately.
              </li>
              <li>
                <strong className="text-aubergine">Move the cash, ideally.</strong>{' '}
                A separate savings account you sweep the tax into once a month.
                Then the quarterly payment is a transfer instead of an event.
              </li>
            </ul>
            <p className="mt-4 text-body text-graphite">
              And here is the part where we talk you out of hiring anyone. If you
              sell from one state, ship mostly within it, are nowhere near
              another state&rsquo;s threshold, and have one Shopify store and no
              marketplace channels &mdash; you do not need an accountant for
              this. Register once, set the region, file on the state&rsquo;s own
              portal. It is genuinely about twenty minutes a quarter, and paying
              somebody{' '}
              <Link href="/pricing" className={linkClass}>
                a monthly fee
              </Link>{' '}
              to do it would be a waste of your money.
            </p>
            <p className="mt-4 text-body text-graphite">
              Where it stops being twenty minutes is when the states multiply.
              Four or five registrations on different schedules, a marketplace
              channel to carve out, a year of unfiled returns to catch up on
              &mdash; that is the point where{' '}
              <Link href="/services" className={linkClass}>
                handing it to someone
              </Link>{' '}
              starts costing less than doing it.
            </p>
          </div>
        </Section>

        {/* EMPHASIS */}
        <Section background="aubergine" id="what-it-costs">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              What finding out late actually costs
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              Here is the arithmetic nobody does until they have to. Say you have
              been collecting tax in a state for fourteen months without a permit
              and without filing. At an average 7% rate on $180,000 of sales into
              that state, that is roughly $12,600 sitting in your account that
              was never yours.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              You still owe all of it. Penalties and interest go on top, and they
              accrue per period, so fourteen months is not one penalty, it is a
              stack of them. Exact rates vary by state, but the shape is always
              the same: the longer it runs, the worse the multiplier.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The worse version is the one where you never charged tax at all.
              The state still wants its money. Your customers are long gone and
              you are not going to email eight hundred of them asking for another
              7%. So it comes out of your margin &mdash; on sales you have
              already spent the profit from.
            </p>
            <p className="mt-4 text-body text-ivory/85">
              The reason this article exists is that the fix is almost free if
              you do it in month one and expensive in month fourteen, and nothing
              in your Shopify admin will ever tell you which month you are in.
              Most states run voluntary disclosure programs that reduce the
              damage for people who come forward before being found. That door is
              open right up until the letter arrives.
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
              On the 1099-K question, the IRS publishes the current threshold in{' '}
              <SourceLink href="https://www.irs.gov/businesses/understanding-your-form-1099-k">
                its guidance on understanding Form 1099-K
              </SourceLink>
              . It has moved more than once recently, so check it rather than
              trusting a figure from a blog post &mdash; including this one.
            </p>

            <AuthorBio />
          </div>
        </Section>

        {/* RELATED */}
        <RelatedPosts
          items={[
            {
              href: '/blog/sales-tax-compliance-services',
              eyebrow: 'Blog',
              title: 'Sales Tax Compliance Services: What Small Businesses Need',
              blurb:
                'What is taxable, whether labor is taxed in TX, FL and NY, filing due dates, and when to handle it yourself.',
            },
            {
              href: '/blog/bookkeeping-vs-accounting',
              eyebrow: 'Blog',
              title: 'Bookkeeping vs. Accounting: What’s the Difference?',
              blurb:
                'A bookkeeper records the numbers; an accountant interprets them and files your taxes. Where the line falls and what each costs.',
            },
            {
              href: '/services',
              eyebrow: 'Services',
              title: 'Bookkeeping, tax and compliance for small businesses',
              blurb:
                'Monthly books, returns and state filings handled remotely, with a 4-business-hour email reply.',
            },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              Not sure which states you owe in?
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
