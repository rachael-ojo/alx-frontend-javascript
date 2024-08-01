function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    
    const buffer = new ArrayBuffer(length);
    const int8View = new Int8Array(buffer);
    int8View[position] = value;
    
    return buffer;
}

// Example usage:
try {
    const buffer = createInt8TypedArray(10, 2, 42);
    console.log(new Int8Array(buffer));  // Output: Int8Array(10) [0, 0, 42, 0, 0, 0, 0, 0, 0, 0]
} catch (error) {
    console.error(error);
}

try {
    // This will throw an error
    const buffer = createInt8TypedArray(10, 10, 42);
} catch (error) {
    console.error(error);  // Output: Error: Position outside range
}
