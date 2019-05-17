const db = require('./database/index.js');

let rooms = ['living room', 'dining room', 'bathroom', 'bedroom', 'kitchen', 'loft', 'garage'];
let types = ['townhouse', 'villa', 'apartment', 'mansion', 'shack', 'lean-to', 'compound', 'hostel'];


let seedListings = [];


for(let i=0; i<100; i++) {
  let listing = {
    type: types[Math.floor(Math.random()*(types.length-1))]
  };
  seedListings.push(listing);
}
db.seed(seedListings, rooms);

