const mysql = require('promise-mysql');

const DB = () => {
  let _pool = null;

  /**
   * Connects to MySQL database using connection values provided in .env file,
   * creates connection pool
   */
  let connect = () => {
    if (_pool == null) {
      console.log("Connecting to DB...");
      _pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: process.env.DB_CONNECTIONLIMIT
      });
    } else {
      console.log("Already connected to DB");
    }
  }

  /**
   * Disconnect from MySQL database
   */
  let disconnect = () => {
    if (_pool == null) {
      console.log("No DB connection to disconnect");
    } else {
      console.log("Disconnecting from DB...");
      _pool.end();
      _pool = null;
    }
  }

  /**
   * Query database with provided query and optional list of parameters,
   * parameter values in query should be substituted with '?' so that
   * proper string escaping can be performed
   * Example: q = 'SELECT * FROM employees WHERE employee_id = ?', p = [1]
   */
  let query = async (q, p) => {
    p = (p === undefined ? [] : p);
    let conn =  await _pool.getConnection();
    let res = await conn.query(q, p);
    return res;
  }

  /**
   * Return block below defines which of the DB object attributes are
   * accessible to the caller
   */
  return {
    connect : connect,
    disconnect : disconnect,
    query : query
  };

}

module.exports = DB();
