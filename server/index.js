const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.get('/api/listings', (req, res) => {
	database('listings')
	  .then(listings => res.status(200).send(listings))
})

app.post('/api/photos', (req, res) => {
	database('photos')
	  .where({ listing_id: req.body.id })
	  .then(photos => res.status(200).send(photos))
})

app.get('/api/photos', (req, res) => {
	database('photos')
	  .then(photos => res.status(200).send(photos))
})

app.listen(3001);
console.log('server listening on port 3001');