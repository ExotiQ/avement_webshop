const express = require("express");
const auth = express.Router();
const db = require('../config/database');
const User = require('../models/user');

const jwt = require('jsonwebtoken');
const authentificate = require('../middleware/authentification.js')

const { SECRET } = process.env;

auth.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

// LOGIN
auth.get('/login', async function (req, res) {
  const { username, password } = req.body;
  if(username !== "" && password !== "") {
    const account = await User.findOne({ where: { email: username } });
    if (account) {
      // Generate an access token
      const accessToken = jwt.sign({ username: account.email }, SECRET);
      res.json({
          accessToken
      });
  } else {
      res.send('Username or password incorrect');
  }
  }
})

// REGISTER
auth.post('/register', async function (req, res) {
    if(req !== null) {
      const email = await User.findOne({ where: { email: req.body.email } });
    if (email === null) {
      await User.create({
        firstName: req.body.name,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        });
        res.status(200).json("registered");
    } else {
      res.status(409).json("already registered");
    }
    }
})

// LIST ALL USER
auth.get('/list', authentificate, async function (req, res) {
  res.status(200).json(await User.findAll(), null, 2);
})

auth.get('/test', authentificate, async function (req, res) {
  const account = await User.findOne({ where: { email: req.user.username } });
  
  res.status(200).json();
})

module.exports = auth;