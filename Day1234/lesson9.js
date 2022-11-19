import fs from 'fs';


//Читаем с файла one.txt
let one = fs.readFileSync("one.txt", "utf8");
one = Number(one);

one +=1;

let two = String(one);
//Добавили текст one в файл one.txt
fs.writeFileSync("one.txt", two);

//one = fs.readFileSync("one.txt", "utf8");
//one = Number(one);

//console.log(one);


// String();
//console.log(joker);
//console.log(typeof(joker));