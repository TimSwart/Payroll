var express = require('express');
var router = express.Router();
let db = require('../db_config');

/* GET employee info using employee_id. */
router.get('/:employee_id/:from/:to', async (req, res, next) => {

  const COLUMNS = ["DATE_FORMAT(date, '%m-%d-%Y') as 'date'", "hours", "pay_rate"];
  const QUERY = "SELECT " + COLUMNS.join(",") + " FROM work_log WHERE employee_id = ? AND date BETWEEN ? AND ?";
  const PARAMS = [req.params.employee_id, req.params.from, req.params.to];

  try {
    let result = await db.query(QUERY, PARAMS);
    res.json(result);
  } catch(error) {
    console.log('Experienced an error while contacting database...');
    next(error);
  }

});

module.exports = router;
