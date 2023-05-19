const express = require ('express')
const bodyParser = require ('body-parser');
const calc = require('./calc.js');

const PORT = 3000;

const app = express();

const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: false}));
app.use(router);

router.get('/islem', (req, res)=> {
    const {num_1, num_2, islem} = req.query;
    const sonuc = calc(+num_1, +num_2, "topla");
    res.json({...sonuc, islem : "GET istegi"})  
})

router.post('/islem', (req, res)=> {
    const {num_1, num_2, islem} = req.body;
    const sonuc = calc(+num_1, +num_2, islem);
    res.json({...sonuc, islem : "POST istegi"})  
})

app.listen(PORT, () => {
        console.log(`Server ${PORT} portunda calisiyor`)
});
