const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const usersRoutes = require("./routes/usersRoutes.js");
const todosRoutes = require("./routes/todosRoutes.js")
const mongoose = require('mongoose');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = process.env.MongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Db connected"))
  .catch((err) => console.log(err));

app.use("/users", usersRoutes);
app.use("/api", todosRoutes);

app.listen(PORT, console.log(`Server is running at PORT:${PORT}`));