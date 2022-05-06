import Vue from 'vue';
import App from './App.vue';
import bootstrap from './bootstrap';

Vue.config.productionTip = false;

window.vm = new Vue({
    ...App,
    ...bootstrap,
}).$mount('#app');
