const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { CheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader');

const { mainPath, target, isDev } = require('./env');

module.exports = {
  entry: {
    main: `${mainPath}/main.ts`
  },
  output: {
    path: target,
    filename: '[name].js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: "file:///[absolute-resource-path]"
  },
  node: {
    __dirname: false
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  plugins: [
    new CheckerPlugin()
  ],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, use: ["awesome-typescript-loader"] },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, enforce: "pre", use: "source-map-loader" }
    ]
  },
  target: 'electron'
};
