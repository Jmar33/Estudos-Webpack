const path = require('path')
const { entry } = require('../6_INTEGRACAO_BULMA/webpack.config')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: '/node_modules',
        use: 'ts-loader',
      }
    ]
  }
}