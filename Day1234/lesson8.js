import fs from 'fs';

//Добавили текст one в файл one.txt
fs.writeFileSync("one.txt", "1");
fs.writeFileSync("two.txt", "2");

//Читаем с файла one.txt
let one = fs.readFileSync("one.txt", "utf8");
one = Number(one);

//Читаем с файла one.txt
let two = fs.readFileSync("two.txt", "utf8");
two = Number(two);

console.log(one + two);
// String();
//console.log(joker);
//console.log(typeof(joker));