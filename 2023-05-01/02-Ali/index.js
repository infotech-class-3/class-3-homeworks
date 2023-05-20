const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { calc } = require('./calc');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/islem', (req, res) => {
  const { sayi_1, sayi_2, islem } = req.query;
  const sonuc = calc(Number(sayi_1), Number(sayi_2), islem);
  res.json({ ...sonuc, islem: "GET istegi" });
});

app.post('/islem', (req, res) => {
    const { sayi_1, sayi_2, islem } = req.body;
    const sonuc = calc(Number(sayi_1), Number(sayi_2), islem);
    res.json({ ...sonuc, islem: "POST istegi" });
});
  
app.listen(4000, () => {
  console.log('Server bu portta calisiyor; 4000!')
})