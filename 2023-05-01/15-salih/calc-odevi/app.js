require('dotenv').config()

const express = require("express")
const bodyParser = require('body-parser')

const port = process.env.PORT
const calc = require("./calc.js")

const islemParametresi = (parametre) =>{
    if (parametre === 'topla') return '+'
    if (parametre === 'cikar') return '-'
    if (parametre === 'carp') return '*'
    if (parametre === 'bol') return '/'
}
const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()) 
app.use(router)



router.get('/islem', (req, res) => {

    console.log(req.query)
    console.log(req.body)
    const sayi_1 = Number(req.query.sayi_1)

    if (isNaN(sayi_1)) {
        res.send({sayi_1})
    }    
    console.log({sayi_1})
    const sayi_2 = Number(req.query.sayi_2)

    if (isNaN(sayi_2)) {
        res.send({sayi_2})
    }

    console.log({sayi_2})
    const islem = req.query.islem


    const sonuc = calc(sayi_1, sayi_2, islemParametresi(islem))
    res.json(sonuc)
})

router.post('/islem', (req, res) => {


    console.log(req.body)
    const sayi_1 = parseInt(req.body.sayi_1)
    const sayi_2 = parseInt(req.body.sayi_2)
    const islem = req.body.islem


    const sonuc = calc(sayi_1, sayi_2, islemParametresi(islem))
    res.json({...sonuc, islem:"Post istegi" })
    // res.send(req.body)
})




app.listen(port, () => {
    console.log(`Server basladi: ${port}`)
})