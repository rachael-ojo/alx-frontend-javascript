export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName
  });
}

// Example usage
signUpUser('John', 'Doe').then(result => {
  console.log(result); // Output: { firstName: 'John', lastName: 'Doe' }
});
