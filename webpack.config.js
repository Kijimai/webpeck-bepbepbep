const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
//webpack will look through this file to configure the build and check the mode -- otherwise it defaults to production

//entry -- refers to the file that will be compiled

//output -- refers to the output file that will be created after the build is done, it can be given a path where it will be placed and a filename that you can call it after it is done building
//

// the test: /\.scss$/, object ruleset means that for every file that ends with .scss, we apply the following loaders: [style, css, sass]
module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Don't laugh challenge",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
}
