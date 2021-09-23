const jwt = require("jsonwebtoken");

const User = require("./../models/userModal");
const catchAysnc = require("./../utils/catchAsync");

exports.signup = catchAysnc(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(201).json({
    code: "0",
    status: 'success',
    message: 'Succussfully create an user',
    token,
    data: {
      user: newUser,
    },
  });
});
