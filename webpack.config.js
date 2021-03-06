var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './main.js',
  output: { path: __dirname, filename: './client.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
