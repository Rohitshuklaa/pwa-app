let chacheData="appV1";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(chacheData).then((chache)=>{
            chache.addAll([
                "/static/js/bundle.js",
                "/static/js/mainfest.json",
                "/static/js/favicon.ico",
                "/static/js/index.html",
                "/",
                "/users"
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
                if(result){
                   return result
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl)
            }) 
        )
    }
})