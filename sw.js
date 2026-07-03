var CACHE_NAME='rapidheal-v5';
var URLS=['./','./index.html'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE_NAME).then(function(c){return c.addAll(URLS);}));
});
self.addEventListener('fetch',function(e){
  e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));
});
