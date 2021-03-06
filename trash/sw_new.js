const cacheName =  "new-v1"
const staticAssets =[
    './index.html',
    './css/style.css',
    './js/script.js',
    './web-elements/mk-head.mjs',
    './web-elements/mk-model-form.mjs',
    './web-elements/mk-navbar.mjs',
    './web-elements/mk-sidebar.mjs',
    './web-elements/mk-table.mjs',
    './app.mjs'
]
self.addEventListener('install',async e => {
const cache = await caches.open(cacheName);
await cache.addAll(staticAssets);
return self.skipWaiting();
})
self.addEventListener('activate',e => {
    self.clients.claim();
})

self.addEventListener('fetch',async e => {
    const req = e.request;
    const url = new URL(req.url);
    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req));
    }else{
        e.respondWith(networkAndCache(req));
    }
})

async function cacheFirst(req){
    const cache= await caches.open(cacheName);
    try{
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    }
    catch (e){
        const cached = await cache.match(req);
        return cached;
    }
}