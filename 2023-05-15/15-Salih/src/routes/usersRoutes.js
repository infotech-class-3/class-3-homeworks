const express = require("express");
const router = express.Router();
const Users = require("../models/Users.js");
<<<<<<< HEAD
const auth = require("../middleware/auth.js");
=======
>>>>>>> main
const {
  kayit,
  login,
  find,
  findAll,
  update,
  remove,
} = require("../services/usersService.js");
<<<<<<< HEAD

=======
const jwt = require("jsonwebtoken");
>>>>>>> main
require("dotenv").config();

router.post("/kayit", kayit);

<<<<<<< HEAD
router.post("/login", login);

router.get("/:id", find);

router.get("/", auth, findAll);

router.patch("/update", update);

router.delete("/delete/:id", auth, remove);

=======
const auth = (req, res, next) => {
  const headerAuth = req.headers["authorization"];
  if (!headerAuth) {
    return res.status(403).json({ message: "No token" });
  }

  const token = headerAuth.split(" ")[1];

  jwt.verify(token, process.env.Token, (err, data) => {
    if (err) return res.status(403).json({ message: "Yetkisiz erisim!" });

    next();
  });
};

router.post("/kayit", kayit);

router.post("/login", login);

router.get("/:id", find);

router.get("/", auth, findAll);

router.patch("/update", update);

router.delete("/delete/:id", auth, remove);

>>>>>>> main
module.exports = router;
