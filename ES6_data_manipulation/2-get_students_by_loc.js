export default function getStudentsByLocation(student, city) {
  return student.filter((list) => list.location === city);
}
