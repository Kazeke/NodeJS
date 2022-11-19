import fs from 'fs';

fs.promises.readFile("readme.txt", "utf8").then(data => {
    return fs.promises.writeFile("readme.txt", data + " и Белка");
}).catch(err => {
    console.log("Нет, такого файла нет, братан", err);
}    
);