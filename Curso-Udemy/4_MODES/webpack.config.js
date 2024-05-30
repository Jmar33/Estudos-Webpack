const path = require('path');
const { entry, output } = require('../2_LOADERS/webpack.config');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'


}