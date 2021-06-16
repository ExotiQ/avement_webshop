const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class e_image extends Model {};

e_image.init({
    id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
    },
    name: {
        type:       Sequelize.STRING(30),
        allowNull:  false,
        unique:     true
    },
    image:  Sequelize.BLOB
}, { sequelize, modelName: "e_image" });

module.exports = e_image;

