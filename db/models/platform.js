'use strict';
module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define('Platform', {
    name: DataTypes.STRING
  }, {});
  Platform.associate = function(models) {
    // associations can be defined here
  };
  return Platform;
};