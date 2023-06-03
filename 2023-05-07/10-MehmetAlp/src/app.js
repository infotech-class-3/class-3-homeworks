//console.log("asasaas"); deneme dosya uzantilari dogru yazilmis mi? nerede? -> package.json'da -> start: node src/app.js
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const usersRouters = require("./routes/usersRoutes.js");
const mongoose = require("mongoose");

const PORT = process.env.PORT;

const app = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



// db Congiguration Section
const db = process.env.MongoURI;
mongoose
    .connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('DB baglandi'))
    .catch((err) =>{ console.log(err)})

app.use('/users', usersRouters);






app.listen(PORT, console.log(`server ${PORT}'unda is working`));