const CACHE='kellie-workout-v3.1-video-20261101';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 if(event.request.mode==='navigate'||new URL(event.request.url).pathname.endsWith('/index.html')){
  event.respondWith(fetch(event.request).then(res=>{if(res.ok){const cloned=res.clone();caches.open(CACHE).then(c=>c.put(event.request,cloned))}return res}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))));return;
 }
 event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(res=>{if(res.ok){const cloned=res.clone();caches.open(CACHE).then(c=>c.put(event.request,cloned))}return res})));
});
