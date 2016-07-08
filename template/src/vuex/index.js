/*
 * vuex store
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './state/index.js';

import actions from './actions';
import mutations from './mutations/index.js';

export default new Vuex.Store({
	state,
	mutations,
	actions,
	strict: true
});
