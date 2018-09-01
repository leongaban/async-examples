const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    resolve(1); // pending => resolved, fufilled
    reject(new Error('500 Error!')); // pending => rejected
  }, 2000);
});

p
  .then(result => console.log('Result:', result))
  .catch(err => console.error('Error:', err.message));
