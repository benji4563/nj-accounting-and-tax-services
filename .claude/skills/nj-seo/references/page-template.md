# The blog post page template

Every post is the same page, with different words in it. That is the point:
the technical SEO, the schema, the accessibility affordances, and the visual
rhythm were solved once on
`/blog/do-i-need-an-accountant-for-your-small-business` and are not
re-litigated per post.

Copy this skeleton verbatim. Change only the CONTENT constants at the top and
the prose inside each section. Do not invent new section types, new component
imports, or new class combinations — if a post seems to need one, that is a
signal to reshape the content, not the template.

File location: `app/blog/<slug>/page.tsx`

---

## Section order (fixed — never reorder, never omit)

| # | Section | `background` | `id` | Purpose |
|---|---|---|---|---|
| 1 | Hero | `cream` (`!pb-10`) | — | Breadcrumb, H1, byline, hero image |
| 2 | Answer + intro + TOC | `cream` (`!pt-4`) | — | Featured-snippet box, story open, jump links |
| 3 | Body section 1 | `ivory` | first TOC id | First H2 |
| 4 | Body section 2 | `cream` | second TOC id | |
| 5 | **Inline image** | `cream` (`!py-0`) | — | Breaks up the wall of text |
| 6 | Body section 3 | `ivory` | third TOC id | |
| 7 | Body section 4 | `cream` | fourth TOC id | |
| 8 | Body section 5 | `ivory` | fifth TOC id | |
| 9 | **Inline image** | `ivory` (`!py-0`) | — | Second visual break |
| 10 | Body section 6 | `cream` | sixth TOC id | |
| 11 | **Emphasis section** | `aubergine` | seventh TOC id | Dark block — the "cost of doing nothing" beat |
| 12 | FAQ + AuthorBio | `cream` | `faq` | 6–8 Q&As, then bio |
| 13 | RelatedPosts | (own component) | — | Exactly 3 links |
| 14 | CTA | `blush` | — | Book a call / see pricing |
| 15 | `<BackToTop />` | (outside `<article>`) | — | Long-form requirement |

Backgrounds alternate `ivory` / `cream` so sections read as distinct bands.
The single `aubergine` section is the only dark block — it earns its contrast
by carrying the emotional punch (what it costs to keep doing nothing). Never
use two dark sections; the effect dies.

---

## The file

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/design-system/Section';
import { Button } from '@/components/design-system/Button';
import { StructuredData } from '@/components/seo/StructuredData';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { BackToTop } from '@/components/blog/BackToTop';
import {
  blogPostingJsonLd,
  faqPageJsonLd,
  breadcrumbJsonLd,
} from '@/lib/structured-data';

const SLUG = '<slug>';
const TITLE = '<H1 / title tag — primary keyword near the front, 50–60 chars>';
const DESCRIPTION =
  '<150–160 chars: primary keyword + the benefit + a soft nudge>';
const PUBLISHED = '<YYYY-MM-DD>';
const MODIFIED = '<YYYY-MM-DD>';   // same as PUBLISHED on day one
const HERO = `/blog/${SLUG}/hero-<descriptive-name>.webp`;

const TOC = [
  { id: '<kebab-id>', label: '<H2 text, verbatim>' },
  // ... exactly one entry per body H2, in page order, 7 total
  { id: 'faq', label: 'Frequently asked questions' },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://njaccountstax.com/blog/${SLUG}`,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['Njock'],
    images: [
      {
        url: `https://njaccountstax.com${HERO}`,
        width: 2560,
        height: 1440,
        alt: '<literal description of the hero image>',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FAQ = [
  { q: '<question as actually searched>', a: '<2–4 sentences, direct>' },
  // 6–8 total
];

const CANONICAL_URL = `https://njaccountstax.com/blog/${SLUG}`;
const IMAGE_URL = `https://njaccountstax.com${HERO}`;

const linkClass =
  'border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon';

// Inline citation to an authoritative external source. Opens in a new tab and
// drops the referrer/opener for safety — the checklist wants rel="noopener".
function SourceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

export default function Post() {
  return (
    <>
      <StructuredData
        data={blogPostingJsonLd({
          slug: SLUG,
          title: TITLE,
          description: DESCRIPTION,
          image: IMAGE_URL,
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
        })}
      />
      <StructuredData data={faqPageJsonLd(FAQ)} />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: TITLE, path: `/blog/${SLUG}` },
        ])}
      />

      <article>
        {/* HERO */}
        <Section background="cream" className="!pb-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-body-sm text-graphite/75">
            <Link href="/" className="hover:text-persimmon">
              Home
            </Link>
            <span aria-hidden className="mx-2">
              /
            </span>
            <Link href="/blog" className="hover:text-persimmon">
              Blog
            </Link>
          </nav>

          <header className="mb-10 max-w-3xl">
            <div className="section-eyebrow mb-3">For small-business owners</div>
            <h1 className="font-display text-h1 text-aubergine">{TITLE}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-graphite/75">
              <time dateTime={PUBLISHED}>&lt;Month D, YYYY&gt;</time>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={MODIFIED}>&lt;Month D, YYYY&gt;</time>
              </span>
              <span aria-hidden>·</span>
              <span>&lt;N&gt; min read</span>
              <span aria-hidden>·</span>
              <span>Written by Njock</span>
            </div>
          </header>

          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={HERO}
              alt="<literal description — what is actually in frame>"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </figure>
        </Section>

        {/* ANSWER + INTRO + TOC */}
        <Section background="cream" className="!pt-4">
          <div className="container-prose">
            <TableOfContents items={TOC} />

            <div className="mb-10 rounded-card border-l-4 border-persimmon bg-ivory p-6 md:p-8">
              <p className="text-body-lg text-aubergine">
                <strong>Short answer:</strong> <!-- The primary keyword MUST
                appear in this sentence — this is the first-100-words rule and
                the featured-snippet target. Answer the query outright, then
                qualify. -->
              </p>
              <p className="mt-4 text-body text-graphite">
                <!-- One-line reframe. The honest caveat. -->
              </p>
            </div>

            <p className="text-body text-graphite">
              <!-- Cold open: a specific person at a specific moment. See
                   voice-and-humor.md. -->
            </p>
            <p className="mt-4 text-body text-graphite">
              <!-- The turn: they are not failing, they are outgrowing. -->
            </p>
            <p className="mt-4 text-body text-graphite">
              <!-- Bridge to the body. -->
            </p>
          </div>
        </Section>

        {/* BODY SECTION — repeat this shape per H2 */}
        <Section background="ivory" id="<toc-id>">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              &lt;H2 — matches its TOC label verbatim&gt;
            </h2>
            <p className="mt-4 text-body text-graphite">
              &lt;lede&gt;
            </p>

            {/* numbered list — use ONLY when order/count carries meaning */}
            <ol className="mt-8 space-y-6 text-body text-graphite">
              <li>
                <strong className="text-aubergine">
                  1. &lt;the claim as a sentence&gt;
                </strong>{' '}
                &lt;the evidence, the number, the consequence&gt;
              </li>
            </ol>

            {/* unordered list */}
            <ul className="mt-8 space-y-4 text-body text-graphite">
              <li>
                <strong className="text-aubergine">&lt;label&gt;</strong>{' '}
                &lt;detail&gt;
              </li>
            </ul>
          </div>
        </Section>

        {/* INLINE IMAGE — after body section 2 and again after section 5 */}
        <Section background="cream" className="!py-0">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-card">
            <Image
              src={`/blog/${SLUG}/<descriptive-name>.webp`}
              alt="<literal description>"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Section>

        {/* EMPHASIS — the only dark section */}
        <Section background="aubergine" id="<toc-id>">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-ivory">
              &lt;the cost of doing nothing&gt;
            </h2>
            <p className="mt-4 text-body text-ivory/85">
              &lt;the real arithmetic&gt;
            </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section background="cream" id="faq">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-aubergine">
              Frequently asked questions
            </h2>
            <dl className="mt-8 divide-y divide-aubergine/10">
              {FAQ.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="font-display text-h4 text-aubergine">
                    {item.q}
                  </dt>
                  <dd className="mt-3 text-body text-graphite">{item.a}</dd>
                </div>
              ))}
            </dl>

            <AuthorBio />
          </div>
        </Section>

        {/* RELATED — exactly 3 */}
        <RelatedPosts
          items={[
            { href: '<internal path>', eyebrow: '<label>', title: '<title>', blurb: '<one sentence>' },
            { href: '<internal path>', eyebrow: '<label>', title: '<title>', blurb: '<one sentence>' },
            { href: '<internal path>', eyebrow: '<label>', title: '<title>', blurb: '<one sentence>' },
          ]}
        />

        {/* CTA */}
        <Section background="blush">
          <div className="container-prose text-center">
            <h2 className="font-display text-h2 text-aubergine">
              &lt;low-pressure invitation&gt;
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-graphite">
              Book a free 15-minute discovery call with Njock. No pitch. We
              just listen, look at what you have, and tell you honestly
              whether we&rsquo;re a fit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" href="/contact" showArrow>
                Book a free 15-min call
              </Button>
              <Button variant="secondary" href="/pricing">
                See our pricing
              </Button>
            </div>
            <p className="mt-8 text-body-sm text-graphite/75">
              Prefer to read on your own?{' '}
              <Link href="/blog" className={linkClass}>
                More posts from the blog
              </Link>
              .
            </p>
          </div>
        </Section>
      </article>

      <BackToTop />
    </>
  );
}
```

---

## Rules that are easy to get wrong

**Paragraph spacing is explicit.** Every `<p>` after the first in a block
carries `className="mt-4 text-body text-graphite"`. There is no prose plugin
and no global paragraph margin — Tailwind's preflight zeroes them. A bare
`<p>` will collide with the one above it.

> Known defect in the first post: its intro block wraps bare `<p>` tags in a
> `div.prose-post`, and `.prose-post` **is not defined anywhere in the
> codebase**. Those three paragraphs render with zero separation. Do not copy
> that wrapper. Use explicit `mt-4` as shown above. (Fixing the original post
> is a separate, approved-change task — not something this skill does
> silently.)

**Curly quotes break the build.** Write apostrophes and quotes as HTML
entities in JSX text (`&rsquo;` `&ldquo;` `&rdquo;`) or as straight ASCII
inside string literals. A literal `'` (U+2019) used as a JavaScript string
delimiter is a hard SWC parse error, and some editors substitute it silently.
If `next build` fails with a cryptic parse error on a file that looks fine,
scan for U+2018/U+2019/U+201C/U+201D.

**Colour contrast is fixed, not a suggestion.** Muted text is
`text-graphite/75` — never `/50` or `/60`, which fail WCAG AA. Persimmon as a
*text* colour must be `text-persimmon-deep`; plain `persimmon` is for
backgrounds, borders, and dots only. The site scores 100/100/100/100 on
Lighthouse; these two rules are most of why.

**`loading="lazy"` on inline images, `priority` on the hero.** The hero is
the LCP element. Inline images below the fold must not compete with it.

**TOC ids and H2 text must match exactly.** The TOC label is the H2 string,
character for character. The `id` on `<Section>` is what the jump link
targets. A mismatch silently breaks navigation.

---

## After the page file: three registrations

A post is not shipped until it appears in all three. Every one of these is a
separate file edit and all three are required.

1. **`app/blog/page.tsx`** — prepend an entry to the `POSTS` array (newest
   first): `slug`, `title`, `excerpt`, `date`, `minutes`, `cover`, `coverAlt`.
2. **`app/sitemap.xml/route.ts`** — add
   `{ path: '/blog/<slug>', priority: '0.7', changefreq: 'monthly' }`.
3. **`Keywords for accountant/used-keywords.md`** — append the row
   `| <date> | <primary keyword> | /blog/<slug> | <cluster> |` so the keyword
   is never targeted again.
