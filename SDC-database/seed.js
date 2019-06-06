const faker = require('faker');
const { pool } = require('./index');

const LIVING_ROOM = [
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Living+Room/img1.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Living+Room/img2.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Living+Room/img3.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Living+Room/img4.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Living+Room/img5.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Living+Room/img6.jpg'
];

const DINING_ROOM = [
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Dining+Room/img1.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Dining+Room/img2.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Dining+Room/img3.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Dining+Room/img4.jpg'
];

const BATHROOM = [
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bathroom/img1.jpg', 
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bathroom/img3.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bathroom/img5.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bathroom/img6.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bathroom/img7.jpg'
];

const BEDROOM = [
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bedroom/img1.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bedroom/img2.jpg', 
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bedroom/img3.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bedroom/img4.jpg', 
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Bedroom/img5.jpg'
];

const KITCHEN = [
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Kitchen/img1.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Kitchen/img2.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Kitchen/img4.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Kitchen/img5.jpg'
];

const PATIO = [
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Patio/img1.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Patio/img2.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Patio/img3.jpg'
];

const ENTRANCE = [
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Entrance/img1.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Entrance/img2.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Entrance/img3.jpg',
  'https://airbnb-tour-photos.s3-us-west-1.amazonaws.com/room_photos/Entrance/img4.jpg'
];

const TYPES = ['Townhouse', 'Villa', 'Apartment', 'Mansion', 'Shack', 'Lean-to', 'Compound', 'Hostel'];

const seed = () => {
  for (let i = 0; i < 100; i++) {

    let data = [TYPES[Math.floor(Math.random() * (TYPES.length))], DINING_ROOM[Math.floor(Math.random() * (DINING_ROOM.length))], BEDROOM[Math.floor(Math.random() * (BEDROOM.length))], LIVING_ROOM[Math.floor(Math.random() * (LIVING_ROOM.length))], PATIO[Math.floor(Math.random() * (PATIO.length))], KITCHEN[Math.floor(Math.random() * (KITCHEN.length))], BATHROOM[Math.floor(Math.random() * (BATHROOM.length))], ENTRANCE[Math.floor(Math.random() * (ENTRANCE.length))]];

    pool.query('INSERT INTO bigboi (listing, diningroom, bedroom, livingroom, patio, kitchen, bathroom, entrance) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', data, (error) => {
      if (error) { throw error; }
    });

  }
};

seed();
