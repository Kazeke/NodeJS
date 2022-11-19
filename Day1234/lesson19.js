import { Console } from 'console';
import fs from 'fs';

fs.readFile("file1.txt", "utf8", function(err, data){
    if(!err){
        fs.readFile("file2.txt", "utf8", function(err, data2){
            if(!err){
                fs.readFile("file3.txt", "utf8", function(err,data3){
                    if(!err){
                        let num4 = +data + +data2 + +data3;
                        fs.writeFile("file6.txt", String(num4), function(err){
                            if(err){
                                    сonsole.log("Добавить не удалось!", err)
                            }
                        })

                    }
                    else{
                        console.log("Ошибка", err)
                    }
            
                });

            
            }
            else{
                console.log("Ошибка", err) 
            }

        });

    }
    else{
        console.log("Ошибка", err)
    }

});