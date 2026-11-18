// Audit prices in USD, from PRICING.md (kept out of git). The site shows the Audit only;
// project and retainer prices go in the PDF, after the call.
export const launch = { total: 10, booked: 0 }; // raise `booked` for every paid launch-price audit
export const audits = [
  { id: 'focus', launch: 900, regular: 1200 },
  { id: 'full', launch: 1900, regular: 2400 },
] as const;
