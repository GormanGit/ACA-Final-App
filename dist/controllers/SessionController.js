"use strict";

var User = require("../models/UserModel");
var tokenForUser = require("../services/token").tokenForUser;
var compare = require("../services/hash").compare;

//change create to verify
function verify(req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  console.log("Looking for a user with the username", username);

  User.findOne({ username: username }).exec().then(function (user) {
    // If there is no user found call done with a `null` argument, signifying no error
    // and `false` signifying that the signin failed
    if (!user) {
      console.log("No user found with this username", username);
      return res.send("No user found with this username");
    }
    compare(password, user.password, function (err, isMatch) {
      // If there is an error call done with our error
      if (err) {
        return res.send("Error occured");
      }
      // If the passwords do not match call done with a `null` argument, signifying no error
      // and `false` signifying that the signin failed
      if (!isMatch) {
        return res.send("Invalid password");
      }
      console.log("The username was found and the passwords matched", username);
      // If we have no errors and the passwords match
      // call done with a `null` argument, signifying no error
      // and with the now signed in user
      var token = tokenForUser(user);
      res.json({ token: token });
    });
  }).catch(function () {
    return res.send("Error occured");
  });
}

exports.verify = verify;