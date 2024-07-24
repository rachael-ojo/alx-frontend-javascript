function handleResponseFromAPI(promise) {
  return promise
    .then(response => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(error => {
      console.log('Got a response from the API');
      return new Error();
    });
}

// Example usage with getFullResponseFromAPI function

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

// Testing the handleResponseFromAPI function
const successPromise = getFullResponseFromAPI(true);
handleResponseFromAPI(successPromise)
  .then(result => console.log(result)) // Output: { status: 200, body: 'success' }
  .catch(error => console.error(error)); // Won't be called for true

const failurePromise = getFullResponseFromAPI(false);
handleResponseFromAPI(failurePromise)
  .then(result => console.log(result)) // Won't be called for false
  .catch(error => console.error(error)); // Output: Error {}
