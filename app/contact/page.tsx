import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/design-system/Section';
import { ContactForm } from './ContactForm';
import { Calendar, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact NJ’s Accounting — Book a Free 15-Min Discovery Call',
  description:
    'Two easy ways to reach us: book a 15-minute discovery call with Njock (no pitch), or send a message and we’ll reply within 4 business hours. Small-business bookkeeping and tax.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact us — book a 15-min discovery call',
    description:
      'Book a time or send a message. Reply within 4 business hours, guaranteed.',
    url: 'https://booksbynj.com/contact',
  },
};

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || 'njock/discovery';

export default function ContactPage() {
  console.log('[page] /contact rendered');
  return (
    <>
      <Section background="cream">
        <SectionHeader
          eyebrow="Two easy ways"
          title={<>You&rsquo;re ready to talk. Here&rsquo;s how.</>}
        />

        <div className="mx-auto grid max-w-content gap-8 md:grid-cols-2">
          <div className="rounded-card bg-ivory p-8 shadow-card">
            <div className="flex items-center gap-3 text-aubergine">
              <Calendar size={22} strokeWidth={1.5} />
              <h3 className="font-display text-h3 !text-aubergine">
                Book a 15-min call
              </h3>
            </div>
            <p className="mt-3 text-body text-graphite">
              Pick a time. No pitch. Njock will look at where you are and tell
              you if we can help.
            </p>
            <a
              href={`https://cal.com/${CAL_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded bg-aubergine px-6 py-4 text-center text-body font-medium text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-aubergine/90"
            >
              Open the calendar
            </a>
          </div>

          <div className="rounded-card bg-ivory p-8 shadow-card">
            <div className="flex items-center gap-3 text-aubergine">
              <Mail size={22} strokeWidth={1.5} />
              <h3 className="font-display text-h3 !text-aubergine">
                Write us instead
              </h3>
            </div>
            <p className="mt-3 text-body text-graphite">
              Prefer email? Send a note. Njock replies within 4 business
              hours &mdash; guaranteed, in writing.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-body-sm text-graphite/75">
          Whichever you pick, you&rsquo;ll hear from a real person within 4
          business hours. That&rsquo;s the promise.
        </p>
      </Section>
    </>
  );
}
