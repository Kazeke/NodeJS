import { constants } from 'buffer';
import fs from 'fs';

// задача 3
setInterval(function() {
    let about = '!';
    let page = 'readme.txt';

    fs.writeFileSync(page, about);
    
}, 5000);

// задача 4
let readText1 = +fs.readFileSync('1.txt', 'utf-8');
let readText2 = readText + 1;
fs.writeFileSync(String(readText2));

// задача 5
let readText1 = +fs.readFileSync('1.txt', 'utf-8');
let readText2 = +fs.readFileSync('2.txt', 'utf-8');
let readText3 = +fs.readFileSync('3.txt', 'utf-8');
let readText4 = +fs.readFileSync('4.txt', 'utf-8');
let readText5 = +fs.readFileSync('5.txt', 'utf-8');

console.log(readText1 + readText2+ readText3+ readText4 + readText5);

//задача 6
try{
    let text = fs.readFileSync('readme.txt', 'utf-8');
    console.log('text');   
}catch(err){
    console.log('при чтении файла возникла ошибка!')
}

//задача 7
fs.readFile("readme.txt",'utf-8', function(err, data){
    let five = Number(data);
    five = five**2;
    console.log('five');
});

//задача 8
fs.readFile("readme.txt", "utf-8", function(err, data){
    if(!err){
        console.log('data');
    }
    else{
        console.log('Такого файла нет', err);
    }

});

//задача 9
fs.readFile("file1.txt", "utf-8", function(err, data){
    if(!err){
        fs.readFile("file2.txt", "utf-8", function(err, data2){
            if(!err){
                fs.readFile("file3.txt", "utf-8", function(err, data3){
                    if(!err){
                        console.log(Number(data)+Number(data2)+Number(data3));
                    }
                    else{
                        console.log('В файле file3.txt произошла ошибка');
                    }

                })
            }
            else{
                console.log('В файле file2.txt произошла ошибка');
            }
        })
    }
    else{
        console.log('В файле file1.txt произошла ошибка');
    }
});


//задача 9
 

//задача 10

fs.readFile("readme.txt", "utf-8", function(err, data){
    if(!err){
        data = Number(data)**2;
        fs.writeFile("readme.txt", String(data), function(err){
            if(err){
                console.log('При запииси файла возникла ошибка', err);
            }
        });
    }
    else{
        console.log('При чтении файла, возникла ошибка ');
    }
});

//задача
try{
    let text = fs.readFileSync('readme.txt', 'utf8');
    console.log(text);
}catch(err){
    console.log('при чтении файла возникла ошибка');
}

let readText = +fs.readFileSync('1.txt', 'utf-8');
let readText2 = +fs.readFileSync('2.txt', 'utf-8');
let readText3 = +fs.readFileSync('3.txt', 'utf-8');

console.log(readText1+readText2+readText3);

let readText = +fs.readFileSync('1.txt', 'utf8');
let readText2 = readText + 1;

fs.readFileSync(String(readText2));

           

м789((чсс9я