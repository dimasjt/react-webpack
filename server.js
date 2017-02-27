const path = require('path');

const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/public',
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, function(){
  console.log('listening to 3000');
})
