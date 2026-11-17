import type { CollectionEntry } from 'astro:content';

export type LayerId = 'mobile' | 'api' | 'dashboard';

// Three layers of one product. Named by what they do, never by framework.
export const layers: { id: LayerId; label: string; color: string; blurb: string; kind: 'phone' | 'dashboard' | 'pos' }[] = [
  { id: 'mobile', label: 'Mobile', color: '#9ae187', kind: 'phone', blurb: 'Apps for iOS and Android. Offline-first, secure by default, with screens you can change without a store release.' },
  { id: 'api', label: 'API', color: '#f3ea7a', kind: 'dashboard', blurb: 'The backend behind it all: auth, payments, queues, push notifications and more than one language.' },
  { id: 'dashboard', label: 'Dashboard', color: '#b9c8ff', kind: 'dashboard', blurb: 'The admin panel your team runs the business from: orders, catalogue, content, roles.' },
];

type Project = CollectionEntry<'projects'>;

/** The real name appears only when permission is true. */
export const shownName = (p: Project) => (p.data.permission ? p.data.name : p.data.publicName);

export const sorted = (ps: Project[]) => [...ps].sort((a, b) => a.data.order - b.data.order);
