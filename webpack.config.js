const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'builds'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}