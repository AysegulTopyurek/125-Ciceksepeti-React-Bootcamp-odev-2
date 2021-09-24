const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/, //Scanning files ending in js
        exclude: /node_modules/, //except node modules
        use: {
          loader: "babel-loader",

          options: {
            presets: ["@babel/preset-env"], //babel for clarity in browsers
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
