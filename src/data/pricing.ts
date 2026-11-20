// Prices in USD, from _private/PRICING.md (kept out of git). The site shows the entry offers only;
// project and retainer prices go in the PDF, after the call.
export const launch = { total: 10, booked: 0 }; // raise `booked` for every paid launch-price audit
// `launch` is the first-10 price: only audits have one.
export const plans: { id: string; launch?: number; regular: number }[] = [
  { id: 'focus', launch: 900, regular: 1200 },
  { id: 'full', launch: 1900, regular: 2400 },
  { id: 'scoping', regular: 1800 },
];
