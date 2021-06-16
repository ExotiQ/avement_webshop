'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('e_orders', {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('e_orders');
  }
};