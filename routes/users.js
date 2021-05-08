const express = require("express");
const router = express.Router();
const path = require("path");

const { asyncHandler } = require("./utils");
const db = require("../db/models");
const session = require("express-session");
const { requireAuth } = require("../auth");
const { Console } = require("console");

router.use(express.static(path.join(__dirname, "../public")));
router.use(express.static(path.join(__dirname, "../assets")));

// router.get("/", requireAuth, asyncHandler(async (req, res) => {
//   const sessionUser = req.session.auth;
//   const user = await db.User.findByPk(sessionUser.userId)
//   let gameshelves = await db.Gameshelf.findAll({
//     where: {
//       userId: sessionUser.userId,
//     },
//   });
  
//   let gameshelfOwner = true;
  
//   if (gameshelves.length < 1) {
//     gameshelves = false;
//   }

//   // console.log(!gameshelves)

//   if (!gameshelves) {
//     res.render("gameshelves", { gameshelfOwner, sessionUser })
//   } else {
//     const gameshelf = gameshelves
//     // console.log(gameshelf)
//     res.render("gameshelves", { gameshelf, gameshelfOwner, gameshelves, sessionUser })
//   }
// }));

router.post("/", asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId

  const { name } = req.body;
  const gameshelf = db.Gameshelf.build({
    name,
    userId
  });
  // console.log(gameshelf)
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
  console.log(gameshelves)
  
  if (!gameshelves) {
    res.render("gameshelves", { gameshelfOwner, sessionUser })
  } else {
    const gameshelf = gameshelves[0].Games
    res.render("gameshelves", { gameshelves, gameshelfOwner, gameshelf, sessionUser })
  }
}));

router.get("/:id/add-games-to-gameshelf", requireAuth, asyncHandler(async (req, res) => {
  const gameshelfId = parseInt(req.params.id, 10);
  const sessionUser = req.session.auth;
  
  const games = await db.Game.findAll({ order: ["gameName"] });

  res.render('gameshelf-add-game', {
    games
  });
  // let gameshelfOwner = false;
  // if (gameshelfId === sessionUser.userId) {
  //   gameshelfOwner = true;
  // }
  
  // if (gameshelves.length < 1) {
  //   gameshelves = false;
  // }
  // console.log(gameshelves)
  
  // if (!gameshelves) {
  //   res.render("gameshelves", { gameshelfOwner, sessionUser })
  // } else {
  //   const gameshelf = gameshelves[0].Games
  //   res.render("gameshelves", { gameshelves, gameshelfOwner, gameshelf, sessionUser })
  // }
}));

module.exports = router;
