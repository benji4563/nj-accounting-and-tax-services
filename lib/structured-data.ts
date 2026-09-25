const SITE_URL = 'https://njaccountstax.com';
const BUSINESS_NAME = 'NJ’s Accounting and Tax Services';
const BUSINESS_EMAIL = 'hello@njaccountstax.com';
const FOUNDER = 'Njock Simon';

/**
 * Entity disambiguation — the "NJ" problem.
 *
 * Google currently resolves the "NJ" token in our brand to the state of New
 * Jersey: we do not rank in the top 25 for our own brand term, and position 1
 * belongs to njatservices.com. "NJ" is short for Njock, the founder, and the
 * firm serves small businesses nationwide — it has no connection to New Jersey.
 *
 * Every signal below exists to tell Google and AI answer engines that:
 *   1. NJ = Njock Simon (a person), not New Jersey (a place)
 *   2. the service area is the whole United States
 *   3. this is a distinct entity from the similarly-named NJ firms
 *
 * Do not "simplify" alternateName or the founder-forward description away.
 */
export const SAME_AS: string[] = [
  // Add real profile URLs here as they go live. Each one is a Knowledge Graph
  // pillar link that helps Google resolve us as a distinct entity.
  // Leave this list empty rather than pointing at a profile that does not
  // exist — a 404 in sameAs is a negative trust signal.
  // 'https://www.linkedin.com/company/...',
  // 'https://www.facebook.com/...',
  // 'https://www.instagram.com/...',
].filter(Boolean);

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: BUSINESS_NAME,
  alternateName: [
    'NJ’s Accounting',
    'NJs Accounting and Tax Services',
    'Njock’s Accounting and Tax Services',
    'NJ Accounting Tax',
  ],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: BUSINESS_EMAIL,
  founder: {
    '@type': 'Person',
    name: FOUNDER,
    jobTitle: 'CEO & Founding Accountant',
    url: `${SITE_URL}/about`,
  },
  description:
    'Small-business bookkeeping and tax services founded by Njock Simon — the “NJ” in the name. Flat monthly pricing, a real accountant on email, and a 30-day guarantee. Serving small businesses across the United States.',
  areaServed: { '@type': 'Country', name: 'United States' },
  knowsAbout: [
    'Small business bookkeeping',
    'Tax preparation',
    'Quarterly tax planning',
    'Catch-up bookkeeping',
    'IRS audit support',
  ],
  ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
};

/**
 * WebSite schema with a SearchAction. This is what lets Google surface a
 * sitelinks search box and what AI agents read to learn how to query the site.
 */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  alternateName: 'NJ’s Accounting',
  description:
    'Small-business bookkeeping and tax services from Njock Simon. Flat monthly pricing from $299, a real accountant on email, books current in 30 days.',
  inLanguage: 'en-US',
  publisher: { '@id': `${SITE_URL}#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}#business`,
  name: BUSINESS_NAME,
  alternateName: 'Njock’s Accounting and Tax Services',
  url: SITE_URL,
  image: `${SITE_URL}/og-default.png`,
  priceRange: '$$',
  email: BUSINESS_EMAIL,
  parentOrganization: { '@id': `${SITE_URL}#organization` },
  serviceType: [
    'Bookkeeping',
    'Tax preparation',
    'Quarterly tax planning',
    'Audit support',
  ],
  areaServed: { '@type': 'Country', name: 'United States' },
  founder: { '@type': 'Person', name: FOUNDER, jobTitle: 'CEO & Founding Accountant' },
  ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Small-business plans',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Essential',
        price: '299',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '299',
          priceCurrency: 'USD',
          referenceQuantity: { '@type': 'QuantitativeValue', unitCode: 'MON' },
        },
        description: 'Monthly bookkeeping, annual tax return, email support (4-hr SLA).',
      },
      {
        '@type': 'Offer',
        name: 'Growth',
        price: '549',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '549',
          priceCurrency: 'USD',
          referenceQuantity: { '@type': 'QuantitativeValue', unitCode: 'MON' },
        },
        description: 'Everything in Essential, plus quarterly tax planning and a monthly 30-min call.',
      },
      {
        '@type': 'Offer',
        name: 'Full-Service',
        price: '949',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '949',
          priceCurrency: 'USD',
          referenceQuantity: { '@type': 'QuantitativeValue', unitCode: 'MON' },
        },
        description:
          'Everything in Growth, plus audit representation and priority response.',
      },
    ],
  },
};

export const pricingFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a small-business accountant cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'NJ’s plans start at $299/mo for Essential (monthly bookkeeping + annual tax return), $549/mo for Growth (adds quarterly tax planning), and $949/mo for Full-Service (adds audit representation). Flat monthly pricing — no “call for a quote.”',
      },
    },
    {
      '@type': 'Question',
      name: 'What’s included at no extra charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Phone calls, emails, quick questions, adding a category to your books, explaining a form. If it takes less than 15 minutes, it’s included — always.',
      },
    },
    {
      '@type': 'Question',
      name: 'What costs extra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Multi-state returns are +$75 per state. Prior-year cleanup is a one-time fee quoted upfront based on volume. Special situations like crypto, K-1s, or S-corp elections are always quoted before we start — never after.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you guarantee response times?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. We reply within 4 business hours to any email. If we miss that on any given month, that month is free — it’s written into your invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my books are behind?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Send us the shoebox. We build your books from scratch. If we can’t get you current within 30 days, your first month is on us.',
      },
    },
  ],
};

export function localBusinessJsonLd(city: {
  name: string;
  region: string;
  regionCode: string;
  country?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/${city.name.toLowerCase()}#localbusiness`,
    name: `${BUSINESS_NAME} — ${city.name}`,
    url: `${SITE_URL}/locations/${city.name.toLowerCase()}`,
    image: `${SITE_URL}/og-default.png`,
    email: BUSINESS_EMAIL,
    priceRange: '$$',
    description: `Small-business bookkeeping, tax preparation, and quarterly tax planning serving ${city.name}, ${city.region} — remote delivery, flat monthly pricing.`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: city.region,
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.regionCode,
      addressCountry: city.country ?? 'US',
    },
    parentOrganization: { '@id': `${SITE_URL}#organization` },
    founder: { '@type': 'Person', name: FOUNDER, jobTitle: 'CEO & Founding Accountant' },
    ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
  };
}

/**
 * Review / testimonial schema.
 *
 * Deliberately driven by `lib/testimonials.ts`, which ships empty. Nothing
 * renders and no markup is emitted until real client quotes are added there.
 * Never populate this with invented quotes or an invented aggregateRating —
 * fabricated review markup is a manual-action risk, not a ranking shortcut.
 */
export function reviewsJsonLd(
  reviews: Array<{ author: string; body: string; rating?: number; datePublished?: string }>,
) {
  if (reviews.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}#business`,
    name: BUSINESS_NAME,
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.body,
      ...(r.datePublished && { datePublished: r.datePublished }),
      ...(r.rating && {
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(r.rating),
          bestRating: '5',
        },
      }),
    })),
  };
}

export function blogPostingJsonLd(post: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.description,
    image: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author ?? FOUNDER,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
  };
}

export function faqPageJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function breadcrumbJsonLd(trail: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

export const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@id': `${SITE_URL}#business` },
  serviceType: 'Small-business bookkeeping and tax services',
  areaServed: 'United States',
  hasOfferCatalog: professionalServiceJsonLd.hasOfferCatalog,
  offers: [
    {
      '@type': 'Offer',
      name: 'Monthly bookkeeping',
      description:
        'Send us anything. We categorise it. You get one clean report on the 5th of every month.',
    },
    {
      '@type': 'Offer',
      name: 'Tax preparation',
      description:
        'Federal, state, and local. Every deduction. We file, you approve.',
    },
    {
      '@type': 'Offer',
      name: 'Quarterly tax planning',
      description:
        'Every three months we tell you exactly what to owe — and how to owe less next year.',
    },
    {
      '@type': 'Offer',
      name: 'Audit support & representation',
      description:
        'We pick up. We prepare the paperwork. We show up with you.',
    },
  ],
};

