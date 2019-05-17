const knex = require('knex');

const database = knex({
  client: 'pg',
  version: '11.3',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'airbnb-clone'
  }
});

module.exports = database;