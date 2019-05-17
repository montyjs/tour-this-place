const faker = require('faker');
const db = require('./database/index.js');

let rooms = ['living room', 'dining room', 'bathroom', 'bedroom', 'kitchen', 'loft', 'garage'];
let types = ['townhouse', 'villa', 'apartment', 'mansion', 'shack', 'lean-to', 'compound', 'hostel'];


let seedListings = []
let seedPhotos = [];


for(let i=0; i<100; i++) {
	let listing = {
      type: types[Math.floor(Math.random()*(types.length-1))]
	};
	seedListings.push(listing);
	// for(let j=0; j<20; j++) {
	//   let photo = {
	//   	photoUrl: faker.image.imageUrl(),
	//   	room: rooms[Math.floor(Math.random()*(rooms.length-1))],
	//   }
	//   seedPhotos.push(photo);
	// }
}
for(let temp of seedListings){
	console.log(temp);
}
for(let temp of seedPhotos){
	console.log(temp);
}