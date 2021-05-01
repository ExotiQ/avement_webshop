const express = require("express");
const auth = express.Router();
const db = require('../config/database');
const User = require('../models/user')

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
        firstName: req.body.name,
        lastName: req.body.lastname,
        email: req.body.email
        });
        res.status(200).json("registered");
    } else {
      res.status(409).json("already registered");
    }
    }
})

auth.get('/list', async function (req, res) {
  res.status(200).json(await User.findAll(), null, 2);
})

module.exports = auth;