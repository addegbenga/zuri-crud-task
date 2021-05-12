const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

router.get("/", getUser);
router.post("/create", createUser);
router.post("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);

module.exports = router;
