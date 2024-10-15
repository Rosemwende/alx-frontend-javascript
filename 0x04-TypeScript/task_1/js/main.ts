interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Rose',
  fullTimeEmployee: false,
  lastName: 'Muema',
  location: 'Kenya',
  contract: false,
};

console.log(teacher3);

// task_1/js/main.ts (continuing)
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Rose',
  lastName: 'Mwende',
  location: 'Kenya',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
	return '${firstName[0]} ${lastName}';
}
printTeacher("Rose", "Mwende");

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new Student("Rose", "Mwende");
console.log(student.displayName());
console.log(student.workOnHomework());

