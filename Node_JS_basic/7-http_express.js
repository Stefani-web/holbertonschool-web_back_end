// Importation des modules nécessaires
const express = require('express');
const countStudents = require('./3-read_file_async');

// Création de l'application Express
const app = express();
// Récup du chemin du fichier de base de données depuis les args de la ligne de commande
const filePath = process.argv[2];

// Route pour la racine ('/')
app.get('/', (req, res) => {
  // Réponse avec un texte simple
  res.send('Hello Holberton School!');
});

// Route pour '/students'
app.get('/students', (req, res) => {
  // Écriture de la première ligne de la réponse
  res.write('This is the list of our students\n');
  // Appel de la fonction countStudents pour lire et traiter le fichier de base de données
  countStudents(filePath)
    .then((data) => {
      // Écriture des données des étudiants dans la réponse
      res.write(data.join('\n'));
      // Fin de la réponse
      res.end();
    })
    .catch(() => {
      // En cas d'erreur, fin de la réponse avec un message d'erreur
      res.end('Cannot load the database');
    });
});

// Démarrage du serveur et écoute sur le port 1245
app.listen(1245, () => {
  console.log('Listening on port 1245');
});

// Exportation de l'application pour utilisation externe
module.exports = app;
