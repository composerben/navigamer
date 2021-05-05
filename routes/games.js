const express = require('express');
const { csrfProtection, asyncHandler, addGameValidators } = require("./utils");
const db = require("../db/models");
const { validationResult } = require("express-validator");
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

router.post('/add-game', csrfProtection, addGameValidators, asyncHandler(async (req, res) => {
  const { gameName, releaseDate, developer, imgUrl } = req.body;

  const game = db.Game.build({
    gameName, releaseDate, developer, imgUrl
  });

  const validatorErrors = validationResult(req);
  
  if (validatorErrors.isEmpty()) {
    console.log('RAN')
    await game.save();
    res.redirect('/games')
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render("game-review", {
      title: "Add Game",
      game,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}));

module.exports = router;
