'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('r_product_images', [{
      p_id:     1,
      i_id:     1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      p_id:     2,
      i_id:     2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};