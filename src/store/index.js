import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import VueClipboard from 'vue-clipboard2';

Vue.use(Vuex)
Vue.use(VueClipboard) // 复制

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
});

export default store;
