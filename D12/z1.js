import express from "express";

let app = express();

app.get("/water/:num", function (req, res) {
  //console.log(req.params.num**3);
  res.send(req.params.num**3);
});

app.listen(3000, function () {
  console.log("Server start");
});

