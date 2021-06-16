const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class e_user extends Model {}

e_user.init({
    id: {
        type:       Sequelize.UUID,
        primaryKey: true
    },
    firstName: { 
        type:       Sequelize.STRING(30),
        allowNull:  false,
        validate: {
            is: ["^[a-z]+$",'i']
        }
    },
    lastName: { 
        type:       Sequelize.STRING(30),
        allowNull:  false,
        validate: {
            is: ["^[a-z]+$",'i']
        }
    },
    email: {       
        type:       Sequelize.STRING(50),
        unique:     true,
        allowNull:  false,
        validate: {
            isEmail: true
        }
    },
    isAdmin: {
        type:           Sequelize.BOOLEAN,
        allowNull:      false,
        defaultValue:   false
    },
    password: {
        type:       Sequelize.STRING(30),
        allowNull:  false
    }
}, { sequelize, modelName: 'e_user' });

module.exports = e_user;