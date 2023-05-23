const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")
const {create, find, findAll, update, remove} = require("../services/todosService");


router.get("/:id", find)
router.post("/findall", findAll)
router.post("/create", create)
router.patch("/:id/update", update)
router.delete("/:id/delete", auth, remove)
module.exports = router;