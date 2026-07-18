import Link from 'next/link';
import { LogoMonogram } from '@/components/brand/LogoMonogram';

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-we-work', label: 'How we work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-aubergine/6 bg-cream/95 backdrop-blur">
      <div className="container-content flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="NJ's Accounting — Home"
        >
          <LogoMonogram size={32} />
          <span className="hidden font-display text-[15px] font-medium tracking-[-0.01em] text-aubergine sm:inline">
            NJ&#39;s Accounting
          </span>
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
