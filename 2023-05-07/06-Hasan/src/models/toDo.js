const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        requıred: true,
    },
    todo: {
        type: String,
        requıred: true,
    },
    isCompleted: { 
        type: Boolean,
        default: false,
    },
    
    created: {
        type: Date,
        default: Date.now(),
    },
    updatedDate:{
        type: Date,
        default: Date.now(),
    }
});


const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;