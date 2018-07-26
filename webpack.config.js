const path = require('path');
const webpack = require('webpack');

/**
 * Determines if the given modules is external by looking for `node_modules` in
 * its context.
 * @param  {Object}  module
 * @return {Boolean}
 */
function isExternal(module) {
  const context = module.context;

  if (typeof context !== 'string') {
    return false;
  }

  return context.indexOf('node_modules') !== -1;
}

/**
 * Determines if the given modules are helper files.
 * @param  {Object}  module
 * @return {Boolean}
 */
function isHelper(module) {
  const request = module.rawRequest;

  return request == 'utilities.js';
}

module.exports = {
  entry: {
    // page: ['page.js', 'module.js'],
    app: ['polyfill.js', 'buttons.js', 'app.js'],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './assets/js'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      mangle: {screw_ie8: true},
      compress: {screw_ie8: true, warnings: false},
      comments: false,
      sourceMap: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: (module, count) =>
        (isExternal(module) || isHelper(module)) && count >= 2,
    }),
  ],
  resolve: {
    modules: [path.resolve('./source/js'), path.resolve('./node_modules')],
  },
};
