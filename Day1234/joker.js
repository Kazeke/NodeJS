import fs from 'fs';

//Добавили текст Joker в файл joker.txt
// fs.writeFileSync("joker.txt", "Joker");

//Читаем с файла joker.txt
let joker = fs.readFileSync("joker.txt", "utf8");
joker = Number(joker);
// String();
console.log(joker);

console.log(typeof(joker));