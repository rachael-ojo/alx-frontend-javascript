function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}

// Example usage:
const students = getListStudents();
const totalIdsSum = getStudentIdsSum(students);
console.log(totalIdsSum);  // Output: 8
