import path from 'path';

import webpack from 'webpack';
import merge from 'webpack-merge';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import baseWebpackConfig from './webpack.base.config.js';

Object.keys(baseWebpackConfig.entry).forEach((name) => {
	// concat server.client.js to entry config for reload by webpack-hot-middleware
	baseWebpackConfig.entry[name] = ['./support/server.client.js'].concat(baseWebpackConfig.entry[name])
})

let webpackConfig = {};

webpackConfig = merge(baseWebpackConfig, {
	devtool: '#eval-source-map',
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
})

export default webpackConfig;
