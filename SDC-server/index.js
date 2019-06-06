require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../SDC-database/index.js');

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

app.listen(port, (err) => {
  if (err) { console.log(err); }
  console.log(`listening on port ${port}`);
});
