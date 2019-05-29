// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:Safe@localhost/airbnb_clone_tour',
    migrations: {
      directory: __dirname + '/database/migrations',
      seeds: __dirname + '/seeds/seed.js'
    }
  }
};
