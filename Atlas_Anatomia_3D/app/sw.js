// Service worker del Atlas Anatómico 3D — versión 2026.11.03-1511
// Página, código y datos: primero la red (si hay), lo guardado solo sin conexión.
// Modelos 3D, decodificador e íconos: desde lo guardado (se renuevan con cada versión).
const VERSION = 'atlas3d-2026.11.03-1511';
const FILES = [
  "./",
  "app.js",
  "data/capas_musculares.json",
  "data/dermatomes.json",
  "data/desc.json",
  "data/es.json",
  "data/innervation.json",
  "data/layers.json",
  "data/lymphatics.json",
  "data/meta.json",
  "data/plexus.json",
  "data/sys1.glb",
  "data/sys2.glb",
  "data/sys3.glb",
  "data/sys4.glb",
  "data/sys5.glb",
  "data/sys6.glb",
  "data/sys7.glb",
  "data/sys8.glb",
  "data/sys9.glb",
  "data/tendons.json",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "index.html",
  "lib/draco/draco_decoder.js",
  "lib/draco/draco_decoder.wasm",
  "lib/draco/draco_wasm_wrapper.js",
  "manifest.webmanifest",
];
const isShell = (url) => url.origin === location.origin && (/\/$|\.html$|\.js$|\.json$|\.webmanifest$/.test(url.pathname)) && !/\/lib\//.test(url.pathname);
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (isShell(url) || e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-cache' }).then((resp) => {
      if (resp.ok) { const cp = resp.clone(); caches.open(VERSION).then((c) => c.put(e.request, cp)); }
      return resp;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request).then((resp) => {
    if (resp.ok && url.origin === location.origin) { const cp = resp.clone(); caches.open(VERSION).then((c) => c.put(e.request, cp)); }
    return resp;
  })));
});
