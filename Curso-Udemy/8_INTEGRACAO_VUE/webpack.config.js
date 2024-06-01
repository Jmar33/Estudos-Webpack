const { VueLoaderPlugin } = require('vue-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  mode: 'development',
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({}),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
  ],
  resolve: {
    alias: {
      'Vue': 'vue/dist/vue.esm-bundler.js',
    },
    extensions: ['.*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true
  }
}