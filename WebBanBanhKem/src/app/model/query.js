const mysql = require("mysql2/promise");
const config = require("../../config/db/DbConnect");

 async function DbQuery(sql) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.query(sql);
  return results;
}

module.exports = {DbQuery,};