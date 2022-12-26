import express from "express";

let app = express();

app.get("/water/:chislo1/:chislo2/:chislo3", function (req, res) {
  res.send(Number(req.params.chislo1) + Number(req.params.chislo2)+ Number(req.params.chislo3));
});


app.listen(3000, function () {
  console.log("Server start");
});
