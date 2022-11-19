import fs from 'fs'
/*
    fs.promises.readFile("readme.txt", "utf8").then(data => {
    console.log(data);
});
*/

fs.promises.readFile("readme.txt", "utf8").then(data => {
    console.log(data);
});