import express from "express";
import expresshandlebars from 'express-handlebars';

const handlebars = expresshandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});


let app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

// app.get('/test/:joker', function(req, res){
//     res.render(req.params.joker, {user: ['user1','user2','user3']
//     });
// });

// let products = ['moloko', 'airan', 'et'];

// app.get('/test/:joker', function(req, res){
//     res.render(req.params.joker, {user: products
//     });
// });

app.get('/test/:joker', function(req, res){
    res.render(req.params.joker, {
        sravnenie: 5 < 3,
        joker1:  5 + 3 > 7,
        joker2: 10 * 3 < 40,
        joker3: 5 - 4 > 2
    });
});

app.listen(3000, function(){
    console.log('Server start');
});