const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5000;
const app = express();
const calc = require("./calc.js");

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/islem", (req, res) => {
  //console.log("Get istegi yapildi");
  const num1 = req.query.sayi_1;
  const num2 = req.query.sayi_2;
  const calculate = req.query.islem;
  const istek = "GET Istegi";
  //console.log(`${num1} --- ${num2} --- ${calculate} `);
  res.json(calc(Number(num1), Number(num2), calculate, istek));
});

router.post("/islem", (req, res) => {
  const num1 = req.body.num_1;
  const num2 = req.body.num_2;
  const calculate = req.body.islem;
  const istek = "POST Istegi";

  res.json(calc(Number(num1), Number(num2), calculate, istek));
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda calisiyor`);
});
