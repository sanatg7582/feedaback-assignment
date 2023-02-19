const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
        entry: path.join(__dirname, "src", "index.js"),
        output: {
          path:path.resolve(__dirname, "dist"),
          filename: 'main.js',
          publicPath: '/',
        },
        devtool: "eval-source-map",
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ["style-loader", "css-loader","sass-loader"],
            },
          ]
        },
        devServer: {
            port: 3000,
            historyApiFallback: true,
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
          }),
          new Dotenv({
              path: './.env',
              safe: true, 
          }),
          new CopyPlugin({
            patterns: [
              { from: "public", to: "" },
            ],
          }),
         
        ],
}