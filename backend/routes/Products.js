const express = require("express");
const products = express.Router();
const db = require('../config/database');
const Products = require("../models/e_product");
const User = require('../models/e_user');

const authentificate = require('../middleware/authentification.js')

products.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

// LIST ALL PRODUCTS
products.get('/list', async function (req, res) {
  res.status(200).json(await Products.findAll(), null, 2);
})

// GET PRODUCT BY ID
products.get('/:id', async function (req, res) {
  const id = req.params.id;
  const product = await Products.findOne({ where: { id: id } });
  if(product !== null) res.status(200).json(product);
  else res.status(400).json("NO PRODUCT WITH ID");
})

// ADD PRODUCT
products.post('/add',authentificate, async function (req, res) {
  const { productName, productDesc, productPrice, productSizes  } = req.body;
  const account = await User.findOne({ where: { email: req.user.username } });

  if(account.admin === true) {

    const { productName, productDesc, productPrice, productSizes  } = req.body;
    await Products.create({
      productName: productName,
      productDesc: productDesc,
      productPrice: productPrice,
      productSizes: productSizes
    })
    .then( () => {
      res.status(200).json("PRODUCT ADDED");
    })

  }
})

// EDIT PRODUCT
products.post('/edit/:id',authentificate, async function (req, res) {
  const id = req.params.id;
  const { productName, productDesc, productPrice, productSizes  } = req.body;
  const account = await User.findOne({ where: { email: req.user.username } });

  if(account.admin === true) {

    Products.update( { productName: productName, productDesc: productDesc, productPrice: productPrice, productSizes: productSizes }, { where: { id: id } } )
    .then(function(affectedRows) {
      res.status(200).json("updated " + affectedRows);
    })
  }
})

// REMOVE PRODUCT BY ID
products.post('/remove/:id',authentificate, async function (req, res) {
  const id = req.params.id;
  Products.destroy({ where: { id: id } })
  res.status(200).json("PRODUCT REMOVED");
})

module.exports = products;