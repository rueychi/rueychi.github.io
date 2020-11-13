window.onload = () => {
 
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('pwa/sw.js', {scope: '/'})
  }  
}