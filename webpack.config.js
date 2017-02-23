const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = config;
