// Service Worker اختصاصی P_Motor DIAG (wifipaish)
const CACHE_NAME = 'pmotor-diag-v1';
const SCOPE_PATH = '/wifipaish/';
const ASSETS_TO_CACHE = [
  '/wifipaish/',
  '/wifipaish/index.html',
  '/wifipaish/manifest.webmanifest',
  '/wifipaish/pwa-192x192.png',
  '/wifipaish/pwa-512x512.png',
  '/wifipaish/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  console.log('[wifipaish SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[wifipaish SW] Some assets failed:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[wifipaish SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // فقط کش‌های همین اپ (pmotor-diag-*) را پاک کن
          if (key.startsWith('pmotor-diag-') && key !== CACHE_NAME) {
            console.log('[wifipaish SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('/api/')) return;

  const url = new URL(event.request.url);
  // فقط درخواست‌های داخلی /wifipaish/ را مدیریت کن
  if (!url.pathname.startsWith(SCOPE_PATH)) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match('/wifipaish/index.html')
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, toCache);
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

// Web Push Alert
self.addEventListener('push', (event) => {
  let data = {
    title: 'P_Motor DIAG Alert',
    body: 'ارتباط دستگاه دیاگ قطع شده است! لطفاً بررسی فرمایید.',
    icon: '/wifipaish/pwa-192x192.png',
    badge: '/wifipaish/pwa-192x192.png',
    vibrate: [400, 200, 400, 200, 800],
    data: { url: '/wifipaish/?alert=true' }
  };

  if (event.data) {
    try {
      data = Object.assign(data, event.data.json());
    } catch {
      data.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      vibrate: data.vibrate,
      tag: 'pmotor-diag-disconnect-alert',
      renotify: true,
      requireInteraction: true,
      data: data.data,
      actions: [
        { action: 'stop-alarm', title: 'قطع آژیر' },
        { action: 'open-app', title: 'ورود به دیاگ' }
      ]
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || '/wifipaish/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('/wifipaish/') && 'focus' in client) {
          client.postMessage({ type: 'DISCONNECT_ALERT_TRIGGERED' });
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
