const express = require("express");
const router = express.Router();

const path = require("path");

const { asyncHandler } = require("./utils");
const db = require("../db/models");
const session = require("express-session");

router.use(express.static(path.join(__dirname, "../public")));
router.use(express.static(path.join(__dirname, "../assets")));

router.get("/", asyncHandler(async (req, res) => {
  const gameshelfId = parseInt(req.params.id, 10);
  const sessionUser = req.session.auth;
  console.log(sessionUser);
  
  if (sessionUser) {
    console.log(sessionUser.userId);
    const gameshelves = await db.Gameshelf.findAll();
    res.render("gameshelves", { gameshelves, sessionUser });
  } else {
    res.redirect('/login')
  }
}));
router.get("/:id", asyncHandler(async (req, res) => {
    const gameshelfId = parseInt(req.params.id, 10);
    const sessionUser = req.session.auth;
    console.log(sessionUser);
    
    if (sessionUser) {
      console.log(sessionUser.userId);
      const gameshelves = await db.Gameshelf.findAll({
        where: {
          userId: gameshelfId,
        },
      });
      res.render("gameshelves", { gameshelves, sessionUser });
    } else {
      res.redirect('/login')
    }
  })
);

module.exports = router;
