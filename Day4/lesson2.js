import fs from 'fs';

fs.promises.readFile("superman.txt", "utf8").then(data => {
    console.log(data);
}).catch(err => {
    console.log("Ошибка", err);
});