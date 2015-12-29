var webpack = require('webpack');
var serverConfig = require('./webpack.config.js')[1];

var compiler = webpack(serverConfig);

compiler.watch({}, function(error, stats) {
  if (error) {
    console.error(error);
  } else {
    console.log('build complete');
  }
});
