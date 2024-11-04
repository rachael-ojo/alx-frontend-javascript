import { queryAPI, weakMap } from './yourModule';

try {
  const endpoint = { url: '/api/data' }; // Example endpoint object
  queryAPI(endpoint); // Call 1
  queryAPI(endpoint); // Call 2
  queryAPI(endpoint); // Call 3
  queryAPI(endpoint); // Call 4
  queryAPI(endpoint); // Call 5
  queryAPI(endpoint); // Call 6 - This should throw an error
} catch (error) {
  console.error(error.message); // Output: 'Endpoint load is high'
}
