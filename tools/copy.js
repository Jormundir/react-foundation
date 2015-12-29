//
// Copy server views into the build directory
//
// We do this with a separate script because they don't
// need to go through webpack.
//

var fse = require('fs-extra');
var path = require('path');

fse.copySync(
  path.join(__dirname, '..', 'server', 'views'),
  path.join(__dirname, '..', 'build', 'server', 'views'),
  {},
  function(err) {
    if (err) {
      console.log(err);
    }
  }
);
