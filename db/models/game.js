'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameName: DataTypes.STRING,
    bio: DataTypes.TEXT,
    releaseDate: DataTypes.DATEONLY,
    developer: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Game.associate = function (models) {
    const shelfMapping = {
      through: 'GameToGameshelf',
      otherKey: 'gameshelfId',
      foreignKey: 'gameId',
      onDelete: 'CASCADE'
    }
    const platformMapping = {
      through: 'GameToPlatform',
      otherKey: 'platformId',
      foreignKey: 'gameId'
    }
    Game.hasMany(models.Review, { foreignKey: 'gameId' });
    Game.belongsToMany(models.Gameshelf, shelfMapping);
    Game.belongsToMany(models.Platform, platformMapping);
    Game.hasMany(models.Status, { foreignKey: 'gameId' });
  };
  return Game;
};
