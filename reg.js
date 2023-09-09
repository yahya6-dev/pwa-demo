//register our service worker
if ("serviceWorker" in window.navigator) {
  try {
  	window.navigator.serviceWorker.register("./sw.js")
  	 .then(reg => {
  	 	console.log(reg.scope,"service registered")
  	 })
  	 //in case of error 
  	 .catch(e => {
  	 	console.log(e.message)
  	 })


  }
  //may be service is not supported
  catch(error){
  	console.log("service unsupported")
  }

}

window.addEventListener("online",e => {
  e.preventDefault()
  let status = document.querySelector(".status-text")
  if (status)
    status.textContent = "Online"
})

window.addEventListener("offline",e => {
  e.preventDefault()
  let status = document.querySelector(".status-text")
  if (status)
    status.textContent = "Offline"
})
