const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public"),
    open: true,
    hot: true
  }
});