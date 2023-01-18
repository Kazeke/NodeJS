import express from "express";
import expresshandelbars from 'express-handlebars';

const handelbars = expresshandelbars.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
        square: function(){
            let len = 6;
            let square1 = len * len;

            return square1;
            
        },
        circle: function(){
            let radius = 7;
            let ploshad = radius**2 / 4 * 3.14;

            return ploshad;
        }
    }
});

let app = express();

app.engine('hbs', handelbars.engine);
app.set('view engine', 'hbs');

app.get('/time', function(req, res){
    res.render('test', {title: 'Vremya', header: 'Moi sait', footer: 'Moi instagram'} );
});

app.get('/circle', function(req, res){
    res.render('test', {title: 'Time', header: 'My time', footer: 'My footer'} );
});

app.listen(3000, function(){
    console.log('Server start');
});