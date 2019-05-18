/*________________________Building Data____________________________*/
const faker = require('faker');


const rooms = ['living room', 'dining room', 'bathroom', 'bedroom', 'kitchen', 'loft', 'garage'];
const types = ['townhouse', 'villa', 'apartment', 'mansion', 'shack', 'lean-to', 'compound', 'hostel'];


let seedListings = [];


for(let i=0; i<100; i++) {
  let listing = {
    type: types[Math.floor(Math.random()*(types.length-1))]
  };
  seedListings.push(listing);
}
/*________________________Seeding Data____________________________*/
exports.seed = function(knex, Promise) {
  return knex('photos').del()
    .then(() => knex('listings').del())
    .then(() => {
      return Promise.all([
        knex('listings').insert(seedListings)
          .then((listing) => {
            photos = [];
            for(let i=0; i<20; i++) {
              photo = {
                photoUrl: faker.image.imageUrl(),
                room: rooms[Math.floor(Math.random()*rooms.length-1)],
                listing_id: listing[0]
              }
              photos.push(photo);
            }
            return knex('photos').insert(photos)
          })
          .catch(err => console.log(err))
      ])
    })
    .catch(err => console.log(err));
};
