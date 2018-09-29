const HtmlPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

const { rendererPath, template, target, mode, isDev } = require('./env');

module.exports = {
  entry: {
    renderer: `${rendererPath}/index.tsx`
  },
  output: {
    path: target,
    filename: '[name].js',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js'], plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'Electron',
      filename: 'index.html',
      template
    })
  ],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, use: ['awesome-typescript-loader'] }
    ]
  },
  target: 'electron-renderer',
  mode // 'production' or 'development' webpack mode
};