var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'donate-crypto-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.(scss)?$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[folder]__[local]___[hash:base64:5]',
          }
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: 'postcss.config.js'
            }
          }
        }, {
          loader: 'sass-loader',
        }]
      }
    ]
  }
}
