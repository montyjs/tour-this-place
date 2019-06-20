const createCsvWriter = require('csv-writer').createObjectCsvWriter;

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

let data = {
  _id: '',
  listings: TYPES[Math.floor(Math.random() * (TYPES.length))], 
  diningroom: DINING_ROOM[Math.floor(Math.random() * (DINING_ROOM.length))], 
  bedroom: BEDROOM[Math.floor(Math.random() * (BEDROOM.length))], 
  livingroom: LIVING_ROOM[Math.floor(Math.random() * (LIVING_ROOM.length))], 
  patio: PATIO[Math.floor(Math.random() * (PATIO.length))], 
  kitchen: KITCHEN[Math.floor(Math.random() * (KITCHEN.length))], 
  bathroom: BATHROOM[Math.floor(Math.random() * (BATHROOM.length))], 
  entrance: ENTRANCE[Math.floor(Math.random() * (ENTRANCE.length))]
};


const seed = (count) => {
  let dataEntries = [];
  
  let csvWriter = createCsvWriter({  
    path: `CSV-Mongo-Holder/out${count}.csv`,
    header: ['_id', 'listings', 'diningroom', 'bedroom', 'livingroom', 'patio', 'kitchen', 'bathroom', 'entrance']
  });

  for (let i = 0; i < 1000000; i++) {
    //manipulating the data variable instead of reinstantiating it each loop saves memory
    let id;
    if (count < 11) {
      id = i + (1000000 * (count - 1));
    }
    data = {
      _id: id,
      listings: TYPES[Math.floor(Math.random() * (TYPES.length))],
      diningroom: DINING_ROOM[Math.floor(Math.random() * (DINING_ROOM.length))],
      bedroom: BEDROOM[Math.floor(Math.random() * (BEDROOM.length))],
      livingroom: LIVING_ROOM[Math.floor(Math.random() * (LIVING_ROOM.length))],
      patio: PATIO[Math.floor(Math.random() * (PATIO.length))],
      kitchen: KITCHEN[Math.floor(Math.random() * (KITCHEN.length))],
      bathroom: BATHROOM[Math.floor(Math.random() * (BATHROOM.length))],
      entrance: ENTRANCE[Math.floor(Math.random() * (ENTRANCE.length))]
    };
    dataEntries.push(data);
  }
  
  csvWriter  
    .writeRecords(dataEntries)
    .then(()=> {
      count++;
    })
    .then(()=> {
      if (count > 10) {
        console.log('10 million of 10 million entries created: SEEDING COMPLETE');
        return;
      } else {
        console.log(`${(count - 1)}million of 10 million entries created`);
        seed(count);
      }
    });
};


seed(1);
