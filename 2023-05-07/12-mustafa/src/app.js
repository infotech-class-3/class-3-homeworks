const express = require("express");
const bodyParser = require ("body-parser");
require("dotenv").config();
const usersRoutes = require('./routes/usersRoutes.js');
const mongoose = require('mongoose')
const PORT = process.env.PORT;



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// db confing section

const db = process.env.MongoURI;
mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Db connected"))
.catch((err) => console.log(err));



app.use("/users", usersRoutes);


app.listen(PORT, console.log(`server is runing at PORT: ${PORT}`));



