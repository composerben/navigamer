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

    (sessionUser);
    if (sessionUser) {
      res.render("add-game", {
        title: "Add Game",
        game,
        csrfToken: req.csrfToken(),
        sessionUser,
        platforms,
        primaryPlatforms
      });
    } else {
      res.redirect('/login')
    }
  })
);

router.post(
  "/add-game",
  csrfProtection,
  addGameValidators,
  asyncHandler(async (req, res) => {
    console.log(req.body)
    const { gameName, bio, releaseDate, developer, imgUrl, platformId } = req.body;
    const sessionUser = req.session.auth;
    const game = db.Game.build({
      gameName,
      releaseDate,
      developer,
      imgUrl,
      bio
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

// Get REVIEWS on single-game page
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
    let userList = [];

    if (game.Reviews[0] !== undefined) {
      for (i = 0; i < game.Reviews.length; i++) {
        userId = game.Reviews[i].userId;
        userList.push(userId);
        user = await db.User.findByPk(userId);
        userLame.push(user.username);
      }
    }

    if (sessionUser) {
      userId = sessionUser.userId;
    }
    const gameId = req.params.id;
    const platforms = game.Platforms;
    const reviews = game.Reviews;
    let reviewByUser;
    
    reviews.forEach(review => {
      if (userId === review.userId) {
        reviewByUser = review
      }
    })

    res.render("single-game", {
      title: "All Games",
      game,
      platforms,
      reviews,
      gameId,
      userId,
      userLame,
      userList,
      sessionUser,
      reviewByUser
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
    console.log(gameId, userId, rating, review);

    const gameReview = db.Review.build({
      gameId,
      userId,
      rating,
      review,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await gameReview.save();
      res.json({ review, rating, userLame });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("single-game", {
        title: "Game Page",
        gameReview,
        errors,
      });
    }
  })
);

// EDIT ROUTE
router.put("/:id(\\d+)", asyncHandler( async (req, res) => {
  console.log(req.body);
  const { gameId, rating, review, reviewId } = req.body;
  const { userId } = req.session.auth;

  const currentReview = await db.Review.findByPk(reviewId);
  currentReview.rating = rating;
  currentReview.review = review;
  
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await currentReview.save();
    res.json({ review, rating, reviewId });
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render("single-game", {
      title: "Game Page",
      gameReview,
      errors,
    });
  }
}));

// DELETE ROUTE
router.delete("/:id(\\d+)", asyncHandler( async (req, res) => {
  const review = await db.Review.findByPk(req.body.reviewId);
  await review.destroy();

  return review;
}));

module.exports = router;
