const Review = require("../models/reviewModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.movieId) filter = { movie: req.params.movieId };

  const reviews = await Review.find(filter);

  if (!reviews.length) {
    return next(new AppError("No reviews yet.", 404));
  }

  res.status(200).json({
    code: "0",
    status: "success",
    message: "Fetch data successfully",
    data: {
      length: reviews.length,
      reviews: reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  if (!req.body.movie) req.body.movie = req.params.movieId;
  if (!req.body.user) req.body.user = req.user.id;

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

exports.deleteReview = factory.deleteOne(Review);
