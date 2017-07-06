const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

const root = path.resolve('./');
const rendererPath = `${root}/app/renderer/src`;
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	entry: {
		renderer: `${rendererPath}/ts/index.tsx`,
		vendor: ['react', 'react-dom']
	},
	output: {
		path: `${root}/dist`,
		filename: '[name].js',
		publicPath: '/'
	},

	devServer: {
		port: 3000,
		compress: true
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: isDev && 'source-map',
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js"]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlPlugin({
			chunks: ['renderer', 'vendor'],
			filename: 'index.html',
			template: `${rendererPath}/public/index.html`
		}),
		new CheckerPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendor'),
	],
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, use: ["awesome-typescript-loader"] },
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ test: /\.js$/, enforce: "pre", use: "source-map-loader" }
		]
	},
	target: 'electron-renderer'
};