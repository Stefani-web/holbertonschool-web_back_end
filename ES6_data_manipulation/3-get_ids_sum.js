export default function getStudentIdsSum(students) {
  const redu = (sum, item) => sum + item.id;
  return students.reduce(redu, 0);
}
