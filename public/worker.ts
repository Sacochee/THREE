addEventListener('message', function(event) {
    console.log('Message from main thread:', event.data);
    
    // Envoyer un message de retour au thread principal
    postMessage('Hello from worker!');
  });