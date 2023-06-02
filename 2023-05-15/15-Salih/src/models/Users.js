const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const hash = require("../utils/hash.js");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: false, default: "Anonim" },
  password: { type: String, required: true },
  surname: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  if (this.password) {
    this.password = hash(this.password);
  }

  next();
});

userSchema.methods.validatePassword = (data, password) => {
  console.log(data);
  console.log(password);
  return bcrypt.compare(data, password);
};

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
