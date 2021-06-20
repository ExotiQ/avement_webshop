const express = require("express");
const auth = express.Router();
const db = require('../config/database');
const User = require('../models/e_user')


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
      if (await account.validPassword(password)) {
          // Generate an access token
          const accessToken = jwt.sign({ id: account.id }, SECRET);
          res.status(200).json({accessToken});
        } else {
          res.status(200).json("Username or password incorrect");
        }
      };
  } else {
      res.send('Username or password incorrect');
  }
})

// REGISTER
auth.post('/register', async function (req, res) {
    const { firstName, lastName, email, password, admin  } = req.body;
    if(req !== null) {
      const exists = await User.findOne({ where: { email: email } });
      console.log(exists)
    if (exists === null) {
        await User.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }).then(() => {
          res.status(200).json("User registered");
        }).catch(function (err) {
          res.status(400).json(err);
        });
      
    } else {
      res.status(409).json("Username already registered");
    }
    }
})

// LIST ALL USER
auth.get('/list', authentificate, async function (req, res) {
  res.status(200).json(await User.findAll(), null, 2);
})

// EDIT USER
auth.post('/edit/:id', authentificate, async function (req, res) {
  const id = req.params.id;
  const { firstName, lastName, email, password, admin  } = req.body;
  const account = await User.findOne({ where: { id: req.user.id } });

  console.log(id);
  if(account.isAdmin === true) {
    User.update( { 
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      isAdmin: admin
      }, { 
        where: { id: id } 
      }).then(function(affectedRows) {
      res.status(200).json("updated " + affectedRows);
      }).catch(function (err) {
        res.status(400).json(err);
      });
  } else res.status(401).json("UNAUTHORIZED");
})

module.exports = auth;