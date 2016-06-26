import Vue from 'vue';

import Router from 'vue-router';
Vue.use(Router);

import VueAjax from 'vue-resource';
Vue.use(VueAjax);

import httpConfig from './config/http.js';
// Vue.http.options.root = httpConfig[env];