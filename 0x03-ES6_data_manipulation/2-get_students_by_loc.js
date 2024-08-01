function getStudentsByLocation(students, city) {
    return students.filter(student => student.location === city);
}

// Example usage:
const students = getListStudents();
const studentsInSanFrancisco = getStudentsByLocation(students, 'San Francisco');
console.log(studentsInSanFrancisco);
/*
Output:
[
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
*/
