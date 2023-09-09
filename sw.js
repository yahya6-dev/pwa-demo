//our serviceworker cache name
let CACHE_NAME = "pwa-demo"
let cachedItems = [
 "/",
 "/icons/192x192.png",
 "/icons/512x512.png",
 "/index.html",
 "/icons/github.svg",
 "/icons/wifi.svg",
 "/icons/x.svg",
 "/icons/search.svg",
 "/icons/download.svg",
 "/icons/exclamation-circle.svg",
 "/reg.js",
 "/sw.js",
 "/app.webmanifest",
 "/static/js/main.8240bb97.js
 "/css/styles-desktop.css",
 "/css/styles-mobile.css"

]
//list
//we listen for fetch request
self.addEventListener("fetch",(event) => {
 console.log(event.request.url)
 event.respondWith(
      caches.match(event.request)
	  .then(response => {
	  	if (response) {
	  		console.log("or you mean here normal")
	  		return response
	  	}
	  	//do the default
	  	return fetch(event.request)
	     })
       )
    })

//we add our cache when the serviceworker
//is in install state
self.addEventListener("install",event => {
  console.log(event.type)
  //on install stage cache resources
  //dont wait there in install stage
  //self.skipWaiting()
  event.waitUntil(
  	caches.open(CACHE_NAME)
  	 .then(cache => {
  	 	console.log("added all items")
  	 	//add items to cache if opened
  	 	return cache.addAll(cachedItems)
  	 })
  	 .catch(console.log)
  	)
})

//trigger when the service is active
self.addEventListener("activate",event => {
	console.log(event.type)
	//self.clients.claim()
})

self.addEventListener("constrollerchange",event => {
	console.log("new service in operation")
})
