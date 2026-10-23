/**
 * Single source of truth for the blog index.
 *
 * Extracted from app/blog/page.tsx on 2026-09-25 so that the blog index, the
 * RSS feed (app/rss.xml/route.ts) and the sitemap all read the same list
 * instead of drifting apart. Add a new post here once; every consumer picks
 * it up.
 *
 * Keep newest-first — the index, the feed and `latestPosts()` all rely on
 * that ordering rather than re-sorting.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  minutes: number;
  cover: string;
  coverAlt: string;
  /**
   * The LinkedIn post copy for this article.
   *
   * This is NOT the excerpt and NOT a summary — it is its own piece of
   * writing, run through the `anthropic-skills:seo-blog-humor-style` skill,
   * with its own hook, analogy and callback. Accounting is a boring niche;
   * funny and interesting is the differentiator, and a feed-templated post
   * throws that away.
   *
   * It is published in the RSS feed as `<content:encoded>`, which is what the
   * "RSS by Zapier" trigger maps onto LinkedIn's Update Content field. That
   * is why the good copy lives here rather than only in a routine's report:
   * Zapier polls the feed from its own cloud, so posting keeps working when
   * this machine is closed.
   *
   * Constraints, enforced by scripts/post_to_linkedin.py and by LinkedIn:
   *   - 3,000 characters max
   *   - no unescaped `(` or `)` — LinkedIn's Little Text Format treats them as
   *     reserved. Easiest fix is to write copy that needs none.
   *
   * Optional: a post without it falls back to the excerpt in the feed, which
   * still works but reads flat.
   */
  linkedin?: string;
};

export const POSTS: Post[] = [
  {
    slug: 'do-contractors-charge-sales-tax-on-labor-in-ny',
    title: 'Do Contractors Charge Sales Tax on Labor in NY? Yes, Unless',
    excerpt:
      'New York taxes contractor labor on repairs, maintenance and installs, and not on capital improvements backed by Form ST-124. The three tests, common jobs sorted, the 90-day rule, and why you pay tax on materials either way.',
    date: '2026-10-23',
    minutes: 10,
    cover: '/blog/do-contractors-charge-sales-tax-on-labor-in-ny/hero-contractor-tools-on-wooden-table.webp',
    coverAlt:
      'Hand tools laid out on a worn wooden table: a hand saw, trowel, hammer, wrenches, nails, safety glasses, a clamp and an orange hard hat',
    linkedin: `Every contractor in New York has a glovebox with the same three things in it.

A tire gauge that has never touched a tire. Two takeout menus. And a small stack of Form ST-124s that may or may not be signed.

That stack is quietly deciding how much sales tax you owe.

Here is the rule, and it is not about labor at all. New York looks at what the property looks like when you drive away.

Think haircut versus tattoo. A haircut maintains what was already there, and it gets taxed. A tattoo is a permanent change, and it does not.

In contractor terms:

→ Repairs, maintenance and installs are taxed on the whole bill. Labor, materials, markups. Writing LABOR in bigger letters on the invoice does not change it.

→ Capital improvements are not taxed when the customer signs Form ST-124. Get it within 90 days and the burden of proof shifts to the customer.

→ Same carpet, different answer. As the first floor in a new building, it is an improvement. In a house finished more than six months ago, it is taxable. The carpet has no idea what day it is.

→ You pay tax on your own materials either way. The lumberyard does not ask where the two-by-fours are going.

Honest note from an accounting firm whose idea of a capital improvement is a second monitor: if you mostly build new decks and full remodels and you collect a signed ST-124 at the start of every job, you do not need us for this. You need a folder.

The full sorting key, roofs to driveways to paint:

https://njaccountstax.com/blog/do-contractors-charge-sales-tax-on-labor-in-ny

#Contractors #SalesTax #NewYork #SmallBusiness #Bookkeeping

Move the certificates out of the glovebox. The tire gauge can stay. It has earned its retirement.`,
  },
  {
    slug: 'when-is-nys-sales-tax-due',
    title: 'When Is NYS Sales Tax Due? Quarterly, Annual and Monthly',
    excerpt:
      "Quarterly New York sales tax returns are due June 20, September 20, December 20 and March 20, because the state's quarters end in May, August, November and February. The annual and monthly schedules, the weekend rule, zero returns and what a late 20th costs.",
    date: '2026-10-22',
    minutes: 9,
    cover: '/blog/when-is-nys-sales-tax-due/hero-vintage-cash-register-on-shop-counter.webp',
    coverAlt:
      'A mint green vintage cash register on a wooden shop counter beside a white teacup and saucer',
    linkedin: `Somewhere in New York right now there is a sticky note on a cash register that says "Q1 sales tax, due April 20."

It looks responsible. It is wrong twice.

New York does not run its sales tax year on the calendar. It runs it like a school year: the year starts in March, and nobody sends a reminder home in a backpack.

The four quarters are March to May, June to August, September to November and December to February. Each return is due 20 days after its quarter ends:

→ June 20
→ September 20
→ December 20
→ March 20

When the 20th lands on a weekend or holiday, it moves to the next business day. This quarter's return is due Monday, December 21, which is the week you are least likely to want to open a spreadsheet.

Two more things that catch people:

→ A season with zero sales still needs a return. File it late and the minimum penalty is $50, which is New York charging you for silence.

→ Paying late generally costs 10% of the tax for the first month, plus 1% a month after that, up to 30%, with interest compounding daily on top.

Honest admission from an accounting firm: if you sell from one location and your register already totals taxable sales by quarter, you do not need us for this. Put four dates in your phone. We would be embarrassed to bill you for it.

The full breakdown, with the annual and monthly schedules and how to tell which one you are on:

https://njaccountstax.com/blog/when-is-nys-sales-tax-due

#SmallBusiness #SalesTax #NewYork #Bookkeeping #SmallBusinessTips

Throw out the old sticky note. Write four new dates on a fresh one. The register will not remind you, no matter how long it has been on the counter.`,
  },
  {
    slug: 'how-to-learn-bookkeeping',
    title: 'How to Learn Bookkeeping: A 6-Step Plan for Owners',
    excerpt:
      'Learn the five account types, read the free IRS guide, then record and reconcile one real month of your own books. A six-step plan for owners, the reconciliation habit most skip, and when doing it yourself stops paying.',
    date: '2026-10-20',
    minutes: 10,
    cover: '/blog/how-to-learn-bookkeeping/hero-open-notebook-pen-wooden-desk.webp',
    coverAlt:
      'An open lined notebook with a black pen resting across its blank pages on a warm wooden desk by a window',
    linkedin: `Every business owner who decides to learn bookkeeping does the same thing first.

They buy a brand new notebook. They watch four videos about debits and credits. They write "debit = left??" on page one.

Meanwhile, in the next tab, their accounting software has 61 transactions sitting in a category called Uncategorized, which is what software calls it when it has quietly given up.

Learning bookkeeping is a lot like learning to do laundry. Sort, record, check, fold, repeat. Nobody ever got good at laundry by watching a lecture about fabric.

The plan that actually works:

→ Learn the five account types and about ten words. One evening, not a semester.

→ Read IRS Publication 583. It is free, it is dry, and it is the rulebook everyone else is paraphrasing.

→ Open a separate business checking account. The IRS calls it one of the first things you should do, and it turns bookkeeping from detective work into data entry.

→ Record one real month of your own transactions, then reconcile it to the bank statement. The reconciliation is the real exam, and it is the step most self-taught owners skip.

Repeat that cycle three months running and you know the core of the job. No certificate required: the Bureau of Labor Statistics says certification is not usually required even for professional bookkeeping clerks.

Honest admission from an accounting firm: if you have one bank account, no employees and a reconciliation that takes under an hour a month, you do not need us. Below that line, we are mostly an expensive way to avoid a YouTube video.

The full six-step plan, with the IRS sources and the arithmetic on when doing it yourself stops paying:

https://njaccountstax.com/blog/how-to-learn-bookkeeping

As for the notebook: keep it. Just make the second line "reconcile first."

#Bookkeeping #SmallBusiness #SmallBusinessOwner #Accounting #Entrepreneurship`,
  },
  {
    slug: 'accounting-for-donations-to-nonprofit-organizations',
    title: 'Accounting for Donations to Nonprofit Organizations: 6 Rules',
    excerpt:
      'Pledges are revenue when promised, matching gifts wait for the match, donated goods go in at fair value and most volunteer hours never touch the books. Six rules for recording gifts, plus the IRS receipt rules, with sources.',
    date: '2026-10-19',
    minutes: 10,
    cover: '/blog/accounting-for-donations-to-nonprofit-organizations/hero-donated-canned-goods-on-table.webp',
    coverAlt:
      'Stacks of unlabeled food cans beside bags of bread on a table at a donation drive',
    linkedin: `Every food pantry treasurer eventually gets the treadmill.

Not a metaphor. An actual treadmill, donated after the gala, now living in a volunteer's garage, waiting for someone to decide what it is worth.

Donations look like the simplest money a nonprofit receives. Someone gives, you say thank you, done. Then the accounting starts, and it turns out every gift has its own rules, like a family dinner where each cousin has a different allergy.

The short version:

→ A signed pledge is revenue the day it is promised, before a cent arrives. It works like an invoice, not a wish.

→ A matching gift is not revenue until the match happens. "We'll give $10,000 if you raise $10,000" is a promise with a punch card.

→ Donated goods go on the books at fair value. That means the sofa from the curb, not the sofa from the donor's memory.

→ Most volunteer hours never touch the books. An electrician rewiring the kitchen counts. The person sorting cans every Saturday is a hero and, for accounting purposes, invisible.

→ A single gift of $250 or more needs a written acknowledgment before the donor can deduct it. A gala ticket over $75 with dinner attached needs a disclosure of how much is actually deductible. Skip it and the IRS penalty is $10 per ticket, up to $5,000 per event.

Honest admission from an accounting firm: a small congregation taking cash and checks, with no pledges and no gala, can handle all of this with decent donor software and a careful volunteer. We mostly earn our fee once matching grants and multi-year pledges show up.

All six rules, with the journal entries and the IRS sources:

https://njaccountstax.com/blog/accounting-for-donations-to-nonprofit-organizations

As for the treadmill: describe it on the receipt, put a fair value on it in your books, and do not, under any circumstances, let anyone hold the next board meeting on it.

#Nonprofit #NonprofitAccounting #Fundraising #Bookkeeping #SmallBusiness`,
  },
  {
    slug: 'what-happens-if-you-dont-file-taxes-for-3-years',
    title: "What Happens If You Don't File Taxes for 3 Years, Explained",
    excerpt:
      'Three unfiled years means three sets of penalties if you owe, up to 47.5 percent a year plus interest, or three refunds on an expiry clock if you are owed. Substitute returns, the six-year rule and how to catch up, with IRS sources.',
    date: '2026-10-14',
    minutes: 11,
    cover: '/blog/what-happens-if-you-dont-file-taxes-for-3-years/hero-hourglass-in-afternoon-light.webp',
    coverAlt:
      'A glass hourglass of pale sand on a dark wooden table, crossed by bands of low afternoon sunlight',
    linkedin: `Every house has one drawer. Takeout menus, a single AA battery of unknown charge, a key to nothing, and, in a surprising number of homes, three years of tax paperwork that nobody has opened.

The IRS envelopes are usually at the bottom. Moving them there felt like progress.

So what actually happens if you don't file taxes for three years? It splits on one question: do you owe, or are you owed?

If you owe, each year is its own bill, running on its own clock:

→ Failure to file: 5% a month, capped at 25%. Most of the damage lands in the first five months, like a gym membership with a joining fee.

→ Failure to pay: 0.5% a month, also capped at 25%. Together the ceiling is 47.5% per year, plus interest with no ceiling at all.

→ The IRS can file a substitute return for you. It counts the income and can skip the deductions you would have claimed. It is a stranger packing your suitcase.

If you are owed refunds, there is usually no penalty, but each refund expires three years after that return was due. For tax year 2022, the IRS said over 1.3 million people left about $1.2 billion unclaimed. That deadline passed in April. The 2023 one is next.

And for a year with no return, the IRS clock to assess tax never starts. Its own guidance says to keep your records indefinitely.

Awkward admission from an accounting firm: if all three years are one W-2 and probably refunds, you do not need us. You need your IRS transcripts, an afternoon and a pot of coffee.

The full breakdown, with the real arithmetic and the order to fix it in:

https://njaccountstax.com/blog/what-happens-if-you-dont-file-taxes-for-3-years

Open the drawer this week. The envelopes are rarely as bad as the drawer makes them sound. The battery, on the other hand, is definitely dead.

#Taxes #SmallBusiness #SelfEmployed #IRS #Bookkeeping`,
  },
  {
    slug: 'when-should-i-start-my-taxes',
    title: 'When Should I Start My Taxes? A Month-by-Month Answer',
    excerpt:
      'Starting your taxes and filing them are two different dates. Gather in January, file the week after your last form arrives, and start earlier still if you are self-employed. The calendar, with IRS sources.',
    date: '2026-10-13',
    minutes: 10,
    cover: '/blog/when-should-i-start-my-taxes/hero-metal-mailbox-with-red-flag.webp',
    coverAlt:
      'A weathered metal roadside mailbox with its red flag raised, standing on a wooden post in front of a dark green hedge',
    linkedin: `Every January there is one person who files their taxes on the first possible evening and then mentions it to you. Twice. With the calm of someone who has already packed for a trip that is three months away.

And every February, that same person opens an envelope from an investing app they forgot they had.

Here is the thing nobody says out loud: starting your taxes and filing your taxes are two different jobs with two different dates. Treating them as one is like saying dinner takes three minutes because that is how long the microwave ran.

What the IRS calendar actually looks like:

→ Late January: the filing season opens and W-2s arrive. Start a folder. Do not press the button.

→ Mid-February: brokerage forms are due. For the 2025 tax year, brokers had until February 17. This is the envelope.

→ File a return that is missing a form and you fix it with an amended return. The IRS says to allow 8 to 12 weeks for that, sometimes 16.

→ Wait until April and miss the deadline, and filing late costs ten times what paying late does. Owe $3,000 and that is $150 a month against $15.

So the answer is neither early nor late. It is the week after your last form arrives. For most people that is a quiet stretch between mid-February and mid-March that almost nobody uses.

Self-employed? You have four payment dates of your own, and one of the IRS quarters is two months long. We are accountants and we cannot explain that either.

Awkward admission from a firm that sells this: with one job and one W-2, you need a folder and a free evening, not us.

The full month-by-month calendar, checked against the IRS:

https://njaccountstax.com/blog/when-should-i-start-my-taxes

File in March. You are still allowed to tell two people.

#Taxes #SmallBusiness #SelfEmployed #IRS #Bookkeeping`,
  },
  {
    slug: 'do-i-charge-sales-tax-on-services-in-texas',
    title: 'Do I Charge Sales Tax on Services in Texas? The Full List',
    excerpt:
      'Texas taxes services by list: 16 categories are taxable and everything else is not. What is on the list, the homes-versus-businesses split, the 5 percent rule and filing dates, with Comptroller sources.',
    date: '2026-10-12',
    minutes: 10,
    cover: '/blog/do-i-charge-sales-tax-on-services-in-texas/hero-orange-lawn-mower-on-backyard-grass.webp',
    coverAlt:
      'An orange and white push lawn mower standing on a freshly cut backyard lawn in front of a dark line of trees',
    linkedin: `There is a moment, late on a Friday, when a Texas business owner stares at the tax field on an invoice the way you stare at a parking sign with four different sets of hours on it.

You fixed a gate. You did not sell a gate. Surely nobody taxes a person for owning a drill.

Sometimes they do. Texas has no general sales tax on services. It has a guest list. Sixteen categories of service are on it. If yours is one of them, you collect. If not, you do not. The bouncer does not care how hard you worked.

→ On the list: lawn care, janitorial work, pest control, locksmiths, appliance repair, dog grooming, web hosting. Also fortune telling, which they presumably saw coming.

→ Not on the list: accounting, legal work, most consulting, design. And repair labor on a home.

→ The strange one: rehang a gate at a house and the labor is not taxed. Rehang the identical gate behind a dentist's office and the whole bill is taxed, labor and hinges together. Same drill. Different building.

→ The expensive one: bundle a taxable and a non-taxable service into one price, and if the taxable part is more than 5 percent, Texas presumes the whole thing is taxable. A $600 design plus $400 of planting on one line is taxed on $1,000. On two lines, it is taxed on $400.

It is one red sock in a white wash. Small sock. Pink everything.

Awkward confession from an accounting firm: our own service is not on the list, and most one-trade businesses can sort this out with a single careful read. We wrote the careful read anyway.

The full list, the 5 percent rule, the rate and the filing dates, all checked against the Texas Comptroller:

https://njaccountstax.com/blog/do-i-charge-sales-tax-on-services-in-texas

Read it before Friday. The parking sign will still be confusing. The invoice will not.

#SalesTax #Texas #SmallBusiness #Bookkeeping`,
  },
  {
    slug: 'bookkeeping-terms',
    title: 'Bookkeeping Terms: 25 Plain-English Definitions for Owners',
    excerpt:
      'The 25 bookkeeping terms a small-business owner actually meets, grouped by where you meet them instead of A to Z. Plain-English definitions, worked numbers and IRS sources.',
    date: '2026-10-12',
    minutes: 11,
    cover: '/blog/bookkeeping-terms/hero-tabbed-notebook-glasses-pencil.webp',
    coverAlt:
      'An open notebook full of handwritten notes with a row of coloured sticky tabs along its edge, a pair of round glasses and a pencil resting on the page, beside a closed laptop on a wooden desk',
    linkedin: `There is a specific kind of "yes" that only happens on the phone with a bookkeeper.

She asks, "Do you want me to accrue that, or just expense it when it clears?" And you say "Yes." Firmly. Like a tourist agreeing to whatever the waiter just said, and hoping it is not the fish.

Bookkeeping is a foreign language where every word is something you already know, wearing a suit. So here is the phrasebook, minus the page about aardvarks.

→ Accounts receivable: money customers owe you. Accounts payable: money you owe. They sound like two departments in a building you would not want to visit. They are "owed to me" and "owed by me."

→ Debit and credit: left and right. That is all. Your bank taught you one is good news and one is bad. In the books they have no mood whatsoever.

→ Cash basis or accrual basis: do you count a sale when you are paid, or when you earn it? Send a $480 invoice on March 28, get paid April 19. Cash basis calls that April. Accrual calls it March. Move it to December and it is a different tax year.

→ Revenue, gross profit, net profit: three numbers that all get called "what I made." On $7,400 of sales with $2,100 of parts and $1,850 of other costs, only $3,450 is the real answer.

→ Write-off: the most optimistic word in the language. A $500 write-off does not hand you $500. It lowers the income you are taxed on by $500.

Awkward confession from an accounting firm: you need about ten of these words, not all 25, and you do not need us to learn them. We wrote the full list anyway. Our business model is apparently "explain it so well they can leave."

All 25, in the order you actually meet them, with the IRS pages linked:

https://njaccountstax.com/blog/bookkeeping-terms

Next time she asks, you will not say yes. You will say "which one saves me money?" And it will not be the fish.

#Bookkeeping #SmallBusiness #Accounting #Entrepreneurs`,
  },
  {
    slug: 'is-tax-forgiveness-real',
    title: 'Is Tax Forgiveness Real? What the IRS Actually Offers',
    excerpt:
      'The IRS has no program called tax forgiveness, but several real ones can settle, pause, or trim a debt. What each does, who qualifies, and what waiting costs, with IRS sources.',
    date: '2026-10-11',
    minutes: 10,
    cover: '/blog/is-tax-forgiveness-real/hero-metal-mailbox-against-hedge.webp',
    coverAlt:
      'A weathered metal mailbox with a raised red flag standing on a wooden post in front of a dark green hedge',
    linkedin: `There is a radio ad that plays at 7:40 every morning, and it sounds more confident about your tax bill than you have ever felt.

"The IRS is FORGIVING tax debt. You may qualify." Then a man reads the terms at the speed of an auctioneer who has left the oven on.

So is tax forgiveness real? Partly. But asking the IRS for "forgiveness" is like walking into a hardware store and asking for the fixing tool. They have several. Which one you need depends on what is broken.

→ The Offer in Compromise is the one that actually shrinks the debt. In fiscal 2025, taxpayers proposed 38,797 offers and the IRS accepted 5,464. Roughly one in seven, and mostly people with very little left to collect.

→ Penalty relief is what "one-time forgiveness" usually means. Three clean years of filing and paying on time, and certain penalties come off. The tax stays. Think of a library waiving the late fee. You still have to return the book.

→ Currently Not Collectible is a pause button, not a delete key. Penalties and interest keep growing while you are paused.

→ A payment plan forgives nothing. It costs $29 to set up online with direct debit, and it halves the failure to pay penalty for an individual who filed on time.

That last one matters more than it sounds. On $28,000 of unpaid tax, the penalty runs $140 a month. Six months of waiting for forgiveness costs $840. An approved plan drops it to $70.

Now the awkward bit for an accounting firm. If you owe under $50,000 and your returns are filed, you probably do not need us. It is a phone call and an online form. We keep writing posts that end this way. We have been told there are easier ways to run a business.

The full guide, program by program, with every IRS page linked:

https://njaccountstax.com/blog/is-tax-forgiveness-real

Open the envelope. The man on the radio will still be talking when you get back.

#TaxDebt #IRS #SmallBusiness #TaxRelief #Bookkeeping`,
  },
  {
    slug: 'do-babysitters-have-to-pay-taxes',
    title: 'Do Babysitters Have to Pay Taxes? The $400 and $3,000 Rules',
    excerpt:
      'Babysitting money is taxable, even in cash. What you owe depends on whether you are self-employed or a household employee. Both rules, with worked numbers and IRS sources.',
    date: '2026-10-09',
    minutes: 10,
    cover: '/blog/do-babysitters-have-to-pay-taxes/hero-toy-train-on-wooden-floor.webp',
    coverAlt:
      'A baby hand resting on a light wooden floor beside a curved wooden toy train track with a red and a black toy train car',
    linkedin: `There is a text message that has frightened more babysitters than any toddler ever has.

"Hi love, can you send me your Social Security number? Our accountant needs it."

You are nineteen. You have spent the year being paid in Venmo transfers with notes like "sorry about the slime." Nobody mentioned accountants.

Here is what nobody tells sitters. Yes, babysitting money is taxable, even the folded twenties at the front door. But there are two completely different sets of rules, and which one you get works a lot like the difference between a taxi and a chauffeur.

A taxi driver picks the route, owns the car and takes whoever waves. A chauffeur drives the family's car, on the family's schedule, by the family's rules. Same skill. Different job.

→ Taxi: you mind kids in your own home, set your own rates and rules. You are self-employed. Once you clear $400 in a year you file a return and pay self-employment tax, which is 15.3% on most of your net.

→ Chauffeur: you work in their living room, by the laminated schedule on their fridge. You are a household employee. Social Security and Medicare only kick in when one family pays you $3,000 or more in 2026. Your share is 7.65%, and the family matches it.

→ Chauffeur who is under 18 and still in school: those wages generally are not counted for Social Security and Medicare at all.

The difference is real money. On $4,950 from three families, a sitter who wrongly assumes she is self-employed pays about $699. As a household employee with one family over the line, her share is $260.

So that scary text is good news. It means a family is putting your work on the record and paying half the bill.

Now the part where an accounting firm tells you not to hire an accounting firm. Most babysitters do not need us. A notes app, a total per family and free filing software will do it. We have been told this is not how marketing works.

The full guide, checked line by line against IRS publications:

https://njaccountstax.com/blog/do-babysitters-have-to-pay-taxes

Send the number. Keep the slime note. It is the closest thing to a pay stub you have.

#Babysitting #Taxes #SideHustle #SelfEmployed #NannyTax`,
  },
  {
    slug: 'is-labor-taxed-in-florida',
    title: 'Is Labor Taxed in Florida? Repairs, Contractors, Services',
    excerpt:
      'Repair labor is taxed the moment any part is used, even a free one. Most contractor labor on buildings is not. The three categories Florida uses, with the state sources.',
    date: '2026-10-08',
    minutes: 9,
    cover: '/blog/is-labor-taxed-in-florida/hero-open-toolbox-wrenches-on-concrete-floor.webp',
    coverAlt:
      'An open blue toolbox on a concrete floor filled with rows of wrenches, sockets and screwdrivers, with a pair of hands reaching for a socket',
    linkedin: `Every repair tech has a part they give away for free. A hose clamp. A washer. A squirt of lubricant. It lives loose in the van, it costs nothing, and you feel quietly generous every time you say "no charge for that."

In Florida, that free hose clamp is the most expensive thing on the invoice.

Here is why. Florida does not tax labor by how hard you worked. It taxes labor by what you touched. Think of it like airline baggage. Nobody at the counter cares how carefully you packed. They only care which category the bag is in.

There are three categories.

→ Things that move. Cars, mowers, phones, a washing machine that plugs into the wall. Labor is tax free only if the job was labor and nothing else. Add one part, even a free one, and the whole bill is taxable. Not the part. The whole bill.

→ Things that are bolted to the planet. Roofs, driveways, tile, central air. The contractor pays tax on the materials at the supplier and, under most contracts, charges the customer no sales tax at all.

→ A short list of named services. Security, commercial cleaning, commercial pest control. It reads less like tax policy and more like the supporting cast of a detective novel.

The line between the first two can be thin. The state's own example is a mailbox. Bricked into a post, it is part of the property. Screwed onto a wooden post, it is a movable object. Somebody in Tallahassee wrote that down with a straight face, and we respect them for it.

The practical fix is two words. If a repair really was labor only, write "Labor Only" on the invoice and keep it. That note is your entire defense, and it is free.

Now the part where we talk ourselves out of work, which is apparently our whole marketing strategy. If you do one kind of job in one county, you do not need an accountant for this. Learn your category once, set the tax in your invoicing app, file on the state portal. Done.

It gets harder when one business straddles the categories. The handyman who fixes the dishwasher and the wall behind it. The cleaner with offices and homes.

The full guide, with every rule checked against the Florida Department of Revenue's own publications:

https://njaccountstax.com/blog/is-labor-taxed-in-florida

Be generous with your customers. Just keep the hose clamps in a labeled bin, so you know when you have been.

#FloridaBusiness #SalesTax #SmallBusiness #Contractors #Bookkeeping`,
  },
  {
    slug: 'why-is-accounting-important-in-business',
    title: 'Why Is Accounting Important in Business? 5 Honest Reasons',
    excerpt:
      'It shows whether you are making money, what you owe in tax and what you can afford next. Five reasons with worked numbers, and how little of it a very small business needs.',
    date: '2026-10-06',
    minutes: 10,
    cover: '/blog/why-is-accounting-important-in-business/hero-round-table-order-forms-boxes-laptop.webp',
    coverAlt:
      'A round wooden table seen from above with two taped cardboard parcels, handwritten order sheets, a clipboard of forms, pens, a roll of packing tape and an open laptop',
    linkedin: `Every business owner has three numbers that all answer "so, how's business?"

Revenue is the one you mention at parties.
Profit is the one you tell your spouse.
Cash is the one your landlord is interested in.

Most owners are only watching the first one. It is the biggest, and it comes with a nice chart.

Running a business on revenue alone is like driving with only the speedometer working. You know exactly how fast you are going. You have no idea how much fuel is left, and the engine light is under a sticker.

Here is one month for an online seller. The numbers are illustrative. The shape is extremely real.

→ Sales: $18,400. Best month ever.

→ Profit: $4,850, after the cost of what was sold, fees and shipping.

→ Bank balance: down $550. Because $6,300 was still sitting in a payout queue and $9,000 went on stock for next month.

A good month, and the bank account got smaller. Without the middle number you cannot tell that apart from a bad month, and the two call for opposite reactions.

That is why accounting is important in business. Not the forms. The dials.

→ The IRS lists what good records are for, and the first item is to monitor the progress of your business. Tax comes further down its own list.

→ If you expect to owe $1,000 or more, you generally have to pay estimated tax during the year. That is hard to estimate from a feeling.

→ A deduction you cannot prove is a deduction you may not get to keep.

Now the awkward bit. An accounting firm explaining why accounting matters is about as surprising as a barber recommending a haircut.

So here is what the barber leaves out. If you are a one-person business with a few dozen transactions a month, you need a separate bank account, a spreadsheet and one honest hour a month. The IRS says the law does not require any special kind of records. You do not need us yet.

The full version, with the sums worked through and every source linked:

https://njaccountstax.com/blog/why-is-accounting-important-in-business

Go and find out what your landlord's number is. They already know.

#SmallBusiness #Accounting #Bookkeeping #CashFlow #Entrepreneurship`,
  },
  {
    slug: 'how-much-does-it-cost-to-do-your-taxes',
    title: 'How Much Does It Cost to Do Your Taxes? The Real Numbers',
    excerpt:
      'From $0 with IRS Free File to $600 or more for a business return. The IRS’s own averages, what moves the price, how preparers bill, and when free is enough.',
    date: '2026-10-05',
    minutes: 10,
    cover: '/blog/how-much-does-it-cost-to-do-your-taxes/hero-wooden-desk-tax-folder-coins.webp',
    coverAlt:
      'A wooden desk with a paper folder labelled taxes, a folded banknote, scattered coins, reading glasses, stacked files and a vintage rotary telephone',
    linkedin: `You know the moment. Forty minutes into "free" tax software, you mention one small thing, and a new screen appears. The screen has a price on it.

Nobody did anything wrong. You just asked a question that sounds like it has one answer and actually has about five.

Asking what it costs to do your taxes is like asking a mechanic what it costs to fix a car. The only honest reply is: well, what is it doing?

So here are real numbers, from the one source almost nobody reads. The IRS publishes its own estimate of how painful its own form is. It sits near the back of the 1040 instructions, like a confession.

→ Average filer: about 12 hours and $290.

→ No business income: about 8 hours and $160. That is 71% of returns.

→ Business income: about 21 hours and $610.

→ Of those 21 hours, 10 are recordkeeping. Filling in the actual form is 5. Roughly half the job is looking for things.

→ If your adjusted gross income is $89,000 or less, IRS Free File costs $0 for the federal return. Start from the IRS page, not the software company's own site, or you get the paid version.

That fourth line is the whole secret of what a business return costs. Nobody's tax return is expensive. Their January is expensive. A preparer quoting $900 is usually not pricing the return. They are pricing twelve months of uncategorised bank statements, done all at once, in March, by the most expensive person in the building.

One to walk away from: the IRS says to avoid any preparer whose fee is a percentage of your refund.

In fairness, our profession did this to itself. Accountants spent decades answering "what will it cost" with "it depends," which is accurate and also the least reassuring sentence in the language. We put our prices on a page mostly out of embarrassment.

And yes, we are about to say the thing again: if you have a W-2 and the standard deduction, you do not need us. File free. Spend the money on something with a better story.

The full breakdown, with every source linked:

https://njaccountstax.com/blog/how-much-does-it-cost-to-do-your-taxes

So. What is yours doing?

#Taxes #SmallBusiness #TaxPrep #IRS #Bookkeeping`,
  },
  {
    slug: 'is-tax-relief-advocates-legit',
    title: 'Is Tax Relief Advocates Legit? An Honest, Sourced Answer',
    excerpt:
      'Yes, it is a real, BBB-accredited company. Whether it fits your tax debt is a separate question. The public record, the real costs, and five questions to ask before signing.',
    date: '2026-10-01',
    minutes: 10,
    cover: '/blog/is-tax-relief-advocates-legit/hero-magnifier-documents-phone-desk.webp',
    coverAlt:
      'Overhead view of a magnifying glass resting on printed documents beside a smartphone, a fountain pen, a cup of coffee and a laptop on a pale wooden desk',
    linkedin: `You have typed a company's name into a search bar and then added the word "legit." Do not be embarrassed. It is the adult version of sniffing the milk.

This week's most-asked version in our corner of the internet: is Tax Relief Advocates legit?

Short answer: yes. Real company, Irvine California, BBB accredited since 2018, A+ rating when we checked on October 1.

Longer answer: "legit" is the lowest bar there is.

A restaurant with a health inspection certificate on the wall will not poison you. That certificate says nothing about whether you will like dinner, or what dinner costs.

So here is what is actually worth checking, with any tax relief firm at all:

→ A star rating and a long complaints list can both be true at once. Read the complaints for the pattern, not the count.

→ Only enrolled agents, CPAs and attorneys can represent you before the IRS. Ask for the person's name. If the answer is a department, that is an answer.

→ No firm has a private door. Every one of them uses the same IRS programs you can apply for yourself.

→ The IRS charges $29 to set up a payment plan online with direct debit, if you owe $50,000 or less. Paying thousands for that is like hiring movers to carry one box across the street. Sensible if the box is a piano. Usually it is a box.

→ Once a payment plan is approved, the monthly late-payment penalty drops from 0.5% to 0.25% for individuals who filed on time. Deciding is cheaper than browsing.

In fairness, we are an accounting firm reviewing a neighbor, which is a bit like one restaurant reviewing another. Salt accordingly. We have never worked with them and we say so in the piece. We also do not negotiate with the IRS ourselves, which makes us a strange choice of critic and a fairly safe one.

Everything is sourced to the IRS, the FTC and the BBB profile:

https://njaccountstax.com/blog/is-tax-relief-advocates-legit

The certificate on the wall means you can sit down. You still have to read the menu.

#SmallBusiness #TaxDebt #IRS #TaxRelief #Bookkeeping`,
  },
  {
    slug: 'does-shopify-collect-sales-tax',
    title: "Does Shopify Collect Sales Tax? What It Does and Doesn't Do",
    excerpt:
      'Shopify charges sales tax at checkout once you switch it on, but it never files or remits it. Where the line falls, the one exception, and why Etsy is different.',
    date: '2026-09-30',
    minutes: 10,
    cover: '/blog/does-shopify-collect-sales-tax/hero-packing-desk-labels-laptop.webp',
    coverAlt:
      'An overhead view of a wooden desk with labelled shipping boxes, a tape dispenser, printed order forms on a clipboard and an open laptop',
    linkedin: `There is a column in your Shopify reports called "taxes." You have looked at it. You have never once clicked it.

Fair enough. It has a number in it, the number goes up, and nothing on the screen has ever suggested you should do something about that.

Here is the thing nobody tells new store owners: Shopify collects sales tax. Shopify does not send it anywhere.

Picture a waiter who adds the tax line to your check perfectly, hands you the cash at the end of the night, and goes home. Impeccable arithmetic. Zero follow-through.

What that means in practice:

→ Shopify charges tax only in the states you switched on. A brand new store charges nothing, anywhere, until you tell it to.

→ Registering, filing and paying are all you. No form is generated. No deadline is tracked.

→ The tax arrives in your payout mixed in with your revenue. It looks like a good month. It is a slightly less good month wearing a costume.

→ One real exception: orders through the Shop app are collected, remitted and filed by Shopify. Orders through Shop Pay on your own checkout are not. Same brand, one word apart, opposite treatment.

→ Etsy is different because state law makes it different. Etsy is a marketplace facilitator. Your own store is not a marketplace. It is your shop.

The fix costs about ten minutes a month. Book the collected tax as a liability rather than revenue, and sweep the cash into a separate account. Then the quarterly payment is a transfer instead of an event.

And the part we are apparently constitutionally unable to stop saying: if you sell in one state and ship mostly within it, you do not need us for this. Register once, file on the state portal, roughly twenty minutes a quarter. We would rather tell you that than invoice you for it.

It stops being twenty minutes when the states multiply. That is a different conversation, and a longer one.

Full breakdown, including the nexus thresholds and the bits that catch people out:

https://njaccountstax.com/blog/does-shopify-collect-sales-tax

Shopify is an excellent waiter. Just remember that nobody has walked the money to the bank yet.

#Shopify #Ecommerce #SalesTax #SmallBusiness #Bookkeeping`,
  },
  {
    slug: 'what-happens-if-i-didnt-file-last-years-taxes',
    title: "What Happens If I Didn't File Last Year's Taxes? Next Steps",
    excerpt:
      "If you're owed a refund, there's no penalty, but a three-year clock. If you owe, filing late costs ten times more than paying late. What the IRS can do, and how to catch up.",
    date: '2026-09-28',
    minutes: 10,
    cover: '/blog/what-happens-if-i-didnt-file-last-years-taxes/hero-bundle-of-unopened-letters.webp',
    coverAlt:
      'A stack of airmail envelopes and a handwritten card tied together with twine on a dark table',
    linkedin: `There is an envelope from the IRS on your kitchen counter. It has been there since June. At this point it is less a letter and more a coaster.

If you didn't file last year's return, here's the part nobody tells you: the IRS is far more upset that you didn't file than that you didn't pay.

Think of a parent who is mostly fine that you missed curfew, but genuinely hurt that you didn't text. Not filing is the not-texting.

The numbers, straight from the IRS:

→ Not filing costs 5% of the unpaid tax per month, up to 25%.

→ Not paying costs 0.5% per month. Ten times less.

→ Owe $4,000 and file five months late, and the penalties come to about $1,000. File on time and just not pay, and those same five months cost $100.

→ If the IRS owes you a refund, there is no penalty at all. But you only have three years to claim it, and then the money is gone for good.

So the move is almost always the same: file the missing return now, even if you can't pay yet.

We're accountants. Opening IRS envelopes is, sadly, one of the more exciting parts of our week. We wrote the whole thing up in plain English, including the version where you honestly don't need to hire anyone at all.

https://njaccountstax.com/blog/what-happens-if-i-didnt-file-last-years-taxes

Go ahead and lift the mug. The envelope is smaller than it looks.

#SmallBusiness #Tax #IRS #Bookkeeping #SelfEmployed`,
  },
  {
    slug: 'sales-tax-compliance-services',
    title: 'Sales Tax Compliance Services: What Small Businesses Need',
    excerpt:
      'What sales tax compliance services cover, whether labor is taxed in Texas, Florida and New York, when returns are due, and when you can honestly do it yourself.',
    date: '2026-09-26',
    minutes: 10,
    cover: '/blog/sales-tax-compliance-services/hero-vintage-cash-register-counter.webp',
    coverAlt:
      'A pale green vintage cash register with a hand crank on a shop counter beside a white teacup and saucer',
    linkedin: `It's the 19th. The sales tax return is due tomorrow. And you are staring at a $50 invoice that says "tightened loose bolts," wondering whether the drop of oil you used on the stuck one counts as a sale.

In Florida, it might. That is not a joke. It is the Department of Revenue's own example.

With sales tax, you are the middleman. You collect it from your customer, hold it for a few weeks, and hand it to the state — like being the friend stuck holding everyone's coats at a party, except the coats are money and the host can audit you.

What trips up small businesses most is labor:

→ Texas taxes a list of services. Repairing a homeowner's kitchen is not on it. Repairing a restaurant's kitchen is.

→ Florida exempts labor-only repairs, but only if your records prove no part or material went in. One part, and the whole charge is taxable.

→ New York taxes contractor repair work, labor included. Capital improvements are not taxed.

And every one of those states wants a return even when you sold nothing. The zero return feels silly. States do not find it silly.

We are accountants, so reading three states' sales tax bulletins counts as a fun evening for us. We wrote it all up in plain English, including when you honestly do not need to pay anyone to handle this.

https://njaccountstax.com/blog/sales-tax-compliance-services

A drop of oil is cheap. Knowing what it means is cheaper than finding out later.

#SmallBusiness #SalesTax #Bookkeeping #Contractors #Tax`,
  },
  {
    slug: 'why-is-tax-relief-services-calling-me',
    title: 'Why Is Tax Relief Services Calling Me? And How to Stop It',
    excerpt:
      'The calls are not the IRS. They start because your number sold to a lead list, usually after a public tax lien. How the pitch works, and how to make it stop.',
    date: '2026-08-28',
    minutes: 9,
    cover: '/blog/why-is-tax-relief-services-calling-me/hero-desk-phone-document-tray.webp',
    coverAlt:
      'A classic black push-button desk telephone beside a wire document tray holding white papers on a wood-veneer office desk',
    linkedin: `You know the call. Different number every time, always a "Senior Tax Resolution Specialist," always somehow free to talk right this second.

Here's the part nobody mentions: that is not the IRS.

A tax lien is public record. Filing one is less like sealing an envelope and more like putting your phone number on a billboard — and there is an entire industry out there that reads billboards for a living. Your number hit a lead list, the list got sold, the phone started ringing. None of it is coincidence. It's the product working exactly as designed.

Three things worth knowing:

→ The IRS opens with a letter. Not a call, not a text, and never a gift card. If someone skipped the boring envelope stage entirely, be suspicious.

→ "Pennies on the dollar" is a sales line, not a program. Offer in Compromise is real — but the IRS decides who qualifies, and a call centre gets exactly zero votes.

→ Most of what they want to charge you for is free at irs.gov. Tedious, yes. Free, also yes.

We're accountants. We are not, by trade, a thrilling people. But we wrote the whole thing up in plain English anyway — including the part about making the calls actually stop.

https://njaccountstax.com/blog/why-is-tax-relief-services-calling-me

Your Senior Tax Resolution Specialist will have to find someone else to help.

#SmallBusiness #Tax #IRS #Bookkeeping #TaxRelief`,
  },
  {
    slug: 'do-seniors-have-to-file-taxes',
    title: 'Do Seniors Have to File Taxes? A Plain-English Answer',
    excerpt:
      'There is no age when filing stops. The 2025 income thresholds for people over 65, what income the IRS counts, the Social Security rules, and the new senior deduction.',
    date: '2026-08-28',
    minutes: 10,
    cover: '/blog/do-seniors-have-to-file-taxes/hero-tax-folders-reading-glasses-desk.webp',
    coverAlt:
      'A wooden desk with two folders labeled taxes, a vintage rotary telephone, wire-rimmed reading glasses, loose coins and cash under a warm desk lamp',
  },
  {
    slug: 'is-fresh-start-tax-relief-legit',
    title: 'Is Fresh Start Tax Relief Legit? What Is Real, What Is Not',
    excerpt:
      'The IRS Fresh Start changes are real, but they are not a program you enroll in. What is genuine, what is a sales pitch, and what you can do yourself for free.',
    date: '2026-08-27',
    minutes: 9,
    cover: '/blog/is-fresh-start-tax-relief-legit/hero-calculator-magnifier-tax-form.webp',
    coverAlt:
      'Overhead view of a calculator and a magnifying glass resting on a printed 1040 tax form with W-9 and W-4 forms on a wooden desk',
  },
  {
    slug: 'when-to-hire-a-tax-attorney',
    title: 'When to Hire a Tax Attorney (and When You Don’t)',
    excerpt:
      'The specific situations that genuinely need a tax attorney, the far more common ones that don’t, and a 60-second gut-check to tell them apart.',
    date: '2026-08-27',
    minutes: 9,
    cover: '/blog/when-to-hire-a-tax-attorney/hero-stacked-case-documents.webp',
    coverAlt:
      'A close-up overhead view of a thick stack of assorted papers and documents fanned out on a desk surface',
  },
  {
    slug: 'bookkeeping-vs-accounting',
    title: 'Bookkeeping vs. Accounting: What’s the Difference?',
    excerpt:
      'A bookkeeper records the numbers; an accountant interprets them, files your taxes, and tells you what to do next. Where the line actually falls, and what each one costs.',
    date: '2026-08-25',
    minutes: 9,
    cover: '/blog/bookkeeping-vs-accounting/hero-calculator-notepad-cash.webp',
    coverAlt:
      'Overhead view of a scientific calculator and a blank spiral notepad resting on a fan of US dollar bills, with a silver pen laid beside them on a white marble surface',
  },
  {
    slug: 'tax-resolution-services',
    title: 'Tax Resolution Services: What They Actually Cover',
    excerpt:
      'Tax resolution services cover IRS payment plans, Offers in Compromise, and penalty relief. What’s real, what’s a scam, and what you can do yourself for free.',
    date: '2026-08-24',
    minutes: 9,
    cover: '/blog/tax-resolution-services/hero-desk-calculator-notices.webp',
    coverAlt:
      'A calculator, phone, pay stub and a notepad with handwritten totals spread across a desk',
  },
  {
    slug: 'accrual-basis-accounting',
    title: 'Accrual Basis Accounting: What It Is and How It Works',
    excerpt:
      'Accrual basis accounting counts income when you earn it and expenses when you incur them. Who has to use it, and why it can show a profit while your bank account disagrees.',
    date: '2026-08-17',
    minutes: 9,
    cover: '/blog/accrual-basis-accounting/hero-ledger-and-unpaid-invoices.webp',
    coverAlt:
      'An open leather-bound ledger with hand-ruled columns of numbers on a wooden desk, beside a clipped stack of invoices, a rolled landscape blueprint tied with string, stacked stone paver samples, an old adding machine with curling paper tape, and a cooling mug of coffee',
  },
  {
    slug: 'how-much-does-a-tax-attorney-cost',
    title: 'How Much Does a Tax Attorney Cost? A Straight Answer',
    excerpt:
      'Real ranges by the hour and by the case, when you actually need one, and the free tax help most people never hear about.',
    date: '2026-08-10',
    minutes: 9,
    cover: '/blog/how-much-does-a-tax-attorney-cost/hero-desk-folders-and-legal-pad.webp',
    coverAlt:
      'An overhead view of a stack of manila folders tied with string, a yellow legal pad covered in handwritten notes, an antique push-button calculator, and wire-rimmed reading glasses on a worn wooden desk',
  },
  {
    slug: 'cash-basis-accounting',
    title: 'Cash Basis Accounting: What It Is and When It Works',
    excerpt:
      'Cash basis accounting counts money when it moves, not when it’s earned. What it means, who has to switch to accrual, and when it’s smart to do it anyway.',
    date: '2026-07-29',
    minutes: 9,
    cover: '/blog/cash-basis-accounting/hero-cash-drawer-and-ledger.webp',
    coverAlt:
      'An open cash drawer with neatly stacked bills and coins beside a spiral notebook of hand-ruled daily totals and a fan of paper receipts, on a sunlit wooden counter',
  },
  {
    slug: 'fund-accounting',
    title: 'What is fund accounting? A plain-English guide for nonprofits',
    excerpt:
      'Fund accounting tracks donations and grants by purpose instead of one bank total. What it means, when a spreadsheet still works, and when a CPA has to sign off.',
    date: '2026-07-25',
    minutes: 9,
    cover: '/blog/fund-accounting/hero-ledger-and-fund-folders.webp',
    coverAlt:
      'A worn ledger book, folders labeled Donations, Expenses and Volunteers, and an old adding machine with curling paper tape on a sunlit wooden desk',
  },
  {
    slug: 'can-you-do-taxes-without-w2',
    title: 'Can you do taxes without a W-2? Yes — here’s exactly how',
    excerpt:
      'The IRS has a form for exactly this. How Form 4852 works, how to pull your wage data free, and why waiting costs ten times more than owing.',
    date: '2026-07-22',
    minutes: 9,
    cover: '/blog/can-you-do-taxes-without-w2/hero-missing-w2-paperwork.webp',
    coverAlt:
      'A torn-open IRS envelope, a fan of paper pay stubs, and a laptop showing a blank tax form on a kitchen table',
  },
  {
    slug: 'do-i-need-an-accountant-for-your-small-business',
    title: 'Do you actually need an accountant for your small business?',
    excerpt:
      'Six honest signs it’s time, three signs it isn’t, the real cost math, and the questions to ask before you hire.',
    date: '2026-07-15',
    minutes: 8,
    cover: '/blog/do-i-need-an-accountant-for-your-small-business/hero-kitchen-table-shoebox.webp',
    coverAlt:
      'A small-business owner at her kitchen table with a laptop and a shoebox of paper receipts, morning window light',
  },
];

/** Newest `n` posts, for the feed and for "keep reading" rails. */
export function latestPosts(n: number): Post[] {
  return POSTS.slice(0, n);
}

/** Look up a single post by slug. Returns undefined if it is not registered. */
export function postBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/**
 * Every post except the one given — the candidate pool for internal links.
 * Internal linking was a 🔴 audit finding: blog posts are the only pages that
 * rank, and they were passing no authority to the commercial pages.
 */
export function otherPosts(slug: string): Post[] {
  return POSTS.filter((p) => p.slug !== slug);
}
