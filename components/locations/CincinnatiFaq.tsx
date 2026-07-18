import { Section } from '@/components/design-system/Section';

export const CINCINNATI_FAQ = [
  {
    q: 'Do you actually work with Cincinnati small businesses, or is this just an SEO page?',
    a: 'We work with small businesses across the Cincinnati metro — every neighborhood we listed above, plus Newport and Covington on the Kentucky side. All work is delivered remotely, but we know Ohio and Hamilton County filing rules cold. If we don’t think we’re a fit for your situation, we’ll tell you on the discovery call — free.',
  },
  {
    q: 'How does Cincinnati’s municipal income tax affect my small business?',
    a: 'Cincinnati has its own city income tax that applies to net profits earned within city limits — this is separate from federal, Ohio state, and any home-city tax if you live in a Cincinnati suburb. Most owners either forget to file or over-withhold. During onboarding we map out exactly which municipalities you owe and set the payment schedule so nothing is a surprise.',
  },
  {
    q: 'What do I do about Ohio sales tax and the Hamilton County local rate?',
    a: 'Ohio state sales tax plus Hamilton County’s local addition applies to most goods and some services sold in Cincinnati. If you sell online (Shopify, Etsy, direct), post-Wayfair nexus rules mean you may owe tax in states you’ve never visited too. We map your actual nexus exposure and file where you owe — nowhere you don’t.',
  },
  {
    q: 'Can you handle Ohio CAT (Commercial Activity Tax) filings?',
    a: 'Yes. Ohio’s Commercial Activity Tax applies once your gross receipts cross a threshold set by the state — the exact number is worth confirming with us on your discovery call because it has changed in recent years. We handle the annual filing and quarterly minimums as part of Growth and Full-Service plans.',
  },
  {
    q: 'Are you a CPA firm? Do I need one for a Cincinnati small business?',
    a: 'Njock is an accountant, not a CPA — which is honestly what most small businesses actually need. If your situation calls for CPA-level representation (Ohio Department of Taxation audit, IRS field audit, complex M&A), we\'ll say so upfront and either bring in a CPA partner or refer you out. No ego, no upsell.',
  },
  {
    q: 'Do you have a Cincinnati office I can visit?',
    a: 'No — and we\'re transparent about it. We keep overhead low so we can charge $299/mo instead of $600. Every client works with us over email, video, and phone. If in-person matters to you, we\'ll tell you honestly on the discovery call so you can decide.',
  },
];

const SOURCES = [
  { label: 'Ohio Department of Taxation', url: 'https://tax.ohio.gov/' },
  { label: 'IRS Small Business Resources', url: 'https://www.irs.gov/businesses/small-businesses-self-employed' },
  { label: 'South Dakota v. Wayfair (Nexus)', url: 'https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf' },
];

export function CincinnatiFaq() {
  return (
    <Section background="cream">
      <div className="container-prose">
        <div className="section-eyebrow mb-3">Cincinnati-specific questions</div>
        <h2 className="font-display text-h2 text-aubergine">
          Questions Cincinnati small-business owners ask us most.
        </h2>
        <dl className="mt-10 divide-y divide-aubergine/10">
          {CINCINNATI_FAQ.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="font-display text-h4 text-aubergine">{item.q}</dt>
              <dd className="mt-3 text-body text-graphite">{item.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 rounded-card border border-aubergine/10 bg-ivory/50 px-6 py-5">
          <div className="text-body-sm font-medium text-aubergine">Helpful resources</div>
          <ul className="mt-3 space-y-1.5 text-body-sm text-graphite">
            {SOURCES.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-aubergine/30 pb-0.5 hover:border-persimmon hover:text-persimmon"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
