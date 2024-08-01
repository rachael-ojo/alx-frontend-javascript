function setFromArray(array) {
    return new Set(array);
}

// Example usage:
const array = [1, 2, 3, 4, 5, 5, 6];
const resultSet = setFromArray(array);
console.log(resultSet);  // Output: Set { 1, 2, 3, 4, 5, 6 }
