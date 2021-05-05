'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GameToPlatforms', [
      { gameId: 1, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Dark Souls 1
      { gameId: 1, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 1, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 1, platformId: 6, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 1, platformId: 7, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 1, platformId: 8, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 2, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Dark Souls 2
      { gameId: 2, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 2, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 2, platformId: 7, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 2, platformId: 8, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 3, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Dark Soul 3
      { gameId: 3, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 3, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 4, platformId: 5, createdAt: new Date(), updatedAt: new Date() }, // Bloodborne
      { gameId: 5, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Sekiro
      { gameId: 5, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 5, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 6, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // GTA V
      { gameId: 6, platformId: 2, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 6, platformId: 3, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 6, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 6, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 6, platformId: 7, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 6, platformId: 8, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 7, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Red Dead 2
      { gameId: 7, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 7, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 8, platformId: 12, createdAt: new Date(), updatedAt: new Date() }, // Zelda OoT
      { gameId: 8, platformId: 14, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 9, platformId: 7, createdAt: new Date(), updatedAt: new Date() }, // Red Dead
      { gameId: 9, platformId: 8, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 10, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Truck Sim
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GameToPlatforms', null, {});
  }
};
