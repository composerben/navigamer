const express = require('express');
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add-game', csrfProtection, asyncHandler(async (req, res) => {
  const game = db.Game.build();
  
  res.render('game-review', {
    title: 'Add Game',
    game,
    csrfToken: req.csrfToken()
  })
}));

router.post('/add-game', csrfProtection, asyncHandler(async (req, res) => {
  const { gameName, releaseDate, developer, imgUrl } = req.body;
  console.log('WORKING')
  const game = db.Game.build({
    gameName, releaseDate, developer, imgUrl
  });
  await game.save();
  res.redirect('/')
}));

module.exports = router;
