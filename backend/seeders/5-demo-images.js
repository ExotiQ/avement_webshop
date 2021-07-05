const fs = require('fs');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    //const fileReader = new FileReader();
    return queryInterface.bulkInsert('e_images', [{
        id:         1,
        name:       'skull_tshirt_cropped.jpg',
        image:      fs.readFileSync('./resources/skull_tshirt_cropped.jpg'),
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         2,
        name:       'bigskull_tshirt_cropped.jpg',
        image:      fs.readFileSync('./resources/bigskull_tshirt_cropped.jpg'),
        createdAt:  new Date(),
        updatedAt:  new Date()
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