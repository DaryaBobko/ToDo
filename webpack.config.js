var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'dist'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'es2015', 'react', 'react-hmre' ]
            }
          }, 
          {
            loader: 'eslint-loader'
          }
        ]
      }, {
        test: /\.scss/,
        use:['style-loader', 'css-loader', 'sass-loader',] 
      }
    ]
  }
};


module.exports = config;