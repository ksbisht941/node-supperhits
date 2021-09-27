const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");

const Movie = require("./../../models/movieModel");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successfully"));

const movies = JSON.parse(
    fs.readFileSync(`${__dirname}/movie.json`, "utf-8")
);
console.log(movies);
const importData = async (req, res) => {
  try {
      await Movie.create(movies);
      console.log("Data successfully loaded!");
      process.exit();
    } catch (err) {
      console.log(err);
    }
};

const deleteData = async (req, res) => {
    try {
        await Movie.deleteMany();
        console.log("Data successfully deleted!");
        process.exit();
      } catch (err) {
        console.log(err);
      }
};

if (process.argv[2] === "--import") {
    importData();
  } else if (process.argv[2] === "--delete") {
    deleteData();
  }
  
