const express = require("express");
const router = express.Router();

const path = require("path");

const { asyncHandler } = require("./utils");
const db = require("../db/models");
const session = require("express-session");

router.use(express.static(path.join(__dirname, "../public")));
router.use(express.static(path.join(__dirname, "../assets")));

/* GET users listing. */
router.get(
  "/(\\d+)",
  asyncHandler(async (req, res, next) => {
    const sessionUser = req.session.auth;
    
    if (sessionUser) {
      console.log(sessionUser.userId);
      const gameshelves = await db.Gameshelf.findAll({
        where: {
          userId: sessionUser.userId,
        },
      });
      res.render("gameshelves", { gameshelves, sessionUser });
    } else {
      res.redirect('/login')
    }
  })
);

module.exports = router;
