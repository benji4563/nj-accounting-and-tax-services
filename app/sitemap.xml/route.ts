import { POSTS } from '@/lib/posts';
import { LOCATIONS } from '@/lib/locations';

/**
 * XML sitemap.
 *
 * Rewritten 2026-09-25 to build the blog and location entries from
 * lib/posts.ts and lib/locations.ts rather than a hand-maintained list. The
 * old version required remembering to add each new post in three places; this
 * one cannot drift out of sync with the site.
 *
 * Blog entries now carry their real publication date as <lastmod> instead of
 * today's date. Claiming every page changed today is a weak freshness signal —
 * crawlers discount a sitemap where everything is always "just updated".
 */

const SITE_URL = 'https://njaccountstax.com';

type Entry = { path: string; priority: string; changefreq: string; lastmod?: string };

const STATIC_ROUTES: Entry[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/how-we-work', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'yearly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
];

export function GET() {
  const today = new Date().toISOString().split('T')[0];

  const entries: Entry[] = [
    ...STATIC_ROUTES.map((r) => ({ ...r, lastmod: r.lastmod ?? today })),
    ...POSTS.map((p) => ({
      path: `/blog/${p.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: p.date,
    })),
    ...LOCATIONS.map((l) => ({
      path: `/locations/${l.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: today,
    })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map(
        (r) =>
          `  <url>\n` +
          `    <loc>${SITE_URL}${r.path}</loc>\n` +
          `    <lastmod>${r.lastmod}</lastmod>\n` +
          `    <changefreq>${r.changefreq}</changefreq>\n` +
          `    <priority>${r.priority}</priority>\n` +
          `  </url>`,
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
