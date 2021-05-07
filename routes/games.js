const express = require('express');
const db = require("../db/models");
const path = require('path');
const { csrfProtection, asyncHandler, addGameValidators } = require("./utils");
const { validationResult } = require("express-validator");
const router = express.Router();

router.use(express.static(path.join(__dirname, '../public')));
router.use(express.static(path.join(__dirname, '../assets')));

/* GET users listing. */
router.get('/', asyncHandler(async (req, res) => {
  const games = await db.Game.findAll({ order: ['gameName'] });
  const sessionUser = req.session.auth;

  res.render('games', {
    title: 'All Games',
    games,
    sessionUser
  })

}));

router.get('/add-game', csrfProtection, asyncHandler(async (req, res) => {
  const game = db.Game.build();
  const sessionUser = req.session.auth;

  res.render('add-game', {
    title: 'Add Game',
    game,
    csrfToken: req.csrfToken(),
    sessionUser
  })
}));

router.post('/add-game', csrfProtection, addGameValidators, asyncHandler(async (req, res) => {
  const { gameName, releaseDate, developer, imgUrl } = req.body;
  const sessionUser = req.session.auth;
  const game = db.Game.build({
    gameName, releaseDate, developer, imgUrl
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await game.save();
    res.redirect('/games')
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render("add-game", {
      title: "Add Game",
      game,
      errors,
      sessionUser,
      csrfToken: req.csrfToken(),
    });
  }
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const sessionUser = req.session.auth;
  const game = await db.Game.findByPk(req.params.id, {
    include: db.Platform
  });
  const platforms = game.Platforms

  res.render('single-game', {
    title: 'All Games',
    game,
    platforms,
    sessionUser
  })
}));

module.exports = router;
