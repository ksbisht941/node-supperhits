const crypto = require('crypto');
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
  role: {
    type: String,
    required: [true, 'User must have a role'],
    enum: ['user', 'admin', 'operator'],
    default: 'user'
  },
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
  },
  passwordChangedAt: {
    type: Date,
    select: false
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
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

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
