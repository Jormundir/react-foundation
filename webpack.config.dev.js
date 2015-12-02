var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    './Client'
  ],
  stats: {
    colors: true,
    reasons: true,
    timings: true
  },
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
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'app']
  },
  output: {
    path: path.join(__dirname, 'build', 'scripts'),
    publicPath: 'http://localhost:8080/assets/scripts/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'build',
    hot: true,
    inline: true,
    historyApiFallback: true,
    quiet: true
  }
};
