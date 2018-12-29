var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  mode: "development",
  entry: __dirname + '/src/app/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};
