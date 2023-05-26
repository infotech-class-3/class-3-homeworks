const jwt = require("jsonwebtoken");

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

module.exports = auth;
