var express = require('express');
var router = express.Router();
let db = require('../db_config');

/* GET home page. */
router.get('/', async (req, res, next) => {

  const COLUMNS = ['employee_id', 'first_name', 'last_name'];
  const QUERY = 'SELECT ' + COLUMNS.join(',') + ' FROM employees';

  try {
    let result = await db.query(QUERY);
    res.json(result);
  } catch(error) {
    console.log('Experienced an error while contacting database...');
    next(error);
  }
});

module.exports = router;
