'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Gameshelves', [
        { name: 'My Collection', userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: `Iron Sailor's Favorites`, userId: 5, createdAt: new Date(), updatedAt: new Date() }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Gameshelves', null, {});
  }
};
