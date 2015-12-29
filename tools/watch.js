//
// Create a server bundle, and watch modules for changes,
// when the first bundle is built, nodemon starts the express
// server, restarting when there are changes.
//

module.exports = function() {

  var nodemon = require('nodemon');
  var path = require('path');
  var webpack = require('webpack');
  var serverConfig = require('./webpack.config.js')[1];

  var compiler = webpack(serverConfig);

  compiler.watch({}, function(error, stats) {
    if (error) {
      console.error(error);
    } else {
      console.log('Server build complete');
      console.log('Starting nodemon express server');
      nodemon({
        script: path.join(__dirname, '..', 'build', 'server', 'app.js'),
        watch: [path.join(__dirname, '..', 'build', 'server', 'app.js')]
      });
    }
  });

};
