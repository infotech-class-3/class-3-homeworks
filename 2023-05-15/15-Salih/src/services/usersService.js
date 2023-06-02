const Users = require("../models/Users.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const kayit = async (req, res) => {
  const user = ({ username, name, password, surname } = req.body);

  try {
    const data = await Users.create(user);
    return res.json({ data: data, message: "Basarili" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Basarisiz" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ username }).exec();

  if (!user) {
    return res.status(404).json({ message: "Kullanici adi bulunmamaktadir!" });
  }

  console.log(user);
  const sifreKontrolu = await user.validatePassword(password, user.password);

  if (!sifreKontrolu) {
    return res.status(403).json({ message: "Sifreniz yanlis!" });
  }
  const data = {
    _id: user.id,
    username: user.username,
    name: user.name,
    surname: user.surname,
    password: user.password,
    message: "hello world",
  };

  const token = jwt.sign(data, process.env.Token, { expiresIn: "6h" });

  res.status(200).json({ data, token });
};

const find = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Users.findOne({ _id: id }).exec();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: "Kullanici bulunamadi!" });
  }
};

const findAll = async (req, res) => {
  const id = req.params.id;

  try {
    const users = await Users.find().exec();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: "Kullanicilar bulunamadi!" });
  }
};

const update = async (req, res) => {
  const user = ({ id, name, surname, password } = req.body);

  try {
    const updatedUser = await Users.updateOne(
      { _id: user.id },
      { $set: user }
    ).exec();
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Kullanici guncellenemedi!" });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const deletedUser = await Users.deleteOne({ _id: id }).exec();
    res.status(200).json(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Kullanici silinemedi!" });
  }
};

module.exports = { kayit, login, find, findAll, update, remove };
