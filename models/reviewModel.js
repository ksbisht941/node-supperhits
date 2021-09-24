const mongoose = require("mongoose");
const Movie = require("./movieModel");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can not be empty!"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    movie: {
      type: mongoose.Schema.ObjectId,
      ref: "Movie",
      required: [true, "Review must belong to a movie."],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a movie"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function () {
  this.populate({
    path: "user",
    select: "name",
  });
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
