const { response } = require("express");
const Users = require("../models/Userss.js");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = ({ username, password, name, surname } = req.body);
  try {
    const data = await Users.create(user);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "User could not created..." });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  // 1234 === $2b$10$Cll.fHgT99gx/icnVOAH7umyWEJwtPjCPahfX2eJrS4rLGSH/0ApK
  const data = await Users.findOne({ username }).exec();
  console.log(data);

  if (!data) {
    return res.status(404).json({ message: "User can not be found..." });
  }

  const isValidete = await data.validetePassword(password);
  if (!isValidete) {
    return res.status(403).json({ message: "The password is incorrect... " });
  }

  const loggedInUSer = {
    id: data._id,
    username: data.username,
    name: data.name,
    surname: data.surname,
  };

  const accessToken = jwt.sign(loggedInUSer, process.env.ACCESS_TOKEN);

  res.status(200).json({ ...loggedInUSer, token: accessToken });
};

const find = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Users.findOne({ _id: id }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "User can not be found..." });
  }
};

const findAll = async (req, res) => {
  try {
    const data = await Users.find().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Users can not be found..." });
  }
};

const update = async (req, res) => {
  const user = ({ id, username, name, surname } = req.body);

  try {
    const data = await Users.updateOne({ _id: user.id }, { $set: user }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "User can not be updated..." });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Users.deleteOne({ _id: id }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "User can not be deleted..." });
  }
};

const checkUserByToken = async (req, res) => {
  const headerAuth = req.headers["authorization"];
  if (!headerAuth) {
    return res.status(403).json({ message: "No token data..." });
  }
  const token = headerAuth.split(" ")[1];

  const user = jwt.decode(token);

  res.json({ ...user, token });
};

module.exports = {
  register,
  login,
  find,
  findAll,
  update,
  remove,
  checkUserByToken,
};
