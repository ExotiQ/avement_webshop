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
      p_id:     6,
      i_id:     3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      p_id:     10,
      i_id:     4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      p_id:     13,
      i_id:     5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      p_id:     14,
      i_id:     6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      p_id:     15,
      i_id:     7,
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