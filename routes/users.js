const express = require("express");
const router = express.Router();
const path = require("path");
const { asyncHandler } = require("./utils");
const db = require("../db/models");
const session = require("express-session");
const { requireAuth } = require("../auth");

router.use(express.static(path.join(__dirname, "../public")));
router.use(express.static(path.join(__dirname, "../assets")));

router.post("/", asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId

  const { name } = req.body;
  const gameshelf = db.Gameshelf.build({
    name,
    userId
  });

  await gameshelf.save();
  const gameshelfId = gameshelf.id
  // ('**************', id)
  res.json({ name, userId, gameshelfId })
}));

router.get("/:id", requireAuth, asyncHandler(async (req, res) => {
  const gameshelfId = parseInt(req.params.id, 10);
  const sessionUser = req.session.auth;
  let userId;

  // const user = await db.User.findByPk(sessionUser.userId)
  let gameshelves = await db.Gameshelf.findAll({
    where: {
      userId: gameshelfId,
    },
    include: [db.Game, db.User],
    order: ['id']
  });

  let gameshelfOwner = false;
  if (gameshelfId === sessionUser.userId) {
    gameshelfOwner = true;
  }

  if (gameshelves.length === 0) {
    gameshelves = false;
  } else {
    userId = gameshelves[0].User.id
  }

  let gameshelfIdsArr = [];
  for (let i = 0; i < gameshelves.length; i++) {
    gameshelfIdsArr.push(gameshelves[i].id);
  }

  if (!gameshelves) {
    res.render("gameshelves", { gameshelfOwner, sessionUser })
  } else {
    const gameshelf = gameshelves[0].Games
    res.render("gameshelves", { gameshelfIdsArr, gameshelves, gameshelfOwner, gameshelf, sessionUser, userId })
  }
}));

router.get("/:id/add-games-to-gameshelf", requireAuth, asyncHandler(async (req, res) => {
  const gameshelfId = parseInt(req.params.id, 10);
  const sessionUser = req.session.auth;

  const games = await db.Game.findAll({ order: ["gameName"] });
  const gameshelves = await db.Gameshelf.findAll({
    where: {
      userId: sessionUser.userId
    }
  })

  res.render('gameshelf-add-game', {
    games,
    sessionUser,
    gameshelves
  });
}));

// ADD GAME TO GAMESHELF
router.post("/:id/add-games-to-gameshelf", requireAuth, asyncHandler(async (req, res) => {
  const { games, gameshelves } = req.body;
  const userId = req.session.auth.userId;

  if (Array.isArray(games)) {
    async function savePlatforms(input) {
      input.forEach(async (element) => {
        const gameToGameshelf = db.GameToGameshelf.build({
          gameId: element,
          gameshelfId: gameshelves
        })

        await gameToGameshelf.save();
      })
    }
    savePlatforms(games);
  } else {
    console.log('HERE')
    const gameToGameshelf = await db.GameToGameshelf.build({
      gameId: games,
      gameshelfId: gameshelves
    })
    await gameToGameshelf.save();
  }
  res.redirect(`/users/${userId}`);
}));

router.get("/:userId/gameshelves/:gameshelfId", requireAuth, asyncHandler(async (req, res) => {
  const sessionUser = req.session.auth;
  const gameshelfId = parseInt(req.params.gameshelfId, 10);
  const userId = parseInt(req.params.userId, 10);

  let gameshelves = await db.Gameshelf.findAll({
    where: {
      userId: userId,
      id: gameshelfId
    },
    include: db.Game
  });

  let gamesArr = [];
  for (let i = 0; i < gameshelves[0].Games.length; i++) {
    gamesArr.push(gameshelves[0].Games[i])
  }

  res.json({ gameshelves, gamesArr })
}));

module.exports = router;
