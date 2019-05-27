/*________________________Building Data____________________________*/
const faker = require('faker');


const rooms = ['Living room', 'Dining room', 'Bathroom', 'Bedroom', 'Kitchen', 'Loft', 'Garage', 'Garden', 'Man cave', 'Porch'];
const types = ['Townhouse', 'Villa', 'Apartment', 'Mansion', 'Shack', 'Lean-to', 'Compound', 'Hostel'];


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
      return Promise.all(seedListings.map(listing => {
        return knex('listings').insert(listing);
      }))
    })
    .then(() => {
      return knex('listings')
        .pluck('id')
        .then(ids=> {
          let temp = [];
          ids.map((id) => {
            for(let i=0;i<20+Math.random()*30;i++) {
              photo = {
                photoUrl: faker.image.imageUrl(),
                room: rooms[Math.floor(Math.random()*(rooms.length-1))],
                listing_id: id
              }
              temp.push(photo)
            }
          })
          return temp;
        })
    })
    .then((photos) => Promise.all(photos.map(photo => {
      if (photo.room) return knex('photos').insert(photo);
    })))
};