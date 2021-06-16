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

// SHOW ALL IMAGES
auth.post('/all', authentificate, async function (req, res) {
    const { name } = req.body;
    const images = await Image.findAll();

    if(images.length() > 0) res.status(200).json(images);
    else res.status(200).json("no orders");

});

// RETURN SPECIFIC Image
auth.post('/:id', authentificate, async function (req, res) {
    const id = req.params.id;
    const { name } = req.body;
    const image = await Image.findOne({ where: { id: id  } });

    if(orders.length() > 0) res.status(200).json(image);
    else res.status(200).json("no orders");

});

module.exports = auth;