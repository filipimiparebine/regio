self.addEventListener('fetch', function(event) {
event.respondWith(caches.open('cache').then(function(cache) {
return cache.match(event.request).then(function(response) {
var fetchPromise = fetch(event.request).then(function(networkResponse) {              
if (networkResponse) {
        cache.put(event.request, networkResponse.clone());}
        return networkResponse;
            }, function (event) {     
            event.waitUntil(
            caches.open('cache').then(function(cache) { 
            return cache.addAll
            ([                         
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1', 
        '/script.js',
        '/fontfaceobserver.js',
        '/style.css',
        '/image/*',
        '/manifest.js',
        'https://github.com/filipblajiu/regio/',
        'mailto:filipblajiu@gmail.com',      
        ]);
        })
        );
        });
    return response || fetchPromise;
});
}));
});

self.addEventListener('install', function(event) {
    self.skipWaiting();
});