const p = Promise.resolve({ id: 1 });
// const p = Promise.reject(new Error('reason for rejection...'));

p
  .then(result => console.log(result))
  .catch(err => console.log(err.message));
