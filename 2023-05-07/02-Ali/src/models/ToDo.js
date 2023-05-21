const hash = require("../utils/hash.js");

const mongoose = require('mongoose')
//const bcrypt = require('bcrypt')
const TodoSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    paketStation: {
        type: String,
        required: true,
    },
    statu: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    createdPak: {
        type: Date,
        default: Date.now(),
    },
});


 TodoSchema.pre("save", function(next){
  if(this.password){
    this.password = hash(this.password);
  }
  next();
});

// TodoSchema.methods.validatePassword = function(data){
//      return bcrypt.compare(data, this.password);
//  };


const ToDo = mongoose.model('ToDo', TodoSchema);

module.exports = ToDo;