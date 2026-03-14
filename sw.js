const CACHE_NAME = 'finanzas-v2';
const urlsToCache = [
  '/finanzas-app/',
  '/finanzas-app/index.html',
  '/finanzas-app/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
