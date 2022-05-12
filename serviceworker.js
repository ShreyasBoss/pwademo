var cacheName = "pwa";
var filesToCache = ["https://shreyasboss.github.io/pwademo/", "https://shreyasboss.github.io/pwademo/index.html", "https://shreyasboss.github.io/pwademo/app.js"];
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});
/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
