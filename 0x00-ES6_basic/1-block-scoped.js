function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Using const to prevent overwriting the outer scope variable
    const task2 = false; // Using const to prevent overwriting the outer scope variable
  }

  return [task, task2];
}

// Example usage:
console.log(taskBlock(true)); // Expected output: [false, true]
console.log(taskBlock(false)); // Expected output: [false, true]
