'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY,
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Gameshelf, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
    User.hasMany(models.Status, { foreignKey: 'userId' });
  };
  return User;
};
