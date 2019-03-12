const path = require("path");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|giv)$/,
        use: ["file-loader"]
      }
    ]
  }
};
