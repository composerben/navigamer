"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("GameToGameshelves", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gameshelfId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Gameshelves" },
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Games" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("GameToGameshelves");
  },
};
