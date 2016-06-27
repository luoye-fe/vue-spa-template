import webpack from 'webpack';


import webpackConfig from '../config/webpack.build.config.js';


webpack(webpackConfig, (err, stats) => {
	console.log(stats);
});


