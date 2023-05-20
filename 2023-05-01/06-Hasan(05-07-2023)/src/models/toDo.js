const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userID: {
        type: String,
        requıred: true,
    },
    todo: {
        type: String,
        requıred: true,
    },
    isCompleted: { type: Boolean,
        requıred: true,},
    
    created: {
        type: Date,
        default: Date.now(),
    },
});


const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;