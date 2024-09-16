const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async'); // Importer la fonction depuis 3-read_file_async.js

const database = process.argv[2]; // Obtenir le chemin de la base de données depuis les arguments

// Créer le serveur HTTP
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Appeler la fonction countStudents de manière asynchrone
    countStudents(database)
      .then((data) => {
        res.write(`Number of students: ${data.total}\n`);
        res.write(`Number of students in CS: ${data.cs.count}. List: ${data.cs.list.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.swe.count}. List: ${data.swe.list.join(', ')}\n`);
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Le serveur écoute sur le port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Exporter l'application pour l'utiliser dans d'autres fichiers si nécessaire
module.exports = app;
