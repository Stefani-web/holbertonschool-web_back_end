export default function createIteratorObject(report) {
  let allEmployees = report.allEmployees;
  let employeesList = [];

  for (let department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employeesList = employeesList.concat(allEmployees[department]);
    }
  }

  return employeesList[Symbol.iterator]();
}

