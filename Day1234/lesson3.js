import fs from 'fs';
let readText = +fs.readFileSync('1.txt', 'utf-8');
let readText2 = +fs.readFileSync('2.txt', 'utf-8');

console.log(readText + readText2)