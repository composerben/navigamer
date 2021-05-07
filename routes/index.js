const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const path = require('path');
const db = require("../db/models");
const { loginUser, logoutUser } = require("../auth");
const {
  csrfProtection,
  asyncHandler,
  userValidators,
  loginValidators,
} = require("./utils");

router.use(express.static(path.join(__dirname, '../public')));
router.use(express.static(path.join(__dirname, '../assets')));

/* GET home page. */

router.get("/", asyncHandler(async (req, res, next) => {
  const gamesList = await db.Game.findAll({ limit: 10 })

  res.render("index", {
    title: "Welcome to Navigamer",
    gamesList
  });
}));

router.get("/signup", csrfProtection, (req, res, next) => {
  const user = db.User.build();
  res.render("user-signup", {
    title: "Signup",
    csrfToken: req.csrfToken(),
  });
});

router.post(
  "/signup",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;
    const user = await db.User.build({ username, email });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      const findId = await db.User.findOne({ where: { username } });
      loginUser(req, res, user);
      res.redirect(`/users/${findId.id}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("user-signup", {
        title: "Signup",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get("/login", csrfProtection, (req, res) => {
  res.render("user-login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  });
});

router.post("/login", csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  let errors = [];

  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { username } });
    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
      if (passwordMatch) {
        loginUser(req, res, user);
        const findId = await db.User.findOne({ where: { username } })
        return res.redirect(`/users/${findId.id}`);
      }
    }
    errors.push('Login failed for the provided username and password');
  } else {
    errors = validatorErrors.array().map(error => error.msg);
  }

  res.render('user-login', {
    title: 'Login',
    username,
    errors,
    csrfToken: req.csrfToken(),
  });
}));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});

module.exports = router;
