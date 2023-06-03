const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true   },

    todo : {
        type : String,
        required : true
    },

    completed : {
        type : Boolean,
        default : false
    },

    createDate : {
        type : Date,
        default : Date.now()
    },

    updatedDate : {
        type : Date,
        default : Date.now()
    }
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = Todo;