const { v4: uuidv4 } = require('uuid');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('e_users', [{
      id: uuidv4(),
      firstName: 'Florian',
      lastName: 'Gesell',
      isAdmin: true,
      email: 'gesell@example.com',
      password: '$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      firstName: 'Karl',
      lastName: 'Diedrichsen',
      isAdmin: false,
      email: 'karl@example.com',
      password: '$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      firstName: 'Robin',
      lastName: 'Geramb',
      isAdmin: false,
      email: 'robin@example.com',
      password: '$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC',
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
