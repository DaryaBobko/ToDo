var webpack = require('webpack');
var path = require('path');

var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[hash].js',
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
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
      }, 
      {
        test: /\.scss$/,
        use:['style-loader', 'css-loader', 'sass-loader'] 
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[name].[ext]',
              outputPath: 'static/'
            }
          }
        ] 
      }

    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};


module.exports = config;