import fs from 'fs';
/*
    fs.promises.readFile("readme.txt", "utf8").then(data => {
    console.log(data);
});
*/

fs.promises.readFile("file1.txt", "utf8").then(data => {
    console.log(data**3);
});