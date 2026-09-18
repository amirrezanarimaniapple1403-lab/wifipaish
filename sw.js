// Service Worker for P_Motor DIAG WiFi Guardian (wifipaish)
const CACHE_NAME = 'pmotor-diag-v4';
const ASSETS_TO_CACHE = [
  '/wifipaish/',
  '/wifipaish/index.html',
  '/wifipaish/manifest.webmanifest',
  '/wifipaish/pwa-192x192.png',
  '/wifipaish/pwa-512x512.png',
  '/wifipaish/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[SW wifipaish] Cache warning:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // فقط کش‌های همین اپ را پاک کن
          if (key.startsWith('pmotor-diag-') && key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) return;
  if (event.request.method !== 'GET') return;

  // فقط درخواست‌های داخل /wifipaish/ را مدیریت کن
  const url = new URL(event.request.url);
  if (!url.pathname.startsWith('/wifipaish/')) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/wifipaish/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/wifipaish/index.html');
        }
      });
    })
  );
});

// Web Push
self.addEventListener('push', (event) => {
  let data = {
    title: 'P_Motor DIAG Alert',
    body: 'ارتباط دستگاه دیاگ قطع شده است!',
    icon: '/wifipaish/pwa-192x192.png',
    vibrate: [400, 200, 400, 200, 800]
  };

  if (event.data) {
    try {
      data = Object.assign(data, event.data.json());
    } catch (e) {
      data.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      vibrate: data.vibrate,
      tag: 'pmotor-diag-alert'
    })
  );
});
