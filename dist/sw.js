

"use strict"
const cacheName = 'v5';
const cacheAssets =[
    'index.html',
    '/css/style.css',
    '/js/script.js',
    '/web-elements/mk-head.mjs',
    '/web-elements/mk-model-form.mjs',
    '/web-elements/mk-navbar.mjs',
    '/web-elements/mk-sidebar.mjs',
    '/web-elements/mk-table.mjs',
    'app.mjs'
]
// Call install event
self.addEventListener('install',(e)=>{
  
    console.log('Service Worker Installed');
    e.waitUntil(
    caches
    .open(cacheName)
    .then(cache =>{
        console.log('Caching Files')
        cache.addAll(cacheAssets);
    })
    .then(()=> self.skipWaiting())
    )
})
self.addEventListener('activate',(e)=>{
    console.log('Service Worker Activated');
    e.waitUntil(
        caches.keys()
        .then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cache=>{
                    if(cache !== cacheName){
                        console.log('Service Worker clearing all caches');
                        caches.delete(cache);

                    }
                })
            )
        })
    )
});
self.addEventListener('fetch',e=>{
  
   e.respondWith(
       fetch(e.request).catch(() =>caches.match(e.request))
   )
})