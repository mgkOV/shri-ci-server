importScripts("/precache-manifest.86023acacd0688bfb4b9773b22e4694c.js");
const urlToCache = self.__precacheManifest.map((i) => i.url);

const CACHE = "shri-ci-cache";

// Кэшируем статику
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => {
        console.log("Устаревший кэш очищен...");
        return caches.open(CACHE);
      })
      .then((cache) => cache.addAll(urlToCache))
  );

  self.skipWaiting();
});

self.addEventListener("fetch", function (event) {
  // Отдаем кэшированные данные
  if (!event.request.url.match(/\/static\//i)) return;

  event.respondWith(fromCache(event.request));
});

function fromCache(request) {
  return caches
    .open(CACHE)
    .then((cache) =>
      cache.match(request).then((matching) => matching || Promise.reject("no-match"))
    );
}
