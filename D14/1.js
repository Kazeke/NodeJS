import express from "express";

let app = express();


let users = [
	{
		name: 'user1',
		age:  31
	},
	{
		name: 'user2',
		age:  32
	},
	{
		name: 'user3',
		age:  33
	},
];

app.listen(3000, function(){ 
    console.log('Server Start');
});

app.get('/1', function(req, res){
    let result = '<ul>'
    for(let elem of users){
        result += '<li>' + elem.name + '-' + elem.age + '</li>';
    }
    result += '</ul>';
    res.send(result);
});


let employees = [
	{
		surname: 'surname1',
		name:    'user1',
		salary:  1000,
	},
	{
		surname: 'surname2',
		name:    'user2',
		salary:  2000,
	},
	{
		surname: 'surname3',
		name:    'user3',
		salary:  3000,
	},
];

app.get('/2', function(req, res){
    let result = '<ol>'
    for(let elem of employees){
        result += '<li>' + elem.surname + ' - ' + elem.name + ' - ' + elem.salary + '</li>';
    }
    result += '</ol>';
    res.send(result);
});

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

app.get('/3', function(req, res){
  let result = '<ol>'
  for(let elem of prods){
      result += '<li>' + elem.name + ' - ' + elem.cost + '</li>';
  }
  result += '</ol>';
  res.send(result);
});

// <table><thead><tr> <th> </th> </tr></thead><tbody> <tr> <th> </th></tr> </tbody></table>;
