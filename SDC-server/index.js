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
  console.log('made it to server');
  db.getPhotos((err, result) => {
    if (err) {
      console.error(err, 'failed in server');
      res.sendStatus(400);
    } else {
      console.log('result returned', result);
      res.send(result);
    }
  });
});

app.listen(port, (err) => {
  if (err) { console.log(err); }
  console.log(`listening on port ${port}`);
});
