'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Status.associate = function (models) {
    Status.belongsTo(models.Game, { foreignKey: 'gameId' });
    Status.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Status;
};