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
  
  if (sessionUser) {
    const gameshelves = await db.Gameshelf.findAll();
    res.render("gameshelves", { gameshelves, sessionUser });
  } else {
    res.redirect('/login')
  }
}));
router.get("/:id", asyncHandler(async (req, res) => {
    const gameshelfId = parseInt(req.params.id, 10);
    const sessionUser = req.session.auth;
    
    if (sessionUser) {
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

module.exports = router;
