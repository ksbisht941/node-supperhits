const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name."],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please provide your email"],
    validator: [validator.isEmail, "Please enter vaid email."],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not same",
    },
  }
});

userSchema.pre("save", async function (next) {

   // Only run this function if password was actually modified
  if (!this.isModified("password")) {
    return next();
  }

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

   // Delete passwordConfirm field
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
