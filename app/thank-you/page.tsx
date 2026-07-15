import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/design-system/Section';
import { Card } from '@/components/design-system/Card';
import { Button } from '@/components/design-system/Button';
import { CheckCircle2, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thanks — we’ll be in touch',
  description:
    'Your message is in. Njock will email you within 4 business hours. While you wait, grab the free 5-Receipts guide.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thank-you' },
};

export default function ThankYouPage() {
  console.log('[page] /thank-you rendered');
  return (
    <Section background="cream">
      <div className="mx-auto max-w-prose text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage">
          <CheckCircle2 size={30} strokeWidth={1.5} />
        </div>
        <SectionHeader
          eyebrow="Got it"
          title={<>Thanks. Njock will email you within 4 business hours.</>}
        />

        <div className="text-left">
          <Card>
            <h3 className="font-display text-h3 !text-aubergine">
              While you wait &mdash; one small gift.
            </h3>
            <p className="mt-3 text-body text-graphite">
              Most small-business owners overpay their taxes because of receipts
              they didn&rsquo;t save. Here are the five most commonly forgotten
              &mdash; and the exact dollar amount they cost. Free, 1-pager,
              no email required.
            </p>
            <div className="mt-6">
              <a
                href="/lead-magnet/5-receipts.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-persimmon px-6 py-3 text-body-sm font-medium text-ivory shadow-persimmon transition-all duration-200 hover:-translate-y-0.5 hover:bg-persimmon-hover"
              >
                <Download size={16} strokeWidth={2} />
                Download the PDF
              </a>
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/" variant="tertiary">
            &larr; Back to the homepage
          </Button>
        </div>
      </div>
    </Section>
  );
}
