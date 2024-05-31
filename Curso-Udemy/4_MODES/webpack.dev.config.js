const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new TerserPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'Modes'
    })
  ]


}