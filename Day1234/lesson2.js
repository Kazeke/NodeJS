import fs from 'fs';
let readText = fs.readFileSync('readme.txt', 'utf-8');
console.log(readText)