import fs from 'fs';

let names = ["file1.txt", "file2.txt", "file3.txt", "file4.txt", "file5.txt"];
let files = [];

for(let name of names){
    // Записываем название файлов в массив files через цикл,
    // И читаем его
    files.push(fs.promises.readFile(name, "utf8"));
}
Promise.all(files).then(data => {
    //fs.promises.writeFile("res.txt", data.join('+'));
    let summ = +data[0]+ +data[1]+ +data[2]+ +data[3]+ +data[4]
    fs.promises.writeFile("res.txt", String(summ));
}).catch(err => {
    console.log("Что-то пошло не так ", err);
});
