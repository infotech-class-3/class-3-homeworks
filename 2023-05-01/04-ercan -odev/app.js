const express = require('express');
const bodyParser = require('body-parser');
const calc = require('./calc');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/islem', (req, res) => {
  const { sayi_1, sayi_2, islem } = req.query;
  const sonuc = calc.hesapla(+sayi_1, +sayi_2, islem);
  res.json({ sonuc, hata: '', istek: 'GET isteği' });
});

app.post('/islem', (req, res) => {
  const { num_1, num_2, islem } = req.body;
  const sonuc = calc.hesapla(+num_1, +num_2, islem);
  res.json({ sonuc, hata: '', istek: 'POST isteği' });
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı porta başlatıldı.`);
});
