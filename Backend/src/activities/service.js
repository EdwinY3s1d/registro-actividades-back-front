const {getConnection}=require('../database')

const getAll = async () => {
  let connection;
  try {
    connection = await getConnection();
    const [rows] = await connection.query('SELECT * FROM activities');
    return rows;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error; 
  } finally {
    if (connection) connection.release();
  }
};

const createActivity = async (activity) => {
  let connection;
  try {
    connection = await getConnection();
    const query = 'INSERT INTO activities SET ?';
    const result = await connection.query(query, activity);
    return result;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error; 
  } finally {
    if (connection) connection.release();
  }
};

module.exports.activitiesService = {
  getAll,
  createActivity
};