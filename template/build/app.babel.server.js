// babel entrance
require('babel-core/register')({
	presets: ['es2015', 'stage-2']
});
require('babel-polyfill');

require('./app.server.js');
