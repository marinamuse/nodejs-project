const express = require("express");
const MyMovie = require("../models/MyMovieSchema");

const myMoviesRouter = express.Router();

myMoviesRouter.route("/").post((req, res, next) => {
  const movie = new MyMovie({
    title: req.body.title,
    rank: req.body.rank,
    id: req.body.id,
  });

  movie.save();
});

myMoviesRouter.route("/").get((req, res, next) => {
  MyMovie.find()
    .then((movies) => res.json(movies))
    .catch((err) => next(err));
});

myMoviesRouter.route("/delete/:id", (req, res) => {
  MyMovie.findByIdAndDelete({ _id: id }, (req, res) => {
    if (!err) {
      console.log("movie deleted");
    } else {
      console.log(err);
    }
  });
});

module.exports = myMoviesRouter;
