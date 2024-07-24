function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName: firstName,
      lastName: lastName
    });
  });
}

// Example usage
signUpUser('John', 'Doe').then(result => {
  console.log(result); // Output: { firstName: 'John', lastName: 'Doe' }
});
