const express = require("express");
const bodyParser = require("body-parser");
const calc = require("./calc.js") //import edilmesi, calc.js

const islemParametresi = (parametre) => {
    if(parametre === "topla") return "+"  // calc.js de parametre olarak switch operatorü '+' istiyor...
    if(parametre === "cikar") return "-"
    if(parametre === "carp") return "*"
    if(parametre === "böl") return "/"

}

const PORT = 6000;

const app = express();

const router = express.Router();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);




// router'larin yazilmasi

    // GET router
     router.get('/islem', (req, res) => {
        //console.log(req.query);
        const { num_1, num_2, islem} = req.query;
        const sonuc = calc(Number(num_1), +num_2, islemParametresi(islem)); // Number() ve + yapilarak type'ni sayiya cevirebiliyoruz.

        //res.send('GET istegi');
        
        res.json({...sonuc, islem: "GET istegi"});// json formatinda sonuc'u yazdirma islemi
     });

    // POST router
        router.post('/islem', (req, res) => {
        //console.log(req.query);
        const { num_1, num_2, islem} = req.body;
        const sonuc = calc(Number(num_1), +num_2, islemParametresi(islem)); // Number() ve + yapilarak type'ni sayiya cevirebiliyoruz.

       
        
        res.json({...sonuc, islem: "POST istegi"});// json formatinda sonuc'u yazdirma islemi
     });



app.listen(PORT, () => {
    console.log(`server ${PORT}'unda calisiyor...`);
});