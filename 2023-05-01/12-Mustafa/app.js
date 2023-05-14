const express = require('express'); // dışardan dosyaları import etmek için require kullanıyoruz 
const bodyParser = require ('body-parser'); // dışardan dosyaları import etmek için require kullanıyoruz 
const calc = require("./calc.js");

const islemParametresi = (parametre) =>{

    if(parametre === 'topla') return '+';
    if(parametre === 'carp') return '*';
    if(parametre === 'cikar') return '-';
    if(parametre === 'bol') return '/';
};

const PORT = 4000; // port büyük harfli yazılıyor 

const app = express();

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);




router.get("/islem", (req, res)=>{
    const {num_1, num_2, islem} = req.query;

    const sonuc = calc(Number(num_1), +num_2,  islemParametresi(islem));
    res.json({...sonuc, islem: "GET istegi"});
});


router.post("/islem", (req, res)=>{
    const {num_1, num_2, islem} = req.body;

    const sonuc = calc(Number(num_1), +num_2,  islemParametresi(islem));
    res.json({...sonuc, islem: "POST istegi"});
});


app.listen(PORT, ()=> {
    console.log(`server ${PORT} portunda calisiyor....`);
});