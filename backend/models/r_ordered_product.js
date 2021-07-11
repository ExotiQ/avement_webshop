const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class r_ordered_product extends Model {}

r_ordered_product.init({
    o_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        references: {
            model:  'e_orders',
            key:    'id'
        }
    },
    p_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        references: {
            model:  'e_product_variants',
            key:    'id'
        }
    },
    quantity:
    {
        type:           Sequelize.INTEGER,
        default:        1
    }
}, { sequelize, modelName: "r_ordered_product"});

r_ordered_product.beforeCreate(function (o_p, options) {
    sequelize.query(`UPDATE e_product_variants SET quantity = quantity - ${o_p.quantity} WHERE  id = ${o_p.p_id};`);
});

module.exports = r_ordered_product;