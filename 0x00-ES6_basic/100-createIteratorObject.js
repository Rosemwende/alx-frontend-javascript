export default function createIteratorObject(report) {
  const employees = Object.values(report).flat();
  return employees[Symbol.iterator]();
}
