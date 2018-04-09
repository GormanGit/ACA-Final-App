const express = require("express");
const {verify} = require( "../controllers/SessionController");
const router = express.Router();

router.post("/sessions", verify);

module.exports = router;
