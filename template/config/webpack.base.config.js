import path from 'path';

import webpack from 'webpack';

import baseConfig from './base.config.js';

const rootPath = path.join(__dirname, '../');

export default {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: baseConfig.build.assetsRoot,
		publicPath: baseConfig.build.assetsPublicPath,
		filename: '[name].js'
	},
	module: {
		loaders: [{
				test: /\.vue$/,
				loader: 'vue'
			}, {
				test: /\.js$/,
				loader: 'babel',
				include: rootPath,
				exclude: /node_modules/
			}, {
				test: /\.json$/,
				loader: 'json'
			},
			// {
			// 	test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			// 	loader: 'url',
			// 	query: {
			// 		limit: 10000,
			// 		name: utils.assetsPath('img/[name].[hash:7].[ext]')
			// 	}
			// }, {
			// 	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			// 	loader: 'url',
			// 	query: {
			// 		limit: 10000,
			// 		name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
			// 	}
			// }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count) {
				return (
					module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
				)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		})
	],
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {

		}
	},
}
