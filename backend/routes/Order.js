const express = require("express");
const order = express.Router();
const db = require('../config/database');
const User = require('../models/e_user')
const Order = require('../models/e_order')
const OrderedProduct = require('../models/r_ordered_product')

const jwt = require('jsonwebtoken');
const authentificate = require('../middleware/authentification.js')

const { SECRET } = process.env;

order.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

// SHOW ALL USER ORDERS
order.post('/all', authentificate, async function (req, res) {
    const { name } = req.body;
    const orders = await Order.findAll({ where: { u_id: req.user.id } });
    const account = await User.findOne({ where: { id: req.user.id } });
    if(account.isAdmin === true) {
      if(orders.length() > 0) res.status(200).json(orders);
      else res.status(200).json("no orders");
    }

});

// RETURN SPECIFIC ORDER
/*
order.post('/:id', authentificate, async function (req, res) {
    const id = req.params.id;
    const { name } = req.body;
    const order = await Order.findOne({ where: { id: id  } });

    if(orders.length() > 0) res.status(200).json(order);
    else res.status(200).json("no orders");

});
*/


//PLACE AN ORDER
order.post('/add', authentificate, async function (req, res) {
  const items = req.body.cart;
  const account = await User.findOne({ where: { id: req.user.id } });
  
  Order.create({
    u_id: account.id
  }).then(function (new_order) {
    for(let i = 0; i < items.length; i++){
      OrderedProduct.create({
        o_id: new_order.id,
        p_id: items[i].p_v_id,
        quantity: items[i].quantity
      });
    }
    res.send('Order Placed');
  }).catch(function (err) {
    res.status(400).json(err);
  });
})

module.exports = order;