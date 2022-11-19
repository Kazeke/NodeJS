import fs from 'fs';


//fs.readFile("название файла", "utf8", function(){});
fs.readFile("readme.txt", "utf8", function(err, data){
    let five = Number(data);
    five = five**3
    let six = five**4
    console.log(five);
    console.log(six);
});