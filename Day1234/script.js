//Переменная - это ячейка памяти, которая хранит в себе информацию
//let, var, const

let name = "Магжан";//string
let age = 23;//integer
let doma = true;//boolean
const PI = 3.14;//float

// let x, y, z;
// x = 5;
// y = 10;

// z= x + y;
// document.write(z);
// console.log(z);
// alert(z);

// z= x-y;
// z=x*y;
// z=x/y;
// z=x%y;

let dog = "Rex";
document.write("Мою собаку зовут " + dog)

// let f=

// let arr[]; // Создали массив
let arr = ['a', 'b', 'c', 1, 2, 3, null, true];
console.log(arr[1]);
console.log(arr.length);

arr[2] = 78;
console.log(arr[2]);

// Добавляем в массив
arr[8] = "Восьмой элемент"

console.log(arr[8]);

console.log(typeof(arr[2]));

arr.push('e')
console.log(arr);
console.log(arr[9]);

// Удаление из массива
delete arr[6];

console.log(arr[6]);

// создаем обьект
let joker ={
    1: 'a',
    2: 'b',
    3: 'c'

}; // создаем обьект

console.log("Первый ключ " + joker[1]);

let superman = {
    a: 1,
    b: 2,
    c: 3
};
console.log(superman.a);

console.log(superman); // получаем весь обьект

console.log(Object.keys(superman));

superman['a'] = '10';
console.log(superman);

let cat = {};

cat.color = "red";
cat.life = 9;
cat.kittens=3;

console.log(cat);

delete cat.color;
console.log(cat);

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 10; i >= 0; i-=2){
//     console.log(i);
// }


// for(let i = 10; i >= 0; i-=2){
//     console.log(i);
// }


// for(let i = 23; i <= 150; i++){
//     if(i%25==0){
//         console.log(i);
//     }
    
// }




// if(accept==true){
//     alert("Ваша фамилия " + surname);
// }

// else{
//     surname = prompt("Какая у вас фамилия?")

// }
let surname =  prompt("Какая у вас фамилия?");

while(surname != ""){
    let accept = confirm("СОГЛАСНЫ ЛИ ВЫ С ЭТОЙ ФАМИЛИЕЙ " + surname + " ?");
    if(accept==true) break;
    if(accept==false){
        surname =  prompt("Какая у вас фамилия?");
    };

}

let i =1;

while(i<10){
    i++;
    console.log(i);
}