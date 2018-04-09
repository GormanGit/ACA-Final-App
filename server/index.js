// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const sessionRoutes = require("./routes/SessionRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
import {mongoSecret} from "../client/src/secrets";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(mongoSecret);


const app = express();

app.use(bodyParser.json());
app.use(userRoutes);
app.use(sessionRoutes);
app.use(authenticationRoutes);

app.use(function authChecker(req, res, next) {
  // implement some logic to determine if you should allow this request
  // pull the token from the request and see if its valid
  if (true) {
    next();
  } else {
    res.send("Secured");
  }
});

app.get("/publicinformation", function (req, res) {
  res.send("Anyone can see this");
});



app.get("/canigetthis", function (req, res) {
  res.send("You got the data. You are authenticated");
});
app.get("/secret", function (req, res) {
  res.send(`The current user is ${req.user.username}`);
});
app.get("/users/SecuredClass1", function(req, res) {
  res.send("the current user is ${req.user.username}");
})
app.get("/users/SecuredClass2", function(req, res) {
  res.send("the current user is ${req.user.username}");
})
app.get("/users/SecuredClass3", function(req, res) {
  res.send("the current user is ${req.user.username}");
})
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
