const knex = require('knex');

const database = knex({
  client: 'pg',
  version: '11.3',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'airbnb-clone'
  }
});

database.schema.createTable('listings', table => {
  table.increments('id');
  table.string('type');
  table.uuid('id').primary()
})

database.schema.createTable('photos', table => {
  table.increments('id');
  table.string('room');
  table.string('photoUrl');
  table.uuid('id').primary()
  table.foreign('listing_id')
    .references('listings.id')
})

const addListings = (listings) => {
  database('listings')
    .insert(listings);
}


module.exports = database;