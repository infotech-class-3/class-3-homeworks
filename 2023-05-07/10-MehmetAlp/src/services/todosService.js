const Todos = require('../models/Todos.js');


const create = async (req,res) => {

    try {
        const todo = req.body
        const data = await Todos.create(todo);

        //console.log(req.body); test amacli
        res.status(200).json(data);
    } catch (error) {
        res.status(403).json({message: "Todo cant be created"}, error);
    }
}

const find = async (req,res) =>{
    
    try {
        const todoId = req.params.id;// id router'daki id ile ayni
        const data = await Todos.findOne({_id:todoId}).exec();
        return res.status(200).json(data);
        } catch (error) {
        throw res.status(403).json({message:"Todo could not found"}, error);
    }
}

const findAll = async (req,res) =>{
    
    try {
       const {userId} = req.body;// body den gönderdigimiz userId
        const data = await Todos.find({userId:userId}).exec();// soldaki userId--> database deki userId
        return res.status(200).json(data);
        } catch (error) {
        throw res.status(403).json({message:"Todos could not found"}, error);
    }
}

const update = async (req,res) =>{
    
    try {
        const todoId = req.params.id;
        const todo =req.body;
        const data = await Todos.updateOne({_id:todoId},{$set: todo}).exec();
       todo.updatedDate = Date.now();
        return res.status(200).json(data);

        } catch (error) {
        throw res.status(403).json({message:"Todo could not be updated"}, error);
    }
}

const delete = async (req,res) =>{
    
    try {
        const todoId = req.params.id;
        const todo =req.body;
        const data = await Todos.updateOne({_id:todoId},{$set: todo}).exec();
       todo.updatedDate = Date.now();
        return res.status(200).json(data);

        } catch (error) {
        throw res.status(403).json({message:"Todo could not be updated"}, error);
    }
}
module.exports = {
    create,
    find,
    findAll,
    update, 
    delete
}