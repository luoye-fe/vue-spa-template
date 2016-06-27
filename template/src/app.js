import Vue from 'vue';

import Router from 'vue-router';
Vue.use(Router);

import VueAjax from 'vue-resource';
Vue.use(VueAjax);

import httpConfig from './config/http.js';
// Vue.http.options.root = httpConfig[env];

import App from './app.vue';
import Hello from './components/hello.vue';

const router = new Router({
    saveScrollPosition: true,
    linkActiveClass: 'active'
});

router.map({
	'/hello': {
		name: 'hello',
		component: Hello
	}
});

router.start(App, '#app');