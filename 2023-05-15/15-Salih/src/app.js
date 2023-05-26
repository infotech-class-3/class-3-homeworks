const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/usersRoutes.js");
const todosRoutes = require("./routes/todosRoutes.js");
const mongoose = require('mongoose');

require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
const db = process.env.MongoURI;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, family: 4})
.then(console.log("Database connected"))
.catch((err) => {console.error(err)});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', usersRoutes);
app.use('/todos', todosRoutes);

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});

