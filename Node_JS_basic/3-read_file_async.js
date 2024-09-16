const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    // Lire le fichier de manière asynchrone
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        return reject(new Error('Cannot load the database'));
      }

      // Diviser les lignes par retour à la ligne
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Vérifier qu'il y a des étudiants
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        return resolve();// Ajout d'un return pour éviter l'erreur "Expected to return a value"
      }

      // Enlever l'en-tête et créer un tableau pour les étudiants
      const students = lines.slice(1).map((line) => {
        const [firstname, , , field] = line.split(','); // Ignorer les variables inutilisées 'lastname' et 'age'
        return { firstname, field };
      });

      // Compter les étudiants par domaine
      const fieldCount = {};
      students.forEach((student) => {
        if (!fieldCount[student.field]) {
          fieldCount[student.field] = [];
        }
        fieldCount[student.field].push(student.firstname);
      });

      // Afficher le nombre total d'étudiants
      console.log(`Number of students: ${students.length}`);

      // Afficher les étudiants par domaine
      for (const [field, names] of Object.entries(fieldCount)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      return resolve();// Ajout d'un return pour s'assurer que la promesse est toujours résolue
    });
  });
}

module.exports = countStudents;
