const express = require("express");
const router = express.Router();
const {register, login, find, findAll, update, remove} = require("../services/usersService.js");
const auth = require("../middlewares/auth.js");
const logger = require("../middlewares/logger.js")
//middleware

router.post("/register", register);
router.post ("/login", login);
router.get ("/:id", find);
router.get ("/", auth, logger, findAll);
router.patch ("/", update);
router.delete ("/:id", auth, remove);

module.exports = router;

// rest API
/**
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 *
 */