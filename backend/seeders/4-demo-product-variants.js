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
      quantity: 0,
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
      id: 6,
      p_id: 2,
      size: 'S',
      color: "beige",
      quantity: 309,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      p_id: 2,
      size: 'M',
      color: "beige",
      quantity: 199,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 8,
      p_id: 2,
      size: 'L',
      color: "beige",
      quantity: 299,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 9,
      p_id: 2,
      size: 'XL',
      color: "beige",
      quantity: 399,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 10,
      p_id: 3,
      size: 'S',
      color: "black",
      quantity: 209,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 11,
      p_id: 3,
      size: 'M',
      color: "black",
      quantity: 309,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 12,
      p_id: 3,
      size: 'L',
      color: "black",
      quantity: 399,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 13,
      p_id: 4,
      size: 'One Size',
      color: "black",
      quantity: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 14,
      p_id: 4,
      size: 'One Size',
      color: "beige",
      quantity: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      id: 15,
      p_id: 5,
      size: 'One Size',
      color: "silver",
      quantity: 0,
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
