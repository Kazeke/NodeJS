// Сделайте форму с тремя инпутами. 
// После отправки формы отправьте в браузер сумму введенных в инпуты чисел.
import express from "express";
import expresshandelbars from 'express-handlebars';
import bodyParser from 'body-parser';

const handelbars = expresshandelbars.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
        square: function(num){
            return num * num;
        },
        upperCase: function(){
        return this.toUpperCase();
       },
       num1: function(chislo){
            return chislo ** 2;
       },
       num2: function(chislo){
            return chislo ** 3;
       },
       result: function(chislo1, chislo2){
            return chislo1 * chislo2;
       },
       fio: function(name, surname, fathername){
            return name  + ' ' + surname  + ' ' + fathername;
       },
       ssylka: function(href, value){
            return '<a href="' + href + '">' + value + '</a>'
       }
    }
});

let app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.engine('hbs', handelbars.engine);
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('form');
    console.log(req.body.radio);
});

app.post('/target', function(req, res) {
    if(req.body.test == 1){
        res.send('Результат: Казахстан' + '<br><a href="/">Обратно к форме</a>');
    }
    else if(req.body.test == 2){
        res.send('Результат: Россия' + '<br><a href="/">Обратно к форме</a>');
    }
    else if(req.body.test == 3){
        res.send('Результат: Грузия' + '<br><a href="/">Обратно к форме</a>');
    }      
});

// app.post('/target', function(req, res) {
// 	console.log(req.body.gender);
//     if(req.body.gender == 2){
//         res.send('Результат: Вы мужчина' + req.body.gender + '<br><a href="/">Обратно к форме</a>');
//     }
//     else if(req.body.gender == 1){
//         res.send('Результат: Вы женщина' + req.body.gender + '<br><a href="/">Обратно к форме</a>');
//     }     
// });

// app.get('/target', function(req, res){
//     let num1 = +req.query.test1;
//     let num2 = +req.query.test2;
//     let num3 = +req.query.test3;

//     let result = num1 + num2 + num3;
//     res.send('Результат: ' + result + '<br><a href="/">Обратно к форме</a>');

//     console.log(req.query);
//     res.send('result');
// });

// app.get('/target', function(req, res){
//     let num1 = req.query.test1;
//     let num2 = req.query.test2;
//     let num3 = req.query.test3;

//     let result = num1 + ' '+ num2 + ' ' + num3;
//     res.send('Результат: ' + result + '<br><a href="/">Обратно к форме</a>');

//     console.log(req.query);
//     res.send('result');
// });

// app.get('/target', function(req, res){
//     let num1 = req.query.test1;

//     let result = num1 ;
//     res.send('Ваш отзыв: ' + result + '<br><a href="/">Обратно к форме</a>');

//     console.log(req.query);
//     res.send('result');
// });

app.listen(3000, function(){
    console.log('Server start');
});

// Напишите скрипт, который будет преобразовывать температуру из градусов Цельсия в градусы Фаренгейта. Для этого сделайте инпут и кнопку
// Цельсий х 1,8 + 32 = Фаренгейт Пример: 10°C x 1,8 + 32 = 50°F.

// app.get('/target', function(req, res){
//     let result = +req.query.test1 * 1.8 + 32;

//     res.send('Фаренгейт: ' + result + '<br><a href="/">Обратно к форме</a>');

//     console.log(req.query);
//     res.send('result');
// });

// Дан текстареа и кнопка. В текстареа вводится текст. 
// По нажатию на кнопку выведите 
// количество слов и количество символов в тексте.

app.get('/target', function(req, res){
    let result = req.query.birthDay;

    // res.send('Количество символов: ' + result.length + '<br><a href="/">Обратно к форме</a>');
    
    // res.send(result);

    let str = result;
    let word = str.split(' '); // word = [a,d,f,g,g]
    let summa = 0;
    for (let i = 0; i < word.length; i++) {
        // summa += i;
        // console.log(i);
        summa++;
    }
    console.log(summa);
});

// Сделайте скрипт-гороскоп. 
// Внутри него хранится массив гороскопов на несколько дней 
// вперед для каждого знака зодиака. 
// По заходу на страницу спросите у пользователя дату рождения, 
// определите его знак зодиака и выведите предсказание для 
// этого знака зодиака на текущий день.

// app.get('/target', function(req, res){
//     let result = req.query.birthDay;

//     if(result > '2023-03-21' && result < '2023-04-19'){
//         res.send('Овен: ' + result + '<br><a href="/">Обратно к форме</a>');
//     }else{
//         res.send('Oshibka');
//     };


   
//     console.log(result);
//     console.log(typeof(result));
//     res.send('result');
// });