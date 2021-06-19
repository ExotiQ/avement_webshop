const express = require("express");
const admin = express.Router();
const db = require('../config/database');
const User = require('../models/e_user')
const Image = require('../models/e_image')
const Product = require('../models/e_product')
const Variant = require('../models/e_product_variant')
const Category = require('../models/enum_category')

const jwt = require('jsonwebtoken');
const authentificate = require('../middleware/authentification.js')

const { SECRET } = process.env;

admin.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

// ADD PRODUCT
admin.post('/product/add', authentificate, async function (req, res) {
  const { name,category,price,description } = req.body;
  const account = await User.findOne({ where: { id: req.user.id } });
  
  if(account.isAdmin === true) {
      await Product.create({
        name: name,
        category: category,
        price: price,
        description: description,
      }).then(function(product) {
        res.status(200).json("PRODUCT ADDED");
      }).catch(function (err) {
        res.status(400).json(err);
      });
  } else {
    res.status(401).json("Not Authorized");
  }
});

// ADD PRODUCT CATEGORY
admin.post('/category/add', authentificate, async function (req, res) {
  const { name } = req.body;
  const account = await User.findOne({ where: { id: req.user.id } });

  if(account.isAdmin === true) {
    await Category.create({
      name: name
    }) 
    .then( () => {
      res.status(200).json("CATEGORY ADDED");
    })
  } else {
    res.status(401).json("UNAUTORIZED");
  }
});

// ADD PRODUCT VARIANT
admin.post('/product/variant/add', authentificate, async function (req, res) {
  const { p_id, size, color, quantity } = req.body;
  const account = await User.findOne({ where: { id: req.user.id } });

  if(account.isAdmin === true) {
    await Variant.create({
      p_id: p_id,
      size: size,
      color: color,
      quantity: quantity
    }) 
    .then( () => {
      res.status(200).json("VARIANT ADDED");
    })
  } else res.status(401);
});

// ADD IMAGE
admin.post('/image/add', authentificate, async function (req, res) {
    const { name } = req.body;

});

module.exports = admin;