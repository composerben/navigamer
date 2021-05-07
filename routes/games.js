const express = require("express");
const db = require("../db/models");
const path = require("path");
const {
  csrfProtection,
  asyncHandler,
  addGameValidators,
  addReviewValidators,
} = require("./utils");

const { validationResult } = require("express-validator");
const router = express.Router();

router.use(express.static(path.join(__dirname, "../public")));
router.use(express.static(path.join(__dirname, "../assets")));

/* GET users listing. */
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const games = await db.Game.findAll({ order: ["gameName"] });
    res.render("games", {
      title: "All Games",
      games,
    });
  })
);

router.get(
  "/add-game",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const game = db.Game.build();

    res.render("add-game", {
      title: "Add Game",
      game,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post(
  "/add-game",
  csrfProtection,
  addGameValidators,
  asyncHandler(async (req, res) => {
    const { gameName, releaseDate, developer, imgUrl } = req.body;

    const game = db.Game.build({
      gameName,
      releaseDate,
      developer,
      imgUrl,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await game.save();
      res.redirect("/games");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("add-game", {
        title: "Add Game",
        game,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const game = await db.Game.findByPk(req.params.id, {
      include: [db.Platform, db.Review],
    });
    const platforms = game.Platforms;
    const reviews = game.Reviews;

    res.render("single-game", {
      title: "All Games",
      game,
      platforms,
      reviews,
    });
  })
);

router.post(
  "/:id(\\d+)",
  csrfProtection,
  addReviewValidators,
  asyncHandler(async (req, res) => {
    const { gameId, userId, rating, review } = req.body;

    const gameReview = db.Review.build({
      gameId,
      userId,
      rating,
      review,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await gameReview.save();
      return; //Ehhhhh?????
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("add-game", {
        title: "Add Game",
        game,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

module.exports = router;
