const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class r_product_image extends Model {}

r_product_image.init({
    p_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        primaryKey:     true,
        references: {
            model:  'e_product_variants',
            key:    'id'
        }
    },
    i_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        primaryKey:     true,
        references: {
            model:  'e_images',
            key:    'id'
        }
    }
}, { sequelize, modelName: "r_product_image"});

module.exports = r_product_image;