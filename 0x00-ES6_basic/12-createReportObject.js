// Assuming previous function `createEmployeesObject` is defined
const employeesObject = createEmployeesObject('Engineering', ['Alice', 'Bob', 'Charlie']);
const reportObject = createReportObject(employeesObject);

console.log(reportObject.allEmployees);
// Output: { Engineering: ['Alice', 'Bob', 'Charlie'] }

console.log(reportObject.getNumberOfDepartments());
// Output: 1
