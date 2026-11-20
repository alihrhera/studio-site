// English is the source language. Arabic (ar.ts) must match this shape.
const WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];

export const en = {
  sep: ', ',
  langName: 'English',
  switchTo: 'العربية',
  nav: { home: 'Home', main: 'Main', work: 'Work', cover: 'What we cover', pricing: 'Pricing', team: 'Team', cta: 'Book an audit' },
  home: { title: 'A product squad for apps, APIs and dashboards', description: 'We ship the whole product: mobile app, API and dashboard.' },
  layers: {
    mobile: { label: 'Mobile', blurb: 'Apps for iOS and Android. Offline-first, secure by default, with screens you can change without a store release.' },
    api: { label: 'API', blurb: 'The backend behind it all: auth, payments, queues, push notifications and more than one language.' },
    dashboard: { label: 'Dashboard', blurb: 'The admin panel your team runs the business from: orders, catalogue, content, roles.' },
  },
  hero: {
    title: 'We ship the whole product.',
    lead: 'Mobile, API and dashboard from one team. The whole product, end to end.',
    cta: 'Book a one-week audit',
    see: 'See our work',
    pickerAria: 'Pick a layer to see where we shipped it',
    pickerNote: 'Pick a layer to see which products we shipped in it.',
    shippedPre: 'shipped in ',
    stackAlt: 'Three stacked layers: mobile, dashboard and API',
  },
  workHeading: (n: number) => `${WORDS[n] ?? n} products, our part in each.`,
  workTitle: (h: string) => `Work: ${h.toLowerCase()}`,
  work: {
    caseStudy: 'Case study', all: 'See all work', ourPart: 'Our part', layers: 'Layers', read: 'Read the case study',
    pageDescription: 'Case studies of apps, APIs and dashboards we built, and what our part was in each.',
    lead: 'Some were ours, some we built inside a client\'s team. Each page says which part we did.',
    freelanceHead: 'Freelance work',
    freelance: 'We also work on products other teams built. On Zajil, Hadreen and Taxigo that meant fixes and improvements, getting the app running, better performance and a smoother user experience.',
  },
  case: {
    title: (n: string) => `${n}: case study`, back: 'All work', period: 'Period', problem: 'The problem', built: 'What we built', result: 'The result', next: 'Next:',
    sample: (l: string) => `Sample ${l} screen`, sampleFrom: (n: string) => `Sample screen from ${n}`, sampleLayerFrom: (l: string, n: string) => `Sample ${l} screen from ${n}`,
  },
  layersSection: { head: 'Three layers. One product. One squad.', shipped: 'Shipped in: ' },
  process: {
    head: 'Small steps, each one you can see.',
    stages: [
      { name: 'Audit', text: 'One week on your app, API or dashboard. You get a written report and a fixed quote.', list: ['Findings report', 'Fixed price', 'Roadmap'] },
      { name: 'Build', text: 'A working build you can open on your phone, shown to you every week.', list: ['Weekly demo', 'Staging build', 'Shared repository'] },
      { name: 'Hand over', text: 'Store releases, documentation and a session with your team. The code is yours.', list: ['Store releases', 'Documentation', 'Handover session'] },
    ],
  },
  pricing: {
    head: 'Audit prices, in the open.',
    lead: 'Choose one layer or the whole product. One fixed price, paid upfront, and credited to your first project if you sign within 30 days.',
    plans: [
      { name: 'Focus', tag: 'One layer: app, API or dashboard', text: 'Five working days.', list: ['Written findings report', 'A plan, in order of priority', 'A fixed quote for the work'] },
      { name: 'Full', tag: 'All three layers', text: 'Five working days.', list: ['Written findings report', 'A plan, in order of priority', 'A fixed quote for the work'] },
    ],
    launch: 'Launch price, first 10 audits',
    regular: 'Regular price',
    left: (n: number, total: number) => `${n} of ${total} launch-price audits left`,
    call: 'A free 30-minute call comes first, to decide between Focus and Full.',
    more: 'Building a product, or need a team by the month? We scope it after the audit and quote a fixed price in writing.',
    cta: 'Book the audit',
    subject: 'Audit request',
  },
  team: {
    head: 'One team, every layer.',
    people: [
      { role: 'Native mobile', layer: 'mobile', text: 'Native apps, offline-first and secure.' },
      { role: 'Cross-platform mobile', layer: 'mobile', text: 'One codebase for iOS and Android, screens that change without a store release.' },
      { role: 'Backend', layer: 'api', text: 'APIs, payments, queues and data.' },
      { role: 'Web and dashboards', layer: 'dashboard', text: 'The admin dashboards and the web.' },
    ],
    statement: 'We work remotely, with clients anywhere in the world, in English or Arabic.',
  },
  audit: {
    head: 'Start with one week.',
    lead: 'A fixed-price audit of your app, API or dashboard. You get a written report and a plan, and we quote before any work starts.',
    cta: 'Book the audit',
    subject: 'Audit request',
  },
  faq: {
    head: 'Questions we hear first.',
    qa: [
      ['Who are you?', 'A small team of engineers across mobile, the API and the dashboard. We build the app, the API and the dashboard together, so nothing gets lost between teams.'],
      ['What does the audit cost?', 'A Focus audit (one layer) is $1,200 and a Full audit (all three layers) is $2,400. The first ten audits are at launch prices of $900 and $1,900. You pay upfront, and the whole amount is credited to your first project if you sign within 30 days.'],
      ['Where do you work?', 'Remotely, with clients anywhere in the world. We work in English or Arabic and overlap with your working hours.'],
      ['Can I see your code?', 'The case studies show what we built and which part was ours. Under an NDA we can walk you through the code itself.'],
      ['Who owns the code?', 'You do. Ownership passes to you at delivery and is written into the contract.'],
    ] as [string, string][],
  },
  footer: {
    places: 'Working remotely, with clients anywhere in the world', questions: 'Questions', how: 'How we work', top: 'Back to top', legal: '© 2026 PollenByte', tagline: 'From the engineering of nature to Software engineering.',
  },
};

export type Dict = typeof en;
