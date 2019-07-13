const staticCacheName = 'site-static';
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
});
// fetch event
self.addEventListener('fetch',evt => {
    // console.log('fetch event',evt)
});