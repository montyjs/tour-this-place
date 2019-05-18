const db = require('../index.js');

exports.up = function(knex, Promise) {
  return Promise.all([
  	 knex.schema.createTable('listings', table => {
      table.increments('id').primary()
      table.string('type')
    }),
    knex.schema.createTable('photos', table => {
      table.increments('id').primary()
      table.string('room')
      table.text('photoUrl')
      table.integer('listing_id')
      table.foreign('listing_id').references('listings.id')
    })
  ]);
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('photos'),
  knex.schema.dropTable('listings')
};
