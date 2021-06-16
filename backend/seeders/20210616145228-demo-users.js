'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('e_users', [{
      firstName: 'Florian',
      lastName: 'Gesell',
      email: 'gesell@example.com',
      password: 'afhjksdhaklfhlsdkahfkhhasdf',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Karl',
      lastName: 'Diedrichsen',
      email: 'karl@example.com',
      password: 'afhjksdhaklfhlsdkahfkhhasdf',
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
