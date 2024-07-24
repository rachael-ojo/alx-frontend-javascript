function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Example usage
getFullResponseFromAPI(true)
  .then(response => {
    console.log(response); // Output: { status: 200, body: 'Success' }
  })
  .catch(error => {
    console.error(error.message); // This won't be called for true
  });

getFullResponseFromAPI(false)
  .then(response => {
    console.log(response); // This won't be called for false
  })
  .catch(error => {
    console.error(error.message); // Output: 'The fake API is not working currently'
  });
