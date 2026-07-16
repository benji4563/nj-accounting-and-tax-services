import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/design-system/Section';
import { PersonalBio } from '@/components/proof/PersonalBio';
import { CtaDrop } from '@/components/home/CtaDrop';

export const metadata: Metadata = {
  title: 'About Njock — The Real Person Doing Your Books',
  description:
    'Njock founded NJ’s Accounting because small businesses deserve an accountant who answers the email. QuickBooks-certified, working on CFO certification. You email us, Njock replies.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Meet Njock — the person doing your books',
    description:
      'Not a receptionist, not a bot, not a junior. When you email us, Njock is the one who answers.',
    url: 'https://njaccountstax.com/about',
  },
};

export default function AboutPage() {
  console.log('[page] /about rendered');
  return (
    <>
      <Section background="cream">
        <SectionHeader
          eyebrow="About"
          title={<>You want to know the person doing your books. Fair.</>}
        />
        <div className="mx-auto max-w-content">
          <PersonalBio photoSrc="/njock.jpg" />
        </div>
      </Section>
      <Section background="ivory">
        <div className="mx-auto max-w-prose">
          <h3 className="font-display text-h3 text-aubergine">
            What we believe about small business.
          </h3>
          <ol className="mt-6 space-y-6 text-body-lg text-graphite">
            <li>
              <span className="font-medium text-aubergine">
                1. Small business is hard enough already.
              </span>
              <p className="mt-1 text-body">
                Your accountant should reduce the number of things you have to
                worry about &mdash; not add to them.
              </p>
            </li>
            <li>
              <span className="font-medium text-aubergine">
                2. Transparency isn&rsquo;t optional.
              </span>
              <p className="mt-1 text-body">
                Prices are on the pricing page. Response-time is on the
                homepage. Guarantees are in writing. If we&rsquo;re not willing
                to publish it, we shouldn&rsquo;t be doing it.
              </p>
            </li>
            <li>
              <span className="font-medium text-aubergine">
                3. Your accountant should sound like a person.
              </span>
              <p className="mt-1 text-body">
                We don&rsquo;t use words like &ldquo;leverage&rdquo; or
                &ldquo;holistic.&rdquo; We use words like &ldquo;deduction&rdquo;
                and &ldquo;deadline&rdquo; and &ldquo;here&rsquo;s what to do
                next.&rdquo;
              </p>
            </li>
          </ol>
        </div>
      </Section>
      <CtaDrop />
    </>
  );
}
