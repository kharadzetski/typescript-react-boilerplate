const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const root = path.resolve('./');
const rendererPath = `${root}/app/renderer/src`;

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

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js"]
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
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
			{ test: /\.tsx?$/, use: ["ts-loader"] },
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ test: /\.js$/, enforce: "pre", use: "source-map-loader" }
		]
	}
};