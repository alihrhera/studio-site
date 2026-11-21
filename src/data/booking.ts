// Cal.com pages for the free 30-minute call, one per language. A language with no page keeps the
// old target (email, or the audit section).
const pages: Record<string, string> = {
  en: 'https://cal.com/ali-hrhera-dtnrq1/free-call',
  ar: 'https://cal.com/ali-hrhera-dtnrq1/ar-free-call',
};
export const bookHref = (locale: string, fallback: string) => pages[locale] || fallback;
export const bookAttrs = { target: '_blank', rel: 'noopener' };
