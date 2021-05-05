const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);
const { check } = require("express-validator");

const userValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a username")
    .isLength({ max: 50 })
    .withMessage("Username can't be more than 50 characters long"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please enter an email")
    .isLength({ max: 255 })
    .withMessage("Email can't be more than 255 characters long"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a password"),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Must match password");
      }
      return true;
    }),
];

const loginValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your username'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your password'),
];

const gameRegEx = new RegExp(/(.)*\.(png|jpg)/i)

const addGameValidators = [
  check('gameName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter the title of a game')
    .isLength({ max: 255 })
    .withMessage("Game name can't be more than 255 characters long"),
  check('releaseDate')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid date'),
  check('developer')
    .exists({ checkFalsy: true })
    .withMessage('Please enter the developer of the game')
    .isLength({ max: 255 })
    .withMessage("Developer name can't be more than 50 characters long"),
  check('imgUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please enter an image url associated with the game')
    .isLength({ max: 255 })
    .withMessage("Developer name can't be more than 50 characters long")
    .custom((value, { req }) => {
      if (!gameRegEx.test(value)) {
        throw new Error("Must be a valid image (jpg/png)");
      }
      return true;
    }),
  ];


module.exports = {
  csrfProtection,
  asyncHandler,
  userValidators,
  loginValidators,
  addGameValidators
};
