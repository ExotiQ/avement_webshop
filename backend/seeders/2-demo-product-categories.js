const { v4: uuidv4 } = require('uuid');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enum_categories', [{
      id: 1,
      name: 'Tops',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Bottoms',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'clothing oder accessoires',
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
