// 11-main.js

import HolbertonClass from './10-holbertonClass';

try {
  const holberton = new HolbertonClass(30, 'San Francisco');
  console.log(holberton.size); // 30
  console.log(holberton.location); // San Francisco

  // Casting to Number and String
  console.log(Number(holberton)); // 30
  console.log(String(holberton)); // San Francisco
} catch (error) {
  console.error(error.message);
}
