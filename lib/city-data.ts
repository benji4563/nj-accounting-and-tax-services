export type CityConfig = {
  slug: string;
  name: string;
  state: string;
  stateCode: string;
  county: string;
  metaTitle: string;
  metaDescription: string;

  heroDescription: string;
  floatingBadge: { headline: string; subline: string };
  neighborhoods: string[];
  localTrustHeading: string;
  localTrustBody: string[];
  localTrustRadius: string;
  faqEyebrow: string;
  faqHeading: string;
  faqs: Array<{ q: string; a: string }>;
  sources: Array<{ label: string; url: string }>;
};

export const SAN_DIEGO: CityConfig = {
  slug: 'san-diego',
  name: 'San Diego',
  state: 'California',
  stateCode: 'CA',
  county: 'San Diego County',
  metaTitle: 'Small-Business Accountant in San Diego — Bookkeeping & Tax Services',
  metaDescription:
    'Monthly bookkeeping and tax preparation for San Diego small businesses. Flat pricing from $299/mo. Books current in 30 days or your next month is free. Serving all of San Diego County.',

  heroDescription:
    'Monthly bookkeeping and tax preparation for San Diego small businesses — from Pacific Beach to Chula Vista to everywhere in between. Flat monthly pricing. A real person you can email. Books current within 30 days — or your next month is free.',
  floatingBadge: {
    headline: 'Serving San Diego & San Diego County',
    subline: 'Local expertise, remote-friendly delivery.',
  },
  neighborhoods: [
    'Pacific Beach',
    'Gaslamp Quarter',
    'North Park',
    'Hillcrest',
    'La Jolla',
    'Mission Valley',
    'Kearny Mesa',
    'Chula Vista',
    'Encinitas',
    'Carlsbad',
    'Escondido',
    'El Cajon',
  ],
  localTrustHeading: 'Serving San Diego and greater San Diego County.',
  localTrustBody: [
    'We work with small businesses across the San Diego metro. Everything is delivered remotely — you send us what you have, we do the work, you approve. But we know the local terrain: California\'s franchise tax minimum, San Diego\'s business tax certificate, and the quarterly estimated payments that trip up every first-year owner.',
    'If your business runs in one of these neighborhoods (or anywhere in San Diego County, including North County and the South Bay), we\'re a fit.',
  ],
  localTrustRadius: 'San Diego County',
  faqEyebrow: 'San Diego-specific questions',
  faqHeading: 'Questions San Diego small-business owners ask us most.',
  faqs: [
    {
      q: 'Do you actually work with San Diego small businesses, or is this just an SEO page?',
      a: 'We work with small businesses across the San Diego metro — every neighborhood listed above, plus North County and the South Bay. All work is delivered remotely, but we know California and San Diego filing rules cold. If we don\'t think we\'re a fit, we\'ll tell you on the discovery call — free.',
    },
    {
      q: 'How does California\'s franchise tax affect my small business?',
      a: 'California charges an $800 minimum franchise tax for LLCs and corporations — due even if your business earned nothing that year. Most new owners don\'t know about it until the bill arrives. During onboarding we set up your California compliance calendar so nothing catches you off guard.',
    },
    {
      q: 'Do I need a San Diego business tax certificate?',
      a: 'If you operate within San Diego city limits you need a business tax certificate (sometimes called a business license). It\'s renewed annually and the fee varies by revenue. We don\'t file the certificate itself — that\'s a city clerk form — but we make sure you know the deadline and help categorize the cost.',
    },
    {
      q: 'What about California sales tax and the San Diego district rate?',
      a: 'California state sales tax plus the San Diego district add-on applies to most tangible goods sold locally. If you sell online, post-Wayfair nexus rules mean you may owe tax in states you\'ve never visited. We map your actual nexus exposure and file where you owe — nowhere you don\'t.',
    },
    {
      q: 'Are you a CPA firm? Do I need one for a San Diego small business?',
      a: 'Njock is an accountant, not a CPA — which is honestly what most small businesses actually need. If your situation calls for CPA-level representation (FTB audit, IRS field audit, complex M&A), we\'ll say so upfront and either bring in a CPA partner or refer you out. No ego, no upsell.',
    },
    {
      q: 'Do you have a San Diego office I can visit?',
      a: 'No — and we\'re transparent about it. We keep overhead low so we can charge $299/mo instead of $600. Every client works with us over email, video, and phone. If in-person matters to you, we\'ll tell you honestly on the discovery call so you can decide.',
    },
  ],
  sources: [
    { label: 'California Franchise Tax Board', url: 'https://www.ftb.ca.gov/' },
    { label: 'IRS Small Business Resources', url: 'https://www.irs.gov/businesses/small-businesses-self-employed' },
    { label: 'South Dakota v. Wayfair (Nexus)', url: 'https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf' },
  ],
};

export const CHICAGO: CityConfig = {
  slug: 'chicago',
  name: 'Chicago',
  state: 'Illinois',
  stateCode: 'IL',
  county: 'Cook County',
  metaTitle: 'Small-Business Accountant in Chicago — Bookkeeping & Tax Services',
  metaDescription:
    'Monthly bookkeeping and tax preparation for Chicago small businesses. Flat pricing from $299/mo. Books current in 30 days or your next month is free. Serving all of Cook County.',

  heroDescription:
    'Monthly bookkeeping and tax preparation for Chicago small businesses — from the Loop to Logan Square to everywhere in between. Flat monthly pricing. A real person you can email. Books current within 30 days — or your next month is free.',
  floatingBadge: {
    headline: 'Serving Chicago & Cook County',
    subline: 'Local expertise, remote-friendly delivery.',
  },
  neighborhoods: [
    'The Loop',
    'Lincoln Park',
    'Logan Square',
    'Wicker Park',
    'Lakeview',
    'West Loop',
    'Pilsen',
    'Hyde Park',
    'Bucktown',
    'River North',
    'Bronzeville',
    'Evanston',
  ],
  localTrustHeading: 'Serving Chicago and greater Cook County.',
  localTrustBody: [
    'We work with small businesses from every corner of the city. Everything is delivered remotely — you send us what you have, we do the work, you approve. But we know the local terrain: Illinois\' flat income tax rate, Cook County\'s layers of local taxes, and the Chicago small-business compliance calendar that catches every new owner off guard.',
    'If your business runs in one of these neighborhoods (or anywhere within the Chicagoland metro, including the suburbs), we\'re a fit.',
  ],
  localTrustRadius: 'Chicagoland metro',
  faqEyebrow: 'Chicago-specific questions',
  faqHeading: 'Questions Chicago small-business owners ask us most.',
  faqs: [
    {
      q: 'Do you actually work with Chicago small businesses, or is this just an SEO page?',
      a: 'We work with small businesses across the Chicago metro — every neighborhood listed above, plus the suburbs. All work is delivered remotely, but we know Illinois and Cook County filing rules cold. If we don\'t think we\'re a fit, we\'ll tell you on the discovery call — free.',
    },
    {
      q: 'How does Illinois\' flat income tax work for my small business?',
      a: 'Illinois uses a flat income tax rate that applies to both individuals and businesses — no brackets. For pass-through entities (LLCs, S-corps), the income flows to your personal return. We handle the calculation and estimated payments so you\'re never surprised at filing time.',
    },
    {
      q: 'What local taxes does Chicago add on top of the state?',
      a: 'Chicago layers several local taxes — personal property lease tax, Chicago use tax, and a higher combined sales tax rate that\'s one of the steepest in the nation. If you sell goods or taxable services within city limits, we map exactly what you owe and set the schedule so nothing slips.',
    },
    {
      q: 'Do I need to worry about Illinois\' pass-through entity tax (PTE)?',
      a: 'If you operate as an S-corp or partnership, Illinois offers an elective PTE tax that can help you work around the federal SALT deduction cap. Whether it saves you money depends on your specific situation. We run the numbers during quarterly planning and tell you straight — opt in or skip it.',
    },
    {
      q: 'Are you a CPA firm? Do I need one for a Chicago small business?',
      a: 'Njock is an accountant, not a CPA — which is honestly what most small businesses actually need. If your situation calls for CPA-level representation (Illinois DOR audit, IRS field audit, complex M&A), we\'ll say so upfront and either bring in a CPA partner or refer you out. No ego, no upsell.',
    },
    {
      q: 'Do you have a Chicago office I can visit?',
      a: 'No — and we\'re transparent about it. We keep overhead low so we can charge $299/mo instead of $600. Every client works with us over email, video, and phone. If in-person matters to you, we\'ll tell you honestly on the discovery call so you can decide.',
    },
  ],
  sources: [
    { label: 'Illinois Department of Revenue', url: 'https://tax.illinois.gov/' },
    { label: 'IRS Small Business Resources', url: 'https://www.irs.gov/businesses/small-businesses-self-employed' },
    { label: 'South Dakota v. Wayfair (Nexus)', url: 'https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf' },
  ],
};

export const CLEVELAND: CityConfig = {
  slug: 'cleveland',
  name: 'Cleveland',
  state: 'Ohio',
  stateCode: 'OH',
  county: 'Cuyahoga County',
  metaTitle: 'Small-Business Accountant in Cleveland — Bookkeeping & Tax Services',
  metaDescription:
    'Monthly bookkeeping and tax preparation for Cleveland small businesses. Flat pricing from $299/mo. Books current in 30 days or your next month is free. Serving all of Cuyahoga County.',

  heroDescription:
    'Monthly bookkeeping and tax preparation for Cleveland small businesses — from Ohio City to Tremont to everywhere in between. Flat monthly pricing. A real person you can email. Books current within 30 days — or your next month is free.',
  floatingBadge: {
    headline: 'Serving Cleveland & Cuyahoga County',
    subline: 'Local expertise, remote-friendly delivery.',
  },
  neighborhoods: [
    'Downtown',
    'Ohio City',
    'Tremont',
    'University Circle',
    'Detroit Shoreway',
    'Lakewood',
    'Westlake',
    'Parma',
    'Strongsville',
    'Beachwood',
    'Shaker Heights',
    'Rocky River',
  ],
  localTrustHeading: 'Serving Cleveland and greater Cuyahoga County.',
  localTrustBody: [
    'We work with small businesses from every corner of the Cleveland metro. Everything is delivered remotely — you send us what you have, we do the work, you approve. But we know the local terrain: Ohio\'s municipal income tax maze, Cuyahoga County\'s local additions, and the Cleveland city income tax that catches every new owner off guard.',
    'If your business runs in one of these neighborhoods (or anywhere in Cuyahoga County and the surrounding suburbs), we\'re a fit.',
  ],
  localTrustRadius: 'Cuyahoga County and suburbs',
  faqEyebrow: 'Cleveland-specific questions',
  faqHeading: 'Questions Cleveland small-business owners ask us most.',
  faqs: [
    {
      q: 'Do you actually work with Cleveland small businesses, or is this just an SEO page?',
      a: 'We work with small businesses across the Cleveland metro — every neighborhood listed above, plus the east and west side suburbs. All work is delivered remotely, but we know Ohio and Cuyahoga County filing rules cold. If we don\'t think we\'re a fit, we\'ll tell you on the discovery call — free.',
    },
    {
      q: 'How does Cleveland\'s municipal income tax affect my small business?',
      a: 'Cleveland has its own city income tax — a flat rate on net profits earned within city limits, separate from Ohio state tax. Ohio\'s municipal tax system means you could owe in every city where you work or have employees. During onboarding we map exactly which municipalities you owe and set the payment schedule.',
    },
    {
      q: 'What do I do about Ohio sales tax and the Cuyahoga County local rate?',
      a: 'Ohio state sales tax plus Cuyahoga County\'s local addition applies to most goods and some services sold in the Cleveland area. If you sell online, post-Wayfair nexus rules mean you may owe tax in states you\'ve never visited. We map your actual nexus exposure and file where you owe — nowhere you don\'t.',
    },
    {
      q: 'Can you handle Ohio CAT (Commercial Activity Tax) filings?',
      a: 'Yes. Ohio\'s Commercial Activity Tax applies once your gross receipts cross a threshold set by the state — the exact number is worth confirming with us on your discovery call because it has changed in recent years. We handle the annual filing and quarterly minimums as part of Growth and Full-Service plans.',
    },
    {
      q: 'Are you a CPA firm? Do I need one for a Cleveland small business?',
      a: 'Njock is an accountant, not a CPA — which is honestly what most small businesses actually need. If your situation calls for CPA-level representation (Ohio Department of Taxation audit, IRS field audit, complex M&A), we\'ll say so upfront and either bring in a CPA partner or refer you out. No ego, no upsell.',
    },
    {
      q: 'Do you have a Cleveland office I can visit?',
      a: 'No — and we\'re transparent about it. We keep overhead low so we can charge $299/mo instead of $600. Every client works with us over email, video, and phone. If in-person matters to you, we\'ll tell you honestly on the discovery call so you can decide.',
    },
  ],
  sources: [
    { label: 'Ohio Department of Taxation', url: 'https://tax.ohio.gov/' },
    { label: 'IRS Small Business Resources', url: 'https://www.irs.gov/businesses/small-businesses-self-employed' },
    { label: 'South Dakota v. Wayfair (Nexus)', url: 'https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf' },
  ],
};

export const RALEIGH: CityConfig = {
  slug: 'raleigh',
  name: 'Raleigh',
  state: 'North Carolina',
  stateCode: 'NC',
  county: 'Wake County',
  metaTitle: 'Small-Business Accountant in Raleigh NC — Bookkeeping & Tax Services',
  metaDescription:
    'Monthly bookkeeping and tax preparation for Raleigh small businesses. Flat pricing from $299/mo. Books current in 30 days or your next month is free. Serving the Triangle area.',

  heroDescription:
    'Monthly bookkeeping and tax preparation for Raleigh small businesses — from Downtown to North Hills to everywhere in the Triangle. Flat monthly pricing. A real person you can email. Books current within 30 days — or your next month is free.',
  floatingBadge: {
    headline: 'Serving Raleigh & the Triangle',
    subline: 'Local expertise, remote-friendly delivery.',
  },
  neighborhoods: [
    'Downtown',
    'North Hills',
    'Glenwood South',
    'Cameron Village',
    'Five Points',
    'Brier Creek',
    'Cary',
    'Durham',
    'Chapel Hill',
    'Apex',
    'Wake Forest',
    'Morrisville',
  ],
  localTrustHeading: 'Serving Raleigh and the Triangle area.',
  localTrustBody: [
    'We work with small businesses across the Triangle. Everything is delivered remotely — you send us what you have, we do the work, you approve. But we know the local terrain: North Carolina\'s flat income tax, Wake County\'s property tax schedule, and the Raleigh privilege license that many new owners discover too late.',
    'If your business runs in one of these areas (or anywhere in Wake, Durham, or Orange County), we\'re a fit.',
  ],
  localTrustRadius: 'the Triangle (Wake, Durham & Orange Counties)',
  faqEyebrow: 'Raleigh-specific questions',
  faqHeading: 'Questions Raleigh small-business owners ask us most.',
  faqs: [
    {
      q: 'Do you actually work with Raleigh small businesses, or is this just an SEO page?',
      a: 'We work with small businesses across the Raleigh-Durham-Chapel Hill metro — every area listed above. All work is delivered remotely, but we know North Carolina filing rules cold. If we don\'t think we\'re a fit, we\'ll tell you on the discovery call — free.',
    },
    {
      q: 'How does North Carolina\'s flat income tax work for my business?',
      a: 'North Carolina uses a flat individual income tax rate — pass-through income (LLC, S-corp) flows to your personal return at that rate. The state also has a separate franchise tax for corporations based on net worth. We handle both calculations and estimated payments so you\'re never surprised.',
    },
    {
      q: 'Does Raleigh charge a business privilege license?',
      a: 'Raleigh requires a privilege license for businesses operating within city limits. The fee varies by business type and revenue. We don\'t file the license itself — that\'s a city clerk form — but we make sure you know the deadline and help categorize the expense.',
    },
    {
      q: 'What about North Carolina sales tax and the Wake County rate?',
      a: 'North Carolina state sales tax plus Wake County\'s local addition applies to most tangible goods and some digital products. If you sell online, post-Wayfair nexus rules may expand your obligations. We map your actual nexus exposure and file where you owe — nowhere you don\'t.',
    },
    {
      q: 'Are you a CPA firm? Do I need one for a Raleigh small business?',
      a: 'Njock is an accountant, not a CPA — which is honestly what most small businesses actually need. If your situation calls for CPA-level representation (NC DOR audit, IRS field audit, complex M&A), we\'ll say so upfront and either bring in a CPA partner or refer you out. No ego, no upsell.',
    },
    {
      q: 'Do you have a Raleigh office I can visit?',
      a: 'No — and we\'re transparent about it. We keep overhead low so we can charge $299/mo instead of $600. Every client works with us over email, video, and phone. If in-person matters to you, we\'ll tell you honestly on the discovery call so you can decide.',
    },
  ],
  sources: [
    { label: 'North Carolina Dept. of Revenue', url: 'https://www.ncdor.gov/' },
    { label: 'IRS Small Business Resources', url: 'https://www.irs.gov/businesses/small-businesses-self-employed' },
    { label: 'South Dakota v. Wayfair (Nexus)', url: 'https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf' },
  ],
};

export const CHARLOTTE: CityConfig = {
  slug: 'charlotte',
  name: 'Charlotte',
  state: 'North Carolina',
  stateCode: 'NC',
  county: 'Mecklenburg County',
  metaTitle: 'Small-Business Accountant in Charlotte NC — Bookkeeping & Tax Services',
  metaDescription:
    'Monthly bookkeeping and tax preparation for Charlotte small businesses. Flat pricing from $299/mo. Books current in 30 days or your next month is free. Serving all of Mecklenburg County.',

  heroDescription:
    'Monthly bookkeeping and tax preparation for Charlotte small businesses — from Uptown to South End to everywhere in the Queen City. Flat monthly pricing. A real person you can email. Books current within 30 days — or your next month is free.',
  floatingBadge: {
    headline: 'Serving Charlotte & Mecklenburg County',
    subline: 'Local expertise, remote-friendly delivery.',
  },
  neighborhoods: [
    'Uptown',
    'South End',
    'NoDa',
    'Plaza Midwood',
    'Dilworth',
    'Myers Park',
    'Ballantyne',
    'University City',
    'Huntersville',
    'Matthews',
    'Mint Hill',
    'Pineville',
  ],
  localTrustHeading: 'Serving Charlotte and greater Mecklenburg County.',
  localTrustBody: [
    'We work with small businesses from every corner of the Charlotte metro. Everything is delivered remotely — you send us what you have, we do the work, you approve. But we know the local terrain: North Carolina\'s flat income tax, Mecklenburg County\'s combined sales tax rate, and the Charlotte business privilege license that catches every new owner off guard.',
    'If your business runs in one of these neighborhoods (or anywhere in Mecklenburg County and the surrounding area, including parts of South Carolina), we\'re a fit.',
  ],
  localTrustRadius: 'Mecklenburg County and beyond',
  faqEyebrow: 'Charlotte-specific questions',
  faqHeading: 'Questions Charlotte small-business owners ask us most.',
  faqs: [
    {
      q: 'Do you actually work with Charlotte small businesses, or is this just an SEO page?',
      a: 'We work with small businesses across the Charlotte metro — every neighborhood listed above, plus Lake Norman and the South Carolina border towns. All work is delivered remotely, but we know North Carolina filing rules cold. If we don\'t think we\'re a fit, we\'ll tell you on the discovery call — free.',
    },
    {
      q: 'How does North Carolina\'s flat income tax work for my Charlotte business?',
      a: 'North Carolina uses a flat individual income tax rate — pass-through income (LLC, S-corp) flows to your personal return at that rate. Charlotte doesn\'t add a city income tax on top, but the state franchise tax applies to corporations. We handle both calculations and estimated payments.',
    },
    {
      q: 'My business straddles the NC/SC border. Is that a problem?',
      a: 'Not for us. Plenty of Charlotte-area businesses have customers or employees in South Carolina. That means potential nexus in both states — different sales tax rules, different income tax treatment. We map exactly where you owe and file in both states when needed.',
    },
    {
      q: 'What about North Carolina sales tax and the Mecklenburg County rate?',
      a: 'North Carolina state sales tax plus Mecklenburg County\'s local addition gives Charlotte one of the higher combined rates in the state. If you sell online, post-Wayfair nexus rules may expand your obligations further. We map your actual nexus exposure and file where you owe — nowhere you don\'t.',
    },
    {
      q: 'Are you a CPA firm? Do I need one for a Charlotte small business?',
      a: 'Njock is an accountant, not a CPA — which is honestly what most small businesses actually need. If your situation calls for CPA-level representation (NC DOR audit, IRS field audit, complex M&A), we\'ll say so upfront and either bring in a CPA partner or refer you out. No ego, no upsell.',
    },
    {
      q: 'Do you have a Charlotte office I can visit?',
      a: 'No — and we\'re transparent about it. We keep overhead low so we can charge $299/mo instead of $600. Every client works with us over email, video, and phone. If in-person matters to you, we\'ll tell you honestly on the discovery call so you can decide.',
    },
  ],
  sources: [
    { label: 'North Carolina Dept. of Revenue', url: 'https://www.ncdor.gov/' },
    { label: 'IRS Small Business Resources', url: 'https://www.irs.gov/businesses/small-businesses-self-employed' },
    { label: 'South Dakota v. Wayfair (Nexus)', url: 'https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf' },
  ],
};

export const DALLAS: CityConfig = {
  slug: 'dallas',
  name: 'Dallas',
  state: 'Texas',
  stateCode: 'TX',
  county: 'Dallas County',
  metaTitle: 'Small-Business Accountant in Dallas TX — Bookkeeping & Tax Services',
  metaDescription:
    'Monthly bookkeeping and tax preparation for Dallas small businesses. Flat pricing from $299/mo. Books current in 30 days or your next month is free. Serving the DFW metroplex.',

  heroDescription:
    'Monthly bookkeeping and tax preparation for Dallas small businesses — from Deep Ellum to Uptown to everywhere in the metroplex. Flat monthly pricing. A real person you can email. Books current within 30 days — or your next month is free.',
  floatingBadge: {
    headline: 'Serving Dallas & the DFW Metroplex',
    subline: 'Local expertise, remote-friendly delivery.',
  },
  neighborhoods: [
    'Uptown',
    'Deep Ellum',
    'Bishop Arts',
    'Oak Lawn',
    'Lower Greenville',
    'Design District',
    'Plano',
    'Frisco',
    'Richardson',
    'Irving',
    'Arlington',
    'Fort Worth',
  ],
  localTrustHeading: 'Serving Dallas and the DFW metroplex.',
  localTrustBody: [
    'We work with small businesses across the DFW metro. Everything is delivered remotely — you send us what you have, we do the work, you approve. But we know the local terrain: Texas has no state income tax, but the franchise tax (margin tax) trips up every growing business, and the combined sales tax rate in Dallas County is one to watch.',
    'If your business runs in one of these neighborhoods (or anywhere in the DFW metroplex, from Fort Worth to Plano to Arlington), we\'re a fit.',
  ],
  localTrustRadius: 'the DFW metroplex',
  faqEyebrow: 'Dallas-specific questions',
  faqHeading: 'Questions Dallas small-business owners ask us most.',
  faqs: [
    {
      q: 'Do you actually work with Dallas small businesses, or is this just an SEO page?',
      a: 'We work with small businesses across the DFW metroplex — every neighborhood listed above, from Deep Ellum to Fort Worth. All work is delivered remotely, but we know Texas filing rules cold. If we don\'t think we\'re a fit, we\'ll tell you on the discovery call — free.',
    },
    {
      q: 'Texas has no income tax — so what do I even need an accountant for?',
      a: 'No state income tax doesn\'t mean no tax obligations. Texas has a franchise tax (also called the margin tax) that applies once your revenue crosses a threshold. You still file federal taxes, manage payroll, and deal with sales tax. Clean books also matter for lending, investors, and knowing whether your business is actually profitable.',
    },
    {
      q: 'How does the Texas franchise tax (margin tax) work?',
      a: 'The franchise tax applies to most entities doing business in Texas once total revenue exceeds the no-tax-due threshold (which changes periodically — worth confirming with us). You calculate it based on total revenue minus either cost of goods sold or compensation. We handle the annual report and payment as part of Growth and Full-Service plans.',
    },
    {
      q: 'What about Texas sales tax and the Dallas County rate?',
      a: 'Texas state sales tax plus the Dallas local addition gives you a combined rate that applies to most tangible goods and some services. If you sell online, post-Wayfair nexus rules mean you may owe tax in other states too. We map your actual nexus exposure and file where you owe — nowhere you don\'t.',
    },
    {
      q: 'Are you a CPA firm? Do I need one for a Dallas small business?',
      a: 'Njock is an accountant, not a CPA — which is honestly what most small businesses actually need. If your situation calls for CPA-level representation (Texas Comptroller audit, IRS field audit, complex M&A), we\'ll say so upfront and either bring in a CPA partner or refer you out. No ego, no upsell.',
    },
    {
      q: 'Do you have a Dallas office I can visit?',
      a: 'No — and we\'re transparent about it. We keep overhead low so we can charge $299/mo instead of $600. Every client works with us over email, video, and phone. If in-person matters to you, we\'ll tell you honestly on the discovery call so you can decide.',
    },
  ],
  sources: [
    { label: 'Texas Comptroller of Public Accounts', url: 'https://comptroller.texas.gov/' },
    { label: 'IRS Small Business Resources', url: 'https://www.irs.gov/businesses/small-businesses-self-employed' },
    { label: 'South Dakota v. Wayfair (Nexus)', url: 'https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf' },
  ],
};

export const ALL_CITIES = [SAN_DIEGO, CHICAGO, CLEVELAND, RALEIGH, CHARLOTTE, DALLAS] as const;
