const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
       path: path.join(__dirname, '/bundle'),
       filename: 'bundle.js'
    },
    devServer: {
       inline: true,
       port: 8080
    },
    module: {
       rules: [
          {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
       ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};