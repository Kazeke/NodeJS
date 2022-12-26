import express from "express";

let app = express();

app.get("/bat(man)?", function (req, res) {
  res.send('Hello world ' + ' - ' + req.url);
});

// app.get("/water/:chislo1/:chislo2", function (req, res) {
//   res.send(req.params.chislo1 + ' ' + req.params.chislo1);
// });

// app.get("/water/:num", function (req, res) {
//   console.log(req.params.num);
//   res.send(req.params.num);
// });

app.listen(3000, function () {
  console.log("Server start");
});
