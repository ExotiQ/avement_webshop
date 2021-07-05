const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class r_product_image extends Model {}

r_product_image.init({
    id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
    },
    p_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        references: {
            model:  'e_product_variant',
            key:    'id'
        }
    },
    i_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        references: {
            model:  'e_image',
            key:    'id'
        }
    },
    description:    Sequelize.TEXT
}, { sequelize, modelName: "r_product_image"});

module.exports = r_product_image;