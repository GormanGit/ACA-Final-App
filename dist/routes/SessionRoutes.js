"use strict";

var express = require("express");

var _require = require("../controllers/SessionController"),
    verify = _require.verify;

var router = express.Router();

router.post("/sessions", verify);

module.exports = router;