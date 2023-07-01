const express = require("express");
const router = express.Router();

const {
  register,
  login,
  find,
  findAll,
  update,
  remove,
  checkUserByToken,
} = require("../services/usersService.js");

const auth = require("../middlewares/auht.js");
const logger = require("../middlewares/logger.js");

// router.get("/", (req, res) => {
//   res.send("get istegi geldi");
// });

router.post("/register", register);
router.post("/login", login);
router.get("/:id", find);
router.get("/", auth, logger, logger, logger, findAll);
router.patch("/", update);
router.delete("/:id", auth, remove);
router.get("/check/me", checkUserByToken);

// rest API
/**
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

module.exports = router;
