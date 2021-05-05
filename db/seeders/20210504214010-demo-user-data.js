'use strict';
const bcrypt = require('bcryptjs');
const password = bcrypt.hashSync('password', 10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { username: 'demoUser', hashedPassword: password, email: 'demo@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Shadept', hashedPassword: password, email: 'Shadept@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'RecklessCyborg', hashedPassword: password, email: 'RecklessCyborg@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'SnowWerewolf', hashedPassword: password, email: 'SnowWerewolf@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'IronSailor', hashedPassword: password, email: 'IronSailor@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Aromaster', hashedPassword: password, email: 'Aromaster@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'ScienceTucan', hashedPassword: password, email: 'ScienceTucan@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'AwkwardFrogger', hashedPassword: password, email: 'AwkwardFrogger@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'BubbleKoala', hashedPassword: password, email: 'BubbleKoala@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'ShadyRaspberry', hashedPassword: password, email: 'ShadyRaspberry@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'LightTermite', hashedPassword: password, email: 'LightTermite@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Snowmantis', hashedPassword: password, email: 'Snowmantis@demo.com', createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
