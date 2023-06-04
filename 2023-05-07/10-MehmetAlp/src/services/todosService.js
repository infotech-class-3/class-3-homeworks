const Todos = require('../models/Todos.js');


const create = async (req,res) => {

    try {
        const data = await Todos.create(req.body);

        console.log(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(403).json({message: "Todo cant be created"});
    }
}



module.exports = {create}