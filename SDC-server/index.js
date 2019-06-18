require('newrelic');
require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import renderToPage from '../iso-middleware/renderRoute';
import path from 'path';
import cors from 'cors';
import db from '../SDC-database/router.js';
import mongoose from 'mongoose';

const app = express();
const port = process.env.LOCAL_PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const buildPath = path.join(__dirname, '../', 'build');
app.use('/', express.static(buildPath));
app.use(express.static(__dirname));

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

app.get('*', renderToPage);

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

module.exports = app;
