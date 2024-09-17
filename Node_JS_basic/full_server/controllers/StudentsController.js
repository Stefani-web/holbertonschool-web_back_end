const { readDatabase } = require('../utils');

class StudentsController {
  // Endpoint GET /students
  static async getAllStudents(req, res) {
    const database = req.app.get('database');

    if (!database) {
      return res.status(500).send('Database not provided'); // Renvoie un code 500 si la base de données n'est pas fournie
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
      console.error('Error loading the database:', error); // Log d'erreur pour le diagnostic
      return res.status(500).send('Cannot load the database'); // Renvoie un code 500 si une erreur survient lors du chargement de la base de données
    }
  }

  // Endpoint GET /students/:major
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const database = req.app.get('database');

    // Si le major n'est pas "CS" ou "SWE", renvoie une erreur 400 (Bad Request)
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(400).send('Major parameter must be CS or SWE'); // Code 400 pour une mauvaise requête
    }

    if (!database) {
      return res.status(500).send('Database not provided'); // Renvoie une erreur 500 si la base de données n'est pas fournie
    }

    try {
      const students = await readDatabase(database);
      const list = students[major] || [];

      if (list.length === 0) {
        return res.status(404).send(`No students found for the major: ${major}`); // Code 404 si aucun étudiant n'est trouvé pour ce major
      }

      return res.status(200).send(`List: ${list.join(', ')}`); // Renvoie un code 200 si la requête est un succès
    } catch (error) {
      console.error('Error loading the database:', error);
      return res.status(500).send('Cannot load the database'); // Renvoie une erreur 500 en cas de problème de lecture de la base de données
    }
  }
}

module.exports = StudentsController;
