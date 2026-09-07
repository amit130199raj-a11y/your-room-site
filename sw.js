const CACHE_NAME = 'your-room-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
  // Add other static assets here if you include icons or CSS files.
];

// Install: cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

// Fetch: simple cache-first strategy for app shell, network-first for other requests
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // For navigation requests (HTML pages), try network first then fallback to cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // For other resources, serve from cache first then network
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
      // Optionally cache new requests (avoid caching large files automatically)
      return resp;
    })).catch(() => caches.match('./index.html'))
  );
});
