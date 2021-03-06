var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',//['eval','sourcemap'],
  entry: [
    'webpack-hot-middleware/client',
    './public/javascripts/render_viewer'
  ],
  output: {
    path: path.join(__dirname, 'devel'),
    filename: 'client_bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // perf test on nodes - remove this line to get warnings back.
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("dev")
      }
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/, loader: "json-loader"
      },
      {
        test: /\.jade$/, loader: "jade-loader"
      }
    ]
  }
};
