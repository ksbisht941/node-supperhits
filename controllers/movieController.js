const Movie = require("./../models/movieModel");
const APIFeatures = require("../utils/apiFeatures");

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "released";
  next();
};

exports.getAllMovies = async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Movie.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const movies = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      code: "0",
      status: "success",
      message: "Fetch Movies List Successfully",
      data: {
        list: movies,
        length: movies.length,
      },
    });
  } catch (err) {
    res.status(404).json({
      code: "1",
      status: "fail",
      message: "Something went wrong. Please try again somtimes later.",
      error: err,
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.find({ _id: req.params.id });

    if (!movie.length) {
      return res.status(404).json({
        code: "404",
        status: "fail",
        message: "Movie not found",
      });
    }

    res.status(200).json({
      code: "0",
      status: "Successful",
      message: "Fetch Movie Successfully",
      data: movie,
    });
  } catch (err) {
    res.status(404).json({
      code: "1",
      status: "fail",
      message: "Something went wrong. Please try again somtimes later.",
      error: err,
    });
  }
};

exports.postMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    console.log(req.body);
    res.status(201).json({
      code: "0",
      status: "Successful",
      message: "Create Movie Successfully",
      data: movie,
    });
  } catch (err) {
    res.status(404).json({
      code: "1",
      status: "fail",
      message: "Something went wrong. Please try again somtimes later.",
      error: err,
    });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      code: "0",
      status: "success",
      message: "Update movie detail successfully",
      data: movie,
    });
  } catch (err) {
    res.status(404).json({
      code: "1",
      status: "fail",
      message: "Something went wrong. Please try again somtimes later.",
      error: err,
    });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    res.status(204).json({
      code: "0",
      status: "success",
      message: "Movie delete successfully",
    });
  } catch (err) {
    res.status(404).json({
      code: "1",
      status: "fail",
      message: "Something went wrong. Please try again somtimes later.",
      error: err,
    });
  }
};

exports.getMostPopularMovies = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      code: "1",
      status: "fail",
      message: "Something went wrong. Please try again somtimes later.",
      error: err,
    });
  }
};

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
