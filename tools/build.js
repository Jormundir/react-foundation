var path = require('path');

var webpack = require('webpack');
var config = require(path.join(__dirname, 'webpack.config.js'));

var bundler = webpack(config);
bundler.run(function(stats, err) {
  if (err) {
    console.log(err);
  }
});
