const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/signup").get(authController.signup);

router.route("/").get(userController.getAllUser);

module.exports = router;
