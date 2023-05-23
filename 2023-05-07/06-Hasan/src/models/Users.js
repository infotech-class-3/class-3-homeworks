const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const hash = require("../utils/hash.js");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requıred: true,
    },
    password: { type: String,
        requıred: true,},
    name: { type: String,
        requıred: true,},
    surname: { type: String,
        requıred: true,},
    created: {
        type: Date,
        default: Date.now(),
    },
});


//Password hashing
userSchema.pre("save", function(next){
if (this.password){
    this.password=hash(this.password);
}
next();
});


//Password validate
userSchema.methods.validatePassword = function(data){
    return bcrypt.compare(data, this.password);
};


const Users = mongoose.model('Users', userSchema)

module.exports = Users;