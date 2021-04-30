const express = require("express");
const auth = express.Router();

auth.get('/login', function (req, res) {
  res.status(200).json("login");
})

auth.get('/register', function (req, res) {
    res.status(200).json("register");
})

auth.get('/list', function (req, res) {
    res.status(200).json("list");
})

module.exports = auth;