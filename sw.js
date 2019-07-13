const staticCacheName = 'site-static-v3'; 
const dynamicCacheName = 'site-static-v1'; 
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/main.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/images/blog.jpg',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    '/pages/fallback.html'
];
  
// Installing service workers

self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    )
  });
// activate event
self.addEventListener('activate',evt => {
    // console.log('service worker has been activated')
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys)
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map (key => caches.delete(key))
            )
        }) //
    )
});
// fetch event
self.addEventListener('fetch',evt => {
    // console.log('fetch event',evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => { // matches our assets
            return cacheRes || fetch(evt.request).then(fetchRes => { // if it there return response || fetch request
              return caches.open (dynamicCache).then(cache => { // take response open up dynamic cache inside cache
                  cache.put(evt.request.url,fetchRes.clone()) // put new response we get from the page
                  return fetchRes; 
              })  
            })
        }).catch(()=> caches.match('/pages/fallback.html'))
    );
});