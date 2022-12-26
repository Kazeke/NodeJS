import express from "express";

let app = express();

app.get("/water/:num", function (req, res) {
  res.send(req.params.num**3);
});

app.listen(3000, function () {
  console.log("Server start");
});

