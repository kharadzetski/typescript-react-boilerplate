const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const rendererPath = './app/renderer/src';

module.exports = {
	entry: {
		renderer: `${rendererPath}/ts/index.tsx`,
		vendor: []
	},
	output: {
		path: './dist',
		filename: '[name].js',
		publicPath: '/'
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	}
	,
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlPlugin({
			chunks: ['renderer', 'vendor'],
			filename: 'index.html',
			template: `${rendererPath}/public/index.html`
		})
	],
	module: {
		loaders: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
			{ test: /\.tsx?$/, loaders: ["ts-loader"] }
		],

		preLoaders: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ test: /\.js$/, loader: "source-map-loader" }
		]
	}
};