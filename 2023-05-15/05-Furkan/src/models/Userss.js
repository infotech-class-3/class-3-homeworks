const mongoose = require("mongoose");
const hash = require("../utils/hash.js");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", function (next) {
  if (this.password) {
    this.password = hash(this.password);
  }

  next();
});

userSchema.methods.validetePassword = function (data) {
  return bcrypt.compare(data, this.password);
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
