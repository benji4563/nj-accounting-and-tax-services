import Link from 'next/link';
import { LogoMonogram } from '@/components/brand/LogoMonogram';
import { GuaranteeChip, ALL_GUARANTEES } from '@/components/proof/GuaranteeChip';
import { LOCATIONS } from '@/lib/locations';
import { latestPosts } from '@/lib/posts';

/**
 * Sitewide footer navigation.
 *
 * Rebuilt 2026-09-25. The previous footer linked only to Home and Contact,
 * which meant the seven /locations/* pages received no internal links from
 * anywhere on the site — a 🔴 finding in the audit, and part of why they
 * ranked for nothing. Every page now passes authority to every money page and
 * every city page.
 */

const SERVICE_LINKS = [
  { href: '/services', label: 'What we do' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-we-work', label: 'How we work' },
  { href: '/contact', label: 'Get a quote' },
];

const COMPANY_LINKS = [
  { href: '/about', label: 'About Njock' },
  { href: '/blog', label: 'Blog' },
  { href: '/rss.xml', label: 'RSS feed' },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 text-[12px] font-medium uppercase tracking-[0.08em] text-lilac">
        {title}
      </h2>
      {children}
    </div>
  );
}

const linkClass =
  'text-body-sm text-lilac/80 transition-colors hover:text-ivory';

export function Footer() {
  const recent = latestPosts(3);

  return (
    <footer className="bg-aubergine text-ivory">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-80"
              aria-label="NJ's Accounting — Home"
            >
              <LogoMonogram variant="reversed" size={36} />
            </Link>
            <p className="mt-4 max-w-xs text-body-sm text-lilac/90">
              Bookkeeping and tax services for small businesses, run by Njock
              Simon. Focus on growth. We handle the finances.
            </p>
            <div className="mt-6 space-y-2 text-body-sm text-lilac/80">
              <div>
                <a
                  href="mailto:njock@njaccountstax.com"
                  className="hover:text-ivory"
                >
                  njock@njaccountstax.com
                </a>
              </div>
              <div>Mon&ndash;Fri, 9am&ndash;6pm PT</div>
            </div>
          </div>

          <FooterColumn title="Services">
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mb-4 mt-8 text-[12px] font-medium uppercase tracking-[0.08em] text-lilac">
              Company
            </h2>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Where we work">
            <ul className="space-y-2.5">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className={linkClass}>
                    {loc.name}
                    <span className="text-lilac/50">, {loc.region}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-[22ch] text-body-sm text-lilac/60">
              Remote-first, so we serve small businesses nationwide.
            </p>
          </FooterColumn>

          <FooterColumn title="Latest writing">
            <ul className="space-y-4">
              {recent.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-body-sm text-lilac/80 transition-colors hover:text-ivory"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-5 inline-block border-b-[1.5px] border-lilac/50 pb-0.5 text-body-sm font-medium text-lilac transition-colors hover:border-ivory hover:text-ivory"
            >
              All articles
            </Link>
          </FooterColumn>
        </div>

        <div className="mt-14">
          <h2 className="mb-4 text-[12px] font-medium uppercase tracking-[0.08em] text-lilac">
            Our promises to you
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ALL_GUARANTEES.map((name) => (
              <div key={name} className="rounded-card bg-white/5 p-4">
                <GuaranteeChip
                  name={name}
                  variant="inline"
                  className="!text-lilac"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-lilac/15 pt-6 text-body-sm text-lilac/70 md:flex-row md:items-center">
          <div>
            &copy; 2026 NJ&rsquo;s Accounting and Tax Services &middot; founded by
            Njock Simon
          </div>
          <div>
            Built with care.{' '}
            <Link href="/contact" className="underline hover:text-ivory">
              Let&rsquo;s talk.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
