const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class r_ordered_product extends Model {}

r_ordered_product.init({
    id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
    },
    o_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        references: {
            model:  'e_order',
            key:    'id'
        }
    },
    p_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        references: {
            model:  'e_product_variant',
            key:    'id'
        }
    },
    description:    Sequelize.TEXT
}, { sequelize, modelName: "r_ordered_product"});

module.exports = r_ordered_product;