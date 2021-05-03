'use strict';
module.exports = (sequelize, DataTypes) => {
  const GametoPlatform = sequelize.define('GametoPlatform', {
    gameId: DataTypes.INTEGER,
    platformId: DataTypes.INTEGER
  }, {});
  GametoPlatform.associate = function(models) {
    // associations can be defined here
  };
  return GametoPlatform;
};