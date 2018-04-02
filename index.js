const fs = require('fs');
const calculateWords = require('./modules/calculateWords');

const pathToFile = process.argv[2];

const content = fs.readFileSync(pathToFile, 'utf8');

const words = [...new Set(content.split(' '))];

words.forEach(e => {
  console.log(`${e} ${calculateWords(e, content)}`);
});
