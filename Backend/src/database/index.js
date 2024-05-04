const mysql = require('mysql2/promise');
const { Config } = require('../config'); 
const debug = require('debug')('app:module-database');

// Crea el pool de conexiones una vez
const pool = mysql.createPool({
  host: Config.hostname,
  user: Config.username,
  password: Config.password,
  database: Config.dbName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Exporta una función que obtiene una conexión del pool
module.exports.getConnection = async () => {
  try {
    const connection = await pool.getConnection();
    debug('Successfully connected to database');
    return connection;
  } catch (error) {
    debug('Database connection failed: ', error);
    throw error;
  }
};