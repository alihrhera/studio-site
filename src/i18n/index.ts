import { en } from './en';
import { ar } from './ar';

export type Locale = 'en' | 'ar';
export const ui = { en, ar } satisfies Record<Locale, typeof en>;
export const dirOf = (l: Locale) => (l === 'ar' ? 'rtl' : 'ltr');
export const otherLocale = (l: Locale): Locale => (l === 'ar' ? 'en' : 'ar');
