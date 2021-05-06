'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [
      { gameName: 'Dark Souls', releaseDate: '2011-09-22', developer: 'FromSoftware', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Dark Souls 2', releaseDate: '2014-03-11', developer: 'FromSoftware', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Dark Souls 3', releaseDate: '2016-03-24', developer: 'FromSoftware', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Dark_souls_3_cover_art.jpg/220px-Dark_souls_3_cover_art.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Bloodborne', releaseDate: '2015-03-24', developer: 'FromSoftware', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Sekiro: Shadows Die Twice', releaseDate: '2019-03-22', developer: 'FromSoftware', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Grand Theft Auto V', releaseDate: '2013-09-17', developer: 'Rockstar North', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Red Dead Redemption 2', releaseDate: '2018-10-26', developer: 'Rockstar Studios', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/220px-Red_Dead_Redemption_II.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'The Legend of Zelda: Ocarina of Time', releaseDate: '1998-11-21', developer: 'Nintendo', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Legend_of_Zelda_Ocarina_of_Time_box_art.png/220px-The_Legend_of_Zelda_Ocarina_of_Time_box_art.png', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Red Dead Redemption', releaseDate: '2010-05-18', developer: 'Rockstar San Diego', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Red_Dead_Redemption.jpg/220px-Red_Dead_Redemption.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'American Truck Simulator', releaseDate: '2016-02-02', developer: 'SCS Software', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/American_Truck_Simulator_Steam_Cover.jpg/220px-American_Truck_Simulator_Steam_Cover.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Call of Duty: Warzone', releaseDate: '2020-03-10', developer: 'Infinity Ward, Raven Software, Treyarch, Beenox', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/COD_Warzone_cover_art.jpg/220px-COD_Warzone_cover_art.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Animal Crossing: New Horizons', releaseDate: '2020-03-20', developer: 'Nintendo: EPD', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Animal_Crossing_New_Horizons.jpg/220px-Animal_Crossing_New_Horizons.jpg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Spider-Man: Miles Morales', releaseDate: '2020-11-12', developer: 'Insomniac Games', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Spider-Man_Miles_Morales.jpeg/220px-Spider-Man_Miles_Morales.jpeg', createdAt: new Date(), updatedAt: new Date() },
      { gameName: 'Devil May Cry 5', releaseDate: '2019-03-08', developer: 'Capcom', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Devil_May_Cry_5.jpg/220px-Devil_May_Cry_5.jpg', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
