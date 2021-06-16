const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class e_product extends Model {}

e_product.init({
    id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
    },
    name: {
        type:       Sequelize.STRING(50),
        allowNull:  false
    },
    category: {   
        type:       Sequelize.INTEGER,
        allowNull:  false,
        references: {
            model:  'enum_category',
            key:    'id'
        }
    },
    price: {
        type: Sequelize.DECIMAL(7, 2),
        allowNull: false
    },
    description:    Sequelize.TEXT
}, { sequelize, modelName: "e_product"});

module.exports = e_product;