import { POSTS } from '@/lib/posts';

/**
 * RSS feed.
 *
 * Added 2026-09-25. AI crawlers and answer engines use feeds as a freshness
 * and discovery signal — the geo-optimizer audit scored ai_discovery 0/6,
 * partly for having no feed. It is linked from <head> via the `alternates`
 * metadata in app/layout.tsx.
 */

const SITE_URL = 'https://njaccountstax.com';
const TITLE = "NJ's Accounting and Tax Services — Blog";
const DESCRIPTION =
  'Plain-English answers for small-business owners on bookkeeping, taxes, and the money side of running a business. Written by Njock Simon.';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Wrap text in CDATA for <content:encoded>.
 *
 * CDATA is used rather than entity-escaping because this carries the LinkedIn
 * post copy verbatim — newlines, arrows, em dashes and quotes all have to
 * survive intact through to Zapier.
 *
 * The one sequence CDATA cannot contain is its own terminator. Splitting it
 * across two sections is the standard trick: the parser rejoins the text and
 * the consumer sees an unbroken `]]>`.
 */
function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

export function GET() {
  const items = POSTS.map((post) => {
    const url = `${SITE_URL}/blog/${post.slug}`;
    // Dates in lib/posts.ts are plain YYYY-MM-DD; anchor them to midday UTC so
    // the RFC-822 date never rolls backwards across a timezone boundary.
    const pubDate = new Date(`${post.date}T12:00:00Z`).toUTCString();
    // <content:encoded> carries the ready-to-publish LinkedIn copy. The
    // "RSS by Zapier" trigger exposes it, and the Zap maps it straight onto
    // LinkedIn's Update Content field — which is how a new article posts
    // itself with its real hook instead of a templated title-and-link.
    // Falls back to the excerpt so an older post without bespoke copy still
    // produces something publishable rather than an empty update.
    const social = post.linkedin?.trim() || post.excerpt;

    return (
      `    <item>\n` +
      `      <title>${escapeXml(post.title)}</title>\n` +
      `      <link>${url}</link>\n` +
      `      <guid isPermaLink="true">${url}</guid>\n` +
      `      <pubDate>${pubDate}</pubDate>\n` +
      `      <description>${escapeXml(post.excerpt)}</description>\n` +
      `      <content:encoded>${cdata(social)}</content:encoded>\n` +
      `      <enclosure url="${SITE_URL}${post.cover}" type="image/webp" />\n` +
      `      <author>njock@njaccountstax.com (Njock Simon)</author>\n` +
      `    </item>`
    );
  }).join('\n');

  const lastBuild = POSTS.length
    ? new Date(`${POSTS[0].date}T12:00:00Z`).toUTCString()
    : new Date().toUTCString();

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" ` +
    `xmlns:content="http://purl.org/rss/1.0/modules/content/">\n` +
    `  <channel>\n` +
    `    <title>${escapeXml(TITLE)}</title>\n` +
    `    <link>${SITE_URL}/blog</link>\n` +
    `    <description>${escapeXml(DESCRIPTION)}</description>\n` +
    `    <language>en-us</language>\n` +
    `    <lastBuildDate>${lastBuild}</lastBuildDate>\n` +
    `    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />\n` +
    items +
    `\n  </channel>\n` +
    `</rss>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
