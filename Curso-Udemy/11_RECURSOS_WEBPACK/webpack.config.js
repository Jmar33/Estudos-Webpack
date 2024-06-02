const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    test: {
      import: './src/test.js',
      dependOn: 'shared'
    },
    shared: 'lodash' 
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true
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