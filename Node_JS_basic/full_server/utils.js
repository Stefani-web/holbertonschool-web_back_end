const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n').map(line => line.split(','));
    const result = {};

    for (const [firstName, field] of lines) {
      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(firstName);
    }

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { readDatabase };
