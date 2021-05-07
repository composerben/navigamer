'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('GameToGameshelves', [
        { gameshelfId: 1, gameId: 1, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 2, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 3, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 4, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 5, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 6, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 7, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 8, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 9, createdAt: new Date(), updatedAt: new Date() },
        { gameshelfId: 1, gameId: 10, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
