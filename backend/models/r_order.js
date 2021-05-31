const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class r_order extends Model {};

r_order.init({
    u_id: {
        type:       Sequelize.UUID,
        primaryKey: true,
        references: {
            model:  'e_user',
            key:    'id'
        }
    },
    p_id: {
        type:       Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull:  false,
        references: {
            model:  'e_product_variant',
            key:    'id'
        }
    },
    date: {
        type:       Sequelize.DATE,
        primaryKey: true,
        defaultValue: Sequelize.NOW
    },
    fullfilled: Sequelize.BOOLEAN,
    returned:   Sequelize.BOOLEAN,
    canceled:   Sequelize.BOOLEAN
}, { sequelize, modelName: "r_order"});

module.exports = r_order;