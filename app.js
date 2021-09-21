const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const directorRoutes = require("./routes/directorRoutes");


const app = express();

// MORGAN MIDDLEWARE
// if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
// }

// JSON MIDDLEWARE
app.use(express.json());

// SERVE STATIC FILES
app.use(express.static(`${__dirname}/public`));

// ROUTES
app.use("/api/v1/movies/", movieRoutes);
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/directors/", directorRoutes);

app.get("*", (req, res, next) => {
  // res.status(404).json({
  //   code: "404",
  //   status: "fail",
  //   message: "Can't find path on this server",
  // });

  const err = new AppError("Can't find path on this server.", 404);
  next(err);
});

// GLOBAL ERROR HANDLER MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
