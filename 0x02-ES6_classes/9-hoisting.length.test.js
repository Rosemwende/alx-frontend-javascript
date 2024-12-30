import { listOfStudents } from './9-hoisting';

describe('listOfStudents Tests', () => {
  it('should have the correct number of students', () => {
    expect(listOfStudents.length).toBe(5);
  });

  it('should initialize students correctly', () => {
    const student = listOfStudents[0];
    expect(student.fullName).toBe('Guillaume Salva');
    expect(student.holbertonClass.year).toBe(2020);
    expect(student.holbertonClass.location).toBe('San Francisco');
  });

  it('should return the correct fullStudentDescription', () => {
    const student = listOfStudents[0];
    expect(student.fullStudentDescription).toBe('Guillaume Salva - 2020 - San Francisco');
  });
});
