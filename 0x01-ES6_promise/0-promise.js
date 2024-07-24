function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      const success = true; // Simulate a successful API response
      if (success) {
        resolve("API call succeeded");
      } else {
        reject("API call failed");
      }
    }, 1000); // Simulate a 1 second delay
  });
}

// Example usage
getResponseFromAPI()
  .then(response => {
    console.log(response); // Output: "API call succeeded"
  })
  .catch(error => {
    console.error(error); // This would handle the case where the promise is rejected
  });
