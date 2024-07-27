export function taskFirst() {
  // Use const for variables that do not change
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  // Use let for variables that might change
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
