import { animate, inView, scroll } from 'motion';

const ease = [0.2, 0.7, 0.1, 1] as const;

/** The nav takes the ink of the chapter beneath it. */
function trackNav() {
  const nav = document.getElementById('nav');
  const fields = [...document.querySelectorAll<HTMLElement>('[data-field]')];
  if (!nav || !fields.length) return;
  let queued = false;
  const update = () => {
    queued = false;
    const hit = fields.find((f) => { const r = f.getBoundingClientRect(); return r.top <= 32 && r.bottom > 32; });
    if (!hit) return;
    nav.style.setProperty('--nav-ink', hit.dataset.ink ?? '#16181d');
    nav.style.setProperty('--nav-field', hit.dataset.field ?? '#f2eee6');
  };
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/** Parts of each section rise in one after another, once. Content stays visible if anything fails. */
function reveal() {
  const els = [...document.querySelectorAll<HTMLElement>('.reveal')];
  const show = (el: HTMLElement) => { el.style.opacity = '1'; el.style.transform = 'none'; };
  try {
    const seen = new Map<Element, number>();
    els.forEach((el) => {
      const n = seen.get(el.parentElement!) ?? 0;
      seen.set(el.parentElement!, n + 1);
      el.dataset.delay = String(Math.min(n, 6) * 0.075);
      el.style.opacity = '0.7'; el.style.transform = 'translateY(26px)';
    });
    els.forEach((el) =>
      inView(el, () => {
        animate(el, { opacity: [0.7, 1], transform: ['translateY(26px)', 'translateY(0px)'] }, { duration: 0.7, delay: Number(el.dataset.delay), ease }).finished.then(() => show(el));
      }, { margin: '0px 0px -8% 0px' }),
    );
    setTimeout(() => els.forEach((el) => { if (el.style.opacity === '0.7' && el.getBoundingClientRect().top < innerHeight) show(el); }), 3000);
  } catch { els.forEach(show); }
}

/** One slow scroll-linked drift on the interface pictures. */
function drift() {
  document.querySelectorAll<HTMLElement>('.frag').forEach((el) => {
    const rows = el.querySelector<HTMLElement>('.frag-rows');
    if (rows) scroll(animate(rows, { transform: ['translateY(14px)', 'translateY(-14px)'] }, { ease: 'linear' }), { target: el, offset: ['start end', 'end start'] });
  });
}

export function initMotion() {
  trackNav();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  reveal();
  drift();
}
