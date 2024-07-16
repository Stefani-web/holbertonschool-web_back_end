export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  const iterator = {
    nextIndex: 0,
    next() {
      if (this.nextIndex < employees.length) {
        return { value: employees[this.nextIndex++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}
