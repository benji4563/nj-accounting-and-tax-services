'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const REVENUE_RANGES = [
  { value: '<100k', label: 'Under $100k' },
  { value: '100k-500k', label: '$100k – $500k' },
  { value: '500k-2m', label: '$500k – $2M' },
  { value: '2m+', label: '$2M+' },
];

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        // The API explains exactly what went wrong and how else to reach us.
        // Prefer its message over a generic one so the visitor is not left
        // guessing whether we received anything.
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || 'Something went wrong');
      }
      router.push('/thank-you');
    } catch (err) {
      setError(
        err instanceof Error && err.message !== 'Something went wrong'
          ? err.message
          : 'We could not send your message. Please try again, or email njock@njaccountstax.com directly.'
      );
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Your name" name="name" required autoComplete="name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
      <Field label="Business name" name="business_name" autoComplete="organization" />
      <div>
        <Label htmlFor="field-revenue_range">Yearly revenue</Label>
        <select
          id="field-revenue_range"
          name="revenue_range"
          className={FIELD_CLASS}
        >
          <option value="">Prefer not to say</option>
          {REVENUE_RANGES.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="field-message">What&rsquo;s on your mind?</Label>
        <textarea
          id="field-message"
          name="message"
          required
          rows={5}
          className={FIELD_CLASS}
          placeholder="Tell us anything — behind on books, tax question, considering a switch…"
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="field-switching_from_accountant"
          type="checkbox"
          name="switching_from_accountant"
          value="true"
          className="mt-1 h-4 w-4 accent-persimmon"
        />
        <label
          htmlFor="field-switching_from_accountant"
          className="text-body-sm text-graphite"
        >
          I&rsquo;m switching from another accountant (I&rsquo;ll get 50% off my
          first month)
        </label>
      </div>
      <input type="hidden" name="source" value="/contact" />

      {error && (
        <div className="rounded bg-persimmon/10 p-3 text-body-sm text-warning">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded bg-persimmon px-6 py-4 text-body font-medium text-ivory shadow-persimmon transition-all duration-200 hover:-translate-y-0.5 hover:bg-persimmon-hover disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Send message'}
      </button>

      <p className="text-center text-body-sm text-graphite/70">
        You&rsquo;ll hear from Njock personally within 4 business hours.
      </p>
    </form>
  );
}

/**
 * A real <label htmlFor>, not a styled <span>.
 *
 * These were spans until 2026-09-25, which meant no field on this form was
 * programmatically labelled: screen readers announced unlabelled inputs, and
 * the geo-optimizer flagged the form as unusable by AI agents. `htmlFor` also
 * makes the label text clickable, which is a real usability win on mobile.
 */
function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[13px] font-medium uppercase tracking-[0.04em] text-aubergine"
    >
      {children}
    </label>
  );
}

const FIELD_CLASS =
  'mt-2 w-full rounded border-[1.5px] border-fog bg-ivory px-4 py-3 text-body text-graphite focus:border-persimmon focus:outline-none';

function Field({
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={FIELD_CLASS}
      />
    </div>
  );
}
