const express = require("express");
const router = express.Router();

const path = require("path");

const { asyncHandler } = require("./utils");
const db = require("../db/models");

router.use(express.static(path.join(__dirname, "../public")));
router.use(express.static(path.join(__dirname, "../assets")));

/* GET users listing. */
router.get(
  "/(\\d+)",
  asyncHandler(async (req, res, next) => {
    const sessionUser = req.session.auth;
    const gameshelves = await db.Gameshelf.findAll({
      where: {
        userId: sessionUser.userId,
      },
    });
    res.render("gameshelves", { gameshelves });
  })
);

module.exports = router;
