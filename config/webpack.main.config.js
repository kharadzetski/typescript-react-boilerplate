const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

const root = path.resolve('./');
const mainPath = `${root}/app/main/src`;
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	entry: {
		main: `${mainPath}/ts/main.ts`
	},
	output: {
		path: `${root}/target`,
		filename: '[name].js',
		publicPath: '/'
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: isDev && 'source-map',
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js"]
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