function hasValuesFromArray(set, array) {
    return array.every(element => set.has(element));
}

// Example usage:
const set = new Set([1, 2, 3, 4, 5]);
const array = [1, 2, 3];
const result = hasValuesFromArray(set, array);
console.log(result);  // Output: true

const array2 = [1, 6];
const result2 = hasValuesFromArray(set, array2);
console.log(result2);  // Output: false
