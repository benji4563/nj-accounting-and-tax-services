import Link from 'next/link';
import { Button } from '@/components/design-system/Button';

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-we-work', label: 'How we work' },
  { href: '/about', label: 'About' },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-aubergine/6 bg-cream/95 backdrop-blur">
      <div className="container-content flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-baseline gap-1.5 font-display text-[22px] font-medium tracking-[-0.02em] text-aubergine transition-colors hover:text-persimmon"
        >
          NJ<span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-persimmon" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm font-medium text-graphite transition-colors hover:text-persimmon"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded bg-aubergine px-4 py-2.5 text-[13px] font-medium text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-aubergine/90"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
