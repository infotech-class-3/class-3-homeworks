const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String, required: false, default: "Anonim"},
    password: {type: String, required: true},
    surname: {type: String, required: true}
});

const hash = (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err,hash) => {
        if(err) throw err;
        pass = hash
    });
    
    
}

userSchema.pre('save', function (next){
    if(this.password){
        this.password = hash(this.password);
    }

    next();
});

userSchema.methods.validatePassword = (data) => {
    return bcrypt.compare(data, this.password);
}

const Users = mongoose.model("Users", userSchema);
module.exports = Users;