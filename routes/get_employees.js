var express = require('express');
var router = express.Router();
let db = require('../db_config');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    db.disconnect();
    let result = await db.query('select * from employees');
    res.json(result);
  } catch(error) {
    console.log('Experienced an error while contacting database...');
    next(error);
  }
});

module.exports = router;
