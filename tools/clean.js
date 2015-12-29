//
// Remove everything from the build directory
//
// Makes sure files that will no longer be part of a build
// do not hang around in the build directory.
//

var fse = require('fs-extra');
var path = require('path');

fse.emptyDirSync(path.join(__dirname, '..', 'build'), function(err) {
  if (err) {
    console.log(err);
  }
});
