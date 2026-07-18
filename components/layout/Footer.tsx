import Link from 'next/link';
import { LogoMonogram } from '@/components/brand/LogoMonogram';
import { GuaranteeChip, ALL_GUARANTEES } from '@/components/proof/GuaranteeChip';

export function Footer() {
  return (
    <footer className="bg-aubergine text-ivory">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-80"
              aria-label="NJ's Accounting — Home"
            >
              <LogoMonogram variant="reversed" size={36} />
            </Link>
            <p className="mt-4 max-w-xs text-body-sm text-lilac/90">
              Bookkeeping and tax services for small businesses.
              Focus on growth. We handle the finances.
            </p>
            <div className="mt-6 space-y-2 text-body-sm text-lilac/80">
              <div>
                <a href="mailto:njock@njaccountstax.com" className="hover:text-ivory">
                  njock@njaccountstax.com
                </a>
              </div>
              <div>Mon&ndash;Fri, 9am&ndash;6pm PT</div>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[12px] font-medium uppercase tracking-[0.08em] text-lilac">
              Our promises to you
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ALL_GUARANTEES.map((name) => (
                <div
                  key={name}
                  className="rounded-card bg-white/5 p-4"
                >
                  <GuaranteeChip name={name} variant="inline" className="!text-lilac" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-lilac/15 pt-6 text-body-sm text-lilac/70 md:flex-row md:items-center">
          <div>&copy; 2026 NJ&rsquo;s Accounting and Tax Services</div>
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
