function updateUniqueItems(itemsMap) {
    // Check if the argument is a Map
    if (!(itemsMap instanceof Map)) {
      throw new Error('Cannot process');
    }
  
    // Iterate over the map entries
    for (const [key, value] of itemsMap.entries()) {
      // Check if the quantity is 1
      if (value === 1) {
        // Update the quantity to 100
        itemsMap.set(key, 100);
      }
    }
  
    // Return the updated map
    return itemsMap;
  }
  