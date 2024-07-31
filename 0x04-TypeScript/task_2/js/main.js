import createEmployee from "../src/employeeFactory";

const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // Output: Cannot work from home
console.log(employee1.getCoffeeBreak()); // Output: Cannot have a break
console.log(employee1.workTeacherTasks()); // Output: Getting to work

const employee2 = createEmployee(1000);
console.log(employee2.workFromHome()); // Output: Working from home
console.log(employee2.getCoffeeBreak()); // Output: Getting a coffee break
console.log(employee2.workDirectorTasks()); // Output: Getting to director tasks
