DROP DATABASE IF EXISTS sdc_airbnb;

CREATE DATABASE sdc_airbnb;

\c sdc_airbnb;

DROP TABLE IF EXISTS bigboi;

CREATE TABLE bigboi (
  id bigserial,
  listings varchar(200) NOT NULL,
  diningroom varchar(200) NOT NULL,
  bedroom varchar(200) NOT NULL,
  livingroom varchar(200) NOT NULL,
  patio varchar(200) NOT NULL,
  kitchen varchar(200) NOT NULL,
  bathroom varchar(200) NOT NULL,
  entrance varchar(200) NOT NULL
);

GRANT ALL PRIVILEGES ON TABLE bigboi TO sdcmanager;
GRANT USAGE, SELECT ON SEQUENCE bigboi_id_seq TO sdcmanager;
CREATE INDEX listing_id ON bigboi (id);
