import express from "express";
import expresshandelbars from 'express-handlebars';

const handelbars = expresshandelbars.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
        getDate: function(){
            let date = new Date();

            let year = date.getFullYear();
            let month = date.getMonth() - 1;
            let day = date.getDate();

            return day + ' . ' + month + ' . ' + year;
            
        },
        getTime: function(){
            let date = new Date();

            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            return hour + ' . ' + minute + ' . ' + second;
        }
    }
});

let app = express();

app.engine('hbs', handelbars.engine);
app.set('view engine', 'hbs');

app.get('/date', function(req, res){
    res.render('test', {title: 'Vremya', header: 'Moi sait', footer: 'Moi instagram'} );
});

app.get('/hour', function(req, res){
    res.render('time', {title: 'Time', header: 'My time', footer: 'My footer'} );
});

app.listen(3000, function(){
    console.log('Server start');
});