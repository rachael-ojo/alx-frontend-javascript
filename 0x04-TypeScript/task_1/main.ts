// teacher.ts

interface TeacherConfig {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class Teacher {
  public readonly firstName: string;
  public readonly lastName: string;
  public fullTimeEmployee: boolean;
  public yearsOfExperience?: number;
  public location: string;

  constructor(config: TeacherConfig) {
    this.firstName = config.firstName;
    this.lastName = config.lastName;
    this.fullTimeEmployee = config.fullTimeEmployee;
    this.yearsOfExperience = config.yearsOfExperience;
    this.location = config.location;

    // Add any other properties
    Object.keys(config).forEach(key => {
      if (!(key in this)) {
        (this as any)[key] = config[key];
      }
    });
  }
}

interface Directors extends TeacherConfig {
  numberOfReports: number;
}

class Director extends Teacher {
  public numberOfReports: number;

  constructor(config: Directors) {
    super(config);
    this.numberOfReports = config.numberOfReports;
  }
}

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage:
const teacher = new Teacher({
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  contract: true
});

console.log(teacher);

const director = new Director({
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Los Angeles",
  numberOfReports: 5
});

console.log(director);

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith
