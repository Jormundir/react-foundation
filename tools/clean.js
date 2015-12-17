var fse = require('fs-extra');
var path = require('path');

fse.emptyDirSync(path.join(__dirname, '..', 'build'), function(err) {
  if (err) {
    console.log(err);
  }
});
