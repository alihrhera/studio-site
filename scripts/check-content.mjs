// Run after `astro build`: content rules that must hold for every project.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/content/projects';
let files = [];
try { files = readdirSync(dir).filter((f) => f.endsWith('.md')); } catch {}
const errors = [];
if (files.length === 0) errors.push(`no projects in ${dir}`);

const scalar = (fm, key) => fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^["']|["']$/g, '');

const html = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && html.push([p, readFileSync(p, 'utf8')]);
  }
};
try { walk('dist'); } catch { errors.push('dist missing: build first'); }

for (const f of files) {
  const fm = readFileSync(join(dir, f), 'utf8').split('---')[1] ?? '';
  const name = scalar(fm, 'name');
  const publicName = scalar(fm, 'publicName');
  if (!name || !publicName) errors.push(`${f}: name and publicName are required`);
  if (!/^layers:\s*\[.+\]/m.test(fm)) errors.push(`${f}: needs at least one layer`);
  if (scalar(fm, 'permission') !== 'true') {
    for (const [, src] of fm.matchAll(/src:\s*"([^"]+)"/g))
      for (const [p, h] of html) if (h.includes(src)) errors.push(`${f}: picture ${src} shown without permission in ${p}`);
  }
  if (scalar(fm, 'permission') !== 'true' && name && name !== publicName) {
    const re = new RegExp(`\\b${name}\\b`);
    for (const [p, h] of html) if (re.test(h)) errors.push(`${f}: "${name}" leaks in ${p} without permission`);
  }
}

if (errors.length) { console.error('check-content FAIL\n' + errors.join('\n')); process.exit(1); }
console.log(`check-content OK (${files.length} projects, ${html.length} pages)`);
