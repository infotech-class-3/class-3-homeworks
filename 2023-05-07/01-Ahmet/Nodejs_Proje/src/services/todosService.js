const Todos = require("../models/Todos.js");

const create = async (req, res)=> {
   
  try {
    const data = await Todos.create(req.body)
    return res.json(data)
   
  } catch (error) {
    res.status(400).json({ message: "Todo could not created.." });
  }
  };

  const update = async (req, res) => {

    try {
      const todoId = req.params.id;
      const todo = req.body;
      todo.updatedDate = Date.now();
      const data = await Todos.updateOne({_id : todoId}, {$set : todo}).exec(); 
      return res.json(data)

   } catch (error) {
    res.status(404).json({ message: "Todo could not update.." });
   }
  };

  const find = async (req, res)=> {
      try {
      const todoId = req.params.id;
      const data = await Todos.findOne({_id : todoId}).exec();
      return res.json(data);
      } 
      catch (error) {
        return res.status(400).json({ message: "Todo could not finden.." });
      }
  }
  

  const findAll = async(req, res) => {
    try {
      const {userId} = req.body
      const data = await Todos.find({userId: userId}).exec();
      return res.json(data);  
    } 
    catch (error) {
      return res.status(400).json({ message: "Todo could not finden.." });
    }
  }

  const remove = async (req, res) => {

    try {
      const todoId = req.params.id
      const data = await Todos.deleteOne({_id : todoId}).exec();
      
      return res.json(data)
 
    } catch (error) {
     return res.status(500).json({ message: "Todo could not delete.." });
    }
   };

  module.exports = {
    create,
    update,
    find, 
    findAll, 
    remove
  };
 