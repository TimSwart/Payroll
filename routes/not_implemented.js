var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('pages/index', {
    "message_header" : "Not Implemented",
    "message_body" : "Sorry, it appears this feature is not yet implemented."
  });
});

module.exports = router;
