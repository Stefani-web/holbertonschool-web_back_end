const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const database = req.app.get('database');

    try {
      const students = await readDatabase(database);
      let response = 'This is the list of our students\n';

      Object.keys(students)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          const studentCount = students[field].length;
          const studentList = students[field].join(', ');
          response += `Number of students in ${field}: ${studentCount}. `;
          response += `List: ${studentList}\n`;
        });

      return res.status(200).send(response.trim());
    } catch (error) {
      return res.status(500).send('This is the list of our students\nCannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const database = req.app.get('database');

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(database);
      const list = students[major] || [];
      return res.status(200).send(`List: ${list.join(', ')}`);
    } catch (error) {
      return res.status(500).send('This is the list of our students\nCannot load the database');
    }
  }
}

module.exports = StudentsController;
