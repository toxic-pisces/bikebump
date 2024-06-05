self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('bike-bump-cache').then(function(cache) {
        return cache.addAll([
          '/START.html',
          '/Assets/BIKE_BUMP.ico',
          // Add other resources to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });