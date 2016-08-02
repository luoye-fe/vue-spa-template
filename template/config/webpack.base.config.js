import path from 'path';

import webpack from 'webpack';

import baseConfig from './base.config.js';

import env from './env.config.js';

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
		{{#lint}}
		preLoaders: [{
			test: /\.vue$/,
			loader: 'eslint',
			include: rootPath,
			exclude: path.join(rootPath, 'node_modules/')
		}, {
			test: /\.js$/,
			loader: 'eslint',
			include: rootPath,
			exclude: path.join(rootPath, 'node_modules/')
		}],
		{{/lint}}
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			loader: 'babel',
			include: rootPath,
			exclude: path.join(rootPath, 'node_modules/')
		}, {
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: 'static/img/[name].[hash:7].[ext]'
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: 'static/fonts/[name].[hash:7].[ext]'
			}
		}]
	},
	{{#lint}}
	eslint: {
		formatter: require('eslint-friendly-formatter')
	},
	{{/lint}}
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			utils: path.join(rootPath, './src/util/index.js'),
			store: path.join(rootPath, './src/vuex/index.js'),
			actions: path.join(rootPath, './src/vuex/actions/index.js')
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(env)
		})
	]
};
