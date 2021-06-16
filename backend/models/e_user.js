'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
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
  }, {
    sequelize,
    modelName: 'e_user',
  });
  return e_user;
};