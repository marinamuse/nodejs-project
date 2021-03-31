const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);

module.exports = Movie;
