import express from "express";

let app = express();

app.get("/hello(world)?", function (req, res) {
  res.send('Privet ' + ' - ' + req.url);
});

app.listen(3000, function () {
  console.log("Server start");
});
