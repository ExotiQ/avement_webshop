'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('r_product_images', {
      p_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        primaryKey:     true,
        references: {
            model:  'e_product_variant',
            key:    'id'
        }
      },
      i_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        primaryKey:     true,
        references: {
            model:  'e_image',
            key:    'id'
        }
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
    await queryInterface.dropTable('r_product_images');
  }
};