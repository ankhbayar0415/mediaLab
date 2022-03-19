const mysql = require("mysql2/promise");

const config = require("../config");

const db = mysql.createPool({
  user: config.database.mysql.user,
  host: config.database.mysql.host,
  password: config.database.mysql.password,
  database: config.database.mysql.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;
