const express = require("express");
const auth = express.Router();
const db = require('../config/database');
const User = require('../models/e_user')
const Order = require('../models/e_order')

const jwt = require('jsonwebtoken');
const authentificate = require('../middleware/authentification.js')

const { SECRET } = process.env;

auth.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

// SHOW ALL USER ORDERS
auth.post('/all', authentificate, async function (req, res) {
    const { name } = req.body;
    const orders = await User.findOne({ where: { u_id: req.user.id } });

    if(orders.length() > 0) res.status(200).json(orders);
    else res.status(200).json("no orders");

});

// RETURN SPECIFIC ORDER
auth.post('/:id', authentificate, async function (req, res) {
    const id = req.params.id;
    const { name } = req.body;
    const order = await User.findOne({ where: { id: id  } });

    if(orders.length() > 0) res.status(200).json(order);
    else res.status(200).json("no orders");

});

module.exports = auth;