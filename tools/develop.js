//
// Create a fresh server build (clean, copy, watch),
// Start backend express server with nodemon watching for changes (watch)
// Start static asset hot module development server (serve)
//

var path = require('path');
var childProcess = require('child_process');


function start_process() {
  var child = childProcess.spawn.apply(this, arguments);
  child.stdout.on('data', function(data) {
    process.stdout.write(data);
  });
  child.stderr.on('data', function(data) {
    process.stderr.write(data);
  });
}


require(path.join(__dirname, 'clean'));
require(path.join(__dirname, 'copy'));

start_process('node', [path.join(__dirname, 'watch')]);
start_process('node', [path.join(__dirname, 'serve')]);
