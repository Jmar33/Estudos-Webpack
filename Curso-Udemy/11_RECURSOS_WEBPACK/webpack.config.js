const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new HTMLWebpackPlugin({
      title: 'Recursos Webpack'
    })
  ],
  optimization: {
    runtimeChunk: true
  }
}