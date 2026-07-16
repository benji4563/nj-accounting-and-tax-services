import Link from 'next/link';

export function AuthorBio() {
  return (
    <aside
      aria-label="About the author"
      className="mt-16 rounded-card border-l-4 border-persimmon bg-ivory p-6 md:p-8"
    >
      <div className="section-eyebrow mb-3">About the author</div>
      <h3 className="font-display text-h4 text-aubergine">Njock</h3>
      <p className="mt-3 text-body text-graphite">
        Co-founder and CEO of NJ&rsquo;s Accounting and Tax Services.
        QuickBooks-certified, currently working on a CFO certification, and
        the person who actually answers your email. If you write to us,
        that&rsquo;s Njock &mdash; not a receptionist, not a bot, not a
        junior.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-body-sm">
        <Link
          href="/about"
          className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
        >
          More about Njock
        </Link>
        <a
          href="mailto:njock@njaccountstax.com"
          className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
        >
          njock@njaccountstax.com
        </a>
      </div>
    </aside>
  );
}
