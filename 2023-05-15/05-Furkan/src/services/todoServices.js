var countTodoID = 0;
const Todos = require("../models/Todos.js");

const todoCreate = async (req, res) => {
  try {
    const data = await Todos.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ message: "Todo could not be created." });
  }
};

const todoFind = async (req, res) => {
  try {
    const todoId = req.params.id;
    const data = await Todos.findOne({ _id: todoId }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ message: "Todo could not be found." });
  }
};

const todoFindAll = async (req, res) => {
  try {
    const { userId } = req.body;
    const data = await Todos.find({ userId: userId }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ message: "Todos can not be found..." });
  }
};

const todoUpdate = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = req.body;
    todo.updatedDate = Date.now();
    const data = await Todos.updateOne({ _id: todoId }, { $set: todo }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ message: "Todo can not be updated..." });
  }
};

const todoRemove = async (req, res) => {
  try {
    const todoId = req.params.id;
    const data = await Todos.deleteOne({ _id: todoId }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ message: "Todo cannot be deleted..." });
  }
};

module.exports = { todoCreate, todoUpdate, todoRemove, todoFindAll, todoFind };
