'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('e_products', {
      id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
      },
      name: {
          type:       Sequelize.STRING(50),
          allowNull:  false,
          unique:     true
      },
      category: {   
          type:       Sequelize.INTEGER,
          allowNull:  false,
          references: {
              model:  'enum_categories',
              key:    'id'
          }
      },
      price: {
          type: Sequelize.DECIMAL(7, 2),
          allowNull: false
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
    await queryInterface.dropTable('e_products');
  }
};