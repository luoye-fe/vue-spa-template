import webpack from 'webpack';


import baseWebpackConfig from '../config/webpack.base.config.js';


webpack(baseWebpackConfig, (err, stats) => {
	console.log(stats);
});


