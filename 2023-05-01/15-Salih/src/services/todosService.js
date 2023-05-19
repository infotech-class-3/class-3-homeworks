const Todos = require('../models/Todos.js');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const add = async (req, res) => {
    const todo = ({userid, description, createdAt, completed} = req.body);

    try{
        const data = await Todos.create(todo);
        return res.json({data: data, message: 'Basarili'});
    }
    catch(error){
        console.log(error);
        return res.status(400).json({message: "Basarisiz"});
    }
}


const find = async (req, res) => {
    const id = req.params.id;

    try{
        const todos = await Todos.find({userid: id}).exec();
        res.status(200).json(todos);
    }
    catch(err){
        console.log(err);
        res.status(404).json({message: 'Kullanici todosu bulunamadi!'});
    }
}

const findAll = async (req, res) => {
    const id = req.params.id;

    try{
        const todos = await Todos.find().exec();
        res.status(200).json(todos);
    }
    catch(err){
        res.status(404).json({message: 'Todolar bulunamadi!'});
    }
}

const update = async (req, res) => {
    const todo = ({userid, description, createdAt, completed} = req.body);

    try{
        const updatedTodo = await Todos
        .updateOne({userid: todo.userid, description: todo.description}, {$set: todo})
        .exec();
        res.status(200).json(updatedTodo);
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: 'Todo guncellenemedi!'});
    }
}

const remove = async (req, res) => {
    // const userid = req.params.userid;
    const id = req.params.id;
    console.log(id);
    try{
        const deletedTodo = await Todos
        .deleteOne({_id: id})
        .exec();
        res.status(200).json(deletedTodo);
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: 'Todo silinemedi!'});
    }
}

module.exports = {add, find, findAll, update, remove};