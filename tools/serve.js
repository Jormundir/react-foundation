var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var clientConfig = require('./webpack.config.js')[0];

clientConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server');
clientConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(clientConfig);

var server = new webpackDevServer(compiler, {
  hot: true,
  noInfo: true,
  publicPath: '/assets/',
  stats: {
    colors: true
  }
});

server.listen(8080);
