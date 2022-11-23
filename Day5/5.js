// import {surname} from './myName.js'

// let iname = 'Казбек';
// let result =  surname("Кадыров") +" " + iname;
// console.log(result)

// let result = square(2) + cube(3);
// console.log(result)

// import {square, cube} from './math.js'


// let result = square(2) + cube(3);
// console.log(result)

// console.log("Hello World");
// let x = 5;
// let y = 8;
// console.log(x+y);

// for(let i = 0; i<)

// console.log("Hello world!")
// let x =3 ;
// let y = 12;
// console.log(x+y)


// setInterval(function(){
//     console.log("19:23:")
// }, 1000
// );

// let i =1;
// setInterval(function(){
//     i++
//     console.log(i)
// }, 1000
// );


// let i =0;
// setInterval(function(){
//     i++
//     console.log("19:25")
// }, 1000
// );

// import fs from 'fs';

// setInterval(function(){
//     let about = '!';
//     let page = 'readme.txt';

//     fs.writeFileSync(page, about);  
// }, 5000
// );

// import fs from 'fs';
// let readText = +fs.readFileSync('1.txt', 'utf-8');
// let readText2 = readText +1;

// fs.writeFileSync(String(readText2)); 

// import fs from 'fs';
// let readText = +fs.readFileSync('1.txt', 'utf-8');
// let readText2 = +fs.readFileSync('2.txt', 'utf-8');
// let readText3 = +fs.readFileSync('3.txt', 'utf-8');

// console.log(readText + readText2 +readText3 )

// import fs from 'fs';

// try{
//   let text = fs.readFileSync('readme.txt', 'utf8');
//   console.log(text);
// } catch(err){
//   console.log('при чтении файла возникла ошибка')
// }

// import fs from 'fs';

// fs.readFile("readme.txt", "utf8", function(err, data){
//     let five = Number(data);
//     five = five**3
//     console.log(five);
// });

import fs from 'fs';
/*
    fs.promises.readFile("readme.txt", "utf8").then(data => {
    console.log(data);
});
*/

fs.promises.readFile("file1.txt", "utf8").then(data => {
    console.log(data**3);
});