const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9002/'
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 9002
  }, 
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('@babel/preset-react')]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'Home'
    }),
    new ModuleFederationPlugin({
      name: 'HomeApp',
      filename: 'remoteEntry.js',
      exposes: {
        './HomePage': './src/Home'
      }
    })
  ]
}