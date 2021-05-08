const express = require("express");
const router = express.Router();
const path = require("path");

const { asyncHandler } = require("./utils");
const db = require("../db/models");
const session = require("express-session");
const { requireAuth } = require("../auth");

router.use(express.static(path.join(__dirname, "../public")));
router.use(express.static(path.join(__dirname, "../assets")));

router.get("/", requireAuth, asyncHandler(async (req, res) => {
  const sessionUser = req.session.auth;
  
  const user = await db.User.findByPk(sessionUser.userId)
  let gameshelves = await db.Gameshelf.findAll({
    where: {
      userId: sessionUser.userId,
    },
  });
  
  let gameshelfOwner = true;

  if (gameshelves.length < 1) {
    gameshelves = false;
  }

  if (!gameshelves) {
    res.render("gameshelves", { gameshelfOwner, sessionUser })
  } else {
    res.render("gameshelves", { gameshelfOwner, gameshelves, sessionUser })
  }
}));

router.post("/", asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId

  const { name } = req.body;

  const gameshelf = db.Gameshelf.build({
    name,
    userId
  });

  // const validatorErrors = validationResult(req);
  
  // if (validatorErrors.isEmpty()) {
    await gameshelf.save();
    res.json({ name, userId })
    // res.redirect('/users/')
  // } else {
  //   const errors = validatorErrors.array().map((error) => error.msg);
  //   res.render("add-game", {
  //     title: "Add Game",
  //     game,
  //     errors,
  //     csrfToken: req.csrfToken(),
  //   });
}));

router.get("/:id", requireAuth, asyncHandler(async (req, res) => {
  const gameshelfId = parseInt(req.params.id, 10);
  const sessionUser = req.session.auth;
  
  const user = await db.User.findByPk(sessionUser.userId)
  let gameshelves = await db.Gameshelf.findAll({
    where: {
      userId: gameshelfId,
    },
    include: db.Game
  });
  
  let gameshelfOwner = false;
  if (gameshelfId === sessionUser.userId) {
    gameshelfOwner = true;
  }

  if (gameshelves.length < 1) {
    gameshelves = false;
  }

  if (!gameshelves) {
    res.render("gameshelves", { gameshelfOwner, sessionUser })
  } else {
    const gameshelf = gameshelves[0].Games
    res.render("gameshelves", { gameshelfOwner, gameshelf, sessionUser })
  }
}));

module.exports = router;
