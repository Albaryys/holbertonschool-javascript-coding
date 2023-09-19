#!/usr/bin/node
const fs = require('fs');

// Check if the user provided a file path as the first argument
if (process.argv.length !== 3) {
  console.error('Usage: ./0-readme.js <file-path>');
  process.exit(1);
}

// Read the content of the file in utf-8 encoding
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
