'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameToGameshelf = sequelize.define('GameToGameshelf', {
    gameshelfId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  GameToGameshelf.associate = function(models) {
    // associations can be defined here
  };
  return GameToGameshelf;
};