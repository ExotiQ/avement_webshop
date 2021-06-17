const express = require("express");
const auth = express.Router();
const db = require('../config/database');
const User = require('../models/e_user')
const Image = require('../models/e_image')

const jwt = require('jsonwebtoken');
const authentificate = require('../middleware/authentification.js')

const { SECRET } = process.env;

auth.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

// ADD IMAGE
auth.post('/all', authentificate, async function (req, res) {
    const { name } = req.body;

});

module.exports = admin;