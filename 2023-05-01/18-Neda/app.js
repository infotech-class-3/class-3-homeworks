const express = require('express')
const bodyParser = require('body-parser');
const calc = require('./calc.js');

const islemParametresi = ( parametre) => {
    if (parametre === 'topla') return '+'
    if (parametre === 'carp') return '*'
    if (parametre === 'cikar') return '-'
    if (parametre === 'böl') return '/'
};

const PORT = 4000;

const app = express();

const router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/islem', (req, res) => {
    const { num_1, num_2, islem } = req.query;

    const sonuc = calc(Number(num_1), +num_2, islemParametresi(islem));
    res.json({...sonuc, islem: "GET istegi"});
});

router.post('/islem', (req, res) => {
    const { num_1, num_2, islem } = req.body;

    const sonuc = calc(Number(num_1), +num_2, islemParametresi(islem));
    res.json({...sonuc, islem: "POST istegi"});
});

app.listen(PORT, () => {
    console.log('Server ${PORT} portunda calisiyor ;)')
});
