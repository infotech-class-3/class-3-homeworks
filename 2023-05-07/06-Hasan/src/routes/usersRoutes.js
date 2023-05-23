const express = require('express');
const router = express.Router();
const {register, login, find, findAll, update, remove
} = require("../services/userService.js");
const auth = require("../middlewares/auth.js")

router.post("/register", register);
router.post('/login', login);
router.get("/:id", find);
router.get("/", auth, findAll); //secure
router.patch("/", update);
router.delete("/:id", auth, remove); //secure

//rest API
/**
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */
module.exports=router;