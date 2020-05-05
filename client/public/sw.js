const CACHE = "shri-ci-cache";

// Кэшируем статику
self.addEventListener("install", (event) => {
  importScripts("/precache-manifest.86023acacd0688bfb4b9773b22e4694c.js");
  const urlToCache = self.__precacheManifest.map((i) => i.url);

  console.log("Initial caching");
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(urlToCache)));
});

self.addEventListener("fetch", function (event) {
  // Отдаем кэшированные данные
  if (!event.request.url.match(/\/static\//i)) return;

  event.respondWith(fromCache(event.request));
  // Обновляем кэш
  event.waitUntil(update(event.request));
});

function fromCache(request) {
  return caches
    .open(CACHE)
    .then((cache) =>
      cache.match(request).then((matching) => matching || Promise.reject("no-match"))
    );
}

function update(request) {
  return caches
    .open(CACHE)
    .then((cache) => fetch(request).then((response) => cache.put(request, response)));
}
