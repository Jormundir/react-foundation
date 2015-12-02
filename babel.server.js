// Babel will transpile all required files from ES6 -> ES5, JSX -> JS
require('babel-core/register')({
  presets: ['es2015', 'react']
});

// Run the server
try {
  require('./server/app');
} catch(error) {
  console.error(error.stack);
}
