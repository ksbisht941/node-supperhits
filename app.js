const express = require("express");
const morgan = require("morgan");

const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const directorRoutes = require("./routes/directorRoutes");

const app = express();

// MORGAN MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

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

  const err = new Error("Can't find path on this server.");
  (err.status = "fail"), (err.statusCode = 404);

  next(err);
});

// GLOBAL ERROR HANDLER MIDDLEWARE
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    code: err.statusCode.toString(),
    status: err.status,
    message: err.message,
  });
  next();
});

module.exports = app;
