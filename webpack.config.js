const path = require('path');

const inputPath = path.join(__dirname, 'client');
const outputPath = path.join(__dirname, 'public');

module.exports = {
  entry: `${inputPath}/src/index.jsx`,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }

};
