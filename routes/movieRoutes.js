const express = require("express");
const movieController = require("./../controllers/movieController");

const router = express.Router();

router.route("/movies-stats").get(movieController.getMovieStats);

router
  .route("/")
  .get(movieController.getAllMovies)
  .post(movieController.postMovie);

router
  .route("/:id")
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);


module.exports = router;
