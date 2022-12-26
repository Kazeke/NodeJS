import express from "express";

let app = express();

app.get('/test/show/all/', function(req, res) {
  res.send('Privet ' + ' - ' + req.url);
});

app.get('/test/show/:num/', function(req, res) {
  res.send('Privet ' + ' - ' + req.url);
});

app.get('/test/:num1/:num2', function(req, res) {
  res.send('Privet ' + ' - ' + req.url);
});

app.listen(3000, function () {
  console.log("Server start");
});
