const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class e_order extends Model {};

e_order.init({
    o_id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
    },
    u_id: {
        type:       Sequelize.UUID,
        references: {
            model:  'e_users',
            key:    'id'
        }
    },
    date: {
        type:           Sequelize.DATE,
        defaultValue:   Sequelize.NOW
    },
    fullfilled: Sequelize.BOOLEAN,
    returned:   Sequelize.BOOLEAN,
    canceled:   Sequelize.BOOLEAN
}, { sequelize, modelName: "e_order"});

module.exports = e_order;