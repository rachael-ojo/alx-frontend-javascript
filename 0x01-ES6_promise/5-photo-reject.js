import { uploadPhoto } from './utils.js';

export default function handlePhotoUpload(fileName) {
  return uploadPhoto(fileName)
    .then(response => {
      // This block will not be executed because uploadPhoto always rejects
      console.log(response.body);
    })
    .catch(error => {
      console.error(error.message); // Output: fileName cannot be processed
    });
}

// Example usage
handlePhotoUpload('profile.jpg');
