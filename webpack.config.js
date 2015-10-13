var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./app/main.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ]
};

