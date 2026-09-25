/**
 * Genuinely city-specific tax content.
 *
 * WHY THIS FILE EXISTS
 * The 2026-09-25 audit found the seven /locations/* pages were ~80% identical:
 * three city-specific components wrapped around seven shared homepage
 * components. They ranked for zero keywords and matched Google's doorway-page
 * definition. Thin local pages are not a local-SEO strategy; they are a
 * liability.
 *
 * Every fact below is a real, verifiable local obligation that a small-business
 * owner in that city actually faces, pulled from the primary source and cited.
 * That is what makes a Cincinnati page genuinely different from a Dallas page
 * rather than a find-and-replace of the city name.
 *
 * MAINTENANCE RULES
 *  - Every `FactItem` must be checkable against a `.gov` source in `sources`.
 *  - Rates change. `verified` is the date a human/agent last confirmed the
 *    figure against the source. Re-verify anything older than ~6 months,
 *    especially in January (rate changes) and around state budget seasons.
 *  - If you cannot verify a fact, delete it. Do not soften it into vagueness —
 *    vague local content is what we are replacing.
 */

export type FactItem = {
  /** Short label, e.g. "City income tax". */
  label: string;
  /** The specific figure or rule. Keep it literal and quotable — this is the GEO/AI-citation win. */
  detail: string;
};

export type CityTaxGuide = {
  heading: string;
  /** One or two sentences of orientation before the facts. */
  intro: string;
  facts: FactItem[];
  /** The "so what" — plain-English consequence for an owner. */
  takeaway: string;
  /** ISO date this content was last verified against the cited sources. */
  verified: string;
  sources: Array<{ label: string; url: string }>;
};

export const CITY_TAX_GUIDES: Record<string, CityTaxGuide> = {
  cincinnati: {
    heading: 'What Cincinnati actually taxes your business on',
    intro:
      'Ohio is one of the few states where the city taxes your business profit directly, on top of federal and state. If you operate inside Cincinnati city limits, this is a separate return you owe — and it is the single most common thing new clients here have missed.',
    facts: [
      {
        label: 'Cincinnati Net Profit Tax — 1.8%',
        detail:
          'Cincinnati levies 1.8% on net profit earned from business activity inside city limits. The rate has been 1.8% since 2 October 2020 (it was 2.1% before that). This is separate from Ohio state tax and separate from your federal return.',
      },
      {
        label: 'Annual return due 15 April',
        detail:
          'The Cincinnati net profit return is due 15 April for calendar-year filers, or the 15th day of the 4th month after your fiscal year ends.',
      },
      {
        label: 'Quarterly estimates kick in above $200',
        detail:
          'If your annual Cincinnati tax liability exceeds $200, you are required to make quarterly estimated payments. A lot of owners cross that line — $200 of tax is about $11,100 of city-source net profit — without realising the filing obligation changed.',
      },
      {
        label: 'City limits are not the metro',
        detail:
          'Being "in Cincinnati" for tax purposes means inside the municipal boundary, not Hamilton County generally. Neighbouring municipalities levy their own rates, so an address two streets over can mean a different return entirely.',
      },
    ],
    takeaway:
      'If you run a business in Cincinnati and have only ever filed federal and Ohio returns, there is a good chance you owe a city return you have never filed. That is fixable, and it is cheaper to fix before the city finds it than after.',
    verified: '2026-09-25',
    sources: [
      {
        label: 'City of Cincinnati — Income Taxes',
        url: 'https://www.cincinnati-oh.gov/finance/income-taxes/',
      },
      {
        label: 'City of Cincinnati — Tax Due Dates',
        url: 'https://www.cincinnati-oh.gov/finance/income-taxes/due-dates/',
      },
      {
        label: 'Ohio Department of Taxation — Municipal Net Profit Tax',
        url: 'https://tax.ohio.gov/business/municipal-net-profit-tax',
      },
    ],
  },

  cleveland: {
    heading: 'What Cleveland actually taxes your business on',
    intro:
      'Cleveland has one of the higher municipal income tax rates in Ohio, and it is collected by a separate agency from the state — which is exactly why it gets missed.',
    facts: [
      {
        label: 'Cleveland municipal income tax — 2.50%',
        detail:
          'Cleveland levies 2.50% on income, and it applies to businesses operating inside the city regardless of where the owner lives. That is 0.7 points higher than Cincinnati.',
      },
      {
        label: 'CCA collects it, not the State of Ohio',
        detail:
          'Cleveland’s municipal income tax is administered by the Central Collection Agency (CCA), a separate body from the Ohio Department of Taxation. Filing your Ohio return does nothing for your CCA obligation — they are independent systems.',
      },
      {
        label: 'Residents get a 100% credit, capped at 2.50%',
        detail:
          'Cleveland allows a 100% credit for tax paid to another municipality, limited to 2.50%. If you work in a lower-rate city and live in Cleveland, you may still owe the difference.',
      },
      {
        label: 'Several districts file at the same 2.50%',
        detail:
          'CCA also administers Cleveland/Warrensville Heights–Tremco, Emerald Park, the IX Center, Shaker Square and Highland Hills at 2.50%. If your premises sit in one of these, you file with CCA too.',
      },
    ],
    takeaway:
      'Two separate tax authorities want a return from a Cleveland business, and only one of them shows up in most accounting software by default. We file both.',
    verified: '2026-09-25',
    sources: [
      {
        label: 'CCA Division of Taxation — Tax Rates',
        url: 'https://www.ccaohio.gov/tax-rates',
      },
      {
        label: 'City of Cleveland — Division of Taxation (CCA)',
        url: 'https://www.clevelandohio.gov/city-hall/departments/finance/divisions/taxation',
      },
    ],
  },

  chicago: {
    heading: 'The Chicago tax that just went up 67%',
    intro:
      'Chicago taxes things most cities do not, and one of them changed sharply on 1 January 2026. If your business pays for software, this affects you — and most owners have not noticed.',
    facts: [
      {
        label: 'Lease Transaction Tax — now 15%',
        detail:
          'Chicago’s Personal Property Lease Transaction Tax rose to 15% of receipts or charges for all leases as of 1 January 2026. It was 11% through 2025 and 9% from 2021. That is a 4-point jump in one year.',
      },
      {
        label: 'It applies to your software, not just physical goods',
        detail:
          'The tax explicitly covers "the non-possessory lease of a computer to input, modify, or retrieve data supplied by the customer" — which is how the city describes cloud software and SaaS. Your CRM, your accounting platform and your project tools can all fall inside it.',
      },
      {
        label: 'There is a small-new-business exemption',
        detail:
          'Chicago publishes a Transaction Tax Exemption Application for Small New Businesses. There are also twelve categories of exempt leases, including property leased outside the city and primarily used outside it, and leases between members of the same related group.',
      },
      {
        label: 'Form 7550, Municipal Code 3-32',
        detail:
          'The filing is Form 7550 under Municipal Code chapter 3-32. It applies whether you are the lessor or the lessee of personal property used in Chicago.',
      },
    ],
    takeaway:
      'If you run a Chicago business with a normal software stack and nobody has mentioned Form 7550 to you, that is worth a conversation. The rate went up 67% this year and the exemptions are not automatic — you have to claim them.',
    verified: '2026-09-25',
    sources: [
      {
        label: 'City of Chicago — Personal Property Lease Transaction Tax (7550)',
        url: 'https://www.chicago.gov/city/en/depts/fin/supp_info/revenue/tax_list/personal_propertyleasetransactiontax.html',
      },
    ],
  },

  dallas: {
    heading: 'What Texas charges instead of income tax',
    intro:
      'Texas has no personal state income tax, which is genuinely good news. It is not the same as having no state business tax — and the one it does have catches people out because it is due on a date nothing else is.',
    facts: [
      {
        label: 'No-tax-due threshold — $2,650,000',
        detail:
          'For 2026–2027, a taxable entity with annualised total revenue at or below $2,650,000 owes no Texas franchise tax. Most small businesses land under this comfortably.',
      },
      {
        label: 'Below the threshold you may still have to file',
        detail:
          'Owing nothing and filing nothing are different things. The franchise tax is a privilege tax on every taxable entity formed or organised in Texas or doing business in Texas — check your filing obligation rather than assuming the threshold makes you invisible.',
      },
      {
        label: 'Rates: 0.375% retail/wholesale, 0.75% everyone else',
        detail:
          'Above the threshold, retail and wholesale businesses are taxed at 0.375% and all other businesses at 0.75% of the taxable margin.',
      },
      {
        label: 'Due 15 May, not 15 April',
        detail:
          'The Texas franchise tax report is due 15 May each year, shifting to the next business day if that falls on a weekend or holiday. It is a month after your federal deadline, which is exactly why it gets forgotten once tax season is over.',
      },
    ],
    takeaway:
      'The most common Dallas mistake we see is not a tax bill — it is a missed 15 May filing by a business that owed nothing and assumed that meant nothing was due.',
    verified: '2026-09-25',
    sources: [
      {
        label: 'Texas Comptroller — Franchise Tax',
        url: 'https://comptroller.texas.gov/taxes/franchise/',
      },
    ],
  },

  'san-diego': {
    heading: 'The two San Diego bills that arrive whether you profit or not',
    intro:
      'California charges small businesses on existence, not just on earnings. Two obligations here are owed regardless of whether you made a dollar — and both catch first-year owners.',
    facts: [
      {
        label: 'California’s $800 annual tax — from year one',
        detail:
          'Every LLC doing business or organised in California owes an $800 annual tax to the Franchise Tax Board. There is no first-year exemption: the AB 85 waiver expired on 1 January 2024, so year one is billable again.',
      },
      {
        label: 'It is owed even in a loss year',
        detail:
          'The $800 is a minimum, not a calculation on profit. A business that loses money all year still owes it. Budget for it the way you budget rent.',
      },
      {
        label: 'City of San Diego Business Tax Certificate',
        detail:
          'The city requires its own Business Tax Certificate on top of anything state-level. Applications submitted by mail are assessed $38.00 — $34.00 business tax plus a $4.00 state-mandated SB-1186 fee.',
      },
      {
        label: 'County lines matter for sales tax',
        detail:
          'San Diego County rates differ from Los Angeles and Orange County. If you sell into neighbouring counties, you are not collecting one flat California rate — destination sourcing applies.',
      },
    ],
    takeaway:
      'A San Diego LLC that made no money in its first year still owes at least $838 in tax and fees. Knowing that in January is a much better experience than finding out in April.',
    verified: '2026-09-25',
    sources: [
      {
        label: 'California FTB — Limited Liability Company',
        url: 'https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html',
      },
      {
        label: 'City of San Diego — Apply for a Business Tax Certificate',
        url: 'https://www.sandiego.gov/treasurer/taxesfees/btax/btaxhow',
      },
    ],
  },

  raleigh: {
    heading: 'What Raleigh businesses owe North Carolina',
    intro:
      'North Carolina has quietly become one of the cheaper states to run a business in. The corporate rate is among the lowest in the country — but the franchise tax is a separate bill that does not care whether you profited.',
    facts: [
      {
        label: 'Corporate income tax — 2.00% flat',
        detail:
          'North Carolina levies a flat 2.00% corporate income tax, one of the lowest rates in the nation, and it is scheduled to phase down further. If you moved here from a high-tax state, this is a real saving.',
      },
      {
        label: 'Franchise tax — $1.50 per $1,000, minimum $200',
        detail:
          'The franchise tax rate is $1.50 per $1,000 of the corporation’s tax base, capped at $500 on the first $1 million of base. The minimum franchise tax is $200 — owed regardless of profit.',
      },
      {
        label: 'Raleigh / Wake County sales tax — 7.25%',
        detail:
          'The combined rate in Raleigh is 7.25%: North Carolina’s 4.75% state rate plus Wake County local tax.',
      },
      {
        label: 'No city privilege licence tax',
        detail:
          'North Carolina repealed the local privilege licence tax, so Raleigh does not levy the per-city business licence fee you may have paid in another state. One fewer annual filing.',
      },
    ],
    takeaway:
      'A profitable Raleigh business often pays less state tax than owners expect, and a break-even one often pays more — because the $200 franchise minimum lands either way.',
    verified: '2026-09-25',
    sources: [
      {
        label: 'NCDOR — Corporate Income and Franchise Tax Rates',
        url: 'https://www.ncdor.gov/taxes-forms/corporate-income-franchise-tax/corporate-income-and-franchise-tax-rates',
      },
      {
        label: 'NCDOR — Current Sales and Use Tax Rates',
        url: 'https://www.ncdor.gov/taxes-forms/sales-and-use-tax/sales-and-use-tax-rates/current-sales-and-use-tax-rates',
      },
    ],
  },

  charlotte: {
    heading: 'Charlotte’s sales tax went up this year — did yours?',
    intro:
      'Mecklenburg County raised its local sales tax in 2026, and Charlotte now sits a full point above Raleigh. If your point-of-sale or invoicing template still has the old rate in it, you are under-collecting.',
    facts: [
      {
        label: 'Mecklenburg County combined rate — 8.25%',
        detail:
          'Effective 1 July 2026, Mecklenburg County levied an additional 1% local tax. The combined rate is now 8.25%: 4.75% state + 2.00% county + 0.50% transit + 1.00% additional county.',
      },
      {
        label: 'That is a point higher than Raleigh',
        detail:
          'Wake County (Raleigh) remains at 7.25%. If you sell in both markets, you are now handling two different rates — a common source of under-collection for businesses that expanded from one to the other.',
      },
      {
        label: 'Corporate income tax — 2.00% flat',
        detail:
          'North Carolina’s flat 2.00% corporate income tax is among the lowest in the nation and is scheduled to phase down further. That part is unchanged.',
      },
      {
        label: 'Franchise tax — minimum $200, regardless of profit',
        detail:
          'The NC franchise tax is $1.50 per $1,000 of tax base, capped at $500 on the first $1 million, with a $200 minimum owed whether or not you made money.',
      },
    ],
    takeaway:
      'Under-collected sales tax is not the customer’s problem when the state comes looking — it is yours, out of margin you already spent. If nobody has re-checked your Charlotte rate since June, it is worth ten minutes.',
    verified: '2026-09-25',
    sources: [
      {
        label: 'NCDOR — Important Notice: Mecklenburg County Sales and Use Tax Increase',
        url: 'https://www.ncdor.gov/taxes-forms/sales-and-use-tax/other-sales-and-use-tax-resources/important-notices-issued-sales-and-use-tax-division/important-notice-mecklenburg-county-sales-and-use-tax-increase',
      },
      {
        label: 'NCDOR — Corporate Income and Franchise Tax Rates',
        url: 'https://www.ncdor.gov/taxes-forms/corporate-income-franchise-tax/corporate-income-and-franchise-tax-rates',
      },
    ],
  },
};

export function cityTaxGuide(slug: string): CityTaxGuide | undefined {
  return CITY_TAX_GUIDES[slug];
}
