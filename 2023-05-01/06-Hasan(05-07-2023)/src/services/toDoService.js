const toDO = require('../models/toDo.js');

const register = async(req, res)=>{
    const user = ({userID, todo, isCompleted}= req.body);
    try {
        const data = await toDO.create(user);
        res.status(200).json(data);
    } catch (error) {
       res.status(400).json({message: "todo couldn't created"})
    }
};


const find = async(req, res)=>{
    const id = req.params.id;
    try {
        const data = await toDO.findOne({_id:id}).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message:"todo cannot be found."})
    }
};

const findAll = async(req, res)=>{
    
    try {
        const data = await toDO.find().exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message:"todos cannot be found."})
    }
};

const update = async(req, res)=>{
    const user = ({userID, todo, isCompleted}= req.body);
    try {
        const data = await toDO.updateOne({_id: user.id},{$set: user}).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message:"todo cannot be updated."})
    }
};

const remove = async(req, res)=>{
    const id = req.params.id;
    try {
        const data = await toDO.deleteOne({_id: id}).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message:"todo cannot be deleted."})
    }
};

module.exports ={
    register,    
    find,
    findAll,
    update,
    remove
};