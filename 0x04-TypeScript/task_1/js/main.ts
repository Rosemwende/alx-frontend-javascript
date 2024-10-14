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
  lastName: 'Mwende',
  location: 'Kenya',
  contract: false,
};

console.log(teacher3);
