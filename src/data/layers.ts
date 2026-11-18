import type { CollectionEntry } from 'astro:content';
import { ui, type Locale } from '../i18n';

export type LayerId = 'mobile' | 'api' | 'dashboard';

// Three layers of one product. Named by what they do, never by framework.
// `label` is English on purpose: it is drawn into the 3D picture. Page text uses ui[locale].layers.
export const layers: { id: LayerId; label: string; color: string; kind: 'phone' | 'dashboard' | 'pos' }[] = [
  { id: 'mobile', label: 'Mobile', color: '#b6cfae', kind: 'phone' },
  { id: 'api', label: 'API', color: '#e9d9a1', kind: 'dashboard' },
  { id: 'dashboard', label: 'Dashboard', color: '#bcc4e4', kind: 'dashboard' },
];

type Project = CollectionEntry<'projects'>;

/** The real name appears only when permission is true. */
export const shownName = (p: Project, l: Locale = 'en') =>
  p.data.permission ? p.data.name : l === 'ar' ? p.data.ar.publicName : p.data.publicName;

/** Project copy in the page language. */
export const text = (p: Project, l: Locale) => (l === 'ar' ? { ...p.data, ...p.data.ar } : p.data);

/** Real pictures show only with permission: they carry the product's real name. */
export const shotsFor = (p: Project, l: Locale = 'en') =>
  p.data.permission ? p.data.shots.map((s, i) => ({ ...s, alt: (l === 'ar' && p.data.ar.alts[i]) || s.alt })) : [];

export const sorted = (ps: Project[]) => [...ps].sort((a, b) => a.data.order - b.data.order);

/** Sample screen rows per layer. English on purpose: they are pictures of an app, not page text. */
export const samples: Record<LayerId, [string, string][]> = {
  mobile: [['09:30', 'Check-up'], ['10:15', 'Follow-up'], ['11:00', 'New patient']],
  api: [['GET', '/v1/orders'], ['POST', '/v1/orders'], ['PATCH', '/v1/orders/:id']],
  dashboard: [['Order received', 'Waiting'], ['Packing', 'In progress'], ['Delivered', 'Done']],
};

// Prefix a site path with the deploy base (GitHub Pages serves under /<repo>/) and the language.
export const url = (p: string, l: Locale = 'en') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${l === 'ar' ? '/ar' : ''}/${p.replace(/^\//, '')}`;

export const layerLabel = (id: string, l: Locale) => ui[l].layers[id as LayerId].label;
