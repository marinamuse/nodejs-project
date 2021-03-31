const express = require("express");
const Movie = require("../models/MovieSchema");

const moviesRouter = express.Router();

moviesRouter.route("/").get((req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => next(err));
});

module.exports = moviesRouter;
