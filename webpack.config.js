'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "dist/newstyles.css"
    // disable: process.env.NODE_ENV === "development"
});


//I don't know what this is for really... I guess just in case you don't have a NODE_ENV declared
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development')
}

module.exports = {
    //we want debug output
  debug: false,
  //we want to get those source-maps, which help us match minified code to development code
  // devtool: 'eval-cheap-module-source-map',
  //dev middleware option
  noInfo: false,
  //entry point to build our bundle from (top level app/component)
  entry: './src/index',
  //where are we going to use this code? 'web' = browser
  target: 'web',
  //where are we putting this?
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'prodbundle.js'
  },
  watch: true,
  devServer: {
    contentBase: './dist'
  },
  //how are we resolving our modules?
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  //what plugins are we using
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    extractSass,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
            "presets": ['react','es2015'],
            "plugins": ["transform-object-rest-spread", "transform-decorators-legacy"] }
      },
      { test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  postcss: () => {
      return [
        require('postcss-smart-import'),
        require('autoprefixer')
      ];
    },
  sassLoader: {
     includePaths: [path.resolve(__dirname, "./src")]
  }
}
