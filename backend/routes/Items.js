const express = require("express");
const items = express.Router();

items.get('/test', function (req, res) {
  res.status(200).json("successful");
})

module.exports = items;