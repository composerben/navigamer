'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameName: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    developer: DataTypes.STRING,
    status: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Game.associate = function (models) {
    const shelfMapping = {
      through: 'GameToGameshelf',
      otherKey: 'gameshelfId',
      foreignKey: 'gameId'
    }
    const platformMapping = {
      through: 'GameToPlatform',
      otherKey: 'platformId',
      foreignKey: 'gameId'
    }
    Game.hasMany(models.Review, { foreignKey: 'gameId' })
    Game.belongsToMany(models.Gameshelf, shelfMapping);
    Game.belongsToMany(models.Platform, platformMapping);
  };
  return Game;
};