// Create a map similar to the one from the previous task
const items = new Map([
    ['item1', 1],
    ['item2', 2],
    ['item3', 1],
    ['item4', 3]
  ]);
  
  try {
    const updatedItems = updateUniqueItems(items);
    console.log(updatedItems);
    // Output should show item1 and item3 with quantity updated to 100
  } catch (error) {
    console.error(error.message);
  }
  