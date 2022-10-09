const {merge} = require('webpack-merge');
const config = require('./webpack.config.base');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
  mode: 'development',
  stats: 'minimal',
  output: {
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/index.ejs',
      inject: false
    })
  ]
});
