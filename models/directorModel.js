const mongoose = require("mongoose");

const directorSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Director name is a required field."],
  },
  awards: {

  },
  achiements: {

  },
  dateOfBirth: {

  },
  about: {
      type: String,
      trim: true
  }
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;
