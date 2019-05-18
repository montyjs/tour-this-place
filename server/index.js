const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');

let app = express();


app.use(express.static(__dirname + 'public'))

app.get('/api/listings', (req, res) => {
	database('listings')
	  .then((listings) => res.status(200).send(listings))
})

app.listen(3001);