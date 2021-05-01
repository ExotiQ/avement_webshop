const express = require("express");
const items = express.Router();

require('dotenv').config(); 
const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;

items.get('/test', function (req, res) {
  res.status(200).json(process.env.POSTGRES_HOST);
})

module.exports = items;