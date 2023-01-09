import express from "express";

let app = express();

// Техническое задание
// Вам предоставлены данные о наших сотрудниках.
// 1)	Вам необходимо сделать отдельную страницу для каждого отдела и вывести данные в виде таблицы.
// 2)	Так же вам необходимо создать страницу, где будут выводиться сотрудники, которые зарабатывают меньше 450 долларов
// 3)	Так же сделать страницу для лучших сотрудников, которые зарабатывают больше 450 долларов

let otdel1 = { user1: 400, user2: 650, user3: 900 };
let otdel2 = { user1: 550, user2: 430, user3: 300 };
let otdel3 = { user1: 100, user2: 250, user3: 1500 };
let otdel4 = otdel1 + otdel2 + otdel3;

console.log(otdel4);

app.get("/otdel/:num", function (req, res) {
  if (req.params.num == 1) {
    let result =
      "<li>" + otdel1.user1 + "-" + otdel1.user2 + "-" + otdel1.user3 + "</li>";
    res.send(result);
  }
  if (req.params.num == 2) {
    let result =
      "<li>" + otdel2.user1 + "-" + otdel2.user2 + "-" + otdel2.user3 + "</li>";
    res.send(result);
  }
  if (req.params.num == 3) {
    let result =
      "<li>" + otdel3.user1 + "-" + otdel3.user2 + "-" + otdel3.user3 + "</li>";
    res.send(result);
  } else {
    res.status(404).send("Stranitsia ne naidena");
  }
});

app.get("/good", function (req, res) {
  for (let elem of otdel4) {
    if (elem > 450) {
      res.send(elem);
    }
  }
});

app.listen(3000, function () {
  console.log("Server start");
});
