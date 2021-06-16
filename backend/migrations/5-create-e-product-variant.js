'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('e_product_variants', {
      id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
      },
      p_id: {      
          type:       Sequelize.INTEGER,
          allowNull:  false,
          references: {
              model:  'e_products',
              key:    'id'
          }
      },
      size:       Sequelize.STRING(10),
      color:      Sequelize.STRING(20),
      quantity:   Sequelize.INTEGER
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('e_product_variants');
  }
};