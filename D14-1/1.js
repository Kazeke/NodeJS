import express from "express";
import expresshandelbars from 'express-handlebars';

const handelbars = expresshandelbars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

let app = express();

app.engine('hbs', handelbars.engine);
app.set('view engine', 'hbs');

app.get('/page/:page', function(req, res){
    res.render(req.params.page, {text1: 'hello', text2: "world!", text: "Abylay", title: 'title' + req.params.page})
  });

let titles = {
    index:    'главная страница',
	about:    'о нас',
	conctacs: 'контакты',
	price:    'наш прайс'
}


app.get('/page/index', function(req, res){
    res.render(req.params.page, {titless: titles.index})
});

app.get('/page/about', function(req, res){
    res.render(req.params.page, {titless: titles.about})
});

app.get('/page/conctacs', function(req, res){
    res.render(req.params.page, {titless: titles.conctacs})
});

app.get('/page/price', function(req, res){
    res.render(req.params.page, {titless: titles.price})
});

app.get('/page/:titles', function(req, res){
    for (elem in titles){
        res.render(req.params.page, {titless: elem})
    };    
});

let param1 = 'Переменная 1';
let param2 = 'Переменная 2';
let param3 = 'Переменная 3';
let param4= 'Переменная 4';
let param5 = 'Переменная 5';


app.get('/page/content', function(req, res){
    res.render(req.params.page, {titless: titles.price})
});

app.listen(3000, function(){
    console.log('Server start');
});