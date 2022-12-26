import express from "express";

let app = express();

app.get("/water/:num", function (req, res) {
  if (req.params.num <=9 ) {
    res.send(req.params.num);
  }
  else {
    res.status(404).send('Stranitsia ne naidena');
  }
});

app.listen(3000, function () {
  console.log("Server start");
});

