const express = require("express");
const auth = express.Router();
const db = require('../config/database');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const authenticateJWT = require('../middleware/authentification.js')

const { SECRET } = process.env;

auth.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

auth.get('/login', async function (req, res) {
  const { username, password } = req.body;
  if(username !== "" && password !== "") {
    const account = await User.findOne({ where: { email: username } });
    if (account) {
      // Generate an access token
      const accessToken = jwt.sign({ username: account.email,  role: account.admin }, SECRET);
      res.json({
          accessToken
      });
  } else {
      res.send('Username or password incorrect');
  }
  }
})

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

auth.get('/list', authenticateJWT, async function (req, res) {
  res.status(200).json(await User.findAll(), null, 2);
})

module.exports = auth;