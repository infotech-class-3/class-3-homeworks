const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const {register, login, find, findAll, update, remove} = require("../services/userService.js");

const auth = require("../middlewares/auth.js");
const logger = require("../middlewares/logger.js");

router.post("/register", register);
router.post("/login", login);
router.get("/:id", find);
router.get("/", auth, findAll);
router.patch("/", auth, update);
router.delete("/:id",auth, remove);







module.exports = router;