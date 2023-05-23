const express = require('express');
const bodyParser = require('body-parser')
require("dotenv").config();
const usersRoutes = require('./routes/usersRoutes.js');
const todoRoutes = require('./routes/toDoRoutes.js');
const mongoose = require('mongoose');


const PORT = process.env.PORT;

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

// db config section
const db = process.env.MongoURI;
mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("Db connected"))
.catch((err)=>console.log(err));


app.use("/users", usersRoutes)
app.use("/todos", todoRoutes)

app.listen(PORT, console.log(`server ist running at PORT:${PORT}`)); 