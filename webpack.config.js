const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: './dist',
    filename: 'battleship.bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html',
        query: {
          minimize: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: './node_modules/',
        query: {
          presets: ['latest'],
          plugins: [
            "transform-object-rest-spread",
            ["transform-class-properties", {"spec": true}],
            "transform-decorators-legacy"
          ],
        }
      }
    ]
  },

  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
  ]
};