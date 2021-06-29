const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class r_ordered_product extends Model {}

r_ordered_product.init({
    
    o_id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        allowNull:      false,
        references: {
            model:  'e_orders',
            key:    'id'
        }
    },
    p_id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        allowNull:      false,
        references: {
            model:  'e_product_variants',
            key:    'id'
        }
    },
    quantity: {
        type:           Sequelize.INTEGER,
        allowNull:      false
    }
}, { sequelize, modelName: "r_ordered_product"});

module.exports = r_ordered_product;