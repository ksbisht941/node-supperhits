const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/signin").post(authController.signin);

router.route("/forgotPassword").post(authController.forgotPassword);
router.route("/resetPassword/:token").post(authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.route("/updatePassword").patch(authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.patch("/updateMe", userController.updateMe);
router.delete("/deleteMe", userController.deleteMe);

// Restrict all routes after this middleware
router.use(authController.restrictTo('admin'));

router
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
