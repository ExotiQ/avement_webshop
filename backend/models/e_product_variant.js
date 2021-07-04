const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class e_product_variant extends Model {};

e_product_variant.init({
    id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
    },
    p_id: {      
        type:       Sequelize.INTEGER,
        allowNull:  false,
        references: {
            model:  'e_products',
            key:    'id'
        }
    },
    size:       Sequelize.STRING(10),
    color:      Sequelize.STRING(20),
    quantity:   Sequelize.INTEGER
}, { sequelize, modelName: "e_product_variant" });

module.exports = e_product_variant;