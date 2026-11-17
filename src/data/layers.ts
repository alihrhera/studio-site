import type { CollectionEntry } from 'astro:content';

export type LayerId = 'mobile' | 'api' | 'dashboard';

// Three layers of one product. Named by what they do, never by framework.
export const layers: { id: LayerId; label: string; color: string; blurb: string; kind: 'phone' | 'dashboard' | 'pos' }[] = [
  { id: 'mobile', label: 'Mobile', color: '#b6cfae', kind: 'phone', blurb: 'Apps for iOS and Android. Offline-first, secure by default, with screens you can change without a store release.' },
  { id: 'api', label: 'API', color: '#e9d9a1', kind: 'dashboard', blurb: 'The backend behind it all: auth, payments, queues, push notifications and more than one language.' },
  { id: 'dashboard', label: 'Dashboard', color: '#bcc4e4', kind: 'dashboard', blurb: 'The admin panel your team runs the business from: orders, catalogue, content, roles.' },
];

type Project = CollectionEntry<'projects'>;

/** The real name appears only when permission is true. */
export const shownName = (p: Project) => (p.data.permission ? p.data.name : p.data.publicName);

/** Real pictures show only with permission: they carry the product's real name. */
export const shotsFor = (p: Project) => (p.data.permission ? p.data.shots : []);

export const sorted = (ps: Project[]) => [...ps].sort((a, b) => a.data.order - b.data.order);

/** Sample screen rows per layer. Labels only, never real data. */
export const samples: Record<LayerId, [string, string][]> = {
  mobile: [['09:30', 'Check-up'], ['10:15', 'Follow-up'], ['11:00', 'New patient']],
  api: [['GET', '/v1/orders'], ['POST', '/v1/orders'], ['PATCH', '/v1/orders/:id']],
  dashboard: [['Order received', 'Waiting'], ['Packing', 'In progress'], ['Delivered', 'Done']],
};
