const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  v: String,
  h: String,
});

const movieSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  entityType: {
    type: String,
  },
  contentType: {
    type: String,
  },
  assetType: {
    type: String,
  },
  genre: {
    type: [String],
  },
  lang: {
    type: [String],
  },
  premium: {
    type: Boolean,
  },
  year: {
    type: Number,
  },
  images: {
    type: imageSchema,
  },
  defaultImgs: {
    type: imageSchema,
  },
  studioName: {
    type: String,
  },
  parentalRating: {
    type: Number,
  },
  parentalRatingName: {
    type: String,
  },
  crisp: {
    type: String,
  },
});

const Content = mongoose.model("Movies", movieSchema);

module.exports = Content;
