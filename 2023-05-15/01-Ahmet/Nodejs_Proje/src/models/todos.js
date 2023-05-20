const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema ({
    name: {
    type : String,
    required: true,
    },

    description : {
    type : String,
    required : true, 
    },

    completed : {
        type : Boolean,
        default : false, 
    }
}, {collation: "Todo", timestamps: true});

const todos = mongoose.model("Todo", todoSchema);
module.exports = todos;