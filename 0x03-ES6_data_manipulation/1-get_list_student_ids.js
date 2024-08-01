function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        return [];
    }
    return students.map(student => student.id);
}

// Example usage:
const students = getListStudents();
const studentIds = getListStudentIds(students);
console.log(studentIds);  // Output: [1, 2, 5]
