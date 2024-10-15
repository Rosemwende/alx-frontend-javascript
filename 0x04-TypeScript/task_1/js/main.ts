interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
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
