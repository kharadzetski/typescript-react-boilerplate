const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader')

const { rendererPath, tsconfig, template, target, mode, isDev } = require('./env');

module.exports = {
  entry: {
    renderer: `${rendererPath}/index.tsx`
  },
  output: {
    path: target,
    filename: '[name].js',
  },

  devServer: {
    port: 3000
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'Electron',
      filename: 'index.html',
      template
    }),
    new CheckerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, use: ['awesome-typescript-loader'] },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, enforce: 'pre', use: 'source-map-loader' }
    ]
  },
  target: 'electron-renderer',
  mode // 'production' or 'development' webpack mode
};