/*________________________Building Data____________________________*/
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

const ROOMS = Promise.all([[LIVING_ROOM, 'Living Room'], [DINING_ROOM, 'Dining Room'], [BATHROOM, 'Bathroom'], [BEDROOM, 'Bedroom'], [KITCHEN, 'Kitchen'], [PATIO, 'Patio'], [ENTRANCE, 'Entrance']]);
const TYPES = ['Townhouse', 'Villa', 'Apartment', 'Mansion', 'Shack', 'Lean-to', 'Compound', 'Hostel'];

let seedListings = [];

for(let i=0; i<100; i++) {
  let listing = {
    type: TYPES[Math.floor(Math.random()*(TYPES.length-1))]
  };
  seedListings.push(listing);
}
/*________________________Seeding Data____________________________*/
exports.seed = function(knex, Promise) {
  return ROOMS
    .then(rooms => {
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
                  let ranRoom = rooms[Math.floor(Math.random()*(rooms.length-1))]
                  let url = ranRoom[0][Math.floor(Math.random()*(ranRoom[0].length-1))]
                  photo = {
                    photoUrl: url,
                    room: ranRoom[1],
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
    });
};