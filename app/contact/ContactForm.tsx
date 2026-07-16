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
      if (!res.ok) throw new Error('Something went wrong');
      router.push('/thank-you');
    } catch (err) {
      setError(
        'We could not send your message. Please try again, or email njock@njaccountstax.com directly.'
      );
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Your name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone (optional)" name="phone" type="tel" />
      <Field label="Business name" name="business_name" />
      <div>
        <Label>Yearly revenue</Label>
        <select
          name="revenue_range"
          className="mt-2 w-full rounded border-[1.5px] border-fog bg-ivory px-4 py-3 text-body text-graphite focus:border-persimmon focus:outline-none"
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
        <Label>What&rsquo;s on your mind?</Label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded border-[1.5px] border-fog bg-ivory px-4 py-3 text-body text-graphite focus:border-persimmon focus:outline-none"
          placeholder="Tell us anything — behind on books, tax question, considering a switch…"
        />
      </div>
      <label className="flex items-start gap-3 text-body-sm text-graphite">
        <input
          type="checkbox"
          name="switching_from_accountant"
          value="true"
          className="mt-1 h-4 w-4 accent-persimmon"
        />
        I&rsquo;m switching from another accountant (I&rsquo;ll get 50% off my first month)
      </label>
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

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[13px] font-medium uppercase tracking-[0.04em] text-aubergine">
      {children}
    </span>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded border-[1.5px] border-fog bg-ivory px-4 py-3 text-body text-graphite focus:border-persimmon focus:outline-none"
      />
    </div>
  );
}
