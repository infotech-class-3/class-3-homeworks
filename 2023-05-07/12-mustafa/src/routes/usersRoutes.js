const express = require('express');
const router = express.Router();
const user = require("../models/Users.js");

const { register, login, find, findAll, update, remove } = require("../services/userService.js");

const auth = require("../middlewera/auth.js");
const logger = require("../middlewera/logger.js");

router.post("/register", register);
router.post ("/login", login);
router.get ("/:id", find);
router.get ("/", auth,logger,findAll); // secure
router.patch ("/", update);
router.delete ("/:id",auth, remove);



//rest API
/*
* CRUD um açılımı aşagıdakiler
*Create
*Read
*Update
*delete

*/

module.exports=router;