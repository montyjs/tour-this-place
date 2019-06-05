// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://jordan:Safe@localhost/airbnb_clone_tour',
    migrations: {
      directory: __dirname + '/database/migrations',
      seeds: __dirname + '/seeds/seed.js'
    }
  },
  production: {
    client: 'pg',
    connection: 'http://airbnb-tour.c13ufv3uqugk.us-west-1.rds.amazonaws.com/',
    migrations: {
      directory: __dirname + '/database/migrations',
      seeds: __dirname + '/seeds/seed.js'
    }
  }
};
