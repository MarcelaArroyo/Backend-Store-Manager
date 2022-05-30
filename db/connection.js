require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'password',
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;
