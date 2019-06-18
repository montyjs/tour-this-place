process.env.NODE_ENV = 'development';
require('dotenv').config();

require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: ['@babel/preset-env']
});

require('./index.js');