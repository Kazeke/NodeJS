//fs.readFile("название файла", "utf8", function(){});
fs.readFile("readme.txt", "utf8", function(err, data){
    if(!err){
        console.log(data);
    }
    else{
        console.log("Нее, такого файла нет - ", err);
    }
});