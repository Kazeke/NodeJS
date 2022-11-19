import fs from 'fs';

let names = ["file1.txt", "file2.txt", "file3.txt"];
let files = [];

for(let name of names){
    // Записываем название файлов в массив files через цикл,
    // И читаем его
    files.push(fs.promises.readFile(name, "utf8"));
}
Promise.all(files).then(data => {
    console.log(files)
    //fs.promises.writeFile("res.txt", data.join('+'));
    let summ = data[1] - data[0]
    let myname = "Меня зовут " + data[2] 
    fs.promises.writeFile("res.txt", myname + String(summ));
}).catch(err => {
    console.log("Что-то пошло не так ", err);
});
