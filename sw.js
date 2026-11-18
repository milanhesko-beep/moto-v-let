// Moto Výlet – service worker: offline aplikácia + uložené mapové dlaždice
const SHELL = 'mv-shell-v2';
const TILES = 'tiles-v1';
const SHELL_FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

const isTile = u => /basemaps\.cartocdn\.com|tile\.opentopomap\.org|arcgisonline\.com\/ArcGIS\/rest\/services\/World_(Imagery|Street_Map|Topo_Map)/.test(u);
const norm = u => u.replace(/:\/\/[a-d]\.basemaps\.cartocdn\.com/, '://a.basemaps.cartocdn.com')
                   .replace(/:\/\/[a-c]\.tile\.opentopomap\.org/, '://a.tile.opentopomap.org');

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = req.url;

  // Mapové dlaždice: najprv z pamäte, inak zo siete (a uložiť)
  if (isTile(url)) {
    e.respondWith(caches.open(TILES).then(async c => {
      const key = norm(url);
      const hit = await c.match(key);
      if (hit) return hit;
      try {
        const r = await fetch(req);
        if (r.ok && r.type !== 'opaque') c.put(key, r.clone());
        return r;
      } catch (err) {
        return new Response('', { status: 504 });
      }
    }));
    return;
  }

  // Samotná aplikácia: najprv sieť (aktualizácie), bez signálu uložená verzia
  if (new URL(url).origin === self.location.origin) {
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(SHELL).then(c => c.put(req, copy));
        return r;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
    );
  }
});
