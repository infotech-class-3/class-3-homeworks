const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const hash =require("../utils/hash.js");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require:true,
    },
    password: {
        type: String,
        require:true,
    },
    name: {
        type: String,
        require:true,
    },
    surname: {
        type: String,
        require:true,
    },
   
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    
});



//password hashing
userSchema.pre("save", function(next){
if (this.password) {
    this.password = hash(this.password);
}
next();
});

//passworl validate

userSchema.methods.validatePassword = function(data){
    return bcrypt.compare(data, this.password);
};



const Users = mongoose.model('Users', userSchema);

module.exports = Users;


