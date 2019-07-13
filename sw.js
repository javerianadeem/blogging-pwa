// Installing service workers
self.addEventListener('install',evt => {
    console.log("service worker has been installed")
});

// activate event
self.addEventListener('activate',evt => {
    console.log('service worker has been activated')
})