const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));

module.exports = env => 
{
	env || (env = {});

	const DEBUG = !!env.DEBUG || isDevServer;

	let plugins = [new CopyWebpackPlugin([{from:'./src/index.html'}])];
	if (!DEBUG) plugins.unshift(new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}}));

	return {

		entry: './src/app/Es6Example.js',
		devtool: 'source-map',

		output: 
		{
			path: path.resolve(__dirname, 'dist'),
			filename: 'example.js'
		},

		module: 
		{
			loaders: 
			[
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: 
					{
						loader: 'babel-loader',
						options:
						{
							// presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.scss$/,
					loader: 'style-loader!css-loader!sass-loader'
				}
			]
		},

		plugins,

		devServer: 
		{
			https: false,
			host: 'localhost',
			port: '8087',
			clientLogLevel: 'none'
		},

	};
}