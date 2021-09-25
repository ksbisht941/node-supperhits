const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");
const reviewController = require("./../controllers/reviewController");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/signin").post(authController.signin);

router.route("/forgotPassword").post(authController.forgotPassword);
router.route("/resetPassword/:token").post(authController.resetPassword);

router.route("/updatePassword").patch(authController.protect, authController.updatePassword);

router.route("/").get(userController.getAllUser);

router.route("/updateMe").post(authController.protect, userController.updateMe);
router.route("/deleteMe").delete(authController.protect, userController.deleteMe);

module.exports = router;
