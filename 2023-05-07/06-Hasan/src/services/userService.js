const Users = require('../models/Users.js');
const jwt = require("jsonwebtoken");
const register = async(req, res)=>{
    const user = ({username, password, name, surname}= req.body);
    try {
        const data = await Users.create(user);
        res.status(200).json(data);
    } catch (error) {
       res.status(400).json({message: "user couldn't created"})
    }
};

const login = async(req, res)=>{
    const {username, password}= req.body;
    const data = await Users.findOne({username}).exec();
if (!data){
    return res.status(404).json({message: "User cannot be found!"})
}

const isValidated = await data.validatePassword(password)
if (!isValidated){
    return res.status(404).json({message: "The password is incorrect!"});
}

const user = {
    id: data.id,
    username: data.username,
    name: data.name,
    surname: data.surname,
}
const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
res.status(200).json({...user, accessToken});
};

const find = async(req, res)=>{
    const id = req.params.id;
    try {
        const data = await Users.findOne({_id:id}).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message:"user cannot be found."})
    }
};

const findAll = async(req, res)=>{
    
    try {
        const data = await Users.find().exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message:"user cannot be found."})
    }
};

const update = async(req, res)=>{
    const user = ({id, username, name, surname}= req.body);
    try {
        const data = await Users.updateOne({_id: user.id},{$set: user}).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message:"user cannot be updated."})
    }
};

const remove = async(req, res)=>{
    const id = req.params.id;
    try {
        const data = await Users.deleteOne({_id: id}).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message:"user cannot be deleted."})
    }
};

module.exports ={
    register,
    login,
    find,
    findAll,
    update,
    remove
};