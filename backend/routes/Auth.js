const express = require("express");
const auth = express.Router();
const db = require('../config/database');
const User = require('../models/e_user')

auth.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

auth.get('/login', async function (req, res) {
  if(req !== null) {
    const email = await User.findOne({ where: { email: req.body.email } });
  if (email === null) {
    res.status(409).json("WRONG PASSWORD OR USER");
  } else {
    res.status(200).json("login");
  }
  }
  res.status(200).json("login");
})

auth.post('/register', async function (req, res) {
    if(req !== null) {
      const email = await User.findOne({ where: { email: req.body.email } });
    if (email === null) {
      await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
        });
        res.status(200).json("registered");
    } else {
      res.status(409).json("already registered");
    }
    }
})

module.exports = auth;