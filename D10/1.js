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
    console.log(req.path);
    console.log(req.url);
    console.log(req.query);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.headers.host);
    console.log(req.acceptsLanguages);
});
