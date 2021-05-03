'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gameshelf = sequelize.define('Gameshelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Gameshelf.associate = function(models) {
    // associations can be defined here
  };
  return Gameshelf;
};