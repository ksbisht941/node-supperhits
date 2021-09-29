const express = require("express");
const morgan = require("morgan");
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const directorRoutes = require("./routes/directorRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const cors = require('cors');

const app = express();

// MORGAN MIDDLEWARE
// if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
// }

app.use(cors({
  origin: '*'
}));

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//       'duration',
//       'ratingsQuantity',
//       'ratingsAverage',
//       'maxGroupSize',
//       'difficulty',
//       'price'
//     ]
//   })
// );

// JSON MIDDLEWARE
app.use(express.json());

// SERVE STATIC FILES
app.use(express.static(`${__dirname}/public`));

// ROUTES
app.use("/api/v1/movies/", movieRoutes);
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/directors/", directorRoutes);
app.use("/api/v1/reviews/", reviewRoutes);

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
