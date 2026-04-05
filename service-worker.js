const CACHE_NAME = "notes-app-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/data/biology.js",
  "/data/chemistry.js",
  "/data/physics.js",
  "/data/computers.js"
];

// install → cache everything
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// fetch → serve from cache first
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});