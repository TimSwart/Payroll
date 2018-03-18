var express = require('express');
var router = express.Router();
let db = require('../db_config');

/* GET employee info using employee_id. */
router.get('/:employee_id', async (req, res, next) => {

  const QUERY = 'SELECT * FROM employees WHERE employee_id = ?';
  const PARAMS = [req.params.employee_id];

  try {
    let result = await db.query(QUERY, PARAMS);
    res.json(result);
  } catch(error) {
    console.log('Experienced an error while contacting database...');
    next(error);
  }

});

module.exports = router;
