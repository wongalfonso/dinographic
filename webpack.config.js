const { CleanWebpackPlugin } = require('cleanwebpack-plugin');
const path = require('path');

module.exports = {
  entry: './app.js',
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