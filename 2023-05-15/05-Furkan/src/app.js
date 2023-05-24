const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const usersRouters = require("./routes/usersRoutes.js");
const todosRouters = require("./routes/todosRouter.js");
const mongoose = require("mongoose");

var countTodoID;
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = process.env.MongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Db connected"))
  .catch((err) => console.log(err));

app.use("/users", usersRouters);
app.use("/todos", todosRouters);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});


