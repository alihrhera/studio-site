import * as THREE from 'three';
import { animate } from 'motion';

export type StackLayer = { id: string; label: string; color: string; kind: 'phone' | 'dashboard' | 'pos' };
export type StackHandle = { select(id: string | null): void; destroy(): void };

const W = 3.5, D = 2.4, H = 0.16;
const INK = '#0d0d0d';

/** Draws one flat interface fragment on the slab's top face. No data is real. */
function drawTop(layer: StackLayer): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = Math.round((1024 * D) / W);
  const g = c.getContext('2d')!;
  g.fillStyle = layer.color; g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = INK; g.textBaseline = 'alphabetic';
  const f = (px: number, w = 500) => (g.font = `${w} ${px}px "Hanken Grotesk Variable", system-ui, sans-serif`);

  f(76); g.fillText(layer.label, 44, c.height - 44);
  const x0 = 44, y0 = 40, bw = c.width - 88;
  const row = (y: number, a: string, b: string, filled = false) => {
    if (filled) { g.fillRect(x0, y, bw, 54); g.fillStyle = layer.color; } else g.fillStyle = INK;
    f(30); g.fillText(a, x0 + 18, y + 38);
    g.textAlign = 'right'; g.fillText(b, x0 + bw - 18, y + 38); g.textAlign = 'left'; g.fillStyle = INK;
  };

  if (layer.id === 'mobile') {
    row(y0, '09:30', 'Check-up', true); row(y0 + 66, '10:15', 'Follow-up'); row(y0 + 132, '11:00', 'New patient'); row(y0 + 198, '11:45', 'Renewal');
  } else if (layer.id === 'api') {
    ['GET /v1/orders', 'POST /v1/orders', 'PATCH /v1/orders/:id', 'GET /v1/products'].forEach((t, i) => { f(34, i === 1 ? 600 : 500); g.fillText(t, x0, y0 + 46 + i * 62); });
  } else {
    row(y0, 'Order received', 'Waiting', true); row(y0 + 66, 'Packing', 'In progress'); row(y0 + 132, 'Out for delivery', 'On the way'); row(y0 + 198, 'Delivered', 'Done');
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

const shade = (hex: string, k: number) => new THREE.Color(hex).multiplyScalar(k);

export function mountLayerStack(host: HTMLElement, opts: { layers: StackLayer[] }): StackHandle | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    return null; // no WebGL: the static fallback stays
  }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 50);
  camera.position.set(7.2, 6.2, 8.4); camera.lookAt(0, 0, 0);
  const group = new THREE.Group(); scene.add(group);

  // Top to bottom: client apps first, API as the foundation.
  const order = ['mobile', 'dashboard', 'api'];
  const slabs = order.map((id) => opts.layers.find((l) => l.id === id)!).filter(Boolean).map((layer) => {
    const side = new THREE.MeshBasicMaterial({ color: shade(layer.color, 0.62) });
    const top = new THREE.MeshBasicMaterial({ map: drawTop(layer) });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), [side, side, top, side, side, side]);
    group.add(mesh);
    return { id: layer.id, mesh, top, side, dim: 1, lift: 0 };
  });

  let spread = 0.3, scrollSpread = 0, selected: string | null = null, pointerX = 0, running = false, raf = 0, t0 = performance.now();

  const render = (now: number) => {
    const gap = 0.3 + 0.95 * Math.min(1, spread + scrollSpread);
    slabs.forEach((s, i) => {
      const isSel = selected === s.id;
      s.lift += ((isSel ? 0.55 : 0) - s.lift) * 0.12;
      s.dim += ((selected && !isSel ? 0.35 : 1) - s.dim) * 0.12;
      s.mesh.position.set(s.lift * 0.6, (slabs.length / 2 - 0.5 - i) * gap, s.lift * -0.3);
      s.top.color.setScalar(s.dim); s.side.color.copy(shade(opts.layers.find((l) => l.id === s.id)!.color, 0.62 * s.dim));
    });
    const sway = reduced ? 0 : Math.sin((now - t0) / 3200) * 0.06;
    group.rotation.y += ((pointerX * 0.25 + sway) - group.rotation.y) * 0.06;
    renderer.render(scene, camera);
  };
  const loop = (now: number) => { render(now); raf = requestAnimationFrame(loop); };
  const start = () => { if (!running && !reduced) { running = true; raf = requestAnimationFrame(loop); } };
  const stop = () => { running = false; cancelAnimationFrame(raf); };
  const once = () => render(performance.now());

  const size = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.zoom = Math.min(1, width / (height * 1.05));
    camera.updateProjectionMatrix(); once();
  };
  const ro = new ResizeObserver(size); ro.observe(host);

  const onScroll = () => { scrollSpread = Math.min(1, Math.max(0, scrollY / (innerHeight * 0.9))) * 0.7; if (!running) once(); };
  const onPointer = (e: PointerEvent) => { pointerX = (e.clientX / innerWidth - 0.5) * 2; if (!running) once(); };
  const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.05 }); io.observe(host);
  const onLost = (e: Event) => { e.preventDefault(); handle.destroy(); host.classList.remove('is-live'); };
  renderer.domElement.addEventListener('webglcontextlost', onLost);
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('pointermove', onPointer, { passive: true });

  if (!reduced) animate(0.3, 1, { duration: 1.4, ease: [0.2, 0.7, 0.1, 1], onUpdate: (v) => { spread = v * 0.35; } });
  else { spread = 0.35; }
  size(); host.classList.add('is-live');

  const handle: StackHandle = {
    select(id) { selected = id; if (!running) { for (let i = 0; i < 30; i++) render(performance.now()); } },
    destroy() {
      stop(); ro.disconnect(); io.disconnect();
      removeEventListener('scroll', onScroll); removeEventListener('pointermove', onPointer);
      renderer.domElement.removeEventListener('webglcontextlost', onLost);
      slabs.forEach((s) => { s.mesh.geometry.dispose(); s.top.map?.dispose(); s.top.dispose(); s.side.dispose(); });
      renderer.dispose(); renderer.domElement.remove();
    },
  };
  return handle;
}
