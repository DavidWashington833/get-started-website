const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    "./index.html",
    "./assets/js/main.js",
    "./assets/scss/main.scss",
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
  ]
};
