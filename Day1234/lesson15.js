import fs from 'fs';

fs.readFile("file1.txt", "utf8", function(err, data){
    if(!err){
        fs.readFile("file2.txt", "utf8", function(err, data2){
            if(!err){                
                    fs.readFile("file3.txt", "utf8", function(err, data3){
                        if(!err){
                            console.log(Number(data) + Number(data2)+Number(data3));
                        }
                        else{
                            console.log("В файле file23.txt произошла ошибка");
                        }
                    })
                
            }
            else{
                console.log("В файле file2.txt произошла ошибка");
            }
            
        })
    }
    else{
        console.log("В файле file1.txt произошла ошибка");
    }
});