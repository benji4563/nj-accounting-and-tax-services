import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/design-system/Section';

export const metadata: Metadata = {
  title: 'Blog — Plain-English answers for small-business owners',
  description:
    'Honest, jargon-free writing on bookkeeping, taxes, and running the money side of a small business. No lead-magnet paywalls.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'NJ’s Accounting — Blog',
    description:
      'Plain-English answers for small-business owners. Bookkeeping, taxes, and the money side of running a business.',
    url: 'https://njaccountstax.com/blog',
    type: 'website',
  },
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  minutes: number;
  cover: string;
  coverAlt: string;
};

const POSTS: Post[] = [
  {
    slug: 'tax-resolution-services',
    title: 'Tax Resolution Services: What They Actually Cover',
    excerpt:
      'Tax resolution services cover IRS payment plans, Offers in Compromise, and penalty relief. What’s real, what’s a scam, and what you can do yourself for free.',
    date: '2026-08-24',
    minutes: 9,
    cover: '/blog/tax-resolution-services/hero-desk-calculator-notices.webp',
    coverAlt:
      'A calculator, phone, pay stub and a notepad with handwritten totals spread across a desk',
  },
  {
    slug: 'how-much-does-a-tax-attorney-cost',
    title: 'How Much Does a Tax Attorney Cost? A Straight Answer',
    excerpt:
      'Real ranges by the hour and by the case, when you actually need one, and the free tax help most people never hear about.',
    date: '2026-08-10',
    minutes: 9,
    cover: '/blog/how-much-does-a-tax-attorney-cost/hero-desk-folders-and-legal-pad.webp',
    coverAlt:
      'An overhead view of a stack of manila folders tied with string, a yellow legal pad covered in handwritten notes, an antique push-button calculator, and wire-rimmed reading glasses on a worn wooden desk',
  },
  {
    slug: 'cash-basis-accounting',
    title: 'Cash Basis Accounting: What It Is and When It Works',
    excerpt:
      'Cash basis accounting counts money when it moves, not when it’s earned. What it means, who has to switch to accrual, and when it’s smart to do it anyway.',
    date: '2026-07-29',
    minutes: 9,
    cover: '/blog/cash-basis-accounting/hero-cash-drawer-and-ledger.webp',
    coverAlt:
      'An open cash drawer with neatly stacked bills and coins beside a spiral notebook of hand-ruled daily totals and a fan of paper receipts, on a sunlit wooden counter',
  },
  {
    slug: 'fund-accounting',
    title: 'What is fund accounting? A plain-English guide for nonprofits',
    excerpt:
      'Fund accounting tracks donations and grants by purpose instead of one bank total. What it means, when a spreadsheet still works, and when a CPA has to sign off.',
    date: '2026-07-25',
    minutes: 9,
    cover: '/blog/fund-accounting/hero-ledger-and-fund-folders.webp',
    coverAlt:
      'A worn ledger book, folders labeled Donations, Expenses and Volunteers, and an old adding machine with curling paper tape on a sunlit wooden desk',
  },
  {
    slug: 'can-you-do-taxes-without-w2',
    title: 'Can you do taxes without a W-2? Yes — here’s exactly how',
    excerpt:
      'The IRS has a form for exactly this. How Form 4852 works, how to pull your wage data free, and why waiting costs ten times more than owing.',
    date: '2026-07-22',
    minutes: 9,
    cover: '/blog/can-you-do-taxes-without-w2/hero-missing-w2-paperwork.webp',
    coverAlt:
      'A torn-open IRS envelope, a fan of paper pay stubs, and a laptop showing a blank tax form on a kitchen table',
  },
  {
    slug: 'do-i-need-an-accountant-for-your-small-business',
    title: 'Do you actually need an accountant for your small business?',
    excerpt:
      'Six honest signs it’s time, three signs it isn’t, the real cost math, and the questions to ask before you hire.',
    date: '2026-07-15',
    minutes: 8,
    cover: '/blog/do-i-need-an-accountant-for-your-small-business/hero-kitchen-table-shoebox.webp',
    coverAlt:
      'A small-business owner at her kitchen table with a laptop and a shoebox of paper receipts, morning window light',
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  return (
    <Section background="cream">
      <header className="mb-14 text-center">
        <div className="section-eyebrow mb-3">The blog</div>
        <h1 className="font-display text-h1 text-aubergine">
          Plain-English answers for small-business owners.
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] text-body text-graphite/80">
          Honest writing on bookkeeping, taxes, and the money side of running a
          small business. No jargon, no paywalls, no fake urgency.
        </p>
      </header>

      <ul className="grid gap-10 md:grid-cols-2">
        {POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-card bg-ivory p-6 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </div>
              <div className="mb-3 flex items-center gap-3 text-body-sm text-graphite/75">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.minutes} min read</span>
              </div>
              <h2 className="font-display text-h3 text-aubergine transition-colors group-hover:text-persimmon">
                {post.title}
              </h2>
              <p className="mt-3 text-body text-graphite/80">{post.excerpt}</p>
              <span className="mt-4 inline-block border-b-[1.5px] border-aubergine pb-0.5 text-body-sm font-medium text-aubergine transition-colors group-hover:border-persimmon group-hover:text-persimmon">
                Read the post
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
