function cleanSet(set, startString) {
    if (!startString || typeof startString !== 'string') {
        return '';
    }

    const result = [];
    for (const value of set) {
        if (value.startsWith(startString)) {
            result.push(value.slice(startString.length));
        }
    }

    return result.join('-');
}

// Example usage:
const mySet = new Set(['byproduct', 'bygone', 'bystander', 'start', 'byzantine']);
const startString = 'by';
const result = cleanSet(mySet, startString);
console.log(result);  // Output: "product-gone-stander-zantine"
