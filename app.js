const express = require("express");

const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');
const directorRoutes = require('./routes/directorRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/movies/', movieRoutes);
app.use('/api/v1/users/', userRoutes);
app.use('/api/v1/directors/', directorRoutes);

module.exports = app;
