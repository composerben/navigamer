'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { username: 'demoUser', hashedPassword: bcrypt.hashSync('password', 10), email: 'demo@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Shadept', hashedPassword: bcrypt.hashSync('password', 10), email: 'Shadept@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'RecklessCyborg', hashedPassword: bcrypt.hashSync('password', 10), email: 'RecklessCyborg@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'SnowWerewolf', hashedPassword: bcrypt.hashSync('password', 10), email: 'SnowWerewolf@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'IronSailor', hashedPassword: bcrypt.hashSync('password', 10), email: 'IronSailor@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Aromaster', hashedPassword: bcrypt.hashSync('password', 10), email: 'Aromaster@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'ScienceTucan', hashedPassword: bcrypt.hashSync('password', 10), email: 'ScienceTucan@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'AwkwardFrogger', hashedPassword: bcrypt.hashSync('password', 10), email: 'AwkwardFrogger@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'BubbleKoala', hashedPassword: bcrypt.hashSync('password', 10), email: 'BubbleKoala@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'ShadyRaspberry', hashedPassword: bcrypt.hashSync('password', 10), email: 'ShadyRaspberry@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'LightTermite', hashedPassword: bcrypt.hashSync('password', 10), email: 'LightTermite@demo.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Snowmantis', hashedPassword: bcrypt.hashSync('password', 10), email: 'Snowmantis@demo.com', createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
