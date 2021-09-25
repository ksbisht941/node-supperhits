const express = require("express");
const movieController = require("./../controllers/movieController");
const authController = require("./../controllers/authController");
// const reviewController = require("./../controllers/reviewController");
const reviewRouter = require("./../routes/reviewRoutes");

const router = express.Router();

// router
//   .route("/:movieId/reviews")
//   .post(
//     authController.protect,
//     authController.restrictTo('user'),
//     reviewController.createReview
//   );

router.use('/:movieId/reviews', reviewRouter)

router.route("/popular-movies").get(movieController.getMostPopularMovies);

router
  .route("/list")
  .get(authController.protect, movieController.getMoviesList);

router
  .route("/")
  .get(movieController.getAllMovies)
  .post(movieController.postMovie);

router
  .route("/:id")
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "operator"),
    movieController.deleteMovie
  );

module.exports = router;
