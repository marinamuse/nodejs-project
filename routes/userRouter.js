const express = require("express");
const User = require("../models/UserSchema");

const userRouter = express.Router();

userRouter.post("/register", (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  })
    .then((user) => {
      console.log("user registered", user);
    })
    .catch((err) => next(err));

  user.save();
});

module.exports = userRouter;
