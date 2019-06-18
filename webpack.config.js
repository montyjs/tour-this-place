const path = require('path');

const inputPath = path.join(__dirname, 'client');
const outputPath = path.join(__dirname, 'build');

module.exports = {
  entry: `${inputPath}/main.js`,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.es6'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(s?)css$/,
        use: ['isomorphic-style-loader', 'style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
