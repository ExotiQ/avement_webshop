const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  admin: {
    type: Sequelize.BOOLEAN, 
    allowNull: false, 
    defaultValue: false
  },
}, { 
  sequelize,
  modelName: 'Users' 
});


module.exports = User;