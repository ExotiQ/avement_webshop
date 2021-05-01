const express = require("express");
const products = express.Router();
const db = require('../config/database');
const Products = require("../models/products");

products.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

products.get('/list', async function (req, res) {
  res.status(200).json(await Products.findAll(), null, 2);
})

products.get('/add', async function (req, res) {
  await Products.create({
    productName: "TEST PRODUCT",
    productDesc: "DESCRIPTION",
    productPrice: "10€",
    productSizes: ["S","M","L","XL"]
  });

  res.status(200).json("PRODUCT ADDED");
})



module.exports = products;