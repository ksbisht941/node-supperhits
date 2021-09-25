const Review = require("../models/reviewModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllReviews = factory.getAll(Review)
exports.createReview = factory.createOne(Review);
exports.deleteReview = factory.deleteOne(Review);
