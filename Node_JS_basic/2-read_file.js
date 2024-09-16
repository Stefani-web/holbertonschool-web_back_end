const fs = require('fs');

function countStudents(path) {
  try {
    // Lire le fichier synchroniquement
    const data = fs.readFileSync(path, 'utf8');

    // Séparer le contenu en lignes
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Enlever l'en-tête et compter les étudiants
    const students = lines.slice(1); // Enlever la première ligne (en-tête)
    const totalStudents = students.length;

    // Créer un objet pour stocker le nombre d'étudiants par domaine
    const fields = {};

    // Remplir les données dans l'objet fields
    for (const student of students) {
      const [firstName, field] = student.split(',');

      if (fields[field]) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }
    }

    // Afficher les résultats
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Si le fichier n'est pas accessible
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
