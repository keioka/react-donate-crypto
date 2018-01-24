var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './example/app.js',
  output: {
    path: path.join(__dirname, '../example'),
    filename: 'donate-crypto-bundle.js',
    publicPath: '/',
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
      }, {
        test: /\.(svg)?$/,
        loader: "svg-react-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/template.ejs'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../example'),
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 9999
  }
}
