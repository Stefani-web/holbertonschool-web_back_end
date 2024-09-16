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
        return resolve({
          total: 0,
          cs: { count: 0, list: [] },
          swe: { count: 0, list: [] }
        });
      }

      // Enlever l'en-tête et créer un tableau pour les étudiants
      const students = lines.slice(1).map((line) => {
        const [firstname, , , field] = line.split(','); // Ignorer les variables inutilisées 'lastname' et 'age'
        return { firstname, field };
      });

      // Compter les étudiants par domaine
      const fieldCount = {
        CS: { count: 0, list: [] },
        SWE: { count: 0, list: [] }
      };
      students.forEach((student) => {
        if (fieldCount[student.field]) {
          fieldCount[student.field].count += 1;
          fieldCount[student.field].list.push(student.firstname);
        }
      });

      // Résoudre la promesse avec les données structurées
      resolve({
        total: students.length,
        cs: fieldCount.CS,
        swe: fieldCount.SWE
      });
    });
  });
}

module.exports = countStudents;
