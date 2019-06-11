require('dotenv').config();
const { Pool } = require('pg');
const mongoose = require('mongoose');

if (process.env.DB_ENV === 'postgres') {
  
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
        throw error;
      } else {
        cb(error, results.rows[0]);
      }
    });
  };
  
  module.exports = {
    pool,
    getPhotos,
  };

} else if (process.env.DB_ENV === 'mongo') {

  let photosSchema = mongoose.Schema({
    listings: String,
    diningroom: String,
    bedroom: String,
    livingroom: String,
    patio: String,
    kitchen: String,
    bathroom: String,
    entrance: String
  });

  let Photos = mongoose.model('listings', photosSchema);

  let getPhotos = (cb) => {
    Photos.find({listings: 'Mansion'}).limit(1).exec((err, docs) => {
      if (err) { throw (err); }
      cb(err, docs[0]);
    });
  };

  module.exports = {
    getPhotos,
  };

}  

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

// let photosSchema = mongoose.Schema({
//   listings: String,
//   diningroom: String,
//   bedroom: String,
//   livingroom: String,
//   patio: String,
//   kitchen: String,
//   bathroom: String,
//   entrance: String
// });

// let Photos = mongoose.model('Photos', photosSchema);

// let save = (data) => {
//   data.map(data => {
//     let entry = new Photos(data);
//     entry.save((err) => {
//       if (err) { console.error(err); }
//     });
//   });
// };

// let getPhotos = (cb) => {
//   Photos.find().sort({$natural: -1}).limit(25).exec((err, docs) => {
//     if (err) { console.error(err); }
//     cb(err, docs);
//   });
// };