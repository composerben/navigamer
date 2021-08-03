'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameToGameshelf = sequelize.define('GameToGameshelf', {
    gameshelfId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  GameToGameshelf.associate = function(models) {
    GameToGameshelf.belongsTo(models.Gameshelf, { foreignKey: 'gameshelfId', onDelete: 'CASCADE' });
    GameToGameshelf.belongsTo(models.Game, { foreignKey: 'gameId' });
  };
  return GameToGameshelf;
};
