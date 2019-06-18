# Service RPS 
## Set Up / Config Details

```
require('dotenv').config();
const mongoose = require('mongoose');

let photosSchema = mongoose.Schema({
    listings: String,
    diningroom: String,
    bedroom: String,
    livingroom: String,
    patio: String,
    kitchen: String,
    bathroom: String,
    entrance: String
  });

  const Photos = mongoose.model('listings', photosSchema);

  let getPhotos = (cb) => {
    let listings = ['Townhouse', 'Villa', 'Apartment', 'Mansion', 'Shack', 'Lean-to', 'Compound', 'Hostel'];
    let random = listings[Math.floor(Math.random() * 8)];
    Photos.find({listings: random}).limit(1).exec((err, docs) => {
      if (err) { throw (err); }
      cb(err, docs[0]);
    });
  };

  module.exports = {
    getPhotos,
  };

```

## Sample Results

[Loadtest Results](https://imgur.com/a/3Hm0bn8).