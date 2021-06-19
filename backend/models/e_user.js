const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

class e_user extends Model {};

e_user.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4
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
},{
    sequelize, 
    modelName: 'e_user' 
});


e_user.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

e_user.beforeBulkCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

e_user.beforeUpdate(async (user, options) => {
const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(user.password, salt);
});

e_user.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}


module.exports = e_user;