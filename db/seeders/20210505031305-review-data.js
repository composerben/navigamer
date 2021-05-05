'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        { gameId: 6, userId: 2, rating: '9', review: `The ability to play as not one, not two... BUT THREE characters is fantastic.  The ability to switch characters at almost any moment in a mission is great!  The graphics, the gameplay, I can't recommend this game enough!`, createdAt: new Date(), updatedAt: new Date() },
        { gameId: 7, userId: 3, rating: '10', review: `If you loved the first Red Dead, DO NOT MISS THIS!  The level of detail is incredible.  The game is so open that it feels never-ending.  It is easy to lose HOURS to this game without even realizing.`, createdAt: new Date(), updatedAt: new Date() },
        { gameId: 8, userId: 4, rating: '10', review: 'Absolutely, undoubtedly, one of the best games released.  This will ALWAYS be a classic.', createdAt: new Date(), updatedAt: new Date() },
        { gameId: 9, userId: 5, rating: '9', review: `What's not to like?!  You're an outlaw!  Definitely not for young children!`, createdAt: new Date(), updatedAt: new Date() },
        { gameId: 10, userId: 6, rating: '9', review: `This game was incredible from the release and only keeps getting better.  There are new states being released often and it makes the trucking experience that much more immersive!  If you're into simulations, give this game a chance!`, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
