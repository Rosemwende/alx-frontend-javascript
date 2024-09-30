export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employees = [];

  for (const department of Object.values(allEmployees)) {
    employees = [...employees, ...department];
  }

  return employees[Symbol.iterator]();
}
