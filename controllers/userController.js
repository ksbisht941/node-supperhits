const User = require("./../models/userModal");
const catchAysnc = require("./../utils/catchAsync");

exports.getAllUser = catchAysnc(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    code: "0",
    status: "success",
    message: "Fetch User List Successfully",
    data: users
  });
});

