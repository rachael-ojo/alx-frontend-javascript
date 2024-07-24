export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}

// Example usage
uploadPhoto('test.jpg')
  .catch(error => {
    console.error(error.message); // Output: test.jpg cannot be processed
  });
