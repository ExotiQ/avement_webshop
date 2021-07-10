'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('e_orders', {
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
      returned: {
          type:           Sequelize.BOOLEAN,
          default:        false
      },
      canceled: {
          type:           Sequelize.BOOLEAN,
          default:        false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('e_orders');
  }
};