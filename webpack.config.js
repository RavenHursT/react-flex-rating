const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, 'demo', 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'demo', 'build'),
		filename: 'index.js',
		sourceMapFilename: 'index.js.map',
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'demo', 'src'),
		open: true,
		clientLogLevel: 'debug',
		port: 8080,
		hotOnly: true
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'demo', 'src', 'index.html'),
			filename: 'index.html',
			inject: 'body'
		})
	]
}
