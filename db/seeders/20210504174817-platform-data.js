'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Platforms', [
      { name: "PC", createdAt: new Date(), updatedAt: new Date() },// 1
      { name: "Xbox Series X/S", createdAt: new Date(), updatedAt: new Date() }, // 2
      { name: "PS5", createdAt: new Date(), updatedAt: new Date() }, // 3
      { name: "Xbox One", createdAt: new Date(), updatedAt: new Date() }, // 4
      { name: "PS4", createdAt: new Date(), updatedAt: new Date() }, // 5
      { name: "Nintendo Switch", createdAt: new Date(), updatedAt: new Date() }, // 6
      { name: "Xbox 360", createdAt: new Date(), updatedAt: new Date() }, // 7
      { name: "PS3", createdAt: new Date(), updatedAt: new Date() }, // 8
      { name: "Wii", createdAt: new Date(), updatedAt: new Date() }, // 9
      { name: "PS2", createdAt: new Date(), updatedAt: new Date() }, // 10
      { name: "Xbox", createdAt: new Date(), updatedAt: new Date() }, // 11
      { name: "GameCube", createdAt: new Date(), updatedAt: new Date() }, // 12
      { name: "Dreamcast", createdAt: new Date(), updatedAt: new Date() }, // 13
      { name: "Nintendo 64", createdAt: new Date(), updatedAt: new Date() }, // 14
      { name: "PlayStation", createdAt: new Date(), updatedAt: new Date() }, // 15
      { name: "Super NES", createdAt: new Date(), updatedAt: new Date() }, // 16
      { name: "Sega Genesis", createdAt: new Date(), updatedAt: new Date() }, // 17
      { name: "NES", createdAt: new Date(), updatedAt: new Date() }, // 18
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Platforms', null, {});
  }
};
