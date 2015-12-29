//
// Create a fresh server build (clean, copy, watch),
// Start backend express server with nodemon watching for changes (watch)
// Start static asset hot module development server (serve)
//

var path = require('path');
var async = require('async');


require(path.join(__dirname, 'clean'));
require(path.join(__dirname, 'copy'));

async.parallel([
  require(path.join(__dirname, 'watch')),
  require(path.join(__dirname, 'serve'))
], function(err, results) {
  if (err) {
    console.error(err);
  }
});
