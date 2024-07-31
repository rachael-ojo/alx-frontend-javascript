// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  // Create table element
  const table = document.createElement('table');

  // Iterate over each student in the array
  students.forEach(student => {
    // Create a new row
    const row = document.createElement('tr');

    // Create a cell for the first name
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    // Create a cell for the location
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    // Append the row to the table
    table.appendChild(row);
  });

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
