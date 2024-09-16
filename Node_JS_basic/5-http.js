const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async'); // Fonction pour lire le fichier des étudiants

// Ajout d'une ligne vide pour respecter ESLint
const database = process.argv[2]; // Obtenir le chemin du fichier CSV depuis les arguments

// Créer le serveur HTTP
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Appel de la fonction countStudents avec le fichier CSV
    countStudents(database)
      .then((output) => {
        // Ajouter les détails des étudiants au message de réponse
        res.write(output);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Écouter sur le port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Exporter le serveur pour une utilisation ultérieure
module.exports = app;
