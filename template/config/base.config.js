import path from 'path';

const pwd = __dirname;

export default {
	server: {
		port: 9090
	},
	build: {
		view: path.join(pwd, '../dist/index.html'),
		assetsRoot: path.join(pwd, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
	}
}