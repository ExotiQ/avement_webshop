const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class e_order extends Model {};

e_order.init({
    id: {
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
    fullfilled: {
        type:           Sequelize.BOOLEAN,
        default:        false
    },
    returned:   {
        type:           Sequelize.BOOLEAN,
        default:        false
    },
    canceled:   {
        type:           Sequelize.BOOLEAN,
        default:        false
    }
}, { sequelize, modelName: "e_order"});

module.exports = e_order;