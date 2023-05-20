const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const usersRoutes = require("./routes/usersRoutes.js");
const ToDoRoutes = require("./routes/ToDoRoutes.js");

const mongoose = require("mongoose");

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

const db= process.env.MongoURI;
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("DB baglandi"))
.catch((err) => console.log(err));

app.use("/users", usersRoutes);
app.use("/todos", ToDoRoutes);


app.listen(PORT, console.log(`Serverin calistigi Port:${PORT}`));