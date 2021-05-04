'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Platforms', [
      { name: "PC" },
      { name: "Xbox Series X/S" },
      { name: "PS5" },
      { name: "Xbox One" },
      { name: "PS4" },
      { name: "Nintendo Switch" },
      { name: "Xbox 360" },
      { name: "PS3" },
      { name: "Wii" },
      { name: "PS2" },
      { name: "Xbox" },
      { name: "GameCube" },
      { name: "Dreamcast" },
      { name: "Nintendo 64" },
      { name: "PlayStation" },
      { name: "Super NES" },
      { name: "Sega Genesis" },
      { name: "NES" },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Platforms', null, {});
  }
};
