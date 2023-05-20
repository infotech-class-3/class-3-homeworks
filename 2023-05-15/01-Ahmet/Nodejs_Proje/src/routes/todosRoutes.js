const express = require("express");
const router = express.Router();
const {todoAdd, todoUpdate, todoGetAll, todoDelete} = require("../services/todosService");

router.post("/todo", todoAdd)
router.put("/todo/:id", todoUpdate)
router.get("/todo", todoGetAll)
router.delete("/todo/:id", todoDelete)
module.exports = router;