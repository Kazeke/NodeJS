import fs from 'fs';

let names = ["file1.txt", "file2.txt", "file3.txt"];
let files = [];

for(let name of names){
    // Записываем название файлов в массив files через цикл,
    // И читаем его
    files.push(fs.promises.readFile(name, "utf8"));
}
console.log(files);