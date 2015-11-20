var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './Client',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'app']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
