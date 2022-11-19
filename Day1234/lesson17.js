import fs from 'fs';

fs.readFile("readme.txt", "utf8", (err, data)=>{
    if(!err){
        fs.writeFile("readme.txt", data + "Стрелка", err=>{
            if(err){
                console.log("При записи файла, возникла ошибка ", err);
            }
        });
    }
    else{
        console.log("При чтении файла, возникла ошибка ", err);
    }
});