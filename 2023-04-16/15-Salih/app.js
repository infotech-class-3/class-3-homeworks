const express = require("express")
const mongoose = require("mongoose")
var bodyParser = require('body-parser')
const data = require('./users.js');
const users = require("./users.js");
const app = express()
mongoose.connect("mongodb://127.0.0.1/yeniproje",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
const userSchema= new mongoose.Schema({
    name:String,
    surname:String,
    age:Number
})

const User = mongoose.model("User",userSchema);
const router = express.Router();
const PORT = 3000
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())
app.use(router);



app.listen(PORT, () => {
    console.log("Server basladi!");
})

router.post('/users', (req,res)=>{
    console.log(req.body);
    const age = req.body.age;
    res.json(data.filter((user)=> user.age== age));
})


router.get('/users', (req, res) => {
    User.find().then(users => {
        res.json(users)  
    }).catch(error=>{
        console.error(error);
        res.status(500).json({error:'kullanicilari cekerken hata olustu'});
    })
})

router.get('/selam/:name/', (reg, res) =>{
    res.send(`selam ${reg.params.name}`);
})

router.get('/hello', (req, res) => {
    res.send("Hello you");
})

router.get('/users/:age/', (req,res) => {
    const age = req.params.age;
    console.log(age);

    res.json(data.filter((user) => user.age == age));
})



router.post('/user', (request,response) => {
    const {name,surname,age}=request.body;
    const newUser = new User({name,surname,age});
    newUser.save()
    capitalizedName=request.body.name.charAt(0).toUpperCase()+request.body.name.slice(1).toLowerCase();
    cevap={...request.body,"fullName":capitalizedName+" "+request.body.surname.toUpperCase()};
    console.log(request.body);
    response.send(cevap);
})



