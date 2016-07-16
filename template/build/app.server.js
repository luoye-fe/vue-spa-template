import path from 'path';

import express from 'express';
import webpack from 'webpack';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import baseConfig from '../config/base.config.js';
import webpackConfig from '../config/webpack.server.config.js';

import { openUrl } from '../support/utils.js';

const port = baseConfig.server.port || 5657;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
});

devMiddleware.waitUntilValid(() => {
	openUrl('http://localhost:' + port);
});

const hotMiddleware = webpackHotMiddleware(compiler);

compiler.plugin('compilation', (compilation) => {
	compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
		hotMiddleware.publish({ action: 'reload' });
		cb();
	});
});

app.use(devMiddleware);
app.use(hotMiddleware);

const staticPath = path.join(baseConfig.build.assetsPublicPath, baseConfig.build.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Listening at http://localhost:' + port + '\n');
});
