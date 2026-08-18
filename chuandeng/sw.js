/* 传灯 · Service Worker（离线缓存应用壳） */
const CACHE = 'chuandeng-v1';
const ASSETS = [
  './',
  './index.html',
  './i18n.js',
  './config.js',
  './qrcode.js',
  './manifest.webmanifest',
  './icon.svg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (resp) {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          var cp = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, cp); });
        }
        return resp;
      }).catch(function () { return caches.match('./index.html'); });
    })
  );
});
