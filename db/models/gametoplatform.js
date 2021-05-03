'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameToPlatform = sequelize.define('GameToPlatform', {
    gameId: DataTypes.INTEGER,
    platformId: DataTypes.INTEGER
  }, {});
  GameToPlatform.associate = function(models) {
    // associations can be defined here
  };
  return GameToPlatform;
};