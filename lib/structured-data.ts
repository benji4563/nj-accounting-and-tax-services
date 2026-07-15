const SITE_URL = 'https://booksbynj.com';
const BUSINESS_NAME = 'NJ’s Accounting and Tax Services';
const BUSINESS_EMAIL = 'hello@booksbynj.com';
const FOUNDER = 'Njock';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: BUSINESS_NAME,
  alternateName: 'NJ’s Accounting',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: BUSINESS_EMAIL,
  founder: { '@type': 'Person', name: FOUNDER },
  description:
    'Small-business bookkeeping and tax services with flat monthly pricing, a real accountant on email, and a 30-day guarantee.',
};

export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}#business`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/og-default.png`,
  priceRange: '$$',
  email: BUSINESS_EMAIL,
  serviceType: [
    'Bookkeeping',
    'Tax preparation',
    'Quarterly tax planning',
    'Audit support',
  ],
  areaServed: { '@type': 'Country', name: 'United States' },
  founder: { '@type': 'Person', name: FOUNDER, jobTitle: 'CEO & Founding Accountant' },
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

