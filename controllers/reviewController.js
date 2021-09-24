const Review = require("../models/reviewModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();

  if (!reviews.length) {
    return next(new AppError("No reviews yet.", 404));
  }

  res.status(200).json({
    code: "0",
    status: "success",
    message: "Fetch data successfully",
    data: {
      length: reviews.length,
      reviews: reviews
    }
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  const doc = await Review.create(req.body);

  res.status(201).json({
    code: "0",
    status: "success",
    message: "Review submitted successfully",
    data: {
      data: doc,
    },
  });
});
