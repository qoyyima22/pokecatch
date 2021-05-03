const { merge } = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: __dirname+'/public',
          from: '*.png',
        },
        {
          context: __dirname+'/public',
          from: '*.json',
        },
        {
          context: __dirname+'/public',
          from: '*.js',
        }
      ]
    })
  ]
});