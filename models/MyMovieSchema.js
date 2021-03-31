const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myMovieSchema = new Schema({
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const MyMovie = new mongoose.model("MyMovie", myMovieSchema);

module.exports = MyMovie;
