export default function updateStudentGradeByCity(student, city, newGrades) {
  return student
    .filter((item) => item.location === city)
    .map((item) => {
      const grades = newGrades.filter(
        (grade) => grade.studentId === item.id,
      );
      const grade = grades.length ? grades[0].grade : 'N/A';
      return { ...item, grade };
    });
}
