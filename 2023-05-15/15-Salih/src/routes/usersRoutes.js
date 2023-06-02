const express = require("express");
const router = express.Router();
const Users = require("../models/Users.js");
const auth = require("../middleware/auth.js");
const {
  kayit,
  login,
  find,
  findAll,
  update,
  remove,
} = require("../services/usersService.js");

require("dotenv").config();

router.post("/kayit", kayit);

router.post("/login", login);

router.get("/:id", find);

router.get("/", auth, findAll);

router.patch("/update", update);

router.delete("/delete/:id", auth, remove);

module.exports = router;
