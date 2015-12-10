var webpack = require('webpack');
var path = require('path');
var merge = require('lodash').merge;
var fs = require('fs');


var config = {
  context: __dirname,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.ejs$/,
        exlucde: /node_modules/,
        loader: 'file?name=views/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'app']
  }
};

var client = merge({}, config, {
  entry: './app/Client',
  output: {
    path: path.join(__dirname, 'build', 'assets'),
    filename: 'bundle.js'
  }
});


// Hack to make webpack compatible on the node server side (express in particular).
// Tells webpack not to touch node_modules in require statements.
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var server = merge({}, config, {
  entry: './server/App',
  output: {
    path: path.join(__dirname, 'build', 'server'),
    filename: 'app.js'
  },
  target: 'node',
  externals: nodeModules
});

module.exports = [client, server];
