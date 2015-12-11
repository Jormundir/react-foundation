var webpack = require('webpack');
var path = require('path');
var merge = require('lodash').merge;
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
  context: __dirname,
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } },
      { test: /\.ejs$/, exclude: /node_modules/, loader: 'file?name=views/[name].[ext]' },
      { test: /\.s?css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css', 'sass') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'app']
  }
};


var client = merge({}, config, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/Client'
  ],
  output: {
    path: path.join(__dirname, 'build', 'assets'),
    filename: 'app.js'
  },
  devServer: {
    inline: true,
    hot: true,
    quiet: true,
    contentBase: path.join('.', 'build', 'assets')
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
