var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('pages/index', {
    "message_header" : "Welcome!",
    "message_body" : "Hope you enjoy this template!"
  });
});

module.exports = router;
