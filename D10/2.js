import express from 'express';
let app = express();

// app.get('', function(){});
app.get('/', function(req, res){
    res.send("Hello World!")
});

app.listen(3000, function(){
    console.log('Running');
});

app.get('/page1', function(req, res){
    res.send('Page1');
});
app.get('/page2', function(req, res){
    res.send('Page2');
});
app.get('/page3', function(req, res){
    res.send('Page3');
});

app.get('/page4', function(req, res){
    res.send('Page4');
});
app.get('/page5', function(req, res){
    res.send('Page5');
});
