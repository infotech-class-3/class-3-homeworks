const express = require("express");
const router = express.Router();
<<<<<<< Updated upstream
const {register, login, find, findAll, update, remove} = require('../services/usersService.js');
=======
const {register, login, find, findAll, update, remove} = require('../services/userService.js');
>>>>>>> Stashed changes

const auth =require("../middlewares/auth.js");
const logger =require("../middlewares/logger.js");


// middleware yazma islemi------------------
/* const auth = (req, res, next) => {

    //jwt isleminin yapilmasi.......
    const headerAuth = req.headers["authorization"];//req teki headers in altindaki autorization altinda token i almak icin
    if (!headerAuth) {
        return  res.status(400).json({message:"Has no token"});
    }
    const token = headerAuth.split(" ")[1];// split ile bosluklu array'in ikinci elemani token
    
    //const user = req.body;
    jwt.verify(token, process.env.ACCESS_TOKEN, (err,data) =>{
        if(err) {
            return  res.status(400).json({message:"unautherized person", err});
        }
        next();
    });
} */
    /* const logger = (req, res, next) => {
        console.log("Middleware olarak burdayim");

        next();
    } */
    /* const loggedInUsed = false;// false olmasi durumunda next() islemedigi icin asagidaki router da findAll islemini yapmiyor.
        if(!loggedInUsed) {
        return  res.status(400).json({message:"unautherized person"});
        }
    next(); */

//-------------------------------------------
/* router.get('/', (req, res) =>{
    res.send("GET istegi yapildi");
}); */

// User register islem yolu
router.post('/register', register );

// User login islem yolu
router.post('/login', login);

// User'in bulunmasi
router.get('/:id', find);

// User'in tamaminin listelenmesi
router.get('/', auth, logger, logger, findAll);//auth functionda true olursa, yani kullanici senaryo geregi bagliolursa auth islemini next() yönlendirip, finAll u calistirir.

// User bilgilerinin güncellenmesi
router.patch('/', update);

// User'in birisini DB den silme islemi 
router.delete('/:id', auth, remove);//secure



// Rest API 
/*
    CRUD
        *Create
        *Read
        *Update
        +Delete
*/

module.exports = router;