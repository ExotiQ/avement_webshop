const express = require("express");
const products = express.Router();
const db = require('../config/database');
const Products = require("../models/e_product");
const User = require('../models/e_user');
const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');

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
/*
products.get('/:id', async function (req, res) {
  const id = req.params.id;
  const product = await Products.findOne({ where: { id: id } });
  if(product !== null) res.status(200).json(product);
  else res.status(400).json("NO PRODUCT WITH ID");
})
*/

// ADD PRODUCT
products.post('/add',authentificate, async function (req, res) {
  const { productName, productDesc, productPrice, productSizes  } = req.body;
  const account = await User.findOne({ where: { id: req.user.id } });
  console.log(account)

  if(account.isAdmin === true) {
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
  const account = await User.findOne({ where: { id: req.user.id } });

  if(account.isAdmin === true) {
    Products.update( { productName: productName, productDesc: productDesc, productPrice: productPrice, productSizes: productSizes }, { where: { id: id } } )
    .then(function(affectedRows) {
      res.status(200).json("updated " + affectedRows);
    })
  }
})

// REMOVE PRODUCT BY ID
products.post('/remove/:id',authentificate, async function (req, res) {
  const account = await User.findOne({ where: { id: req.user.id } });
  const id = req.params.id;
  
  if(account.isAdmin === true) {
    Products.destroy({ where: { id: id } })
    .then(function(affectedRows) {
      res.status(200).json("PRODUCT REMOVED: " + affectedRows);
    })
  }
})


products.get('/product_page/:name/:color', async function (req, res) {
  const { name, color } = req.params;
  await db.query(
  `SELECT p_v.id AS id, p.name AS name, p_v.color AS color, p.price AS price, array_agg(im.image) AS image, json_agg(json_build_object('size', p_v.size, 'amount', p_v.quantity)) AS stock FROM  e_products p JOIN e_product_variants p_v ON p.id = p_v.p_id LEFT JOIN r_product_images p_i ON p_v.id = p_i.p_id LEFT JOIN e_images im ON p_i.i_id = im.id WHERE p.name = ${"'" + name + "'"} AND p_v.color = ${"'" + color + "'"} GROUP BY p_v.id, p.name, p_v.color, p.price;`,
  { type: QueryTypes.SELECT }).then(function(result) {
    console.log(result);
    if(result !== null) res.status(200).json(result);
    else res.status(400).json("NO SUCH PRODUCT PAGE");
  }).catch(function (err) {
    res.status(400).json(err);
  });
});


products.get('/get_all_products', async function (req, res) {
  await db.query(
    `SELECT p_v.id AS id, p.name AS name, p_v.color AS color, p.price AS price, c.name AS category, array_agg(im.image) AS image, json_agg(json_build_object('size', p_v.size, 'amount', p_v.quantity)) AS stock FROM  e_products p JOIN e_product_variants p_v ON p.id = p_v.p_id LEFT JOIN r_product_images p_i ON p_v.id = p_i.p_id LEFT JOIN e_images im ON p_i.i_id = im.id JOIN enum_categories c ON c.id = p.category GROUP BY p_v.id, p.name, p_v.color, c.name, p.price;`,
  { type: QueryTypes.SELECT }).then(function(result) {
    if(result !== null) res.status(200).json(result);
    else res.status(400).json("NO PRODUCTS IN THE DATABASE");
  }).catch(function (err) {
    res.status(400).json(err);
  });
});

module.exports = products;