export default function createIteratorObject(report) {
  const { engineering, marketing } = report;

  const departments = Object.values(report);
  const employees = departments.flat();

  return employees[Symbol.iterator]();
}
