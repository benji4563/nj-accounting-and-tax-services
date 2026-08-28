const SITE_URL = 'https://njaccountstax.com';

const ROUTES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/how-we-work', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'yearly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog/why-is-tax-relief-services-calling-me', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/do-seniors-have-to-file-taxes', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/is-fresh-start-tax-relief-legit', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/when-to-hire-a-tax-attorney', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/bookkeeping-vs-accounting', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/tax-resolution-services', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/accrual-basis-accounting', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/how-much-does-a-tax-attorney-cost', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/cash-basis-accounting', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/fund-accounting', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/do-i-need-an-accountant-for-your-small-business', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/can-you-do-taxes-without-w2', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/cincinnati', priority: '0.8', changefreq: 'monthly' },
  { path: '/locations/san-diego', priority: '0.8', changefreq: 'monthly' },
  { path: '/locations/chicago', priority: '0.8', changefreq: 'monthly' },
  { path: '/locations/cleveland', priority: '0.8', changefreq: 'monthly' },
  { path: '/locations/raleigh', priority: '0.8', changefreq: 'monthly' },
  { path: '/locations/charlotte', priority: '0.8', changefreq: 'monthly' },
  { path: '/locations/dallas', priority: '0.8', changefreq: 'monthly' },
];

export function GET() {
  const lastmod = new Date().toISOString().split('T')[0];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    ROUTES.map(
      (r) =>
        `  <url>\n` +
        `    <loc>${SITE_URL}${r.path}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>${r.changefreq}</changefreq>\n` +
        `    <priority>${r.priority}</priority>\n` +
        `  </url>`,
    ).join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
