const path = require("path");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
    open: true,
  },
  module: {
    rules: [
      {
        // Preprocess your css files
        // you can add additional loaders here (e.g. sass/less etc.)
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: [["import", {
              "libraryName": "antd",
              "libraryDirectory": "es",   // default: lib
              "style": "css",
            }],
            ["@babel/plugin-proposal-class-properties"],
          ],
          }
        }
      },
      {
        test: /\.(png|svg|jpg|giv)$/,
        use: ["file-loader"]
      },
    ]
  }
};
