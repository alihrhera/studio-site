import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const LAYERS = ['mobile', 'api', 'dashboard'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    publicName: z.string(),
    permission: z.boolean(), // true = the real name may appear on the site
    ownedByStudio: z.boolean(),
    layers: z.array(z.enum(LAYERS)).min(1),
    summary: z.string(),
    role: z.string(),
    period: z.string().optional(),
    color: z.string().regex(/^#[0-9a-f]{6}$/i),
    order: z.number(),
    problem: z.string(),
    solution: z.string(),
    result: z.string().optional(), // only real, approved results
    done: z.array(z.string()).default([]), // what we did, one line each
    link: z.string().url().optional(), // public page of the product, shown as a button
    // Real pictures. Shown only when permission is true.
    shots: z.array(z.object({ src: z.string(), alt: z.string(), kind: z.enum(['wide', 'phone']), width: z.number().default(1440), height: z.number().default(900) })).default([]),
    // Arabic copy for the same fields. Names of products stay in Latin. `alts` follows `shots` by index.
    ar: z.object({
      publicName: z.string(),
      summary: z.string(),
      role: z.string(),
      problem: z.string(),
      solution: z.string(),
      result: z.string().optional(),
      done: z.array(z.string()).default([]),
      alts: z.array(z.string()).default([]),
    }),
    fragment: z.object({
      kind: z.enum(['phone', 'dashboard', 'pos']),
      title: z.string(),
      rows: z.array(z.tuple([z.string(), z.string()])).min(3),
    }),
  }),
});

export const collections = { projects };
