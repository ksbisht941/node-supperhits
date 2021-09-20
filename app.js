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
  res.status(404).json({
    code: "404",
    status: "fail",
    message: "Can't find path on this server",
  });
  next();
});

module.exports = app;
