const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const {register, login, find, findAll, update, remove} = require("../services/ToDoService.js");

const auth = require("../middlewares/auth.js");

router.post("/register", register);
router.post("/login", login);
router.get("/:id", find);
router.get("/", auth, findAll);
router.patch("/", auth, update);
router.delete("/:id",auth, remove);

module.exports = router;