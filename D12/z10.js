import express from "express";

let app = express();

app.get("/cap(capitanamerica)?", function (req, res) {
  res.send('Privet ' + ' - ' + req.url);
});

app.listen(3000, function () {
  console.log("Server start");
});
