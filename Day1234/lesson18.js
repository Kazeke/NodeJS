import fs from 'fs';

fs.readFile("readme.txt", "utf8", function(err, data){
    if(!err){
        data =Number(data)**2

        fs.writeFile("readme.txt", String(data), function(err){
            if(err){
                console.log("При записи файла, возникла ошибка ", err);
            }
        });
    }
    else{
        console.log("При чтении файла, возникла ошибка ", err);
    }
});