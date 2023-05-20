require('dotenv').config()

const express = require("express")

const calc = require("./calc.js")

const app = express()

app.use(router)

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

const router = express.Router()


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


    const sonuc = calc(sayi_1, sayi_2, islem)
    res.send(sonuc)
})

router.post('/islem', (req, res) => {


    console.log(req.body)
    const sayi_1 = parseInt(req.body.sayi_1)
    const sayi_2 = parseInt(req.body.sayi_2)
    const islem = req.body.islem


    const sonuc = calc(sayi_1, sayi_2, islem)
    res.send(sonuc)
    // res.send(req.body)
})

const port = process.env.PORT




app.listen(port, () => {
    console.log(`Server basladi: ${port}`)
})