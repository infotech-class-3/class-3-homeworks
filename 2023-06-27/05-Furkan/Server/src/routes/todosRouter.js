const express = require("express");
const todoRouter = express.Router();
const auth = require("../middlewares/auht.js");

const {
  todoCreate,
  todoUpdate,
  todoRemove,
  todoFindAll,
  todoFind,
} = require("../services/todoServices.js");

todoRouter.get("/:id", todoFind);
todoRouter.post("/findAll", todoFindAll);
todoRouter.post("/todoCreate", todoCreate);
todoRouter.patch("/:id/todoUpdate", todoUpdate);
todoRouter.delete("/:id/todoRemove",auth, todoRemove);

module.exports = todoRouter;
