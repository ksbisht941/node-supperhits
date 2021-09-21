const express = require("express");
const movieController = require("./../controllers/movieController");

const router = express.Router();

router.route("/popular-movies").get(movieController.getMostPopularMovies);

router.route("/list").get(movieController.getMoviesList);
  
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
