// Set a name for the current cache
var cacheName = 'v1';

// Default files to always cache
var cacheFiles = [
    "./static/rainfallmonitoringapp/js/ol4-rainfall.js",
    "./static/rainfallmonitoringapp/js/bootstrap.min.js",
    "./static/rainfallmonitoringapp/js/bootstrap3-typeahead.min.js",
    "./static/rainfallmonitoringapp/js/serviceworker.js",
    "./static/rainfallmonitoringapp/js/highcharts.js",
    "./static/rainfallmonitoringapp/css/bootstrap.min.css",
    "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
]


self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil Delays the event until the Promise is resolved
    e.waitUntil(

        // Open the cache
        caches.open(cacheName).then(function (cache) {

            // Add all the default files to the cache
            console.log('[ServiceWorker] Caching cacheFiles');
            return cache.addAll(cacheFiles);
        })
    ); // end e.waitUntil
});


self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(

        // Get all the cache keys (cacheName)
        caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function (thisCacheName) {

                // If a cached item is saved under a previous cacheName
                if (thisCacheName !== cacheName) {

                    // Delete that cached file
                    console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }));
        })
    ); // end e.waitUntil

});


/**
 self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    if (e.request.method === 'GET') {
        console.log('[ServiceWorker] GET METHOD', e.request.url);
        return;
    }
    // e.respondWidth Responds to the fetch event
    e.respondWith(

        // Check in cache for the request being made
        caches.match(e.request)

            .then(function (response) {

                // If the request is in the cache
                if (response) {
                    console.log("[ServiceWorker] Found in Cache", e.request.url, response);
                    // Return the cached version
                    return response;
                }

                // If the request is NOT in the cache, fetch and cache

                var requestClone = e.request.clone();
                fetch(requestClone)
                    .then(function (response) {

                        if (!response) {
                            console.log("[ServiceWorker] No response from fetch ")
                            return response;
                        }

                        var responseClone = response.clone();

                        //  Open the cache
                        caches.open(cacheName).then(function (cache) {

                            // Put the fetched response in the cache
                            cache.put(e.request, responseClone);
                            console.log('[ServiceWorker] New Data Cached', e.request.url);

                            // Return the response
                            return response;

                        }); // end caches.open

                    })
                    .catch(function (err) {
                        console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
                    });


            }) // end caches.match(e.request)
    ); // end e.respondWith
});
 **/
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.match(event.request)
                    .then(function (response) {
                        var promise;

                        if (response) {
                            console.log('Fetching from the cache: ', event.request.url);
                        } else {
                            console.log('Fetching from server: ', event.request.url);
                        }

                        promise = fetch(event.request)
                            .then(function (networkResponse) {
                                var cloned = networkResponse.clone();
                                cache.put(event.request, cloned);
                                console.log('Fetching from the cache: ', event.request.url);
                                return networkResponse;
                            }
                        )
                        console.log('Fetching from server: ', event.request.url);
                        return response || promise;
                    }
                )
            }
        )
    );
});


/**
 self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
         cache.put(event.request, responseClone);
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});
 **/