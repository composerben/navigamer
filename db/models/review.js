'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    gameId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.Game, { foreignKey: 'gameId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Review;
};