const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  app: path.resolve(__dirname, 'app'),
  node: path.resolve(__dirname, 'node_modules'),
};

const common = {
  name: 'main',
  entry: paths.src,
  output: {
    path: paths.app,
    filename: 'js/[name].js',
    // publicPath: '/',
  },
  resolve: {
    modules: [paths.src, paths.node],
    extensions: ['.json', '.js', '.css', '.yml'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        include: paths.src,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      path.resolve(paths.src, 'index.html'),
    ])
  ],
};

const development = {
  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
};

const production = {
  mode: 'production',
  devtool: 'source-map',
};

module.exports = process.env === 'production'
  ? merge(common, production)
  : merge(common, development);
