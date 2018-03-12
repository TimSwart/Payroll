const mysql = require('promise-mysql');

const DB = () => {
  let _pool = null;

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

  let disconnect = () => {
    if (_pool == null) {
      console.log("No DB connection to disconnect");
    } else {
      console.log("Disconnecting from DB...");
      _pool.end();
      _pool = null;
    }
  }

  let query = async (q) => {
    let conn =  await _pool.getConnection();
    let res = await conn.query(q);
    return res;
  }

  return {
    connect : connect,
    disconnect : disconnect,
    query : query
  };

}

module.exports = DB();
