// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:Safe@localhost/airbnb_clone',
    migrations: {
      directory: __dirname + '/database/migrations',
      seeds: __dirname + '/database/seeds/seed.js'
    }
  }
};
