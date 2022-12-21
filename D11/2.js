import express from 'express';
let app = express();

app.get('/', function(req, res){ 
    res.send('Hello World!')
});
app.listen(3000, function(){ 
    console.log('Running');
});
app.get('/page1', function(req, res){ 
    res.send('Page1');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});
app.get('/page2', function(req,res){ 
    res.send('Page2');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});
app.get('/page3', function(req,res){ 
    res.send('Page3');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});
app.get('/page4', function(req,res){ 
    res.send('Page4');
    console.log(req.path);
    console.log(req.protocol);
    console.log(req.url);
});
app.get('/page5', function(req, res){ 
    res.send('Page5');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});
app.get('/page6', function(req, res){ 
    res.send('Page6');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});
app.get('/page7', function(req, res){ 
    res.send('Page7');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});
app.get('/page8', function(req, res){ 
    res.send('Page8');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});
app.get('/page9', function(req, res){ 
    res.send('Page9');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});
app.get('/page10', function(req, res){ 
    res.send('Page10');
    console.log(req.path);
    console.log(req.url);
    console.log(req.protocol);
});

