const knex = require('knex');
const faker = require('faker');

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

const addListings = (listings) => database('listings').insert(listings)

const seed = (listings, rooms) => {
  database('listings')
    .insert(listings)
    .then(() => {
      database('listings')
        .pluck('id')
        .then(ids => ids.map(id =>{
          for(let i=0; i<20; i++){
            let photo = {
              photoUrl: faker.image.imageUrl(),
              room: rooms[Math.floor(Math.random()*(rooms.length-1))],
              listing_id: id
            }
            database('photos').insert(photo);
          }
        }))
    })
}


module.exports = {
  database,
  addListings,
  seed
};