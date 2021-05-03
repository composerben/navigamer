'use strict';
module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define('Platform', {
    name: DataTypes.STRING
  }, {});
  Platform.associate = function (models) {
    const platformMapping = {
      through: 'GameToPlatform',
      otherKey: 'platformId',
      foreignKey: 'gameId'
    }
    Platform.belongsToMany(models.Game, platformMapping);
  };
  return Platform;
};