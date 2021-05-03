'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gameshelf = sequelize.define('Gameshelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Gameshelf.associate = function (models) {
    const shelfMapping = {
      through: 'GameToGameshelf',
      otherKey: 'gameId',
      foreignKey: 'gameshelfId'
    }
    Gameshelf.belongsToMany(models.Game, shelfMapping);
    Gameshelf.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Gameshelf;
};