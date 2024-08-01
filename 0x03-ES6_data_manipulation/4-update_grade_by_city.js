function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const gradeObject = newGrades.find(grade => grade.studentId === student.id);
            return {
                ...student,
                grade: gradeObject ? gradeObject.grade : 'N/A'
            };
        });
}

// Example usage:
const students = getListStudents();
const newGrades = [
    { studentId: 1, grade: 95 },
    { studentId: 5, grade: 85 },
    // Note: No grade for student with id 2 (James)
];

const updatedStudents = updateStudentGradeByCity(students, 'San Francisco', newGrades);
console.log(updatedStudents);
/*
Output:
[
    { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 95 },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 85 }
]
*/
