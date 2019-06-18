const path = require('path');

const inputPath = path.join(__dirname, 'shared');
const outputPath = path.join(__dirname, 'build');

module.exports = {
  entry: `${inputPath}/App.jsx`,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }

};
