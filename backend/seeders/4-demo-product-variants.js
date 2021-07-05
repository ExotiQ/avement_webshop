const { v4: uuidv4 } = require('uuid');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('e_product_variants', [{
      id: 1,
      p_id: 1,
      size: 'S',
      color: "black",
      quantity: 299,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      p_id: 1,
      size: 'M',
      color: "black",
      quantity: 199,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      p_id: 1,
      size: 'L',
      color: "black",
      quantity: 149,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      p_id: 1,
      size: 'XL',
      color: "black",
      quantity: 300,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      p_id: 1,
      size: 'S',
      color: "black",
      quantity: 399,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      p_id: 2,
      size: 'S',
      color: "black",
      quantity: 399,
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
