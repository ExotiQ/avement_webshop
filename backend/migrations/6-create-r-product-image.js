'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('r_product_images', {
      id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
    },
    p_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        references: {
            model:  'e_product_variants',
            key:    'id'
        }
    },
    i_id: {
        type:           Sequelize.INTEGER,
        allowNull:      false,
        references: {
            model:  'e_images',
            key:    'id'
        }
    },
    description:    Sequelize.TEXT,
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