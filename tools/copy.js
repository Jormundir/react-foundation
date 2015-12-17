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
