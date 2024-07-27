// Assuming previous functions `createEmployeesObject`, `createReportObject`, and `createIteratorObject` are defined

const employeesObject = createEmployeesObject('Engineering', ['Alice', 'Bob', 'Charlie']);
const reportObject = createReportObject(employeesObject);
const iterator = createIteratorObject(reportObject);

console.log(iterateThroughObject(iterator));
// Output: "Alice, Bob, Charlie"
