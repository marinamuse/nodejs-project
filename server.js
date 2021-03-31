const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const moviesRouter = require("./routes/moviesRouter");
const myMoviesRouter = require("./routes/myMoviesRouter");
const userRouter = require("./routes/userRouter");

mongoose.connect(
  "mongodb+srv://marina-admin:marina90@cluster0.heuyu.mongodb.net/moviesDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRouter);
app.use("/mymovies", myMoviesRouter);
app.use("/user", userRouter);

// app.get("/", (req, res) => {
//   const list = [];
//   movies.map((movie) => {
//     list.push(movie);
//     // console.log();
//   });
//   res.send(list);
// });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
