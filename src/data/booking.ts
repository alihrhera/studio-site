// Cal.com page for the free 30-minute call. While it is empty, every button keeps its old target
// (email, or the audit section), so the site works before the page exists.
export const bookingUrl = '';
export const bookHref = (fallback: string) => bookingUrl || fallback;
export const bookAttrs = bookingUrl ? { target: '_blank', rel: 'noopener' } : {};
