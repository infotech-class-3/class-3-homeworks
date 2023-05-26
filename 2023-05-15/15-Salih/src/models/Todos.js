const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userid: {type: String, required: true},
    description: {type: String, required: false},
    cratedAt: {type: Date, default: Date.now()},
    completed: {type: Boolean}
});


const Todos = mongoose.model("Todos", todoSchema);
module.exports = Todos;