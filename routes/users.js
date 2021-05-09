const express = require("express");
const router = express.Router();
const path = require("path");
const { asyncHandler } = require("./utils");
const db = require("../db/models");
const session = require("express-session");
const { requireAuth } = require("../auth");

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
  
  await gameshelf.save();
  const gameshelfId = gameshelf.id
  // console.log('**************', id)
    res.json({ name, userId, gameshelfId })

}));

router.get("/:id", requireAuth, asyncHandler(async (req, res) => {
  const gameshelfId = parseInt(req.params.id, 10);
  const sessionUser = req.session.auth;
  
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
  const userId = gameshelves[0].User.id
  
  if (gameshelves.length < 1) {
    gameshelves = false;
  }
  
  let gameshelfIdsArr = [];
  for(let i = 0; i < gameshelves.length; i++) {
    gameshelfIdsArr.push(gameshelves[i].id);
  }
  console.log(gameshelves);
  
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
  // console.log(gameshelves);
  
  // console.log(gameshelves[0].Games)
  let gamesArr = [];
  for (let i = 0; i < gameshelves[0].Games.length; i++) {
    gamesArr.push(gameshelves[0].Games[i])
  }
  console.log(gamesArr)

  res.json({ gameshelves, gamesArr })
}));

module.exports = router;
