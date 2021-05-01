const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Products extends Model {}

Products.init({
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productDesc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productPrice: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productSizes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  }
}, { 
  sequelize,
  modelName: 'Products' 
});

module.exports = Products;