"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Games", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gameName: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      bio: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      developer: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      imgUrl: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("Games");
  },
};
