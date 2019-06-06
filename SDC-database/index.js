require('dotenv').config();
const { Pool } = require('pg');

const pool = process.env.NODE_ENV === 'production' ? new Pool({ connectionString }) : new Pool({
  user: process.env.LOCAL_USER,
  host: process.env.LOCAL_HOST,
  database: process.env.LOCAL_DATABASE,
  password: process.env.LOCAL_PASSWORD,
  port: 5432,
});

const getPhotos = (cb) => {
  let number = Math.floor(Math.random() * 99);
  pool.query(`SELECT * FROM bigboi WHERE id = ${number}`, (error, results) => {
    if (error) {
      console.error('database index.js', error);
      throw error;
    } else {
      console.log('database index', results);
      cb(error, results);
    }
  });
};

module.exports = {
  pool,
  getPhotos,
};
