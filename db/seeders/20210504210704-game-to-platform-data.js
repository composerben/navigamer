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
      { gameId: 11, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // COD: WarZone
      { gameId: 11, platformId: 2, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 11, platformId: 3, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 11, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 11, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 12, platformId: 3, createdAt: new Date(), updatedAt: new Date() }, // Spider-Man: Miles Morales
      { gameId: 12, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 13, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Devil May Cry 5
      { gameId: 13, platformId: 2, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 13, platformId: 3, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 13, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 13, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      //INSERT DESTINY 2
      { gameId: 15, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Resident Evil Village
      { gameId: 15, platformId: 2, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 15, platformId: 3, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 15, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 15, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 16, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Mass Effect 2
      { gameId: 16, platformId: 7, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 16, platformId: 8, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 17, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Starcraft II
      { gameId: 18, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Diablo III
      { gameId: 18, platformId: 8, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 18, platformId: 7, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 18, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 18, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 18, platformId: 6, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 19, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Diablo II
      { gameId: 20, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Diablo
      { gameId: 20, platformId: 15, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 21, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Path of Exile
      { gameId: 21, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 21, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 22, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // The Witcher 3: Wild Hunt
      { gameId: 22, platformId: 2, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 22, platformId: 3, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 22, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 22, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 22, platformId: 6, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 23, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Rocket League
      { gameId: 23, platformId: 3, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 23, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 23, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 23, platformId: 6, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 24, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Fallout 4
      { gameId: 24, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 24, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 25, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Titanfall 2
      { gameId: 25, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 25, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 26, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Hitman
      { gameId: 26, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 26, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 27, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Resident Evil 7: Biohazard
      { gameId: 27, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 27, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 27, platformId: 6, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 28, platformId: 5, createdAt: new Date(), updatedAt: new Date() }, // God of War
      { gameId: 29, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // It Takes Two
      { gameId: 29, platformId: 2, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 29, platformId: 3, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 29, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 29, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 30, platformId: 1, createdAt: new Date(), updatedAt: new Date() }, // Scarlet Nexus
      { gameId: 30, platformId: 2, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 30, platformId: 3, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 30, platformId: 4, createdAt: new Date(), updatedAt: new Date() },
      { gameId: 30, platformId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GameToPlatforms', null, {});
  }
};
