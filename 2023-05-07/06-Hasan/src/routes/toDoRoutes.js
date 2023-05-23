const express = require('express');
const router = express.Router();
const {register, find, findAll, update, remove
} = require("../services/toDoService.js");


router.post("/register", register);
router.get("/:id", find);
router.get("/", findAll); 
router.patch("/", update);
router.delete("/:id", remove); 


module.exports=router;