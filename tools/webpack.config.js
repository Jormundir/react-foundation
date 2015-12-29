var webpack = require('webpack');
var path = require('path');
var merge = require('lodash').merge;
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
  context: path.join(__dirname, '..'),
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } },
      { test: /\.s?css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css', 'sass') }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'app']
  }
};


var client = merge({}, config, {
  entry: [
    './app/Client'
  ],
  output: {
    path: path.join(__dirname, '..', 'build', 'assets'),
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
});


// HACK
// Make webpack compatible on the node server side (express in particular).
// Tells webpack not to include binaries in the bundle (they're not valid
// node scripts, throwing errors when they're loaded at runtime).
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
// ENDHACK

var server = merge({}, config, {
  entry: './server/App',
  output: {
    path: path.join(__dirname, '..', 'build', 'server'),
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: nodeModules,
});

module.exports = [client, server];
