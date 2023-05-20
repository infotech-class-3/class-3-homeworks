const todos = require("../models/todos.js");

const todoAdd = async (req, res)=> {
   
  try {
    const todoAdd = new todos (req.body)
    await todoAdd.save()
    return res.json(todoAdd)
   
  } catch (error) {
    res.status(400).json({ message: "Todo could not created.." });
  }
  };

  const todoUpdate = async (req, res) => {
   const {id} = req.params
   try {
    const update = await todos.findByIdAndUpdate (id, req.body)

    if (update) {
      return res.status(200).json({message : "Todo could update" })
    }
    else return res.status(500).json({ message: "Todo could not update.." })
    
   } catch (error) {
    res.status(500).json({ message: "Todo could not update.." });
   }
  };

  const todoGetAll = async(req, res) => {
    console.log("11")
    try {
      const todoGetAll = await todos.find({})
      return res.status(200).json({
        success: true,
        data : todoGetAll})
      
    } 
    catch (error) {
      return res.status(400).json({ message: "Todo could not finden.." });
    }
  }

  const todoDelete = async(req, res) => {
  const {id} = req.params
  try {
    const todoDelete = await todos.findByIdAndRemove (id)
    if (todoDelete) {
      return res.status(200).json({message : "Todo could delete" })
    }
    else return res.status(500).json({ message: "Todo could not delete.." })

  } catch (error) {
      return res.status(400).json({ message: "Todo could not delete.." });
  }

  }


module.exports = {
  todoAdd,
  todoUpdate,
  todoGetAll, 
  todoDelete
};
 