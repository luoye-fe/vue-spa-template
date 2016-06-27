import Vue from 'vue';

import Router from 'vue-router';
Vue.use(Router);

import VueAjax from 'vue-resource';
Vue.use(VueAjax);

import httpConfig from './config/http.js';
Vue.http.options.root = httpConfig[ENV]; // ENV from webpack plugins DefinePlugin

import App from './app.vue';
import Hello from './components/hello.vue';

const router = new Router({
    saveScrollPosition: true,
    linkActiveClass: 'active'
});

router.map({
	'/': {
		name: 'hello',
		component: Hello
	}
});

router.start(App, '#app');

