// Assuming previous functions `createEmployeesObject` and `createReportObject` are defined

const employeesObject = createEmployeesObject('Engineering', ['Alice', 'Bob', 'Charlie']);
const reportObject = createReportObject(employeesObject);

const iterator = createIteratorObject(reportObject);

for (const employee of iterator) {
  console.log(employee);
}
// Output:
// Alice
// Bob
// Charlie
