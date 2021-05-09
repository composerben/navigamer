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
    const sessionUser = req.session.auth;
    res.render("games", {
      title: "All Games",
      games,
      sessionUser
    });
  })
);

router.get(
  "/add-game",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const game = db.Game.build();
    const sessionUser = req.session.auth;
    const platforms = await db.Platform.findAll();
    const primaryPlatforms = platforms.splice(0, 6);

    res.render("add-game", {
      title: "Add Game",
      game,
      csrfToken: req.csrfToken(),
      sessionUser,
      platforms,
      primaryPlatforms
    });
  })
);

router.post(
  "/add-game",
  csrfProtection,
  addGameValidators,
  asyncHandler(async (req, res) => {
    const { gameName, releaseDate, developer, imgUrl, platformId } = req.body;
    const sessionUser = req.session.auth;
    const game = db.Game.build({
      gameName,
      releaseDate,
      developer,
      imgUrl,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await game.save();
      const gameId = game.id
      if (platformId.length > 1) {
        async function savePlatforms(input) {
          input.forEach(async (element) => {
            const gameToPlatform = db.GameToPlatform.build({
              gameId,
              platformId: element
            })
            console.log(gameToPlatform);
            await gameToPlatform.save();
          })
        }
        savePlatforms(platformId);
      } else {
        const gameToPlatform = db.GameToPlatform.build({
          platformId,
          gameId
        })
        await gameToPlatform.save();
      }
      // console.log(gameToPlatform);
      res.redirect("/games");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("add-game", {
        title: "Add Game",
        game,
        errors,
        csrfToken: req.csrfToken(),
        sessionUser,
      });
    }
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const sessionUser = req.session.auth;

    const game = await db.Game.findByPk(req.params.id, {
      include: [db.Platform, db.Review],
    });

    let userId;
    let user;
    let userLame = [];

    if (game.Reviews[0] !== undefined) {
      for (i = 0; i < game.Reviews.length; i++) {
        userId = game.Reviews[i].userId;
        user = await db.User.findByPk(userId);
        userLame.push(user.username);
      }
    }

    const gameId = req.params.id;
    const platforms = game.Platforms;
    const reviews = game.Reviews;

    res.render("single-game", {
      title: "All Games",
      game,
      platforms,
      reviews,
      gameId,
      userLame,
      sessionUser,
    });
  })
);

router.post(
  "/:id(\\d+)",
  addReviewValidators,
  asyncHandler(async (req, res) => {
    const { gameId, rating, review } = req.body;
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId);
    const userLame = user.username;

    // console.log("***********", user);

    const gameReview = db.Review.build({
      gameId,
      userId,
      rating,
      review,
    });

    const validatorErrors = validationResult(req);
    console.log(validatorErrors);

    if (validatorErrors.isEmpty()) {
      await gameReview.save();
      // res.redirect(`/games/${gameId}`);
      res.json({ review, rating, userLame });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      // console.log("**************", errors);
      res.render("single-game", {
        title: "Game Page",
        gameReview,
        errors,
      });
    }
  })
);

module.exports = router;
