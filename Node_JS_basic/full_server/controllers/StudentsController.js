const { readDatabase } = require('../utils');  // Assure-toi que l'importation est correcte

class StudentsController {
  // Endpoint GET /students
  static async getAllStudents(req, res) {
    const database = req.app.get('database');  // Récupérer la base de données configurée dans Express

    if (!database) {
      console.error('Database not provided!');
      return res.status(500).send('Cannot load the database');
    }

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
      console.error('Error loading the database:', error);
      return res.status(500).send('Cannot load the database');
    }
  }

  // Endpoint GET /students/:major
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const database = req.app.get('database');  // Récupérer la base de données

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(400).send('Major parameter must be CS or SWE');  // Code 400 pour mauvaise requête
    }

    if (!database) {
      return res.status(500).send('Database not provided');
    }

    try {
      const students = await readDatabase(database);
      const list = students[major] || [];

      if (list.length === 0) {
        return res.status(404).send(`No students found for the major: ${major}`);
      }

      return res.status(200).send(`List: ${list.join(', ')}`);
    } catch (error) {
      console.error('Error loading the database:', error);
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
