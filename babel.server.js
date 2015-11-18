// Babel will transpile all required files from ES6 -> ES5, JSX -> JS
require('babel-core/register')({
  presets: ['es2015', 'react']
});

// Run the server
require('./server/app');
