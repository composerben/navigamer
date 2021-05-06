const express = require('express');
const router = express.Router();

const path = require('path');

router.use(express.static(path.join(__dirname, '../public')));
router.use(express.static(path.join(__dirname, '../assets')));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
