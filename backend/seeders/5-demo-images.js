
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    //const fileReader = new FileReader();
    return queryInterface.bulkInsert('e_images', [{
        id:         1,
        name:       'skull_tshirt_cropped.jpg',
        image:      'skull_tshirt_cropped.jpg',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         2,
        name:       'bigskull_tshirt_cropped.jpg',
        image:      'bigskull_tshirt_cropped.jpg',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         3,
        name:       'beigesweater.png',
        image:      'beigesweater.png',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         4,
        name:       'cargo_pants.png',
        image:      'cargo_pants.png',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         5,
        name:       'fanny_pack.png',
        image:      'fanny_pack.png',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         6,
        name:       'fanny_pack_beige.png',
        image:      'fanny_pack_beige.png',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         7,
        name:       'cuban_chain.png',
        image:      'cuban_chain.png',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         8,
        name:       't_shirt_model.jpeg',
        image:      't_shirt_model.jpeg',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         9,
        name:       'beige_sweater_model_2.jpeg',
        image:      'beige_sweater_model_2.jpeg',
        createdAt:  new Date(),
        updatedAt:  new Date()
      },
      {
        id:         10,
        name:       'black_tshirt_model.jpeg',
        image:      'black_tshirt_model.jpeg',
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