#!/bin/bash

mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out1.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out2.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out3.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out4.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out5.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out6.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out7.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out8.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out9.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";
mongoimport -d sdc_db -c listings --type csv --file CSV-Mongo-Holder/out10.csv --fields "listings,diningroom,bedroom,livingroom,patio,kitchen,bathroom,entrance";


