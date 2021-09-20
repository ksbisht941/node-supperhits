const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A movie must have a title."],
  },
  slug: String,
  rated: {
    type: String,
    required: [true, "A movie must have a rated."],
    enum: {
      values: [
        "G",
        "PG",
        "PG-13",
        "R",
        "NC-17",
        "TV-Y",
        "TV-Y7",
        "TV-Y7 FV",
        "TV-G",
        "TV-PG",
        "TV-14",
        "TV-MA",
        "Approved",
      ],
      message: "Invalid movie rated.",
    },
  },
  released: {
    type: String,
    required: [true, "A movie must have a released year."],
  },
  runtime: {
    type: String,
    required: [true, "A movie must have a runtime."],
  },
  genre: {
    type: [String],
    required: [true, "A movie must have a runtime."],
    enum: {
      values: [
        "Action",
        "Adventure",
        "Comedy",
        "Crime",
        "Mystery",
        "Fantasy",
        "Historical",
        "Horror",
        "Romance",
        "Satire",
        "Biography",
        "Drama",
      ],
      message: ["Invalid movie genre"],
    },
  },
  popularity: {
    type: Number,
    default: 10,
    min: [1, "Popularity must be above 1"],
    max: [100, "Popularity must be below 100"],
    set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
  },
  voters: {
    type: Number,
    default: 5,
  },
  director: {
    type: [String],
    required: [true, "A movie must have a runtime."],
  },
  plot: {
    type: String,
    required: [true, "A movie must have a runtime."],
  },
  actors: {
    type: [String],
    required: [true, "A movie must have a runtime."],
  },
  writers: {
    type: [String],
    required: [true, "A movie must have a runtime."],
  },
  sequal: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Movie'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
