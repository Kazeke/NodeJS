import express from "express";

let app = express();

let str = `<div>
    <p>text1</p>
    <p>text2</p>
    <p>text3</p>
</div>`;



app.get('/page1', function(req, res){ 
    res.send(str);
});

app.get('/page2', function(req, res){ 
    res.type('text/html');
    res.send('<h1><i>Page2</i></h1>');
});

app.get('/cabinet', function(req, res){ 
    res.redirect('/page2');
});

app.listen(3000, function(){ 
    console.log('Server Start');
});

app.get('/test', function(req, res){ 
    res.status(404).send('Stranitsia ne otvechaet');
});


let arr = ['a', 'b', 'c'];

let prods = [
	{
		name: 'prod1',
		cost: 1000,
	},
	{
		name: 'prod2',
		cost: 2000,
	},
	{
		name: 'prod3',
		cost: 3000,
	},
];

app.get('/list', function(req, res){
    let result = '<ol>'
    for(let elem of prods){
        result += '<li>' + elem.name + '-' + elem.cost + '</li>';
    }
    result += '</ol>';
    res.send(result);
});





app.use(function(req, res){
    res.status(404).send(req.url + ' not found');
});
