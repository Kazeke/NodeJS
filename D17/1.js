import express from "express";
import expresshandelbars from 'express-handlebars';

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

app.engine('hbs', handelbars.engine);
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('form');
});

app.get('/target', function(req, res){
    let num1 = +req.query.test1;
    let num2 = +req.query.test2;

    let result = num1 + num2;
    res.send('Результат: ' + result + '<br><a href="/">Обратно к форме</a>');

    console.log(req.query);
    res.send('result');
});


app.listen(3000, function(){
    console.log('Server start');
});