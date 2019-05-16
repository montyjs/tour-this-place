DROP DATABASE IF EXISTS "airbnb-clone";
CREATE DATABASE "airbnb-clone";

\c "airbnb-clone";

CREATE TABLE listings
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  type VARCHAR(60) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE photos
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  photoUrl TEXT,
  room VARCHAR(35),
  listing_id uuid REFERENCES listings (id),
  PRIMARY KEY (id)
);