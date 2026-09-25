import Link from 'next/link';
import { Section } from '@/components/design-system/Section';

/**
 * Homepage depth + qualification.
 *
 * Added 2026-09-25. The audit measured the homepage at 684 words with a 4%
 * text-to-HTML ratio, which DataForSEO flags as `low_content_rate`. This
 * section adds real substance rather than filler, and doubles as a
 * qualification filter so the contact form gets better-matched enquiries.
 *
 * Everything here describes situations and the firm's own policies. It makes
 * no claims about specific clients or results — there are no case studies to
 * cite yet, and inventing them is not an option.
 */

const GOOD_FIT = [
  {
    title: 'You are behind and slightly embarrassed about it',
    body: 'Eighteen months of unopened bank statements is not a disqualifier here, it is a Tuesday. We build books from scratch regularly and we do not editorialise about how you got there.',
  },
  {
    title: 'You want one price, not a meter running',
    body: 'If you have ever hesitated to ask your accountant a quick question because you were not sure it would cost you, that is the thing we built the pricing to fix. Under fifteen minutes is included, always.',
  },
  {
    title: 'You are a sole trader, LLC, or small S-corp',
    body: 'Typically one to fifteen people, under a few million in revenue, one or two states. Service businesses, trades, e-commerce, consultants, agencies, nonprofits.',
  },
  {
    title: 'You would rather email than schedule a call',
    body: 'Most things do not need a meeting. You email, a real accountant replies within four business hours, and you get on with your day.',
  },
];

const BAD_FIT = [
  {
    title: 'You need same-day, in-person, every week',
    body: 'We are remote-first. If your business genuinely needs someone physically in your office on a regular schedule, a local firm will serve you better and we will say so.',
  },
  {
    title: 'You are looking for aggressive tax positions',
    body: 'We will find every deduction you are entitled to and we will not invent ones you are not. If the goal is to push into grey areas, we are the wrong firm.',
  },
  {
    title: 'You are a venture-backed company with a CFO',
    body: 'Multi-entity consolidations, revenue recognition at scale, and audit-ready GAAP reporting for a board are a different job. You want a controller, not us.',
  },
];

export function WhoWeFit() {
  return (
    <Section background="ivory" id="who-we-fit">
      <div className="container-prose">
        <div className="section-eyebrow mb-3">Before you enquire</div>
        <h2 className="font-display text-h2 text-aubergine">
          We are a good fit for some businesses and a bad fit for others.
          Here is which.
        </h2>
        <p className="mt-5 text-body-lg text-graphite">
          Most accounting websites imply they are right for everyone. That
          wastes a call for you and for us, so here is the honest version
          before you fill in anything.
        </p>

        <h3 className="mt-12 font-display text-h3 text-aubergine">
          You will probably like working with us if&hellip;
        </h3>
        <dl className="mt-6 space-y-7">
          {GOOD_FIT.map((item) => (
            <div key={item.title} className="border-l-4 border-persimmon pl-5 md:pl-6">
              <dt className="font-display text-h4 text-aubergine">{item.title}</dt>
              <dd className="mt-2 text-body text-graphite">{item.body}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-14 font-display text-h3 text-aubergine">
          You should probably hire someone else if&hellip;
        </h3>
        <dl className="mt-6 space-y-7">
          {BAD_FIT.map((item) => (
            <div key={item.title} className="border-l-4 border-aubergine/25 pl-5 md:pl-6">
              <dt className="font-display text-h4 text-aubergine">{item.title}</dt>
              <dd className="mt-2 text-body text-graphite">{item.body}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-body text-graphite">
          Not sure you need anyone yet? That is a fair question and we would
          rather you answer it honestly than hire us by default. The{' '}
          <a
            href="https://www.irs.gov/businesses/small-businesses-self-employed"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
          >
            IRS Small Business and Self-Employed hub
          </a>{' '}
          covers the federal rules for free, and{' '}
          <Link
            href="/services#official-sources"
            className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
          >
            we link the specific pages we work from
          </Link>{' '}
          rather than asking you to take our word for anything.
        </p>

        <div className="mt-12 rounded-card bg-blush px-6 py-6 md:px-8">
          <p className="text-body-lg text-aubergine">
            Still sounds like a fit? The next step is a short email, not a
            sales call. Tell us roughly what shape your books are in and we
            will tell you what it would cost and how long it would take.
          </p>
          <p className="mt-4 text-body-sm text-graphite">
            <Link
              href="/contact"
              className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
            >
              Get a quote
            </Link>
            {' · '}
            <Link
              href="/pricing"
              className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
            >
              See the three plans
            </Link>
            {' · '}
            <Link
              href="/blog/do-i-need-an-accountant-for-your-small-business"
              className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
            >
              Do you even need an accountant yet?
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
