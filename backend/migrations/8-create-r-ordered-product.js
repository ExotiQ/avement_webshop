'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('r_ordered_products', {
      o_id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        allowNull:      false,
        references: {
            model:  'e_orders',
            key:    'id'
        }
      },
      p_id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        allowNull:      false,
        references: {
            model:  'e_product_variants',
            key:    'id'
        }
      },
      quantity: {
        type:           Sequelize.INTEGER,
        defaultValue:   1
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
    await queryInterface.dropTable('r_ordered_products');
  }
};