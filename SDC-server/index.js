require('newrelic');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../SDC-database/router.js');
const mongoose = require('mongoose');

const app = express();
const port = process.env.LOCAL_PORT;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/photos', (req, res) => {
  db.getPhotos((err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

if (process.env.DB_ENV === 'postgres') {
  app.listen(port, (err) => {
    if (err) { console.log(err); }
    console.log(`listening on port ${port}`);
  });
} else {
  if (process.env.DB_AWS === 'yes') {
    mongoose.connect(process.env.AWS_CONN_STRING_FULL, { useNewUrlParser: true }, (error)=> {
      if (error) { return console.error(error); }
      app.listen(port, (err) => {
        if (err) { console.log(err); }
        console.log(`listening on port ${port}`);
      });
    });
  } else if (process.env.DB_AWS === 'no') {
    mongoose.connect('mongodb://localhost/sdc_db', { useNewUrlParser: true }, (error)=> {
      if (error) { return console.error(error); }
      app.listen(port, (err) => {
        if (err) { console.log(err); }
        console.log(`listening on port ${port}`);
      });
    });
  }
}
