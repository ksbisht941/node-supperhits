const Movie = require("./../models/movieModel");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

// exports.aliasTopTours = (req, res, next) => {
//   req.query.limit = "5";
//   req.query.sort = "released";
//   next();
// };

// exports.getAllMovies = catchAsync(async (req, res, next) => {
//     // EXECUTE QUERY
//     const features = new APIFeatures(Movie.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();

//     const movies = await features.query;

//     // SEND RESPONSE
//     res.status(200).json({
//       code: "0",
//       status: "success",
//       message: "Fetch Movies List Successfully",
//       data: {
//         list: movies,
//         length: movies.length,
//       },
//     });
// });

exports.getAllMovies = factory.getAll(Movie);
exports.getMoviesList = factory.getSpecificFields(Movie, 'title');
exports.getMovie = factory.getOne(Movie, { path: 'reviews' });
exports.postMovie = factory.createOne(Movie);
exports.updateMovie = factory.updateOne(Movie);
exports.deleteMovie = factory.deleteOne(Movie);

exports.getMostPopularMovies = catchAsync(async (req, res, next) => {
  const stats = await Movie.aggregate([
    {
      $match: {
        popularity: { $gte: 10 },
      },
    },
    {
      $group: {
        _id: "$genre",
        numMovies: {
          $sum: 1,
        },
        avgPopularity: {
          $avg: "$popularity",
        },
        avgVoters: {
          $avg: "$voters",
        },
      },
    },
    {
      $sort: { avgPopularity: 1 },
    },
  ]);

  res.status(200).json({
    data: stats,
  });
});

// exports.getMostPopularMovies = async (req, res) => {
//   try {
//     const movies = await Movie.aggregate([
//       $match: {

//       },
//       $group: {

//       },
//       $sort: {

//       },

//     ]);

//     res.status(200).json({
//       code: "0",
//       status: "success",
//       message: "Fetch data successfully",
//       data: movies,
//     });
//   } catch (err) {
//     res.status(404).json({
//       code: "1",
//       status: "fail",
//       message: "Something went wrong. Please try again somtimes later.",
//       error: err,
//     });
//   }
// };
