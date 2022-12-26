import express from "express";

let app = express();

app.get("/water/:name/:surname", function (req, res) {
  res.send(req.params.name + ' ' + req.params.surname);
});

app.listen(3000, function () {
  console.log("Server start");
});
